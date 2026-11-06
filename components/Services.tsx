"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  examplesSection,
  moodFrames,
  videoCategories,
  type VideoCategory,
} from "@/lib/content";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { Reveal } from "./RevealSection";
import { Cursor, Sparkle } from "./scrapbook/Decor";
import { Emphasis } from "./scrapbook/Emphasis";
import { PageMark } from "./scrapbook/PageMark";
import { Polaroid } from "./scrapbook/Polaroid";
import { SpreadExtras, SpreadStickers } from "./scrapbook/SpreadDecor";
import { Bow, GlitterStar, HeartSticker } from "./scrapbook/Stickers";
import { TornEdge } from "./scrapbook/TornEdge";
import { VideoModal, type SelectedVideo } from "./video/VideoModal";
import { VideoTile } from "./video/VideoTile";

const tilts = [-1.4, 1, -0.7, 1.3, -1.1, 0.8];

const windowFrames = [
  moodFrames.modaSonrisa,
  moodFrames.makeup,
  moodFrames.experiencias,
  moodFrames.skincare,
  moodFrames.modaAzul,
  moodFrames.unboxing,
];

function FeedWindow() {
  return (
    <div className="feed-window" aria-hidden="true">
      <div className="feed-window__bar">
        <span />
        <span />
        <span />
        <p>abrupessano</p>
      </div>
      <div className="feed-window__grid">
        {windowFrames.map((src) => (
          <span key={src}>
            <Image src={src} alt="" fill sizes="(max-width: 1099px) 1px, 9vw" style={{ objectFit: "cover", objectPosition: "50% 18%" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function ExamplesHeader() {
  return (
    <Reveal className="shell examples__head">
      <PageMark number="03" label={examplesSection.kicker} />
      <h2 className="examples__title">
        <Emphasis text={examplesSection.title} em={examplesSection.em} />
      </h2>
      <p className="examples__intro">{examplesSection.intro}</p>

      <div className="examples__collage">
        <FeedWindow />
        <Polaroid
          src={moodFrames.makeupPaleta}
          alt="Abril mostrando una paleta de maquillaje"
          caption="make up"
          tilt={6}
          fastener="tape"
          sizes="(max-width: 1099px) 1px, 11vw"
          objectPosition="50% 22%"
          className="examples__print"
        />
        <Bow className="examples__bow bob" />
        <Cursor className="examples__cursor" />
      </div>

      <nav className="examples__index" aria-label="Categorías de ejemplos">
        <ol>
          {videoCategories.map((category) => (
            <li key={category.slug}>
              <a href={`#categoria-${category.slug}`} className="folder-link">
                <span className="folder-link__icon" aria-hidden="true" />
                <span className="folder-link__name">{category.headline}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <Sparkle className="examples__spark twinkle" />
      <GlitterStar className="examples__glitter twinkle" />
      <HeartSticker className="examples__heart bob" />
    </Reveal>
  );
}

type CategorySpreadProps = {
  category: VideoCategory;
  isDesktop: boolean;
  onOpen: (video: SelectedVideo) => void;
};

function CategorySpread({ category, isDesktop, onOpen }: CategorySpreadProps) {
  const titleId = `titulo-${category.slug}`;

  return (
    <article
      id={`categoria-${category.slug}`}
      className={`spread spread--${category.slug}`}
      aria-labelledby={titleId}
    >
      <Reveal className="shell spread__grid">
        <header className="spread__head">
          <h3 id={titleId} className="spread__title" aria-label={category.title}>
            <span aria-hidden="true">
              <Emphasis text={category.headline} em={category.em} />
            </span>
          </h3>
          <SpreadExtras slug={category.slug} />
        </header>

        {category.videos.map((video, videoIndex) => (
          <VideoTile
            key={video.href}
            video={video}
            category={category.title}
            frame={category.frame}
            tilt={tilts[videoIndex % tilts.length]}
            isDesktop={isDesktop}
            onOpen={() =>
              onOpen({
                src: video.href,
                title: video.label,
                category: category.title,
                poster: video.poster,
              })
            }
          />
        ))}

      </Reveal>
      <SpreadStickers slug={category.slug} />
    </article>
  );
}

export function Services() {
  const isDesktop = useIsDesktop();
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null);

  const closeModal = useCallback(() => setSelectedVideo(null), []);

  useEffect(() => {
    if (isDesktop) {
      setSelectedVideo(null);
    }
  }, [isDesktop]);

  return (
    <section id="ejemplos" className="examples">
      <TornEdge color="#fffcf7" />
      <ExamplesHeader />

      {videoCategories.map((category) => (
        <CategorySpread
          key={category.slug}
          category={category}
          isDesktop={isDesktop}
          onOpen={setSelectedVideo}
        />
      ))}

      {selectedVideo ? (
        <VideoModal
          src={selectedVideo.src}
          title={selectedVideo.title}
          category={selectedVideo.category}
          poster={selectedVideo.poster}
          onClose={closeModal}
        />
      ) : null}
    </section>
  );
}
