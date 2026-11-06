import { moodFrames, profile, ugcSection } from "@/lib/content";
import { FeatureVideoCard } from "./FeatureVideoCard";
import { RevealSection } from "./RevealSection";
import { Flower, HandArrow, Sparkle } from "./scrapbook/Decor";
import { GlitterStar, HeartSticker, PhoneDoodle, SpeechBubble } from "./scrapbook/Stickers";
import { PageMark } from "./scrapbook/PageMark";
import { Polaroid } from "./scrapbook/Polaroid";
import { TornEdge } from "./scrapbook/TornEdge";

export function About() {
  return (
    <RevealSection
      id="que-es-ugc"
      className="ugc"
      edge={<TornEdge color="#fbf3e4" />}
    >
      <div className="shell ugc__grid">
        <div className="ugc__lead">
          <PageMark number="01" label={profile.kicker} />
          <span className="scrap scrap--grid ugc__scrap" aria-hidden="true" />
          <h2 className="ugc__title">{ugcSection.title}</h2>
          <p className="ugc__meaning">
            <em className="t-serif strip">{ugcSection.meaning}</em>
          </p>
          <SpeechBubble className="ugc__bubble bob" />
          <GlitterStar className="ugc__star twinkle" />
        </div>

        <FeatureVideoCard
          src={ugcSection.video.src}
          poster={ugcSection.video.poster}
          label={ugcSection.video.label}
          tilt={1.6}
          className="ugc__video"
        />

        <div className="ugc__aside">
          <span className="scrap scrap--pink ugc__aside-scrap" aria-hidden="true" />
          <Polaroid
            src={moodFrames.ugc}
            alt="Abril sonriendo mientras habla a cámara"
            caption="reels + tiktok"
            tilt={-4}
            fastener="tape"
            sizes="(max-width: 767px) 60vw, 22vw"
            ratio="4 / 5"
            objectPosition="50% 16%"
          />
          <Polaroid
            src={moodFrames.makeupPaleta}
            alt="Abril mostrando una paleta de maquillaje"
            tilt={7}
            fastener="clip"
            sizes="(max-width: 767px) 34vw, 12vw"
            ratio="1 / 1"
            objectPosition="50% 26%"
            className="ugc__mini"
          />
          <HeartSticker className="ugc__heart pop" />
          <PhoneDoodle className="ugc__phone bob" />
          <p className="ugc__sticky lift" style={{ "--r": "3deg" } as React.CSSProperties}>
            {profile.role}
          </p>
          <HandArrow className="ugc__arrow" />
          <Flower className="ugc__flower" />
          <Sparkle className="ugc__spark" />
        </div>
      </div>
      <p className="side-label ugc__side" aria-hidden="true">
        {profile.fullName} — {profile.kicker}
      </p>
    </RevealSection>
  );
}
