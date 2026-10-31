import { PROCESS } from "../data/site";
import { img } from "../lib/img";

export default function Process() {
  return (
    <section
      id="craft"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-24 md:scroll-mt-24 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.35) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(80% 60% at 20% 10%, #000, transparent)",
            WebkitMaskImage: "radial-gradient(80% 60% at 20% 10%, #000, transparent)",
          }}
        />
      </div>
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1500px] gap-14 px-5 md:px-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Sticky left column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="reveal flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="label-mono text-gold">03 — The Craft Process</span>
          </div>
          <h2 className="reveal-mask mt-6 font-display text-[clamp(2.3rem,5vw,4.2rem)] leading-[1.03] text-cream">
            Five steps of <span className="italic text-gold-2">Neapolitan</span> discipline.
          </h2>
          <p className="reveal mt-6 max-w-md text-sm leading-relaxed font-light text-mist">
            In Neapolitan tailoring the shoulder is soft, the lapel sits close to the chest and the
            sleeve moves freely. We apply that tradition in Isparta in the same order, with the same
            patience: listen, measure, cut, fit, finish with steam.
          </p>

          <div className="reveal mt-10 hidden lg:block">
            <div className="relative">
              <span className="absolute -top-4 -left-4 h-full w-full border border-gold/25" />
              <img
                src={img(4614250, 900)}
                alt="Sewing machine and measuring tape on the workshop bench"
                className="relative h-[380px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="h-14 w-14 shrink-0 animate-spin-slow text-gold/70" aria-hidden="true">
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeOpacity=".3" strokeDasharray="4 6" />
                <path d="M50 18v64M18 50h64" stroke="currentColor" strokeOpacity=".5" strokeWidth="1" />
              </svg>
              <p className="text-xs leading-relaxed text-mist/80">
                Every piece passes a hand inspection before it leaves: stitch spacing, lapel sit and
                press marks are checked one by one.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <ol className="relative">
          <span className="absolute top-2 bottom-2 left-[27px] w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent md:left-[31px]" />
          {PROCESS.map((p, i) => (
            <li
              key={p.no}
              className="reveal group relative flex gap-6 py-7 md:gap-9 md:py-9"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="relative z-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-navy font-display text-lg text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink md:h-16 md:w-16 md:text-xl">
                {p.no}
              </span>
              <div className="min-w-0 flex-1 border-b border-cream/8 pb-7 md:pb-9">
                <div className="flex flex-wrap items-baseline gap-4">
                  <h3 className="font-display text-2xl text-cream transition-colors duration-500 group-hover:text-gold-2 md:text-[2rem]">
                    {p.title}
                  </h3>
                  <span className="label-mono text-[0.55rem] text-mist/45">
                    Step 0{i + 1}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed font-light text-mist">
                  {p.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
