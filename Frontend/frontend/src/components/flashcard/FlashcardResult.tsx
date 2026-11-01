import { useCallback, useEffect, useState } from "react";
import type { FlashcardResponse } from "@/services/bhashaApi";
import { Reveal } from "@/components/ui/Reveal";
import { BridgeMark, SohraiTile } from "@/components/ui/Culture";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconCopy,
  IconDownload,
  IconFlashcards,
} from "@/components/ui/Icons";
import { cn } from "@/utils/cn";
import { AudioButton, AudioPlayer } from "@/components/ui/AudioPlayer";
import { FloatingParticles } from "@/components/ui/Animations";

type DisplayCard = {
  card_number: number;
  card_type: string;
  front_text: string;
  back_text: string;
  audio_base64: string | null;
  audio_content_type: string | null;
};

function CardFace({
  side,
  card,
  isSanthali,
}: {
  side: "front" | "back";
  card: DisplayCard;
  isSanthali: boolean;
}) {
  const isBack = side === "back";
  const text = isBack ? card.back_text : card.front_text;

  return (
    <div
      className={cn(
        "flip-face overflow-hidden rounded-[28px] p-7 sm:p-9",
        isBack
          ? "flip-face-back bg-[linear-gradient(150deg,#a83c1f_0%,#c1502e_46%,#5c1d10_100%)] text-white"
          : "bg-[linear-gradient(150deg,#fdfaf4_0%,#f4e9d8_100%)] text-ink"
      )}
    >
      <SohraiTile
        id={`fc-${side}-${card.card_number}`}
        color={isBack ? "#F7EBD6" : "#8C2F1B"}
        opacity={isBack ? 0.1 : 0.06}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em]",
              isBack
                ? "bg-white/15 text-ochre"
                : "bg-clay/10 text-clay-2"
            )}
          >
            {isBack
              ? isSanthali
                ? "ᱛᱟᱭᱚᱢ • Back"
                : "पीछे • Back"
              : isSanthali
              ? "ᱢᱟᱬᱟᱝ • Front"
              : "सामने • Front"}
          </span>

          <div className="flex items-center gap-2">
            {card.audio_base64 && (
              <AudioButton
                base64={card.audio_base64}
                contentType={card.audio_content_type || "audio/mpeg"}
                size="sm"
              />
            )}

            <BridgeMark
              className={cn(
                "h-6 w-6 rounded-lg",
                isBack ? "opacity-90" : "opacity-70"
              )}
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center py-8">
          <p
            className={cn(
              "text-center font-semibold leading-[1.25] tracking-[-0.01em]",
              isSanthali
                ? "font-olchiki text-[clamp(1.4rem,4vw,2.2rem)]"
                : "font-display text-[clamp(1.5rem,4.6vw,2.5rem)]",
              isBack ? "text-white" : "text-ink"
            )}
          >
            {text}
          </p>
        </div>

        <p
          className={cn(
            "text-center text-[11px] font-medium uppercase tracking-[0.14em]",
            isBack ? "text-white/40" : "text-ink/35"
          )}
        >
          {card.card_type} • Card {card.card_number}
        </p>

        <p
          className={cn(
            "mt-2 text-center text-[11px] font-medium",
            isBack ? "text-white/40" : "text-ink/35"
          )}
        >
          कार्ड पलटने के लिए दबाएँ • Tap to flip
        </p>
      </div>
    </div>
  );
}

export function FlashcardResult({
  set,
}: {
  set: FlashcardResponse;
}) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const [activeLang, setActiveLang] = useState<
    "hindi" | "santhali"
  >("santhali");

  /*
   * Backend returns:
   *
   * flashcards: [
   *   {
   *     question,
   *     answer,
   *     santhali_question,
   *     santhali_answer,
   *     audio_base64,
   *     audio_content_type
   *   }
   * ]
   *
   * We convert that backend structure into the same
   * front_text / back_text structure expected by the
   * existing Flashcard UI.
   */

  const currentCards: DisplayCard[] = set.flashcards.map(
    (card, i) => ({
      card_number: i + 1,

      card_type:
        activeLang === "santhali"
          ? "Santhali"
          : "Hindi",

      front_text:
        activeLang === "santhali"
          ? card.santhali_question
          : card.question,

      back_text:
        activeLang === "santhali"
          ? card.santhali_answer
          : card.answer,

      // Flashcard TTS is currently bypassed.
      audio_base64: null,
      audio_content_type: null,
    })
  );

  const currentSet = {
    title:
      activeLang === "santhali"
        ? "Santhali Flashcards"
        : "Hindi Flashcards",

    cards: currentCards,
  };

  const total = currentSet.cards.length;

  const card =
    total > 0
      ? currentSet.cards[
          Math.min(index, total - 1)
        ]
      : null;

  const goNext = useCallback(() => {
    if (total === 0) return;

    setFlipped(false);

    setIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    if (total === 0) return;

    setFlipped(false);

    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const flip = useCallback(() => {
    if (!card) return;

    setFlipped((v) => !v);
  }, [card]);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [set, activeLang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goNext();
      }

      if (e.key === "ArrowLeft") {
        goPrev();
      }

      if (e.key === " " || e.key === "Enter") {
        if (document.activeElement?.tagName === "BUTTON") {
          return;
        }

        e.preventDefault();
        flip();
      }
    };

    window.addEventListener("keydown", onKey);

    return () =>
      window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, flip]);

  const copy = async () => {
    const text = `${currentSet.title}
Class: ${set.class_level} • Subject: ${set.subject}

${currentSet.cards
  .map(
    (c) =>
      `${c.card_number}. ${c.front_text} → ${c.back_text}`
  )
  .join("\n")}`;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {}
  };

  const download = () => {
    const hindiCards: DisplayCard[] =
      set.flashcards.map((c, i) => ({
        card_number: i + 1,
        card_type: "Hindi",
        front_text: c.question,
        back_text: c.answer,
        audio_base64: null,
        audio_content_type: null,
      }));

    const santhaliCards: DisplayCard[] =
      set.flashcards.map((c, i) => ({
        card_number: i + 1,
        card_type: "Santhali",
        front_text: c.santhali_question,
        back_text: c.santhali_answer,
        audio_base64: null,
        audio_content_type: null,
      }));

    const content = `BHASHA SETU — Flashcards
${set.topic}
Class: ${set.class_level} • Subject: ${set.subject}

HINDI:
Hindi Flashcards
${hindiCards
  .map(
    (c) =>
      `${c.card_number}. ${c.front_text} → ${c.back_text}`
  )
  .join("\n")}

SANTHALI:
Santhali Flashcards
${santhaliCards
  .map(
    (c) =>
      `${c.card_number}. ${c.front_text} → ${c.back_text}`
  )
  .join("\n")}
`;

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `bhasha-setu-flashcards-${set.topic}.txt`;

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      {/* header */}
      <Reveal delay={40}>
        <div className="relative overflow-hidden rounded-[26px] bg-ink px-6 py-5 text-white sm:px-8">
          <SohraiTile
            id="fc-result-head"
            color="#F3E7D2"
            opacity={0.08}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />

          <FloatingParticles />

          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ochre">
                <IconFlashcards className="h-3.5 w-3.5" />

                AI-generated bilingual flashcards • {total} cards
              </p>

              <h1 className="font-deva mt-2 text-[1.4rem] font-semibold leading-snug sm:text-[1.7rem]">
                {set.topic}
              </h1>

              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                  {set.class_level}
                </span>

                <span className="rounded-lg border border-white/16 bg-white/8 px-2.5 py-1 text-[11.5px] font-semibold">
                  {set.subject}
                </span>

                <span className="rounded-lg border border-ochre/35 bg-ochre/12 px-2.5 py-1 text-[11.5px] font-semibold text-ochre">
                  {total} कार्ड
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 print:hidden">
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
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
                onClick={download}
                className="inline-flex items-center gap-2 rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-ochre/50"
              >
                <IconDownload className="h-4 w-4 text-ochre" />

                Download
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-1">
            <button
              type="button"
              onClick={() => setActiveLang("hindi")}
              className={`rounded-xl px-3 py-1.5 text-[12px] font-semibold ${
                activeLang === "hindi"
                  ? "bg-white text-ink"
                  : "bg-white/10 text-white/60 hover:bg-white/15"
              }`}
            >
              हिन्दी
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveLang("santhali")
              }
              className={`rounded-xl px-3 py-1.5 text-[12px] font-semibold ${
                activeLang === "santhali"
                  ? "bg-ochre text-ink"
                  : "bg-white/10 text-white/60 hover:bg-white/15"
              }`}
            >
              ᱥᱟᱱᱛᱟᱲᱤ
            </button>
          </div>
        </div>
      </Reveal>

      {/* Current card audio */}
      {card?.audio_base64 && (
        <Reveal delay={60}>
          <div className="mx-auto w-full max-w-2xl">
            <AudioPlayer
              base64={card.audio_base64}
              contentType={
                card.audio_content_type ||
                "audio/mpeg"
              }
              title={`${
                activeLang === "santhali"
                  ? "Santhali"
                  : "Hindi"
              } • Card ${card.card_number}: ${card.front_text.slice(
                0,
                30
              )}`}
            />
          </div>
        </Reveal>
      )}

      {/* the card */}
      <Reveal delay={100}>
        <div className="flip-scene mx-auto h-[340px] w-full max-w-2xl sm:h-[380px]">
          {card ? (
            <div
              className={cn(
                "flip-inner cursor-pointer",
                flipped && "is-flipped"
              )}
              onClick={flip}
              role="button"
              tabIndex={0}
              aria-label={
                flipped
                  ? "Show front of card"
                  : "Show back of card"
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" ||
                  e.key === " "
                ) {
                  e.preventDefault();
                  flip();
                }
              }}
            >
              <div className="flip-face shadow-lift">
                <CardFace
                  side="front"
                  card={card}
                  isSanthali={
                    activeLang === "santhali"
                  }
                />
              </div>

              <div className="flip-face shadow-lift">
                <CardFace
                  side="back"
                  card={card}
                  isSanthali={
                    activeLang === "santhali"
                  }
                />
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-[28px] bg-white text-ink/50">
              No flashcards available.
            </div>
          )}
        </div>
      </Reveal>

      {/* controls */}
      <Reveal delay={140}>
        <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-center gap-3 print:hidden">
          <button
            type="button"
            onClick={goPrev}
            disabled={total === 0}
            aria-label="Previous card"
            className="group grid h-12 w-12 place-items-center rounded-2xl border border-ink/12 bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <div className="flex min-w-[168px] flex-col items-center rounded-2xl border border-ink/[0.08] bg-white px-5 py-2.5">
            <span className="font-display text-[17px] font-semibold text-ink">
              Card {total > 0 ? index + 1 : 0} of{" "}
              {total}
            </span>

            <span className="font-deva mt-0.5 text-[11px] text-ink/45">
              कार्ड {total > 0 ? index + 1 : 0} /{" "}
              {total} •{" "}
              {activeLang === "santhali"
                ? "ᱥᱟᱱᱛᱟᱲᱤ"
                : "हिन्दी"}
            </span>
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={total === 0}
            aria-label="Next card"
            className="group grid h-12 w-12 place-items-center rounded-2xl border border-ink/12 bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </Reveal>

      <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-center gap-1.5 print:hidden">
        {currentSet.cards.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setFlipped(false);
              setIndex(i);
            }}
            aria-label={`Go to card ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-7 bg-clay"
                : "w-3 bg-ink/15 hover:bg-ink/30"
            )}
          />
        ))}
      </div>

      {/* list view */}
      <Reveal delay={180}>
        <div className="overflow-hidden rounded-[26px] border border-ink/[0.08] bg-white shadow-lift">
          <div className="flex items-center gap-2.5 border-b border-ink/[0.07] px-6 py-4 sm:px-8">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-ochre/25 to-clay/20">
              <IconFlashcards className="h-4 w-4 text-clay-2" />
            </span>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/55">
                All cards • {activeLang}
              </p>

              <p className="font-deva text-[12px] text-ink/45">
                सभी कार्ड • {currentSet.title}
              </p>
            </div>

            <span className="ml-auto text-[11px] text-ink/40">
              {total} cards
            </span>
          </div>

          <ol className="divide-y divide-ink/[0.06]">
            {currentSet.cards.map((c, i) => (
              <li
                key={i}
                className="flex gap-3 px-6 py-3.5 transition-colors duration-300 hover:bg-paper sm:px-8"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-ink/[0.06] text-[10px] font-bold text-ink/45">
                  {i + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <p
                    className={`text-[14.5px] leading-relaxed text-ink/85 ${
                      activeLang === "santhali"
                        ? "font-olchiki"
                        : "font-deva"
                    }`}
                  >
                    {c.front_text}
                  </p>

                  <p
                    className={`mt-1 text-[13.5px] leading-relaxed text-clay-2 ${
                      activeLang === "santhali"
                        ? "font-olchiki"
                        : "font-deva"
                    }`}
                  >
                    → {c.back_text}
                  </p>
                </div>

                {c.audio_base64 && (
                  <AudioButton
                    base64={c.audio_base64}
                    contentType={
                      c.audio_content_type ||
                      "audio/mpeg"
                    }
                    size="sm"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </div>
  );
}