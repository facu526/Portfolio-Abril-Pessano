import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Essence } from "@/components/Essence";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PortfolioHighlights } from "@/components/PortfolioHighlights";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
