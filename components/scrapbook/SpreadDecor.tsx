import { moodFrames, profile, videoCategories } from "@/lib/content";
import { Barcode } from "./Decor";
import { Polaroid } from "./Polaroid";
import {
  Accent,
  Bow,
  Drops,
  Earrings,
  GlitterStar,
  Handbag,
  Hanger,
  HeartSticker,
  Kiss,
  Lipstick,
  MapPin,
  OutlineStar,
  Parcel,
  SerumBottle,
  SpeechBubble,
  StarSticker,
  Swirl,
} from "./Stickers";

type Slug = (typeof videoCategories)[number]["slug"];

const printSizes = "(max-width: 767px) 40vw, 16vw";

/** Recortes que acompañan al título de cada categoría. */
export function SpreadExtras({ slug }: { slug: Slug }) {
  switch (slug) {
    case "moda":
      return (
        <div className="spread__extras spread__extras--moda">
          <span className="scrap scrap--lined spread__scrap" aria-hidden="true" />
          <Polaroid
            src={moodFrames.modaAzul}
            alt="Abril sonriendo en un local de ropa"
            caption="moda"
            tilt={-5}
            fastener="tape"
            sizes={printSizes}
            objectPosition="50% 14%"
          />
          <Hanger className="spread__hanger bob" />
          <span className="tape-measure" aria-hidden="true" />
          <HeartSticker className="spread__mini pop" />
        </div>
      );
    case "accesorios":
      return (
        <div className="spread__extras spread__extras--accesorios" aria-hidden="true">
          <Handbag className="spread__bag bob" />
          <Earrings className="spread__earrings" />
          <span className="spread__chain" />
          <GlitterStar className="spread__mini twinkle" />
        </div>
      );
    case "experiencias":
      return (
        <div className="spread__extras spread__extras--experiencias">
          <MapPin className="spread__pin bob" />
          <span className="postmark" aria-hidden="true">
            <span>{profile.fullName}</span>
            <strong>experiencias</strong>
          </span>
          <GlitterStar className="spread__mini twinkle" />
        </div>
      );
    case "recomendacion":
      return (
        <div className="spread__extras spread__extras--recomendacion">
          <span className="scrap scrap--pink spread__scrap" aria-hidden="true" />
          <Polaroid
            src={moodFrames.ugc}
            alt="Abril hablando a cámara y sonriendo"
            caption="recomendación"
            tilt={-4}
            fastener="binder"
            sizes={printSizes}
            objectPosition="50% 22%"
          />
          <Polaroid
            src={moodFrames.makeupPaleta}
            alt="Abril recomendando una paleta de maquillaje"
            tilt={5}
            fastener="tape"
            sizes={printSizes}
            objectPosition="50% 24%"
            className="spread__second"
          />
          <SpeechBubble className="spread__bubble bob" />
          <StarSticker className="spread__mini pop" />
          <Swirl className="spread__swirl" />
        </div>
      );
    case "unboxing":
      return (
        <div className="spread__extras spread__extras--unboxing">
          <div className="ship-label" aria-hidden="true">
            <p>
              <span>de</span> {profile.fullName}
            </p>
            <p>
              <span>para</span> tu marca
            </p>
            <Barcode className="ship-label__code" />
          </div>
          <Parcel className="spread__parcel bob" />
          <span className="packing-tape" aria-hidden="true" />
        </div>
      );
    case "make-up":
      return (
        <div className="spread__extras spread__extras--make-up">
          <span className="scrap scrap--grid spread__scrap" aria-hidden="true" />
          <Polaroid
            src={moodFrames.makeup}
            alt="Abril con lentes, riéndose"
            caption="make up"
            tilt={4}
            fastener="tape"
            sizes={printSizes}
            objectPosition="50% 16%"
          />
          <Lipstick className="spread__lipstick bob" />
          <Kiss className="spread__kiss" />
          <Bow className="spread__mini pop" />
        </div>
      );
    case "skincare":
      return (
        <div className="spread__extras spread__extras--skincare">
          <span className="scrap scrap--lined spread__scrap" aria-hidden="true" />
          <Polaroid
            src={moodFrames.skincareSoft}
            alt="Abril sonriendo suavemente frente a una cortina"
            caption="skincare"
            tilt={-4}
            fastener="clip"
            sizes={printSizes}
            objectPosition="50% 20%"
          />
          <SerumBottle className="spread__serum bob" />
          <Drops className="spread__drops" />
          <GlitterStar className="spread__mini twinkle" />
        </div>
      );
    default:
      return null;
  }
}

/** Stickers sueltos sobre el fondo de cada página. */
export function SpreadStickers({ slug }: { slug: Slug }) {
  return (
    <div className="spread__stickers" aria-hidden="true">
      <OutlineStar className="spread__float spread__float--a twinkle" />
      <GlitterStar className="spread__float spread__float--b twinkle" />
      <Accent className="spread__float spread__float--c" />
      {slug === "skincare" || slug === "make-up" ? (
        <HeartSticker className="spread__float spread__float--d bob" />
      ) : (
        <StarSticker className="spread__float spread__float--d bob" />
      )}
    </div>
  );
}
