import type { SVGProps } from "react";

/** Brand mark: a bridge ("setu") between two scripts. */
export function BridgeMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...props}>
      <defs>
        <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9B768" />
          <stop offset="55%" stopColor="#D7714A" />
          <stop offset="100%" stopColor="#8C2F1B" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="url(#bm-g)" />
      <g
        stroke="#1b1210"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.92"
      >
        <path d="M11 31c5.5-9 20.5-9 26 0" />
        <path d="M24 20.5V37" />
        <path d="M11 37h26" />
        <path d="M17.5 25.5v-6M30.5 25.5v-6" />
        <circle cx="17.5" cy="16" r="1.6" fill="#1b1210" stroke="none" />
        <circle cx="30.5" cy="16" r="1.6" fill="#1b1210" stroke="none" />
      </g>
    </svg>
  );
}

/**
 * Sohrai / Paitkar inspired decorative band — triangles, dotted lines and
 * hatch strokes. Used sparingly, at low opacity.
 */
export function SohraiBand({
  className,
  color = "#C1502E",
  opacity = 0.5,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 320 44"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill="none" stroke={color} strokeWidth="1.6">
        <path d="M0 34h320" />
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={`tri-${i}`}
            d={`M${i * 20} 34 L${i * 20 + 10} 16 L${i * 20 + 20} 34`}
          />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={`hatch-${i}`}
            d={`M${i * 20 + 3} 31 L${i * 20 + 10} 21 L${i * 20 + 17} 31`}
            strokeWidth="1"
            opacity="0.55"
          />
        ))}
      </g>
      <g fill={color}>
        {Array.from({ length: 32 }).map((_, i) => (
          <circle key={`dot-${i}`} cx={i * 10 + 5} cy={9} r={i % 2 ? 1.7 : 2.6} />
        ))}
      </g>
    </svg>
  );
}

/** Repeating tile version for large surface fills. */
export function SohraiTile({
  className,
  id,
  color = "#FFFFFF",
  opacity = 0.12,
}: {
  className?: string;
  id: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg className={className} aria-hidden="true" style={{ opacity }}>
      <defs>
        <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round">
            <path d="M0 64h72" />
            <path d="M4 64 18 40l14 24" />
            <path d="M40 64 54 40l14 24" />
            <path d="M8 26c6-8 12-8 18 0" />
            <path d="M44 26c6-8 12-8 18 0" />
            <path d="M36 0v14" />
          </g>
          <g fill={color}>
            <circle cx="18" cy="18" r="2.4" />
            <circle cx="54" cy="18" r="2.4" />
            <circle cx="36" cy="22" r="1.6" />
            <circle cx="18" cy="34" r="1.3" />
            <circle cx="54" cy="34" r="1.3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Radiating sun motif (common in Santhal wall art). */
export function SunMotif({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="60" cy="60" r="17" />
        <circle cx="60" cy="60" r="9" opacity="0.6" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI) / 12;
          const r1 = 23;
          const r2 = i % 2 ? 34 : 42;
          return (
            <line
              key={i}
              x1={60 + Math.cos(a) * r1}
              y1={60 + Math.sin(a) * r1}
              x2={60 + Math.cos(a) * r2}
              y2={60 + Math.sin(a) * r2}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Line of Santhal dancers (silhouette strip, stylised). */
export function DancersStrip({ className, color = "#fff" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 240 40" className={className} aria-hidden="true">
      <g fill={color}>
        {Array.from({ length: 6 }).map((_, i) => {
          const x = i * 40;
          return (
            <g key={i} opacity={0.85}>
              <circle cx={x + 12} cy={9} r="4.4" />
              <path d={`M${x + 4} 36 L${x + 12} 14 L${x + 20} 36 Z`} />
              <path
                d={`M${x + 12} 20 L${x - 2} 12 M${x + 12} 20 L${x + 26} 12`}
                stroke={color}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
