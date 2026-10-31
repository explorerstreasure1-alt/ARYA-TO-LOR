import { useEffect, useRef, useState } from "react";
import { BUSINESS, MSG, SCENES, waLink } from "../../data/site";
import { useReducedMotion } from "../../lib/hooks";
import { IconPhone, IconWhats } from "../icons";

/* ------------------------------------------------------------------
   Mobile hero — portrait-optimised: cinematic panel + overlapping card
------------------------------------------------------------------ */

export default function MobileHero() {
  const reduced = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [ready, setReady] = useState<Set<number>>(() => new Set());
  const idxRef = useRef(0);
  const timer = useRef<number | null>(null);

  const go = (i: number) => {
    const n = ((i % SCENES.length) + SCENES.length) % SCENES.length;
    if (n === idxRef.current) return;
    setPrev(idxRef.current);
    idxRef.current = n;
    setIdx(n);
  };

  useEffect(() => {
    if (reduced) return;
    timer.current = window.setInterval(() => go(idxRef.current + 1), 5600);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [reduced]);

  const mounted = (i: number) => i === idx || i === prev;
  const scene = SCENES[idx];

  return (
    <section id="top" className="relative bg-ink">
      {/* ---------------- Cinematic panel ---------------- */}
      <div className="mobile-hero-media relative w-full overflow-hidden bg-ink-2">
        {SCENES.map((s, i) => {
          const on = i === idx;
          return (
            <div
              key={s.id}
              className="absolute inset-0"
              style={{
                opacity: on ? 1 : 0,
                transition: reduced ? "none" : "opacity 1000ms cubic-bezier(.4,0,.2,1)",
                zIndex: on ? 2 : 1,
              }}
            >
              {mounted(i) && (
                <img
                  src={s.poster}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  style={{ opacity: ready.has(i) && !reduced ? 0 : 1 }}
                />
              )}
              {mounted(i) && !reduced && (
                <video
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
                  src={s.src}
                  poster={s.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  disableRemotePlayback
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  aria-hidden="true"
                  tabIndex={-1}
                  preload={i === 0 ? "auto" : "metadata"}
                  onLoadedData={() => setReady((r) => new Set(r).add(i))}
                />
              )}
            </div>
          );
        })}

        {/* cinematic grading */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/10 to-ink" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/50" />
        <div className="vignette pointer-events-none absolute inset-0" />
        <div className="grain pointer-events-none absolute inset-0" />

        {/* top scrim so the bar stays readable */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/80 to-transparent" />

        {/* eyebrow */}
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-between gap-3 px-4">
          <span className="rounded-full border border-gold/30 bg-ink/50 px-3 py-1.5 text-[0.55rem] font-medium tracking-[0.18em] text-gold uppercase backdrop-blur-sm">
            Isparta · Est. {BUSINESS.established}
          </span>
          <span className="rounded-full border border-cream/15 bg-ink/50 px-3 py-1.5 text-[0.55rem] font-medium tracking-[0.18em] text-cream/80 uppercase backdrop-blur-sm">
            {scene.roman} / {scene.label}
          </span>
        </div>
      </div>

      {/* ---------------- Overlapping content card ---------------- */}
      <div className="relative z-10 -mt-14 rounded-t-[26px] bg-ink px-5 pt-8 pb-9">
        <h1 className="font-display text-[clamp(2.5rem,11.5vw,3.6rem)] leading-[0.95] tracking-[-0.02em] text-cream">
          <span className="block">Italian Craft,</span>
          <span className="block italic text-gold-2">Flawless Finish.</span>
        </h1>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-gold/60 via-tan/25 to-transparent" />

        <p className="mt-4 text-[0.95rem] leading-relaxed font-light text-bone/85">
          Luxury tailoring and dry cleaning standards in Isparta. From measurement to steam, every
          stage is completed by a single cutter — by hand, in full view.
        </p>

        {/* Primary actions */}
        <div className="mt-6 space-y-2.5">
          <a
            href={waLink(MSG.general)}
            target="_blank"
            rel="noreferrer"
            className="m-press flex items-center justify-center gap-2.5 bg-gold px-5 py-4 text-[0.78rem] font-semibold tracking-[0.12em] text-ink uppercase"
          >
            <IconWhats className="h-[18px] w-[18px]" />
            Get in touch on WhatsApp
          </a>
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={BUSINESS.phonePrimaryHref}
              className="m-press flex items-center justify-center gap-2 border border-cream/22 px-4 py-3.5 text-[0.72rem] font-semibold tracking-[0.1em] text-cream uppercase"
            >
              <IconPhone className="h-4 w-4 text-gold" />
              Call
            </a>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="m-press flex items-center justify-center gap-2 border border-cream/22 px-4 py-3.5 text-[0.72rem] font-semibold tracking-[0.1em] text-cream uppercase"
            >
              Services
            </button>
          </div>
        </div>

        {/* meta row */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="border border-cream/10 bg-navy/40 px-3.5 py-3">
            <span className="block text-[0.52rem] font-medium tracking-[0.18em] text-mist/60 uppercase">
              Address
            </span>
            <span className="mt-1.5 block text-[0.72rem] leading-snug font-light text-bone/85">
              {BUSINESS.addressShort}
            </span>
          </div>
          <div className="border border-cream/10 bg-navy/40 px-3.5 py-3">
            <span className="block text-[0.52rem] font-medium tracking-[0.18em] text-mist/60 uppercase">
              Opening Hours
            </span>
            <span className="mt-1.5 block text-[0.72rem] leading-snug font-light text-bone/85">
              Mon–Sat 09:00 – 19:30
            </span>
          </div>
        </div>

        {/* scene dots */}
        <div className="mt-6 flex items-center gap-2">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className="m-press flex-1"
              aria-label={`Scene ${s.roman}: ${s.label}`}
              aria-current={i === idx}
            >
              <span className="block h-[3px] w-full rounded-full bg-cream/12">
                <span
                  className="block h-full rounded-full bg-gold transition-transform duration-500"
                  style={{ transform: `scaleX(${i === idx ? 1 : 0})`, transformOrigin: "left" }}
                />
              </span>
              <span
                className={`mt-2 block text-left text-[0.55rem] font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${
                  i === idx ? "text-gold" : "text-mist/45"
                }`}
              >
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
