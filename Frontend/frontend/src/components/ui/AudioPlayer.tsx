import { useEffect, useRef, useState, useCallback } from "react";
import { base64ToBlob, revokeObjectUrl } from "@/lib/audio";
import { cn } from "@/utils/cn";
import { useAudioManager } from "@/lib/audioManager";

type AudioPlayerProps = {
  base64?: string | null;
  blob?: Blob | null;
  url?: string | null;
  contentType?: string;
  title?: string;
  className?: string;
  compact?: boolean;
  autoPlay?: boolean;
};

export function AudioPlayer({ base64, blob, url: externalUrl, contentType = "audio/mpeg", title, className, compact = false, autoPlay = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "loading" | "playing" | "paused" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const { register, unregister, play } = useAudioManager();

  useEffect(() => {
    let newUrl: string | null = null;

    if (externalUrl) {
      newUrl = externalUrl;
      setObjectUrl(newUrl);
    } else if (base64) {
      try {
        const b = base64ToBlob(base64, contentType);
        newUrl = URL.createObjectURL(b);
        setObjectUrl(newUrl);
      } catch {
        setState("error");
      }
    } else if (blob) {
      newUrl = URL.createObjectURL(blob);
      setObjectUrl(newUrl);
    }

    return () => {
      if (newUrl && newUrl !== externalUrl) {
        revokeObjectUrl(newUrl);
      }
    };
  }, [base64, blob, externalUrl, contentType]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    register(audio);
    return () => unregister(audio);
  }, [register, unregister, objectUrl]);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !objectUrl) return;

    if (state === "playing") {
      audio.pause();
      setState("paused");
    } else {
      try {
        setState("loading");
        play(audio);
        setState("playing");
      } catch {
        setState("error");
      }
    }
  }, [state, objectUrl, play]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    if (audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  const handleEnded = () => {
    setState("paused");
    setProgress(0);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    const newTime = pct * duration;
    audio.currentTime = newTime;
    setProgress(pct * 100);
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (autoPlay && objectUrl && audioRef.current) {
      const a = audioRef.current;
      play(a);
      a.play().then(() => setState("playing")).catch(() => setState("paused"));
    }
  }, [autoPlay, objectUrl, play]);

  if (!base64 && !blob && !externalUrl) {
    return (
      <div className={cn("flex items-center gap-2 rounded-xl border border-ink/10 bg-ink/[0.03] px-3 py-2 text-[12px] text-ink/40", className)}>
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        Audio unavailable — backend returned no audio
      </div>
    );
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-white shadow-sm", className)}>
      {title && (
        <div className="flex items-center gap-2 border-b border-ink/[0.06] bg-paper/60 px-4 py-2">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br from-ochre to-clay text-white">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/60 truncate">{title}</span>
          <span className="ml-auto rounded-full border border-leaf/20 bg-leaf/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-leaf">Real MP3</span>
        </div>
      )}

      <div className={cn("flex items-center gap-3 p-3", compact && "p-2.5")}>
        <button
          type="button"
          onClick={togglePlay}
          disabled={state === "loading" || state === "error" || !objectUrl}
          aria-label={state === "playing" ? "Pause Santhali audio" : "Play Santhali audio"}
          className={cn("relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50", compact && "h-9 w-9", state === "playing" && "bg-clay")}
        >
          {state === "loading" ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> : state === "playing" ? <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : state === "error" ? <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4.5"/><circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none"/></svg> : <svg viewBox="0 0 24 24" className="h-4 w-4 ml-0.5" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg>}
          {state === "playing" && <span className="absolute inset-0 rounded-xl animate-pulse-ring bg-clay/30" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="relative h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-ink/10" onClick={handleSeek}>
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-ochre to-clay transition-all duration-150" style={{ width: `${progress}%` }} />
            <div className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-ink shadow-sm transition-all" style={{ left: `calc(${progress}% - 6px)` }} />
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[10px] font-medium text-ink/40">{state === "playing" ? "Playing • Santhali • Real TTS" : state === "paused" && currentTime > 0 ? "Paused" : "Santhali Audio • MP3 • Shunya Labs"}</span>
            <span className="text-[10px] font-medium text-ink/40">{formatTime(currentTime)} / {formatTime(duration)}</span>
          </div>
        </div>

        <div className="hidden items-center gap-1 sm:flex">
          {[...Array(compact ? 3 : 5)].map((_, i) => (
            <span key={i} className={cn("block w-0.5 rounded-full bg-ochre/60 transition-all duration-300", state === "playing" ? "animate-wave-bar" : "h-2 opacity-40")} style={{ height: state === "playing" ? `${8 + Math.sin(i) * 4 + 4}px` : "8px", animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      </div>

      <audio ref={audioRef} src={objectUrl || undefined} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={handleEnded} onError={() => setState("error")} preload="metadata" className="hidden" />
    </div>
  );
}

function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioButton({ base64, blob, url, contentType = "audio/mpeg", className, size = "md", label = "Play Santhali audio" }: { base64?: string | null; blob?: Blob | null; url?: string | null; contentType?: string; className?: string; size?: "sm" | "md" | "lg"; label?: string; }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { register, unregister, play } = useAudioManager();

  useEffect(() => {
    let newUrl: string | null = null;
    if (url) {
      newUrl = url;
      setObjectUrl(newUrl);
    } else if (base64) {
      try {
        const b = base64ToBlob(base64, contentType);
        newUrl = URL.createObjectURL(b);
        setObjectUrl(newUrl);
      } catch {
        setError(true);
      }
    } else if (blob) {
      newUrl = URL.createObjectURL(blob);
      setObjectUrl(newUrl);
    }
    return () => {
      if (newUrl && newUrl !== url) revokeObjectUrl(newUrl);
    };
  }, [base64, blob, url, contentType]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    register(audio);
    const handlePause = () => setPlaying(false);
    audio.addEventListener("pause", handlePause);
    return () => {
      audio.removeEventListener("pause", handlePause);
      unregister(audio);
    };
  }, [register, unregister, objectUrl]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || !objectUrl) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        setLoading(true);
        play(audio);
        await audio.play();
        setPlaying(true);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const sizes = { sm: "h-7 w-7", md: "h-8 w-8", lg: "h-10 w-10" };

  if (!base64 && !blob && !url) {
    return <span className={cn("grid place-items-center rounded-full border border-ink/10 bg-ink/[0.03] text-ink/20", sizes[size], className)}><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></span>;
  }

  return (
    <>
      <button type="button" onClick={toggle} disabled={loading || error} aria-label={label} className={cn("group relative grid place-items-center rounded-full bg-ink text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50", sizes[size], playing && "bg-clay animate-pulse", className)}>
        {loading ? <span className="h-3 w-3 animate-spin rounded-full border border-white/30 border-t-white" /> : error ? <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4"/></svg> : playing ? <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 ml-0.5" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg>}
      </button>
      <audio ref={audioRef} src={objectUrl || undefined} onEnded={() => setPlaying(false)} onError={() => { setError(true); setPlaying(false); }} preload="metadata" className="hidden" />
    </>
  );
}
