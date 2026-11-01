import { useEffect, useState } from "react";
import logo from "@/assets/bhasha-setu-logo.png";
import { BridgeMark, SohraiBand } from "@/components/ui/Culture";
import { IconSparkle } from "@/components/ui/Icons";
import { FloatingParticles, GradientOrbs } from "@/components/ui/Animations";

const STAGES = [
  "आपकी कक्षा और विषय समझ रहे हैं… Real backend checking…",
  "Gemini AI से हिन्दी पाठ तैयार कर रहे हैं…",
  "हिन्दी से संथाली में अनुवाद…",
  "Shunya Labs से संथाली ऑडियो बना रहे हैं… MP3",
  "पाठ + अनुवाद + ऑडियो को अंतिम रूप दे रहे हैं…",
];

function OrbitRing({ size, duration, reverse, dotClass, dotSize }: { size: number; duration: number; reverse?: boolean; dotClass: string; dotSize: number }) {
  return (
    <span className="absolute left-1/2 top-1/2 will-change-transform" style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2, animation: `${reverse ? "spin-rev" : "spin"} ${duration}s linear infinite` }}>
      <span className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${dotClass}`} style={{ width: dotSize, height: dotSize }} />
    </span>
  );
}

export function LessonLoader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStage((s) => (s < STAGES.length - 1 ? s + 1 : s));
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      <GradientOrbs className="opacity-30" />
      <FloatingParticles />

      <div className="relative overflow-hidden bg-ink px-6 py-10 text-white sm:px-8">
        <SohraiBand color="#DFA03C" opacity={0.16} className="absolute inset-x-0 top-0 h-6" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-clay/30 blur-[80px]" />
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-40 w-40 animate-glow rounded-full bg-ochre/20 blur-[70px]" style={{ animationDelay: "1s" }} />

        <div className="relative mx-auto grid h-40 w-40 place-items-center">
          <span className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ochre/30" style={{ animation: "spin 40s linear infinite" }} />
          <OrbitRing size={128} duration={2.6} dotClass="bg-ochre shadow-[0_0_14px_3px_rgba(223,160,60,0.55)]" dotSize={9} />
          <OrbitRing size={96} duration={1.8} reverse dotClass="bg-clay" dotSize={7} />
          <OrbitRing size={150} duration={3.4} dotClass="bg-paper/70" dotSize={5} />

          <span className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_18px_36px_-16px_rgba(223,160,60,0.9)]">
            <img src={logo} alt="" className="h-full w-full object-cover animate-pulse" />
          </span>
        </div>

        <div className="relative mt-6 text-center">
          <h2 className="font-display text-[1.4rem] font-semibold tracking-tight sm:text-[1.65rem]">Generating bilingual lesson + audio…</h2>
          <p className="font-deva mt-1.5 text-[14px] text-ochre">आपका द्विभाषी पाठ + ऑडियो तैयार हो रहा है</p>
          <p key={stage} className="font-deva mx-auto mt-4 max-w-sm animate-rise text-[13px] text-white/70">{STAGES[stage]}</p>
          
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="block h-1 w-8 rounded-full bg-white/20 overflow-hidden">
                <span className="block h-full bg-gradient-to-r from-ochre to-clay transition-all duration-500" style={{ width: stage >= i ? "100%" : "0%" }} />
              </span>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-1.5">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="block w-0.5 rounded-full bg-ochre/60 animate-wave-bar" style={{ height: "14px", animationDelay: `${i * 0.12}s` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative space-y-5 px-6 py-7 sm:px-8">
        {[
          { hi: "सीखने का उद्देश्य + ᱥᱟᱱᱛᱟᱲᱤ", lines: [92, 78] },
          { hi: "सरल व्याख्या + ᱟᱲᱟᱝ", lines: [96, 88, 70] },
          { hi: "कक्षा गतिविधि", lines: [86, 64] },
          { hi: "अभ्यास प्रश्न", lines: [90, 82] },
          { hi: "लघु मूल्यांकन + Audio", lines: [74] },
        ].map((block) => (
          <div key={block.hi} className="flex gap-3.5">
            <span className="mt-1 h-7 w-7 shrink-0 animate-pulse rounded-xl bg-gradient-to-br from-ochre/20 to-clay/20" />
            <div className="flex-1 space-y-2">
              <span className="font-deva block text-[13px] font-semibold text-ink/40">{block.hi}</span>
              {block.lines.map((w, i) => (
                <span key={i} className="block h-3 rounded-full bg-gradient-to-r from-ink/[0.08] via-ink/[0.12] to-ink/[0.08] bg-[length:200%_100%]" style={{ width: `${w}%`, animation: `shimmer-x 1.6s ease-in-out ${i * 0.16}s infinite` }} />
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-xl border border-ochre/20 bg-ochre/5 p-3">
          <p className="flex items-center justify-center gap-2 text-[12px] text-ink/50">
            <IconSparkle className="h-3.5 w-3.5 text-ochre animate-spin" style={{ animationDuration: "3s" }} />
            Real backend: Hindi generation → Santhali translation → MP3 audio • This takes 20-60s
          </p>
        </div>
      </div>
    </div>
  );
}
