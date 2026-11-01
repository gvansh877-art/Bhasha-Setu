import { createContext, useContext, useRef, useCallback, type ReactNode } from "react";

type AudioManagerContextType = {
  register: (audio: HTMLAudioElement) => void;
  unregister: (audio: HTMLAudioElement) => void;
  play: (audio: HTMLAudioElement) => void;
};

const AudioManagerContext = createContext<AudioManagerContextType | null>(null);

export function AudioManagerProvider({ children }: { children: ReactNode }) {
  const audiosRef = useRef<Set<HTMLAudioElement>>(new Set());

  const register = useCallback((audio: HTMLAudioElement) => {
    audiosRef.current.add(audio);
  }, []);

  const unregister = useCallback((audio: HTMLAudioElement) => {
    audiosRef.current.delete(audio);
  }, []);

  const play = useCallback((current: HTMLAudioElement) => {
    audiosRef.current.forEach((a) => {
      if (a !== current && !a.paused) {
        a.pause();
      }
    });
    current.play().catch(() => {});
  }, []);

  return (
    <AudioManagerContext.Provider value={{ register, unregister, play }}>
      {children}
    </AudioManagerContext.Provider>
  );
}

export function useAudioManager() {
  const ctx = useContext(AudioManagerContext);
  if (!ctx) {
    // Fallback if provider not present — still works
    return {
      register: () => {},
      unregister: () => {},
      play: (a: HTMLAudioElement) => a.play().catch(() => {}),
    };
  }
  return ctx;
}
