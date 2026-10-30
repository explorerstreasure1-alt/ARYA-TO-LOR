import { BUSINESS, MSG, waLink } from "../data/site";
import { IconArrow, IconHanger, IconNeedle } from "./icons";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent lg:block" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-9">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="label-mono text-gold">01 — Manifesto</span>
            </div>
            <p className="reveal-mask mt-8 font-display text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1.14] text-cream">
              Clothes are a second skin.
              <span className="block text-mist/75 italic">
                We rebuild that skin with measurements, steam and patience.
              </span>
            </p>
            <div className="reveal mt-9 grid gap-6 text-sm leading-[1.9] font-light text-mist sm:grid-cols-2">
              <p>
                When a piece arrives at ARYA, the first thing we do is listen: what is the fabric,
                how is it worn, where does it pull? No scissors move and no steam is applied until
                that question is answered.
              </p>
              <p>
                In {BUSINESS.city} since {BUSINESS.established}, always in the same atelier and the
                same hands. A small shop with a large discipline — an Italian tailor's measure
                finished with a Spanish photographer's eye.
              </p>
            </div>
          </div>

          {/* Two halves */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                icon: <IconNeedle className="h-8 w-8" />,
                k: "Tailoring",
                t: "Measure · Cut · Fit",
                d: "Bespoke suits, alterations, resizing and evening wear revision.",
              },
              {
                icon: <IconHanger className="h-8 w-8" />,
                k: "Care",
                t: "Dry Cleaning · Steam",
                d: "Precision cleaning programmes, form pressing and protected delivery.",
              },
            ].map((c, i) => (
              <button
                key={c.k}
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
                className="reveal group relative overflow-hidden border border-cream/12 bg-navy/25 p-7 text-left transition-colors duration-500 hover:border-gold/45"
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/8 to-transparent transition-transform duration-[1100ms] group-hover:translate-x-full" />
                <span className="relative flex items-center justify-between">
                  <span className="text-gold transition-transform duration-700 group-hover:-rotate-12">
                    {c.icon}
                  </span>
                  <span className="label-mono text-[0.52rem] text-mist/50">{c.k}</span>
                </span>
                <span className="relative mt-6 block font-display text-2xl text-cream transition-colors duration-500 group-hover:text-gold-2">
                  {c.t}
                </span>
                <span className="relative mt-3 block text-xs leading-relaxed font-light text-mist">
                  {c.d}
                </span>
                <span className="relative mt-6 inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.14em] text-gold uppercase">
                  Explore
                  <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
                </span>
              </button>
            ))}

            <a
              href={waLink(MSG.general)}
              target="_blank"
              rel="noreferrer"
              className="reveal group flex items-center justify-between gap-4 border border-gold/30 bg-gold/8 px-6 py-5 transition-colors duration-500 hover:bg-gold/15"
              style={{ transitionDelay: "220ms" }}
            >
              <span>
                <span className="label-mono text-[0.52rem] text-gold/85">Direct line</span>
                <span className="mt-1.5 block font-mono text-sm tracking-wide text-cream">
                  {BUSINESS.phonePrimary}
                </span>
              </span>
              <IconArrow className="h-5 w-5 text-gold transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
