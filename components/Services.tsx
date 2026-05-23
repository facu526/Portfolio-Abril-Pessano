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

export function Services() {
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
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">Ejemplos</p>
          <h2 className="display-title mt-5 whitespace-nowrap text-[clamp(1.95rem,8.2vw,6.2rem)] text-ink">
            Ejemplos de contenido
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-8 text-ink/[0.70] sm:text-lg">
            Formatos UGC pensados para marcas que buscan contenido real,
            cercano y visual.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {videoCategories.map((category) => (
            <article
              key={category.title}
              className="service-card rounded-[2rem] p-5 sm:p-6 lg:p-8"
            >
              <div className="relative z-10">
                <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
                  <div>
                    <span className="rounded-full bg-paper/[0.72] px-3 py-1.5 text-xs font-black uppercase text-berry/[0.68] shadow-[0_10px_28px_rgba(168,72,115,0.08)]">
                      categoría
                    </span>
                    <h3 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                      {category.title}
                    </h3>
                  </div>
                  <span
                    className="h-3 w-full rounded-full bg-gradient-to-r from-blush via-peach to-aqua shadow-[0_12px_34px_rgba(168,72,115,0.12)] sm:w-56"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:gap-7">
                  {category.videos.map((video, index) => (
                    <a
                      key={video.href}
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative mx-auto flex min-h-[25rem] w-full max-w-[22rem] flex-col overflow-hidden rounded-[2.2rem] border border-white/[0.72] bg-gradient-to-br ${
                        cardGradients[index % cardGradients.length]
                      } p-4 text-ink shadow-[0_26px_74px_rgba(168,72,115,0.16)] transition hover:-translate-y-1 hover:shadow-[0_32px_86px_rgba(168,72,115,0.22)] focus:outline-none focus-visible:ring-4 focus-visible:ring-roseglow/[0.32] sm:min-h-[26rem]`}
                      aria-label={`Abrir ${category.title} ${video.label}`}
                    >
                      <span
                        className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-ink/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.52)]"
                        aria-hidden="true"
                      />
                      <span
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.46),transparent_36%,rgba(255,255,255,0.24)_100%)]"
                        aria-hidden="true"
                      />

                      <span className="relative z-10 mt-8 inline-flex w-fit rounded-full bg-paper/[0.76] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.16em] text-berry shadow-[0_12px_28px_rgba(168,72,115,0.12)]">
                        {category.title}
                      </span>

                      <span className="relative z-10 mt-auto grid flex-1 place-items-center py-10">
                        <span className="grid h-24 w-24 place-items-center rounded-full border border-white/[0.78] bg-paper/[0.86] text-berry shadow-[0_22px_54px_rgba(51,42,48,0.18)] backdrop-blur-xl transition group-hover:scale-105">
                          <span
                            className="ml-1 h-0 w-0 border-y-[0.86rem] border-l-[1.24rem] border-y-transparent border-l-current"
                            aria-hidden="true"
                          />
                        </span>
                      </span>

                      <span className="relative z-10 rounded-[1.45rem] bg-paper/[0.82] p-4 text-center shadow-[0_18px_42px_rgba(51,42,48,0.12)] backdrop-blur-xl">
                        <span className="block text-sm font-black uppercase tracking-[0.16em] text-berry">
                          {video.label}
                        </span>
                        <span className="mt-2 block text-lg font-black text-ink">
                          Abrir video &rarr;
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
