import { useRef, useState, type ReactNode } from "react";
import {
  BUSINESS,
  FAQ,
  FABRICS,
  GALLERY,
  HOURS,
  MSG,
  PROCESS,
  SERVICES,
  STATS,
  TESTIMONIALS,
  waLink,
} from "../../data/site";
import { img } from "../../lib/img";
import { IconArrow, IconClock, IconPhone, IconPin, IconWhats } from "../icons";

/* ------------------------------------------------------------------
   Mobile content sections — single column, thumb-friendly, swipeable
------------------------------------------------------------------ */

/* ----------------------------- Section head ----------------------------- */

function Head({
  no,
  label,
  title,
  sub,
}: {
  no: string;
  label: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <div className="reveal mb-5">
      <div className="flex items-center gap-3">
        <span className="h-px w-7 bg-gold" />
        <span className="text-[0.55rem] font-medium tracking-[0.2em] text-gold uppercase">
          {no} — {label}
        </span>
      </div>
      <h2 className="mt-3 font-display text-[1.9rem] leading-[1.08] text-cream">{title}</h2>
      {sub && <p className="mt-3 text-[0.86rem] leading-relaxed font-light text-mist">{sub}</p>}
    </div>
  );
}

/* ------------------------------ Manifesto ------------------------------- */

export function MobileIntro() {
  return (
    <section className="bg-ink px-5 py-12">
      <Head
        no="01"
        label="Manifesto"
        title={
          <>
            Clothes are a <span className="italic text-gold-2">second skin</span>.
          </>
        }
        sub="We rebuild that skin with measurements, steam and patience."
      />

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {[
          {
            k: "Tailoring",
            t: "Measure · Cut · Fit",
            d: "Bespoke suits, alterations, resizing.",
            href: "#services",
          },
          {
            k: "Care",
            t: "Dry Clean · Steam",
            d: "Precision cleaning, form pressing.",
            href: "#services",
          },
        ].map((c) => (
          <button
            key={c.k}
            onClick={() => {
              const el = document.getElementById("services");
              if (el)
                window.scrollTo({
                  top: el.getBoundingClientRect().top + window.scrollY - 72,
                  behavior: "smooth",
                });
            }}
            className="m-press border border-cream/12 bg-navy/30 p-4 text-left"
          >
            <span className="block text-[0.5rem] font-medium tracking-[0.2em] text-gold uppercase">
              {c.k}
            </span>
            <span className="mt-2 block font-display text-[1.15rem] leading-tight text-cream">
              {c.t}
            </span>
            <span className="mt-1.5 block text-[0.68rem] leading-snug font-light text-mist">
              {c.d}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-5 border-l-2 border-gold/50 bg-cream/[0.025] py-4 pr-4 pl-4">
        <p className="font-display text-[1.1rem] leading-snug text-bone/95 italic">
          "Luxury is not what is expensive; it is what you want to wear again and again."
        </p>
        <p className="mt-2 text-[0.55rem] font-medium tracking-[0.18em] text-mist/60 uppercase">
          The ARYA Atelier Manifesto
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- Services ------------------------------- */

export function MobileServices() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="services" className="scroll-mt-20 bg-ink-2 px-5 py-12">
      <Head
        no="02"
        label="Our Services"
        title={
          <>
            Four disciplines, one <span className="italic text-gold-2">standard</span>.
          </>
        }
        sub="Tap a card to see the full scope, or write to us directly."
      />

      <div className="space-y-2.5">
        {SERVICES.map((s) => {
          const on = open === s.id;
          return (
            <div
              key={s.id}
              className={`overflow-hidden border transition-colors duration-300 ${
                on ? "border-gold/45 bg-navy/45" : "border-cream/12 bg-navy/25"
              }`}
            >
              <button
                onClick={() => setOpen(on ? null : s.id)}
                className="m-press flex w-full items-center gap-3 p-3 text-left"
                aria-expanded={on}
              >
                <span className="relative h-[68px] w-[68px] shrink-0 overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <span className="absolute bottom-1 left-1.5 text-[0.55rem] font-medium tracking-[0.14em] text-gold">
                    {s.no}
                  </span>
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[1.15rem] leading-tight text-cream">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-[0.55rem] font-medium tracking-[0.16em] text-mist/55 uppercase">
                    {s.latin} · {s.tag}
                  </span>
                </span>

                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                    on ? "rotate-45 border-gold bg-gold text-ink" : "border-cream/20 text-cream"
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 5.5v13M5.5 12h13" />
                  </svg>
                </span>
              </button>

              <div
                className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out"
                style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
              >
                <div className="min-h-0">
                  <div className="px-3 pb-4">
                    <p className="text-[0.84rem] leading-relaxed font-light text-mist">{s.desc}</p>
                    <ul className="mt-3.5 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[0.8rem] font-light text-bone/85">
                          <span className="mt-[7px] h-px w-3.5 shrink-0 bg-gold" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(s.message)}
                      target="_blank"
                      rel="noreferrer"
                      className="m-press mt-4 flex items-center justify-center gap-2 bg-gold px-4 py-3 text-[0.7rem] font-semibold tracking-[0.12em] text-ink uppercase"
                    >
                      <IconWhats className="h-4 w-4" />
                      Write about this
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------- Process -------------------------------- */

export function MobileProcess() {
  return (
    <section id="craft" className="scroll-mt-20 bg-ink px-5 py-12">
      <Head
        no="03"
        label="The Craft Process"
        title={
          <>
            Five steps of <span className="italic text-gold-2">Neapolitan</span> discipline.
          </>
        }
        sub="Listen, measure, cut, fit, finish with steam — in that order, every time."
      />

      <ol className="relative mt-2">
        <span className="absolute top-3 bottom-3 left-[19px] w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent" />
        {PROCESS.map((p) => (
          <li key={p.no} className="relative flex gap-4 py-4">
            <span className="relative z-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ink font-display text-[0.95rem] text-gold">
              {p.no}
            </span>
            <div className="min-w-0 flex-1 border-b border-cream/8 pb-4">
              <h3 className="font-display text-[1.25rem] leading-tight text-cream">{p.title}</h3>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed font-light text-mist">{p.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="relative mt-5 overflow-hidden border border-cream/12">
        <img
          src={img(4614250, 800)}
          alt="Sewing machine and measuring tape on the workshop bench"
          className="h-44 w-full object-cover"
          loading="lazy"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
      </div>
    </section>
  );
}

/* -------------------------------- Atelier -------------------------------- */

export function MobileAbout() {
  const track = useRef<HTMLDivElement | null>(null);

  return (
    <section id="atelier" className="scroll-mt-20 bg-navy px-5 py-12">
      <Head
        no="04"
        label="About Us"
        title={
          <>
            A craftsman's approach,{" "}
            <span className="italic text-gold-2">obsessed with detail</span>.
          </>
        }
      />

      {/* swipeable image strip */}
      <div
        ref={track}
        className="no-scrollbar m-overscroll-x -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1"
      >
        {[img(37251960, 900), img(7147680, 900), img(6764919, 900), img(6765065, 900)].map(
          (src, i) => (
            <span
              key={src}
              className="relative h-56 w-[78%] shrink-0 snap-center overflow-hidden border border-cream/10"
            >
              <img
                src={src}
                alt={[
                  "A tailor crafting a garment in the atelier",
                  "A tailor taking measurements with a tape",
                  "A tailor fitting a checkered blazer",
                  "Chalk outline drawn on a suit jacket",
                ][i]}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
            </span>
          )
        )}
      </div>
      <p className="mt-2 text-center text-[0.55rem] font-medium tracking-[0.18em] text-mist/45 uppercase">
        Swipe for more
      </p>

      <div className="mt-5 space-y-3.5 text-[0.88rem] leading-[1.8] font-light text-mist">
        <p>
          ARYA is an atelier that brings years of craft experience together with modern textile
          care technology. Based in Isparta since {BUSINESS.established}, we treat every piece with
          the same seriousness — from a business suit to a bridal gown.
        </p>
        <p>
          On the tailoring side we work to the discipline of the Italian cut; on the cleaning side
          we use programmes designed to extend the life of the fabric.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <div key={s.label} className="border-t border-cream/12 pt-3">
            <span className="block font-display text-[1.9rem] leading-none text-gold">
              {s.value.toLocaleString("en-US")}
              <span className="text-tan">{s.suffix}</span>
            </span>
            <span className="mt-2 block text-[0.6rem] leading-snug font-medium tracking-[0.1em] text-mist uppercase">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Fabric guide ----------------------------- */

export function MobileFabrics() {
  return (
    <section id="fabrics" className="scroll-mt-20 bg-[#f2efe8] px-5 py-12 text-navy">
      <Head
        no="05"
        label="Fabric & Care"
        title={
          <>
            Know the fibre, <span className="italic text-clay">extend the life</span>.
          </>
        }
        sub="Swipe through the fibres. Send a photo if you are unsure — we will advise."
      />

      <div className="no-scrollbar m-overscroll-x -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2">
        {FABRICS.map((f) => (
          <article
            key={f.key}
            className="w-[80%] shrink-0 snap-center border border-navy/12 bg-white/80 shadow-[0_22px_50px_-38px_rgba(15,23,42,.6)]"
          >
            <span className="relative block h-36 overflow-hidden">
              <img
                src={f.image}
                alt={`${f.name} fabric texture`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <span className="absolute bottom-2 left-3 text-[0.52rem] font-medium tracking-[0.16em] text-gold-2 uppercase">
                {f.latin}
              </span>
            </span>
            <div className="p-4">
              <h3 className="font-display text-[1.5rem] text-navy">{f.name}</h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed font-light text-navy/70">{f.care}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {f.tips.map((t) => (
                  <span
                    key={t}
                    className="border border-navy/15 bg-white/70 px-2 py-1 text-[0.62rem] text-navy/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={waLink(
                  `Hello ARYA, I would like care and cleaning advice for a garment made of ${f.name}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="m-press mt-4 flex items-center justify-center gap-2 bg-navy px-4 py-3 text-[0.68rem] font-semibold tracking-[0.1em] text-cream uppercase"
              >
                <IconWhats className="h-4 w-4" />
                Ask about {f.name}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Gallery -------------------------------- */

export function MobileGallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="scroll-mt-20 bg-ink px-5 py-12">
      <Head
        no="06"
        label="From the Atelier"
        title={
          <>
            Close up: <span className="italic text-gold-2">texture, stitch, steam</span>.
          </>
        }
        sub="Tap any frame to enlarge."
      />

      <div className="grid grid-cols-2 gap-2">
        {GALLERY.map((g, i) => (
          <button
            key={g.src}
            onClick={() => setOpen(i)}
            className="m-press relative aspect-square overflow-hidden bg-navy-2"
            aria-label={`${g.label} — enlarge`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <span className="absolute inset-x-2 bottom-2 text-left text-[0.66rem] leading-tight font-light text-cream/90">
              {g.label}
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center bg-ink/96 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <img
            src={GALLERY[open].src}
            alt={GALLERY[open].alt}
            className="max-h-[78vh] w-full max-w-lg px-4 object-contain"
          />
          <div className="absolute inset-x-0 bottom-6 flex items-center justify-between gap-4 px-5">
            <span className="font-display text-[1.05rem] text-cream">{GALLERY[open].label}</span>
            <div className="flex items-center gap-2">
              <span className="text-[0.6rem] tracking-[0.16em] text-mist/60">
                {open + 1} / {GALLERY.length}
              </span>
              <button
                onClick={() => setOpen(null)}
                className="m-press flex h-10 w-10 items-center justify-center border border-gold/40 bg-gold/10 text-gold"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="1.4">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------- CTA band -------------------------------- */

export function MobileCta() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img
          src={img(31517344, 1200)}
          alt="Suits and shirts hanging on a rail"
          className="kenburns h-full w-full object-cover opacity-40"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/85 to-navy" />
      <div className="grain absolute inset-0" />

      <div className="relative px-5 py-14">
        <span className="text-[0.55rem] font-medium tracking-[0.2em] text-gold uppercase">
          Appointment &amp; Collection
        </span>
        <h2 className="mt-3 font-display text-[2rem] leading-[1.08] text-cream">
          Leave it today,{" "}
          <span className="italic text-gold-2">wear it tomorrow</span>.
        </h2>
        <p className="mt-3.5 text-[0.86rem] leading-relaxed font-light text-mist">
          Send a photo of the garment and we will confirm the scope and the delivery time on the
          same day.
        </p>

        <div className="mt-6 space-y-2.5">
          <a
            href={waLink(MSG.tailoring)}
            target="_blank"
            rel="noreferrer"
            className="m-press flex items-center justify-center gap-2.5 bg-gold px-5 py-4 text-[0.76rem] font-semibold tracking-[0.12em] text-ink uppercase"
          >
            <IconWhats className="h-[18px] w-[18px]" />
            Get in touch on WhatsApp
          </a>
          <a
            href={BUSINESS.phonePrimaryHref}
            className="m-press flex items-center justify-center gap-2.5 border border-cream/25 px-5 py-4 text-[0.76rem] font-semibold tracking-[0.12em] text-cream uppercase"
          >
            <IconPhone className="h-4 w-4 text-gold" />
            {BUSINESS.phonePrimary}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Testimonials ------------------------------ */

export function MobileTestimonials() {
  return (
    <section className="bg-[#f2efe8] px-5 py-12 text-navy">
      <Head
        no="07"
        label="Client Voices"
        title={
          <>
            Work that leaves the bench <span className="italic text-clay">speaks for itself</span>.
          </>
        }
      />

      <div className="no-scrollbar m-overscroll-x -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2">
        {TESTIMONIALS.map((t) => (
          <article
            key={t.name}
            className="w-[84%] shrink-0 snap-center border border-navy/12 bg-white/80 p-5"
          >
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: t.stars }).map((_, s) => (
                <svg key={s} viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                  <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95L12 2.6Z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-3 font-display text-[1.05rem] leading-relaxed text-navy/85 italic">
              {t.quote}
            </blockquote>
            <div className="mt-4 flex items-center gap-3 border-t border-navy/10 pt-3.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-[0.85rem] text-gold">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block text-[0.8rem] font-semibold text-navy">{t.name}</span>
                <span className="block text-[0.55rem] font-medium tracking-[0.14em] text-navy/45 uppercase">
                  {t.role}
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- FAQ ----------------------------------- */

export function MobileFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-ink-2 px-5 py-12">
      <Head
        no="08"
        label="Frequently Asked"
        title={
          <>
            The things you ask, <span className="italic text-gold-2">answered clearly</span>.
          </>
        }
      />

      <div className="border-t border-cream/10">
        {FAQ.map((f, i) => {
          const on = open === i;
          return (
            <div key={f.q} className="border-b border-cream/10">
              <button
                onClick={() => setOpen(on ? null : i)}
                className="m-press flex w-full items-start gap-3 py-4 text-left"
                aria-expanded={on}
              >
                <span
                  className={`mt-1 text-[0.62rem] font-medium tracking-[0.16em] transition-colors ${
                    on ? "text-gold" : "text-mist/45"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 font-display text-[1.1rem] leading-snug transition-colors ${
                    on ? "text-gold-2" : "text-cream"
                  }`}
                >
                  {f.q}
                </span>
                <span
                  className={`relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 ${
                    on ? "rotate-45 border-gold bg-gold text-ink" : "border-cream/25 text-cream"
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 5.5v13M5.5 12h13" />
                  </svg>
                </span>
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out"
                style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}
              >
                <div className="min-h-0">
                  <p className="pb-5 pl-8 text-[0.88rem] leading-[1.8] font-light text-mist">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------- Contact -------------------------------- */

const DAY_INDEX: Record<number, string> = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export function MobileContact() {
  const today = DAY_INDEX[new Date().getDay()];

  return (
    <section id="contact" className="scroll-mt-20 bg-ink px-5 py-12">
      <Head
        no="09"
        label="Location & Contact"
        title={
          <>
            Visit the atelier, or <span className="italic text-gold-2">write to us</span>.
          </>
        }
        sub="In Merkez, on Gölcük Street. Drop off your garment and collect it when it is ready."
      />

      {/* Big action cards */}
      <div className="reveal space-y-2.5">
        <a
          href={BUSINESS.phonePrimaryHref}
          className="m-press flex items-center gap-3.5 border border-gold/40 bg-gold/10 px-4 py-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-ink">
            <IconPhone className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[0.52rem] font-medium tracking-[0.18em] text-gold/80 uppercase">
              Call the atelier
            </span>
            <span className="mt-1 block font-mono text-[0.95rem] text-cream">
              {BUSINESS.phonePrimary}
            </span>
          </span>
        </a>

        <a
          href={waLink(MSG.general)}
          target="_blank"
          rel="noreferrer"
          className="m-press flex items-center gap-3.5 border border-[#1faa53]/45 bg-[#1faa53]/10 px-4 py-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#1faa53] text-white">
            <IconWhats className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[0.52rem] font-medium tracking-[0.18em] text-[#5fd697] uppercase">
              WhatsApp
            </span>
            <span className="mt-1 block text-[0.9rem] text-cream">Message us instantly</span>
          </span>
        </a>

        <a
          href={BUSINESS.mapDir}
          target="_blank"
          rel="noreferrer"
          className="m-press flex items-center gap-3.5 border border-cream/15 bg-navy/35 px-4 py-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-tan/40 text-tan">
            <IconPin className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[0.52rem] font-medium tracking-[0.18em] text-tan uppercase">
              Directions
            </span>
            <span className="mt-1 block text-[0.82rem] leading-snug font-light text-bone/85">
              {BUSINESS.addressShort}
            </span>
          </span>
          <IconArrow className="h-4 w-4 shrink-0 text-mist/50" />
        </a>
      </div>

      {/* Alternative line */}
      <a
        href={BUSINESS.phoneAltHref}
        className="m-press mt-2.5 flex items-center justify-between gap-3 border border-cream/12 px-4 py-3.5"
      >
        <span className="flex items-center gap-2.5">
          <IconPhone className="h-4 w-4 text-tan/70" />
          <span className="text-[0.68rem] font-medium tracking-[0.14em] text-mist/70 uppercase">
            Landline
          </span>
        </span>
        <span className="font-mono text-[0.85rem] text-cream">{BUSINESS.phoneAlt}</span>
      </a>

      {/* Map */}
      <div className="relative mt-5 h-64 overflow-hidden border border-cream/10">
        <iframe
          title="ARYA Tailoring & Dry Cleaning — Google Maps"
          src={BUSINESS.mapEmbed}
          className="absolute inset-0 h-full w-full grayscale-[0.35] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>

      {/* Hours */}
      <div className="mt-5 border border-cream/12 bg-navy/30 px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[0.52rem] font-medium tracking-[0.18em] text-gold/80 uppercase">
            <IconClock className="h-3.5 w-3.5" />
            Opening Hours
          </span>
          <span className="text-[0.55rem] font-medium tracking-[0.16em] text-mist/60 uppercase">
            Today: {today}
          </span>
        </div>
        <ul className="mt-3">
          {HOURS.map((h) => {
            const on = h.day === today;
            const closed = h.open === "Closed";
            return (
              <li
                key={h.day}
                className={`flex items-center justify-between gap-3 border-b border-cream/8 py-2.5 text-[0.82rem] ${
                  on ? "text-cream" : "text-mist"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      on ? (closed ? "bg-tan" : "bg-gold") : "bg-cream/15"
                    }`}
                  />
                  <span className={on ? "font-medium" : "font-light"}>{h.day}</span>
                </span>
                <span
                  className={`font-mono text-[0.72rem] ${
                    closed ? "text-tan" : on ? "text-gold" : "text-mist/80"
                  }`}
                >
                  {closed ? "Closed" : `${h.open} – ${h.close}`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Templates */}
      <div className="mt-6">
        <span className="text-[0.52rem] font-medium tracking-[0.18em] text-mist/70 uppercase">
          Ready-Made Message Templates
        </span>
        <div className="mt-3 space-y-2">
          {[
            { t: "Tailoring / Alterations", m: MSG.tailoring },
            { t: "Dry Cleaning", m: MSG.dryCleaning },
            { t: "Fitting Appointment", m: MSG.appointment },
          ].map((q) => (
            <a
              key={q.t}
              href={waLink(q.m)}
              target="_blank"
              rel="noreferrer"
              className="m-press flex items-center justify-between gap-3 border border-cream/12 bg-navy/30 px-4 py-3.5"
            >
              <span className="text-[0.85rem] font-medium tracking-wide text-cream">{q.t}</span>
              <IconWhats className="h-4 w-4 shrink-0 text-gold" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

export function MobileFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-navy px-5 pt-12 pb-6">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="font-display text-[2rem] tracking-[0.22em] text-cream">ARYA</span>
          <span className="h-px flex-1 bg-gold/35" />
        </div>
        <p className="mt-2 text-[0.52rem] font-medium tracking-[0.2em] text-mist/60 uppercase">
          Tailoring &amp; Dry Cleaning · Isparta
        </p>
        <p className="mt-5 text-[0.82rem] leading-relaxed font-light text-mist">
          Bespoke tailoring, alterations, precision dry cleaning and steam care. Since{" "}
          {BUSINESS.established}, the same measure of discipline and the same reliability on
          delivery.
        </p>

        <div className="mt-5 space-y-2 border-t border-cream/10 pt-5">
          <a
            href={BUSINESS.phonePrimaryHref}
            className="m-press flex items-center gap-3 text-[0.85rem] text-cream"
          >
            <IconPhone className="h-4 w-4 text-gold" />
            <span className="font-mono">{BUSINESS.phonePrimary}</span>
          </a>
          <a
            href={BUSINESS.phoneAltHref}
            className="m-press flex items-center gap-3 text-[0.85rem] text-mist"
          >
            <IconPhone className="h-4 w-4 text-tan/70" />
            <span className="font-mono">{BUSINESS.phoneAlt}</span>
          </a>
          <p className="flex items-start gap-3 text-[0.8rem] leading-relaxed text-mist">
            <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-tan" />
            {BUSINESS.address}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={BUSINESS.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="m-press flex h-11 w-11 items-center justify-center border border-cream/15 text-bone"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-[18px] w-[18px]">
              <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r=".9" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={BUSINESS.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="m-press flex h-11 w-11 items-center justify-center border border-cream/15 text-bone"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-[18px] w-[18px]">
              <path d="M14.8 21v-7.4h2.5l.4-2.9h-2.9V8.9c0-.8.2-1.4 1.4-1.4h1.6V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.1H8.2v2.9h3.1V21" />
            </svg>
          </a>
          <a
            href={waLink(MSG.general)}
            target="_blank"
            rel="noreferrer"
            className="m-press flex h-11 w-11 items-center justify-center bg-[#1faa53] text-white"
            aria-label="WhatsApp"
          >
            <IconWhats className="h-[18px] w-[18px]" />
          </a>
        </div>

        <div className="mt-7 border-t border-cream/10 pt-5 text-center">
          <p className="text-[0.65rem] font-light text-mist/60">
            © {new Date().getFullYear()} {BUSINESS.full}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="m-press mt-3 text-[0.62rem] font-medium tracking-[0.16em] text-mist uppercase"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
