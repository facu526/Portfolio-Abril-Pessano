"use client";

import { useState } from "react";

type PhoneVideoMockupProps = {
  src: string;
  category: string;
  label: string;
  index: number;
  setVideoRef: (index: number, node: HTMLVideoElement | null) => void;
  onPlay: (currentVideo: HTMLVideoElement) => void;
};

export function PhoneVideoMockup({
  src,
  category,
  label,
  index,
  setVideoRef,
  onPlay,
}: PhoneVideoMockupProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="phone-card">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-ink px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-paper">
          {category}
        </span>
        <span className="text-xs font-black uppercase tracking-[0.08em] text-berry/[0.62]">
          {label}
        </span>
      </div>

      <div className="phone-device">
        <span className="phone-button phone-button-left" aria-hidden="true" />
        <span className="phone-button phone-button-right" aria-hidden="true" />
        <div className="phone-bezel aspect-[9/16] w-full">
          <span className="phone-lens" aria-hidden="true" />
          <div className="phone-island" aria-hidden="true">
            <span />
          </div>
          <div className="phone-screen h-full w-full">
            {hasError ? (
              <div className="phone-placeholder">
                <span className="phone-play-mark" aria-hidden="true" />
                <p>Video pendiente</p>
                <small>{src}</small>
              </div>
            ) : (
              <video
                ref={(node) => setVideoRef(index, node)}
                className="relative z-[2] block h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                onPlay={(event) => onPlay(event.currentTarget)}
                onError={() => setHasError(true)}
              >
                <source src={src} type="video/mp4" />
              </video>
            )}
            <div className="phone-home" aria-hidden="true" />
          </div>
        </div>
      </div>
    </article>
  );
}
