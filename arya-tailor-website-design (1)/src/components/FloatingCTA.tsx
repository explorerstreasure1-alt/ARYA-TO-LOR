import { useEffect, useState } from "react";
import { BUSINESS, MSG, waLink } from "../data/site";
import { useScrolled } from "../lib/hooks";
import { IconArrow, IconPhone, IconWhats } from "./icons";

const TEMPLATES = [
  {
    title: "Tailoring / Alterations",
    hint: "Bespoke, hems, waists, sleeves, linings",
    msg: MSG.tailoring,
  },
  {
    title: "Dry Cleaning",
    hint: "Suits, coats, evening wear, curtains, leather",
    msg: MSG.dryCleaning,
  },
  {
    title: "Fitting Appointment",
    hint: "Scheduling a day and time",
    msg: MSG.appointment,
  },
];

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(420);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ---------- Mobile call button (bottom left) ---------- */}
      <a
        href={BUSINESS.phonePrimaryHref}
        className={`fixed bottom-5 left-4 z-50 flex items-center gap-2 border border-gold/45 bg-ink/90 px-4 py-3.5 text-cream shadow-[0_18px_40px_-14px_rgba(0,0,0,.95)] backdrop-blur-md transition-all duration-500 md:hidden ${
          scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
        aria-label={`Call now: ${BUSINESS.phonePrimary}`}
      >
        <IconPhone className="h-4 w-4 text-gold" />
        <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase">Call</span>
      </a>

      {/* ---------- WhatsApp (bottom right) ---------- */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-7 md:bottom-7">
        {/* Template panel */}
        <div
          className={`w-[min(88vw,320px)] origin-bottom-right border border-gold/25 bg-ink/95 p-5 shadow-[0_40px_90px_-30px_rgba(0,0,0,1)] backdrop-blur-xl transition-all duration-500 ${
            open
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-95 opacity-0"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="label-mono text-gold">Quick Contact</p>
              <p className="mt-2 font-display text-xl leading-snug text-cream">
                Pick a subject and we will write it for you.
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 shrink-0 items-center justify-center border border-cream/15 text-mist transition-colors hover:border-gold hover:text-gold"
              aria-label="Close panel"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className="mt-5 space-y-2.5">
            {TEMPLATES.map((t) => (
              <a
                key={t.title}
                href={waLink(t.msg)}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between gap-3 border border-cream/12 bg-navy/40 px-4 py-3.5 transition-colors duration-300 hover:border-gold/55 hover:bg-navy"
              >
                <span>
                  <span className="block text-[0.82rem] font-semibold tracking-wide text-cream">
                    {t.title}
                  </span>
                  <span className="mt-0.5 block text-[0.68rem] font-light text-mist">{t.hint}</span>
                </span>
                <IconArrow className="h-4 w-4 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-cream/10 pt-4">
            <span className="font-mono text-[0.72rem] text-mist/80">{BUSINESS.phonePrimary}</span>
            <a
              href={BUSINESS.phonePrimaryHref}
              className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.12em] text-gold uppercase transition-colors hover:text-gold-2"
            >
              <IconPhone className="h-3.5 w-3.5" />
              Call
            </a>
          </div>
        </div>

        {/* Button */}
        <div className="group relative flex items-center gap-3">
          <span
            className={`hidden items-center border border-cream/12 bg-ink/88 px-3.5 py-2 text-[0.7rem] tracking-wide text-bone/85 backdrop-blur-md transition-all duration-500 sm:flex ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            WhatsApp · 0552 267 81 92
          </span>

          <button
            onClick={() => setOpen((o) => !o)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-[0_16px_40px_-10px_rgba(31,170,83,.75)] transition-transform duration-300 hover:scale-105 active:scale-95 md:h-16 md:w-16"
            aria-label="Write on WhatsApp"
            aria-expanded={open}
          >
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#1faa53]/60" />
            {open ? (
              <svg viewBox="0 0 24 24" className="relative h-6 w-6" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <IconWhats className="relative h-7 w-7 md:h-8 md:w-8" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
