import { useState } from "react";
import type { LessonResponse } from "@/services/bhashaApi";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiTile } from "@/components/ui/Culture";
import { IconBook, IconCheck, IconCopy, IconDownload, IconSparkle, IconSwap } from "@/components/ui/Icons";
import { useTeaching } from "@/lib/store";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { FloatingParticles, GradientOrbs } from "@/components/ui/Animations";

function Section({ title, hindi, children, delay = 0 }: { title: string; hindi: string; children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <section className="py-6 first:pt-2">
        <div className="flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-ochre to-clay" />
          <h3 className="font-deva text-[15px] font-semibold text-ink">{hindi}</h3>
          <span className="text-[10px] uppercase tracking-[0.18em] text-ink/35">{title}</span>
        </div>
        <div className="mt-3">{children}</div>
      </section>
    </Reveal>
  );
}

export function LessonResult({ lesson }: { lesson: LessonResponse }) {
  const { openTranslationStudio } = useTeaching();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"hindi" | "santhali">("hindi");

  const copy = async () => {
    const text = activeTab === "hindi" ? lesson.lesson_content : lesson.santhali_lesson_content;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const download = () => {
    const content = `BHASHA SETU — Lesson
Topic: ${lesson.topic}
Class: ${lesson.class_level}
Subject: ${lesson.subject}

--- HINDI ---
${lesson.lesson_content}

--- SANTHALI ---
${lesson.santhali_lesson_content}

--- TEACHER READING ---
${lesson.teacher_reading}
`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bhasha-setu-${lesson.topic}-lesson.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Simple parsing of lesson content for readability - split by lines
  const hindiParagraphs = lesson.lesson_content.split(/\n+/).filter(Boolean);
  const santhaliParagraphs = lesson.santhali_lesson_content.split(/\n+/).filter(Boolean);
  const teacherReadingParagraphs = lesson.teacher_reading.split(/\n+/).filter(Boolean);

  return (
    <article className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      <FloatingParticles />
      <GradientOrbs className="opacity-30" />
      
      {/* header */}
      <header className="relative overflow-hidden bg-ink px-6 py-6 text-white sm:px-8">
        <SohraiTile id="result-head" color="#F3E7D2" opacity={0.08} className="pointer-events-none absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-clay/30 blur-[70px] animate-glow" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-ochre/20 blur-[60px] animate-glow" style={{ animationDelay: "1s" }} />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ochre">
              <IconSparkle className="h-3.5 w-3.5 animate-pulse" />
              AI-generated bilingual lesson
            </p>

            <h1 className="font-deva mt-2 text-[1.5rem] font-semibold leading-snug sm:text-[1.85rem]">
              {lesson.topic}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                {lesson.class_level}
              </span>

              <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                {lesson.subject}
              </span>

              <span className="rounded-lg border border-ochre/35 bg-ochre/12 px-2.5 py-1 text-[11.5px] font-semibold text-ochre">
                हिन्दी + ᱥᱟᱱᱛᱟᱲᱤ
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 print:hidden">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              {copied ? <IconCheck className="h-4 w-4 text-leaf" /> : <IconCopy className="h-4 w-4 text-ochre" />}
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              type="button"
              onClick={download}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              <IconDownload className="h-4 w-4 text-ochre" />
              Download
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
            >
              <IconBook className="h-4 w-4 text-ochre" />
              Print
            </button>
          </div>
        </div>
      </header>

      {/* Audio player */}
      <div className="border-b border-ink/[0.07] bg-paper/50 px-6 py-4 sm:px-8">
        <p className="mb-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/40">
          Santhali Audio • ᱥᱟᱱᱛᱟᱲᱤ ᱟᱲᱟᱝ
        </p>

        <AudioPlayer
          base64={lesson.audio_base64}
          contentType={lesson.audio_content_type}
          title={`Santhali lesson: ${lesson.topic}`}
        />

        <p className="font-deva mt-2 text-[11px] text-ink/45">
          यह ऑडियो संथाली पाठ का है — कक्षा में सुनाने के लिए उपयोगी।
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-ink/[0.07] bg-white px-6 py-3 sm:px-8">
        <button
          type="button"
          onClick={() => setActiveTab("hindi")}
          className={`rounded-xl px-4 py-2 text-[13px] font-semibold transition-all ${
            activeTab === "hindi"
              ? "bg-ink text-white shadow"
              : "bg-ink/5 text-ink/60 hover:bg-ink/10"
          }`}
        >
          <span className="font-deva">हिन्दी पाठ</span> • Hindi
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("santhali")}
          className={`rounded-xl px-4 py-2 text-[13px] font-semibold transition-all ${
            activeTab === "santhali"
              ? "bg-clay text-white shadow"
              : "bg-ink/5 text-ink/60 hover:bg-ink/10"
          }`}
        >
          <span className="font-olchiki">ᱥᱟᱱᱛᱟᱲᱤ</span> • Santhali
        </button>
      </div>

      {/* body */}
      <div className="px-6 py-6 sm:px-8">
        {activeTab === "hindi" ? (
          <div className="space-y-1">
            {hindiParagraphs.map((para, i) => (
              <p
                key={i}
                className="font-deva text-[15.5px] leading-[1.9] text-ink/80 sm:text-[16.5px] animate-[reveal-up_0.5s_ease_both]"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {para}
              </p>
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {/* Santali Lesson */}
            {santhaliParagraphs.map((para, i) => (
              <p
                key={i}
                className="font-olchiki text-[16px] leading-[1.9] text-ink/80 sm:text-[17px] animate-[reveal-up_0.5s_ease_both]"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {para}
              </p>
            ))}

            {/* Teacher Reading — NEW FEATURE */}
            <div className="relative mt-7 rounded-2xl border border-leaf/20 bg-leaf/[0.05] p-4">
              <div className="flex items-center gap-2">
                <span className="h-1 w-5 rounded-full bg-leaf" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-leaf">
                  Teacher Reading
                </p>

                <span className="font-deva text-[10px] text-ink/35">
                  • शिक्षक पठन
                </span>
              </div>

              <div className="mt-3 space-y-1">
                {teacherReadingParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="font-deva text-[15px] leading-[1.9] text-ink/80 sm:text-[16px]"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <p className="font-deva mt-3 text-[10.5px] leading-relaxed text-ink/45">
                वही संथाली पाठ देवनागरी में दिया गया है, ताकि हिन्दी-माध्यम
                शिक्षक इसे आसानी से पढ़ और बोल सकें।
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-clay/15 bg-clay/[0.04] p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-clay/70">
                Teacher Note • शिक्षक नोट
              </p>

              <p className="font-deva mt-1 text-[13px] text-ink/60">
                यह संथाली अनुवाद AI द्वारा तैयार किया गया है। कक्षा में उपयोग से
                पहले भाषा विशेषज्ञ से जाँच कराएँ।
              </p>
            </div>
          </div>
        )}
      </div>

      {/* footer */}
      <div className="flex flex-wrap items-center gap-3 border-t border-ink/[0.07] bg-paper px-6 py-4 sm:px-8 print:hidden">
        <p className="font-deva text-[12px] leading-snug text-ink/50">
          कक्षा में पढ़ाने से पहले इसे अपने अनुभव के अनुसार बदल लें।
        </p>

        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={() => openTranslationStudio(lesson.lesson_content)}
            className="inline-flex items-center gap-2 rounded-xl border border-ink/12 bg-white px-3.5 py-2 text-[12.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40"
          >
            <IconSwap className="h-4 w-4 text-clay" />
            <span className="font-olchiki text-[13px]">ᱥᱟᱱᱛᱟᱲᱤ</span> में अनुवाद
          </button>

          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-3.5 py-2 text-[12.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            {copied ? <IconCheck className="h-4 w-4 text-leaf" /> : <IconCopy className="h-4 w-4 text-ochre" />}
            {copied ? "Copied" : "Copy lesson"}
          </button>
        </div>
      </div>
    </article>
  );
}