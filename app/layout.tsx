import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abril Pessano | Portfolio",
  description:
    "Portfolio de Abril Pessano, creadora de contenido, influencer y estudiante de diseño gráfico.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
