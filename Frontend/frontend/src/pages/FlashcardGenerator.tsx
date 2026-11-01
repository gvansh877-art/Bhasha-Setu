import { useEffect, useState } from "react";
import { ToolHeader } from "@/components/ToolHeader";
import { FlashcardForm } from "@/components/flashcard/FlashcardForm";
import { FlashcardEmptyState, FlashcardErrorState, FlashcardLoader } from "@/components/flashcard/FlashcardStates";
import { FlashcardResult } from "@/components/flashcard/FlashcardResult";
import { useTeaching, SUBJECTS } from "@/lib/store";
import { topicIdeas } from "@/lib/lesson";
import { useFlashcardGeneration } from "@/lib/useFlashcardGeneration";
import { IconFlashcards } from "@/components/ui/Icons";

const LOAD_STAGE_MS = 2200;

export function FlashcardGenerator() {
  const { classLevel, setClassLevel, subject, setSubject } = useTeaching();

  const [topic, setTopic] = useState(() => topicIdeas("evs", 3)[0]);
  const [cardCount, setCardCount] = useState(10);
  const [loadStage, setLoadStage] = useState(0);

  const { status, set, error, errorKind, run, retry } = useFlashcardGeneration();

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
    void run({ classLevel, subject, topic, cardCount });
  };

  useEffect(() => {
    if (status !== "success") return;
    const id = window.setTimeout(() => {
      document.getElementById("flashcard-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [status]);

  const subjectLabel = SUBJECTS.find((s) => s.id === subject)?.label ?? "";

  return (
    <>
      <ToolHeader
        index="04 · Flashcard Generator • Per-card Audio"
        title="Flashcard Generator"
        hindiTitle="फ़्लैशकार्ड — द्विभाषी + हर कार्ड के लिए ऑडियो • हिन्दी + ᱥᱟᱱᱛᱟᱲᱤ + 🔊"
        description="Choose your class and subject, type a topic, and get bilingual flashcards (Hindi + Santhali) where every Santhali card has its own authentic MP3 audio from Shunya Labs. Flip cards in class with real voice."
        icon={<IconFlashcards className="h-6 w-6 text-ochre sm:h-7 sm:w-7" />}
        meta={
          <div className="flex flex-wrap gap-2">
            <span className="rounded-xl border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] text-white/55">कक्षा {classLevel} · {subjectLabel}</span>
            <span className="rounded-xl border border-ochre/30 bg-ochre/10 px-3 py-1.5 text-[12px] font-semibold text-ochre">Per-card Audio</span>
          </div>
        }
      />

      <main className="bg-paper">
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-9 sm:px-6 sm:py-11">
          <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-8">
            <FlashcardForm classLevel={classLevel} onClassChange={setClassLevel} subject={subject} onSubjectChange={setSubject} topic={topic} onTopicChange={setTopic} cardCount={cardCount} onCardCountChange={setCardCount} onSubmit={submit} loading={status === "loading"} hasResult={status === "success"} />

            <div id="flashcard-result" className="min-w-0 scroll-mt-28">
              {status === "idle" && <FlashcardEmptyState />}
              {status === "loading" && <FlashcardLoader stage={loadStage} />}
              {status === "error" && <FlashcardErrorState message={error} onRetry={retry} kind={errorKind} />}
              {status === "success" && set && <FlashcardResult set={set} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
