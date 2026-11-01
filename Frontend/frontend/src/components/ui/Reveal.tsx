import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  from?: "up" | "left" | "right" | "scale";
};

const FROM: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate3d(0, 34px, 0)",
  left: "translate3d(-40px, 0, 0)",
  right: "translate3d(40px, 0, 0)",
  scale: "translate3d(0, 24px, 0) scale(0.96)",
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  from = "up",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);

  return (
    <Tag
      ref={ref}
      className={cn("will-change-[opacity,transform]", className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0,0,0)" : FROM[from],
        transition:
          "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

/** Word-by-word headline reveal */
export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  step = 90,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  step?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.2);
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn("inline-block overflow-hidden align-bottom", wordClassName)}
        >
          <span
            className="inline-block will-change-transform"
            style={{
              transform: inView ? "translateY(0)" : "translateY(110%)",
              opacity: inView ? 1 : 0,
              transition:
                "transform .95s cubic-bezier(.16,1,.3,1), opacity .7s ease-out",
              transitionDelay: `${delay + i * step}ms`,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
