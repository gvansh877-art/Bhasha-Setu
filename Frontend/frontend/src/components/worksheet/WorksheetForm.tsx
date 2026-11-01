import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiBand } from "@/components/ui/Culture";
import { IconArrowRight, IconCheck, IconSparkle } from "@/components/ui/Icons";
import { CLASSES, SUBJECTS, type ClassLevel, type SubjectId } from "@/lib/store";
import { topicIdeas, SUBJECT_HINDI } from "@/lib/lesson";
import { cn } from "@/utils/cn";

const QUESTION_COUNTS = [5, 10, 15, 20] as const;

function Field({
  label,
  hindi,
  htmlFor,
  children,
}: {
  label: string;
  hindi: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <label
          htmlFor={htmlFor}
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45"
        >
          {label}
        </label>
        <span className="font-deva text-[12px] text-ink/45">{hindi}</span>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

const selectBase =
  "w-full appearance-none rounded-2xl border border-ink/12 bg-white px-4 py-3.5 pr-11 text-[14.5px] font-semibold text-ink outline-none transition-all duration-300 focus:border-clay/50 focus:ring-4 focus:ring-clay/10 hover:border-ink/20";

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function WorksheetForm({
  classLevel,
  onClassChange,
  subject,
  onSubjectChange,
  topic,
  onTopicChange,
  questionCount,
  onQuestionCountChange,
  onSubmit,
  loading,
  hasResult,
}: {
  classLevel: ClassLevel;
  onClassChange: (c: ClassLevel) => void;
  subject: SubjectId;
  onSubjectChange: (s: SubjectId) => void;
  topic: string;
  onTopicChange: (t: string) => void;
  questionCount: number;
  onQuestionCountChange: (n: number) => void;
  onSubmit: () => void;
  loading: boolean;
  hasResult: boolean;
}) {
  const ideas = topicIdeas(subject, classLevel);
  const canSubmit = !loading && topic.trim().length > 0;

  return (
    <Reveal from="left" className="lg:sticky lg:top-24 lg:self-start">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (canSubmit) onSubmit();
        }}
        className="overflow-hidden rounded-[26px] glass-light shadow-lift"
      >
        <div className="h-1 w-full bg-gradient-to-r from-leaf via-ochre to-clay" />

        <div className="space-y-6 p-5 sm:p-6">
          <div className="rounded-2xl border border-leaf/20 bg-leaf/[0.06] px-3.5 py-3">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-leaf">
              <IconCheck className="h-3.5 w-3.5" />
              Primary FLN Classroom
            </p>
            <p className="font-deva mt-1 text-[12.5px] leading-snug text-ink/55">
              कक्षा 1–5 के लिए प्रिंट-योग्य अभ्यास पत्रिका।
            </p>
          </div>

          <Field label="Select Class" hindi="कक्षा चुनें" htmlFor="ws-class">
            <div className="relative">
              <select
                id="ws-class"
                value={classLevel}
                onChange={(e) => onClassChange(Number(e.target.value) as ClassLevel)}
                className={selectBase}
              >
                {CLASSES.map((c) => (
                  <option key={c} value={c}>
                    Class {c}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
          </Field>

          <Field label="Select Subject" hindi="विषय चुनें" htmlFor="ws-subject">
            <div className="relative">
              <select
                id="ws-subject"
                value={subject}
                onChange={(e) => onSubjectChange(e.target.value as SubjectId)}
                className={selectBase}
              >
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
            <p className="font-deva mt-1.5 text-[11.5px] text-ink/40">
              {SUBJECT_HINDI[subject]} · कक्षा {classLevel}
            </p>
          </Field>

          <Field label="Worksheet Topic" hindi="विषय-वस्तु" htmlFor="ws-topic">
            <input
              id="ws-topic"
              type="text"
              value={topic}
              onChange={(e) => onTopicChange(e.target.value)}
              placeholder="Enter a worksheet topic..."
              autoComplete="off"
              className="font-deva w-full rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 placeholder:font-sans placeholder:text-[14px] placeholder:text-ink/35 focus:border-clay/50 focus:ring-4 focus:ring-clay/10"
            />
          </Field>

          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/35">
              Suggestions
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {ideas.map((idea) => (
                <button
                  key={idea}
                  type="button"
                  onClick={() => onTopicChange(idea)}
                  className={cn(
                    "font-deva rounded-full border px-3 py-1.5 text-[12.5px] transition-all duration-300",
                    topic === idea
                      ? "-translate-y-0.5 border-transparent bg-ink text-white"
                      : "border-ink/12 bg-white/70 text-ink/65 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                  )}
                >
                  {idea}
                </button>
              ))}
            </div>
          </div>

          <Field label="Questions" hindi="प्रश्नों की संख्या" htmlFor="ws-count">
            <div className="grid grid-cols-4 gap-2">
              {QUESTION_COUNTS.map((n) => {
                const active = n === questionCount;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => onQuestionCountChange(n)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-xl border py-2.5 text-[14px] font-bold transition-all duration-300",
                      active
                        ? "-translate-y-0.5 border-transparent bg-ink text-ochre shadow-md"
                        : "border-ink/12 bg-white/70 text-ink/65 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                    )}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
            <p className="mt-1.5 text-[11.5px] leading-snug text-ink/40">
              Requested count — the backend decides what it returns.
            </p>
          </Field>

          <button
            type="submit"
            disabled={!canSubmit}
            aria-busy={loading}
            className={cn(
              "group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-5 py-4 text-[15px] font-bold transition-all duration-300",
              loading
                ? "cursor-wait bg-ink/85 text-white"
                : canSubmit
                  ? "bg-ink text-white hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-18px_rgba(18,14,12,0.9)]"
                  : "cursor-not-allowed bg-ink/25 text-white/70",
            )}
          >
            {canSubmit && !loading && (
              <span className="absolute inset-y-0 -left-full w-1/3 bg-white/25 blur-md transition-transform duration-700 group-hover:animate-shine" />
            )}
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-ochre" />
                <span className="font-deva">तैयार कर रहे हैं…</span>
              </>
            ) : (
              <>
                <IconSparkle className="h-4 w-4 text-ochre transition-transform duration-300 group-hover:rotate-12" />
                Generate Worksheet
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="font-deva text-center text-[11.5px] leading-snug text-ink/40">
            {hasResult
              ? "नई पत्रिका बनाने पर मौजूदा पत्रिका बदल जाएगी।"
              : "पत्रिका हिन्दी माध्यम में तैयार होगी।"}
          </p>
        </div>

        <div className="relative border-t border-ink/[0.07] bg-white/50 px-5 py-3.5 sm:px-6">
          <SohraiBand color="#C1502E" opacity={0.18} className="absolute inset-x-5 top-0 h-4" />
          <p className="mt-2 text-[11.5px] leading-snug text-ink/45">
            For teachers · शिक्षकों के लिए — आपको तकनीकी जानकारी भरने की आवश्यकता नहीं है।
          </p>
        </div>
      </form>
    </Reveal>
  );
}
