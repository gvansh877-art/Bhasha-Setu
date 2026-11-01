/**
 * BHASHA SETU — Centralized API service layer.
 * Real backend integration — no mock, no fake data.
 *
 * Endpoints:
 * - POST /api/translation/translate
 * - POST /api/lesson/generate
 * - POST /api/worksheet/generate
 * - POST /api/flashcard/generate
 * - POST /api/speech/translate
 * - POST /api/speech/voice-translate
 * - POST /api/speech/text-to-speech
 * - GET  /api/speech/status
 * - GET  /api/health
 */

export const DEFAULT_API_BASE_URL = "http://127.0.0.1:8000";
export const EDUCATIONAL_CONTEXT = "Primary-school FLN classroom";

const LS_BASE_KEY = "bhasha-setu:api-base-url";


// -------------------- API BASE URL --------------------

export function getApiBaseUrl(): string {
  let base = DEFAULT_API_BASE_URL;

  const env =
    (import.meta.env?.VITE_API_BASE_URL as string | undefined) ?? "";

  if (env.trim()) {
    base = env.trim();
  }

  try {
    const stored = window.localStorage.getItem(LS_BASE_KEY);

    if (stored && stored.trim()) {
      base = stored.trim();
    }
  } catch {}

  return base.replace(/\/+$/, "");
}


export function setApiBaseUrl(url: string): void {
  try {
    if (url.trim()) {
      window.localStorage.setItem(LS_BASE_KEY, url.trim());
    } else {
      window.localStorage.removeItem(LS_BASE_KEY);
    }
  } catch {}
}


// -------------------- API ERROR --------------------

export type ApiErrorKind =
  | "network"
  | "invalid-request"
  | "server"
  | "unexpected-response"
  | "timeout"
  | "unknown";


export class ApiError extends Error {
  kind: ApiErrorKind;
  status: number;

  constructor(
    kind: ApiErrorKind,
    status: number,
    message: string
  ) {
    super(message);

    this.name = "ApiError";
    this.kind = kind;
    this.status = status;
  }
}


// -------------------- TEACHER MESSAGES --------------------

export const TEACHER_MESSAGES = {
  network:
    "Unable to connect to the BHASHA SETU backend. Please check your connection and ensure the backend is running.",

  timeout:
    "The BHASHA SETU service is taking too long to respond. Please try again in a moment.",

  server:
    "BHASHA SETU service is temporarily unavailable. Please try again.",

  invalidRequest:
    "Some details couldn't be accepted. Please check your input and try again.",

  unexpectedResponse:
    "We received an unexpected response from the backend. Please try again.",

  unknown:
    "Something went wrong. Please try again.",

  audioFailed:
    "Audio could not be generated. You can still view the text.",
} as const;


export const TIMEOUT_MS = 120_000;


// ============================================================
// TYPES MATCHING BACKEND SCHEMAS
// ============================================================


// -------------------- Translation --------------------

export type TranslationRequest = {
  text: string;
  source_language?: string;
  target_language: string;
  educational_context?: string | null;
};


export type TranslationResponse = {
  source_text: string;
  translated_text: string;
  source_language: string;
  target_language: string;
  audio_base64: string;
  audio_content_type: string;
};


// -------------------- Lesson --------------------

export type LessonRequest = {
  topic: string;
  class_level: string;
  subject: string;
  educational_context?: string | null;
};


export type LessonResponse = {
  topic: string;
  class_level: string;
  subject: string;
  lesson_content: string;
  santhali_lesson_content: string;
  audio_base64: string;
  audio_content_type: string;
};


// -------------------- Worksheet --------------------

export type WorksheetQuestion = {
  question_number: number;
  question_type: string;
  question_text: string;
};


export type WorksheetContent = {
  title: string;
  instructions: string;
  questions: WorksheetQuestion[];
};


export type WorksheetRequest = {
  topic: string;
  class_level: string;
  subject: string;
  number_of_questions: number;
  educational_context?: string | null;
};


export type WorksheetResponse = {
  topic: string;
  class_level: string;
  subject: string;
  number_of_questions: number;
  hindi_worksheet: WorksheetContent;
  santhali_worksheet: WorksheetContent;
  audio_base64: string;
  audio_content_type: string;
};


// -------------------- Flashcards --------------------

/*
 * IMPORTANT:
 * Current backend returns:
 *
 * {
 *   "topic": "...",
 *   "class_level": "...",
 *   "subject": "...",
 *   "flashcards": [
 *      {
 *        "question": "...",
 *        "answer": "...",
 *        "santhali_question": "...",
 *        "santhali_answer": "...",
 *        "audio_base64": null,
 *        "audio_content_type": null
 *      }
 *   ]
 * }
 *
 * Therefore frontend types must match this structure.
 */

export type Flashcard = {
  question: string;
  answer: string;
  santhali_question: string;
  santhali_answer: string;

  // TTS is currently bypassed for flashcards.
  audio_base64?: string | null;
  audio_content_type?: string | null;
};


export type FlashcardRequest = {
  topic: string;
  class_level: string;
  subject: string;
  number_of_cards?: number;
  educational_context?: string | null;
};


export type FlashcardResponse = {
  topic: string;
  class_level: string;
  subject: string;
  flashcards: Flashcard[];
};


// -------------------- Speech --------------------

export type SpeechTranslationRequest = {
  text: string;
  source_language: string;
  target_language: string;
  educational_context?: string | null;
};


export type SpeechTranslationResponse = {
  source_text: string;
  translated_text: string;
  source_language: string;
  target_language: string;
};


export type TextToSpeechRequest = {
  text: string;
  language: string;
};


export type VoiceTranslationResponse = {
  transcribed_text: string;
  translated_text: string;
  source_language: string;
  target_language: string;
  audio_base64: string;
  audio_content_type: string;
};


export type SpeechStatusResponse = {
  available: boolean;
  message: string;
  transcription?: boolean;
  translation?: boolean;
  text_to_speech?: boolean;
  source_language?: string;
  target_language?: string;
  audio_format?: string;
};


// -------------------- Health --------------------

export type HealthResponse = {
  status: string;
  service: string;
  version: string;
};


// ============================================================
// HELPERS
// ============================================================

async function handleResponseError(
  res: Response
): Promise<never> {
  let detail = "";

  try {
    const text = await res.text();

    try {
      const json = JSON.parse(text);

      detail =
        json.detail ||
        json.message ||
        text;
    } catch {
      detail = text;
    }
  } catch {}


  if (
    res.status === 400 ||
    res.status === 422
  ) {
    throw new ApiError(
      "invalid-request",
      res.status,
      detail || TEACHER_MESSAGES.invalidRequest
    );
  }


  if (res.status >= 500) {
    throw new ApiError(
      "server",
      res.status,
      detail || TEACHER_MESSAGES.server
    );
  }


  throw new ApiError(
    "server",
    res.status,
    detail || TEACHER_MESSAGES.server
  );
}


// ============================================================
// POST JSON
// ============================================================

async function postJson<T>(
  path: string,
  body: unknown,
  signal?: AbortSignal
): Promise<T> {

  const url = `${getApiBaseUrl()}${path}`;

  const controller = new AbortController();

  const timer = window.setTimeout(
    () => controller.abort(),
    TIMEOUT_MS
  );

  const onAbort = () => controller.abort();

  signal?.addEventListener(
    "abort",
    onAbort,
    { once: true }
  );


  let response: Response;


  try {

    response = await fetch(
      url,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(body),

        signal: controller.signal,
      }
    );

  } catch {

    const timedOut =
      controller.signal.aborted &&
      !signal?.aborted;


    if (signal?.aborted) {
      throw new ApiError(
        "network",
        499,
        "cancelled"
      );
    }


    throw new ApiError(
      timedOut
        ? "timeout"
        : "network",

      0,

      timedOut
        ? TEACHER_MESSAGES.timeout
        : TEACHER_MESSAGES.network
    );

  } finally {

    window.clearTimeout(timer);

    signal?.removeEventListener(
      "abort",
      onAbort
    );
  }


  if (!response.ok) {
    await handleResponseError(response);
  }


  try {

    return (await response.json()) as T;

  } catch {

    throw new ApiError(
      "unexpected-response",
      response.status,
      TEACHER_MESSAGES.unexpectedResponse
    );
  }
}


// ============================================================
// GET JSON
// ============================================================

async function getJson<T>(
  path: string,
  signal?: AbortSignal
): Promise<T> {

  const url = `${getApiBaseUrl()}${path}`;

  const controller = new AbortController();

  const timer = window.setTimeout(
    () => controller.abort(),
    15000
  );

  const onAbort = () => controller.abort();

  signal?.addEventListener(
    "abort",
    onAbort,
    { once: true }
  );


  let response: Response;


  try {

    response = await fetch(
      url,
      {
        method: "GET",

        headers: {
          Accept: "application/json",
        },

        signal: controller.signal,
      }
    );

  } catch {

    const timedOut =
      controller.signal.aborted &&
      !signal?.aborted;


    if (signal?.aborted) {
      throw new ApiError(
        "network",
        499,
        "cancelled"
      );
    }


    throw new ApiError(
      timedOut
        ? "timeout"
        : "network",

      0,

      timedOut
        ? TEACHER_MESSAGES.timeout
        : TEACHER_MESSAGES.network
    );

  } finally {

    window.clearTimeout(timer);

    signal?.removeEventListener(
      "abort",
      onAbort
    );
  }


  if (!response.ok) {
    await handleResponseError(response);
  }


  try {

    return (await response.json()) as T;

  } catch {

    throw new ApiError(
      "unexpected-response",
      response.status,
      TEACHER_MESSAGES.unexpectedResponse
    );
  }
}


// ============================================================
// API FUNCTIONS
// ============================================================


// -------------------- Translation --------------------

export async function translateText(
  req: TranslationRequest,
  signal?: AbortSignal
): Promise<TranslationResponse> {

  return postJson<TranslationResponse>(
    "/api/translation/translate",

    {
      text: req.text,

      source_language:
        req.source_language || "hi",

      target_language:
        req.target_language,

      educational_context:
        req.educational_context ||
        EDUCATIONAL_CONTEXT,
    },

    signal
  );
}


// -------------------- Lesson --------------------

export async function generateLesson(
  req: LessonRequest,
  signal?: AbortSignal
): Promise<LessonResponse> {

  return postJson<LessonResponse>(
    "/api/lesson/generate",

    {
      topic: req.topic,

      class_level:
        req.class_level,

      subject:
        req.subject,

      educational_context:
        req.educational_context ||
        EDUCATIONAL_CONTEXT,
    },

    signal
  );
}


// -------------------- Worksheet --------------------

export async function generateWorksheet(
  req: WorksheetRequest,
  signal?: AbortSignal
): Promise<WorksheetResponse> {

  return postJson<WorksheetResponse>(
    "/api/worksheet/generate",

    {
      topic: req.topic,

      class_level:
        req.class_level,

      subject:
        req.subject,

      number_of_questions:
        req.number_of_questions,

      educational_context:
        req.educational_context ||
        EDUCATIONAL_CONTEXT,
    },

    signal
  );
}


// -------------------- Flashcards --------------------

export async function generateFlashcards(
  req: FlashcardRequest,
  signal?: AbortSignal
): Promise<FlashcardResponse> {

  return postJson<FlashcardResponse>(
    "/api/flashcard/generate",

    {
      topic: req.topic,

      class_level:
        req.class_level,

      subject:
        req.subject,

      number_of_cards:
        req.number_of_cards ?? 6,

      educational_context:
        req.educational_context ||
        EDUCATIONAL_CONTEXT,
    },

    signal
  );
}


// -------------------- Speech Text Translation --------------------

export async function translateSpeechText(
  req: SpeechTranslationRequest,
  signal?: AbortSignal
): Promise<SpeechTranslationResponse> {

  return postJson<SpeechTranslationResponse>(
    "/api/speech/translate",

    {
      text: req.text,

      source_language:
        req.source_language,

      target_language:
        req.target_language,

      educational_context:
        req.educational_context ||
        EDUCATIONAL_CONTEXT,
    },

    signal
  );
}


// -------------------- Voice Translation --------------------

export async function translateVoice(
  audioBlob: Blob,
  filename: string,
  source_language: string,
  target_language: string,
  educational_context?: string | null,
  signal?: AbortSignal
): Promise<VoiceTranslationResponse> {

  const url =
    `${getApiBaseUrl()}/api/speech/voice-translate`;

  const controller =
    new AbortController();

  const timer =
    window.setTimeout(
      () => controller.abort(),
      TIMEOUT_MS
    );

  const onAbort =
    () => controller.abort();


  signal?.addEventListener(
    "abort",
    onAbort,
    { once: true }
  );


  const form =
    new FormData();

  form.append(
    "audio",
    audioBlob,
    filename
  );

  form.append(
    "source_language",
    source_language
  );

  form.append(
    "target_language",
    target_language
  );


  if (educational_context) {

    form.append(
      "educational_context",
      educational_context
    );
  }


  let response: Response;


  try {

    response = await fetch(
      url,
      {
        method: "POST",

        body: form,

        signal:
          controller.signal,
      }
    );

  } catch {

    const timedOut =
      controller.signal.aborted &&
      !signal?.aborted;


    if (signal?.aborted) {

      throw new ApiError(
        "network",
        499,
        "cancelled"
      );
    }


    throw new ApiError(
      timedOut
        ? "timeout"
        : "network",

      0,

      timedOut
        ? TEACHER_MESSAGES.timeout
        : TEACHER_MESSAGES.network
    );

  } finally {

    window.clearTimeout(timer);

    signal?.removeEventListener(
      "abort",
      onAbort
    );
  }


  if (!response.ok) {
    await handleResponseError(response);
  }


  try {

    return (
      await response.json()
    ) as VoiceTranslationResponse;

  } catch {

    throw new ApiError(
      "unexpected-response",
      response.status,
      TEACHER_MESSAGES.unexpectedResponse
    );
  }
}


// -------------------- Text To Speech --------------------

export async function textToSpeech(
  req: TextToSpeechRequest,
  signal?: AbortSignal
): Promise<Blob> {

  const url =
    `${getApiBaseUrl()}/api/speech/text-to-speech`;

  const controller =
    new AbortController();

  const timer =
    window.setTimeout(
      () => controller.abort(),
      60000
    );

  const onAbort =
    () => controller.abort();


  signal?.addEventListener(
    "abort",
    onAbort,
    { once: true }
  );


  let response: Response;


  try {

    response = await fetch(
      url,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Accept:
            "audio/mpeg, */*",
        },

        body:
          JSON.stringify(req),

        signal:
          controller.signal,
      }
    );

  } catch {

    const timedOut =
      controller.signal.aborted &&
      !signal?.aborted;


    if (signal?.aborted) {

      throw new ApiError(
        "network",
        499,
        "cancelled"
      );
    }


    throw new ApiError(
      timedOut
        ? "timeout"
        : "network",

      0,

      timedOut
        ? TEACHER_MESSAGES.timeout
        : TEACHER_MESSAGES.network
    );

  } finally {

    window.clearTimeout(timer);

    signal?.removeEventListener(
      "abort",
      onAbort
    );
  }


  if (!response.ok) {
    await handleResponseError(response);
  }


  // Binary audio response
  const blob =
    await response.blob();


  if (!blob || blob.size === 0) {

    throw new ApiError(
      "unexpected-response",
      response.status,
      TEACHER_MESSAGES.audioFailed
    );
  }


  return blob;
}


// -------------------- Speech Status --------------------

export async function getSpeechStatus(
  signal?: AbortSignal
): Promise<SpeechStatusResponse> {

  return getJson<SpeechStatusResponse>(
    "/api/speech/status",
    signal
  );
}


// -------------------- Backend Health --------------------

export async function getBackendHealth(
  signal?: AbortSignal
): Promise<HealthResponse> {

  return getJson<HealthResponse>(
    "/api/health",
    signal
  );
}