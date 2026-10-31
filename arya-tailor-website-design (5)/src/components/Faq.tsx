import { useState } from "react";
import { FAQ, MSG, waLink } from "../data/site";
import { IconArrow, IconWhats } from "./icons";
import { img } from "../lib/img";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1500px] gap-12 px-5 md:px-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="reveal flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="label-mono text-gold">08 — Frequently Asked</span>
          </div>
          <h2 className="reveal-mask mt-6 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.05] text-cream">
            The things you ask, <span className="italic text-gold-2">answered clearly</span>.
          </h2>
          <p className="reveal mt-6 max-w-sm text-sm leading-relaxed font-light text-mist">
            If your question is not here, send us a photo of the garment and we will reply with
            clear information and a delivery time on the same day.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(MSG.general)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 bg-gold px-5 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-ink uppercase"
            >
              <IconWhats className="h-3.5 w-3.5" />
              Write to us
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border border-cream/20 px-5 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Location &amp; hours
              <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="reveal relative mt-10 hidden overflow-hidden border border-cream/10 lg:block">
            <img
              src={img(6764990, 800)}
              alt="Hand stitching detail on a jacket lapel"
              className="kenburns h-52 w-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
          </div>
        </div>

        <div className="border-t border-cream/10">
          {FAQ.map((f, i) => {
            const on = open === i;
            return (
              <div
                key={f.q}
                className="reveal border-b border-cream/10"
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                <button
                  onClick={() => setOpen(on ? null : i)}
                  className="group flex w-full items-start gap-5 py-6 text-left"
                  aria-expanded={on}
                >
                  <span
                    className={`mt-1 font-mono text-[0.66rem] tracking-[0.18em] transition-colors duration-300 ${
                      on ? "text-gold" : "text-mist/45 group-hover:text-tan"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 font-display text-xl leading-snug transition-colors duration-300 md:text-[1.55rem] ${
                      on ? "text-gold-2" : "text-cream group-hover:text-bone"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`relative mt-1.5 flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-500 ${
                      on
                        ? "rotate-45 border-gold bg-gold text-ink"
                        : "border-cream/25 text-cream group-hover:border-gold/60 group-hover:text-gold"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-3 w-3" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 5.5v13M5.5 12h13" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 ease-out"
                  style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl pb-7 pl-10 text-sm leading-[1.9] font-light text-mist">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
