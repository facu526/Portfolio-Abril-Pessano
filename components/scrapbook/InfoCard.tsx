import { contactLinks, profile } from "@/lib/content";
import { PaperClip } from "./Decor";

/** Ficha rayada con los datos reales de contacto, escrita a mano. */
export function InfoCard({ className = "" }: { className?: string }) {
  const rows = [
    { label: "nombre", value: profile.fullName },
    { label: "rol", value: profile.role.split(" | ")[0] },
    ...contactLinks
      .slice()
      .reverse()
      .map((link) => ({ label: link.label.toLowerCase(), value: link.value })),
  ];

  return (
    <div className={`info-card ${className}`}>
      <PaperClip className="info-card__clip" />
      <p className="info-card__title">
        <span>mi</span> <em className="t-serif">info</em>
      </p>
      <dl>
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
