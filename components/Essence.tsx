import { RevealSection } from "./RevealSection";

export function Essence() {
  const strategy = [
    "Captar atención",
    "Transmitir confianza",
    "Generar conexión",
    "Mostrar el producto de una manera real y atractiva",
  ];
  const contributions = [
    "✨ Contenido auténtico y cercano",
    "✨ Comunicación natural frente a cámara",
    "✨ Edición moderna y dinámica",
    "✨ Videos adaptados a TikTok y Reels",
    "✨ Hooks que captan atención rápidamente",
    "✨ Estética femenina y actual",
    "✨ Creatividad alineada a tendencias",
    "✨ Recomendaciones orgánicas y creíbles",
    "✨ Contenido pensado para conectar y convertir",
  ];

  return (
    <RevealSection
      id="por-que-trabajar-conmigo"
      className="section-padding relative isolate overflow-hidden bg-gradient-to-b from-transparent via-blush/[0.22] to-transparent"
    >
      <span
        className="silver-star right-[9%] top-[14%] [--size:1.05rem]"
        aria-hidden="true"
      />
      <span
        className="tropical-flower left-[7%] bottom-[18%] opacity-60"
        aria-hidden="true"
      />
      <span
        className="tropical-flower flower-hibiscus right-[6%] bottom-[30%] opacity-55"
        aria-hidden="true"
      />
      <span
        className="tropical-flower flower-plumeria left-[18%] top-[18%] hidden opacity-60 md:block"
        aria-hidden="true"
      />
      <span
        className="silver-sprinkles right-[25%] top-[28%]"
        aria-hidden="true"
      />
      <span
        className="silver-sprinkles left-[12%] bottom-[34%]"
        aria-hidden="true"
      />
      <span
        className="glitter-burst left-[36%] top-[10%]"
        aria-hidden="true"
      />
      <span
        className="mirror-ball right-[4%] top-[46%] hidden lg:block"
        aria-hidden="true"
      />
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="relative">
            <p className="eyebrow">¿Por qué trabajar conmigo?</p>
            <h2 className="display-title mt-5 text-[clamp(3.1rem,8vw,7rem)] text-ink">
              ¿Por qué trabajar conmigo?
            </h2>
            <div className="silver-edge mt-7 inline-flex items-center gap-3 rounded-full bg-paper/[0.74] px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-berry shadow-[0_18px_44px_rgba(168,72,115,0.08)] backdrop-blur-xl">
              <span className="ap-monogram grid h-9 w-9 place-items-center rounded-full text-xs text-white">
                AP
              </span>
              Estrategia + estética
            </div>
          </div>

          <div className="grid gap-5 text-pretty text-base leading-8 text-ink/[0.72] sm:text-lg">
            <p>
              Mi enfoque está en transmitir mensajes auténticos, cercanos y
              emocionales para que la audiencia no solo vea un producto, sino
              que realmente se identifique con él. Como creadora UGC, entiendo
              la importancia de captar la atención en los primeros segundos y
              generar confianza de manera orgánica.
            </p>
            <div className="silver-edge rounded-[1.8rem] bg-gradient-to-br from-blush/[0.58] via-peach/[0.38] to-aqua/[0.42] p-6 text-center shadow-[0_18px_52px_rgba(168,72,115,0.09)] sm:p-7">
              <p className="mx-auto max-w-2xl text-lg font-black leading-7 text-ink">
                Cada video que realizo está pensado estratégicamente para:
              </p>
              <div className="mx-auto mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
                {strategy.map((item) => (
                  <span key={item} className="flex min-h-14 items-center justify-center rounded-full bg-paper/[0.78] px-5 py-3 text-center text-sm font-black leading-5 text-berry shadow-[0_12px_28px_rgba(168,72,115,0.08)] sm:text-base">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-black text-ink">Lo que aporto a tu marca</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contributions.map((item) => (
              <article key={item} className="soft-border paper-panel pearly-card flex min-h-28 items-center justify-center rounded-[1.4rem] p-6 text-center text-lg font-black leading-7 text-ink">
                {item}
              </article>
            ))}
          </div>
        </div>

      </div>
    </RevealSection>
  );
}
