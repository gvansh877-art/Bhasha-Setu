import { useEffect, useState, useRef } from "react";
import { ToolHeader } from "@/components/ToolHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SohraiTile } from "@/components/ui/Culture";
import { IconArrowRight, IconCheck, IconCopy, IconDownload, IconLanguages, IconSparkle, IconSwap } from "@/components/ui/Icons";
import { useTeaching } from "@/lib/store";
import { useTranslation } from "@/lib/useTranslation";
import { useVoiceTranslation } from "@/lib/useVoiceTranslation";
import { AudioPlayer, AudioButton } from "@/components/ui/AudioPlayer";
import { TranslationFlow, FloatingParticles, GradientOrbs, MicWave } from "@/components/ui/Animations";
import { textToSpeech, getApiBaseUrl } from "@/services/bhashaApi";
import { cn } from "@/utils/cn";

const SAMPLES = [
  {
    label: "EVS · पानी",
    text: "पानी हमारे जीवन का आधार है। गाँव के सब लोग पानी लाते हैं। मिट्टी में पेड़ उगते हैं। आकाश में चाँद और सूरज हैं। हमें पानी बचाना चाहिए।",
  },
  {
    label: "गणित · गिनती",
    text: "एक, दो, तीन, चार, पाँच। बच्चों, अपने हाथ की उँगलियाँ गिनो। छोटा पत्थर और बड़ा पत्थर अलग-अलग करो।",
  },
  {
    label: "भाषा · कहानी",
    text: "माँ ने कहानी सुनाई। बच्चे घर के आँगन में बैठे थे। शिक्षक ने किताब खोली और अच्छी कहानी पढ़ी।",
  },
];

export function TranslationStudio() {
  const { consumeHandoff } = useTeaching();
  const { status, result, error, errorKind, run } = useTranslation();
  const voice = useVoiceTranslation();

  const [source, setSource] = useState(SAMPLES[0].text);
  const [sourceLang, setSourceLang] = useState("hi");
  const [targetLang, setTargetLang] = useState("sat");
  const [tab, setTab] = useState<"text" | "voice">("text");
  const [copied, setCopied] = useState(false);
  const [ttsBlob, setTtsBlob] = useState<Blob | null>(null);
  const [ttsLoading, setTtsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // handoff from lesson generator
  useEffect(() => {
    const handoff = consumeHandoff();
    if (handoff && handoff.trim()) {
      setSource(handoff);
    }
  }, [consumeHandoff]);

  const handleTranslate = () => {
    if (!source.trim()) return;
    run(source, sourceLang, targetLang);
    setTtsBlob(null);
  };

  const handleCopy = async () => {
    const text = result?.translated_text || "";
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const handleDownload = () => {
    if (!result) return;
    const content = `BHASHA SETU — Translation\nSource (${result.source_language}): ${result.source_text}\nTarget (${result.target_language}): ${result.translated_text}\nTeacher Reading: ${result.teacher_reading}\n`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bhasha-setu-translation.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleTts = async () => {
    if (!result?.translated_text) return;
    setTtsLoading(true);
    try {
      const blob = await textToSpeech({ text: result.translated_text, language: targetLang });
      setTtsBlob(blob);
    } catch (e) {
      console.error(e);
    } finally {
      setTtsLoading(false);
    }
  };

  const handleVoiceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      voice.uploadAudio(file, sourceLang, targetLang);
    }
  };

  const isTranslating = status === "loading";
  const showFlow = isTranslating;

  return (
    <>
      <ToolHeader
        index="02 · Translation Studio"
        title="Translation Studio"
        hindiTitle="अनुवाद स्टूडियो — हिन्दी से संथाली (ᱚᱞ ᱪᱤᱠᱤ) • Real AI + Audio"
        description="Paste Hindi educational content. BHASHA SETU's real backend translates it into Santhali using Gemini AI and generates authentic Santhali speech with Shunya Labs. Voice translation supports Hindi speech → Santhali."
        icon={<IconLanguages className="h-6 w-6 text-ochre sm:h-7 sm:w-7" />}
        meta={
          <div className="flex flex-wrap gap-2">
            <span className="rounded-xl border border-ochre/35 bg-ochre/12 px-3 py-1.5 text-[12px] font-semibold text-ochre">
              Ol Chiki • ᱥᱟᱱᱛᱟᱲᱤ • Real AI
            </span>
            {voice.speechStatus?.available && (
              <span className="rounded-xl border border-leaf/30 bg-leaf/10 px-3 py-1.5 text-[12px] font-semibold text-leaf">
                Voice • {voice.speechStatus.message.slice(0, 20)}...
              </span>
            )}
          </div>
        }
      />

      <main className="relative bg-paper">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, rgba(193,80,46,0.08), transparent 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-6 lg:py-12">
          {/* Tabs */}
          <div className="mb-6 flex gap-2">
            <button
              type="button"
              onClick={() => setTab("text")}
              className={cn(
                "rounded-xl px-4 py-2 text-[13px] font-semibold transition-all",
                tab === "text"
                  ? "bg-ink text-white shadow"
                  : "bg-white border border-ink/10 text-ink/60 hover:bg-ink/5"
              )}
            >
              📝 Text Translation • पाठ अनुवाद
            </button>

            <button
              type="button"
              onClick={() => setTab("voice")}
              className={cn(
                "rounded-xl px-4 py-2 text-[13px] font-semibold transition-all",
                tab === "voice"
                  ? "bg-clay text-white shadow"
                  : "bg-white border border-ink/10 text-ink/60 hover:bg-ink/5"
              )}
            >
              🎤 Voice Translation • आवाज़ अनुवाद
            </button>
          </div>

          {tab === "text" ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Source */}
              <Reveal from="left">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] glass-light shadow-lift">
                  <GradientOrbs className="opacity-20" />
                  <div className="h-1 w-full bg-gradient-to-r from-clay to-ochre" />

                  <div className="relative flex items-center justify-between gap-3 px-5 pt-5 sm:px-6">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">
                        Source • Real Backend
                      </p>
                      <p className="font-deva mt-0.5 text-[13px] text-ink/60">
                        हिन्दी सामग्री यहाँ लिखें • Gemini AI
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={sourceLang}
                        onChange={(e) => setSourceLang(e.target.value)}
                        className="rounded-lg border border-ink/12 bg-white px-2 py-1 text-[11px] font-semibold"
                      >
                        <option value="hi">Hindi • हिन्दी</option>
                        <option value="sat">Santhali • ᱥᱟᱱᱛᱟᱲᱤ</option>
                        <option value="en">English</option>
                      </select>

                      <span className="font-deva rounded-full bg-ink/[0.06] px-2.5 py-1 text-[11px] font-semibold text-ink/55">
                        {source.trim() ? source.trim().split(/\s+/).length : 0} शब्द
                      </span>
                    </div>
                  </div>

                  <div className="relative px-5 pt-4 sm:px-6">
                    <div className="flex flex-wrap gap-2">
                      {SAMPLES.map((s) => (
                        <button
                          key={s.label}
                          type="button"
                          onClick={() => setSource(s.text)}
                          className="font-deva rounded-full border border-ink/12 bg-white/70 px-3 py-1.5 text-[12px] text-ink/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40 hover:bg-white"
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>

                    <textarea
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      rows={11}
                      placeholder="यहाँ हिन्दी पाठ लिखें या चिपकाएँ… Real AI translation will happen via FastAPI backend."
                      className="font-deva mt-4 w-full resize-none rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-[14.5px] leading-relaxed text-ink outline-none transition-all duration-300 placeholder:text-ink/30 focus:border-clay/50 focus:ring-4 focus:ring-clay/10"
                    />
                  </div>

                  <div className="relative mt-auto px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <div className="mb-3 flex items-center gap-2">
                      <IconSwap className="h-4 w-4 text-clay" />

                      <select
                        value={targetLang}
                        onChange={(e) => setTargetLang(e.target.value)}
                        className="rounded-lg border border-ink/12 bg-white px-2 py-1 text-[12px] font-semibold"
                      >
                        <option value="sat">
                          Santhali (Ol Chiki) • ᱥᱟᱱᱛᱟᱲᱤ
                        </option>
                        <option value="hi">Hindi • हिन्दी</option>
                        <option value="en">English</option>
                      </select>

                      <span className="text-[11px] text-ink/40">
                        → {targetLang === "sat" ? "Authentic Santhali TTS" : "Translation"}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleTranslate}
                      disabled={isTranslating || !source.trim()}
                      className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-clay-2 px-5 py-3.5 text-[14.5px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-18px_rgba(140,47,27,0.95)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span className="absolute inset-y-0 -left-full w-1/3 bg-white/25 blur-md group-hover:animate-shine" />

                      {isTranslating ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-ochre" />
                          Translating via Gemini...
                        </>
                      ) : (
                        <>
                          <IconSwap className="h-4 w-4 text-ochre" />
                          Translate to Santhali • Real AI
                          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <div className="mt-3 flex items-start gap-2 rounded-xl border border-ochre/20 bg-ochre/5 px-3 py-2">
                      <IconSparkle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ochre" />

                      <p className="font-deva text-[11px] leading-snug text-ink/60">
                        Backend:{" "}
                        <code className="rounded bg-ink/5 px-1 text-[10px]">
                          {getApiBaseUrl()}/api/translation/translate
                        </code>{" "}
                        • Hindi → Santhali prompt optimized • Returns Base64 MP3 audio.
                      </p>
                    </div>

                    {sourceLang !== "hi" && (
                      <p className="mt-2 rounded-lg border border-clay/20 bg-clay/5 px-3 py-2 text-[11px] text-clay-2">
                        ⚠️ Current backend AI prompt is designed for Hindi → Santhali. Other directions may have lower quality. Backend is source of truth.
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>

              {/* Output */}
              <Reveal from="right" delay={100}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/12 bg-ink text-white shadow-lift">
                  <SohraiTile
                    id="studio-out"
                    color="#F3E7D2"
                    opacity={0.07}
                    className="pointer-events-none absolute inset-0 h-full w-full"
                  />

                  <FloatingParticles />

                  <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ochre">
                        Target • Santhali + Audio
                      </p>

                      <p className="font-olchiki mt-0.5 text-[14px] text-white/70">
                        ᱥᱟᱱᱛᱟᱲᱤ ᱚᱞ ᱪᱤᱠᱤ • Real AI
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]",
                          status === "success"
                            ? "bg-leaf/20 text-leaf border border-leaf/30"
                            : status === "loading"
                              ? "bg-ochre/20 text-ochre border border-ochre/30"
                              : "bg-white/10 text-white/40"
                        )}
                      >
                        {status === "idle"
                          ? "Idle"
                          : status === "loading"
                            ? "Translating..."
                            : status === "success"
                              ? "Done • Audio Ready"
                              : "Error"}
                      </span>
                    </div>
                  </div>

                  <div className="relative flex-1 px-5 py-5 sm:px-6">
                    {showFlow && <TranslationFlow active={true} />}

                    {isTranslating && (
                      <div className="relative flex h-64 flex-col items-center justify-center gap-4 text-center">
                        <div className="relative grid h-20 w-20 place-items-center">
                          <span className="absolute inset-0 animate-spin rounded-full border-2 border-white/10 border-t-ochre" />
                          <span
                            className="absolute inset-2 animate-spin rounded-full border border-ochre/20 border-t-ochre/60"
                            style={{
                              animationDirection: "reverse",
                              animationDuration: "1.2s",
                            }}
                          />
                          <IconLanguages className="h-8 w-8 text-ochre animate-pulse" />
                        </div>

                        <div>
                          <p className="font-display text-[16px] font-semibold text-white">
                            Translating via BHASHA SETU AI...
                          </p>

                          <p className="font-deva mt-1 text-[13px] text-ochre">
                            हिन्दी से संथाली अनुवाद हो रहा है • Generating Santhali audio
                          </p>

                          <div className="mt-3 flex justify-center gap-1">
                            {[...Array(3)].map((_, i) => (
                              <span
                                key={i}
                                className="h-1.5 w-1.5 animate-bounce rounded-full bg-ochre"
                                style={{ animationDelay: `${i * 0.2}s` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {!isTranslating && !result && (
                      <div className="flex h-64 flex-col items-center justify-center gap-3 text-center">
                        <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/14 bg-white/5 animate-float">
                          <IconLanguages className="h-7 w-7 text-ochre" />
                        </span>

                        <p className="max-w-xs font-deva text-[13px] leading-relaxed text-white/45">
                          बाईं ओर हिन्दी सामग्री लिखकर Translate दबाएँ। Real backend से अनुवाद और ऑडियो आएगा।
                        </p>

                        <p className="text-[11px] text-white/25">
                          Backend: {getApiBaseUrl()}
                        </p>
                      </div>
                    )}

                    {!isTranslating && result && (
                      <div className="space-y-4 animate-rise">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                            Source Text • {result.source_language}
                          </p>

                          <p className="font-deva mt-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] leading-relaxed text-white/70">
                            {result.source_text}
                          </p>
                        </div>

                        <div className="relative">
                          <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-ochre/50 to-transparent" />

                          <p className="pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ochre">
                            Translated • {result.target_language} • ᱥᱟᱱᱛᱟᱲᱤ
                          </p>

                          <p className="font-olchiki mt-2 rounded-xl border border-ochre/20 bg-ochre/10 px-4 py-4 text-[18px] leading-[1.8] text-ochre">
                            {result.translated_text}
                          </p>
                        </div>

                        {/* Teacher Reading — NEW FEATURE ONLY */}
                        <div className="relative">
                          <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-leaf/50 to-transparent" />

                          <p className="pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-leaf">
                            Teacher Reading • Devanagari
                          </p>

                          <p className="font-deva mt-2 rounded-xl border border-leaf/20 bg-leaf/10 px-4 py-4 text-[16px] leading-[1.8] text-white/90">
                            {result.teacher_reading}
                          </p>

                          <p className="font-deva mt-1.5 text-[10px] text-white/35">
                            संथाली का वही पाठ देवनागरी में, ताकि हिन्दी-माध्यम शिक्षक आसानी से पढ़ सकें।
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                            Santhali Audio • MP3 • Base64 Decoded
                          </p>

                          <AudioPlayer
                            base64={result.audio_base64}
                            contentType={result.audio_content_type}
                            title="Santhali Translation Audio"
                          />

                          {ttsBlob && (
                            <AudioPlayer
                              blob={ttsBlob}
                              title="On-demand TTS Audio"
                            />
                          )}

                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={handleTts}
                              disabled={ttsLoading}
                              className="inline-flex items-center gap-2 rounded-xl border border-white/14 bg-white/6 px-3 py-2 text-[12px] font-semibold transition-all hover:border-ochre/40"
                            >
                              {ttsLoading ? (
                                <span className="h-3 w-3 animate-spin rounded-full border border-white/30 border-t-white" />
                              ) : (
                                <span className="h-3 w-3 rounded-full bg-ochre animate-pulse" />
                              )}
                              Regenerate TTS
                            </button>

                            <span className="inline-flex items-center gap-1.5 rounded-xl bg-leaf/15 px-3 py-2 text-[11px] font-semibold text-leaf border border-leaf/20">
                              <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
                              Audio: {result.audio_content_type} •{" "}
                              {(result.audio_base64.length / 1024).toFixed(1)} KB base64
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="rounded-2xl border border-clay/30 bg-clay/10 p-4">
                        <p className="text-[13px] font-semibold text-clay">
                          Translation failed
                        </p>

                        <p className="mt-1 text-[12px] text-white/60">
                          {error}
                        </p>

                        <p className="mt-1 text-[11px] text-white/30">
                          Kind: {errorKind} • Check backend at {getApiBaseUrl()}
                        </p>
                      </div>
                    )}
                  </div>

                  {result && (
                    <div className="relative border-t border-white/10 px-5 py-4 sm:px-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-24 overflow-hidden rounded-full bg-white/12">
                            <span className="block h-full w-full rounded-full bg-gradient-to-r from-leaf to-ochre" />
                          </span>

                          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                            Real AI • Gemini
                          </span>
                        </div>

                        <div className="ml-auto flex gap-2">
                          <button
                            type="button"
                            onClick={handleCopy}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/14 bg-white/6 px-3 py-2 text-[12px] font-semibold transition-all hover:-translate-y-0.5 hover:border-ochre/50"
                          >
                            {copied ? (
                              <IconCheck className="h-4 w-4 text-leaf" />
                            ) : (
                              <IconCopy className="h-4 w-4 text-ochre" />
                            )}
                            {copied ? "Copied" : "Copy"}
                          </button>

                          <button
                            type="button"
                            onClick={handleDownload}
                            className="inline-flex items-center gap-2 rounded-xl bg-ochre px-3 py-2 text-[12px] font-bold text-ink transition-all hover:-translate-y-0.5"
                          >
                            <IconDownload className="h-4 w-4" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          ) : (
            /* Voice Translation Tab */
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal from="left">
                <div className="overflow-hidden rounded-[26px] glass-light shadow-lift">
                  <div className="h-1 w-full bg-gradient-to-r from-clay via-ochre to-leaf" />

                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-[1.3rem] font-semibold">
                      Voice Translation
                    </h3>

                    <p className="font-deva mt-1 text-[13px] text-ink/60">
                      हिन्दी आवाज़ → संथाली • Hindi speech is transcribed by Gemini, translated to Santhali, and spoken via Shunya Labs
                    </p>

                    <div className="mt-6 space-y-4">
                      <div className="flex gap-2">
                        <select
                          value={sourceLang}
                          onChange={(e) => setSourceLang(e.target.value)}
                          className="rounded-xl border border-ink/12 bg-white px-3 py-2 text-[13px] font-semibold"
                        >
                          <option value="hi">Source: Hindi (hi)</option>
                        </select>

                        <select
                          value={targetLang}
                          onChange={(e) => setTargetLang(e.target.value)}
                          className="rounded-xl border border-ink/12 bg-white px-3 py-2 text-[13px] font-semibold"
                        >
                          <option value="sat">Target: Santhali (sat)</option>
                        </select>
                      </div>

                      <div className="rounded-2xl border border-ink/10 bg-white p-5 text-center">
                        {voice.status === "idle" && (
                          <div className="space-y-4">
                            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-clay to-ochre text-white shadow-lg">
                              <svg
                                viewBox="0 0 24 24"
                                className="h-8 w-8"
                                fill="currentColor"
                              >
                                <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2a1 1 0 0 1 2 0v2a5 5 0 0 0 10 0v-2a1 1 0 0 1 2 0z" />
                                <path d="M12 19a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1z" />
                              </svg>
                            </div>

                            <p className="font-deva text-[13px] text-ink/60">
                              माइक बटन दबाकर बोलें — हिन्दी में
                            </p>

                            <div className="flex justify-center gap-3">
                              <button
                                type="button"
                                onClick={voice.startRecording}
                                className="rounded-full bg-ink px-6 py-3 text-[14px] font-bold text-white hover:bg-ink/90 transition-all hover:-translate-y-0.5"
                              >
                                🎤 Start Recording
                              </button>

                              <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="rounded-full border border-ink/12 bg-white px-6 py-3 text-[14px] font-semibold hover:border-clay/40"
                              >
                                📁 Upload Audio
                              </button>
                            </div>

                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="audio/*"
                              className="hidden"
                              onChange={handleVoiceUpload}
                            />
                          </div>
                        )}

                        {voice.status === "recording" && (
                          <div className="space-y-4">
                            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-clay text-white animate-pulse">
                              <MicWave active={true} />
                            </div>

                            <p className="text-[14px] font-semibold text-clay">
                              Recording... {voice.recordingTime}s
                            </p>

                            <div className="flex justify-center gap-3">
                              <button
                                type="button"
                                onClick={() => {
                                  voice.stopRecording();
                                  setTimeout(
                                    () => voice.processRecording(sourceLang, targetLang),
                                    300
                                  );
                                }}
                                className="rounded-full bg-leaf px-6 py-2.5 text-[13px] font-bold text-white"
                              >
                                ✅ Stop & Translate
                              </button>

                              <button
                                type="button"
                                onClick={voice.cancelRecording}
                                className="rounded-full border border-ink/12 bg-white px-6 py-2.5 text-[13px] font-semibold"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}

                        {voice.status === "processing" && (
                          <div className="space-y-3 py-6">
                            <span className="mx-auto block h-8 w-8 animate-spin rounded-full border-2 border-ink/10 border-t-clay" />

                            <p className="text-[14px] font-semibold">
                              Processing voice... Transcribing → Translating → TTS
                            </p>

                            <p className="font-deva text-[12px] text-ink/50">
                              आवाज़ को टेक्स्ट में बदल रहे हैं, फिर संथाली में अनुवाद
                            </p>
                          </div>
                        )}

                        {voice.status === "error" && (
                          <div className="rounded-xl border border-clay/20 bg-clay/5 p-4 text-left">
                            <p className="text-[13px] font-semibold text-clay">
                              Voice translation failed
                            </p>

                            <p className="mt-1 text-[12px] text-ink/60">
                              {voice.error}
                            </p>

                            <button
                              type="button"
                              onClick={voice.reset}
                              className="mt-3 rounded-lg bg-ink px-4 py-2 text-[12px] font-semibold text-white"
                            >
                              Try Again
                            </button>
                          </div>
                        )}

                        {voice.status === "success" && voice.result && (
                          <div className="text-left space-y-3">
                            <div className="flex items-center justify-between">
                              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
                                Success • Voice Translated
                              </p>

                              <button
                                type="button"
                                onClick={voice.reset}
                                className="text-[11px] font-semibold text-clay hover:underline"
                              >
                                New Recording
                              </button>
                            </div>

                            <div className="rounded-xl bg-ink/[0.04] p-3">
                              <p className="text-[11px] uppercase tracking-[0.14em] text-ink/40">
                                Transcribed (Hindi)
                              </p>

                              <p className="font-deva mt-1 text-[14px] text-ink/80">
                                {voice.result.transcribed_text}
                              </p>
                            </div>

                            <div className="rounded-xl bg-ochre/10 p-3 border border-ochre/20">
                              <p className="text-[11px] uppercase tracking-[0.14em] text-ochre">
                                Translated (Santhali) • ᱥᱟᱱᱛᱟᱲᱤ
                              </p>

                              <p className="font-olchiki mt-1 text-[16px] text-clay-2">
                                {voice.result.translated_text}
                              </p>
                            </div>

                            <AudioPlayer
                              base64={voice.result.audio_base64}
                              contentType={voice.result.audio_content_type}
                              title="Voice Translation Audio"
                            />
                          </div>
                        )}
                      </div>

                      <div className="rounded-xl border border-ink/10 bg-paper/60 p-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40">
                          Backend Behavior • Important
                        </p>

                        <p className="font-deva mt-1 text-[11.5px] leading-snug text-ink/55">
                          Current pipeline: Hindi audio → Gemini transcription (hi-IN) → Hindi→Santhali translation → Shunya Labs TTS. Santhali speech → Hindi is NOT currently supported unless backend code changed. Frontend labels reflect actual backend capability.
                        </p>

                        <p className="mt-2 text-[11px] text-ink/40">
                          Endpoint: POST{" "}
                          <code className="bg-ink/5 px-1 rounded">
                            {getApiBaseUrl()}/api/speech/voice-translate
                          </code>{" "}
                          • multipart/form-data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal from="right" delay={100}>
                <div className="overflow-hidden rounded-[26px] border border-ink/10 bg-white shadow-lift">
                  <div className="border-b border-ink/10 bg-ink px-6 py-4 text-white">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ochre">
                      How Voice Translation Works
                    </p>

                    <p className="font-deva mt-1 text-[12px] text-white/60">
                      यह कैसे काम करता है
                    </p>
                  </div>

                  <div className="p-6 space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Hindi Speech",
                        hindi: "हिन्दी आवाज़",
                        desc: "Teacher speaks in Hindi, audio recorded via MediaRecorder",
                        icon: "🎤",
                      },
                      {
                        step: "2",
                        title: "Transcription",
                        hindi: "लिप्यंतरण",
                        desc: "Gemini 3.5 Transcribe converts audio to Hindi text (hi-IN)",
                        icon: "📝",
                      },
                      {
                        step: "3",
                        title: "Translation",
                        hindi: "अनुवाद",
                        desc: "Hindi text → Santhali via Gemini translation prompt",
                        icon: "🔄",
                      },
                      {
                        step: "4",
                        title: "Santhali Speech",
                        hindi: "संथाली आवाज़",
                        desc: "Shunya Labs TTS synthesizes Santhali MP3, returned as Base64",
                        icon: "🔊",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-ochre to-clay text-[12px] font-bold text-white">
                          {item.step}
                        </span>

                        <div>
                          <p className="text-[13px] font-semibold text-ink">
                            {item.icon} {item.title}{" "}
                            <span className="font-deva text-ink/50">
                              • {item.hindi}
                            </span>
                          </p>

                          <p className="mt-0.5 text-[12px] leading-snug text-ink/50">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="mt-6 rounded-2xl border border-leaf/20 bg-leaf/5 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-leaf">
                        Speech Status
                      </p>

                      <p className="mt-1 text-[12px] text-ink/70">
                        {voice.speechStatus?.message ||
                          "Checking speech capability..."}
                      </p>

                      {voice.speechStatus && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <span className="rounded-full bg-leaf/10 px-2 py-1 text-[10px] font-semibold text-leaf border border-leaf/20">
                            Transcription:{" "}
                            {voice.speechStatus.transcription ? "✓" : "✗"}
                          </span>

                          <span className="rounded-full bg-ochre/10 px-2 py-1 text-[10px] font-semibold text-ochre border border-ochre/20">
                            Translation:{" "}
                            {voice.speechStatus.translation ? "✓" : "✗"}
                          </span>

                          <span className="rounded-full bg-clay/10 px-2 py-1 text-[10px] font-semibold text-clay border border-clay/20">
                            TTS:{" "}
                            {voice.speechStatus.text_to_speech ? "✓" : "✗"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </main>
    </>
  );
}