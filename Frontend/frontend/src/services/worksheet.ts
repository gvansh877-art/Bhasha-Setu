/**
 * Bhasha Setu — Worksheet Generator service.
 *
 * Endpoint: POST {base}/api/worksheet/generate
 *
 * The request body is built from the LIVE /openapi.json schema, so whatever
 * the backend actually declares (property names, types, enums, required
 * flags) drives the payload. When the probe is unreachable we fall back to
 * the documented prototype shape:
 *
 *   {
 *     "topic": "Addition",
 *     "class_level": "Class 2",
 *     "subject": "Mathematics",
 *     "educational_context": "Primary-school FLN classroom",
 *     "num_questions": 10
 *   }
 *
 * Extra fields such as a question count are only sent when the schema
 * declares a matching property (or when we have no schema) — we never push
 * unknown fields at a strict backend.
 *
 * No content is invented. If the response cannot be mapped to a worksheet
 * we return null and the UI shows a friendly error, never raw JSON.
 */

import {
  ApiError,
  TEACHER_MESSAGES,
  buildCorePayload,
  coerce,
  lookupArray,
  lookupString,
  loadOperationSchema,
  matchKey,
  postJson,
  toItems,
  type ExtraField,
  type JsonObject,
  type OperationSchema,
} from "./schema";

export const WORKSHEET_GENERATE_PATH = "/api/worksheet/generate";

export type SubjectId = "math" | "language" | "evs";

export const SUBJECT_DISPLAY: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export type WorksheetRequest = {
  classLevel: number;
  subject: SubjectId;
  topic: string;
  /** requested only; the backend decides what it actually returns */
  questionCount: number;
};

export type WorksheetQuestion = {
  text: string;
  type: string;
  options: string[];
  answer: string;
};

export type WorksheetSection = {
  heading: string;
  questions: WorksheetQuestion[];
};

export type Worksheet = {
  title: string;
  instructions: string;
  classLevel: number;
  subject: string;
  topic: string;
  questions: WorksheetQuestion[];
  sections: WorksheetSection[];
  answerKey: { question: string; answer: string }[];
};

/* ── request ────────────────────────────────────────────────────────────── */

export const QUESTION_COUNT_CANDIDATES = [
  "num_questions",
  "numquestions",
  "number_of_questions",
  "question_count",
  "questioncount",
  "no_of_questions",
  "n_questions",
  "count",
];

export function buildWorksheetPayload(
  request: WorksheetRequest,
  schema: OperationSchema | null,
): JsonObject {
  const extras: ExtraField[] = [
    {
      candidates: QUESTION_COUNT_CANDIDATES,
      value: request.questionCount,
      fallbackKey: "num_questions",
    },
  ];
  return buildCorePayload(
    {
      classLevel: request.classLevel,
      subject: SUBJECT_DISPLAY[request.subject],
      topic: request.topic,
    },
    schema,
    extras,
  );
}

/* ── response normalization ─────────────────────────────────────────────── */

const QUESTION_TEXT_KEYS = [
  "question",
  "question_text",
  "questiontext",
  "text",
  "prompt",
  "q",
];
const ANSWER_KEYS = ["answer", "correct_answer", "correctanswer", "solution", "ans"];
const OPTIONS_KEYS = ["options", "choices", "alternatives", "answers"];
const TYPE_KEYS = ["type", "question_type", "questiontype", "qtype"];

function normalizeOptions(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((v) => {
        if (v == null) return "";
        if (typeof v === "string") return v.trim();
        if (typeof v === "object") {
          const obj = v as JsonObject;
          const text =
            typeof obj.text === "string"
              ? obj.text
              : typeof obj.option === "string"
                ? obj.option
                : typeof obj.label === "string"
                  ? obj.label
                  : "";
          return text.trim();
        }
        return String(v).trim();
      })
      .filter(Boolean);
  }
  return [];
}

function normalizeQuestion(value: unknown): WorksheetQuestion | null {
  if (value == null) return null;

  if (typeof value === "string") {
    const text = value.trim();
    return text ? { text, type: "", options: [], answer: "" } : null;
  }
  if (typeof value !== "object" || Array.isArray(value)) return null;

  const obj = value as JsonObject;
  const text = lookupString(obj, QUESTION_TEXT_KEYS);
  if (!text) return null;

  const options = (() => {
    for (const key of OPTIONS_KEYS) {
      const direct = obj[key];
      if (Array.isArray(direct)) return normalizeOptions(direct);
      for (const [k, v] of Object.entries(obj)) {
        if (k.toLowerCase() === key && Array.isArray(v)) return normalizeOptions(v);
      }
    }
    for (const [k, v] of Object.entries(obj)) {
      if (k.toLowerCase().includes("option") && Array.isArray(v)) {
        return normalizeOptions(v);
      }
    }
    return [];
  })();

  const answer = lookupString(obj, ANSWER_KEYS) ?? "";
  const type = lookupString(obj, TYPE_KEYS) ?? "";

  return { text, type, options, answer };
}

const QUESTIONS_KEYS = [
  "questions",
  "worksheet_questions",
  "worksheetquestions",
  "question_list",
  "items",
  "question_bank",
  "questionbank",
];

const SECTION_KEYS = ["sections", "parts", "groups", "blocks"];

export function normalizeWorksheet(
  payload: unknown,
  request: WorksheetRequest,
): Worksheet | null {
  if (payload == null) return null;

  const root: unknown = payload;
  const obj = typeof root === "object" && !Array.isArray(root) ? (root as JsonObject) : {};

  // ── sections ───────────────────────────────────────────────────────────
  const sections: WorksheetSection[] = [];
  const rawSections = lookupArray(obj, SECTION_KEYS);
  if (rawSections) {
    rawSections.forEach((section) => {
      if (!section || typeof section !== "object" || Array.isArray(section)) return;
      const sObj = section as JsonObject;
      const heading =
        lookupString(sObj, ["heading", "title", "name", "section", "section_title"]) ?? "";
      const inner = lookupArray(sObj, QUESTIONS_KEYS) ?? [];
      const questions = inner
        .map(normalizeQuestion)
        .filter((q): q is WorksheetQuestion => q !== null);
      if (questions.length) sections.push({ heading, questions });
    });
  }

  // ── top-level questions ────────────────────────────────────────────────
  const rawQuestions = lookupArray(obj, QUESTIONS_KEYS) ?? [];
  const questions = rawQuestions
    .map(normalizeQuestion)
    .filter((q): q is WorksheetQuestion => q !== null);

  // ── answer key ─────────────────────────────────────────────────────────
  const answerKey: { question: string; answer: string }[] = [];
  const rawAnswers = lookupArray(obj, ["answer_key", "answerkey", "answers", "solutions"]);
  if (rawAnswers) {
    rawAnswers.forEach((entry) => {
      if (entry == null) return;
      if (typeof entry === "string") {
        answerKey.push({ question: "", answer: entry.trim() });
        return;
      }
      if (typeof entry === "object" && !Array.isArray(entry)) {
        const e = entry as JsonObject;
        const q = lookupString(e, QUESTION_TEXT_KEYS) ?? "";
        const a = lookupString(e, ANSWER_KEYS) ?? "";
        if (q || a) answerKey.push({ question: q, answer: a });
      }
    });
  }

  const totalQuestions =
    questions.length + sections.reduce((sum, s) => sum + s.questions.length, 0);

  // Nothing mappable → caller shows a friendly error, never raw JSON.
  if (totalQuestions === 0 && answerKey.length === 0) return null;

  const classRaw = lookupString(obj, ["class_level", "classlevel", "class", "grade"]);
  const parsedClass = Number.parseInt(String(classRaw ?? "").replace(/\D/g, ""), 10);

  const title =
    lookupString(obj, ["worksheet_title", "worksheettitle", "title", "name", "heading"]) ??
    request.topic;

  return {
    title,
    instructions:
      lookupString(obj, ["instructions", "note", "guidelines", "direction", "directions"]) ??
      "",
    classLevel: Number.isFinite(parsedClass)
      ? Math.min(5, Math.max(1, parsedClass))
      : request.classLevel,
    subject: lookupString(obj, ["subject"]) ?? SUBJECT_DISPLAY[request.subject],
    topic: lookupString(obj, ["topic"]) ?? request.topic,
    questions,
    sections,
    answerKey,
  };
}

/* ── the call ───────────────────────────────────────────────────────────── */

export async function generateWorksheet(
  request: WorksheetRequest,
  signal?: AbortSignal,
): Promise<Worksheet> {
  const schema = await loadOperationSchema(WORKSHEET_GENERATE_PATH);
  const payload = buildWorksheetPayload(request, schema);
  const raw = await postJson(WORKSHEET_GENERATE_PATH, payload, signal);
  const worksheet = normalizeWorksheet(raw, request);

  if (!worksheet) {
    throw new ApiError(
      "unexpected-response",
      200,
      TEACHER_MESSAGES.unexpectedResponse,
    );
  }
  return worksheet;
}

/** Plain-text rendering of a real worksheet (used by copy/download/print). */
export function worksheetToPlainText(worksheet: Worksheet): string {
  const lines: string[] = [
    "भाषा सेतु — कार्यपत्रिका",
    worksheet.title,
    `कक्षा ${worksheet.classLevel} · ${worksheet.subject}`,
    "",
  ];

  if (worksheet.instructions) {
    lines.push(`निर्देश: ${worksheet.instructions}`, "");
  }

  let n = 0;
  worksheet.questions.forEach((q) => {
    n += 1;
    lines.push(`${n}. ${q.text}`);
    q.options.forEach((opt, i) =>
      lines.push(`   ${String.fromCharCode(65 + i)}. ${opt}`),
    );
    lines.push("");
  });

  worksheet.sections.forEach((section) => {
    if (section.heading) lines.push(`— ${section.heading} —`);
    section.questions.forEach((q) => {
      n += 1;
      lines.push(`${n}. ${q.text}`);
      q.options.forEach((opt, i) =>
        lines.push(`   ${String.fromCharCode(65 + i)}. ${opt}`),
      );
      lines.push("");
    });
    lines.push("");
  });

  const key = worksheet.answerKey.length
    ? worksheet.answerKey
    : [
        ...worksheet.questions,
        ...worksheet.sections.flatMap((s) => s.questions),
      ].map((q) => ({ question: q.text, answer: q.answer }));

  const usableKey = key.filter((k) => k.answer);
  if (usableKey.length) {
    lines.push("उत्तरमाला (शिक्षक के लिए)");
    usableKey.forEach((k, i) => lines.push(`${i + 1}. ${k.answer}`));
  }

  return lines.join("\n");
}

/** Helper kept for symmetry with the lesson service. */
export const worksheetHelpers = { coerce, matchKey, toItems };
