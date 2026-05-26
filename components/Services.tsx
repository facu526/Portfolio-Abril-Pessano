"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { pauseOtherVideos } from "@/lib/videoControls";

const videoCategories = [
  {
    title: "UNBOXING",
    videos: [
      {
        label: "Video 1",
        href: "/videos/unboxing-1.mp4",
        poster: "/video-posters/unboxing-1.jpg",
      },
      {
        label: "Video 2",
        href: "/videos/unboxing-2.mp4",
        poster: "/video-posters/unboxing-2.jpg",
      },
    ],
  },
  {
    title: "RECOMENDACIÓN",
    videos: [
      {
        label: "Video 1",
        href: "/videos/recomendacion-1.mp4",
        poster: "/video-posters/recomendacion-1.jpg",
      },
      {
        label: "Video 2",
        href: "/videos/recomendacion-2.mp4",
        poster: "/video-posters/recomendacion-2.jpg",
      },
    ],
  },
  {
    title: "MODA",
    videos: [
      {
        label: "Video 1",
        href: "/videos/moda-1.mp4",
        poster: "/video-posters/moda-1.jpg",
      },
      {
        label: "Video 2",
        href: "/videos/moda-2.mp4",
        poster: "/video-posters/moda-2.jpg",
      },
    ],
  },
  {
    title: "MAKE UP",
    videos: [
      {
        label: "Video 1",
        href: "/videos/makeup-1.mp4",
        poster: "/video-posters/makeup-1.jpg",
      },
      {
        label: "Video 2",
        href: "/videos/makeup-2.mp4",
        poster: "/video-posters/makeup-2.jpg",
      },
    ],
  },
];

type SelectedVideo = {
  src: string;
  title: string;
  category: string;
  poster: string;
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
  poster,
  onClose,
}: SelectedVideo & { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

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
    };
  }, [onClose]);

  const handleClose = () => {
    videoRef.current?.pause();
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-ink/[0.82] px-4 py-6 backdrop-blur-md"
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

      <button
        type="button"
        onClick={handleClose}
        className="fixed right-4 z-[100000] rounded-full bg-paper px-5 py-3 text-sm font-black text-ink shadow-[0_18px_44px_rgba(0,0,0,0.28)]"
        style={{ top: "calc(env(safe-area-inset-top) + 16px)" }}
        aria-label="Cerrar video"
      >
        Cerrar ✕
      </button>

      <div className="relative z-[100000] w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-white/[0.28] bg-paper p-3 shadow-[0_32px_90px_rgba(0,0,0,0.36)]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="px-2 pt-2">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-berry">
              {category}
            </p>
            <h3 className="mt-1 text-xl font-black text-ink">{title}</h3>
          </div>
        </div>

        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full max-h-[72vh] rounded-[1.5rem] bg-ink object-contain"
          onPlay={(event) => pauseOtherVideos(event.currentTarget)}
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        <button
          type="button"
          onClick={handleClose}
          className="mt-4 w-full rounded-full bg-ink px-5 py-4 text-sm font-black text-paper shadow-[0_14px_34px_rgba(51,42,48,0.24)]"
        >
          Cerrar video
        </button>
      </div>
    </div>,
    document.body,
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
                {category.videos.map((video) => (
                  <button
                    key={video.href}
                    type="button"
                    onClick={() =>
                      setSelectedVideo({
                        src: video.href,
                        title: video.label,
                        category: category.title,
                        poster: video.poster,
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
                              src={video.poster}
                              alt={`${category.title} ${video.label}`}
                              className="h-full w-full bg-ink object-cover"
                              loading="lazy"
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
          poster={selectedVideo.poster}
          onClose={() => setSelectedVideo(null)}
        />
      ) : null}
    </>
  );
}

function DesktopVideoExamples() {
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
                {category.videos.map((video) => (
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
                              controls
                              playsInline
                              preload="metadata"
                              poster={video.poster}
                              className="block h-full w-full object-cover"
                              onPlay={(event) =>
                                pauseOtherVideos(event.currentTarget)
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
                ))}
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
      <span
        className="silver-star left-[22%] bottom-[18%] [--size:0.95rem]"
        aria-hidden="true"
      />
      <span
        className="silver-sprinkles right-[10%] top-[18%]"
        aria-hidden="true"
      />
      <span
        className="silver-sprinkles left-[9%] bottom-[34%]"
        aria-hidden="true"
      />
      <span
        className="tropical-flower flower-hibiscus left-[5%] top-[34%] opacity-55"
        aria-hidden="true"
      />
      <span
        className="tropical-flower flower-plumeria right-[6%] bottom-[18%] opacity-60"
        aria-hidden="true"
      />
      <span
        className="glitter-burst left-[30%] top-[16%]"
        aria-hidden="true"
      />
      <span
        className="glitter-burst right-[28%] bottom-[10%]"
        aria-hidden="true"
      />
      <span
        className="mirror-ball right-[3%] top-[48%] hidden lg:block"
        aria-hidden="true"
      />

      <div className="section-shell">
        {isDesktop ? <DesktopVideoExamples /> : <MobileVideoExamples />}
      </div>
    </section>
  );
}
