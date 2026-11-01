import { useCallback, useEffect, useRef, useState } from "react";
import { ApiError, TEACHER_MESSAGES, translateVoice, getSpeechStatus, type VoiceTranslationResponse, type SpeechStatusResponse } from "@/services/bhashaApi";

export type VoiceStatus = "idle" | "recording" | "processing" | "success" | "error";

export function useVoiceTranslation() {
  const [status, setStatus] = useState<VoiceStatus>("idle");
  const [result, setResult] = useState<VoiceTranslationResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [speechStatus, setSpeechStatus] = useState<SpeechStatusResponse | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const fetchSpeechStatus = useCallback(async () => {
    try {
      const s = await getSpeechStatus();
      setSpeechStatus(s);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    fetchSpeechStatus();
  }, [fetchSpeechStatus]);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
      };

      recorder.start();
      setStatus("recording");
      setRecordingTime(0);
      timerRef.current = window.setInterval(() => {
        setRecordingTime(t => t + 1);
      }, 1000);
    } catch (e) {
      setError("Microphone access denied. Please allow microphone permissions.");
      setStatus("error");
    }
  }, []);

  const stopRecording = useCallback(() => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== "inactive") {
      recorder.stop();
    }
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const cancelRecording = useCallback(() => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== "inactive") {
      recorder.stop();
    }
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    chunksRef.current = [];
    setStatus("idle");
    setRecordingTime(0);
  }, []);

  const processRecording = useCallback(async (sourceLang: string, targetLang: string) => {
    const blob = new Blob(chunksRef.current, { type: "audio/webm" });
    if (blob.size === 0) {
      setError("No audio recorded. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("processing");
    setError("");
    
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const result = await translateVoice(blob, "recording.webm", sourceLang, targetLang, "Primary-school classroom", controller.signal);
      if (controller.signal.aborted) return;
      setResult(result);
      setStatus("success");
    } catch (err) {
      if (controller.signal.aborted) return;
      const apiError = err instanceof ApiError ? err : null;
      setError(apiError?.message || TEACHER_MESSAGES.unknown);
      setStatus("error");
    } finally {
      abortRef.current = null;
    }
  }, []);

  const uploadAudio = useCallback(async (file: File, sourceLang: string, targetLang: string) => {
    setStatus("processing");
    setError("");
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const result = await translateVoice(file, file.name, sourceLang, targetLang, "Primary-school classroom", controller.signal);
      if (controller.signal.aborted) return;
      setResult(result);
      setStatus("success");
    } catch (err) {
      if (controller.signal.aborted) return;
      const apiError = err instanceof ApiError ? err : null;
      setError(apiError?.message || TEACHER_MESSAGES.unknown);
      setStatus("error");
    } finally {
      abortRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setResult(null);
    setError("");
    setRecordingTime(0);
    chunksRef.current = [];
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      abortRef.current?.abort();
    };
  }, []);

  return {
    status,
    result,
    error,
    speechStatus,
    recordingTime,
    startRecording,
    stopRecording,
    cancelRecording,
    processRecording,
    uploadAudio,
    reset,
    fetchSpeechStatus,
  };
}
