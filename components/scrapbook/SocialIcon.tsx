import type { ContactIconName } from "@/lib/content";

export function SocialIcon({ type }: { type: ContactIconName }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
        <path d="M14 4c.5 3.1 2.2 4.9 5 5.2v3.1c-1.8 0-3.4-.5-5-1.6v5.1c0 3-2.1 5.2-5.1 5.2A5 5 0 0 1 4 16c0-3 2.4-5.2 5.6-5v3.2c-1.4-.2-2.4.6-2.4 1.8 0 1.1.8 1.9 1.9 1.9s1.9-.8 1.9-2V4h3Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m5 8 7 5 7-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
