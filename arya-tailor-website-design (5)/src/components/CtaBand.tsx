import { BUSINESS, MSG, waLink } from "../data/site";
import { img } from "../lib/img";
import { IconArrow, IconPhone, IconWhats, StitchRule } from "./icons";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={img(31517344, 1600)}
          alt="Suits and shirts hanging on a rail"
          className="kenburns h-full w-full object-cover opacity-45"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/30" />
      <div className="vignette absolute inset-0" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-20 md:px-9 md:py-28">
        <div className="max-w-3xl">
          <div className="reveal flex items-center gap-4">
            <StitchRule className="h-2 w-16 text-tan/70" />
            <span className="label-mono text-gold">Appointment &amp; Collection</span>
          </div>
          <h2 className="reveal-mask mt-6 font-display text-[clamp(2.1rem,5.2vw,4.2rem)] leading-[1.03] text-cream">
            Leave your garment with us today,{" "}
            <span className="italic text-gold-2">wear it tomorrow</span>.
          </h2>
          <p className="reveal mt-6 max-w-xl text-sm leading-[1.9] font-light text-mist md:text-[0.95rem]">
            Alterations, bespoke tailoring or delicate cleaning — whichever it is, the first step is
            the same: one message or one phone call. Send us a photo of the garment and we will
            confirm the scope and the delivery time on the same day.
          </p>

          <div className="reveal mt-10 flex flex-wrap gap-3">
            <a
              href={waLink(MSG.tailoring)}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden bg-gold px-7 py-4 text-[0.76rem] font-semibold tracking-[0.14em] text-ink uppercase"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-cream/55 transition-transform duration-700 group-hover:translate-x-full" />
              <IconWhats className="relative h-4 w-4" />
              <span className="relative">Get in touch on WhatsApp</span>
            </a>
            <a
              href={BUSINESS.phonePrimaryHref}
              className="group inline-flex items-center gap-2.5 border border-cream/25 px-7 py-4 text-[0.76rem] font-semibold tracking-[0.14em] text-cream uppercase backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <IconPhone className="h-4 w-4" />
              {BUSINESS.phonePrimary}
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-2 py-4 text-[0.76rem] font-semibold tracking-[0.14em] text-bone/80 uppercase transition-colors hover:text-gold"
            >
              Location &amp; hours
              <IconArrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
          </div>

          <p className="reveal mt-8 font-mono text-[0.7rem] tracking-wide text-mist/60">
            {BUSINESS.address}
          </p>
        </div>
      </div>
    </section>
  );
}
