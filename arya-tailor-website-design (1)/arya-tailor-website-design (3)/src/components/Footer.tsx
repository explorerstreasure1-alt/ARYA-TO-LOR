import { BUSINESS, MSG, SERVICES, waLink } from "../data/site";
import { IconArrow, IconFacebook, IconInstagram, IconPhone, IconPin, IconWhats } from "./icons";

const NAV = [
  { id: "services", label: "Services" },
  { id: "craft", label: "The Craft Process" },
  { id: "atelier", label: "The Atelier" },
  { id: "fabrics", label: "Fabric Guide" },
  { id: "gallery", label: "Gallery" },
];

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-navy">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/6 blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 pt-16 pb-8 md:px-9 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl tracking-[0.24em] text-cream">ARYA</span>
              <span className="h-px flex-1 max-w-24 bg-gold/40" />
            </div>
            <p className="label-mono mt-2 text-[0.55rem] text-mist/65">
              Tailoring &amp; Dry Cleaning · Isparta
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed font-light text-mist">
              An atelier working in the Italian tailoring tradition: bespoke cutting, alterations,
              precision dry cleaning and steam care. Since {BUSINESS.established} the same measure of
              discipline, the same reliability on delivery.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={BUSINESS.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-cream/15 text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-cream/15 text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <IconFacebook className="h-4 w-4" />
              </a>
              <a
                href={waLink(MSG.general)}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center border border-gold/40 bg-gold/10 text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
              >
                <IconWhats className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="label-mono text-gold/80">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className="group flex items-center gap-2 text-sm font-light text-mist transition-colors hover:text-cream"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-4" />
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="label-mono text-gold/80">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go("services")}
                    className="group flex items-center gap-2 text-sm font-light text-mist transition-colors hover:text-cream"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-4" />
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-mono text-gold/80">Direct Contact</h3>
            <p className="mt-5 flex gap-3 text-sm leading-relaxed font-light text-mist">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-tan" />
              {BUSINESS.address}
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={BUSINESS.phonePrimaryHref}
                className="group flex items-center gap-3 text-mist transition-colors hover:text-gold"
              >
                <IconPhone className="h-4 w-4 shrink-0 text-tan" />
                <span className="font-mono text-sm">{BUSINESS.phonePrimary}</span>
              </a>
              <a
                href={BUSINESS.phoneAltHref}
                className="group flex items-center gap-3 text-mist transition-colors hover:text-gold"
              >
                <IconPhone className="h-4 w-4 shrink-0 text-tan/60" />
                <span className="font-mono text-sm">{BUSINESS.phoneAlt}</span>
              </a>
            </div>
            <a
              href={BUSINESS.mapDir}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 border border-cream/15 px-4 py-2.5 text-[0.68rem] font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Get directions
              <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Oversized brand wordmark */}
        <div className="mt-16 overflow-hidden">
          <span className="block select-none text-center font-display text-[clamp(3.6rem,17vw,15rem)] leading-[0.8] tracking-[0.06em] text-transparent [-webkit-text-stroke:1px_rgba(212,175,55,0.28)] transition-[-webkit-text-stroke-color] duration-700 hover:[-webkit-text-stroke:1px_rgba(212,175,55,0.6)]">
            ARYA
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-[0.7rem] font-light text-mist/65">
            © {year} {BUSINESS.full}. All rights reserved.
          </p>
          <p className="label-mono text-[0.52rem] text-mist/45">
            Pirimehmet · Gölcük Cd. No:3 · 32100 Merkez / Isparta
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-[0.7rem] tracking-[0.12em] text-mist uppercase transition-colors hover:text-gold"
          >
            Back to top
            <IconArrow className="h-3.5 w-3.5 -rotate-90 transition-transform duration-500 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
