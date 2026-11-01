import { useCallback, useEffect, useRef, useState } from "react";
import { ApiError, TEACHER_MESSAGES, generateFlashcards as apiGenerateFlashcards, type FlashcardResponse } from "@/services/bhashaApi";
import type { ClassLevel, SubjectId } from "@/lib/store";

export type GenStatus = "idle" | "loading" | "success" | "error";

export type FlashcardGenRequest = {
  classLevel: ClassLevel;
  subject: SubjectId;
  topic: string;
  cardCount: number;
};

const SUBJECT_DISPLAY: Record<SubjectId, string> = {
  math: "Mathematics",
  language: "Language",
  evs: "EVS",
};

export function useFlashcardGeneration() {
  const [status, setStatus] = useState<GenStatus>("idle");
  const [set, setSet] = useState<FlashcardResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [errorKind, setErrorKind] = useState<string>("unknown");
  const [lastRequest, setLastRequest] = useState<FlashcardGenRequest | null>(null);

  const inFlight = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const abort = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
  }, []);

  useEffect(() => abort, [abort]);

  const run = useCallback(
    async (request: FlashcardGenRequest) => {
      if (inFlight.current) return;
      inFlight.current = true;

      abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLastRequest(request);
      setStatus("loading");
      setError("");
      setErrorKind("unknown");
      setSet(null);

      try {
        const result = await apiGenerateFlashcards(
          {
            topic: request.topic,
            class_level: `Class ${request.classLevel}`,
            subject: SUBJECT_DISPLAY[request.subject],
            number_of_cards: request.cardCount,
            educational_context: "Primary-school FLN classroom",
          },
          controller.signal
        );
        if (controller.signal.aborted) return;
        setSet(result);
        setStatus("success");
      } catch (err) {
        if (controller.signal.aborted) return;
        const apiError = err instanceof ApiError ? err : null;
        setError(apiError?.message || TEACHER_MESSAGES.unknown);
        setErrorKind(apiError?.kind ?? "unknown");
        setStatus("error");
      } finally {
        if (abortRef.current === controller) abortRef.current = null;
        inFlight.current = false;
      }
    },
    [abort]
  );

  const retry = useCallback(() => {
    if (lastRequest) void run(lastRequest);
  }, [lastRequest, run]);

  return { status, set, error, errorKind, run, retry };
}
