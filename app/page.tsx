import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Essence } from "@/components/Essence";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PortfolioHighlights } from "@/components/PortfolioHighlights";
import { Marquee } from "@/components/scrapbook/Marquee";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Marquee />
        <About />
        <Essence />
        <Services />
        <PortfolioHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
