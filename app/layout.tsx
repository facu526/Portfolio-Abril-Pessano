import type { Metadata, Viewport } from "next";
import { Archivo, Caveat, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./scrapbook.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

// Solo para las notas manuscritas: un acento mínimo, no una familia de lectura.
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abril Pessano | Portfolio",
  description:
    "Portfolio de Abril Pessano, creadora de contenido, influencer y estudiante de diseño gráfico.",
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4bfd0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
