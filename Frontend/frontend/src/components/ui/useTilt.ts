import { useCallback, useRef } from "react";

/**
 * 3D tilt driven by CSS variables on the node itself (no React re-renders
 * per mouse move, so it stays smooth).
 */
export function useTilt(max = 7) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      node.classList.add("tilt-live");
      node.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
      node.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
      node.style.setProperty("--mx", `${px * 100}%`);
      node.style.setProperty("--my", `${py * 100}%`);
    },
    [max],
  );

  const onLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.remove("tilt-live");
    node.style.setProperty("--ry", "0deg");
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ty", "0px");
  }, []);

  return { ref, onMove, onLeave };
}
