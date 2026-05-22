"use client";

import { useState } from "react";

type PhoneVideoMockupProps = {
  src: string;
  label: string;
  title: string;
  registerVideoRef: (element: HTMLVideoElement | null) => void;
  onPlay: (currentVideo: HTMLVideoElement) => void;
};

export function PhoneVideoMockup({
  src,
  label,
  title,
  registerVideoRef,
  onPlay,
}: PhoneVideoMockupProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="mx-auto w-full max-w-[270px]">
      <div className="mb-3 text-center">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-berry">
          {label}
        </p>
        <h4 className="mt-1 text-sm font-black uppercase tracking-[0.08em] text-ink">
          {title}
        </h4>
      </div>

      <div className="relative aspect-[9/16] w-full rounded-[2.4rem] bg-neutral-950 p-2 shadow-[0_28px_82px_rgba(51,42,48,0.32)]">
        <div
          className="pointer-events-none absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900 shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
          aria-hidden="true"
        />

        <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-blush via-paper to-lavender">
          {!hasError ? (
            <video
              ref={registerVideoRef}
              className="block h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              onPlay={(event) => onPlay(event.currentTarget)}
              onError={() => setHasError(true)}
            >
              <source src={src} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blush via-paper to-aqua p-6 text-center">
              <div>
                <p className="text-sm font-black text-berry">
                  Video pendiente
                </p>
                <p className="mt-2 break-all text-xs font-bold leading-5 text-ink/[0.56]">
                  {src}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
