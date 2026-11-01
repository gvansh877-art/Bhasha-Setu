import { Hero } from "@/components/dashboard/Hero";
import { LanguageIndicator } from "@/components/dashboard/LanguageIndicator";
import { ContextBar } from "@/components/dashboard/ContextBar";
import { FeatureCards } from "@/components/dashboard/FeatureCards";
import { Reveal } from "@/components/ui/Reveal";
import { useEffect, useState } from "react";
import { getBackendHealth, getApiBaseUrl, type HealthResponse } from "@/services/bhashaApi";
import logo from "@/assets/bhasha-setu-logo.png";

const FLOW = [
  { step: "1", title: "कक्षा और विषय चुनें + Audio", text: "Set class & subject once — every tool follows it, with bilingual audio." },
  { step: "2", title: "पाठ बनाएँ या अनुवाद + Voice", text: "Real AI: Gemini translation + Shunya TTS + voice pipeline." },
  { step: "3", title: "कक्षा में पढ़ाएँ • 🔊", text: "Teach with authentic Santhali speech — MP3 audio from real backend." },
];

function FlowStrip() {
  return (
    <Reveal delay={120} className="mt-10 sm:mt-12">
      <div className="grid gap-3 sm:grid-cols-3">
        {FLOW.map((item, i) => (
          <div key={item.step} className="group relative flex items-start gap-3 rounded-2xl border border-ink/[0.08] bg-white/60 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/30 hover:bg-white hover:shadow-lift">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-ochre to-clay text-[13px] font-bold text-white transition-transform duration-300 group-hover:scale-110">{item.step}</span>
            <div>
              <p className="font-deva text-[13.5px] font-semibold text-ink">{item.title}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-ink/50">{item.text}</p>
            </div>
            {i < FLOW.length - 1 && <span className="absolute -right-2.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-ink/[0.08] bg-white/60 sm:block" />}
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function BackendBanner() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [status, setStatus] = useState<"checking" | "online" | "offline">("checking");

  useEffect(() => {
    let cancelled = false;
    const check = async () => {
      try {
        const h = await getBackendHealth();
        if (!cancelled) {
          setHealth(h);
          setStatus("online");
        }
      } catch {
        if (!cancelled) setStatus("offline");
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
    <Reveal delay={60} className="mt-6">
      <div className="relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-xl bg-white shadow-sm">
            <img src={logo} alt="" className="h-full w-full object-cover" />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">BHASHA SETU Backend • Real Integration</p>
            <p className="font-deva text-[12.5px] text-ink/60">
              {status === "checking" ? "Checking backend connection..." : status === "online" ? `✅ ${health?.service} • ${health?.version} • ${health?.status} • Audio Ready` : "❌ Backend offline • Please start FastAPI at " + getApiBaseUrl()}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${status === "online" ? "border-leaf/20 bg-leaf/10 text-leaf" : status === "offline" ? "border-clay/20 bg-clay/10 text-clay" : "border-ochre/20 bg-ochre/10 text-ochre"}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${status === "online" ? "bg-leaf animate-pulse" : status === "offline" ? "bg-clay" : "bg-ochre animate-pulse"}`} />
              {status === "online" ? "Online • Audio" : status === "offline" ? "Offline" : "Checking"}
            </span>
            <span className="hidden text-[11px] text-ink/30 sm:block">{getApiBaseUrl()}</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Dashboard() {
  return (
    <>
      <Hero />
      <LanguageIndicator />
      <main className="relative">
        <div className="relative bg-paper">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-[0.5]" style={{ background: "radial-gradient(120% 100% at 50% 0%, rgba(193,80,46,0.10), transparent 70%)" }} />
          <div className="relative mx-auto w-full max-w-[1240px] px-5 pt-0 sm:px-6">
            <ContextBar className="-mt-14 sm:-mt-16" />
            <BackendBanner />
            <FlowStrip />
            <FeatureCards />
          </div>
        </div>
      </main>
    </>
  );
}
