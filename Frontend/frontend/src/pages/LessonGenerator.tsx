import { useEffect, useState } from "react";
import { ToolHeader } from "@/components/ToolHeader";
import { LessonForm } from "@/components/lesson/LessonForm";
import { LessonLoader } from "@/components/lesson/LessonLoader";
import { LessonResult } from "@/components/lesson/LessonResult";
import { LessonEmptyState, LessonErrorState } from "@/components/lesson/LessonStates";
import { useTeaching, SUBJECTS } from "@/lib/store";
import { topicIdeas } from "@/lib/lesson";
import { useLessonGeneration } from "@/lib/useLessonGeneration";
import { IconBook } from "@/components/ui/Icons";

export function LessonGenerator() {
  const { classLevel, setClassLevel, subject, setSubject } = useTeaching();

  const [topic, setTopic] = useState(() => topicIdeas("evs", 3)[0]);
  const { status, lesson, error, errorKind, run, retry } = useLessonGeneration();

  useEffect(() => {
    setTopic(topicIdeas(subject, classLevel)[0]);
  }, [subject, classLevel]);

  const submit = () => {
    void run({ classLevel, subject, topic });
  };

  useEffect(() => {
    if (status !== "success") return;
    const id = window.setTimeout(() => {
      document.getElementById("lesson-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [status]);

  const subjectLabel = SUBJECTS.find((s) => s.id === subject)?.label ?? "";

  return (
    <>
      <ToolHeader
        index="01 · Lesson Generator • Bilingual + Audio"
        title="Lesson Generator"
        hindiTitle="पाठ जनरेटर — द्विभाषी + ऑडियो • हिन्दी + ᱥᱟᱱᱛᱟᱲᱤ + 🔊"
        description="Choose your class and subject, type a topic, and get a structured bilingual lesson (Hindi + Santhali) with authentic Santhali audio via Shunya Labs. Real backend uses Gemini AI for generation."
        icon={<IconBook className="h-6 w-6 text-ochre sm:h-7 sm:w-7" />}
        meta={
          <div className="flex flex-wrap gap-2">
            <span className="rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] text-white/55">कक्षा {classLevel} · {subjectLabel}</span>
            <span className="rounded-xl border border-ochre/30 bg-ochre/10 px-3 py-1.5 text-[12px] font-semibold text-ochre">Audio • MP3 • Real AI</span>
          </div>
        }
      />

      <main className="bg-paper">
        <div className="pointer-events-none absolute inset-x-0 h-64 opacity-50" style={{ background: "radial-gradient(120% 100% at 50% 0%, rgba(193,80,46,0.10), transparent 70%)" }} />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-9 sm:px-6 sm:py-11">
          <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-8">
            <LessonForm classLevel={classLevel} onClassChange={setClassLevel} subject={subject} onSubjectChange={setSubject} topic={topic} onTopicChange={setTopic} onSubmit={submit} loading={status === "loading"} hasResult={status === "success"} />

            <div id="lesson-result" className="min-w-0 scroll-mt-28">
              {status === "idle" && <LessonEmptyState />}
              {status === "loading" && <LessonLoader />}
              {status === "error" && <LessonErrorState message={error} onRetry={retry} kind={errorKind} />}
              {status === "success" && lesson && <LessonResult lesson={lesson} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
