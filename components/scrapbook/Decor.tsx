type DecorProps = {
  className?: string;
  style?: React.CSSProperties;
};

const svgProps = {
  "aria-hidden": true,
  focusable: false,
} as const;

export function Sparkle({ className, style }: DecorProps) {
  return (
    <svg {...svgProps} viewBox="0 0 24 24" className={className} style={style}>
      <path
        d="M12 1c.9 6.5 3.6 9.7 11 11-7.4 1.3-10.1 4.5-11 11-.9-6.5-3.6-9.7-11-11 7.4-1.3 10.1-4.5 11-11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Heart({ className, style }: DecorProps) {
  return (
    <svg {...svgProps} viewBox="0 0 24 24" className={className} style={style}>
      <path
        d="M12 21.200S2.4 15.3 1.7 8.600C1.2 4.7 3.9 2.3 6.9 2.300c2.3 0 4.1 1.3 5.1 3.2 1-1.9 2.8-3.2 5.1-3.2 3 0 5.7 2.4 5.2 6.300C21.6 15.3 12 21.2 12 21.200Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PaperClip({ className, style }: DecorProps) {
  return (
    <svg {...svgProps} viewBox="0 0 28 72" className={className} style={style}>
      <path
        d="M19 16v39a7.5 7.5 0 0 1-15 0V15a11 11 0 0 1 22 0v42"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BinderClip({ className, style }: DecorProps) {
  return (
    <svg {...svgProps} viewBox="0 0 64 56" className={className} style={style}>
      <path
        d="M20 24 26 6a6 6 0 0 1 12 0l6 18"
        fill="none"
        stroke="#8d8589"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M6 24h52l-5 28H11L6 24Z" fill="currentColor" />
      <path d="M6 24h52l-1 6H7l-1-6Z" fill="#ffffff" opacity=".28" />
    </svg>
  );
}

export function Cursor({ className, style }: DecorProps) {
  return (
    <svg {...svgProps} viewBox="0 0 24 28" className={className} style={style}>
      <path
        d="M3 2.5 20.5 16l-8.3.8 4.3 8-3.4 1.7-4.2-8.100L3 24.300V2.500Z"
        fill="#fffcf7"
        stroke="#171314"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandArrow({ className, style }: DecorProps) {
  return (
    <svg {...svgProps} viewBox="0 0 90 60" className={className} style={style}>
      <path
        d="M4 8c16 34 38 42 72 36M64 32l13 12-15 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Scribble({ className, style }: DecorProps) {
  return (
    <svg
      {...svgProps}
      viewBox="0 0 220 26"
      preserveAspectRatio="none"
      className={className}
      style={style}
    >
      <path
        d="M3 15c24-13 44-13 58-3 12 9 22 9 35-1 14-10 28-9 41 1 12 9 24 9 37-1 13-9 28-9 43 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Flower({ className, style }: DecorProps) {
  return (
    <svg {...svgProps} viewBox="0 0 48 48" className={className} style={style}>
      <g fill="none" stroke="currentColor" strokeWidth="1.8">
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={angle}
            cx="24"
            cy="12.5"
            rx="7"
            ry="10.5"
            transform={`rotate(${angle} 24 24)`}
          />
        ))}
      </g>
      <circle cx="24" cy="24" r="3.2" fill="currentColor" />
    </svg>
  );
}

export function Ribbons({ className, style }: DecorProps) {
  return (
    <svg
      {...svgProps}
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={style}
    >
      <g fill="none" stroke="currentColor" strokeWidth="46" strokeLinecap="round">
        <path d="M-60 650c180-130 300 90 470-30s60-300 250-300 240 240 420 170 200-260 420-210" />
        <path
          d="M820-40c-40 120 120 170 240 120s260-40 240 110 120 160 200 150"
          opacity=".7"
        />
      </g>
    </svg>
  );
}

const barcodeBars = [
  3, 1, 2, 1, 4, 1, 1, 2, 3, 1, 1, 3, 2, 1, 4, 2, 1, 1, 3, 1, 2, 2, 1, 4, 1, 2,
  3, 1, 1, 2,
];

export function Barcode({ className, style }: DecorProps) {
  const positions = barcodeBars.map((_, index) =>
    barcodeBars.slice(0, index).reduce((total, width) => total + width, 0),
  );

  return (
    <svg
      {...svgProps}
      viewBox="0 0 54 26"
      preserveAspectRatio="none"
      className={className}
      style={style}
    >
      {barcodeBars.map((width, index) =>
        index % 2 === 0 ? (
          <rect
            key={index}
            x={positions[index]}
            y="0"
            width={width}
            height="26"
            fill="currentColor"
          />
        ) : null,
      )}
    </svg>
  );
}

export function WaxSeal({ className = "", style }: DecorProps) {
  return (
    <span aria-hidden="true" className={`wax-seal ${className}`} style={style}>
      AP
    </span>
  );
}
