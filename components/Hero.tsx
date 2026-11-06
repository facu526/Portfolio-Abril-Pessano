import Image from "next/image";
import { contactLinks, moodFrames, profile } from "@/lib/content";
import {
  Barcode,
  Cursor,
  Flower,
  HandArrow,
  PaperClip,
  Ribbons,
  Sparkle,
  WaxSeal,
} from "./scrapbook/Decor";
import { HeroParallax } from "./scrapbook/HeroParallax";
import { Polaroid } from "./scrapbook/Polaroid";
import { SocialIcon } from "./scrapbook/SocialIcon";
import {
  Accent,
  Bow,
  Clasp,
  GlitterStar,
  HeartSticker,
  OutlineStar,
  StarSticker,
  Swirl,
} from "./scrapbook/Stickers";
import { TornEdge } from "./scrapbook/TornEdge";

function CreatorCard() {
  return (
    <aside className="hero__card lift" aria-label="Credencial de Abril Pessano">
      <span className="hero__lanyard" aria-hidden="true" />
      <Clasp className="hero__clasp" />
      <span className="hero__card-slot" aria-hidden="true" />
      <p className="hero__card-title">
        <span>UGC</span> <em className="t-serif">creator</em>
      </p>
      <div className="hero__card-photo">
        <Image
          src={moodFrames.ugc}
          alt="Retrato de Abril Pessano"
          fill
          sizes="(max-width: 1023px) 240px, 16vw"
          style={{ objectFit: "cover", objectPosition: "50% 19%" }}
        />
      </div>
      <p className="hero__card-name">{profile.fullName}</p>
      <p className="hero__card-role">{profile.role}</p>
      <Barcode className="hero__card-barcode" />
    </aside>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <Ribbons className="hero__ribbons" />

      <div className="hero__inner">
        <HeroParallax className="hero__art">
          <span className="hero__sheet" aria-hidden="true" />
          <span className="scrap scrap--lined hero__scrap hero__scrap--a" aria-hidden="true" />
          <span className="hero__folder" aria-hidden="true" />
          <span className="scrap scrap--grid hero__scrap hero__scrap--b" aria-hidden="true" />
          <span className="scrap scrap--pink hero__scrap hero__scrap--c" aria-hidden="true" />

          <div className="hero__prints hero-parallax depth" style={{ "--d": 10 } as React.CSSProperties}>
            <Polaroid
              src={moodFrames.modaSonrisa}
              alt="Abril sonriendo con un conjunto de lino"
              caption="moda"
              tilt={-7}
              fastener="tape"
              sizes="(max-width: 1023px) 34vw, 14vw"
              objectPosition="50% 0%"
              className="hero__print hero__print--a"
              priority
            />
            <Polaroid
              src={moodFrames.skincare}
              alt="Abril sonriendo con un serum en un video de skincare"
              caption="skincare"
              tilt={4}
              fastener="binder"
              sizes="(max-width: 1023px) 30vw, 13vw"
              objectPosition="50% 42%"
              className="hero__print hero__print--b"
            />
            <Polaroid
              src={moodFrames.experiencias}
              alt="Abril sonriendo en una escapada"
              caption="experiencias"
              tilt={-3}
              fastener="clip"
              sizes="(max-width: 1023px) 30vw, 13vw"
              objectPosition="50% 16%"
              className="hero__print hero__print--c"
            />
          </div>

          <h1 className="hero__name" aria-label={profile.fullName}>
            <span className="hero__abril" aria-hidden="true">
              {profile.firstName.split("").map((letter, index) => (
                <span key={index} style={{ "--i": index } as React.CSSProperties}>
                  {letter}
                </span>
              ))}
            </span>{" "}
            <span className="hero__pessano" aria-hidden="true">
              {profile.lastName}
            </span>
          </h1>

          <div className="hero__figure depth" style={{ "--d": 4 } as React.CSSProperties}>
            <Image
              src="/abril-cutout.webp"
              alt="Abril Pessano sonriendo, recortada como sticker"
              width={467}
              height={858}
              priority
              sizes="(max-width: 1023px) 66vw, 34vw"
            />
          </div>

          <div className="hero__phone depth" style={{ "--d": 14 } as React.CSSProperties} aria-hidden="true">
            <span className="hero__phone-screen">
              <Image
                src="/video-posters/ugc.jpg"
                alt=""
                fill
                sizes="(max-width: 1023px) 30vw, 14vw"
                style={{ objectFit: "cover" }}
              />
            </span>
          </div>

          <p className="hero__note hero__note--real" aria-hidden="true">
            contenido real
            <HandArrow className="hero__note-arrow" />
          </p>
          <p className="hero__note hero__note--reels" aria-hidden="true">
            reels + tiktok
          </p>

          <span className="hero__apps depth" style={{ "--d": 18 } as React.CSSProperties} aria-hidden="true">
            <span>
              <SocialIcon type="instagram" />
            </span>
            <span>
              <SocialIcon type="tiktok" />
            </span>
          </span>

          <Sparkle className="hero__deco hero__deco--a twinkle" />
          <GlitterStar className="hero__deco hero__deco--b twinkle" />
          <HeartSticker className="hero__deco hero__deco--c bob" color="#e88fae" />
          <Flower className="hero__deco hero__deco--d" />
          <Cursor className="hero__deco hero__deco--e" />
          <PaperClip className="hero__deco hero__deco--f" />
          <GlitterStar className="hero__deco hero__deco--g twinkle" />
          <StarSticker className="hero__deco hero__deco--h bob" />
          <OutlineStar className="hero__deco hero__deco--i" />
          <Bow className="hero__deco hero__deco--j bob" />
          <Swirl className="hero__deco hero__deco--k" />
          <Accent className="hero__deco hero__deco--l" />
          <HeartSticker className="hero__deco hero__deco--m" />
          <WaxSeal className="hero__seal" />
        </HeroParallax>

        <div className="hero__copy">
          <span className="hero__tear" aria-hidden="true">
            <TornEdge color="#fffcf7" />
          </span>
          <p className="hero__kicker">{profile.kicker}</p>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__actions">
            <a href="#ejemplos" className="btn btn--ink">
              Ver ejemplos
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contacto" className="btn btn--paper">
              Contactar
            </a>
          </div>
        </div>

        <CreatorCard />

        <ul className="hero__social">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={`${link.label}: ${link.value}`}
              >
                <SocialIcon type={link.icon} />
                <span>{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
