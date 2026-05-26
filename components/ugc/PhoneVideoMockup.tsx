"use client";

import { useEffect, useRef, useState } from "react";
import { pauseOtherVideos } from "@/lib/videoControls";

type PhoneVideoMockupProps = {
  src: string;
  poster: string;
  label: string;
  title: string;
  registerVideoRef: (element: HTMLVideoElement | null) => void;
  onPlay: (currentVideo: HTMLVideoElement) => void;
};

export function PhoneVideoMockup({
  src,
  poster,
  label,
  title,
  registerVideoRef,
  onPlay,
}: PhoneVideoMockupProps) {
  const [hasError, setHasError] = useState(false);
  const [isVideoMounted, setIsVideoMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isVideoMounted || !videoRef.current) {
      return;
    }

    const video = videoRef.current;
    pauseOtherVideos(video);
    onPlay(video);
    video.play().catch(() => {
      // Safari may require using the native controls after the custom tap.
    });
  }, [isVideoMounted, onPlay]);

  const handleVideoRef = (element: HTMLVideoElement | null) => {
    videoRef.current = element;
    registerVideoRef(element);
  };

  const posterAlt = `${title} ${label}`;

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
          <div className="relative h-full w-full md:hidden">
            <img
              src={poster}
              alt={posterAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-5 z-10 rounded-[1.35rem] bg-paper/[0.88] p-4 text-center shadow-[0_18px_44px_rgba(51,42,48,0.22)] backdrop-blur-xl">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-berry px-5 py-3 text-sm font-black text-paper shadow-[0_14px_34px_rgba(168,72,115,0.26)]"
              >
                Ver video
              </a>
              <p className="mt-3 text-[0.68rem] font-black uppercase tracking-[0.1em] text-berry/[0.72]">
                Se abre en el reproductor del celular
              </p>
            </div>
          </div>

          <div className="relative hidden h-full w-full md:block">
            {hasError ? (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blush via-paper to-aqua p-6 text-center">
                <div>
                  <p className="text-sm font-black text-berry">
                    No se pudo cargar este video
                  </p>
                  <p className="mt-2 break-all text-xs font-bold leading-5 text-ink/[0.56]">
                    {src}
                  </p>
                </div>
              </div>
            ) : isVideoMounted ? (
              <video
                ref={handleVideoRef}
                className="block h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={poster}
                onPlay={(event) => {
                  pauseOtherVideos(event.currentTarget);
                  onPlay(event.currentTarget);
                }}
                onError={() => setHasError(true)}
              >
                <source src={src} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            ) : (
              <div className="relative h-full w-full">
                <img
                  src={poster}
                  alt={posterAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 z-10 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/[0.72] bg-paper/[0.86] text-berry shadow-[0_18px_44px_rgba(51,42,48,0.24)] backdrop-blur-xl transition hover:scale-105"
                  onClick={() => setIsVideoMounted(true)}
                  aria-label={`Reproducir ${title} ${label}`}
                >
                  <span
                    className="ml-1 h-0 w-0 border-y-[0.72rem] border-l-[1.05rem] border-y-transparent border-l-current"
                    aria-hidden="true"
                  />
                </button>
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-[1.2rem] bg-paper/[0.78] px-3 py-2 text-center shadow-[0_12px_30px_rgba(51,42,48,0.14)] backdrop-blur-xl">
                  <p className="text-[0.66rem] font-black uppercase tracking-[0.16em] text-berry">
                    Tocar para reproducir
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
