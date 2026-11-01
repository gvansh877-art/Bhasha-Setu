/**
 * Bhasha Setu — shared API core.
 *
 * Configuration, error taxonomy, OpenAPI schema discovery, request shaping
 * and response helpers used by every generator service
 * (lesson, worksheet, …). Individual services live next to this file and
 * must not call fetch() themselves.
 *
 * ── Security ────────────────────────────────────────────────────────────
 * The browser talks ONLY to FastAPI. It never contacts an LLM provider and
 * never holds, sends or logs GEMINI_API_KEY. That key is server-side only.
 * No auth headers, no credentials, no secrets in this module.
 *
 * ── Schema handling ─────────────────────────────────────────────────────
 * {base}/openapi.json (i.e. /docs) is the source of truth. We probe each
 * endpoint once, resolve $ref / allOf, and build the request body from the
 * REAL schema: property names, types, enums and required flags. When the
 * probe cannot be reached we fall back to the documented prototype shape.
 */

/* ── configuration ──────────────────────────────────────────────────────── */

export const DEFAULT_API_BASE_URL = "http://127.0.0.1:8000";
export const EDUCATIONAL_CONTEXT = "Primary-school FLN classroom";

const LS_BASE_KEY = "bhasha-setu:api-base-url";

/** VITE_API_BASE_URL is the primary knob; localStorage is a dev override. */
export function getApiBaseUrl(): string {
  let base = DEFAULT_API_BASE_URL;
  const env = (import.meta.env?.VITE_API_BASE_URL as string | undefined) ?? "";
  if (env.trim()) base = env.trim();
  try {
    const stored = window.localStorage.getItem(LS_BASE_KEY);
    if (stored && stored.trim()) base = stored.trim();
  } catch {
    /* storage unavailable */
  }
  return base.replace(/\/+$/, "");
}

export function setApiBaseUrl(url: string): void {
  try {
    if (url.trim()) window.localStorage.setItem(LS_BASE_KEY, url.trim());
    else window.localStorage.removeItem(LS_BASE_KEY);
  } catch {
    /* ignore */
  }
}

/* ── errors ─────────────────────────────────────────────────────────────── */

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

  constructor(kind: ApiErrorKind, status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.kind = kind;
    this.status = status;
  }
}

/** Teacher-facing copy. Safe to render; never contains API internals. */
export const TEACHER_MESSAGES = {
  network:
    "Sorry, we couldn't reach the service right now. Please check your connection and try again.",
  timeout:
    "The service is taking too long to respond. Please try again in a moment.",
  server: "Sorry, we couldn't complete this right now. Please try again.",
  invalidRequest:
    "Some details couldn't be accepted. Please check them and try again.",
  unexpectedResponse: "Sorry, we couldn't complete this right now. Please try again.",
  unknown: "Sorry, we couldn't complete this right now. Please try again.",
} as const;

export const TIMEOUT_MS = 60_000;

/* ── OpenAPI discovery ──────────────────────────────────────────────────── */

export type JsonObject = Record<string, unknown>;

export type SchemaProp = {
  type?: string;
  enum?: unknown[];
  default?: unknown;
};

export type OperationSchema = {
  props: Record<string, SchemaProp>;
  required: string[];
};

const schemaCache = new Map<string, OperationSchema | null>();

function resolveRef(root: JsonObject, node: unknown, depth = 0): unknown {
  if (!node || typeof node !== "object" || depth > 6) return node;
  const obj = node as JsonObject;
  const ref = obj.$ref;
  if (typeof ref === "string" && ref.startsWith("#/")) {
    const target = ref
      .slice(2)
      .split("/")
      .reduce<unknown>((acc, key) => {
        if (acc && typeof acc === "object") return (acc as JsonObject)[key];
        return undefined;
      }, root);
    return resolveRef(root, target, depth + 1);
  }
  return obj;
}

/** Extract the request-body schema for a given path, e.g. /api/worksheet/generate. */
export function parseOperationSchema(
  doc: JsonObject,
  path: string,
): OperationSchema | null {
  const paths = (doc.paths ?? {}) as JsonObject;
  const keys = Object.keys(paths);
  const suffix = path.replace(/^\/+/, ""); // "api/worksheet/generate"
  const pathKey =
    keys.find((k) => k === path) ??
    keys.find((k) => k.replace(/^\/+|\/+$/g, "").endsWith(suffix));
  if (!pathKey) return null;

  const pathItem = resolveRef(doc, paths[pathKey]) as JsonObject | undefined;
  if (!pathItem) return null;

  const op = (pathItem.post ?? pathItem.put ?? pathItem.get) as JsonObject | undefined;
  if (!op) return null;

  const body = resolveRef(doc, op.requestBody) as JsonObject | undefined;
  const content = body?.content as JsonObject | undefined;
  const jsonEntry = content?.["application/json"] as JsonObject | undefined;
  const schema = resolveRef(doc, jsonEntry?.schema ?? body?.schema) as
    | JsonObject
    | undefined;
  if (!schema) return null;

  let merged: JsonObject = schema;
  if (Array.isArray(schema.allOf)) {
    merged = schema.allOf.reduce<JsonObject>((acc, entry) => {
      const part = resolveRef(doc, entry);
      if (part && typeof part === "object") return { ...acc, ...(part as JsonObject) };
      return acc;
    }, { properties: {}, required: [] } as JsonObject);
  }

  const propsRaw = (merged.properties ?? {}) as JsonObject;
  const props: Record<string, SchemaProp> = {};
  Object.entries(propsRaw).forEach(([name, value]) => {
    const resolved = resolveRef(doc, value) as JsonObject | undefined;
    if (resolved && typeof resolved === "object") {
      props[name] = {
        type: typeof resolved.type === "string" ? resolved.type : undefined,
        enum: Array.isArray(resolved.enum) ? resolved.enum : undefined,
        default: resolved.default,
      };
    }
  });

  const required = Array.isArray(merged.required)
    ? merged.required.filter((r): r is string => typeof r === "string")
    : [];

  return { props, required };
}

/** One probe per endpoint per page load; silent failure is expected. */
export async function loadOperationSchema(
  path: string,
): Promise<OperationSchema | null> {
  if (schemaCache.has(path)) return schemaCache.get(path) ?? null;
  let parsed: OperationSchema | null = null;
  try {
    const res = await fetch(`${getApiBaseUrl()}/openapi.json`, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout?.(5000) ?? undefined,
    });
    if (!res.ok) throw new Error("bad status");
    parsed = parseOperationSchema((await res.json()) as JsonObject, path);
  } catch {
    parsed = null; // offline / CORS blocked → documented fallback
  }
  schemaCache.set(path, parsed);
  return parsed;
}

/* ── request shaping ────────────────────────────────────────────────────── */

export function matchKey(
  candidates: string[],
  props: Record<string, SchemaProp>,
): string | null {
  const keys = Object.keys(props);
  for (const candidate of candidates) {
    const hit = keys.find((k) => k.toLowerCase() === candidate.toLowerCase());
    if (hit) return hit;
  }
  for (const candidate of candidates) {
    const hit = keys.find((k) => k.toLowerCase().includes(candidate.toLowerCase()));
    if (hit) return hit;
  }
  return null;
}

export function coerce(
  value: string | number,
  prop: SchemaProp | undefined,
  enumPreference?: string[],
): string | number {
  if (prop?.enum?.length) {
    const values = prop.enum.map((v) => String(v));
    for (const pref of enumPreference ?? []) {
      const hit = values.find((v) => v.toLowerCase() === pref.toLowerCase());
      if (hit) return hit;
    }
    const loose = values.find((v) =>
      String(value).toLowerCase().includes(v.toLowerCase()),
    );
    if (loose) return loose;
    const numeric = values.find((v) => v.replace(/\D/g, "") === String(value));
    if (numeric) return numeric;
    return values[0];
  }
  if (prop?.type === "integer" || prop?.type === "number") {
    const n = Number(String(value).replace(/\D/g, ""));
    return Number.isFinite(n) ? n : value;
  }
  if (prop?.type === "string" && typeof value !== "string") {
    const preferred = (enumPreference ?? []).find((p) => typeof p === "string");
    return preferred ?? String(value);
  }
  return value;
}

export type ExtraField = {
  /** candidate property names, best first */
  candidates: string[];
  value: string | number;
  /** used verbatim when the schema could not be read */
  fallbackKey: string;
};

/**
 * Build {topic, class, subject, educational_context} from the real schema,
 * plus optional extras. Extras are only sent when the schema declares a
 * matching property (or when we have no schema at all) — we never push
 * unknown fields at a strict backend.
 */
export function buildCorePayload(
  request: { classLevel: number; subject: string; topic: string },
  schema: OperationSchema | null,
  extras: ExtraField[] = [],
): JsonObject {
  const className = `Class ${request.classLevel}`;

  if (!schema || Object.keys(schema.props).length === 0) {
    const payload: JsonObject = {
      topic: request.topic.trim(),
      class_level: className,
      subject: request.subject,
      educational_context: EDUCATIONAL_CONTEXT,
    };
    extras.forEach((extra) => {
      payload[extra.fallbackKey] = extra.value;
    });
    return payload;
  }

  const payload: JsonObject = {};
  const { props, required } = schema;

  const topicKey = matchKey(["topic", "lesson_topic", "title", "subject_topic"], props);
  const classKey = matchKey(
    ["class_level", "classlevel", "class", "grade", "standard"],
    props,
  );
  const subjectKey = matchKey(["subject", "subject_name"], props);
  const contextKey = matchKey(
    ["educational_context", "educationalcontext", "context", "teaching_context"],
    props,
  );

  if (topicKey) payload[topicKey] = coerce(request.topic.trim(), props[topicKey]);
  if (classKey) {
    payload[classKey] = coerce(request.classLevel, props[classKey], [
      className,
      String(request.classLevel),
    ]);
  }
  if (subjectKey) {
    payload[subjectKey] = coerce(request.subject, props[subjectKey], [request.subject]);
  }
  if (contextKey) {
    payload[contextKey] = coerce(EDUCATIONAL_CONTEXT, props[contextKey], [
      EDUCATIONAL_CONTEXT,
    ]);
  }

  extras.forEach((extra) => {
    const key = matchKey(extra.candidates, props);
    if (key) payload[key] = coerce(extra.value, props[key]);
  });

  // Satisfy remaining required properties using only the backend's own
  // declared defaults or vocabulary. Anything unknowable is left out on
  // purpose — a clear 422 beats silently generating from a guessed field.
  required.forEach((name) => {
    if (payload[name] !== undefined) return;
    const prop = props[name];
    if (prop?.default !== undefined) payload[name] = prop.default as string | number;
    else if (prop?.enum?.length) payload[name] = prop.enum[0] as string | number;
  });

  return payload;
}

/* ── transport ──────────────────────────────────────────────────────────── */

/**
 * POST JSON, returning parsed body (object, array or string).
 * Throws ApiError with teacher-safe messages only; the error body from the
 * server is deliberately discarded so it can never reach the UI.
 */
export async function postJson(
  path: string,
  body: JsonObject,
  signal?: AbortSignal,
): Promise<unknown> {
  const url = `${getApiBaseUrl()}${path}`;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
  const onAbort = () => controller.abort();
  signal?.addEventListener("abort", onAbort, { once: true });

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch {
    const timedOut = controller.signal.aborted && !signal?.aborted;
    if (signal?.aborted) throw new ApiError("network", 499, "cancelled");
    throw new ApiError(
      timedOut ? "timeout" : "network",
      0,
      timedOut ? TEACHER_MESSAGES.timeout : TEACHER_MESSAGES.network,
    );
  } finally {
    window.clearTimeout(timer);
    signal?.removeEventListener("abort", onAbort);
  }

  if (!response.ok) {
    try {
      await response.text(); // drain & discard — never shown to the teacher
    } catch {
      /* ignore */
    }
    if (response.status === 400 || response.status === 422) {
      throw new ApiError("invalid-request", response.status, TEACHER_MESSAGES.invalidRequest);
    }
    throw new ApiError("server", response.status, TEACHER_MESSAGES.server);
  }

  try {
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      return text; // a plain-text body is acceptable
    }
  } catch {
    throw new ApiError(
      "unexpected-response",
      response.status,
      TEACHER_MESSAGES.unexpectedResponse,
    );
  }
}

/* ── response helpers ───────────────────────────────────────────────────── */

/** Turn "1.\ntext", "• text", "a) text" or prose into clean list items. */
export function toItems(value: unknown): string[] {
  if (value == null) return [];
  const raw: string[] = Array.isArray(value)
    ? value.map((v) => (typeof v === "object" ? JSON.stringify(v) : String(v)))
    : [typeof value === "object" ? JSON.stringify(value) : String(value)];

  const text = raw.join("\n").trim();
  if (!text) return [];

  return text
    .split(/\r?\n+/)
    .flatMap((line: string) => {
      const l = line.trim();
      if (!l) return [];
      if (/\d+\.\s/.test(l) && l.split(/\d+\.\s/).length > 2) {
        return l
          .split(/(?=\d+\.\s)/)
          .map((p) => p.replace(/^\d+\.\s*/, "").trim())
          .filter(Boolean);
      }
      return [l];
    })
    .map((l) => l.replace(/^[-•*·–—]+\s*/, "").replace(/^\d+[.)]\s*/, "").trim())
    .filter(Boolean);
}

/** Flatten nested objects to {lowerLeafKey: value} for tolerant lookup. */
export function flatten(obj: unknown, out: Map<string, unknown>, depth = 0): void {
  if (!obj || typeof obj !== "object" || depth > 5) return;
  if (Array.isArray(obj)) return;
  Object.entries(obj as JsonObject).forEach(([key, value]) => {
    const k = key.toLowerCase();
    if (value == null) return;
    if (typeof value === "object" && !Array.isArray(value)) {
      flatten(value, out, depth + 1);
    } else if (!out.has(k)) {
      out.set(k, value);
    }
  });
}

export function lookupAliases(
  flat: Map<string, unknown>,
  aliases: readonly string[],
): string[] {
  for (const alias of aliases) {
    const direct = flat.get(alias);
    if (direct != null) {
      const items = toItems(direct);
      if (items.length) return items;
    }
  }
  for (const alias of aliases) {
    for (const [key, value] of flat) {
      if (key.includes(alias) && value != null) {
        const items = toItems(value);
        if (items.length) return items;
      }
    }
  }
  return [];
}

/** First array found under any of the given keys (searches nested objects). */
export function lookupArray(
  node: unknown,
  candidates: readonly string[],
  depth = 0,
): unknown[] | null {
  if (!node || typeof node !== "object" || depth > 5) return null;
  if (Array.isArray(node)) return null;
  const obj = node as JsonObject;
  for (const candidate of candidates) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.toLowerCase() === candidate && Array.isArray(value)) return value;
    }
  }
  for (const candidate of candidates) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.toLowerCase().includes(candidate) && Array.isArray(value)) return value;
    }
  }
  for (const value of Object.values(obj)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const nested = lookupArray(value, candidates, depth + 1);
      if (nested) return nested;
    }
  }
  return null;
}

/** First string found under any of the given keys (searches nested objects). */
export function lookupString(
  node: unknown,
  candidates: readonly string[],
  depth = 0,
): string | null {
  if (!node || typeof node !== "object" || depth > 5) return null;
  if (Array.isArray(node)) return null;
  const obj = node as JsonObject;
  for (const candidate of candidates) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.toLowerCase() === candidate) {
        if (typeof value === "string" && value.trim()) return value.trim();
        if (typeof value === "number") return String(value);
      }
    }
  }
  for (const candidate of candidates) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.toLowerCase().includes(candidate)) {
        if (typeof value === "string" && value.trim()) return value.trim();
        if (typeof value === "number") return String(value);
      }
    }
  }
  for (const value of Object.values(obj)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const nested = lookupString(value, candidates, depth + 1);
      if (nested) return nested;
    }
  }
  return null;
}
