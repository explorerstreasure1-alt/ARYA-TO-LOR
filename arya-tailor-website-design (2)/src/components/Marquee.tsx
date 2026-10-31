import { MARQUEE } from "../data/site";

export default function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-navy/60 py-4">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink z-2" />
      <div className="mask-fade-r flex w-max animate-marquee items-center gap-10 will-change-transform">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-[1.05rem] tracking-[0.16em] text-bone/70 uppercase md:text-[1.25rem]">
              {w}
            </span>
            <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 shrink-0 text-gold/70" aria-hidden="true">
              <path
                d="M8 0.8 9.7 6.3 15.2 8 9.7 9.7 8 15.2 6.3 9.7 0.8 8 6.3 6.3Z"
                fill="currentColor"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
