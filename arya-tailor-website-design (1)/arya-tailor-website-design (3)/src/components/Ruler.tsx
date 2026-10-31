const TICKS = Array.from({ length: 120 });

/** Tailor ruler divider strip */
export default function Ruler({
  label = "Measure · Cut · Fit · Steam · Deliver",
}: {
  label?: string;
}) {
  return (
    <div className="relative overflow-hidden border-y border-cream/8 bg-ink">
      <div className="flex h-4 items-end gap-[3px] px-0.5 opacity-40">
        {TICKS.map((_, i) => (
          <span
            key={i}
            className="w-px shrink-0 bg-bone/70"
            style={{ height: i % 10 === 0 ? "100%" : i % 5 === 0 ? "62%" : "34%" }}
          />
        ))}
      </div>

      <div className="relative flex h-9 items-center justify-center">
        <span className="hairline pointer-events-none absolute inset-x-0 top-0" />
        <span className="label-mono relative bg-ink px-4 text-[0.55rem] text-mist/55">{label}</span>
        {/* travelling needle */}
        <span className="pointer-events-none absolute inset-y-0 left-0 w-0 animate-slide-x">
          <span className="absolute -top-1 left-0 h-[calc(100%+8px)] w-px bg-gold/70" />
          <span className="absolute -top-1.5 -left-[3px] h-1.5 w-1.5 rotate-45 bg-gold" />
        </span>
      </div>
    </div>
  );
}
