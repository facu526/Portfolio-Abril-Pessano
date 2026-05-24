import { RevealSection } from "./RevealSection";

const contactLinks = [
  { label: "Mail", value: "abrilpessano@gmail.com", href: "mailto:abrilpessano@gmail.com", icon: "mail" },
  { label: "Instagram", value: "abrupessano", href: "https://instagram.com/abrupessano", icon: "instagram" },
  { label: "TikTok", value: "abrupessa", href: "https://www.tiktok.com/@abrupessa", icon: "tiktok" },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path d="M14 4c.5 3.1 2.2 4.9 5 5.2v3.1c-1.8 0-3.4-.5-5-1.6v5.1c0 3-2.1 5.2-5.1 5.2A5 5 0 0 1 4 16c0-3 2.4-5.2 5.6-5v3.2c-1.4-.2-2.4.6-2.4 1.8 0 1.1.8 1.9 1.9 1.9s1.9-.8 1.9-2V4h3Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m5 8 7 5 7-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Contact() {
  return (
    <RevealSection
      id="contacto"
      className="relative isolate overflow-hidden px-4 pb-10 pt-16 sm:pb-14"
    >
      <div className="silver-edge section-shell relative overflow-hidden rounded-[2.4rem] border border-white/[0.70] bg-gradient-to-br from-ink via-berry to-roseglow p-7 text-paper shadow-[0_34px_100px_rgba(168,72,115,0.22)] sm:p-10 lg:p-14">
        <div
          className="absolute inset-0 opacity-[0.36]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div
          className="absolute -right-16 -top-16 h-56 w-72 rotate-12 rounded-[45%] border border-white/[0.25]"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 left-8 h-40 w-64 -rotate-12 rounded-[45%] border border-white/[0.18]"
          aria-hidden="true"
        />
        <span className="silver-star right-[12%] top-[24%] [--size:1.05rem]" aria-hidden="true" />
        <span className="silver-star left-[9%] bottom-[24%] [--size:0.72rem]" aria-hidden="true" />
        <span className="silver-sprinkles right-[26%] top-[14%]" aria-hidden="true" />
        <span className="silver-sprinkles left-[42%] bottom-[16%]" aria-hidden="true" />
        <span className="glitter-burst right-[38%] top-[42%]" aria-hidden="true" />
        <span className="mirror-ball right-[7%] top-[28%]" aria-hidden="true" />
        <span className="tropical-flower flower-hibiscus right-[7%] bottom-[12%] opacity-50" aria-hidden="true" />
        <span className="tropical-flower flower-plumeria left-[5%] bottom-[10%] hidden opacity-45 sm:block" aria-hidden="true" />
        <div
          className="contact-watermark absolute right-7 top-7 z-10 hidden text-right sm:block lg:right-12 lg:top-9"
          aria-hidden="true"
        >
          <span className="block text-[clamp(2.35rem,4.8vw,5rem)] font-black leading-none text-white/[0.15]">
            Contacto
          </span>
          <span className="mx-1 mt-3 inline-flex h-px w-44 bg-gradient-to-r from-transparent via-white/[0.5] to-silver/70" />
        </div>

        <div className="relative z-10 grid items-center gap-8 pt-10 text-center lg:grid-cols-[1fr_0.72fr] lg:gap-10 lg:pt-16 lg:text-left">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <p className="mx-auto inline-flex rounded-full border border-white/[0.18] bg-white/[0.10] px-4 py-2 text-sm font-black uppercase text-white/[0.78] shadow-[0_16px_34px_rgba(51,42,48,0.12)] backdrop-blur-xl lg:mx-0">
              Contacto
            </p>
            <h2 className="display-title mx-auto mt-5 max-w-4xl text-[clamp(2.7rem,6.8vw,6.2rem)] leading-[0.92] lg:mx-0">
              ¿Creamos contenido auténtico para tu marca?
            </h2>
          </div>

          <div className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row lg:max-w-none lg:flex-col lg:items-stretch">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="premium-button border border-white/[0.22] bg-white/[0.14] text-paper shadow-[0_18px_44px_rgba(51,42,48,0.14)] backdrop-blur-xl hover:bg-white/[0.22]"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noreferrer noopener"
                    : undefined
                }
                aria-label={`${link.label}: ${link.value}`}
              >
                <ContactIcon type={link.icon} />
                <span className="text-left">{link.value}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
