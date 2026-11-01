import collage from "@/assets/jharkhand-collage.jpg";
import logo from "@/assets/bhasha-setu-logo.png";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand, SohraiTile } from "@/components/ui/Culture";
import { IconBook, IconCheck, IconSparkle } from "@/components/ui/Icons";
import { LESSON_SECTIONS } from "@/lib/lesson";
import { getApiBaseUrl } from "@/services/bhashaApi";
import { FloatingParticles, GradientOrbs } from "@/components/ui/Animations";

export function LessonEmptyState() {
  return (
    <Reveal delay={80}>
      <div className="relative overflow-hidden rounded-[26px] border border-dashed border-ink/15 bg-white/70 shadow-lift">
        <SohraiBand color="#C1502E" opacity={0.22} className="h-7 w-full" />
        <FloatingParticles />

        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={{ backgroundImage: `url(${collage})`, backgroundSize: "cover", backgroundPosition: "60% 45%", maskImage: "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)", WebkitMaskImage: "radial-gradient(65% 65% at 50% 42%, #000 0%, transparent 100%)" }} />
          <SohraiTile id="empty-tile" color="#8C2F1B" opacity={0.05} className="pointer-events-none absolute inset-0 h-full w-full" />

          <div className="relative mx-auto grid h-24 w-24 place-items-center">
            <span className="absolute inset-0 rounded-full border border-dashed border-clay/30" />
            <span className="absolute inset-0 rounded-full border border-clay/15" style={{ animation: "spin 34s linear infinite" }} />
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white shadow-[0_22px_44px_-20px_rgba(193,80,46,0.75)]">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </span>
          </div>

          <h2 className="relative mt-7 font-display text-[1.55rem] font-semibold tracking-tight text-ink sm:text-[1.9rem]">Your bilingual lesson will appear here</h2>
          <p className="font-deva relative mx-auto mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-ink/60 sm:text-[15.5px]">
            बाईं ओर कक्षा, विषय और विषय-वस्तु चुनकर «Generate Lesson» दबाएँ। आपके लिए हिन्दी पाठ + संथाली अनुवाद + Santhali ऑडियो तैयार होगा — Real Backend।
          </p>

          <div className="relative mx-auto mt-8 grid max-w-xl gap-2 text-left sm:grid-cols-1">
            {LESSON_SECTIONS.map((section, i) => (
              <div key={section.key} className="flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-white/85 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/30">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-ink/[0.05] text-[11px] font-bold text-ink/45">{i + 1}</span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-ink/80">{section.label} + Audio</p>
                  <p className="font-deva truncate text-[12px] text-ink/45">{section.hindi} • ᱥᱟᱱᱛᱟᱲᱤ + ᱟᱲᱟᱝ</p>
                </div>
                <IconCheck className="ml-auto h-4 w-4 shrink-0 text-leaf/70" />
              </div>
            ))}
          </div>

          <div className="relative mt-8 flex flex-wrap justify-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-[12px] font-medium text-ink/50">
              <IconSparkle className="h-3.5 w-3.5 text-clay" />
              Real Backend • Hindi + Santhali + MP3 Audio
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf/20 bg-leaf/10 px-3 py-2 text-[11px] font-semibold text-leaf">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
              Gemini AI • Shunya TTS
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function LessonErrorState({ message, onRetry, kind = "unknown" }: { message: string; onRetry: () => void; kind?: string }) {
  const hint =
    kind === "network"
      ? "The FastAPI server could not be reached. Please make sure it is running at VITE_API_BASE_URL."
      : kind === "timeout"
      ? "The AI service took too long. Lesson generation involves Hindi generation + Santhali translation + TTS audio, please try again."
      : kind === "invalid-request"
      ? "Please check the class, subject and topic, then try again."
      : null;

  return (
    <Reveal delay={60}>
      <div className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
        <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-clay" />
        <GradientOrbs className="opacity-20" />
        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-clay/20 bg-clay/[0.08]">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-clay" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4.5" /><circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" /></svg>
          </div>

          <h2 className="mt-6 font-display text-[1.4rem] font-semibold tracking-tight text-ink sm:text-[1.6rem]">We couldn't generate your lesson</h2>
          <p className="font-deva mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/65">{message}</p>
          <p className="font-deva mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-ink/45">क्षमा करें, इस समय पाठ तैयार नहीं हो पाया। Backend में Hindi lesson + Santhali translation + audio generation होता है।</p>

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
              POST <code className="rounded bg-ink/[0.06] px-1 py-0.5 text-[11px]">{getApiBaseUrl()}/api/lesson/generate</code>
              <br />
              Request: topic, class_level (Class X), subject, educational_context
              <br />
              Response: lesson_content (Hindi), santhali_lesson_content, audio_base64 (Santhali MP3)
              <br />
              Set <code className="text-[11px]">VITE_API_BASE_URL</code> to FastAPI. Audio is Base64 MP3, decode to Blob → Object URL.
            </p>
          </details>
        </div>
      </div>
    </Reveal>
  );
}
