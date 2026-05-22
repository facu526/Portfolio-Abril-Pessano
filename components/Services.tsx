"use client";

import { useCallback, useRef } from "react";
import { videoCategories } from "./ugc/ugcData";
import { PhoneVideoMockup } from "./ugc/PhoneVideoMockup";
import { RevealSection } from "./RevealSection";

export function Services() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const setVideoRef = useCallback(
    (index: number, node: HTMLVideoElement | null) => {
      videoRefs.current[index] = node;
    },
    [],
  );

  const pauseOtherVideos = useCallback((currentVideo: HTMLVideoElement) => {
    videoRefs.current.forEach((video) => {
      if (video && video !== currentVideo && !video.paused) {
        video.pause();
      }
    });
  }, []);

  let globalIndex = 0;

  return (
    <RevealSection
      id="ejemplos"
      className="section-padding relative isolate overflow-hidden"
    >
      <span
        className="sparkle left-[10%] top-24 text-aqua [--size:1.7rem]"
        aria-hidden="true"
      />
      <span
        className="sparkle bottom-20 right-[14%] text-peach [--size:1.5rem]"
        aria-hidden="true"
      />

      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">Ejemplos</p>
          <h2 className="display-title mt-5 text-[clamp(3rem,6.2vw,6.2rem)] text-ink">
            Ejemplos de contenido
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-8 text-ink/[0.70] sm:text-lg">
            Algunos formatos de contenido UGC pensados para conectar con la
            audiencia de forma natural, dinámica y visual.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {videoCategories.map((category) => (
            <article
              key={category.title}
              className="service-card rounded-[2rem] p-5 sm:p-6"
            >
              <div className="relative z-10">
                <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
                  <div>
                    <span className="rounded-full bg-paper/[0.72] px-3 py-1.5 text-xs font-black uppercase text-berry/[0.68]">
                      categoría
                    </span>
                    <h3 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                      {category.title}
                    </h3>
                  </div>
                  <span
                    className={`h-3 w-full rounded-full bg-gradient-to-r ${category.accent} sm:w-56`}
                    aria-hidden="true"
                  />
                </div>

                <div className="mx-auto mt-7 grid max-w-3xl justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-[repeat(2,minmax(14rem,18.5rem))]">
                  {category.videos.map((src, index) => {
                    const currentIndex = globalIndex;
                    globalIndex += 1;

                    return (
                      <PhoneVideoMockup
                        key={src}
                        src={src}
                        label={`Video ${index + 1}`}
                        title={category.title}
                        registerVideoRef={(node) =>
                          setVideoRef(currentIndex, node)
                        }
                        onPlay={pauseOtherVideos}
                      />
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
