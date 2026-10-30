import { useRef } from "react";
import { TESTIMONIALS } from "../data/site";
import { IconQuote, IconStar } from "./icons";

/** Client testimonials — light (cream) editorial block */
export default function Testimonials() {
  const track = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#f2efe8] py-24 text-navy md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-multiply">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(15,23,42,.045) 0 1px, transparent 1px 34px)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -bottom-28 left-[-6%] h-[340px] w-[340px] rounded-full bg-tan/25 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-clay" />
              <span className="label-mono text-clay">07 — Client Voices</span>
            </div>
            <h2 className="reveal-mask mt-6 max-w-2xl font-display text-[clamp(2.1rem,4.6vw,3.7rem)] leading-[1.05] text-navy">
              Work that leaves the bench <span className="italic text-clay">speaks for itself</span>.
            </h2>
          </div>

          <div className="reveal flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center border border-navy/25 text-navy transition-colors duration-300 hover:border-clay hover:bg-navy hover:text-cream"
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center border border-navy/25 text-navy transition-colors duration-300 hover:border-clay hover:bg-navy hover:text-cream"
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={track}
          className="reveal mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              data-card
              className="group relative flex w-[86vw] shrink-0 snap-start flex-col border border-navy/12 bg-white/75 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-clay/45 hover:shadow-[0_36px_70px_-46px_rgba(15,23,42,.6)] sm:w-[420px] md:p-9"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              <IconQuote className="h-6 w-8 text-gold transition-colors duration-500 group-hover:text-clay" />

              <div className="mt-4 flex gap-1 text-gold">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <IconStar key={s} className="h-3.5 w-3.5" />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-navy/85 italic md:text-xl">
                {t.quote}
              </blockquote>

              <footer className="mt-8 flex items-center gap-4 border-t border-navy/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-base text-gold">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold tracking-wide text-navy">
                    {t.name}
                  </span>
                  <span className="label-mono mt-1 block text-[0.52rem] text-navy/45">
                    {t.role}
                  </span>
                </span>
                <span className="ml-auto label-mono text-[0.5rem] text-navy/30">
                  0{i + 1}
                </span>
              </footer>
            </article>
          ))}
        </div>

        <p className="reveal mt-4 text-xs text-navy/45">
          Testimonials were collected after collection of the garments brought to our atelier.
        </p>
      </div>
    </section>
  );
}
