import Image from "next/image";
import { BinderClip, PaperClip } from "./Decor";
import { Bow } from "./Stickers";

type PolaroidProps = {
  src: string;
  alt: string;
  caption?: string;
  /** Inclinación en grados. */
  tilt?: number;
  fastener?: "tape" | "clip" | "binder" | "bow" | "none";
  /** Ancho que ocupa, para `next/image`. */
  sizes: string;
  ratio?: string;
  objectPosition?: string;
  priority?: boolean;
  className?: string;
};

export function Polaroid({
  src,
  alt,
  caption,
  tilt = 0,
  fastener = "none",
  sizes,
  ratio = "4 / 5",
  objectPosition = "center",
  priority = false,
  className = "",
}: PolaroidProps) {
  return (
    <figure
      className={`polaroid lift ${className}`}
      style={{ "--r": `${tilt}deg` } as React.CSSProperties}
    >
      {fastener === "tape" ? (
        <span className="tape polaroid__tape" aria-hidden="true" />
      ) : null}
      {fastener === "clip" ? <PaperClip className="polaroid__clip" /> : null}
      {fastener === "binder" ? <BinderClip className="polaroid__binder" /> : null}
      {fastener === "bow" ? <Bow className="polaroid__bow" /> : null}
      <span className="polaroid__photo" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover", objectPosition }}
        />
      </span>
      {caption ? (
        <figcaption className="polaroid__caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
