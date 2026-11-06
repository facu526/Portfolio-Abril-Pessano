"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/lib/content";
import { Sparkle } from "./scrapbook/Decor";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="masthead">
      <nav className="masthead__bar" aria-label="Navegación principal">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="masthead__brand"
          aria-label="Abril Pessano, inicio"
        >
          <span className="masthead__first">{profile.firstName}</span>
          <span className="masthead__last">{profile.lastName}</span>
          <Sparkle className="masthead__star" />
        </a>

        <ul className="masthead__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  link.href === "#contacto"
                    ? "masthead__contact"
                    : "masthead__link"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="masthead__toggle"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span aria-hidden="true">{isOpen ? "Cerrar" : "Menú"}</span>
        </button>

        <div
          id="mobile-menu"
          className={`masthead__panel ${isOpen ? "is-open" : ""}`}
        >
          <ol className="masthead__panel-list">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  <span className="masthead__panel-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </header>
  );
}
