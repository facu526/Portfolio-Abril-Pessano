import { moodFrames, profile, workTogether } from "@/lib/content";
import { RevealSection } from "./RevealSection";
import { Barcode, Heart, Sparkle, WaxSeal } from "./scrapbook/Decor";
import { InfoCard } from "./scrapbook/InfoCard";
import { Bow, GlitterStar, HeartSticker, Swirl } from "./scrapbook/Stickers";
import { Emphasis } from "./scrapbook/Emphasis";
import { PageMark } from "./scrapbook/PageMark";
import { Polaroid } from "./scrapbook/Polaroid";
import { TornEdge } from "./scrapbook/TornEdge";

export function PortfolioHighlights() {
  return (
    <RevealSection
      id="trabajemos-juntos"
      className="together"
      edge={<TornEdge color="#f4bfd0" />}
    >
      <div className="shell together__stack">
        <span className="together__under" aria-hidden="true" />
        <div className="together__sheet">
          <PageMark number="04" label={workTogether.kicker} />
          <h2 className="together__title">
            {workTogether.title.replace(workTogether.em, "")}
            <em className="t-serif strip strip--pink">{workTogether.em}</em>
          </h2>

          <p className="together__lead">
            {workTogether.lead}{" "}
            <em className="t-serif">{workTogether.leadHighlight}</em>
          </p>

          <div className="together__columns">
            <article>
              <h3>{workTogether.featureTitle}</h3>
              <p>{workTogether.featureText}</p>
            </article>
            <article>
              <p>
                {workTogether.closingBefore}{" "}
                <strong>{workTogether.closingHighlight}</strong>
                {workTogether.closingAfter}
              </p>
            </article>
          </div>

          <p className="together__sign" aria-hidden="true">
            {profile.fullName}
            <Heart className="together__heart" />
          </p>
          <Barcode className="together__barcode" />
        </div>

        <div className="together__side">
          <span className="together__folder" aria-hidden="true" />
          <span className="scrap scrap--grid together__scrap" aria-hidden="true" />
          <Polaroid
            src={moodFrames.makeup}
            alt="Abril con lentes, riéndose"
            tilt={-6}
            fastener="tape"
            sizes="(max-width: 1099px) 34vw, 11vw"
            ratio="1 / 1"
            objectPosition="50% 20%"
            className="together__print together__print--a"
          />
          <Polaroid
            src={moodFrames.modaAzul}
            alt="Abril sonriendo con un conjunto azul"
            tilt={7}
            sizes="(max-width: 1099px) 34vw, 11vw"
            ratio="1 / 1"
            objectPosition="50% 12%"
            className="together__print together__print--b"
          />
          <InfoCard className="together__info" />
          <HeartSticker className="together__sticker bob" />
          <GlitterStar className="together__glitter twinkle" />
          <Swirl className="together__swirl" />
        </div>
        <WaxSeal className="together__seal" />
        <Sparkle className="together__spark twinkle" />
        <Bow className="together__bow bob" />
      </div>
    </RevealSection>
  );
}
