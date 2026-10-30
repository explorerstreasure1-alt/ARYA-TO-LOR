import { useCallback, useEffect, useState } from "react";
import { GALLERY } from "../data/site";

const SPAN: Record<string, string> = {
  tall: "row-span-2",
  wide: "md:col-span-2",
  normal: "",
};

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback(
    (d: number) => {
      setOpen((o) => (o === null ? o : (o + d + GALLERY.length) % GALLERY.length));
    },
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 md:scroll-mt-24 md:py-32"
    >
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="label-mono text-gold">06 — From the Atelier</span>
            </div>
            <h2 className="reveal-mask mt-6 max-w-2xl font-display text-[clamp(2.1rem,4.8vw,3.9rem)] leading-[1.04] text-cream">
              Close up: <span className="italic text-gold-2">texture, stitch, steam</span>.
            </h2>
          </div>
          <p className="reveal max-w-xs text-xs leading-relaxed text-mist">
            Tap any frame to enlarge it, then browse with the arrow keys.
          </p>
        </div>

        <div className="reveal mt-14 grid auto-rows-[168px] grid-flow-row-dense grid-cols-2 gap-3 md:auto-rows-[210px] md:grid-cols-4 md:gap-4 lg:grid-cols-5">
          {GALLERY.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden bg-navy-2 text-left ${SPAN[g.span]}`}
              style={{ transitionDelay: `${i * 45}ms` }}
              aria-label={`${g.label} — enlarge`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              {/* corner brackets */}
              <span className="absolute top-3 left-3 h-4 w-4 border-t border-l border-gold/0 transition-all duration-500 group-hover:border-gold/80" />
              <span className="absolute right-3 bottom-3 h-4 w-4 border-r border-b border-gold/0 transition-all duration-500 group-hover:border-gold/80" />
              <span className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
                <span className="translate-y-2 font-display text-sm text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-base">
                  {g.label}
                </span>
                <span className="label-mono text-[0.5rem] text-gold/0 transition-colors duration-500 group-hover:text-gold/80">
                  0{i + 1}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center bg-ink/94 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[open].label}
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY[open].src}
              alt={GALLERY[open].alt}
              className="max-h-[76vh] w-full border border-gold/25 object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-xl text-cream">{GALLERY[open].label}</p>
                <p className="mt-1 text-xs text-mist">{GALLERY[open].alt}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="label-mono text-mist/60">
                  {open + 1} / {GALLERY.length}
                </span>
                <button
                  onClick={() => move(-1)}
                  className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
                  aria-label="Previous"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => move(1)}
                  className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
                  aria-label="Next"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setOpen(null)}
                  className="flex h-10 w-10 items-center justify-center border border-gold/40 bg-gold/10 text-gold transition-colors hover:bg-gold hover:text-ink"
                  aria-label="Close"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="1.4">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
