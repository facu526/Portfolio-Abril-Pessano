"use client";

import { optimizedPoster } from "@/lib/optimizedPoster";
import { pauseOtherVideos } from "@/lib/videoControls";
import { PaperClip, Sparkle } from "./scrapbook/Decor";

type FeatureVideoCardProps = {
  src: string;
  label: string;
  poster?: string;
  className?: string;
  /** Inclinación en grados. */
  tilt?: number;
};

export function FeatureVideoCard({
  src,
  label,
  poster,
  className = "",
  tilt = 0,
}: FeatureVideoCardProps) {
  return (
    <div
      className={`feature-video ${className}`}
      style={{ "--r": `${tilt}deg` } as React.CSSProperties}
    >
      <div className="feature-video__body">
        <span className="tape feature-video__tape" aria-hidden="true" />
        <PaperClip className="feature-video__clip" />
        <Sparkle className="feature-video__star" />
        <div className="feature-video__screen">
          <video
            controls
            playsInline
            preload="metadata"
            poster={poster ? optimizedPoster(poster) : undefined}
            aria-label={label}
            onPlay={(event) => pauseOtherVideos(event.currentTarget)}
          >
            <source src={src} type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </div>
      </div>
    </div>
  );
}
