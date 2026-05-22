import Image from "next/image";
import { RevealSection } from "./RevealSection";

export function About() {
  const pillars = ["Autenticidad", "Confianza", "Conexión", "Conversión"];

  return (
    <RevealSection
      id="que-es-ugc"
      className="section-padding relative isolate overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-transparent to-cream/40" />
      <span
        className="sparkle right-[12%] top-20 text-lavender [--size:1.9rem]"
        aria-hidden="true"
      />
      <span
        className="mini-star left-[8%] bottom-[20%] text-roseglow [--size:0.62rem]"
        aria-hidden="true"
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative order-2 mx-auto w-full max-w-[30rem] lg:order-1">
          <div
            className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-peach/[0.45] via-blush/[0.34] to-aqua/[0.38] blur-2xl"
            aria-hidden="true"
          />
          <div className="editorial-frame relative rounded-[2.4rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem]">
              <Image
                src="/abril-2.jpg"
                alt="Abril Pessano retratada con una estética fresca y editorial"
                fill
                sizes="(max-width: 768px) 90vw, 34vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -right-2 top-8 rounded-full bg-aqua/[0.85] px-4 py-2 text-xs font-black uppercase text-ink shadow-[0_16px_40px_rgba(76,143,132,0.14)]">
            UGC auténtico
          </div>
          <div className="sticker-note absolute -bottom-5 left-2 max-w-[13rem] rotate-[-4deg] rounded-[1.35rem] px-4 py-3 text-sm font-black leading-5">
            Contenido orgánico pensado para conectar.
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">¿Qué es el UGC?</p>
          <h2 className="display-title mt-5 max-w-2xl text-[clamp(3.25rem,7vw,6.6rem)] text-ink">
            ¿Qué es el UGC?
          </h2>
          <div className="mt-7 grid gap-5 text-pretty text-base leading-8 text-ink/[0.72] sm:text-lg">
            <p>
              El UGC (User Generated Content) es contenido creado de forma
              auténtica y natural para que las marcas conecten de verdad con su
              audiencia.
            </p>
            <p>
              A través de videos y contenido orgánico, ayudo a que los productos
              se sientan reales, cercanos y confiables, generando mayor
              conexión, interacción y conversión.
            </p>
            <p>
              Mi enfoque está en crear contenido femenino, emocional y
              visualmente atractivo, pensado especialmente para conectar con
              chicas y mujeres desde un lugar genuino.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {pillars.map((tag, index) => (
                <span
                  key={tag}
                  className="rounded-[1.45rem] border border-berry/[0.15] bg-paper/[0.72] px-4 py-5 text-sm font-black text-berry shadow-[0_12px_28px_rgba(168,72,115,0.08)]"
                >
                  <span className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blush via-peach to-aqua text-xs text-ink">
                    0{index + 1}
                  </span>
                  {tag}
                </span>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
