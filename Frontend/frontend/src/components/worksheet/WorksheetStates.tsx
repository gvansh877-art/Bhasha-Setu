import collage from "@/assets/jharkhand-collage.jpg";
import logo from "@/assets/bhasha-setu-logo.png";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand, SohraiTile, BridgeMark } from "@/components/ui/Culture";
import { IconSparkle, IconWorksheet } from "@/components/ui/Icons";
import { getApiBaseUrl } from "@/services/bhashaApi";
import { FloatingParticles, GradientOrbs } from "@/components/ui/Animations";

const LOAD_STAGES = [
  "आपकी कक्षा और विषय समझ रहे हैं… Real backend…",
  "Gemini AI से हिन्दी प्रश्न तैयार कर रहे हैं…",
  "हिन्दी से संथाली में अनुवाद + Audio synthesis…",
  "द्विभाषी पत्रिका + MP3 ऑडियो को अंतिम रूप दे रहे हैं…",
];

function OrbitRing({ size, duration, reverse, dotClass, dotSize }: { size: number; duration: number; reverse?: boolean; dotClass: string; dotSize: number }) {
  return (
    <span className="absolute left-1/2 top-1/2 will-change-transform" style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2, animation: `${reverse ? "spin-rev" : "spin"} ${duration}s linear infinite` }}>
      <span className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${dotClass}`} style={{ width: dotSize, height: dotSize }} />
    </span>
  );
}

export function WorksheetEmptyState() {
  const preview = [
    { hi: "प्रश्न १ — वस्तुनिष्ठ + ᱟᱲᱟᱝ", w: "84%" },
    { hi: "प्रश्न २ — रिक्त स्थान", w: "66%" },
    { hi: "प्रश्न ३ — लघु उत्तर + Audio", w: "92%" },
    { hi: "प्रश्न ४ — चित्र पहचान", w: "72%" },
  ];

  return (
    <Reveal delay={80}>
      <div className="relative overflow-hidden rounded-[26px] border border-dashed border-ink/15 bg-white/70 shadow-lift">
        <SohraiBand color="#C1502E" opacity={0.22} className="h-7 w-full" />
        <FloatingParticles />

        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={{ backgroundImage: `url(${collage})`, backgroundSize: "cover", backgroundPosition: "60% 45%", maskImage: "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)", WebkitMaskImage: "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)" }} />
          <SohraiTile id="ws-empty-tile" color="#8C2F1B" opacity={0.05} className="pointer-events-none absolute inset-0 h-full w-full" />

          <div className="relative mx-auto grid h-24 w-24 place-items-center">
            <span className="absolute inset-0 rounded-full border border-dashed border-clay/30" />
            <span className="absolute inset-0 rounded-full border border-clay/15" style={{ animation: "spin 34s linear infinite" }} />
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_22px_44px_-20px_rgba(46,107,79,0.7)]">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </span>
          </div>

          <h2 className="relative mt-7 font-display text-[1.55rem] font-semibold tracking-tight text-ink sm:text-[1.9rem]">Your bilingual worksheet will appear here</h2>
          <p className="font-deva relative mx-auto mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">बाईं ओर कक्षा, विषय और विषय-वस्तु चुनकर Generate दबाएँ। हिन्दी + संथाली + Audio वाली कार्यपत्रिका Real Backend से आएगी।</p>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-2 text-left">
            {preview.map((row) => (
              <div key={row.hi} className="flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-white/85 px-4 py-3">
                <span className="h-3 w-3 shrink-0 rounded-[3px] border border-ink/20 bg-white" />
                <span className="font-deva flex-1 text-[13px] text-ink/70">{row.hi}</span>
                <span className="hidden h-4 flex-1 items-end gap-1 sm:flex">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="block h-px flex-1 bg-ink/15" style={{ width: `${row.w}` }} />
                  ))}
                </span>
              </div>
            ))}
          </div>

          <div className="relative mt-8 flex flex-wrap justify-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-[12px] font-medium text-ink/50">
              <IconSparkle className="h-3.5 w-3.5 text-clay" />
              Real Backend • Hindi + Santhali + MP3
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf/20 bg-leaf/10 px-3 py-2 text-[11px] font-semibold text-leaf">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
              Audio Enabled
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function WorksheetLoader({ stage }: { stage: number }) {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      <GradientOrbs className="opacity-20" />
      <div className="relative overflow-hidden bg-ink px-6 py-10 text-white sm:px-8">
        <SohraiBand color="#DFA03C" opacity={0.16} className="absolute inset-x-0 top-0 h-6" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-leaf/25 blur-[80px]" />

        <div className="relative mx-auto grid h-40 w-40 place-items-center">
          <span className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ochre/30" style={{ animation: "spin 40s linear infinite" }} />
          <OrbitRing size={128} duration={2.6} dotClass="bg-ochre shadow-[0_0_14px_3px_rgba(223,160,60,0.55)]" dotSize={9} />
          <OrbitRing size={96} duration={1.8} reverse dotClass="bg-clay" dotSize={7} />
          <OrbitRing size={150} duration={3.4} dotClass="bg-paper/70" dotSize={5} />
          <span className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_18px_36px_-16px_rgba(46,107,79,0.9)]">
            <img src={logo} alt="" className="h-full w-full object-cover" />
          </span>
        </div>

        <div className="relative mt-6 text-center">
          <h2 className="font-display text-[1.4rem] font-semibold tracking-tight sm:text-[1.65rem]">Creating bilingual worksheet + audio…</h2>
          <p className="font-deva mt-1.5 text-[14px] text-ochre">द्विभाषी अभ्यास पत्रिका + ऑडियो तैयार हो रही है</p>
          <p key={stage} className="font-deva mx-auto mt-4 max-w-sm animate-rise text-[13px] text-white/70">{LOAD_STAGES[stage]}</p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="block h-1 w-8 rounded-full bg-white/20 overflow-hidden">
                <span className="block h-full bg-gradient-to-r from-leaf to-ochre transition-all duration-500" style={{ width: stage >= i ? "100%" : "0%" }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative space-y-4 px-6 py-7 sm:px-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-3.5">
            <span className="mt-1 grid h-7 w-7 shrink-0 animate-pulse place-items-center rounded-lg bg-ink/[0.07] text-[11px] font-bold text-ink/30">{i + 1}</span>
            <div className="flex-1 space-y-2">
              <span className="block h-3.5 rounded-full bg-gradient-to-r from-ink/[0.08] via-ink/[0.12] to-ink/[0.08] bg-[length:200%_100%]" style={{ width: `${[92, 78, 86, 70, 80][i]}%`, animation: `shimmer-x 1.6s ease-in-out ${i * 0.16}s infinite` }} />
              <span className="block h-10 w-full rounded-lg border border-ink/[0.07] bg-ink/[0.02]" />
            </div>
          </div>
        ))}
        <p className="flex items-center justify-center gap-2 border-t border-ink/[0.07] pt-5 text-[12px] text-ink/40">
          <IconSparkle className="h-3.5 w-3.5 text-clay animate-pulse" />
          Real AI generation takes 20-60 seconds • Hindi + Santhali + MP3
        </p>
      </div>
    </div>
  );
}

export function WorksheetErrorState({ message, onRetry, kind = "unknown" }: { message: string; onRetry: () => void; kind?: string }) {
  const hint = kind === "network" ? "The FastAPI server could not be reached. Please make sure it is running." : kind === "timeout" ? "The server took too long. Worksheet generation includes Hindi + Santhali + audio." : kind === "invalid-request" ? "Please check the class, subject and topic, then try again." : null;

  return (
    <Reveal delay={60}>
      <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
        <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-clay" />
        <GradientOrbs className="opacity-10" />
        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-clay/20 bg-clay/[0.08]">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-clay" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4.5" /><circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" /></svg>
          </div>

          <h2 className="mt-6 font-display text-[1.4rem] font-semibold tracking-tight text-ink sm:text-[1.6rem]">We couldn't create your worksheet</h2>
          <p className="font-deva mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/65">{message}</p>
          <p className="font-deva mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-ink/45">क्षमा करें, इस समय अभ्यास पत्रिका तैयार नहीं हो पाई।</p>

          {hint && <p className="mx-auto mt-3 max-w-md rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/50">{hint}</p>}

          <button type="button" onClick={onRetry} className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-18px_rgba(18,14,12,0.9)]">
            <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
            Try Again
            <span className="font-deva text-[13px] font-semibold text-ochre">पुनः प्रयास</span>
          </button>

          <p className="mt-5 text-[12px] text-ink/35">आपकी कक्षा और विषय याद रखे गए हैं — दोबारा भरने की आवश्यकता नहीं है।</p>

          <details className="mx-auto mt-7 max-w-sm text-left">
            <summary className="cursor-pointer list-none text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/30 hover:text-ink/50">Developer · connection + audio</summary>
            <p className="mt-2.5 rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[11.5px] leading-relaxed text-ink/45">
              POST <code className="rounded bg-ink/[0.06] px-1 py-0.5 text-[11px]">{getApiBaseUrl()}/api/worksheet/generate</code>
              <br />
              Returns: hindi_worksheet + santhali_worksheet + audio_base64 (combined Santhali worksheet audio)
            </p>
          </details>
        </div>
      </div>
    </Reveal>
  );
}
