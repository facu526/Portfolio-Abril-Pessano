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
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <p className="eyebrow">¿Por qué trabajar conmigo?</p>
            <h2 className="display-title mt-5 text-[clamp(3.1rem,8vw,7rem)] text-ink">
              ¿Por qué trabajar conmigo?
            </h2>
            <div className="mt-7 rounded-[2rem] border border-white/[0.7] bg-paper/[0.68] p-6 shadow-[0_22px_65px_rgba(168,72,115,0.10)] backdrop-blur-xl">
              <p className="text-2xl font-black leading-tight text-berry sm:text-3xl">
                No creo contenido que se sienta como una publicidad.
                <br />
                Creo contenido que conecta de forma real con las personas.
              </p>
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
            <p>
              Mi contenido está especialmente orientado a conectar con chicas y
              mujeres, creando una comunicación natural, estética y emocional
              que genera identificación y credibilidad.
            </p>
            <div className="rounded-[1.8rem] bg-gradient-to-br from-blush/[0.58] via-peach/[0.38] to-aqua/[0.42] p-6 text-center shadow-[0_18px_52px_rgba(168,72,115,0.09)] sm:p-7">
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
            <p>
              Además de crear contenido visualmente cuidado, me enfoco en que
              cada pieza tenga personalidad, emoción y un mensaje claro.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-black text-ink">Lo que aporto a tu marca</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contributions.map((item) => (
              <article key={item} className="soft-border paper-panel flex min-h-28 items-center justify-center rounded-[1.4rem] p-6 text-center text-lg font-black leading-7 text-ink">
                {item}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/[0.72] bg-gradient-to-br from-paper/[0.82] via-blush/[0.38] to-aqua/[0.34] p-6 shadow-[0_24px_70px_rgba(168,72,115,0.10)] sm:p-8">
          <h3 className="text-3xl font-black text-berry">Mi estilo de contenido</h3>
          <div className="mt-5 max-w-4xl space-y-5 text-pretty text-base leading-8 text-ink/[0.72] sm:text-lg">
            <p>
              Mi estilo combina autenticidad, estética y emoción.
              Busco que cada video se sienta real, espontáneo y humano,
              logrando que la audiencia conecte genuinamente con la marca y el
              producto.
            </p>
            <p>
              Me adapto a distintos tipos de contenido, pero siempre manteniendo
              una esencia cercana, fresca y moderna.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
