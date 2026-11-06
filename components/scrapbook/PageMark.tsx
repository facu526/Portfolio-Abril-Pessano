/** Marca de página de revista: número de sección + nombre. */
export function PageMark({
  number,
  label,
  className = "",
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <p className={`page-mark ${className}`}>
      <span className="page-mark__number">N° {number}</span>
      <span className="page-mark__label">{label}</span>
    </p>
  );
}
