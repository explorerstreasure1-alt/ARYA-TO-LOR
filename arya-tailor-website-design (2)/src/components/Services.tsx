import { useState, type MouseEvent } from "react";
import { SERVICES, waLink } from "../data/site";
import { useIsMobile } from "../lib/hooks";
import { IconArrow, IconWhats } from "./icons";

function ServiceGlyph({ i }: { i: number }) {
  const common = "h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110";
  if (i === 0)
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={common} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.4 3 12 6.6 15.6 3" />
        <path d="M8.4 3 5 4.6v16.2h14V4.6L15.6 3" />
        <path d="M12 6.6 8.8 20.8M12 6.6l3.2 14.2" />
      </svg>
    );
  if (i === 1)
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={common} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="18" r="2.6" />
        <circle cx="18.5" cy="18" r="2.6" />
        <path d="M7.4 16.2 17.8 3.4M16.6 16.2 6.2 3.4" />
      </svg>
    );
  if (i === 2)
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={common} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.2c3.2 3.9 5.4 6.9 5.4 9.6A5.4 5.4 0 0 1 12 18.2a5.4 5.4 0 0 1-5.4-5.4c0-2.7 2.2-5.7 5.4-9.6Z" />
        <path d="M9.4 13.6a2.7 2.7 0 0 0 2.6 2.6" />
        <path d="M4 21.2h16" strokeDasharray="2 2.4" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={common} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17.5h18l-2.2-4.2a3 3 0 0 0-2.6-1.6H9.4a3 3 0 0 0-2.6 1.6L3 17.5Z" />
      <path d="M11 8.6V6.2M14.6 8.2 15.8 5.4M7.6 8.4 6.4 5.6" />
      <path d="M5.5 20.8h13" strokeDasharray="2 2.2" />
    </svg>
  );
}

export default function Services() {
  const [open, setOpen] = useState<string | null>(SERVICES[0].id);
  const [hover, setHover] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile(1024);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-20 overflow-hidden border-t border-cream/10 bg-ink pt-12 pb-20 md:scroll-mt-24 md:pt-14 md:pb-28"
    >
      {/* ambiyans */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] animate-breathe rounded-full bg-gold/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-8%] h-[380px] w-[380px] rounded-full bg-navy-2/60 blur-[110px]" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-9">
        {/* Section heading */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-end lg:gap-12">
          <div className="min-w-0">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="label-mono text-gold">02 — Our Services</span>
            </div>
            <h2
              id="services-heading"
              className="reveal-mask mt-5 max-w-3xl font-display text-[clamp(2.3rem,5.6vw,4.6rem)] leading-[1.02] text-cream"
            >
              Four disciplines, one <span className="italic text-gold-2">standard</span>.
            </h2>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-mist lg:text-right">
            We run tailoring and textile care under one roof with the same rigour. Select a line to
            see the full scope, or write to us directly on WhatsApp.
          </p>
        </div>

        {/* Liste */}
        <div
          className="relative mt-10 border-t border-cream/10"
          onMouseMove={onMove}
          onMouseLeave={() => setHover(null)}
        >
          {SERVICES.map((s, i) => {
            const isOpen = open === s.id;
            return (
              <div
                key={s.id}
                className="reveal group relative border-b border-cream/10"
                style={{ transitionDelay: `${i * 70}ms` }}
                onMouseEnter={() => setHover(i)}
              >
                <span
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold via-tan to-transparent transition-transform duration-700 origin-left ${
                    isOpen || hover === i ? "scale-x-100" : "scale-x-0"
                  }`}
                />
                <button
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  className="flex w-full items-start gap-5 px-1 py-7 text-left transition-[padding,background-color] duration-500 md:gap-9 md:py-9 hover:bg-cream/[0.025] md:hover:pl-5"
                  aria-expanded={isOpen}
                >
                  <span className="mt-1 hidden font-mono text-[0.7rem] tracking-[0.2em] text-tan/70 md:block">
                    {s.no}
                  </span>

                  <ServiceGlyph i={i} />

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-display text-[1.6rem] leading-tight text-cream transition-colors duration-500 group-hover:text-gold-2 md:text-[2.4rem]">
                        {s.title}
                      </span>
                      <span className="label-mono text-[0.6rem] text-mist/55">{s.latin}</span>
                    </span>
                    <span className="mt-2.5 block max-w-2xl text-sm leading-relaxed font-light text-mist">
                      {s.desc}
                    </span>
                    <span className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="border border-gold/30 px-2.5 py-1 label-mono text-[0.55rem] text-gold/85">
                        {s.tag}
                      </span>
                      <span className="text-[0.68rem] tracking-wide text-mist/60">{s.meta}</span>
                    </span>
                  </span>

                  <span
                    className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-cream/20 text-cream transition-all duration-500 ${
                      isOpen ? "rotate-45 border-gold bg-gold text-ink" : "group-hover:border-gold/70 group-hover:text-gold"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5.5v13M5.5 12h13" />
                    </svg>
                  </span>
                </button>

                {/* Expandable panel */}
                <div
                  className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="min-h-0">
                    <div className="grid gap-8 px-1 pb-10 md:grid-cols-[1.15fr_0.85fr] md:pl-[4.6rem]">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm font-light text-bone/85">
                            <svg viewBox="0 0 20 8" className="mt-2 h-2 w-5 shrink-0 text-gold" aria-hidden="true">
                              <line x1="0" y1="4" x2="20" y2="4" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" />
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col justify-between gap-5 border-l border-cream/10 pl-6">
                        <p className="text-xs leading-relaxed text-mist">
                          Send a photo of the garment for advance information and a delivery time.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={waLink(s.message)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-gold px-4 py-2.5 text-[0.7rem] font-semibold tracking-[0.12em] text-ink uppercase transition-colors hover:bg-gold-2"
                          >
                            <IconWhats className="h-3.5 w-3.5" />
                            Write
                          </a>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 border border-cream/20 px-4 py-2.5 text-[0.7rem] font-semibold tracking-[0.12em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
                          >
                            Location
                            <IconArrow className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Cursor-following preview */}
          {!isMobile && hover !== null && (
            <div
              className="pointer-events-none absolute top-0 left-0 z-5 hidden lg:block"
              style={{
                transform: `translate3d(${pos.x + 28}px, ${pos.y - 100}px, 0)`,
                transition: "transform 320ms cubic-bezier(.16,1,.3,1), opacity 300ms",
              }}
            >
              <div className="relative h-[200px] w-[260px] overflow-hidden border border-gold/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,.9)]">
                <img
                  src={SERVICES[hover].image}
                  alt={SERVICES[hover].title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 label-mono text-[0.55rem] text-gold">
                  {SERVICES[hover].no} / {SERVICES[hover].latin}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


