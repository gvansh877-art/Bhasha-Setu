/**
 * Bhasha Setu — Lesson Generator service.
 *
 * Endpoint: POST {base}/api/lesson/generate
 * The request body is derived from the live /openapi.json schema; see
 * services/schema.ts for the shared discovery + shaping machinery.
 *
 * No content is ever invented: if the response cannot be understood we
 * return null and the caller shows a friendly error instead of raw JSON.
 */

import {
  ApiError,
  TEACHER_MESSAGES,
  buildCorePayload,
  flatten,
  lookupAliases,
  loadOperationSchema,
  postJson,
  toItems,
  type JsonObject,
} from "./schema";

export { getApiBaseUrl, setApiBaseUrl, ApiError, TEACHER_MESSAGES } from "./schema";

export const LESSON_GENERATE_PATH = "/api/lesson/generate";

export type SubjectId = "math" | "language" | "evs";

export const SUBJECT_DISPLAY: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export type LessonRequest = {
  classLevel: number;
  subject: SubjectId;
  topic: string;
};

export type LessonContent = {
  topic: string;
  classLevel: number;
  subject: string;
  learningObjective: string[];
  simpleExplanation: string[];
  classroomActivity: string[];
  practiceQuestions: string[];
  shortAssessment: string[];
};

const ALIASES = {
  learningObjective: [
    "learning_objective",
    "learningobjective",
    "learning_objectives",
    "objectives",
    "objective",
    "learning_goal",
    "goal",
  ],
  simpleExplanation: [
    "simple_explanation",
    "simpleexplanation",
    "explanation",
    "content",
    "lesson_content",
    "body",
    "description",
    "concept",
  ],
  classroomActivity: [
    "classroom_activity",
    "classroomactivity",
    "activity",
    "activities",
    "class_activity",
  ],
  practiceQuestions: [
    "practice_questions",
    "practicequestions",
    "questions",
    "practice",
    "exercises",
  ],
  shortAssessment: [
    "short_assessment",
    "shortassessment",
    "assessment",
    "evaluation",
    "exit_ticket",
  ],
} as const;

export function normalizeLesson(
  payload: unknown,
  request: LessonRequest,
): LessonContent | null {
  if (payload == null) return null;
  if (typeof payload === "string") {
    const items = toItems(payload);
    return items.length
      ? {
          topic: request.topic,
          classLevel: request.classLevel,
          subject: SUBJECT_DISPLAY[request.subject],
          learningObjective: [],
          simpleExplanation: items,
          classroomActivity: [],
          practiceQuestions: [],
          shortAssessment: [],
        }
      : null;
  }

  const flat = new Map<string, unknown>();
  flatten(payload, flat);

  const topicRaw = flat.get("topic") ?? flat.get("title") ?? flat.get("lesson_topic");
  const classRaw = flat.get("class_level") ?? flat.get("classlevel");
  const parsedClass = Number.parseInt(String(classRaw ?? "").replace(/\D/g, ""), 10);

  const lesson: LessonContent = {
    topic: String(topicRaw ?? request.topic).trim(),
    classLevel: Number.isFinite(parsedClass)
      ? Math.min(5, Math.max(1, parsedClass))
      : request.classLevel,
    subject: String(flat.get("subject") ?? SUBJECT_DISPLAY[request.subject]),
    learningObjective: lookupAliases(flat, ALIASES.learningObjective),
    simpleExplanation: lookupAliases(flat, ALIASES.simpleExplanation),
    classroomActivity: lookupAliases(flat, ALIASES.classroomActivity),
    practiceQuestions: lookupAliases(flat, ALIASES.practiceQuestions),
    shortAssessment: lookupAliases(flat, ALIASES.shortAssessment),
  };

  const total =
    lesson.learningObjective.length +
    lesson.simpleExplanation.length +
    lesson.classroomActivity.length +
    lesson.practiceQuestions.length +
    lesson.shortAssessment.length;

  return total > 0 ? lesson : null;
}

export async function generateLesson(
  request: LessonRequest,
  signal?: AbortSignal,
): Promise<LessonContent> {
  const schema = await loadOperationSchema(LESSON_GENERATE_PATH);
  const payload: JsonObject = buildCorePayload(
    {
      classLevel: request.classLevel,
      subject: SUBJECT_DISPLAY[request.subject],
      topic: request.topic,
    },
    schema,
  );

  const raw = await postJson(LESSON_GENERATE_PATH, payload, signal);
  const lesson = normalizeLesson(raw, request);

  if (!lesson) {
    throw new ApiError(
      "unexpected-response",
      200,
      TEACHER_MESSAGES.unexpectedResponse,
    );
  }
  return lesson;
}
