"use client";

import { useEffect, useState } from "react";

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
  const [videoMissing, setVideoMissing] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let isMounted = true;

    setIsChecking(true);
    setVideoMissing(false);

    fetch(src, { method: "HEAD" })
      .then((response) => {
        if (isMounted) {
          setVideoMissing(!response.ok);
          setIsChecking(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setVideoMissing(true);
          setIsChecking(false);
        }
      });

    return () => {
      isMounted = false;
      setVideoRef(index, null);
    };
  }, [index, setVideoRef, src]);

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
        <div className="phone-bezel">
          <span className="phone-lens" aria-hidden="true" />
          <div className="phone-island" aria-hidden="true">
            <span />
          </div>
          <div className="phone-screen">
            {videoMissing ? (
              <div className="phone-placeholder">
                <span className="phone-play-mark" aria-hidden="true" />
                <p>Video pendiente</p>
                <small>{src}</small>
              </div>
            ) : (
              <video
                ref={(node) => setVideoRef(index, node)}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster=""
                onPlay={(event) => onPlay(event.currentTarget)}
                onError={() => setVideoMissing(true)}
              >
                <source src={src} type="video/mp4" />
              </video>
            )}
            {isChecking && !videoMissing ? (
              <div className="phone-loading">
                <span />
                <p>Chequeando video</p>
              </div>
            ) : null}
            <div className="phone-home" aria-hidden="true" />
          </div>
        </div>
      </div>
    </article>
  );
}
