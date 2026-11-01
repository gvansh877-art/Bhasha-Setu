import { useEffect, useState } from "react";
import { Link, ROUTES, useRoute } from "@/lib/router";
import { MOTHER_TONGUE } from "@/lib/store";
import logo from "@/assets/bhasha-setu-logo.png";
import { BridgeMark } from "@/components/ui/Culture";
import { IconGrid, IconBook, IconLanguages, IconWorksheet, IconFlashcards } from "@/components/ui/Icons";
import { cn } from "@/utils/cn";
import { getBackendHealth } from "@/services/bhashaApi";

const NAV = [
  { to: ROUTES.dashboard, label: "Dashboard", short: "Dashboard", Icon: IconGrid },
  { to: ROUTES.lessonGenerator, label: "Lesson Generator", short: "Lessons", Icon: IconBook },
  { to: ROUTES.translationStudio, label: "Translation Studio", short: "Translate", Icon: IconLanguages },
  { to: ROUTES.worksheetGenerator, label: "Worksheet", short: "Worksheet", Icon: IconWorksheet },
  { to: ROUTES.flashcardGenerator, label: "Flashcards", short: "Cards", Icon: IconFlashcards },
];

export function TopBar() {
  const path = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [health, setHealth] = useState<"online" | "offline" | "checking">("checking");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const check = async () => {
      try {
        await getBackendHealth();
        if (!cancelled) setHealth("online");
      } catch {
        if (!cancelled) setHealth("offline");
      }
    };
    check();
    const id = window.setInterval(check, 30000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "py-2.5" : "py-3.5 sm:py-4")}>
      <div className="mx-auto w-full max-w-[1240px] px-3 sm:px-6">
        <div className={cn("flex items-center gap-3 rounded-2xl border border-white/12 bg-ink/92 px-3 py-2.5 shadow-[0_20px_44px_-26px_rgba(18,14,12,0.95)] backdrop-blur-xl transition-all duration-500 sm:gap-5 sm:px-4", scrolled && "bg-ink/97")}>
          <Link to={ROUTES.dashboard} className="group flex shrink-0 items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[12px] bg-white sm:h-10 sm:w-10">
              <img src={logo} alt="Bhasha Setu Logo" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[15px] font-semibold tracking-tight text-white sm:text-base">Bhasha Setu</span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre/85">Setu AI • Jharkhand</span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV.map(({ to, label, short, Icon }) => {
              const active = path === to;
              return (
                <Link key={to} to={to} aria-label={label} className={cn("group relative flex items-center gap-2 rounded-xl px-2.5 py-2 text-[12.5px] font-medium transition-all duration-300 lg:px-3 lg:text-[13px]", active ? "bg-paper text-ink shadow-[0_10px_24px_-14px_rgba(0,0,0,0.9)]" : "text-white/70 hover:bg-white/10 hover:text-white")}>
                  <Icon className={cn("hidden h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 lg:block", active ? "text-clay" : "text-ochre")} />
                  <span className="xl:hidden">{short}</span>
                  <span className="hidden xl:inline">{label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <div className="hidden items-center gap-2 rounded-xl border border-ochre/35 bg-ochre/12 px-2.5 py-1.5 sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className={cn("absolute inline-flex h-full w-full rounded-full", health === "online" ? "animate-pulse-ring bg-leaf" : health === "offline" ? "bg-clay" : "animate-pulse bg-ochre")} />
                <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", health === "online" ? "bg-leaf" : health === "offline" ? "bg-clay" : "bg-ochre")} />
              </span>
              <span className="font-olchiki text-[13px] leading-none text-ochre">{MOTHER_TONGUE.script}</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">{health === "online" ? "Online" : health === "offline" ? "Offline" : "Checking"}</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/12 bg-white/6 py-1 pl-1 pr-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-ochre to-clay text-[11px] font-bold text-ink">SD</span>
              <span className="hidden leading-none lg:block">
                <span className="block text-[12px] font-semibold text-white">Sunita M.</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.16em] text-white/45">Teacher</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex gap-1.5 overflow-x-auto hide-scrollbar md:hidden">
          {NAV.map(({ to, label, short, Icon }) => {
            const active = path === to;
            return (
              <Link key={to} to={to} aria-label={label} className={cn("flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[12px] font-semibold backdrop-blur-md transition-colors", active ? "border-transparent bg-paper text-ink" : "border-white/15 bg-ink/85 text-white/75")}>
                <Icon className={cn("h-3.5 w-3.5", active ? "text-clay" : "text-ochre")} />
                {short}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
