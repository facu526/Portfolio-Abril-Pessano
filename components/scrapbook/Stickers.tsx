/**
 * Stickers troquelados: cada uno tiene un borde blanco de papel y detalles en
 * tinta. Son solo decoración, por eso van siempre `aria-hidden`.
 */

type StickerProps = {
  className?: string;
  style?: React.CSSProperties;
};

const PAPER = "#fffcf7";
const INK = "#171314";
const ROSE = "#e88fae";
const DEEP = "#c4466f";
const BLUSH = "#fbdfe8";
const BUTTER = "#f8e3a6";

function Svg({
  viewBox = "0 0 64 64",
  className = "",
  style,
  children,
}: StickerProps & { viewBox?: string; children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={viewBox}
      className={`sticker ${className}`}
      style={style}
    >
      {children}
    </svg>
  );
}

/** Dibuja `d` dos veces: primero el borde de papel y encima el color. */
function Die({ d, fill }: { d: string; fill: string }) {
  return (
    <>
      <path d={d} fill={PAPER} stroke={PAPER} strokeWidth="8" strokeLinejoin="round" />
      <path d={d} fill={fill} />
    </>
  );
}

const HEART =
  "M32 56S7 41 5 23C4 13 11 7 18.5 7c5.8 0 10.5 3.3 13.5 8.200C35 10.3 39.7 7 45.5 7 53 7 60 13 59 23 57 41 32 56 32 56Z";

export function HeartSticker({ className, style, color = DEEP }: StickerProps & { color?: string }) {
  return (
    <Svg className={className} style={style}>
      <Die d={HEART} fill={color} />
      <path d="M15 16c-3 2-4 6-3 10" fill="none" stroke={PAPER} strokeWidth="3" strokeLinecap="round" opacity=".7" />
    </Svg>
  );
}

export function StarSticker({ className, style, color = ROSE }: StickerProps & { color?: string }) {
  return (
    <Svg className={className} style={style}>
      <path
        d="M32 7l7.5 16 17.5 2.2-12.9 12 3.4 17.300L32 46l-15.5 8.5 3.4-17.300L7 25.200l17.5-2.200Z"
        fill={color}
        stroke={PAPER}
        strokeWidth="5"
        strokeLinejoin="round"
        paintOrder="stroke"
      />
    </Svg>
  );
}

export function OutlineStar({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style}>
      <path
        d="M32 7l7.5 16 17.5 2.2-12.9 12 3.4 17.300L32 46l-15.5 8.5 3.4-17.300L7 25.200l17.5-2.200Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Estrella beige con brillitos, como las de metal de la referencia. */
export function GlitterStar({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style}>
      <path
        d="M32 4c1.7 15 7.7 24 26 28-18.3 4-24.3 13-26 28-1.7-15-7.7-24-26-28 18.3-4 24.3-13 26-28Z"
        fill="#d9bd8b"
      />
      <path d="M32 14c1 9 4.5 14.5 15 18-10.5 3.5-14 9-15 18Z" fill="#f6ead2" />
      <path d="M52 8c.5 4 2 6 6 7-4 1-5.5 3-6 7-.5-4-2-6-6-7 4-1 5.5-3 6-7Z" fill="#d9bd8b" />
      <circle cx="10" cy="52" r="1.8" fill="#d9bd8b" />
      <circle cx="54" cy="50" r="1.3" fill="#d9bd8b" />
    </Svg>
  );
}

export function Bow({ className, style, color = "#e78bab" }: StickerProps & { color?: string }) {
  const loops =
    "M32 28C24 15 9 11 5 15c-3 5-3 22 2 26 5 3 19-2 25-13Zm0 0c8-13 23-17 27-13 3 5 3 22-2 26-5 3-19-2-25-13Z";
  const tails = "M28 31 17 57l9-4 5 7 3-27Zm8 0 11 26-9-4-5 7-3-27Z";

  return (
    <Svg className={className} style={style}>
      <path d={`${loops}${tails}`} fill={PAPER} stroke={PAPER} strokeWidth="6" strokeLinejoin="round" />
      <path d={tails} fill={DEEP} />
      <path d={loops} fill={color} />
      <path d="M13 21c6 1 10 3 14 7M51 21c-6 1-10 3-14 7" fill="none" stroke={DEEP} strokeWidth="1.6" strokeLinecap="round" opacity=".6" />
      <rect x="27" y="22" width="10" height="13" rx="4" fill={DEEP} />
    </Svg>
  );
}

export function Lipstick({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style}>
      <path d="M24 25V11l15-8v22ZM20 26h24v10H20ZM18 37h28v24H18Z" fill={PAPER} stroke={PAPER} strokeWidth="7" strokeLinejoin="round" />
      <path d="M25 26V12l13-7v21Z" fill={DEEP} />
      <path d="M25 12l13-7v5L25 17Z" fill="#fff" opacity=".28" />
      <rect x="21" y="26" width="22" height="11" fill="#d8bd86" />
      <rect x="18" y="37" width="28" height="24" rx="2" fill={INK} />
      <rect x="22" y="40" width="3" height="18" fill="#fff" opacity=".18" />
    </Svg>
  );
}

export function SerumBottle({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 48 72">
      <path d="M19 3h10v13h-10ZM15 16h18v8H15ZM9 26h30v43H9Z" fill={PAPER} stroke={PAPER} strokeWidth="6" strokeLinejoin="round" />
      <rect x="19" y="3" width="10" height="13" rx="4" fill={INK} />
      <rect x="15" y="15" width="18" height="9" fill="#d8bd86" />
      <path d="M12 24h24c2 0 3 2 3 4v37c0 2-1 4-4 4H13c-3 0-4-2-4-4V28c0-2 1-4 3-4Z" fill={ROSE} />
      <rect x="9" y="36" width="30" height="20" fill={PAPER} />
      <path d="M15 42h18M15 47h12" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function Drops({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style}>
      <path d="M22 8c9 13 14 20 14 27a14 14 0 0 1-28 0c0-7 5-14 14-27Z" fill={ROSE} stroke={PAPER} strokeWidth="4" paintOrder="stroke" />
      <path d="M46 34c5 7 8 11 8 15a8 8 0 0 1-16 0c0-4 3-8 8-15Z" fill={BLUSH} stroke={PAPER} strokeWidth="4" paintOrder="stroke" />
      <path d="M14 36c0 4 2 7 5 8" fill="none" stroke={PAPER} strokeWidth="2.4" strokeLinecap="round" />
    </Svg>
  );
}

export function Handbag({ className, style }: StickerProps) {
  const body = "M9 26h46l4 31a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z";

  return (
    <Svg className={className} style={style}>
      <path d="M21 26v-8a11 11 0 0 1 22 0v8" fill="none" stroke={PAPER} strokeWidth="9" strokeLinecap="round" />
      <path d="M21 26v-8a11 11 0 0 1 22 0v8" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <Die d={body} fill={DEEP} />
      <path d="M5 38h54" stroke={INK} strokeWidth="1.5" opacity=".4" />
      <rect x="27" y="33" width="10" height="10" rx="2" fill="#d8bd86" />
    </Svg>
  );
}

export function Earrings({ className, style }: StickerProps) {
  const drop = "M0 22c6 7 9 12 9 17a9 9 0 0 1-18 0c0-5 3-10 9-17Z";

  return (
    <Svg className={className} style={style} viewBox="0 0 72 64">
      {[20, 52].map((x) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <path d="M0 22V10a5 5 0 1 0-5-5" fill="none" stroke={PAPER} strokeWidth="6" strokeLinecap="round" />
          <path d="M0 22V10a5 5 0 1 0-5-5" fill="none" stroke="#b8975c" strokeWidth="2.2" strokeLinecap="round" />
          <Die d={drop} fill={ROSE} />
          <circle cx="-3" cy="38" r="2" fill={PAPER} opacity=".8" />
        </g>
      ))}
    </Svg>
  );
}

export function Hanger({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 80 56">
      <path
        d="M34 15a6 6 0 1 1 8 5.700c-1.8.6-2 1.8-2 4.300M40 25 5 46c-3 2-2 6 2 6h66c4 0 5-4 2-6Z"
        fill="none"
        stroke={PAPER}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 15a6 6 0 1 1 8 5.700c-1.8.6-2 1.8-2 4.300M40 25 5 46c-3 2-2 6 2 6h66c4 0 5-4 2-6Z"
        fill="none"
        stroke={INK}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MapPin({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style}>
      <Die d="M32 60S11 39 11 25a21 21 0 0 1 42 0c0 14-21 35-21 35Z" fill={DEEP} />
      <circle cx="32" cy="25" r="8" fill={PAPER} />
    </Svg>
  );
}

export function Parcel({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style}>
      <path d="M6 20 32 7l26 13v30L32 60 6 50Z" fill={PAPER} stroke={PAPER} strokeWidth="7" strokeLinejoin="round" />
      <path d="M6 20 32 30v30L6 50Z" fill="#dcb98a" />
      <path d="M58 20 32 30v30l26-10Z" fill="#c9a06e" />
      <path d="M6 20 32 7l26 13-26 10Z" fill="#ecd0a5" />
      <path d="m18 15 26 11v9l-5 2v-9L13 17Z" fill={ROSE} />
    </Svg>
  );
}

export function SpeechBubble({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 72 64">
      <Die d="M12 6h48a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H30L16 60l2-12h-6a8 8 0 0 1-8-8V14a8 8 0 0 1 8-8Z" fill={BLUSH} />
      <path d="M30 15l1 15M42 15l-1 15" stroke={DEEP} strokeWidth="6" strokeLinecap="round" />
      <circle cx="31.5" cy="38" r="3.2" fill={DEEP} />
      <circle cx="40.5" cy="38" r="3.2" fill={DEEP} />
    </Svg>
  );
}

export function Camera({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 72 56">
      <Die d="M8 14h13l5-8h20l5 8h13a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V20a6 6 0 0 1 6-6Z" fill={INK} />
      <circle cx="36" cy="32" r="14" fill="#3b3235" />
      <circle cx="36" cy="32" r="9" fill={ROSE} />
      <circle cx="32" cy="28" r="3" fill={PAPER} opacity=".85" />
      <rect x="55" y="19" width="8" height="5" rx="1.5" fill={BUTTER} />
    </Svg>
  );
}

export function Envelope({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 80 58">
      <rect x="4" y="5" width="72" height="48" rx="3" fill={PAPER} stroke={PAPER} strokeWidth="6" />
      <rect x="4" y="5" width="72" height="48" rx="3" fill={BLUSH} />
      <path d="M4 7 40 34 76 7" fill="none" stroke={DEEP} strokeWidth="2" strokeLinejoin="round" />
      <path d={HEART} transform="translate(30.5 24) scale(.3)" fill={DEEP} />
    </Svg>
  );
}

export function Kiss({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 72 48">
      <path
        d="M36 12c-5-8-12-8-16-4C13 15 8 20 3 22c5 11 18 22 33 22s28-11 33-22c-5-2-10-7-17-14-4-4-11-4-16 4Z"
        fill={DEEP}
        opacity=".92"
      />
      <path d="M3 22c11 3 22 3 33 1 11 2 22 2 33-1-12 4-22 7-33 7S15 26 3 22Z" fill="#8e2a4e" />
    </Svg>
  );
}

export function PhoneDoodle({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 44 72">
      <rect x="4" y="3" width="36" height="66" rx="8" fill={PAPER} stroke={PAPER} strokeWidth="6" />
      <rect x="4" y="3" width="36" height="66" rx="8" fill={INK} />
      <rect x="8" y="8" width="28" height="56" rx="4" fill={ROSE} />
      <path d="M19 28v16l13-8Z" fill={PAPER} />
    </Svg>
  );
}

export function Swirl({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 120 60">
      <path
        className="draw"
        pathLength={1}
        d="M4 44c18 8 34-8 26-20-6-9-20-3-16 8 5 13 34 15 54 1 11-8 17-21 8-25-9-3-13 12-3 21 12 10 28 8 43-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/** Tres rayitas de énfasis, como las que rodean a un título. */
export function Accent({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 48 40">
      <path
        d="M8 36 4 20M24 30V6M40 36l6-15"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

/** Mosquetón metálico de la credencial. */
export function Clasp({ className, style }: StickerProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 40 72">
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2efee" />
          <stop offset=".5" stopColor="#a9a4a4" />
          <stop offset="1" stopColor="#e4e0df" />
        </linearGradient>
      </defs>
      <rect x="13" y="1" width="14" height="13" rx="3" fill="url(#metal)" />
      <path
        d="M20 14c-9 0-13 8-13 17 0 13 5 24 13 34M20 14c9 0 13 8 13 17 0 8-3 14-6 19"
        fill="none"
        stroke="url(#metal)"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="66" r="5" fill="none" stroke="url(#metal)" strokeWidth="3" />
    </Svg>
  );
}
