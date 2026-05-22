import { RevealSection } from "./RevealSection";

function HighlightIcon({ type }: { type: "heart" | "chat" | "idea" | "spark" }) {
  const common = "h-7 w-7";

  if (type === "heart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
        <path
          d="M12 20.1s-7.2-4.35-8.85-9.2C2.1 7.8 3.82 5 6.82 5c1.72 0 3.22.88 4.02 2.2C11.64 5.88 13.14 5 14.86 5c3 0 4.72 2.8 3.67 5.9C16.88 15.75 12 20.1 12 20.1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "chat") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
        <path
          d="M5.4 17.7c-1.8-1.35-2.8-3.2-2.8-5.3 0-4.1 3.92-7.4 8.75-7.4s8.75 3.3 8.75 7.4-3.92 7.4-8.75 7.4a10.7 10.7 0 0 1-3.28-.5l-3.35 1.65a.72.72 0 0 1-1.02-.82l.7-2.43Z"
          fill="currentColor"
        />
        <path
          d="M7.7 11.7h7.4M7.7 14.2h4.85"
          fill="none"
          stroke="#fffdf9"
          strokeLinecap="round"
          strokeWidth="1.45"
        />
      </svg>
    );
  }

  if (type === "idea") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
        <path
          d="M8.25 19.1h7.5v1.05c0 1.2-.98 2.18-2.18 2.18h-3.14a2.18 2.18 0 0 1-2.18-2.18V19.1Z"
          fill="currentColor"
        />
        <path
          d="M12 2.35a6.82 6.82 0 0 0-4 12.33c.6.44.9 1.1.9 1.84v.42h6.2v-.42c0-.74.3-1.4.9-1.84a6.82 6.82 0 0 0-4-12.33Z"
          fill="currentColor"
        />
        <path
          d="M10.05 9.7c.35-.85 1.02-1.28 1.95-1.28s1.6.43 1.95 1.28"
          fill="none"
          stroke="#fffdf9"
          strokeLinecap="round"
          strokeWidth="1.35"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
      <path
        d="M12 1.9 14.2 8l6.1 2.2-6.1 2.2L12 18.5l-2.2-6.1-6.1-2.2L9.8 8 12 1.9Z"
        fill="currentColor"
      />
      <path
        d="m18.8 15.2.9 2.45 2.4.85-2.4.86-.9 2.44-.86-2.44-2.44-.86 2.44-.85.86-2.45Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

function SocialDoodle() {
  return (
    <div
      className="relative hidden min-h-36 w-48 shrink-0 items-center justify-center md:flex"
      aria-hidden="true"
    >
      <div className="absolute left-6 top-4 h-24 w-16 -rotate-6 rounded-[1.1rem] border border-berry/[0.2] bg-paper/[0.72] shadow-[0_16px_34px_rgba(168,72,115,0.12)]">
        <div className="mx-auto mt-2 h-1.5 w-6 rounded-full bg-berry/[0.25]" />
        <div className="mx-auto mt-4 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-blush to-peach text-[0.62rem] font-black text-berry">
          UGC
        </div>
      </div>
      <div className="absolute right-5 top-10 grid h-14 w-14 rotate-6 place-items-center rounded-[1.1rem] bg-gradient-to-br from-lavender/[0.82] to-aqua/[0.7] text-lg font-black text-berry shadow-[0_16px_34px_rgba(168,72,115,0.12)]">
        #
      </div>
      <div className="absolute bottom-5 right-12 grid h-12 w-12 -rotate-12 place-items-center rounded-full bg-roseglow/[0.32] text-berry shadow-[0_14px_28px_rgba(168,72,115,0.1)]">
        <HighlightIcon type="heart" />
      </div>
      <span className="mini-star right-2 top-3 text-roseglow [--size:0.55rem]" />
    </div>
  );
}

export function PortfolioHighlights() {
  return (
    <RevealSection
      id="trabajemos-juntos"
      className="section-padding relative isolate overflow-hidden bg-gradient-to-b from-transparent via-aqua/[0.20] to-transparent"
    >
      <div
        className="curve-line right-[-5rem] top-24 opacity-70 [--rotate:-22deg]"
        aria-hidden="true"
      />
      <span
        className="mini-star left-[12%] top-[18%] text-roseglow [--size:0.55rem]"
        aria-hidden="true"
      />

      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/[0.78] bg-gradient-to-br from-paper/[0.92] via-cream/[0.86] to-blush/[0.34] p-5 shadow-[0_34px_100px_rgba(168,72,115,0.16)] sm:p-8 lg:p-12">
          <div
            className="absolute -right-12 -top-12 h-48 w-64 rotate-12 rounded-[45%] border border-white/[0.46]"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 left-8 h-40 w-56 -rotate-12 rounded-[45%] border border-white/[0.36]"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="relative">
              <p className="eyebrow">TRABAJEMOS JUNTOS</p>
              <h2 className="display-title mt-5 max-w-[58rem] text-[clamp(3.35rem,8.5vw,7.8rem)] text-ink">
                Trabajemos juntos
              </h2>
              <div className="absolute right-0 top-4 hidden h-32 w-44 text-berry sm:block">
                <span className="sparkle right-16 top-2 text-roseglow [--size:2.1rem]" />
                <span className="sparkle right-2 top-16 text-lavender [--size:1.45rem]" />
                <span className="mini-star right-32 top-24 text-peach [--size:0.7rem]" />
              </div>
            </div>

            <div className="mt-8 grid gap-5 text-pretty text-base leading-8 text-ink/[0.74] sm:text-lg">
              <p className="max-w-5xl text-xl font-medium leading-9 text-ink/[0.76] sm:text-2xl sm:leading-10">
                Cada marca tiene una esencia distinta, y mi objetivo es ayudar a
                <span className="font-black text-berry">
                  {" "}
                  transmitirla de una manera creativa, actual y alineada con su
                  público.
                </span>
              </p>

              <div className="mt-3 grid gap-4 lg:grid-cols-2">
                <article className="grid grid-cols-[4.4rem_1px_1fr] items-stretch gap-4 rounded-[1.55rem] border border-berry/[0.12] bg-paper/[0.78] p-4 shadow-[0_18px_48px_rgba(168,72,115,0.09)] backdrop-blur-xl sm:gap-5 sm:p-5">
                  <div className="grid place-items-center self-center rounded-[1.15rem] bg-gradient-to-br from-blush via-peach to-paper p-4 text-berry shadow-[0_12px_28px_rgba(168,72,115,0.08)]">
                    <HighlightIcon type="heart" />
                  </div>
                  <div className="w-px bg-gradient-to-b from-transparent via-berry/[0.22] to-transparent" />
                  <div className="py-1">
                    <h3 className="text-sm font-black uppercase leading-5 tracking-[0.08em] text-berry">
                      CONTENIDO AUTÉNTICO Y CERCANO
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink/[0.72] sm:text-base">
                      Me gusta crear contenido que se sienta natural,
                      visualmente atractivo y emocionalmente real, logrando que
                      las personas conecten con el mensaje desde el primer
                      momento.
                    </p>
                  </div>
                </article>

                <article className="grid grid-cols-[4.4rem_1px_1fr] items-stretch gap-4 rounded-[1.55rem] border border-berry/[0.12] bg-white/[0.56] p-4 shadow-[0_18px_48px_rgba(168,72,115,0.08)] backdrop-blur-xl sm:gap-5 sm:p-5">
                  <div className="grid place-items-center self-center rounded-[1.15rem] bg-gradient-to-br from-lavender via-aqua to-paper p-4 text-berry shadow-[0_12px_28px_rgba(168,72,115,0.08)]">
                    <HighlightIcon type="chat" />
                  </div>
                  <div className="w-px bg-gradient-to-b from-transparent via-berry/[0.22] to-transparent" />
                  <div className="py-1">
                    <h3 className="text-sm font-black uppercase leading-5 tracking-[0.08em] text-berry">
                      ENFOQUE ESTRATÉGICO Y MODERNO
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink/[0.72] sm:text-base">
                      Hoy las redes sociales funcionan a partir de la autenticidad.
                      Por eso, mi enfoque está en crear contenido dinámico, moderno
                      y humano, adaptado al estilo y la identidad de cada marca.
                    </p>
                  </div>
                </article>
              </div>

              <article className="grid items-center gap-4 rounded-[1.55rem] border border-white/[0.72] bg-gradient-to-br from-paper/[0.84] via-peach/[0.3] to-aqua/[0.22] p-4 shadow-[0_18px_48px_rgba(168,72,115,0.09)] backdrop-blur-xl sm:grid-cols-[4.4rem_1px_1fr] sm:gap-5 sm:p-5 md:grid-cols-[4.4rem_1px_1fr_auto]">
                <div className="grid h-[4.4rem] w-[4.4rem] place-items-center rounded-[1.15rem] bg-gradient-to-br from-peach via-blush to-paper text-berry shadow-[0_12px_28px_rgba(168,72,115,0.08)]">
                  <HighlightIcon type="idea" />
                </div>
                <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-berry/[0.22] to-transparent sm:block" />
                <p className="text-base font-medium leading-8 text-ink/[0.74] sm:text-lg">
                  Disfruto trabajar en proyectos donde puedo aportar{" "}
                  <span className="font-black text-berry">
                    creatividad, ideas y una mirada estética cuidada
                  </span>
                  , siempre buscando que el
                  contenido tenga impacto y destaque de manera orgánica dentro de
                  plataformas como TikTok e Instagram.
                </p>
                <SocialDoodle />
              </article>

              <div className="mt-1 grid items-stretch gap-4 rounded-[1.8rem] bg-gradient-to-br from-berry via-[#bf6d91] to-roseglow p-5 text-paper shadow-[0_24px_70px_rgba(168,72,115,0.2)] sm:grid-cols-[4.8rem_1px_1fr] sm:gap-5 sm:p-7">
                <div className="grid h-[4.8rem] w-[4.8rem] place-items-center self-center rounded-[1.25rem] bg-paper/[0.18] text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                  <HighlightIcon type="spark" />
                </div>
                <div className="hidden w-px bg-gradient-to-b from-transparent via-paper/[0.5] to-transparent sm:block" />
                <p className="text-xl font-black leading-8 sm:text-2xl sm:leading-10">
                  Si buscás{" "}
                  <span className="text-cream">
                    contenido femenino, moderno, emocional
                  </span>{" "}
                  y pensado estratégicamente para{" "}
                  <span className="text-cream">captar atención</span> y generar{" "}
                  <span className="text-cream">conexión</span>, me encantaría
                  formar parte de tu marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
