import { useState } from "react";
import { FABRICS, waLink } from "../data/site";
import { IconArrow, IconWhats } from "./icons";

/** Fabric & Care Guide — light (cream) section */
export default function FabricGuide() {
  const [active, setActive] = useState(0);
  const f = FABRICS[active];

  return (
    <section
      id="fabrics"
      className="relative scroll-mt-20 overflow-hidden bg-[#f2efe8] py-24 text-navy md:scroll-mt-24 md:py-32"
    >
      {/* paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-multiply">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(15,23,42,.045) 0 1px, transparent 1px 34px)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -top-24 right-[-6%] h-[320px] w-[320px] rounded-full bg-tan/25 blur-[110px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-9">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-clay" />
              <span className="label-mono text-clay">05 — Fabric &amp; Care Guide</span>
            </div>
            <h2 className="reveal-mask mt-6 max-w-2xl font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.05] text-navy">
              Know the fibre, <span className="italic text-clay">extend the life</span>.
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-navy/65">
            Every fabric in your wardrobe has its own requirements. Select yours below to read the
            care note; if you are unsure, simply send us a photo.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-14">
          {/* Tabs */}
          <div className="reveal flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
            {FABRICS.map((fab, i) => {
              const on = i === active;
              return (
                <button
                  key={fab.key}
                  onClick={() => setActive(i)}
                  className={`group relative flex min-w-[132px] shrink-0 items-center justify-between gap-3 border-b px-4 py-4 text-left transition-colors duration-500 lg:min-w-0 lg:px-5 lg:py-5 ${
                    on
                      ? "border-clay/45 bg-white/70 text-navy"
                      : "border-navy/12 text-navy/55 hover:border-tan hover:text-navy"
                  }`}
                  aria-pressed={on}
                >
                  <span>
                    <span className="block font-display text-xl lg:text-2xl">{fab.name}</span>
                    <span className="label-mono mt-1 block text-[0.52rem] text-navy/40">
                      {fab.latin}
                    </span>
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                      on ? "scale-125 bg-gold" : "bg-navy/20 group-hover:bg-tan"
                    }`}
                  />
                  {on && (
                    <span className="absolute top-0 bottom-0 left-0 hidden w-[2px] bg-gold lg:block" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            key={f.key}
            className="grid gap-8 border border-navy/12 bg-white/80 p-6 shadow-[0_30px_70px_-45px_rgba(15,23,42,.55)] md:grid-cols-[0.85fr_1.15fr] md:p-9"
          >
            <div className="relative overflow-hidden">
              <img
                src={f.image}
                alt={`${f.name} fabric texture`}
                className="kenburns h-56 w-full object-cover md:h-full md:min-h-[280px]"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 label-mono text-[0.55rem] text-gold-2">
                {f.latin}
              </span>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display text-3xl text-navy md:text-4xl">{f.name}</h3>
              <p className="mt-4 text-sm leading-[1.85] font-light text-navy/70">{f.care}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {f.tips.map((t) => (
                  <span
                    key={t}
                    className="border border-navy/15 bg-white/60 px-3 py-1.5 text-[0.68rem] tracking-[0.06em] text-navy/75 transition-colors duration-300 hover:border-clay hover:text-clay"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                <a
                  href={waLink(
                    `Hello ARYA, I would like care and cleaning advice for a garment made of ${f.name}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 bg-navy px-5 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:bg-gold hover:text-ink"
                >
                  <IconWhats className="h-3.5 w-3.5" />
                  Ask about {f.name}
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-navy/70 uppercase transition-colors hover:text-clay"
                >
                  Bring it in
                  <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="reveal mt-8 text-xs leading-relaxed text-navy/50">
          Note: pieces with unreadable labels, blended fibres or specialist finishes are tested on a
          sample before treatment. If any risk is detected, the process is not begun without your
          approval.
        </p>
      </div>
    </section>
  );
}
