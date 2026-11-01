import { CLASSES, SUBJECTS, useTeaching, type ClassLevel, type SubjectId } from "@/lib/store";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconSparkle } from "@/components/ui/Icons";
import { cn } from "@/utils/cn";

const DEVANAGARI_CLASS: Record<ClassLevel, string> = {
  1: "१",
  2: "२",
  3: "३",
  4: "४",
  5: "५",
};

const SUBJECT_ACCENT: Record<SubjectId, { ring: string; text: string; bg: string }> = {
  math: { ring: "border-mid/40", text: "text-mid", bg: "bg-mid" },
  language: { ring: "border-clay/40", text: "text-clay", bg: "bg-clay" },
  evs: { ring: "border-leaf/40", text: "text-leaf", bg: "bg-leaf" },
};

export function ContextBar({ className }: { className?: string }) {
  const { classLevel, setClassLevel, subject, setSubject } = useTeaching();
  const accent = SUBJECT_ACCENT[subject];

  return (
    <Reveal delay={60} className={cn("relative z-30", className)}>
      <div className="overflow-hidden rounded-[28px] glass-light shadow-lift">
        <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-leaf" />
        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:p-7">
          {/* class */}
          <div>
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                  Select Class
                </p>
                <p className="font-deva mt-0.5 text-[13px] text-ink/55">अपनी कक्षा चुनें</p>
              </div>
              <span className="hidden items-center gap-1.5 rounded-full bg-ink/[0.05] px-2.5 py-1 text-[11px] font-semibold text-ink/50 sm:inline-flex">
                <IconSparkle className="h-3.5 w-3.5" />
                कक्षा {DEVANAGARI_CLASS[classLevel]} सक्रिय
              </span>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-2.5">
              {CLASSES.map((c) => {
                const active = c === classLevel;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setClassLevel(c)}
                    aria-pressed={active}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border px-1 py-3 text-center transition-all duration-300",
                      active
                        ? "-translate-y-0.5 border-ink bg-ink text-white shadow-[0_16px_30px_-16px_rgba(18,14,12,0.85)]"
                        : "border-ink/10 bg-white/70 text-ink/70 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white",
                    )}
                  >
                    {active && (
                      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-ochre to-clay" />
                    )}
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] opacity-60">
                      Class
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block font-display text-2xl font-semibold leading-none",
                        active ? "text-ochre" : "text-ink",
                      )}
                    >
                      {c}
                    </span>
                    <span className="font-deva mt-1 block text-[11px] opacity-55">
                      कक्षा {DEVANAGARI_CLASS[c]}
                    </span>
                    {active && (
                      <IconCheck className="absolute right-1.5 top-1.5 h-3.5 w-3.5 text-ochre" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* subject */}
          <div className="lg:border-l lg:border-ink/10 lg:pl-8">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                  Select Subject
                </p>
                <p className="font-deva mt-0.5 text-[13px] text-ink/55">विषय चुनें</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-2.5">
              {SUBJECTS.map((s) => {
                const active = s.id === subject;
                const a = SUBJECT_ACCENT[s.id];
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSubject(s.id)}
                    aria-pressed={active}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border px-2 py-3 text-left transition-all duration-300",
                      active
                        ? cn("-translate-y-0.5 border-transparent text-white shadow-[0_16px_30px_-16px_rgba(18,14,12,0.7)]", a.bg)
                        : cn("bg-white/70 text-ink/75 hover:-translate-y-0.5 hover:bg-white", a.ring),
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-150",
                          active ? "bg-white" : a.bg,
                        )}
                      />
                      <span className="text-[12px] font-semibold leading-tight sm:text-[13px]">
                        {s.label}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "font-deva mt-1 block text-[12px]",
                        active ? "text-white/80" : "text-ink/50",
                      )}
                    >
                      {s.hindi}
                    </span>
                    <span
                      className={cn(
                        "mt-1 hidden truncate text-[10px] sm:block",
                        active ? "text-white/60" : "text-ink/40",
                      )}
                    >
                      {s.blurb}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={cn("flex flex-wrap items-center gap-2 border-t border-ink/[0.07] bg-white/40 px-5 py-3 sm:px-7", accent.text)}>
          <p className="font-deva text-[12px] text-ink/55">
            आपका चयन पाठ निर्माण और अनुवाद — दोनों में स्वतः लागू होगा।
          </p>
          <span className="ml-auto rounded-full bg-ink/[0.06] px-2.5 py-1 text-[11px] font-semibold text-ink/60">
            Class {classLevel} · {SUBJECTS.find((s) => s.id === subject)?.label}
          </span>
        </div>
      </div>
    </Reveal>
  );
}
