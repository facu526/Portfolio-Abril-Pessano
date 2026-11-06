"use client";

import { useEffect, useRef } from "react";

/**
 * Parallax muy leve con el mouse. Solo actualiza dos variables CSS y las capas
 * con `.depth` se mueven con `transform`, así que no toca el layout.
 * No corre en pantallas táctiles ni con movimiento reducido.
 */
export function HeroParallax({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    const allowed = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!node || !allowed.matches) {
      return;
    }

    let frame = 0;

    const handleMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = node.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;

        node.style.setProperty("--mx", x.toFixed(3));
        node.style.setProperty("--my", y.toFixed(3));
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
