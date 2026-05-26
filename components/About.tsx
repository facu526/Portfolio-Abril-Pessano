import { FeatureVideoCard } from "./FeatureVideoCard";
import { RevealSection } from "./RevealSection";

export function About() {
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
      <span
        className="silver-star right-[22%] bottom-[18%] [--size:0.9rem]"
        aria-hidden="true"
      />
      <span
        className="tropical-flower left-[14%] top-[16%] opacity-60"
        aria-hidden="true"
      />
      <span
        className="tropical-flower flower-hibiscus right-[7%] top-[36%] opacity-55"
        aria-hidden="true"
      />
      <span
        className="tropical-flower flower-plumeria left-[4%] bottom-[10%] hidden opacity-65 sm:block"
        aria-hidden="true"
      />
      <span
        className="silver-sprinkles right-[32%] top-[24%]"
        aria-hidden="true"
      />
      <span
        className="silver-sprinkles left-[27%] bottom-[28%]"
        aria-hidden="true"
      />
      <span
        className="glitter-burst right-[18%] top-[12%]"
        aria-hidden="true"
      />
      <span
        className="mirror-ball left-[5%] top-[44%] hidden lg:block"
        aria-hidden="true"
      />

      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-title text-[clamp(3.25rem,12vw,6.6rem)] text-ink">
            UGC
          </h2>
          <FeatureVideoCard
            src="/videos/ugc.mp4"
            poster="/video-posters/ugc.jpg"
            label="Video UGC de Abril Pessano"
            className="mt-8 sm:mt-10"
          />
        </div>
      </div>
    </RevealSection>
  );
}
