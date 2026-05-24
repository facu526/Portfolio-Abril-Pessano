"use client";

import { useState } from "react";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <nav
        className="section-shell soft-border relative flex items-center justify-between rounded-full bg-paper/[0.78] px-3 py-2 shadow-[0_16px_50px_rgba(168,72,115,0.10)] backdrop-blur-2xl"
        aria-label="Navegación principal"
      >
        <span className="nav-glitter" aria-hidden="true" />
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex items-center gap-3 rounded-full px-2 py-1"
          aria-label="Abril Pessano, inicio"
        >
          <span className="ap-monogram grid h-9 w-9 place-items-center rounded-full text-sm font-black text-white shadow-[0_12px_26px_rgba(168,72,115,0.20)]">
            AP
          </span>
          <span className="hidden text-sm font-black text-ink sm:block">
            Abril Pessano
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-ink/[0.70] transition hover:bg-blush/[0.35] hover:text-berry"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-berry/[0.15] bg-paper/[0.80] text-ink shadow-[0_12px_28px_rgba(168,72,115,0.10)] xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`absolute left-0 right-0 top-[calc(100%+0.65rem)] origin-top rounded-[2rem] border border-berry/[0.15] bg-paper/[0.92] p-3 shadow-[0_26px_70px_rgba(168,72,115,0.16)] backdrop-blur-2xl transition xl:hidden ${
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-full px-4 py-3 text-sm font-black text-ink/[0.78] transition hover:bg-blush/[0.40] hover:text-berry"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
