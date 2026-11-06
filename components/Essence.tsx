import { brandContributions, moodFrames, whySection } from "@/lib/content";
import { FeatureVideoCard } from "./FeatureVideoCard";
import { RevealSection } from "./RevealSection";
import { Heart, Scribble, Sparkle } from "./scrapbook/Decor";
import { Polaroid } from "./scrapbook/Polaroid";
import {
  Accent,
  Bow,
  Camera,
  GlitterStar,
  HeartSticker,
  StarSticker,
} from "./scrapbook/Stickers";
import { Emphasis } from "./scrapbook/Emphasis";
import { PageMark } from "./scrapbook/PageMark";
import { TornEdge } from "./scrapbook/TornEdge";

export function Essence() {
  return (
    <RevealSection
      id="por-que-trabajar-conmigo"
      className="why"
      edge={<TornEdge color="#f4bfd0" />}
    >
      <div className="shell why__feature">
        <div className="why__head">
          <PageMark number="02" label={whySection.title} />
          <h2 className="why__title" aria-label={whySection.title}>
            <span aria-hidden="true">¿Por qué</span>
            <em aria-hidden="true" className="t-serif strip strip--pink">
              trabajar
            </em>
            <span aria-hidden="true">conmigo?</span>
          </h2>
          <Scribble className="why__scribble" />
          <p className="why__badge">{whySection.badge}</p>
          <Accent className="why__accent" />
          <Camera className="why__camera bob" />
        </div>

        <span className="scrap scrap--grid why__scrap" aria-hidden="true" />
        <Polaroid
          src={moodFrames.modaSaco}
          alt="Abril mostrando un conjunto claro en un local"
          caption="estética"
          tilt={-8}
          fastener="clip"
          sizes="(max-width: 1099px) 30vw, 13vw"
          ratio="4 / 5"
          objectPosition="50% 12%"
          className="why__print"
        />
        <FeatureVideoCard
          src={whySection.video.src}
          poster={whySection.video.poster}
          label={whySection.video.label}
          tilt={-1.8}
          className="why__video"
        />
        <Heart className="why__heart" />
        <Sparkle className="why__spark twinkle" />
        <Bow className="why__bow bob" />
        <GlitterStar className="why__glitter twinkle" />
      </div>

      <div className="shell why__brand">
        <h3 className="why__brand-title">
          <Emphasis
            text={whySection.contributionsTitle}
            em={whySection.contributionsEm}
          />
        </h3>
        <StarSticker className="why__brand-star pop" />
        <ol className="notes">
          {brandContributions.map((item, index) => (
            <li key={item.text} className="note">
              <span className="note__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="note__text">
                <Emphasis text={item.text} em={item.em} />
              </p>
              {index === 0 ? <span className="tape note__tape" aria-hidden="true" /> : null}
              {index === 1 ? <HeartSticker className="note__sticker" /> : null}
              {index === 3 ? <GlitterStar className="note__sticker twinkle" /> : null}
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
