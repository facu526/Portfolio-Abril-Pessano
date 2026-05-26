import { FeatureVideoCard } from "./FeatureVideoCard";
import { RevealSection } from "./RevealSection";

export function Essence() {
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
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative">
            <p className="eyebrow">¿Por qué trabajar conmigo?</p>
            <h2 className="display-title mt-5 text-[clamp(3.1rem,8vw,7rem)] text-ink">
              ¿Por qué trabajar conmigo?
            </h2>
            <div className="silver-edge mt-7 inline-flex items-center gap-3 rounded-full bg-paper/[0.74] px-4 py-3 text-left text-sm font-black uppercase tracking-[0.08em] text-berry shadow-[0_18px_44px_rgba(168,72,115,0.08)] backdrop-blur-xl">
              <span className="ap-monogram grid h-9 w-9 place-items-center rounded-full text-xs text-white">
                AP
              </span>
              Estrategia + estética
            </div>
          </div>
          <FeatureVideoCard
            src="/videos/trabajar-conmigo.mp4"
            poster="/video-posters/trabajar-conmigo.jpg"
            label="Video sobre por qué trabajar con Abril Pessano"
            className="mt-8 sm:mt-10"
          />
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
