import { BUSINESS, HOURS, MSG, waLink } from "../data/site";
import { IconArrow, IconClock, IconPhone, IconPin, IconWhats } from "./icons";

const DAY_INDEX: Record<number, string> = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const QUICK = [
  {
    title: "Tailoring / Alterations",
    desc: "Measurements, fittings, hems, waists, sleeves and linings",
    msg: MSG.tailoring,
  },
  {
    title: "Dry Cleaning",
    desc: "Suits, coats, evening wear, curtains, quilts and leather care",
    msg: MSG.dryCleaning,
  },
  {
    title: "Fitting Appointment",
    desc: "Scheduling a day and time for bespoke and occasion wear",
    msg: MSG.appointment,
  },
];

export default function Contact() {
  const today = DAY_INDEX[new Date().getDay()];

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 md:scroll-mt-24 md:py-32"
    >
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[360px] w-[360px] animate-breathe rounded-full bg-navy-2/70 blur-[120px]" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-9">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="label-mono text-gold">09 — Location &amp; Contact</span>
            </div>
            <h2 className="reveal-mask mt-6 max-w-2xl font-display text-[clamp(2.1rem,5vw,4rem)] leading-[1.04] text-cream">
              Visit the atelier, or write to us{" "}
              <span className="italic text-gold-2">in a single message</span>.
            </h2>
          </div>
          <p className="reveal max-w-xs text-xs leading-relaxed text-mist">
            In Merkez, on Gölcük Street. Leave your garment with us and collect it when it is ready.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Details */}
          <div className="grid gap-6">
            {/* Address & phone */}
            <div className="reveal grid gap-6 border border-cream/10 bg-navy/35 p-7 sm:grid-cols-2 md:p-9">
              <div>
                <span className="label-mono text-gold/80">Address</span>
                <p className="mt-4 flex gap-3 text-sm leading-relaxed font-light text-bone/90">
                  <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {BUSINESS.address}
                </p>
                <a
                  href={BUSINESS.mapDir}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 border border-gold/40 px-4 py-2.5 text-[0.7rem] font-semibold tracking-[0.12em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-ink"
                >
                  Get directions on Google Maps
                  <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="sm:border-l sm:border-cream/10 sm:pl-6">
                <span className="label-mono text-gold/80">Contact Lines</span>
                <a
                  href={BUSINESS.phonePrimaryHref}
                  className="group mt-4 flex items-center gap-3 text-sm text-bone/90 transition-colors hover:text-gold"
                >
                  <IconPhone className="h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="block font-mono text-[0.95rem] tracking-wide">
                      {BUSINESS.phonePrimary}
                    </span>
                    <span className="label-mono mt-1 block text-[0.5rem] text-mist/60">
                      Primary · WhatsApp
                    </span>
                  </span>
                </a>
                <a
                  href={BUSINESS.phoneAltHref}
                  className="group mt-4 flex items-center gap-3 text-sm text-bone/90 transition-colors hover:text-gold"
                >
                  <IconPhone className="h-4 w-4 shrink-0 text-tan" />
                  <span>
                    <span className="block font-mono text-[0.95rem] tracking-wide">
                      {BUSINESS.phoneAlt}
                    </span>
                    <span className="label-mono mt-1 block text-[0.5rem] text-mist/60">
                      Landline · Alternative
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="reveal border border-cream/10 bg-navy/35 p-7 md:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="label-mono flex items-center gap-2 text-gold/80">
                  <IconClock className="h-3.5 w-3.5" />
                  Opening Hours
                </span>
                <span className="label-mono text-[0.52rem] text-mist/60">
                  Today: {today}
                </span>
              </div>
              <ul className="mt-6 grid gap-0">
                {HOURS.map((h) => {
                  const on = h.day === today;
                  const closed = h.open === "Closed";
                  return (
                    <li
                      key={h.day}
                      className={`flex items-center justify-between gap-4 border-b border-cream/8 py-3 text-sm transition-colors duration-300 ${
                        on ? "text-cream" : "text-mist"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                            on
                              ? closed
                                ? "bg-tan"
                                : "bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.16)]"
                              : "bg-cream/15"
                          }`}
                        />
                        <span className={on ? "font-medium tracking-wide" : "font-light"}>
                          {h.day}
                        </span>
                      </span>
                      <span
                        className={`font-mono text-xs ${
                          closed ? "text-tan" : on ? "text-gold" : "text-mist/80"
                        }`}
                      >
                        {closed ? "Closed" : `${h.open} – ${h.close}`}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 text-[0.7rem] leading-relaxed text-mist/60">
                Hours may vary on public holidays and during the busy season; send a short message
                before you come to confirm.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="reveal relative min-h-[420px] overflow-hidden border border-cream/10 lg:min-h-full">
            <iframe
              title="ARYA Tailoring & Dry Cleaning — Google Maps"
              src={BUSINESS.mapEmbed}
              className="absolute inset-0 h-full w-full grayscale-[0.35] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/12 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="pointer-events-auto max-w-sm border border-gold/25 bg-ink/88 p-5 backdrop-blur-md">
                <span className="label-mono text-gold">{BUSINESS.full}</span>
                <p className="mt-3 text-sm leading-relaxed font-light text-bone/90">
                  {BUSINESS.addressShort}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href={BUSINESS.mapDir}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gold px-4 py-2.5 text-[0.68rem] font-semibold tracking-[0.12em] text-ink uppercase transition-colors hover:bg-gold-2"
                  >
                    Get directions
                    <IconArrow className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={waLink(MSG.general)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-cream/25 px-4 py-2.5 text-[0.68rem] font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
                  >
                    <IconWhats className="h-3.5 w-3.5" />
                    Write
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready-made message templates */}
        <div className="mt-8">
          <div className="reveal flex items-center gap-4">
            <span className="label-mono text-mist/70">Ready-Made Message Templates</span>
            <span className="hairline flex-1" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {QUICK.map((q, i) => (
              <a
                key={q.title}
                href={waLink(q.msg)}
                target="_blank"
                rel="noreferrer"
                className="reveal group relative flex flex-col justify-between overflow-hidden border border-cream/12 bg-navy/30 p-6 transition-colors duration-500 hover:border-gold/50"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition-colors duration-700 group-hover:bg-gold/12" />
                <span className="relative">
                  <span className="label-mono text-[0.55rem] text-mist/55">
                    Template 0{i + 1}
                  </span>
                  <span className="mt-3 block font-display text-2xl text-cream transition-colors duration-500 group-hover:text-gold-2">
                    {q.title}
                  </span>
                  <span className="mt-2 block text-xs leading-relaxed font-light text-mist">
                    {q.desc}
                  </span>
                </span>
                <span className="relative mt-6 flex items-center justify-between gap-3 border-t border-cream/10 pt-4">
                  <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.12em] text-gold uppercase">
                    <IconWhats className="h-3.5 w-3.5" />
                    Send message
                  </span>
                  <IconArrow className="h-4 w-4 text-mist/50 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-gold" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
