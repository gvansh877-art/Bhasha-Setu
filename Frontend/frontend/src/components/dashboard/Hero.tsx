import { useEffect, useRef, useState } from "react";
import collage from "@/assets/jharkhand-collage.jpg";
import logo from "@/assets/bhasha-setu-logo.png";
import { Link, ROUTES } from "@/lib/router";
import { useTeaching } from "@/lib/store";
import { SohraiTile, SohraiBand, SunMotif } from "@/components/ui/Culture";
import { TextReveal, Reveal } from "@/components/ui/Reveal";
import { IconArrowRight, IconBook, IconCheck, IconLanguages, IconPin, IconSwap } from "@/components/ui/Icons";
import { FloatingParticles, GradientOrbs } from "@/components/ui/Animations";
import { getBackendHealth, getSpeechStatus } from "@/services/bhashaApi";

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const { classLevel, subjectMeta } = useTeaching();
  const [backendStatus, setBackendStatus] = useState<"checking" | "online" | "offline">("checking");
  const [speechAvailable, setSpeechAvailable] = useState(false);

  useEffect(() => {
    const node = parallaxRef.current;
    if (!node) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = Math.min(window.scrollY, 900);
        node.style.transform = `translate3d(0, ${y * 0.14}px, 0) scale(${1 + y * 0.0001})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const check = async () => {
      try {
        await getBackendHealth();
        if (!cancelled) setBackendStatus("online");
        const speech = await getSpeechStatus();
        if (!cancelled) setSpeechAvailable(speech.available);
      } catch {
        if (!cancelled) setBackendStatus("offline");
      }
    };
    check();
    const id = setInterval(check, 30000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-paper text-ink">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
          <img src={collage} alt="Cultural collage of Jharkhand" className="h-full w-full animate-drift object-cover object-center" />
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(251,245,236,0.97)_0%,rgba(251,245,236,0.94)_36%,rgba(251,245,236,0.62)_58%,rgba(251,245,236,0.06)_82%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-paper via-paper/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-paper via-paper/85 to-transparent" />
      <SohraiTile id="hero-tile" color="#8C2F1B" opacity={0.06} className="absolute inset-0 -z-10 h-full w-full" />
      <GradientOrbs className="opacity-40" />
      <FloatingParticles className="opacity-60" />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-ink/[0.08] bg-white/72 p-6 shadow-lift backdrop-blur-xl sm:p-8 lg:p-9">
              <SohraiBand color="#C1502E" opacity={0.3} className="absolute inset-x-7 top-0 h-6" />

              <Reveal from="left" className="mt-4 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-clay/25 bg-clay/[0.07] px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-clay" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-clay" />
                  </span>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-clay-2">Mother-tongue learning • Real AI</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                  <IconPin className="h-3.5 w-3.5 text-clay" />
                  Jharkhand • Audio
                </span>
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${backendStatus === "online" ? "border-leaf/30 bg-leaf/10 text-leaf" : backendStatus === "offline" ? "border-clay/30 bg-clay/10 text-clay" : "border-ochre/30 bg-ochre/10 text-ochre"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${backendStatus === "online" ? "bg-leaf animate-pulse" : backendStatus === "offline" ? "bg-clay" : "bg-ochre animate-pulse"}`} />
                  {backendStatus === "online" ? "Backend Online" : backendStatus === "offline" ? "Backend Offline" : "Checking..."}
                </span>
              </Reveal>

              <div className="mt-5 flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-white shadow-md sm:h-16 sm:w-16">
                  <img src={logo} alt="Bhasha Setu Logo" className="h-full w-full object-cover" />
                </span>
                <div>
                  <h1 className="font-display text-[clamp(2.9rem,7.6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
                    <TextReveal text="Bhasha" delay={120} />
                    <br />
                    <span className="text-gradient-ink">
                      <TextReveal text="Setu" delay={250} />
                    </span>
                  </h1>
                </div>
              </div>

              <Reveal delay={460} className="mt-4 flex items-center gap-3">
                <span className="h-px w-9 bg-gradient-to-r from-clay to-transparent" />
                <p className="font-display text-[15px] italic tracking-tight text-clay-2 sm:text-[17px]">Bridging Languages. Empowering Classrooms. • Audio</p>
              </Reveal>

              <Reveal delay={540}>
                <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-ink/65 sm:text-[16px]">
                  Bhasha Setu helps teachers <span className="font-semibold text-ink">create</span> structured Hindi lessons and <span className="font-semibold text-ink">translate</span> into <span className="font-olchiki text-clay-2">ᱥᱟᱱᱛᱟᱲᱤ</span> with authentic Santhali TTS — Real Gemini AI + Shunya Labs audio, so children learn first in the language they think in.
                </p>
              </Reveal>

              <Reveal delay={640} className="mt-7 flex flex-wrap items-center gap-3">
                <Link to={ROUTES.lessonGenerator} className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-18px_rgba(18,14,12,0.85)]">
                  <span className="absolute inset-y-0 -left-full w-1/3 bg-white/30 blur-md transition-transform duration-700 group-hover:animate-shine" />
                  <IconBook className="h-[18px] w-[18px] text-ochre transition-transform duration-300 group-hover:scale-110" />
                  Generate Lesson + Audio
                  <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link to={ROUTES.translationStudio} className="group inline-flex items-center gap-2.5 rounded-full border border-ink/14 bg-white/80 px-6 py-3.5 text-[14.5px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/45 hover:bg-white">
                  <IconLanguages className="h-[18px] w-[18px] text-clay" />
                  Translate + Voice
                </Link>
              </Reveal>

              <Reveal delay={720} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  { k: "Classes", v: "1 – 5" },
                  { k: "Backend", v: backendStatus === "online" ? "Online • Audio" : "Checking" },
                  { k: "Flow", v: "हिन्दी → ᱥᱟᱱᱛᱟᱲᱤ • 🔊" },
                ].map((item) => (
                  <div key={item.k} className="flex items-baseline gap-2">
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-ink/40">{item.k}</span>
                    <span className="font-deva text-[13.5px] font-semibold text-ink/85">{item.v}</span>
                  </div>
                ))}
              </Reveal>

              {speechAvailable && (
                <Reveal delay={800} className="mt-4 rounded-xl border border-leaf/20 bg-leaf/5 px-3 py-2">
                  <p className="text-[11px] font-semibold text-leaf">🎤 Voice Translation Available • Hindi speech → Santhali • Real TTS</p>
                </Reveal>
              )}
            </div>

            <div className="absolute -bottom-7 right-3 hidden animate-bob items-center gap-2 rounded-2xl border border-ink/[0.08] bg-white px-3.5 py-3 shadow-lift sm:flex lg:-right-5" style={{ animationDelay: "0.9s" }}>
              <IconSwap className="h-4 w-4 text-clay" />
              <span className="font-deva text-[13px] font-semibold text-ink">हिन्दी</span>
              <IconArrowRight className="h-3.5 w-3.5 text-ink/25" />
              <span className="font-olchiki text-[14px] font-semibold text-clay-2">ᱫᱟᱜ</span>
              <span className="ml-1 flex items-center gap-1 border-l border-ink/10 pl-2 text-[10px] uppercase tracking-[0.14em] text-ink/40">
                🔊 Audio
              </span>
            </div>

            {/* Floating audio indicator */}
            <div className="absolute -left-4 top-20 hidden animate-float items-center gap-2 rounded-2xl border border-ochre/20 bg-ochre/10 px-3 py-2 backdrop-blur-md sm:flex" style={{ animationDelay: "1.2s" }}>
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-ochre text-ink">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
              </span>
              <span className="text-[11px] font-semibold text-ink">Santhali Audio • MP3</span>
              <span className="flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="block w-0.5 h-3 rounded-full bg-ochre animate-wave-bar" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </span>
            </div>
          </div>

          <Reveal from="right" delay={200} className="relative mx-auto w-full max-w-[520px]">
            <div className="relative">
              <SunMotif className="absolute -right-5 -top-9 h-24 w-24 animate-spin-slower text-clay/40 sm:h-32 sm:w-32" />

              <div className="group relative overflow-hidden rounded-t-[150px] rounded-b-[30px] border border-ink/10 shadow-[0_50px_90px_-45px_rgba(18,14,12,0.75)]">
                <img src={collage} alt="Jharkhand collage" className="h-[360px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08] sm:h-[440px]" style={{ objectPosition: "68% 42%" }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,14,12,0.82)_0%,rgba(18,14,12,0.12)_46%,rgba(18,14,12,0.3)_100%)]" />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-white/12 px-4 py-3 backdrop-blur-md">
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-ochre">Rooted in Jharkhand • Ancient + AI</p>
                  <p className="mt-1 text-[12.5px] leading-snug text-white/85">Sohrai art, Santhal dance and village life — now with authentic Santhali voice. The world your classroom already knows, speaking its own language.</p>
                </div>

                {/* Floating audio waveform on image */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-ochre animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">Real TTS</span>
                  <span className="ml-1 flex gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="block w-0.5 rounded-full bg-ochre animate-wave-bar" style={{ height: "10px", animationDelay: `${i * 0.12}s` }} />
                    ))}
                  </span>
                </div>
              </div>

              <div className="absolute -left-3 top-12 hidden w-[182px] animate-bob rounded-2xl border border-ink/[0.08] bg-white/95 p-3.5 shadow-lift backdrop-blur-md sm:block">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-leaf"><IconCheck className="h-4 w-4 text-white" /></span>
                  <span className="text-[12px] font-bold text-ink">Lesson + Audio Ready</span>
                </div>
                <div className="mt-2.5 space-y-1.5">
                  {[92, 74, 58].map((w, i) => (
                    <span key={i} className="block h-1.5 rounded-full bg-ink/12" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="h-4 w-4 rounded-full bg-ochre/20 grid place-items-center">
                    <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-ochre" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg>
                  </span>
                  <p className="font-deva text-[11px] text-clay-2">कक्षा {classLevel} • Audio सहित</p>
                </div>
              </div>

              <div className="absolute -bottom-5 right-4 flex animate-bob items-center gap-2 rounded-2xl bg-ink px-3.5 py-2.5 text-white shadow-lift sm:right-8" style={{ animationDelay: "0.5s" }}>
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-ochre text-[11px] font-bold text-ink">{classLevel}</span>
                <span className="text-[12px] font-semibold">Class {classLevel} • {subjectMeta.label} • 🔊</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
