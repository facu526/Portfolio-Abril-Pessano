import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__row">
        <p>{footer.copyright}</p>
        <p>{footer.tagline}</p>
      </div>
    </footer>
  );
}
