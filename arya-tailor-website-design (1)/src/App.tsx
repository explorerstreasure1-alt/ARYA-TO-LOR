import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import FabricGuide from "./components/FabricGuide";
import Gallery from "./components/Gallery";
import CtaBand from "./components/CtaBand";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Ruler from "./components/Ruler";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import { useRevealObserver } from "./lib/hooks";

export default function App() {
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
