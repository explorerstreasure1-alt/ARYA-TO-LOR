import { useEffect, useState } from "react";
import { BUSINESS, MSG, waLink } from "../../data/site";
import { useActiveSection, useScrolled, useScrollProgress } from "../../lib/hooks";
import { IconArrow, IconPhone, IconWhats } from "../icons";

/* ------------------------------------------------------------------
   Mobile chrome — top bar, bottom tab bar, FAB & template sheet
------------------------------------------------------------------ */

export const MOBILE_TABS = [
  { id: "top", label: "Home", icon: "home" },
  { id: "services", label: "Services", icon: "scissors" },
  { id: "craft", label: "Craft", icon: "needle" },
  { id: "gallery", label: "Gallery", icon: "grid" },
  { id: "contact", label: "Contact", icon: "pin" },
] as const;

const TAB_IDS = MOBILE_TABS.map((t) => t.id);

function TabIcon({ name, className = "" }: { name: string; className?: string }) {
  const c = `h-[22px] w-[22px] ${className}`;
  if (name === "home")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.6 10.4 12 3.8l8.4 6.6" />
        <path d="M5.6 9.4V20h12.8V9.4" />
        <path d="M9.8 20v-5.6h4.4V20" />
      </svg>
    );
  if (name === "scissors")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="18" r="2.6" />
        <circle cx="18.5" cy="18" r="2.6" />
        <path d="M7.4 16.2 17.8 3.4M16.6 16.2 6.2 3.4" />
      </svg>
    );
  if (name === "needle")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 3.5 9 15" />
        <path d="M8.2 15.8 6.4 17.6a2.5 2.5 0 0 0 3.5 3.5l1.8-1.8" />
        <path d="M17.8 3.2c1.3.3 2.7 1.4 3 2.7" />
      </svg>
    );
  if (name === "grid")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.6" y="3.6" width="7" height="7" rx="1.2" />
        <rect x="13.4" y="3.6" width="7" height="7" rx="1.2" />
        <rect x="3.6" y="13.4" width="7" height="7" rx="1.2" />
        <rect x="13.4" y="13.4" width="7" height="7" rx="1.2" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.3" r="2.6" />
    </svg>
  );
}

/* ------------------------------ Top bar ------------------------------ */

export function MobileTopBar() {
  const scrolled = useScrolled(30);
  const progress = useScrollProgress();

  const call = () => {
    window.location.href = BUSINESS.phonePrimaryHref;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 m-safe-t transition-all duration-300 ${
        scrolled ? "m-glass border-b border-gold/12" : "bg-gradient-to-b from-ink/85 to-transparent"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="m-press flex items-center gap-2.5"
          aria-label="ARYA — back to top"
        >
          <svg viewBox="0 0 44 44" className="h-9 w-9 text-gold" aria-hidden="true">
            <circle cx="22" cy="22" r="21" fill="none" stroke="currentColor" strokeOpacity=".35" />
            <path d="M13 31 22 11l9 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.8 25.4h10.4" stroke="currentColor" strokeWidth="1.1" strokeOpacity=".7" />
          </svg>
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] tracking-[0.2em] text-cream">ARYA</span>
            <span className="mt-0.5 block text-[0.5rem] font-medium tracking-[0.2em] text-mist/70 uppercase">
              Tailoring &amp; Dry Cleaning
            </span>
          </span>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={call}
            className="m-press flex h-10 w-10 items-center justify-center border border-gold/35 bg-gold/10 text-gold"
            aria-label={`Call ${BUSINESS.phonePrimary}`}
          >
            <IconPhone className="h-[18px] w-[18px]" />
          </button>
          <a
            href={waLink(MSG.general)}
            target="_blank"
            rel="noreferrer"
            className="m-press flex h-10 w-10 items-center justify-center bg-[#1faa53] text-white"
            aria-label="WhatsApp"
          >
            <IconWhats className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-tan via-gold to-gold-2 transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}

/* ---------------------------- Bottom tab bar --------------------------- */

export function MobileTabBar() {
  const active = useActiveSection(TAB_IDS);

  const go = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 m-glass border-t border-gold/15 m-safe-b">
      <div className="grid grid-cols-5">
        {MOBILE_TABS.map((t) => {
          const on = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => go(t.id)}
              className="m-press relative flex flex-col items-center gap-1 py-2.5"
              aria-current={on}
            >
              <span
                className={`absolute top-0 h-[2px] w-8 rounded-full transition-all duration-300 ${
                  on ? "bg-gold opacity-100" : "bg-transparent opacity-0"
                }`}
              />
              <TabIcon name={t.icon} className={on ? "text-gold" : "text-mist/55"} />
              <span
                className={`text-[0.58rem] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${
                  on ? "text-gold" : "text-mist/55"
                }`}
              >
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* --------------------------- FAB + template sheet ----------------------- */

const SHEET = [
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

export function MobileFab() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Scrim */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-55 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      {/* Sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 z-56 m-sheet m-safe-b rounded-t-[26px] border-t border-gold/25 bg-ink px-5 pt-5 pb-4 transition-transform duration-400 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Quick contact"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-cream/20" />
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.55rem] font-medium tracking-[0.22em] text-gold uppercase">
              Quick Contact
            </p>
            <p className="mt-2 font-display text-[1.45rem] leading-tight text-cream">
              Pick a subject, we will write it for you.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="m-press flex h-9 w-9 shrink-0 items-center justify-center border border-cream/15 text-mist"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="mt-4 space-y-2.5">
          {SHEET.map((t) => (
            <a
              key={t.title}
              href={waLink(t.msg)}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="m-press flex items-center justify-between gap-3 border border-cream/12 bg-navy/50 px-4 py-3.5"
            >
              <span className="min-w-0">
                <span className="block text-[0.88rem] font-semibold tracking-wide text-cream">
                  {t.title}
                </span>
                <span className="mt-0.5 block truncate text-[0.68rem] font-light text-mist">
                  {t.hint}
                </span>
              </span>
              <IconArrow className="h-4 w-4 shrink-0 text-gold" />
            </a>
          ))}
        </div>

        <a
          href={BUSINESS.phonePrimaryHref}
          className="m-press mt-3 flex items-center justify-between gap-3 border border-gold/35 px-4 py-3.5"
        >
          <span className="flex items-center gap-2.5">
            <IconPhone className="h-4 w-4 text-gold" />
            <span className="text-[0.82rem] font-semibold tracking-wide text-cream">
              Call the atelier
            </span>
          </span>
          <span className="font-mono text-[0.8rem] text-gold">{BUSINESS.phonePrimary}</span>
        </a>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className={`m-fab m-press fixed right-4 z-57 flex h-14 w-14 items-center justify-center rounded-full bg-[#1faa53] text-white transition-all duration-300 ${
          open ? "pointer-events-none translate-y-24 opacity-0" : "translate-y-0 opacity-100"
        }`}
        style={{ bottom: "calc(84px + env(safe-area-inset-bottom, 0px))" }}
        aria-label="Write on WhatsApp"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#1faa53]/60" />
        <IconWhats className="relative h-7 w-7" />
      </button>
    </>
  );
}
