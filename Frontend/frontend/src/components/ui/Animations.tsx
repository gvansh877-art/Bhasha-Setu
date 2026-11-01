import { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

/**
 * Floating cultural particles — subtle indigenous-inspired motifs
 */
export function FloatingParticles({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {/* Sohrai-inspired dots */}
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-ochre/30"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            animation: `float ${7 + i * 1.2}s ease-in-out ${i * 0.6}s infinite`,
          }}
        />
      ))}
      {/* Leaf shapes */}
      {[...Array(4)].map((_, i) => (
        <span
          key={`leaf-${i}`}
          className="absolute h-3 w-3 rounded-[50%_0] bg-leaf/15 rotate-45"
          style={{
            left: `${10 + i * 22}%`,
            top: `${60 + (i % 2) * 20}%`,
            animation: `bob ${5 + i}s ease-in-out ${i * 0.8}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Translation flow animation: particles moving from source to target
 */
export function TranslationFlow({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-clay/0 via-ochre/40 to-leaf/0" />
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-ochre shadow-[0_0_8px_2px_rgba(223,160,60,0.5)]"
          style={{
            left: "0%",
            animation: `translate-particle ${1.8 + i * 0.15}s cubic-bezier(0.4,0,0.2,1) ${i * 0.18}s infinite`,
          }}
        />
      ))}
      {/* Glowing path */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ochre/10 blur-xl animate-glow" />
    </div>
  );
}

/**
 * Animated background gradient orbs
 */
export function GradientOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute -left-20 top-20 h-72 w-72 animate-glow rounded-full bg-ochre/20 blur-[90px]" />
      <div className="absolute -right-16 bottom-20 h-80 w-80 animate-glow rounded-full bg-clay/15 blur-[100px]" style={{ animationDelay: "1.5s" }} />
      <div className="absolute left-1/3 top-1/2 h-64 w-64 animate-glow rounded-full bg-leaf/10 blur-[80px]" style={{ animationDelay: "0.8s" }} />
    </div>
  );
}

/**
 * Mic recording animation
 */
export function MicWave({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="block w-1 rounded-full bg-clay"
          style={{
            height: `${10 + Math.random() * 14}px`,
            animation: `wave-bar 0.8s ease-in-out ${i * 0.1}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Cinematic page entrance wrapper
 */
export function PageEntrance({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Add class after mount for entrance
    requestAnimationFrame(() => {
      el.classList.add("animate-rise");
    });
  }, []);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}

/**
 * Animated border glow
 */
export function AnimatedBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[26px]", className)}>
      <div className="absolute inset-0 rounded-[26px] bg-gradient-to-r from-ochre via-clay to-leaf opacity-60 blur-[1px]" style={{ animation: "spin-slow 8s linear infinite" }} />
      <div className="relative m-[1px] rounded-[25px] bg-white">
        {children}
      </div>
    </div>
  );
}
