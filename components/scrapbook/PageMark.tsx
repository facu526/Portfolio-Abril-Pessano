/** Marca de página de revista: nombre de la sección. */
export function PageMark({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <p className={`page-mark ${className}`}>
      <span className="page-mark__label">{label}</span>
    </p>
  );
}
