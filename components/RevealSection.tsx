"use client";

import { useEffect, useRef, useState } from "react";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

type RevealProps = React.ComponentPropsWithoutRef<"div"> & {
  delay?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  style,
  ...props
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

type RevealSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  delay?: number;
  /** Borde o fondo que no participa de la animación. */
  edge?: React.ReactNode;
};

/**
 * La sección y su fondo quedan fijos; lo que aparece es el contenido.
 * Así nunca se ve el color de atrás mientras entra la página.
 */
export function RevealSection({
  children,
  className = "",
  delay = 0,
  edge,
  ...props
}: RevealSectionProps) {
  return (
    <section className={className} {...props}>
      {edge}
      <Reveal delay={delay}>{children}</Reveal>
    </section>
  );
}
