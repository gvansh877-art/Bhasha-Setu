import type { ReactNode } from "react";
import collage from "@/assets/jharkhand-collage.jpg";
import { Link, ROUTES } from "@/lib/router";
import { useTeaching } from "@/lib/store";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiTile, SohraiBand } from "@/components/ui/Culture";
import { IconArrowLeft, IconPin } from "@/components/ui/Icons";

type ToolHeaderProps = {
  index: string;
  title: string;
  hindiTitle: string;
  description: string;
  meta: ReactNode;
  icon: ReactNode;
};

export function ToolHeader({
  index,
  title,
  hindiTitle,
  description,
  meta,
  icon,
}: ToolHeaderProps) {
  const { classLevel, subjectMeta } = useTeaching();

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-20">
        <img
          src={collage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.5]"
          style={{ objectPosition: "70% 45%" }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(18,14,12,0.97)_0%,rgba(18,14,12,0.93)_44%,rgba(18,14,12,0.55)_70%,rgba(18,14,12,0.25)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-ink to-transparent" />
      <SohraiTile
        id={`tool-${index}`}
        color="#F3E7D2"
        opacity={0.07}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-64 w-64 animate-glow rounded-full bg-clay/30 blur-[110px]" />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-11 pt-28 sm:px-6 sm:pt-32">
        <Reveal from="left">
          <Link
            to={ROUTES.dashboard}
            className="group inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-[12px] font-medium text-white/75 backdrop-blur-md transition-all duration-300 hover:border-ochre/50 hover:text-white"
          >
            <IconArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Teacher Dashboard
          </Link>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={80} className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/18 bg-white/10 backdrop-blur-md sm:h-14 sm:w-14">
                {icon}
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-ochre">
                  {index}
                </p>
                <h1 className="font-display text-[clamp(1.9rem,4.6vw,3rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
                  {title}
                </h1>
              </div>
            </div>
            <p className="font-deva mt-3 text-[14px] text-ochre/85">{hindiTitle}</p>
            <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-white/70 sm:text-[15.5px]">
              {description}
            </p>
          </Reveal>

          <Reveal delay={160} className="flex flex-col items-start gap-2.5 sm:items-end">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-xl border border-white/14 bg-white/8 px-3 py-1.5 text-[12px] font-semibold backdrop-blur-md">
                Class {classLevel}
              </span>
              <span className="rounded-xl border border-white/14 bg-white/8 px-3 py-1.5 text-[12px] font-semibold backdrop-blur-md">
                {subjectMeta.label}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-ochre/35 bg-ochre/12 px-3 py-1.5 text-[12px] font-semibold text-ochre">
                <IconPin className="h-3.5 w-3.5" />
                Jharkhand
              </span>
            </div>
            <p className="font-deva text-[12px] text-white/45">
              कक्षा और विषय डैशबोर्ड से लिए गए
            </p>
            {meta}
          </Reveal>
        </div>

        <SohraiBand
          color="#DFA03C"
          opacity={0.18}
          className="mt-9 h-6 w-full max-w-md"
        />
      </div>
    </section>
  );
}
