import { useRevealObserver } from "../../lib/hooks";
import Marquee from "../Marquee";
import MobileHero from "./MobileHero";
import { MobileFab, MobileTabBar, MobileTopBar } from "./MobileChrome";
import {
  MobileAbout,
  MobileContact,
  MobileCta,
  MobileFaq,
  MobileFabrics,
  MobileFooter,
  MobileGallery,
  MobileIntro,
  MobileProcess,
  MobileServices,
  MobileTestimonials,
} from "./MobileContent";

/* ------------------------------------------------------------------
   Mobile experience — native, thumb-first, single column
------------------------------------------------------------------ */

export default function MobileSite() {
  useRevealObserver();

  return (
    <div className="relative min-h-screen bg-ink font-sans text-cream antialiased m-tab-space">
      <MobileTopBar />

      <main>
        <MobileHero />
        <Marquee />
        <MobileIntro />
        <MobileServices />
        <MobileProcess />
        <MobileAbout />
        <MobileFabrics />
        <MobileGallery />
        <MobileCta />
        <MobileTestimonials />
        <MobileFaq />
        <MobileContact />
      </main>

      <MobileFooter />
      <MobileTabBar />
      <MobileFab />
    </div>
  );
}
