import { useCallback, useEffect, useRef, useState } from "react";
import { ApiError, TEACHER_MESSAGES, translateText, type TranslationResponse, textToSpeech } from "@/services/bhashaApi";

export type TransStatus = "idle" | "loading" | "success" | "error";

export function useTranslation() {
  const [status, setStatus] = useState<TransStatus>("idle");
  const [result, setResult] = useState<TranslationResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [errorKind, setErrorKind] = useState<string>("unknown");
  const [ttsBlob, setTtsBlob] = useState<Blob | null>(null);

  const inFlight = useRef(false);
  const abortRef = useRef<AbortController | null>(null);

  const abort = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
  }, []);

  useEffect(() => abort, [abort]);

  const run = useCallback(async (text: string, sourceLang: string, targetLang: string) => {
    if (inFlight.current) return;
    inFlight.current = true;

    abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus("loading");
    setError("");
    setErrorKind("unknown");
    setResult(null);
    setTtsBlob(null);

    try {
      const res = await translateText(
        {
          text,
          source_language: sourceLang,
          target_language: targetLang,
          educational_context: "Primary-school classroom instruction",
        },
        controller.signal
      );
      if (controller.signal.aborted) return;
      setResult(res);
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
  }, [abort]);

  const speak = useCallback(async (text: string, language: string = "sat") => {
    try {
      const blob = await textToSpeech({ text, language });
      setTtsBlob(blob);
      return blob;
    } catch (e) {
      console.error("TTS failed", e);
      return null;
    }
  }, []);

  return { status, result, error, errorKind, run, ttsBlob, speak };
}
