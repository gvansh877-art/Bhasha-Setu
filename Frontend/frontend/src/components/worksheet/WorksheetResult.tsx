import { useState } from "react";
import type { WorksheetResponse, WorksheetQuestion } from "@/services/bhashaApi";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiTile } from "@/components/ui/Culture";
import { IconCheck, IconCopy, IconDownload, IconWorksheet } from "@/components/ui/Icons";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { FloatingParticles } from "@/components/ui/Animations";

function QuestionCard({ index, question }: { index: number; question: WorksheetQuestion }) {
  return (
    <li className="relative group">
      <div className="flex items-start gap-3.5">
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-ink text-[12px] font-bold text-ochre transition-transform duration-300 group-hover:scale-110">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <p className="font-deva text-[16px] leading-[1.8] text-ink sm:text-[17px]">
              {question.question_text}
            </p>
            {question.question_type && (
              <span className="font-deva rounded-full border border-leaf/30 bg-leaf/[0.07] px-2 py-0.5 text-[10.5px] font-semibold text-leaf">
                {question.question_type}
              </span>
            )}
          </div>
          <div className="mt-3 space-y-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="block h-px w-full bg-ink/12" />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export function WorksheetResult({ worksheet }: { worksheet: WorksheetResponse }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"hindi" | "santhali">("hindi");
  const [showInstructions, setShowInstructions] = useState(true);

  const currentWorksheet = activeTab === "hindi" ? worksheet.hindi_worksheet : worksheet.santhali_worksheet;

  const copy = async () => {
    const text = `${currentWorksheet.title}\n${currentWorksheet.instructions}\n\n${currentWorksheet.questions.map(q => `${q.question_number}. ${q.question_text}`).join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const download = () => {
    const content = `BHASHA SETU — Worksheet\n${worksheet.hindi_worksheet.title}\nClass: ${worksheet.class_level} • Subject: ${worksheet.subject}\n\nHINDI:\n${worksheet.hindi_worksheet.title}\n${worksheet.hindi_worksheet.instructions}\n${worksheet.hindi_worksheet.questions.map(q => `${q.question_number}. ${q.question_text}`).join("\n")}\n\nSANTHALI:\n${worksheet.santhali_worksheet.title}\n${worksheet.santhali_worksheet.instructions}\n${worksheet.santhali_worksheet.questions.map(q => `${q.question_number}. ${q.question_text}`).join("\n")}\n`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bhasha-setu-worksheet-${worksheet.topic}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <article className="relative overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
      <FloatingParticles />

      {/* header */}
      <header className="relative overflow-hidden bg-ink px-6 py-6 text-white sm:px-8">
        <SohraiTile id="ws-result-head" color="#F3E7D2" opacity={0.08} className="pointer-events-none absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-leaf/25 blur-[70px] animate-glow" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-ochre/20 blur-[60px] animate-glow" style={{ animationDelay: "1s" }} />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ochre">
              <IconWorksheet className="h-3.5 w-3.5" />
              AI-generated bilingual worksheet • {worksheet.number_of_questions} questions
            </p>
            <h1 className="font-deva mt-2 text-[1.5rem] font-semibold leading-snug sm:text-[1.85rem]">
              {worksheet.topic}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                {worksheet.class_level}
              </span>
              <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                {worksheet.subject}
              </span>
              <span className="rounded-lg border border-ochre/35 bg-ochre/12 px-2.5 py-1 text-[11.5px] font-semibold text-ochre">
                {worksheet.number_of_questions} प्रश्न • ᱠᱩᱞᱤ
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 print:hidden">
            <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50">
              {copied ? <IconCheck className="h-4 w-4 text-leaf" /> : <IconCopy className="h-4 w-4 text-ochre" />}
              {copied ? "Copied" : "Copy"}
            </button>
            <button type="button" onClick={download} className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50">
              <IconDownload className="h-4 w-4 text-ochre" />
              Download
            </button>
            <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50">
              <IconWorksheet className="h-4 w-4 text-ochre" />
              Print
            </button>
          </div>
        </div>
      </header>

      {/* Audio */}
      <div className="border-b border-ink/[0.07] bg-paper/50 px-6 py-4 sm:px-8">
        <p className="mb-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/40">Santhali Worksheet Audio • ᱥᱟᱱᱛᱟᱲᱤ ᱠᱟᱹᱢᱤ ᱥᱟᱠᱟᱢ ᱟᱲᱟᱝ</p>
        <AudioPlayer base64={worksheet.audio_base64} contentType={worksheet.audio_content_type} title={`Worksheet audio: ${worksheet.topic}`} />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-ink/[0.07] bg-white px-6 py-3 sm:px-8">
        <button type="button" onClick={() => setActiveTab("hindi")} className={`rounded-xl px-4 py-2 text-[13px] font-semibold transition-all ${activeTab === "hindi" ? "bg-ink text-white shadow" : "bg-ink/5 text-ink/60 hover:bg-ink/10"}`}>
          <span className="font-deva">हिन्दी कार्यपत्रिका</span> • Hindi
        </button>
        <button type="button" onClick={() => setActiveTab("santhali")} className={`rounded-xl px-4 py-2 text-[13px] font-semibold transition-all ${activeTab === "santhali" ? "bg-leaf text-white shadow" : "bg-ink/5 text-ink/60 hover:bg-ink/10"}`}>
          <span className="font-olchiki">ᱥᱟᱱᱛᱟᱲᱤ</span> • Santhali
        </button>
      </div>

      {/* Instructions */}
      {currentWorksheet.instructions && (
        <div className="border-b border-ink/[0.07] bg-paper px-6 py-4 sm:px-8">
          <button type="button" onClick={() => setShowInstructions(!showInstructions)} className="flex w-full items-center gap-2 text-left">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink/40">Instructions / निर्देश {activeTab === "santhali" ? "• ᱩᱯᱫᱮᱥ" : ""}</span>
            <span className="ml-auto text-[12px] text-clay">{showInstructions ? "Hide" : "Show"}</span>
          </button>
          {showInstructions && (
            <p className={`mt-2 text-[14.5px] leading-[1.85] text-ink/75 ${activeTab === "santhali" ? "font-olchiki text-[15px]" : "font-deva"}`}>
              {currentWorksheet.instructions}
            </p>
          )}
        </div>
      )}

      {/* questions */}
      <div className="px-6 py-7 sm:px-8 sm:py-8">
        <h2 className="mb-6 flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.18em] text-ink/60">
          <span className="h-px w-8 bg-clay" />
          {activeTab === "hindi" ? "Questions" : "ᱠᱩᱞᱤ"} • {currentWorksheet.questions.length} {activeTab === "hindi" ? "प्रश्न" : ""}
        </h2>
        <ol className="space-y-6">
          {currentWorksheet.questions.map((q, i) => (
            <QuestionCard key={q.question_number} index={q.question_number} question={q} />
          ))}
        </ol>
      </div>

      {/* footer */}
      <div className="flex flex-wrap items-center gap-3 border-t border-ink/[0.07] bg-white px-6 py-4 sm:px-8 print:hidden">
        <p className="font-deva text-[12px] leading-snug text-ink/50">कक्षा में बाँटने से पहले इसे अपने अनुभव के अनुसार बदल लें। • ᱥᱮᱪᱮᱫ ᱢᱟᱲᱟᱝ ᱧᱮᱞ ᱛᱟᱵᱚᱱ ᱯᱮ</p>
        <div className="ml-auto flex gap-2">
          <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl border border-ink/12 bg-white px-3.5 py-2 text-[12.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40">
            <IconWorksheet className="h-4 w-4 text-clay" />
            Print worksheet
          </button>
        </div>
      </div>
    </article>
  );
}
