"use client";

import Image from "next/image";
import type { VideoFrameStyle, VideoItem } from "@/lib/content";
import { optimizedPoster } from "@/lib/optimizedPoster";
import { pauseOtherVideos } from "@/lib/videoControls";

type VideoTileProps = {
  video: VideoItem;
  category: string;
  frame: VideoFrameStyle;
  /** Inclinación en grados. */
  tilt?: number;
  isDesktop: boolean;
  onOpen: () => void;
};

/**
 * Una pieza de la grilla de ejemplos.
 * Desde 768px es un <video> con controles nativos; en mobile, poster + botón
 * que abre el modal, para no montar decenas de videos en iPhone.
 */
export function VideoTile({
  video,
  category,
  frame,
  tilt = 0,
  isDesktop,
  onOpen,
}: VideoTileProps) {
  return (
    <article
      className={`vtile vtile--${frame}`}
      style={{ "--r": `${tilt}deg` } as React.CSSProperties}
    >
      <div className="vtile__body">
        {frame === "print" ? <span className="tape vtile__tape" aria-hidden="true" /> : null}

        <div className="vtile__screen">
          {isDesktop ? (
            <video
              controls
              playsInline
              preload="none"
              poster={optimizedPoster(video.poster)}
              aria-label={`${category} ${video.label}`}
              onPlay={(event) => pauseOtherVideos(event.currentTarget)}
            >
              <source src={video.href} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          ) : (
            <button
              type="button"
              onClick={onOpen}
              className="vtile__open"
              aria-label={`Ver ${category} ${video.label}`}
            >
              <Image
                src={video.poster}
                alt={`${category} ${video.label}`}
                fill
                sizes="(max-width: 767px) 46vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <span className="vtile__play" aria-hidden="true" />
              <span className="vtile__watch" aria-hidden="true">
                Ver video
              </span>
            </button>
          )}
        </div>

        <p className="vtile__caption">
          <span>{video.label}</span> <span>{category}</span>
        </p>
      </div>
    </article>
  );
}
