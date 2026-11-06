import { marqueeItems } from "@/lib/content";
import { Sparkle } from "./Decor";

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item, index) => (
        <li key={item}>
          <span className={index % 2 === 0 ? "marquee__heavy" : "marquee__serif"}>
            {item}
          </span>
          <Sparkle className="marquee__star" />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        <MarqueeRow />
        <MarqueeRow hidden />
        <MarqueeRow hidden />
        <MarqueeRow hidden />
      </div>
    </div>
  );
}
