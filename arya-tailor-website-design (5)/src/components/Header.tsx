import { useEffect, useState } from "react";
import { BUSINESS, MSG, waLink } from "../data/site";
import { useActiveSection, useScrolled, useScrollProgress } from "../lib/hooks";
import { IconArrow, IconPhone, IconWhats } from "./icons";

const LINKS = [
  { id: "services", label: "Services" },
  { id: "craft", label: "Craft" },
  { id: "atelier", label: "Atelier" },
  { id: "fabrics", label: "Fabric Guide" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const IDS = LINKS.map((l) => l.id);

/** Brand monogram: needle + A */
function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <circle cx="22" cy="22" r="21" fill="none" stroke="currentColor" strokeOpacity=".35" />
      <path
        d="M13 31 22 11l9 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.8 25.4h10.4" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".7" />
      <path
        d="M33.6 9.2 26 16.8"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeDasharray="2.4 2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const scrolled = useScrolled(40);
  const progress = useScrollProgress();
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
          scrolled
            ? "border-b border-gold/15 bg-ink/85 py-2.5 backdrop-blur-xl"
            : "border-b border-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center gap-6 px-5 md:px-9">
          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 text-left"
            aria-label="ARYA — back to top"
          >
            <Monogram className="h-10 w-10 shrink-0 text-gold transition-transform duration-700 group-hover:rotate-[18deg]" />
            <span className="leading-none">
              <span className="block font-display text-[1.6rem] tracking-[0.22em] text-cream">
                ARYA
              </span>
              <span className="mt-1 block label-mono text-[0.56rem] text-mist/80">
                Tailoring &amp; Dry Cleaning
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="ml-auto hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="group relative py-1 text-[0.78rem] font-medium tracking-[0.14em] text-bone/70 uppercase transition-colors hover:text-cream"
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ${
                    active === l.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Contact */}
          <div className="ml-auto flex items-center gap-2.5 lg:ml-0">
            <a
              href={BUSINESS.phonePrimaryHref}
              className="hidden items-center gap-2 border border-cream/15 px-3.5 py-2.5 text-[0.72rem] tracking-[0.1em] text-bone/85 transition-colors duration-300 hover:border-gold/50 hover:text-gold md:inline-flex"
            >
              <IconPhone className="h-3.5 w-3.5" />
              {BUSINESS.phonePrimary}
            </a>
            <a
              href={waLink(MSG.general)}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden bg-gold px-4 py-2.5 text-[0.72rem] font-semibold tracking-[0.12em] text-ink uppercase transition-colors duration-300 hover:text-ink"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/55 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <IconWhats className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-cream/15 transition-colors hover:border-gold/60 lg:hidden"
              aria-label="Open menu"
            >
              <span className="h-px w-4 bg-cream" />
              <span className="h-px w-4 bg-cream" />
              <span className="h-px w-2.5 self-center bg-gold" />
            </button>
          </div>
        </div>

        {/* Scroll thread */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-cream/5">
          <div
            className="h-px bg-gradient-to-r from-tan via-gold to-gold-2 transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-60 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/95 backdrop-blur-xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative flex h-full flex-col px-6 pt-7 pb-10 transition-transform duration-500 ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="label-mono text-gold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-cream/15 text-cream"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav className="mt-10 flex flex-col">
            {LINKS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="group flex items-baseline gap-4 border-b border-cream/8 py-4 text-left"
                style={{
                  transitionDelay: `${i * 45}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(14px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "600ms",
                }}
              >
                <span className="label-mono text-gold/70">0{i + 1}</span>
                <span className="font-display text-3xl text-cream transition-colors group-hover:text-gold">
                  {l.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            <a
              href={BUSINESS.phonePrimaryHref}
              className="flex items-center justify-between bg-gold px-5 py-4 text-ink"
            >
              <span className="text-sm font-semibold tracking-wide">Call now</span>
              <span className="font-mono text-sm">{BUSINESS.phonePrimary}</span>
            </a>
            <a
              href={waLink(MSG.general)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border border-gold/40 px-5 py-4 text-cream"
            >
              <span className="text-sm font-semibold tracking-wide">Message on WhatsApp</span>
              <IconArrow className="h-4 w-4 text-gold" />
            </a>
            <p className="pt-2 text-xs leading-relaxed text-mist/70">{BUSINESS.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
