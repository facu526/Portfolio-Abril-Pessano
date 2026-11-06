"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { optimizedPoster } from "@/lib/optimizedPoster";
import { pauseOtherVideos } from "@/lib/videoControls";

export type SelectedVideo = {
  src: string;
  title: string;
  category: string;
  poster: string;
};

/** Reproductor de mobile: un único <video> montado a la vez, a pedido. */
export function VideoModal({
  src,
  title,
  category,
  poster,
  onClose,
}: SelectedVideo & { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;

    // Lo que quede detrás del modal no se puede enfocar ni sigue sonando.
    const background = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && !element.contains(dialog),
    );

    background.forEach((element) => {
      element.inert = true;
    });

    if (videoRef.current) {
      pauseOtherVideos(videoRef.current);
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        videoRef.current?.pause();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      background.forEach((element) => {
        element.inert = false;
      });
      previousFocus?.focus();
    };
  }, [onClose]);

  const handleClose = () => {
    videoRef.current?.pause();
    onClose();
  };

  return createPortal(
    <div
      ref={dialogRef}
      className="video-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${category} ${title}`}
    >
      <button
        type="button"
        className="video-modal__backdrop"
        onClick={handleClose}
        aria-label="Cerrar video"
        tabIndex={-1}
      />

      <button
        ref={closeButtonRef}
        type="button"
        onClick={handleClose}
        className="video-modal__close"
        style={{ top: "calc(env(safe-area-inset-top) + 16px)" }}
        aria-label="Cerrar video"
      >
        Cerrar ✕
      </button>

      <div className="video-modal__card">
        <span className="tape video-modal__tape" aria-hidden="true" />
        <div className="video-modal__head">
          <p>{category}</p>
          <h3>{title}</h3>
        </div>

        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={optimizedPoster(poster)}
          className="video-modal__video"
          onPlay={(event) => pauseOtherVideos(event.currentTarget)}
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        <button type="button" onClick={handleClose} className="btn btn--ink video-modal__done">
          Cerrar video
        </button>
      </div>
    </div>,
    document.body,
  );
}
