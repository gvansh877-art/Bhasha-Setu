/**
 * Bhasha Setu — Flashcard Generator service.
 *
 * Endpoint: POST {base}/api/flashcard/generate
 *
 * The request body is built from the LIVE /openapi.json schema, so whatever
 * the backend actually declares drives the payload. When the probe is
 * unreachable we fall back to the documented prototype shape:
 *
 *   {
 *     "topic": "Addition",
 *     "class_level": "Class 2",
 *     "subject": "Mathematics",
 *     "educational_context": "Primary-school FLN classroom",
 *     "num_cards": 10
 *   }
 *
 * A card-count field is only sent when the schema declares a matching
 * property (or when we have no schema) — we never push unknown fields.
 *
 * No content is invented. If the response cannot be mapped to flashcards we
 * return null and the UI shows a friendly error, never raw JSON.
 */

import {
  ApiError,
  TEACHER_MESSAGES,
  buildCorePayload,
  lookupArray,
  lookupString,
  loadOperationSchema,
  postJson,
  type ExtraField,
  type JsonObject,
  type OperationSchema,
} from "./schema";

export const FLASHCARD_GENERATE_PATH = "/api/flashcard/generate";

export type SubjectId = "math" | "language" | "evs";

export const SUBJECT_DISPLAY: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export type FlashcardRequest = {
  classLevel: number;
  subject: SubjectId;
  topic: string;
  /** requested only; the backend decides what it actually returns */
  cardCount: number;
};

export type Flashcard = {
  front: string;
  back: string;
  /** extra fields the backend may return (e.g. romanisation) */
  note: string;
};

export type FlashcardSet = {
  title: string;
  classLevel: number;
  subject: string;
  topic: string;
  cards: Flashcard[];
};

/* ── request ────────────────────────────────────────────────────────────── */

export const CARD_COUNT_CANDIDATES = [
  "num_cards",
  "numcards",
  "number_of_cards",
  "card_count",
  "cardcount",
  "no_of_cards",
  "n_cards",
  "count",
  "limit",
];

export function buildFlashcardPayload(
  request: FlashcardRequest,
  schema: OperationSchema | null,
): JsonObject {
  const extras: ExtraField[] = [
    {
      candidates: CARD_COUNT_CANDIDATES,
      value: request.cardCount,
      fallbackKey: "num_cards",
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

const CARDS_KEYS = [
  "flashcards",
  "flash_cards",
  "flashcards_set",
  "cards",
  "items",
  "deck",
];

const FRONT_KEYS = [
  "front",
  "question",
  "term",
  "word",
  "prompt",
  "concept",
  "hindi",
  "text",
  "q",
];

const BACK_KEYS = [
  "back",
  "answer",
  "definition",
  "meaning",
  "explanation",
  "response",
  "santhali",
  "translation",
  "a",
];

const NOTE_KEYS = ["roman", "romanisation", "hint", "example", "pronunciation", "note"];

function pickField(obj: JsonObject, keys: string[], avoid?: string): string {
  for (const key of keys) {
    for (const [k, v] of Object.entries(obj)) {
      if (k.toLowerCase() !== key) continue;
      if (typeof v === "string" && v.trim()) return v.trim();
      if (typeof v === "number") return String(v);
    }
  }
  for (const key of keys) {
    for (const [k, v] of Object.entries(obj)) {
      if (!k.toLowerCase().includes(key)) continue;
      if (typeof v === "string" && v.trim() && v.trim() !== avoid) return v.trim();
      if (typeof v === "number") return String(v);
    }
  }
  return "";
}

/** "Q | A", "Q — A", "Q: A" → front/back; otherwise front only. */
function splitStringCard(raw: string): Flashcard {
  const text = raw.trim();
  const match =
    text.match(/^(.*?)\s*[|｜]\s*(.+)$/) ??
    text.match(/^(.*?)\s+[—–]\s+(.+)$/s) ??
    text.match(/^(.*?)\s*:\s*(.+)$/s);
  if (match && match[1].trim() && match[2].trim()) {
    return { front: match[1].trim(), back: match[2].trim(), note: "" };
  }
  return { front: text, back: "", note: "" };
}

export function normalizeFlashcards(
  payload: unknown,
  request: FlashcardRequest,
): FlashcardSet | null {
  if (payload == null) return null;

  let root: unknown = payload;
  if (typeof root === "string") {
    const lines = root
      .split(/\r?\n+/)
      .map((l) => l.trim())
      .filter(Boolean);
    const cards = lines.map(splitStringCard);
    if (!cards.length) return null;
    return {
      title: request.topic,
      classLevel: request.classLevel,
      subject: SUBJECT_DISPLAY[request.subject],
      topic: request.topic,
      cards,
    };
  }

  const obj = (typeof root === "object" && !Array.isArray(root) ? root : {}) as JsonObject;
  let rawCards = lookupArray(obj, CARDS_KEYS);

  // an array at the very top level is also acceptable
  if (!rawCards && Array.isArray(payload)) rawCards = payload as unknown[];
  if (!rawCards) return null;

  const cards: Flashcard[] = [];
  rawCards.forEach((entry) => {
    if (entry == null) return;
    if (typeof entry === "string") {
      const card = splitStringCard(entry);
      if (card.front) cards.push(card);
      return;
    }
    if (typeof entry !== "object" || Array.isArray(entry)) return;

    const e = entry as JsonObject;
    const front = pickField(e, FRONT_KEYS);
    if (!front) return;

    // avoid reusing the same value for both faces
    const backCandidate = pickField(e, BACK_KEYS, front);
    const back = backCandidate && backCandidate !== front ? backCandidate : "";
    const note = pickField(e, NOTE_KEYS, front);

    cards.push({ front, back, note: note && note !== back ? note : "" });
  });

  if (!cards.length) return null;

  const classRaw = lookupString(obj, ["class_level", "classlevel", "class", "grade"]);
  const parsedClass = Number.parseInt(String(classRaw ?? "").replace(/\D/g, ""), 10);

  return {
    title:
      lookupString(obj, [
        "flashcard_title",
        "flashcardtitle",
        "deck_title",
        "title",
        "name",
        "set_title",
      ]) ?? request.topic,
    classLevel: Number.isFinite(parsedClass)
      ? Math.min(5, Math.max(1, parsedClass))
      : request.classLevel,
    subject: lookupString(obj, ["subject"]) ?? SUBJECT_DISPLAY[request.subject],
    topic: lookupString(obj, ["topic"]) ?? request.topic,
    cards,
  };
}

/* ── the call ───────────────────────────────────────────────────────────── */

export async function generateFlashcards(
  request: FlashcardRequest,
  signal?: AbortSignal,
): Promise<FlashcardSet> {
  const schema = await loadOperationSchema(FLASHCARD_GENERATE_PATH);
  const payload = buildFlashcardPayload(request, schema);
  const raw = await postJson(FLASHCARD_GENERATE_PATH, payload, signal);
  const set = normalizeFlashcards(raw, request);

  if (!set) {
    throw new ApiError(
      "unexpected-response",
      200,
      TEACHER_MESSAGES.unexpectedResponse,
    );
  }
  return set;
}

/** Plain-text rendering of real cards (copy / download). */
export function flashcardsToPlainText(set: FlashcardSet): string {
  const lines: string[] = [
    "भाषा सेतु — फ़्लैशकार्ड",
    set.title,
    `कक्षा ${set.classLevel} · ${set.subject}`,
    "",
  ];
  set.cards.forEach((card, i) => {
    lines.push(`${i + 1}. ${card.front}`);
    if (card.back) lines.push(`   → ${card.back}`);
    if (card.note) lines.push(`   (${card.note})`);
    lines.push("");
  });
  return lines.join("\n");
}
