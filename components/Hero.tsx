import Image from "next/image";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M14 4c.5 3.1 2.2 4.9 5 5.2v3.1c-1.8 0-3.4-.5-5-1.6v5.1c0 3-2.1 5.2-5.1 5.2A5 5 0 0 1 4 16c0-3 2.4-5.2 5.6-5v3.2c-1.4-.2-2.4.6-2.4 1.8 0 1.1.8 1.9 1.9 1.9s1.9-.8 1.9-2V4h3Z" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m5 8 7 5 7-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:pt-32 lg:items-center lg:pb-20"
    >
      <div className="dream-wash absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="curve-line -left-14 top-40 opacity-70 [--rotate:18deg]"
        aria-hidden="true"
      />
      <div
        className="curve-line bottom-14 right-6 opacity-60 [--rotate:-18deg]"
        aria-hidden="true"
      />
      <span
        className="sparkle left-[7%] top-[22%] opacity-[0.55] [--size:2.1rem]"
        aria-hidden="true"
      />
      <span
        className="sparkle bottom-[12%] right-[48%] opacity-[0.45] [--size:1.5rem]"
        aria-hidden="true"
      />
      <span
        className="mini-star right-[10%] top-[18%] text-aqua [--size:0.6rem]"
        aria-hidden="true"
      />
      <span
        className="silver-star left-[18%] bottom-[18%] [--size:1rem]"
        aria-hidden="true"
      />
      <span
        className="tropical-flower right-[18%] bottom-[11%] opacity-70"
        aria-hidden="true"
      />
      <span
        className="tropical-flower flower-hibiscus left-[3%] top-[56%] hidden opacity-55 lg:block"
        aria-hidden="true"
      />
      <span
        className="tropical-flower flower-plumeria right-[6%] top-[42%] opacity-60"
        aria-hidden="true"
      />
      <span
        className="silver-sprinkles left-[28%] top-[15%]"
        aria-hidden="true"
      />
      <span
        className="silver-sprinkles right-[28%] bottom-[22%]"
        aria-hidden="true"
      />
      <span
        className="glitter-burst left-[42%] top-[34%]"
        aria-hidden="true"
      />
      <span
        className="mirror-ball right-[4%] top-[24%] hidden lg:block"
        aria-hidden="true"
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="relative z-10 max-w-3xl">
          <div className="brand-lockup">
            <span className="ap-monogram grid h-14 w-14 place-items-center rounded-full text-lg font-black text-white">
              AP
            </span>
            <span className="silver-star [--size:0.72rem]" aria-hidden="true" />
            <span className="tropical-flower flower-plumeria brand-flower" aria-hidden="true" />
          </div>
          <p className="eyebrow">UGC Portfolio</p>
          <h1 className="display-title mt-6 max-w-[9ch] text-[clamp(4.45rem,13vw,9.6rem)] uppercase text-ink">
            ABRIL PESSANO
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg font-black text-berry sm:text-xl">
            UGC Creator | Content Creator
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#ejemplos" className="premium-button button-primary">
              Ver ejemplos
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contacto" className="premium-button button-soft">
              Contactar
            </a>
          </div>

          <div className="mt-10 grid max-w-xl gap-3">
            <a href="https://instagram.com/abrupessano" target="_blank" rel="noreferrer noopener" className="hero-contact-link">
              <InstagramIcon />
              <span>abrupessano</span>
            </a>
            <a href="https://www.tiktok.com/@abrupessa" target="_blank" rel="noreferrer noopener" className="hero-contact-link">
              <TikTokIcon />
              <span>abrupessa</span>
            </a>
            <a href="mailto:abrilpessano@gmail.com" className="hero-contact-link">
              <MailIcon />
              <span>abrilpessano@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-[38rem]">
          <div
            className="hero-photo-glow absolute -inset-7 rounded-[4rem] opacity-95"
            aria-hidden="true"
          />
          <div
            className="absolute -right-5 top-8 z-20 rounded-full bg-ink px-4 py-2 text-xs font-black uppercase text-paper shadow-[0_16px_40px_rgba(51,42,48,0.18)] sm:right-2"
          >
            UGC creator
          </div>
          <div className="editorial-frame relative rotate-[-2.2deg] rounded-[2.4rem] p-3 sm:rounded-[3rem] sm:p-4">
            <span className="silver-star absolute -left-4 top-10 z-20 [--size:1.15rem]" aria-hidden="true" />
            <span className="silver-star absolute -right-3 bottom-16 z-20 [--size:0.82rem]" aria-hidden="true" />
            <span className="glitter-burst -right-5 top-6 z-20" aria-hidden="true" />
            <span className="tropical-flower flower-hibiscus absolute -right-7 top-24 z-20 opacity-75" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] sm:rounded-[2.35rem]">
              <Image
                src="/abril-1.jpg"
                alt="Abril Pessano como creadora UGC"
                fill
                priority
                sizes="(max-width: 768px) 92vw, 42vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/[0.18] via-transparent to-white/[0.10]"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="sticker-note silver-edge absolute -bottom-4 left-0 z-20 flex items-center gap-3 rounded-full px-4 py-3 text-sm font-black leading-5 sm:-left-6 sm:bottom-12">
            <span className="ap-monogram grid h-9 w-9 place-items-center rounded-full text-xs text-white">
              AP
            </span>
            <span>Abril Pessano</span>
          </div>
          <div className="floating-label absolute -left-3 top-[18%] z-20 hidden rotate-[-6deg] px-4 py-2 sm:block">
            contenido real
          </div>
          <div className="floating-label absolute -right-2 bottom-[22%] z-20 rotate-[5deg] px-4 py-2">
            reels + tiktok
          </div>
        </div>
      </div>
    </section>
  );
}
