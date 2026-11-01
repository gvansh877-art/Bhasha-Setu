import { Link } from "@/lib/router";
import { Reveal } from "@/components/ui/Reveal";
import { useTilt } from "@/components/ui/useTilt";
import { SohraiTile } from "@/components/ui/Culture";
import { IconArrowRight, IconBook, IconCheck, IconLanguages, IconSwap, IconWorksheet, IconFlashcards } from "@/components/ui/Icons";
import { useTeaching } from "@/lib/store";
import { cn } from "@/utils/cn";
import { FloatingParticles } from "@/components/ui/Animations";

type FeatureCardProps = {
  index: string;
  eyebrow: string;
  title: string;
  hindiTitle: string;
  description: string;
  cta: string;
  to: string;
  ariaLabel: string;
  gradient: string;
  accentText: string;
  accentBorder: string;
  icon: React.ReactNode;
  watermark: React.ReactNode;
  preview: React.ReactNode;
  meta: string;
  delay?: number;
  className?: string;
};

function FeatureCard({ index, eyebrow, title, hindiTitle, description, cta, to, ariaLabel, gradient, accentText, accentBorder, icon, watermark, preview, meta, delay = 0, className }: FeatureCardProps) {
  const { ref, onMove, onLeave } = useTilt(6);

  return (
    <Reveal delay={delay} from="scale" className={className}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="tilt group relative">
        <Link to={to} ariaLabel={ariaLabel} className="absolute inset-0 z-20 rounded-[34px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre" />

        <article className={cn("relative overflow-hidden rounded-[34px] border border-white/12 p-6 text-white shadow-[0_40px_80px_-40px_rgba(10,8,20,0.85)] transition-all duration-500 sm:p-8 hover:shadow-[0_50px_100px_-40px_rgba(10,8,20,0.95)] hover:-translate-y-1", gradient)}>
          <SohraiTile id={`tile-${index}`} color="#F7EBD6" opacity={0.1} className="pointer-events-none absolute inset-0 h-full w-full" />
          <FloatingParticles className="opacity-20" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.16), transparent 62%)" }} />
          <div className="pointer-events-none absolute -right-10 -top-12 h-52 w-52 rounded-full bg-white/12 blur-3xl transition-all duration-700 group-hover:bg-white/20" />

          <div className="pointer-events-none absolute -bottom-8 -right-6 opacity-[0.13] transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:rotate-6">{watermark}</div>

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3 sm:h-16 sm:w-16">{icon}</span>
              <div>
                <p className={cn("text-[10px] font-bold uppercase tracking-[0.26em]", accentText)}>{index}</p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">{eyebrow}</p>
              </div>
            </div>
            <span className={cn("hidden rounded-full border px-3 py-1.5 text-[11px] font-semibold sm:inline-flex backdrop-blur-md", accentBorder, accentText)}>{meta}</span>
          </div>

          <h3 className="relative mt-7 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.02em]">{title}</h3>
          <p className="font-deva relative mt-1 text-[14px] text-white/55">{hindiTitle}</p>

          <p className="relative mt-4 max-w-md text-[14.5px] leading-relaxed text-white/72 sm:text-[15.5px]">{description}</p>

          <div className="relative mt-7">{preview}</div>

          <div className="relative mt-7 flex items-center gap-3">
            <span className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-paper px-5 py-3 text-[14px] font-bold text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_40px_-18px_rgba(251,245,236,0.6)]">
              <span className="absolute inset-y-0 -left-full w-1/3 bg-white/80 blur-md group-hover:animate-shine" />
              {cta}
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="hidden items-center gap-1.5 text-[12px] font-medium text-white/60 sm:inline-flex">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
              </span>
              Audio • MP3
            </span>
          </div>
        </article>
      </div>
    </Reveal>
  );
}

function LessonPreview() {
  const { classLevel, subjectMeta } = useTeaching();
  const rows = [
    { label: "सीखने का उद्देश्य + Audio", w: "88%" },
    { label: "सरल व्याख्या • ᱥᱟᱱᱛᱟᱲᱤ", w: "96%" },
    { label: "कक्षा गतिविधि • 🔊", w: "74%" },
  ];

  return (
    <div className="rounded-3xl border border-white/14 bg-black/25 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre">Class {classLevel} · {subjectMeta.label} • 🔊</span>
        <span className="font-deva text-[11px] text-white/45">बिलिंगुअल + ऑडियो</span>
      </div>
      <div className="mt-3.5 space-y-2.5">
        {rows.map((row, i) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-ochre/20 text-[10px] font-bold text-ochre">{i + 1}</span>
            <span className="font-deva w-[46%] shrink-0 truncate text-[12px] text-white/70">{row.label}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full rounded-full bg-gradient-to-r from-ochre to-clay transition-all duration-1000 ease-out group-hover:opacity-100" style={{ width: row.w, opacity: 0.75 }} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="flex gap-0.5">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="block w-0.5 h-3 rounded-full bg-ochre animate-wave-bar" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </span>
        <span className="text-[10px] text-white/40">Santhali MP3 • Real TTS</span>
      </div>
    </div>
  );
}

function TranslationPreview() {
  const rows = [
    { hindi: "पानी + 🔊", santhali: "ᱫᱟᱜ", roman: "dag" },
    { hindi: "मिट्टी", santhali: "ᱦᱟᱥᱟ", roman: "hasa" },
    { hindi: "गाँव • Audio", santhali: "ᱟᱹᱛᱩ", roman: "atu" },
  ];

  return (
    <div className="rounded-3xl border border-white/14 bg-black/25 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre"><IconSwap className="h-3 w-3" />Ol Chiki + Audio</span>
        <span className="text-[11px] text-white/45">Real AI • 🔊</span>
      </div>
      <div className="mt-3.5 space-y-2">
        {rows.map((row) => (
          <div key={row.hindi} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2 group-hover:bg-white/[0.08] transition-colors">
            <span className="font-deva text-[13px] text-white/75">{row.hindi}</span>
            <IconArrowRight className="h-3 w-3 text-white/30" />
            <span className="font-olchiki text-[14px] text-ochre">{row.santhali}</span>
            <span className="ml-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-white/30">
              <span className="h-3 w-3 rounded-full bg-ochre/20 grid place-items-center"><svg viewBox="0 0 24 24" className="h-2 w-2 text-ochre" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg></span>
              {row.roman}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"><span className="block h-full w-[92%] rounded-full bg-gradient-to-r from-leaf to-ochre" /></span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">Real AI • 92% + Audio</span>
      </div>
    </div>
  );
}

function WorksheetPreview() {
  const { classLevel, subjectMeta } = useTeaching();
  const rows = [
    { n: 1, w: "88%", audio: true },
    { n: 2, w: "70%", audio: false },
    { n: 3, w: "80%", audio: true },
  ];

  return (
    <div className="rounded-3xl border border-white/14 bg-black/25 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre">Class {classLevel} · {subjectMeta.label} • 🔊</span>
        <span className="font-deva text-[11px] text-white/45">बिलिंगुअल + Audio</span>
      </div>
      <div className="mt-3.5 space-y-2.5">
        {rows.map((row) => (
          <div key={row.n} className="flex items-center gap-2.5">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border border-white/20 text-[10px] font-bold text-white/60">{row.n}</span>
            <span className="h-3 flex-1 rounded-[3px] border-b border-white/15 bg-white/[0.06]"><span className="mt-[3px] block h-px bg-white/25" style={{ width: row.w }} /></span>
            {row.audio && <span className="h-4 w-4 rounded-full bg-ochre/20 grid place-items-center"><svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-ochre" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg></span>}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="font-deva text-[10px] text-white/40">बिलिंगुअल + MP3 Audio • Real Backend</span>
        <span className="ml-auto rounded-full border border-ochre/40 bg-ochre/15 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-ochre">Audio</span>
      </div>
    </div>
  );
}

function FlashcardPreview() {
  const { classLevel, subjectMeta } = useTeaching();
  return (
    <div className="rounded-3xl border border-white/14 bg-black/25 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre">Class {classLevel} · {subjectMeta.label} • 🔊</span>
        <span className="font-deva text-[11px] text-white/45">फ़्लैशकार्ड + Audio</span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="relative grid h-16 w-12 place-items-center rounded-xl border border-white/20 bg-gradient-to-br from-white/20 to-white/5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/60" style={{ transform: `rotate(${(i - 1) * 6}deg) translateY(${i === 1 ? -4 : 2}px)` }}>
            {i === 1 ? "Q" : ""}
            {i === 1 && <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-ochre text-ink"><svg viewBox="0 0 24 24" className="h-2 w-2" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg></span>}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-deva text-[10.5px] text-white/40">पलटकर + 🔊 सुनें</span>
        <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-white/75">Card 2 • Audio</span>
      </div>
    </div>
  );
}

export function FeatureCards() {
  return (
    <section className="relative pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-clay" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-clay">Real Backend • Audio • AI</span>
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink">
            What do you <span className="text-gradient-ink">want to do</span> today? • 🔊
          </h2>
          <p className="font-deva mt-3 text-[15px] text-ink/55">आज आप क्या करना चाहती हैं? — Real AI से पाठ बनाइए, अनुवाद + Voice + Audio, अभ्यास पत्रिका + Audio, फ़्लैशकार्ड + Per-card Audio। सभी में authentic Santhali speech।</p>
        </Reveal>

        <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          <FeatureCard index="01 • Audio" eyebrow="Bilingual + Audio" title="Lesson Generator" hindiTitle="पाठ जनरेटर + ऑडियो" description="Create bilingual Hindi + Santhali lessons with authentic Santhali TTS audio. Real backend: Gemini AI + Shunya Labs." cta="Generate Lesson + Audio" to="/lesson-generator" ariaLabel="Open Lesson Generator" meta="Audio • MP3" delay={80} gradient="bg-[linear-gradient(150deg,#33417c_0%,#202a5c_48%,#0e1330_100%)]" accentText="text-ochre" accentBorder="border-ochre/35 bg-ochre/10" icon={<IconBook className="h-7 w-7 text-ochre sm:h-8 sm:w-8" />} watermark={<IconBook className="h-[210px] w-[210px] text-white sm:h-[250px] sm:w-[250px]" />} preview={<LessonPreview />} />

          <FeatureCard index="02 • Voice + Audio" eyebrow="Hindi → Santhali + Voice" title="Translation Studio" hindiTitle="अनुवाद + आवाज़ + ऑडियो" description="Real AI translation with Base64 MP3 audio + voice translation: Hindi speech → Santhali text → Santhali speech. Authentic TTS." cta="Open Translation + Voice" to="/translation-studio" ariaLabel="Open Translation Studio" meta="Voice + Audio" delay={180} gradient="bg-[linear-gradient(150deg,#a83c1f_0%,#c1502e_46%,#5c1d10_100%)]" accentText="text-ochre" accentBorder="border-ochre/40 bg-ochre/12" icon={<IconLanguages className="h-7 w-7 text-ochre sm:h-8 sm:w-8" />} watermark={<IconLanguages className="h-[210px] w-[210px] text-white sm:h-[250px] sm:w-[250px]" />} preview={<TranslationPreview />} />

          <FeatureCard index="03 • Bilingual Audio" eyebrow="Bilingual + Audio" title="Worksheet Generator" hindiTitle="अभ्यास पत्रिका + ऑडियो" description="Bilingual worksheets (Hindi + Santhali) with combined Santhali audio. Real backend returns structured questions + MP3." cta="Generate Worksheet + Audio" to="/worksheet-generator" ariaLabel="Open Worksheet Generator" meta="Audio • MP3" delay={260} gradient="bg-[linear-gradient(150deg,#2e6b4f_0%,#1f4a37_46%,#0c2419_100%)]" accentText="text-ochre" accentBorder="border-ochre/35 bg-ochre/10" icon={<IconWorksheet className="h-7 w-7 text-ochre sm:h-8 sm:w-8" />} watermark={<IconWorksheet className="h-[210px] w-[210px] text-white sm:h-[250px] sm:w-[250px]" />} preview={<WorksheetPreview />} />

          <FeatureCard index="04 • Per-card Audio" eyebrow="Bilingual + Per-card Audio" title="Flashcard Generator" hindiTitle="फ़्लैशकार्ड + हर कार्ड ऑडियो" description="Bilingual flashcards where every Santhali card has its own MP3 audio. Flip cards with real voice in classroom." cta="Generate Flashcards + Audio" to="/flashcard-generator" ariaLabel="Open Flashcard Generator" meta="Per-card Audio" delay={340} gradient="bg-[linear-gradient(150deg,#7a3a86_0%,#4d2357_48%,#1c0d21_100%)]" accentText="text-ochre" accentBorder="border-ochre/35 bg-ochre/10" icon={<IconFlashcards className="h-7 w-7 text-ochre sm:h-8 sm:w-8" />} watermark={<IconFlashcards className="h-[210px] w-[210px] text-white sm:h-[250px] sm:w-[250px]" />} preview={<FlashcardPreview />} />
        </div>
      </div>
    </section>
  );
}
