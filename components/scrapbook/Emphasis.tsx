/** Escribe `text` dejando la parte `em` en serif itálica. */
export function Emphasis({ text, em }: { text: string; em?: string }) {
  if (!em || !text.includes(em)) {
    return <>{text}</>;
  }

  const start = text.indexOf(em);

  return (
    <>
      {text.slice(0, start)}
      <em className="t-serif">{em}</em>
      {text.slice(start + em.length)}
    </>
  );
}
