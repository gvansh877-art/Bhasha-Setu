import { MOTHER_TONGUE } from "@/lib/store";
import { GLOSSARY } from "@/lib/glossary";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand } from "@/components/ui/Culture";
import { IconArrowRight, IconSwap, IconLayers } from "@/components/ui/Icons";
import { FloatingParticles } from "@/components/ui/Animations";
import { useEffect, useState } from "react";
import { getBackendHealth, getSpeechStatus, type SpeechStatusResponse } from "@/services/bhashaApi";

const TICKER = GLOSSARY.slice(0, 16);

export function LanguageIndicator() {
  const [speech, setSpeech] = useState<SpeechStatusResponse | null>(null);

  useEffect(() => {
    getSpeechStatus().then(setSpeech).catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ochre/70 to-transparent" />
      <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 animate-glow rounded-full bg-clay/25 blur-[120px]" />
      <FloatingParticles className="opacity-10" />

      <div className="relative border-b border-white/10 bg-black/25 py-2.5">
        <div className="flex w-max animate-ticker items-center gap-8 pl-4">
          {[...TICKER, ...TICKER].map((entry, i) => (
            <span key={`${entry.hindi}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <span className="font-deva text-[13px] text-white/65">{entry.hindi}</span>
              <IconArrowRight className="h-3 w-3 text-white/25" />
              <span className="font-olchiki text-[14px] text-ochre/90">{entry.santhali}</span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/25">{entry.roman}</span>
              <span className="h-3 w-3 rounded-full bg-ochre/20 grid place-items-center ml-1"><svg viewBox="0 0 24 24" className="h-2 w-2 text-ochre" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg></span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-28 pt-12 sm:px-6 sm:pt-14">
        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">Mother Tongue • Real Backend • Audio</p>

            <div className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className="font-display text-[clamp(2.2rem,5.5vw,3.4rem)] font-semibold leading-none tracking-[-0.02em]">{MOTHER_TONGUE.name}</h2>
              <span className="font-olchiki text-[clamp(1.8rem,4.6vw,2.8rem)] leading-none text-gradient-clay">{MOTHER_TONGUE.script}</span>
              <span className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-ochre/30 bg-ochre/10 px-2.5 py-1 text-[10px] font-bold text-ochre"><span className="h-3 w-3 rounded-full bg-ochre/20 grid place-items-center"><svg viewBox="0 0 24 24" className="h-2 w-2" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg></span>Audio</span>
            </div>

            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
              Built for <span className="text-white">{MOTHER_TONGUE.name}</span> ({MOTHER_TONGUE.scriptName}) Classes 1–5 with <span className="text-ochre">Real AI</span> — Gemini translation (Hindi → Santhali) + Shunya Labs TTS. Every feature returns authentic MP3 audio.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-xl border border-ochre/40 bg-ochre/12 px-3 py-1.5 text-[12px] font-semibold text-ochre"><IconLayers className="h-3.5 w-3.5" />Real Backend • Audio Enabled</span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] text-white/60">Source · <span className="font-deva text-white/90">{MOTHER_TONGUE.sourceScript}</span> {MOTHER_TONGUE.source} → Santhali</span>
            </div>

            {speech && (
              <div className="mt-4 rounded-xl border border-leaf/20 bg-leaf/10 px-3 py-2.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-leaf">Speech Status • Real Backend</p>
                <p className="mt-1 text-[12px] text-white/70">{speech.message}</p>
                <div className="mt-2 flex gap-1.5">
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/50">MP3 • {speech.audio_format}</span>
                  <span className="rounded-full bg-ochre/15 px-2 py-0.5 text-[10px] text-ochre border border-ochre/20">🔊 Audio Ready</span>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <SohraiBand color="#DFA03C" opacity={0.22} className="absolute -top-6 left-0 h-8 w-40" />
            <div className="rounded-3xl border border-white/12 bg-white/[0.045] p-5 backdrop-blur-md sm:p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ochre/15 blur-2xl animate-glow" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">Translation flow • Real AI + Audio</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-center">
                  <p className="font-deva text-xl font-semibold leading-none">हिन्दी</p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40">Source • Gemini</p>
                </div>
                <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ochre to-clay text-ink shadow-lg">
                  <IconSwap className="h-4 w-4" />
                  <span className="absolute inset-0 rounded-full animate-pulse-ring bg-ochre/30" />
                </span>
                <div className="flex-1 rounded-2xl border border-ochre/35 bg-ochre/12 px-4 py-3 text-center">
                  <p className="font-olchiki text-xl font-semibold leading-none text-ochre">ᱥᱟᱱᱛᱟᱲᱤ</p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/45">Target • TTS 🔊</p>
                </div>
              </div>

              <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-ochre/30 to-transparent" />

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {GLOSSARY.slice(0, 4).map((entry) => (
                  <div key={entry.hindi} className="group rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 text-center transition-colors hover:bg-white/[0.08]">
                    <p className="font-deva text-[13px] text-white/85">{entry.hindi}</p>
                    <IconArrowRight className="mx-auto my-0.5 h-3 w-3 text-white/25 group-hover:translate-x-0.5 transition-transform" />
                    <p className="font-olchiki text-[14px] text-ochre">{entry.santhali}</p>
                    <span className="mt-1 inline-flex h-3 w-3 place-items-center rounded-full bg-ochre/15"><svg viewBox="0 0 24 24" className="h-2 w-2 text-ochre" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg></span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-ochre/20 bg-ochre/5 px-3 py-2">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="block w-0.5 rounded-full bg-ochre animate-wave-bar" style={{ height: "12px", animationDelay: `${i * 0.12}s` }} />
                  ))}
                </span>
                <span className="text-[11px] font-medium text-white/50">Authentic Santhali MP3 • Base64 → Blob • Real Backend</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
