"use client";

import { useEffect, useRef, useState } from "react";

const videoCategories = [
  {
    title: "UNBOXING",
    videos: [
      { label: "Video 1", href: "/videos/unboxing-1.mp4" },
      { label: "Video 2", href: "/videos/unboxing-2.mp4" },
    ],
  },
  {
    title: "RECOMENDACIÓN",
    videos: [
      { label: "Video 1", href: "/videos/recomendacion-1.mp4" },
      { label: "Video 2", href: "/videos/recomendacion-2.mp4" },
    ],
  },
  {
    title: "MODA",
    videos: [
      { label: "Video 1", href: "/videos/moda-1.mp4" },
      { label: "Video 2", href: "/videos/moda-2.mp4" },
    ],
  },
  {
    title: "MAKE UP",
    videos: [
      { label: "Video 1", href: "/videos/makeup-1.mp4" },
      { label: "Video 2", href: "/videos/makeup-2.mp4" },
    ],
  },
];

const cardGradients = [
  "from-blush via-peach to-aqua",
  "from-aqua via-paper to-lavender",
];

const posterImages = ["/abril-1.jpg", "/abril-2.jpg", "/abril-3.jpg"];

type SelectedVideo = {
  src: string;
  title: string;
  category: string;
};

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setIsDesktop(mediaQuery.matches);
    };

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return isDesktop;
}

function ExamplesHeader() {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className="eyebrow">Ejemplos</p>
      <h2 className="display-title mt-5 whitespace-nowrap text-[clamp(1.95rem,8.2vw,6.2rem)] text-ink">
        Ejemplos de contenido
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-8 text-ink/[0.70] sm:text-lg">
        Formatos UGC pensados para marcas que buscan contenido real, cercano y
        visual.
      </p>
    </div>
  );
}

function CategoryHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
      <div>
        <span className="rounded-full bg-paper/[0.72] px-3 py-1.5 text-xs font-black uppercase text-berry/[0.68] shadow-[0_10px_28px_rgba(168,72,115,0.08)]">
          categoría
        </span>
        <h3 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
          {title}
        </h3>
      </div>
      <span
        className="h-3 w-full rounded-full bg-gradient-to-r from-blush via-peach to-aqua shadow-[0_12px_34px_rgba(168,72,115,0.12)] sm:w-56"
        aria-hidden="true"
      />
    </div>
  );
}

function MobileVideoModal({
  src,
  title,
  category,
  onClose,
}: SelectedVideo & { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClose = () => {
    videoRef.current?.pause();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/[0.72] px-4 py-5 backdrop-blur-md sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${category} ${title}`}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={handleClose}
        aria-label="Cerrar video"
      />

      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/[0.24] bg-paper p-4 shadow-[0_32px_90px_rgba(0,0,0,0.34)]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-berry">
              {category}
            </p>
            <h3 className="mt-1 text-xl font-black text-ink">{title}</h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="grid h-11 w-11 flex-none place-items-center rounded-full bg-ink text-xl font-black leading-none text-paper shadow-[0_14px_34px_rgba(51,42,48,0.24)]"
            aria-label="Cerrar video"
          >
            ×
          </button>
        </div>

        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          className="w-full max-h-[80vh] rounded-3xl bg-ink object-contain"
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      </div>
    </div>
  );
}

function MobileVideoExamples() {
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(
    null,
  );

  return (
    <>
      <ExamplesHeader />

      <div className="mt-12 grid gap-6">
        {videoCategories.map((category) => (
          <article
            key={category.title}
            className="service-card rounded-[2rem] p-5 sm:p-6 lg:p-8"
          >
            <div className="relative z-10">
              <CategoryHeader title={category.title} />

              <div className="mt-7 grid gap-6">
                {category.videos.map((video, index) => (
                  <button
                    key={video.href}
                    type="button"
                    onClick={() =>
                      setSelectedVideo({
                        src: video.href,
                        title: video.label,
                        category: category.title,
                      })
                    }
                    className="group mx-auto w-full max-w-[20rem] text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-roseglow/[0.32]"
                    aria-label={`Ver ${category.title} ${video.label}`}
                  >
                    <span className="phone-card block w-full">
                      <span className="block text-center text-xs font-black uppercase tracking-[0.22em] text-berry">
                        {video.label}
                      </span>
                      <span className="mt-1 block text-center text-sm font-black uppercase tracking-[0.08em] text-ink">
                        {category.title}
                      </span>

                      <span className="phone-device mt-4 block">
                        <span className="phone-button phone-button-left" />
                        <span className="phone-button phone-button-right" />
                        <span className="phone-bezel block aspect-[9/16]">
                          <span className="phone-island">
                            <span />
                          </span>
                          <span className="phone-lens" />
                          <span className="phone-screen block">
                            <img
                              src={
                                posterImages[
                                  (index + category.title.length) %
                                    posterImages.length
                                ]
                              }
                              alt={`${category.title} ${video.label}`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                            <span
                              className={`absolute inset-0 bg-gradient-to-t from-ink/[0.52] via-ink/[0.10] to-white/[0.16] ${
                                cardGradients[index % cardGradients.length]
                              } opacity-75 mix-blend-soft-light`}
                              aria-hidden="true"
                            />
                            <span className="absolute inset-x-4 top-12 z-10 rounded-full bg-paper/[0.78] px-3 py-2 text-center text-[0.66rem] font-black uppercase tracking-[0.16em] text-berry shadow-[0_12px_28px_rgba(51,42,48,0.16)] backdrop-blur-xl">
                              {category.title}
                            </span>
                            <span className="absolute left-1/2 top-1/2 z-10 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/[0.78] bg-paper/[0.88] text-berry shadow-[0_22px_54px_rgba(51,42,48,0.24)] backdrop-blur-xl transition group-hover:scale-105">
                              <span
                                className="ml-1 h-0 w-0 border-y-[0.72rem] border-l-[1.05rem] border-y-transparent border-l-current"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="absolute bottom-5 left-4 right-4 z-10 rounded-[1.35rem] bg-paper/[0.84] px-4 py-3 text-center shadow-[0_18px_42px_rgba(51,42,48,0.18)] backdrop-blur-xl">
                              <span className="block text-sm font-black uppercase tracking-[0.14em] text-berry">
                                {video.label}
                              </span>
                              <span className="mt-1 block text-lg font-black text-ink">
                                Ver video
                              </span>
                            </span>
                          </span>
                          <span className="phone-home" />
                        </span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedVideo ? (
        <MobileVideoModal
          src={selectedVideo.src}
          title={selectedVideo.title}
          category={selectedVideo.category}
          onClose={() => setSelectedVideo(null)}
        />
      ) : null}
    </>
  );
}

function DesktopVideoExamples() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const registerVideoRef = (index: number, element: HTMLVideoElement | null) => {
    if (element) {
      videoRefs.current[index] = element;
    }
  };

  const handlePlay = (currentVideo: HTMLVideoElement) => {
    videoRefs.current.forEach((video) => {
      if (video && video !== currentVideo && !video.paused) {
        video.pause();
      }
    });
  };

  let videoIndex = 0;

  return (
    <>
      <ExamplesHeader />

      <div className="mt-12 grid gap-6">
        {videoCategories.map((category) => (
          <article
            key={category.title}
            className="service-card rounded-[2rem] p-6 lg:p-8"
          >
            <div className="relative z-10">
              <CategoryHeader title={category.title} />

              <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 justify-items-center gap-8">
                {category.videos.map((video) => {
                  const currentIndex = videoIndex;
                  videoIndex += 1;

                  return (
                    <article
                      key={video.href}
                      className="phone-card text-center"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-berry">
                        {video.label}
                      </p>
                      <h4 className="mt-1 text-sm font-black uppercase tracking-[0.08em] text-ink">
                        {category.title}
                      </h4>

                      <div className="phone-device mt-4">
                        <span className="phone-button phone-button-left" />
                        <span className="phone-button phone-button-right" />
                        <div className="phone-bezel aspect-[9/16]">
                          <span className="phone-island">
                            <span />
                          </span>
                          <span className="phone-lens" />
                          <div className="phone-screen">
                            <video
                              ref={(element) =>
                                registerVideoRef(currentIndex, element)
                              }
                              controls
                              playsInline
                              preload="metadata"
                              className="block h-full w-full object-cover"
                              onPlay={(event) =>
                                handlePlay(event.currentTarget)
                              }
                            >
                              <source src={video.href} type="video/mp4" />
                              Tu navegador no soporta video HTML5.
                            </video>
                          </div>
                          <span className="phone-home" />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function Services() {
  const isDesktop = useIsDesktop();

  return (
    <section
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
        {isDesktop ? <DesktopVideoExamples /> : <MobileVideoExamples />}
      </div>
    </section>
  );
}
