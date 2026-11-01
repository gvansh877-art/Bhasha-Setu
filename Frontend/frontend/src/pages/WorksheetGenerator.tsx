import { useEffect, useState } from "react";
import { ToolHeader } from "@/components/ToolHeader";
import { WorksheetForm } from "@/components/worksheet/WorksheetForm";
import { WorksheetEmptyState, WorksheetErrorState, WorksheetLoader } from "@/components/worksheet/WorksheetStates";
import { WorksheetResult } from "@/components/worksheet/WorksheetResult";
import { useTeaching, SUBJECTS } from "@/lib/store";
import { topicIdeas } from "@/lib/lesson";
import { useWorksheetGeneration } from "@/lib/useWorksheetGeneration";
import { IconWorksheet } from "@/components/ui/Icons";

const LOAD_STAGE_MS = 2200;

export function WorksheetGenerator() {
  const { classLevel, setClassLevel, subject, setSubject } = useTeaching();

  const [topic, setTopic] = useState(() => topicIdeas("evs", 3)[0]);
  const [questionCount, setQuestionCount] = useState(10);
  const [loadStage, setLoadStage] = useState(0);

  const { status, worksheet, error, errorKind, run, retry } = useWorksheetGeneration();

  useEffect(() => {
    setTopic(topicIdeas(subject, classLevel)[0]);
  }, [subject, classLevel]);

  useEffect(() => {
    if (status !== "loading") {
      setLoadStage(0);
      return;
    }
    const id = window.setInterval(() => {
      setLoadStage((s) => (s < 3 ? s + 1 : s));
    }, LOAD_STAGE_MS);
    return () => window.clearInterval(id);
  }, [status]);

  const submit = () => {
    void run({ classLevel, subject, topic, questionCount });
  };

  useEffect(() => {
    if (status !== "success") return;
    const id = window.setTimeout(() => {
      document.getElementById("worksheet-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [status]);

  const subjectLabel = SUBJECTS.find((s) => s.id === subject)?.label ?? "";

  return (
    <>
      <ToolHeader
        index="03 · Worksheet Generator • Audio"
        title="Worksheet Generator"
        hindiTitle="अभ्यास पत्रिका — द्विभाषी + ऑडियो • हिन्दी + ᱥᱟᱱᱛᱟᱲᱤ + 🔊"
        description="Choose your class and subject, type a topic, and get a bilingual worksheet (Hindi + Santhali) with authentic Santhali audio. Real backend generates structured questions and combined Santhali speech via Shunya Labs."
        icon={<IconWorksheet className="h-6 w-6 text-ochre sm:h-7 sm:w-7" />}
        meta={
          <div className="flex flex-wrap gap-2">
            <span className="rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] text-white/55">कक्षा {classLevel} · {subjectLabel}</span>
            <span className="rounded-xl border border-ochre/30 bg-ochre/10 px-3 py-1.5 text-[12px] font-semibold text-ochre">Audio • MP3</span>
          </div>
        }
      />

      <main className="bg-paper">
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-9 sm:px-6 sm:py-11">
          <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-8">
            <WorksheetForm classLevel={classLevel} onClassChange={setClassLevel} subject={subject} onSubjectChange={setSubject} topic={topic} onTopicChange={setTopic} questionCount={questionCount} onQuestionCountChange={setQuestionCount} onSubmit={submit} loading={status === "loading"} hasResult={status === "success"} />

            <div id="worksheet-result" className="min-w-0 scroll-mt-28">
              {status === "idle" && <WorksheetEmptyState />}
              {status === "loading" && <WorksheetLoader stage={loadStage} />}
              {status === "error" && <WorksheetErrorState message={error} onRetry={retry} kind={errorKind} />}
              {status === "success" && worksheet && <WorksheetResult worksheet={worksheet} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
