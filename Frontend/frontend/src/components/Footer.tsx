import { Link, ROUTES } from "@/lib/router";
import logo from "@/assets/bhasha-setu-logo.png";
import collage from "@/assets/jharkhand-collage.jpg";
import { SohraiBand } from "@/components/ui/Culture";
import { IconArrowRight, IconBook, IconLanguages, IconWorksheet, IconFlashcards } from "@/components/ui/Icons";
import { useTeaching, MOTHER_TONGUE } from "@/lib/store";

export function Footer() {
  const { classLevel, subjectMeta } = useTeaching();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <SohraiBand color="#DFA03C" opacity={0.2} className="h-8 w-full" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url(${collage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      
      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-[12px] bg-white">
                <img src={logo} alt="Bhasha Setu" className="h-full w-full object-cover" />
              </span>
              <div className="leading-none">
                <p className="font-display text-lg font-semibold">Bhasha Setu</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre/80">Setu AI · Jharkhand • Ancient Meets AI</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/55">
              A teacher-first platform for mother-tongue based learning. Lessons are drafted in Hindi and bridged into {MOTHER_TONGUE.name} ({MOTHER_TONGUE.scriptName}) with authentic Santhali TTS — review language output with a community language expert before classroom use.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/40">
                Prototype · {classLevel > 0 ? `Class ${classLevel}` : "Classes 1–5"} · {subjectMeta.label}
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ochre/30 bg-ochre/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-ochre">
                <span className="h-1.5 w-1.5 rounded-full bg-ochre animate-pulse" />
                Real Backend • Audio Enabled
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link to={ROUTES.lessonGenerator} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/40 hover:bg-white/[0.08]">
              <IconBook className="h-5 w-5 text-ochre" />
              <p className="mt-3 text-[14px] font-semibold">Lesson Generator</p>
              <p className="font-deva mt-0.5 text-[12px] text-white/45">पाठ जनरेटर • Audio</p>
              <IconArrowRight className="mt-3 h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to={ROUTES.translationStudio} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/40 hover:bg-white/[0.08]">
              <IconLanguages className="h-5 w-5 text-ochre" />
              <p className="mt-3 text-[14px] font-semibold">Translation Studio</p>
              <p className="font-deva mt-0.5 text-[12px] text-white/45">अनुवाद स्टूडियो • Voice</p>
              <IconArrowRight className="mt-3 h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to={ROUTES.worksheetGenerator} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/40 hover:bg-white/[0.08]">
              <IconWorksheet className="h-5 w-5 text-ochre" />
              <p className="mt-3 text-[14px] font-semibold">Worksheet Generator</p>
              <p className="font-deva mt-0.5 text-[12px] text-white/45">अभ्यास पत्रिका • Audio</p>
              <IconArrowRight className="mt-3 h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to={ROUTES.flashcardGenerator} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/40 hover:bg-white/[0.08]">
              <IconFlashcards className="h-5 w-5 text-ochre" />
              <p className="mt-3 text-[14px] font-semibold">Flashcard Generator</p>
              <p className="font-deva mt-0.5 text-[12px] text-white/45">फ़्लैशकार्ड • Audio</p>
              <IconArrowRight className="mt-3 h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bhasha Setu · Bridging Languages. Empowering Classrooms. • Hindi → Santhali • TTS by Shunya Labs</p>
          <p className="font-olchiki text-[13px] text-ochre/60">ᱥᱟᱱᱛᱟᱲᱤ · ᱚᱞ ᱪᱤᱠᱤ • ᱡᱚᱦᱟᱨ</p>
        </div>
      </div>
    </footer>
  );
}
