import { useEffect, useRef, useState } from "react";
import { BUSINESS, MSG, SCENES, waLink } from "../data/site";
import { useReducedMotion } from "../lib/hooks";
import { IconArrow, IconClock, IconPin, IconWhats, StitchRule } from "./icons";

const TICKS = Array.from({ length: 72 });

export default function Hero() {
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

  const start = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => go(idxRef.current + 1), 6200);
  };

  // Automatic scene rotation
  useEffect(() => {
    if (reduced) return;
    start();
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [reduced]);

  const jump = (i: number) => {
    go(i);
    if (!reduced) start();
  };

  const mounted = (i: number) => i === idx || i === prev || (i === 0 && !reduced);

  const scene = SCENES[idx];

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* ---- Video layers ---- */}
      <div className="absolute inset-0">
        {SCENES.map((s, i) => {
          const isActive = i === idx;
          return (
            <div
              key={s.id}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                transition: reduced ? "none" : "opacity 1200ms cubic-bezier(.4,0,.2,1)",
                zIndex: isActive ? 2 : 1,
              }}
            >
              {mounted(i) && (
                <img
                  src={s.poster}
                  alt={isActive ? s.caption : ""}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ opacity: ready.has(i) && !reduced ? 0 : 1 }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              )}
              {mounted(i) && !reduced && (
                <video
                  className={`absolute inset-0 h-full w-full object-cover ${isActive ? "kenburns" : ""}`}
                  src={s.src}
                  poster={s.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload={i === 0 ? "auto" : "metadata"}
                  onLoadedData={() => setReady((r) => new Set(r).add(i))}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ---- Toning layers ---- */}
      <div className="pointer-events-none absolute inset-0 z-3 bg-gradient-to-t from-ink via-ink/55 to-ink/70" />
      <div className="pointer-events-none absolute inset-0 z-3 bg-gradient-to-r from-ink/92 via-ink/45 to-transparent" />
      <div className="vignette pointer-events-none absolute inset-0 z-3" />
      <div className="grain pointer-events-none absolute inset-0 z-3" />

      {/* ---- Content ---- */}
      <div className="relative z-4 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col px-5 pt-28 pb-10 md:px-9 md:pt-32">
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-3xl">
            {/* Eyebrow */}
            <div className="rise flex items-center gap-4" style={{ animationDelay: "120ms" }}>
              <span className="h-px w-10 bg-gold" />
              <span className="label-mono text-gold">
                Isparta · Est. {BUSINESS.established} · Sartoria
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-7 font-display text-[clamp(2.9rem,8.4vw,7.2rem)] leading-[0.94] tracking-[-0.02em] text-cream">
              <span className="block overflow-hidden">
                <span className="rise block" style={{ animationDelay: "220ms" }}>
                  Italian Craft,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="rise block italic text-gold-2"
                  style={{ animationDelay: "380ms" }}
                >
                  Flawless Finish.
                </span>
              </span>
            </h1>

            <div
              className="rise mt-7 flex max-w-xl items-start gap-4"
              style={{ animationDelay: "560ms" }}
            >
              <StitchRule className="mt-3 hidden h-2 w-16 shrink-0 text-tan/70 sm:block" />
              <p className="text-[0.98rem] leading-relaxed font-light text-bone/85 md:text-[1.05rem]">
                Luxury tailoring and dry cleaning standards in Isparta. From measurement to steam,
                every stage is completed by a single cutter — by hand, in full view.
              </p>
            </div>

            {/* CTA */}
            <div
              className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "700ms" }}
            >
              <a
                href={waLink(MSG.general)}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gold px-8 py-4 text-ink"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-cream/60 transition-transform duration-700 group-hover:translate-x-full" />
                <IconWhats className="relative h-4.5 w-4.5" />
                <span className="relative text-[0.82rem] font-semibold tracking-[0.14em] uppercase">
                  Get in touch on WhatsApp
                </span>
              </a>
              <button
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-3 border border-cream/25 px-8 py-4 text-[0.82rem] font-semibold tracking-[0.14em] text-cream uppercase backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Explore our services
                <IconArrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
              </button>
            </div>

            {/* Bottom info row */}
            <div
              className="rise mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.72rem] tracking-wide text-bone/60"
              style={{ animationDelay: "840ms" }}
            >
              <span className="inline-flex items-center gap-2">
                <IconPin className="h-4 w-4 text-tan" />
                {BUSINESS.addressShort}
              </span>
              <span className="inline-flex items-center gap-2">
                <IconClock className="h-4 w-4 text-tan" />
                Mon–Sat 09:00 – 19:30
              </span>
            </div>
          </div>
        </div>

        {/* ---- Bottom strip: scene rail + ruler ---- */}
        <div className="mt-10">
          <div className="flex items-center gap-5 text-tan/40">
            <StitchRule className="h-2 flex-1" />
            <span className="label-mono text-mist/60">Scene {scene.roman}</span>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-md font-display text-lg leading-snug text-bone/85 italic md:text-xl">
              {scene.caption}
            </p>

            <div className="grid grid-cols-4 gap-2.5 md:flex md:gap-3">
              {SCENES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => jump(i)}
                  className="group min-w-0 text-left md:w-[112px]"
                  aria-label={`Scene ${s.roman}: ${s.label}`}
                  aria-current={i === idx}
                >
                  <span
                    className={`block label-mono transition-colors duration-300 ${
                      i === idx ? "text-gold" : "text-mist/50 group-hover:text-bone"
                    }`}
                  >
                    {s.roman}
                  </span>
                  <span
                    className={`mt-1.5 block text-[0.6rem] leading-tight tracking-wide transition-colors duration-300 md:text-[0.68rem] ${
                      i === idx ? "text-cream" : "text-mist/60 group-hover:text-bone/85"
                    }`}
                  >
                    {s.label}
                  </span>
                  <span className="mt-2 block h-px w-full bg-cream/15">
                    <span
                      className="block h-px origin-left bg-gold transition-transform duration-300"
                      style={{ transform: `scaleX(${i === idx ? 1 : 0})` }}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tailor's ruler */}
          <div className="mt-6 hidden h-5 items-end gap-[2px] overflow-hidden opacity-45 md:flex">
            {TICKS.map((_, i) => (
              <span
                key={i}
                className="w-px bg-bone/60"
                style={{ height: i % 6 === 0 ? "100%" : i % 3 === 0 ? "58%" : "30%" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---- Scroll cue ---- */}
      <div className="pointer-events-none absolute bottom-24 left-1/2 z-4 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="label-mono text-[0.55rem] text-mist/50 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
