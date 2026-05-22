"use client";

import { useEffect, useRef, useState } from "react";

type RevealSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  delay?: number;
};

export function RevealSection({
  children,
  className = "",
  delay = 0,
  style,
  ...props
}: RevealSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </section>
  );
}
