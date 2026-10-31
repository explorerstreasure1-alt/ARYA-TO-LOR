import { BUSINESS, STATS } from "../data/site";
import { img } from "../lib/img";
import { useCountUp } from "../lib/hooks";
import { IconQuote } from "./icons";

const PILLARS = [
  { t: "Hand finishing", d: "Lapels, buttonholes and sleeve heads are never left to the machine." },
  { t: "Fabric knowledge", d: "Every treatment is chosen by fibre type. No wrong heat, no wrong solvent." },
  { t: "Delivery discipline", d: "The promised day and hour is the one rule this atelier never breaks." },
  { t: "Hygiene", d: "Every piece is bagged separately and delivered untouched by hand." },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, val } = useCountUp(value);
  return (
    <div className="reveal group border-t border-cream/12 pt-5">
      <span
        ref={ref}
        className="block font-display text-[2.4rem] leading-none text-gold transition-colors duration-500 group-hover:text-gold-2 md:text-[3rem]"
      >
        {val.toLocaleString("en-US")}
        <span className="text-tan">{suffix}</span>
      </span>
      <span className="mt-3 block text-[0.72rem] leading-relaxed tracking-[0.08em] text-mist uppercase">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="atelier"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 md:scroll-mt-24 md:py-36"
    >
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[900px] -translate-x-1/2 animate-breathe rounded-full bg-navy-2/45 blur-[140px]" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-9">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Visual collage */}
          <div className="reveal relative">
            <div className="relative">
              <span className="absolute -top-5 -left-5 hidden h-full w-full border border-gold/25 sm:block" />
              <div className="relative overflow-hidden">
                <img
                  src={img(37251960, 1100)}
                  alt="A tailor crafting a garment in the atelier"
                  className="h-[440px] w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.05] md:h-[560px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <p className="font-display text-xl text-cream italic">
                    “A garment stands the way it does on you, and the way it stands in the cutter's
                    hands.”
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 -bottom-14 hidden w-52 overflow-hidden border border-cream/12 shadow-[0_40px_90px_-30px_rgba(0,0,0,1)] md:block lg:-right-10 lg:w-60">
                <img
                  src={img(7147680, 700)}
                  alt="A tailor taking measurements with a tape"
                  className="animate-float-y h-64 w-full object-cover lg:h-72"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-20 flex items-center gap-4 md:mt-24">
              <span className="hairline w-full" />
              <span className="label-mono shrink-0 text-mist/60">The Atelier · Isparta</span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="label-mono text-gold">04 — About Us</span>
            </div>

            <h2 className="reveal-mask mt-6 font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.04] text-cream">
              A craftsman's approach,{" "}
              <span className="italic text-gold-2">obsessed with detail</span>.
            </h2>

            <div className="reveal mt-7 space-y-5 text-sm leading-[1.85] font-light text-mist md:text-[0.95rem]">
              <p>
                ARYA is an atelier that brings years of craft experience together with modern
                textile care technology. Based in Isparta since {BUSINESS.established}, we treat
                every piece with the same seriousness — from a business suit to a bridal gown, from
                a cashmere coat to an ivory silk blouse.
              </p>
              <p>
                On the tailoring side we work to the discipline of the Italian cut; on the cleaning
                side we use programmes designed to extend the life of the fabric. Whether we are
                taking a measurement or applying steam, the goal is the same: your garment should
                disappear onto you, unnoticed.
              </p>
            </div>

            {/* Pull quote */}
            <figure className="reveal mt-9 border-l-2 border-gold/50 bg-cream/[0.02] py-6 pr-6 pl-7">
              <IconQuote className="h-5 w-7 text-gold/50" />
              <blockquote className="mt-3 font-display text-xl leading-snug text-bone/95 italic md:text-2xl">
                Luxury is not what is expensive; it is what you want to wear again and again.
              </blockquote>
              <figcaption className="mt-3 label-mono text-[0.58rem] text-mist/70">
                The ARYA Atelier Manifesto
              </figcaption>
            </figure>

            {/* Pillars */}
            <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <div
                  key={p.t}
                  className="reveal group flex gap-3.5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-500 group-hover:rotate-90" aria-hidden="true">
                    <path d="M8 0v16M0 8h16" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <div>
                    <h3 className="font-sans text-[0.82rem] font-semibold tracking-[0.12em] text-cream uppercase">
                      {p.t}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed font-light text-mist">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-28 lg:grid-cols-4 lg:gap-10">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
