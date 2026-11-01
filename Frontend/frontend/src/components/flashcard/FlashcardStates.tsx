import collage from "@/assets/jharkhand-collage.jpg";
import logo from "@/assets/bhasha-setu-logo.png";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand, SohraiTile } from "@/components/ui/Culture";
import { IconFlashcards, IconSparkle } from "@/components/ui/Icons";
import { getApiBaseUrl } from "@/services/bhashaApi";
import { FloatingParticles, GradientOrbs } from "@/components/ui/Animations";

const LOAD_STAGES = [
  "आपकी कक्षा और विषय समझ रहे हैं… Real backend…",
  "Gemini AI से हिन्दी फ़्लैशकार्ड बना रहे हैं…",
  "हिन्दी से संथाली में अनुवाद + हर कार्ड के लिए Audio…",
  "द्विभाषी फ़्लैशकार्ड + Audio को अंतिम रूप दे रहे हैं…",
];

export function FlashcardEmptyState() {
  return (
    <Reveal delay={80}>
      <div className="relative overflow-hidden rounded-[26px] border border-dashed border-ink/15 bg-white/70 shadow-lift">
        <SohraiBand color="#C1502E" opacity={0.22} className="h-7 w-full" />
        <FloatingParticles />

        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={{ backgroundImage: `url(${collage})`, backgroundSize: "cover", backgroundPosition: "60% 45%", maskImage: "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)", WebkitMaskImage: "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)" }} />
          <SohraiTile id="fc-empty-tile" color="#8C2F1B" opacity={0.05} className="pointer-events-none absolute inset-0 h-full w-full" />

          <div className="relative mx-auto h-28 w-40">
            {[0, 1, 2].map((i) => (
              <span key={i} className="absolute left-1/2 top-0 h-24 w-32 -translate-x-1/2 rounded-2xl border border-ink/12 bg-white/90 shadow-lift" style={{ transform: `translateX(-50%) rotate(${(i - 1) * 5}deg) translateY(${i * 5}px)`, opacity: 1 - i * 0.18, zIndex: 3 - i }} />
            ))}
            <span className="absolute left-1/2 top-0 z-10 grid h-24 w-32 -translate-x-1/2 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_22px_44px_-20px_rgba(193,80,46,0.8)]">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </span>
          </div>

          <h2 className="relative mt-8 font-display text-[1.55rem] font-semibold tracking-tight text-ink sm:text-[1.9rem]">Your bilingual flashcards with audio will appear here</h2>
          <p className="font-deva relative mx-auto mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">बाईं ओर कक्षा, विषय और विषय-वस्तु चुनकर Generate दबाएँ। हिन्दी + संथाली + हर कार्ड के लिए Audio — Real Backend से।</p>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-2.5 text-left sm:grid-cols-2">
            {[
              { side: "सामने + ᱟᱲᱟᱝ", desc: "प्रश्न / शब्द + Audio button" },
              { side: "पीछे + Audio", desc: "उत्तर / अर्थ + Santhali speech" },
            ].map((row) => (
              <div key={row.side} className="rounded-2xl border border-ink/[0.07] bg-white/85 px-4 py-3.5">
                <p className="font-deva text-[12px] font-bold uppercase tracking-[0.14em] text-clay">{row.side}</p>
                <p className="font-deva mt-1 text-[13.5px] text-ink/65">{row.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-8 flex flex-wrap justify-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-[12px] font-medium text-ink/50">
              <IconSparkle className="h-3.5 w-3.5 text-clay" />
              Real Backend • Hindi + Santhali + Per-card Audio
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FlashcardLoader({ stage }: { stage: number }) {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      <GradientOrbs className="opacity-20" />
      <div className="relative overflow-hidden bg-ink px-6 py-10 text-white sm:px-8">
        <SohraiBand color="#DFA03C" opacity={0.16} className="absolute inset-x-0 top-0 h-6" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-clay/30 blur-[80px]" />

        <div className="relative mx-auto flex h-24 w-full max-w-sm items-center justify-center gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => {
            const delay = (i % 7) * 0.13;
            return <span key={i} className="w-1.5 rounded-full bg-gradient-to-t from-clay to-ochre" style={{ height: "18px", animation: `wave-bar 1.1s ease-in-out ${delay}s infinite`, transformOrigin: "center" }} />;
          })}
        </div>

        <div className="relative mt-2 text-center">
          <h2 className="font-display text-[1.4rem] font-semibold tracking-tight sm:text-[1.65rem]">Creating flashcards with audio…</h2>
          <p className="font-deva mt-1.5 text-[14px] text-ochre">फ़्लैशकार्ड + हर कार्ड के लिए ऑडियो तैयार हो रहा है</p>
          <p key={stage} className="font-deva mx-auto mt-4 max-w-sm animate-rise text-[13px] text-white/70">{LOAD_STAGES[stage]}</p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="block h-1 w-8 rounded-full bg-white/20 overflow-hidden">
                <span className="block h-full bg-gradient-to-r from-ochre to-clay transition-all duration-500" style={{ width: stage >= i ? "100%" : "0%" }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative grid gap-3 px-6 py-7 sm:grid-cols-2 sm:px-8">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-36 rounded-2xl border border-ink/[0.07] bg-gradient-to-br from-ink/[0.03] to-ink/[0.06] bg-[length:200%_100%] p-4" style={{ animation: `shimmer-x 1.7s ease-in-out ${i * 0.16}s infinite` }}>
            <span className="block h-2.5 w-14 rounded-full bg-ink/10" />
            <span className="mt-4 block h-4 w-3/4 rounded-full bg-ink/[0.09]" />
            <span className="mt-2 block h-3 w-1/2 rounded-full bg-ink/[0.06]" />
            <span className="mt-3 block h-6 w-6 rounded-full bg-ochre/20" />
          </div>
        ))}
        <p className="flex items-center justify-center gap-2 pt-1 text-[12px] text-ink/40 sm:col-span-2">
          <IconSparkle className="h-3.5 w-3.5 text-clay animate-pulse" />
          Real backend: each Santhali card gets individual MP3 audio • Takes 30-90s
        </p>
      </div>
    </div>
  );
}

export function FlashcardErrorState({ message, onRetry, kind = "unknown" }: { message: string; onRetry: () => void; kind?: string }) {
  const hint = kind === "network" ? "The FastAPI server could not be reached. Please make sure it is running." : kind === "timeout" ? "Flashcard generation with per-card audio takes longer (30-90s), please try again." : kind === "invalid-request" ? "Please check the class, subject and topic, then try again." : null;

  return (
    <Reveal delay={60}>
      <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
        <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-clay" />
        <GradientOrbs className="opacity-10" />
        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-clay/20 bg-clay/[0.08]">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-clay" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4.5" /><circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" /></svg>
          </div>

          <h2 className="mt-6 font-display text-[1.4rem] font-semibold tracking-tight text-ink sm:text-[1.6rem]">We couldn't create your flashcards</h2>
          <p className="font-deva mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/65">{message}</p>
          <p className="font-deva mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-ink/45">क्षमा करें, इस समय फ़्लैशकार्ड तैयार नहीं हो पाए। हर कार्ड के लिए Audio generate होता है, इसलिए समय लगता है।</p>

          {hint && <p className="mx-auto mt-3 max-w-md rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/50">{hint}</p>}

          <button type="button" onClick={onRetry} className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-18px_rgba(18,14,12,0.9)]">
            <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
            Try Again
            <span className="font-deva text-[13px] font-semibold text-ochre">पुनः प्रयास</span>
          </button>

          <p className="mt-5 text-[12px] text-ink/35">आपकी कक्षा और विषय याद रखे गए हैं — दोबारा भरने की आवश्यकता नहीं है।</p>

          <details className="mx-auto mt-7 max-w-sm text-left">
            <summary className="cursor-pointer list-none text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/30 hover:text-ink/50">Developer · connection + per-card audio</summary>
            <p className="mt-2.5 rounded-xl border border-ink/[0.07] bg-ink/[0.02] px-3.5 py-2.5 text-[11.5px] leading-relaxed text-ink/45">
              POST <code className="rounded bg-ink/[0.06] px-1 py-0.5 text-[11px]">{getApiBaseUrl()}/api/flashcard/generate</code>
              <br />
              Returns: hindi_flashcards + santhali_flashcards (each card has audio_base64)
            </p>
          </details>
        </div>
      </div>
    </Reveal>
  );
}
