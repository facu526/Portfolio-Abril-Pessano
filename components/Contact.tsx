import Image from "next/image";
import { contactLinks, contactSection, moodFrames } from "@/lib/content";
import { RevealSection } from "./RevealSection";
import { Flower, Sparkle } from "./scrapbook/Decor";
import { Emphasis } from "./scrapbook/Emphasis";
import { PageMark } from "./scrapbook/PageMark";
import { SocialIcon } from "./scrapbook/SocialIcon";
import { Envelope, GlitterStar, HeartSticker, StarSticker } from "./scrapbook/Stickers";
import { TornEdge } from "./scrapbook/TornEdge";

const stripFrames = [
  { src: moodFrames.modaSonrisa, position: "50% 0%", tilt: -4 },
  { src: moodFrames.skincare, position: "50% 26%", tilt: 3 },
  { src: moodFrames.makeup, position: "50% 18%", tilt: -2 },
  { src: moodFrames.experiencias, position: "50% 16%", tilt: 4 },
  { src: moodFrames.modaAzul, position: "50% 12%", tilt: -3 },
  { src: moodFrames.ugc, position: "50% 18%", tilt: 2 },
];

export function Contact() {
  return (
    <RevealSection
      id="contacto"
      className="contact"
      edge={<TornEdge color="#171314" />}
    >
      <div className="shell contact__grid">
        <div>
          <PageMark number="05" label={contactSection.kicker} />
          <h2 className="contact__title">
            <Emphasis text={contactSection.title} em={contactSection.em} />
          </h2>
        </div>

        <ul className="contact__list">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={`${link.label}: ${link.value}`}
              >
                <SocialIcon type={link.icon} />
                <span className="contact__label">{link.label}</span>
                <span className="contact__value">{link.value}</span>
                <span className="contact__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <Sparkle className="contact__spark twinkle" />
        <Flower className="contact__flower" />
        <Envelope className="contact__envelope bob" />
        <HeartSticker className="contact__heart pop" />
      </div>

      <div className="contact__strip" aria-hidden="true">
        {stripFrames.map((frame) => (
          <span
            key={frame.src}
            className="contact__frame"
            style={{ "--r": `${frame.tilt}deg` } as React.CSSProperties}
          >
            <span>
              <Image
                src={frame.src}
                alt=""
                fill
                sizes="(max-width: 767px) 30vw, 15vw"
                style={{ objectFit: "cover", objectPosition: frame.position }}
              />
            </span>
          </span>
        ))}
        <GlitterStar className="contact__glitter twinkle" />
        <StarSticker className="contact__star bob" />
      </div>
    </RevealSection>
  );
}
