"use client";

import { pauseOtherVideos } from "@/lib/videoControls";

type FeatureVideoCardProps = {
  src: string;
  label: string;
  poster?: string;
  className?: string;
};

export function FeatureVideoCard({
  src,
  label,
  poster,
  className = "",
}: FeatureVideoCardProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[25rem] ${className}`}>
      <div
        className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-peach/[0.45] via-blush/[0.34] to-aqua/[0.32] blur-2xl"
        aria-hidden="true"
      />
      <div className="silver-edge relative overflow-hidden rounded-[2.35rem] border border-white/[0.72] bg-paper/[0.74] p-2.5 shadow-[0_28px_86px_rgba(168,72,115,0.16)] backdrop-blur-xl">
        <span
          className="pointer-events-none silver-star absolute -right-3 top-9 z-20 [--size:0.9rem]"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none tropical-flower flower-plumeria absolute -left-2 bottom-10 z-20 opacity-70"
          aria-hidden="true"
        />
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.85rem] bg-ink shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
          <video
            className="block h-full w-full bg-ink object-contain"
            controls
            playsInline
            preload="metadata"
            poster={poster}
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
