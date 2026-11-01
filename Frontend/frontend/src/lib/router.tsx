import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

export type RoutePath =
  | "/"
  | "/lesson-generator"
  | "/translation-studio"
  | "/worksheet-generator"
  | "/flashcard-generator";

export const ROUTES = {
  dashboard: "/",
  lessonGenerator: "/lesson-generator",
  translationStudio: "/translation-studio",
  worksheetGenerator: "/worksheet-generator",
  flashcardGenerator: "/flashcard-generator",
} as const;

function readHash(): string {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return ROUTES.dashboard;
  return raw.startsWith("/") ? raw : `/${raw}`;
}

export function navigate(to: string): void {
  if (typeof window === "undefined") return;
  if (readHash() === to) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = to;
}

export function useRoute(): string {
  const [path, setPath] = useState<string>(() => readHash());

  useEffect(() => {
    const onChange = () => setPath(readHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return path;
}

type LinkProps = {
  to: string;
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Link({ to, children, className, ariaLabel }: LinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={`#${to}`} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
