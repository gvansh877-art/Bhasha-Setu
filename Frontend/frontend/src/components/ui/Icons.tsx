import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBook(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5S10.5 4.5 6.5 4.5H3v13h4c2.5 0 5 1 5 1s2.5-1 5-1h4v-13h-3.5c-4 0-5.5 2-5.5 2Z" />
      <path d="M12 6.5v13" />
      <path d="M6.5 8.5h2.5M6.5 11.5h2.5" />
    </svg>
  );
}

export function IconLanguages(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5.5h9M7.5 4v1.5" />
      <path d="M5.2 5.5c0 3.2-1.2 6-2.7 7.6M9.8 5.5c0 4 1.6 6.6 3.6 8" />
      <path d="M4 9.4h6.4" />
      <path d="m13.5 20 3.6-9 3.6 9" />
      <path d="M15 17h4.2" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l1.6 4.4 4.4 1.6-4.4 1.6L12 15.5l-1.6-4.4L6 9.5l4.4-1.6L12 3.5Z" />
      <path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h14" />
      <path d="m13 6.5 5.5 5.5L13 17.5" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 6.5A2.5 2.5 0 0 0 12.5 4h-6A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15" />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v10" />
      <path d="m8 10.5 4 4 4-4" />
      <path d="M4.5 19h15" />
    </svg>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19.5 12h-14" />
      <path d="M11 6.5 5.5 12 11 17.5" />
    </svg>
  );
}

export function IconSwap(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8.5h13" />
      <path d="m14 5 3.5 3.5L14 12" />
      <path d="M20 15.5H7" />
      <path d="m10 12-3.5 3.5L10 19" />
    </svg>
  );
}

export function IconGrid(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-6.2 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.8 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function IconFlashcards(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="6" width="13" height="15" rx="2.4" />
      <path d="M10 11h7M10 14.5h5" />
      <path d="M17 4.5H6A2.5 2.5 0 0 0 3.5 7v9A2.5 2.5 0 0 0 5.5 18" opacity="0.55" />
    </svg>
  );
}

export function IconWorksheet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
      <path d="M8 8h8M8 12h8M8 16h4.5" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3.5 8 4.2-8 4.3-8-4.3 8-4.2Z" />
      <path d="m4 12.4 8 4.3 8-4.3" />
      <path d="m4 16.4 8 4.3 8-4.3" />
    </svg>
  );
}
