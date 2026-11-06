const EDGE =
  "M0 46V22l46-7 38 9 62-12 41 8 58-10 49 11 37-6 71 8 44-11 56 7 39 8 68-13 52 9 33-5 74 9 47-12 61 8 36 6 58-11 66 9 42-6 54 8 47-7 66 6 59-9 50 8L1440 18V46Z";
const FRINGE =
  "M0 46V17l52-8 33 11 66-13 37 9 62-12 44 13 41-7 66 9 49-12 52 8 44 7 64-14 56 11 29-6 78 10 43-13 65 9 32 6 62-12 62 10 46-7 50 9 51-8 62 7 63-10 46 9L1440 18V46Z";

/** Borde de papel rasgado para pasar de una "hoja" a la siguiente. */
export function TornEdge({ color }: { color: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="torn-edge"
      viewBox="0 0 1440 46"
      preserveAspectRatio="none"
    >
      <path d={FRINGE} fill="#fffcf7" />
      <path d={EDGE} fill={color} />
    </svg>
  );
}
