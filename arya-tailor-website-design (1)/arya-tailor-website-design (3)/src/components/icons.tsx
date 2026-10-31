import type { SVGProps } from "react";

type I = SVGProps<SVGSVGElement>;

const base = (p: I) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

/** Makas — kesim */
export const IconScissors = (p: I) => (
  <svg {...base(p)}>
    <circle cx="5.5" cy="18" r="2.6" />
    <circle cx="18.5" cy="18" r="2.6" />
    <path d="M7.4 16.2 17.8 3.4M16.6 16.2 6.2 3.4" />
  </svg>
);

/** Needle & thread — hand stitching */
export const IconNeedle = (p: I) => (
  <svg {...base(p)}>
    <path d="M20.5 3.5 9 15" />
    <path d="M8.2 15.8 6.4 17.6a2.5 2.5 0 0 0 3.5 3.5l1.8-1.8" />
    <path d="M17.8 3.2c1.3.3 2.7 1.4 3 2.7" />
    <path d="M4.5 4c2.4 1.2 4.4 3.2 5.6 5.6" strokeDasharray="2 2.4" />
  </svg>
);

/** Measuring tape — measurement */
export const IconTape = (p: I) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M12 3.5v2.2M20.5 12h-2.2M12 20.5v-2.2M3.5 12h2.2M18 6l-1.5 1.5M18 18l-1.5-1.5M6 18l1.5-1.5M6 6l1.5 1.5" />
  </svg>
);

/** Hanger — delivery */
export const IconHanger = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 7.5a2.4 2.4 0 1 1 2.4-2.4" />
    <path d="M12 7.5v2.2L3.6 15.4c-.9.6-.5 2 .6 2h15.6c1.1 0 1.5-1.4.6-2L12 9.7" />
    <path d="M3.6 19.6h16.8" />
  </svg>
);

/** Steam iron — pressing */
export const IconSteam = (p: I) => (
  <svg {...base(p)}>
    <path d="M3 17.5h18l-2.2-4.2a3 3 0 0 0-2.6-1.6H9.4a3 3 0 0 0-2.6 1.6L3 17.5Z" />
    <path d="M11 8.6V6.2M14.6 8.2 15.8 5.4M7.6 8.4 6.4 5.6" />
    <path d="M5.5 20.8h13" strokeDasharray="2 2.2" />
  </svg>
);

/** Jacket lapel — bespoke tailoring */
export const IconLapel = (p: I) => (
  <svg {...base(p)}>
    <path d="M8.4 3 12 6.6 15.6 3" />
    <path d="M8.4 3 5 4.6v16.2h14V4.6L15.6 3" />
    <path d="M12 6.6 8.8 20.8M12 6.6l3.2 14.2" />
    <circle cx="13.6" cy="13" r=".55" fill="currentColor" />
    <circle cx="14" cy="16.4" r=".55" fill="currentColor" />
  </svg>
);

/** Damla — temizlik */
export const IconDrop = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 3.2c3.2 3.9 5.4 6.9 5.4 9.6A5.4 5.4 0 0 1 12 18.2a5.4 5.4 0 0 1-5.4-5.4c0-2.7 2.2-5.7 5.4-9.6Z" />
    <path d="M9.4 13.6a2.7 2.7 0 0 0 2.6 2.6" />
    <path d="M4 21.2h16" strokeDasharray="2 2.4" />
  </svg>
);

export const IconWhats = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.16h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.55-3.7 8.23-8.24 8.23Zm4.52-6.17c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.6.19 1.13.16 1.55.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);

export const IconPhone = (p: I) => (
  <svg {...base(p)}>
    <path d="M6.4 3.5h3l1.5 3.7-2 1.4a11.4 11.4 0 0 0 5.5 5.5l1.4-2 3.7 1.5v3a1.9 1.9 0 0 1-2.1 1.9C10.6 17.9 6.1 13.4 4.5 5.6A1.9 1.9 0 0 1 6.4 3.5Z" />
  </svg>
);

export const IconPin = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10.3" r="2.6" />
  </svg>
);

export const IconClock = (p: I) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M12 6.9V12l3.4 2" />
  </svg>
);

export const IconArrow = (p: I) => (
  <svg {...base(p)}>
    <path d="M4 12h15.5M13.8 6.2 20 12l-6.2 5.8" />
  </svg>
);

export const IconPlus = (p: I) => (
  <svg {...base(p)}>
    <path d="M12 5.5v13M5.5 12h13" />
  </svg>
);

export const IconInstagram = (p: I) => (
  <svg {...base(p)}>
    <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconFacebook = (p: I) => (
  <svg {...base(p)}>
    <path d="M14.8 21v-7.4h2.5l.4-2.9h-2.9V8.9c0-.8.2-1.4 1.4-1.4h1.6V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.1H8.2v2.9h3.1V21" />
  </svg>
);

export const IconQuote = (p: I) => (
  <svg viewBox="0 0 32 24" fill="currentColor" {...p}>
    <path d="M0 24V13.4C0 5.9 4.2 1.2 11.6 0l1.2 3.4C8.5 4.7 6.2 7 6.2 10.2H12V24H0Zm19 0V13.4C19 5.9 23.2 1.2 30.6 0l1.2 3.4c-4.3 1.3-6.6 3.6-6.6 6.8H31V24H19Z" />
  </svg>
);

export const IconStar = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95L12 2.6Z" />
  </svg>
);

/** Decorative: stitch line */
export const StitchRule = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 8" preserveAspectRatio="none" aria-hidden="true">
    <line
      x1="0"
      y1="4"
      x2="400"
      y2="4"
      stroke="currentColor"
      strokeWidth="1.4"
      className="animate-stitch"
    />
  </svg>
);
