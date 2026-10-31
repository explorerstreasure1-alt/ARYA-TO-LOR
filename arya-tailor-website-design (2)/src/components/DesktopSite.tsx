import Header from "./Header";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Intro from "./Intro";
import Services from "./Services";
import Process from "./Process";
import About from "./About";
import Ruler from "./Ruler";
import FabricGuide from "./FabricGuide";
import Gallery from "./Gallery";
import CtaBand from "./CtaBand";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import { useRevealObserver } from "../lib/hooks";

/* ------------------------------------------------------------------
   Desktop experience — the original editorial theme (unchanged)
------------------------------------------------------------------ */

export default function DesktopSite() {
  useRevealObserver();

  return (
    <div className="relative min-h-screen bg-ink font-sans text-cream antialiased">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Services />
        <Process />
        <About />
        <Ruler />
        <FabricGuide />
        <Gallery />
        <CtaBand />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
