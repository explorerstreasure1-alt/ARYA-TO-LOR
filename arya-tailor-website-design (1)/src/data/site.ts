/* ------------------------------------------------------------------
   ARYA Tailoring & Dry Cleaning — content source
------------------------------------------------------------------ */

const img = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const BUSINESS = {
  name: "ARYA",
  full: "ARYA Tailoring & Dry Cleaning",
  slogan: "Italian Craft, Flawless Finish.",
  sub: "Luxury tailoring and dry cleaning standards in Isparta.",
  address: "Pirimehmet, Gölcük Cd. No:3, 32100 Merkez / Isparta, Türkiye",
  addressShort: "Pirimehmet, Gölcük Cd. No:3 — Merkez / Isparta",
  city: "Isparta",
  phonePrimary: "+90 552 267 81 92",
  phonePrimaryHref: "tel:+905522678192",
  phonePrimaryRaw: "+905522678192",
  phoneAlt: "+90 555 182 37 76",
  phoneAltHref: "tel:+905551823776",
  whatsappNumber: "905522678192",
  established: "2011",
  mapQuery: "Pirimehmet, Gölcük Cd. No:3, 32100 Isparta Merkez",
  mapDir:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Pirimehmet, Gölcük Cd. No:3, 32100 Merkez/Isparta"),
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Pirimehmet, Gölcük Cd. No:3, 32100 Merkez/Isparta") +
    "&hl=en&z=16&output=embed",
  socials: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
};

export const waLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const MSG = {
  tailoring:
    "Hello ARYA Tailoring, I would like information about garment alterations / bespoke tailoring and to book an appointment.",
  dryCleaning:
    "Hello, I would like information about your dry cleaning service and delivery details.",
  general: "Hello ARYA, I would like information about your services.",
  appointment: "Hello ARYA Tailoring, I would like to book a fitting appointment.",
};

/* ---------------------------- Hero scenes ---------------------------- */

export type Scene = {
  id: string;
  roman: string;
  label: string;
  caption: string;
  src: string;
  poster: string;
};

export const SCENES: Scene[] = [
  {
    id: "measure",
    roman: "I",
    label: "Chalk & Measure",
    caption: "The first line drawn on the cloth — the honesty of a measurement.",
    src: "https://videos.pexels.com/video-files/6459917/6459917-hd_2048_864_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/6459917/buttons-chalk-clothing-fitting-6459917.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "cut",
    roman: "II",
    label: "The Cut",
    caption: "A sharp blade travelling across the cloth in a single breath.",
    src: "https://videos.pexels.com/video-files/6424089/6424089-hd_1920_1080_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/6424089/pexels-photo-6424089.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "stitch",
    roman: "III",
    label: "Hand Stitch",
    caption: "The finishing hand stitch at the lapel — the signature of the craft.",
    src: "https://videos.pexels.com/video-files/39984010/17063216_1080_1920_30fps.mp4",
    poster:
      "https://images.pexels.com/videos/39984010/pexels-photo-39984010.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "steam",
    roman: "IV",
    label: "Steam & Care",
    caption: "After the steam, that final flawless fall of the garment.",
    src: "https://videos.pexels.com/video-files/10558375/10558375-uhd_4096_2160_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/10558375/abstract-adult-art-bed-10558375.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

/* ------------------------------ Services ----------------------------- */

export type Service = {
  id: string;
  no: string;
  title: string;
  latin: string;
  tag: string;
  desc: string;
  bullets: string[];
  image: string;
  message: string;
  meta: string;
};

export const SERVICES: Service[] = [
  {
    id: "bespoke",
    no: "01",
    title: "Bespoke Tailoring & Fittings",
    latin: "Custom Tailoring",
    tag: "Sartoria",
    desc: "Italian-cut suits, jackets, waistcoats and occasion wear cut to your body. From first measurement to the final fitting, one cutter's hands do the work.",
    bullets: [
      "Full measurement & body analysis",
      "Wool, cashmere and linen selection",
      "Two-stage fitting (half-baste & final)",
      "Hand-finished lapel, buttonhole and sleeve head",
    ],
    image: img(6764919, 1000),
    message: MSG.tailoring,
    meta: "Fitting-based · By appointment",
  },
  {
    id: "alterations",
    no: "02",
    title: "Alterations & Resizing",
    latin: "Alterations",
    tag: "Riparazione",
    desc: "Hem tapering, waist suppression, sleeve shortening, shoulder adjustment, lining replacement and full garment revision. We rebuild your favourite pieces around you.",
    bullets: [
      "Hem shortening, tapered & cuffed trousers",
      "Waist suppression / letting out, zips & buttons",
      "Sleeve shortening, shoulder and lapel correction",
      "Lining replacement, bridal & evening wear revision",
    ],
    image: img(6765648, 1000),
    message: MSG.tailoring,
    meta: "Fast turnaround · Same week",
  },
  {
    id: "dry-cleaning",
    no: "03",
    title: "Precision Dry Cleaning",
    latin: "Dry Cleaning",
    tag: "Lavanderia",
    desc: "Deep cleaning with eco-conscious solvents and advanced machinery that preserves the hand, the colour and the form of every fabric.",
    bullets: [
      "Suits, jackets, coats and evening wear",
      "Quilts, duvets, curtains and carpet care",
      "Leather, suede and fur programmes",
      "Stain pre-analysis and spot treatment",
    ],
    image: img(30005364, 1000),
    message: MSG.dryCleaning,
    meta: "Eco solvents · Stain pre-analysis",
  },
  {
    id: "pressing",
    no: "04",
    title: "Pressing & Care",
    latin: "Pressing & Care",
    tag: "Stireria",
    desc: "Industrial steam pressing returns garments to their first-day shape — the drape recovers, the surface brightens, the stitching stays protected.",
    bullets: [
      "Industrial steam press & hand ironing",
      "Shirt form pressing, sleeve & collar correction",
      "Heat and moisture tuned to each fabric",
      "Breathable protective packaging on delivery",
    ],
    image:
      "https://images.pexels.com/videos/36302139/indian-iron-ironing-press-36302139.jpeg?auto=compress&cs=tinysrgb&w=1000",
    message: MSG.dryCleaning,
    meta: "Form press · Protective packaging",
  },
];

/* --------------------------- The craft process -------------------------- */

export const PROCESS = [
  {
    no: "I",
    title: "Consultation & Listening",
    text: "We study the garment, listen to how you wear it and what you expect. Every job starts with a conversation.",
  },
  {
    no: "II",
    title: "Measurement & Chalk",
    text: "Measurements are taken to the millimetre and drawn in chalk on the cloth. No margin for error — only room for craft.",
  },
  {
    no: "III",
    title: "Cutting & Stitching",
    text: "The cut is made in one pass; structural seams run on the machine, everything visible is completed by hand.",
  },
  {
    no: "IV",
    title: "Fitting & Refinement",
    text: "During the fitting we check the drape, the shoulder line and the freedom of the sleeve — and revise where needed.",
  },
  {
    no: "V",
    title: "Steam & Delivery",
    text: "Final steam, form pressing and protective packaging. You are notified the moment your garment is ready.",
  },
];

/* -------------------------- Fabric care guide -------------------------- */

export const FABRICS = [
  {
    key: "wool",
    name: "Wool",
    latin: "Lana",
    care: "High heat and frequent washing make wool fibres coarse. One or two professional cleans per season plus airing between wears is enough.",
    tips: ["1–2 cleans per season", "Wide-shouldered hangers", "Steam to reset shape"],
    image: img(6764922, 900),
  },
  {
    key: "cashmere",
    name: "Cashmere",
    latin: "Cashmere",
    care: "The most delicate fibre there is. Lift surface fuzz with a soft brush and leave the cleaning to professional hands.",
    tips: ["Soft brush only", "Store folded", "Moth protection"],
    image: img(6766235, 900),
  },
  {
    key: "silk",
    name: "Silk",
    latin: "Seta",
    care: "Water marks, direct heat kills the shine. We work with low-temperature steam and point-by-point stain analysis.",
    tips: ["Point stain analysis", "Low-temp steam", "Dry in shade"],
    image: img(35150404, 900),
  },
  {
    key: "linen",
    name: "Linen",
    latin: "Lino",
    care: "Creasing is part of its character, yet the balance is still set with a damp press. Light shades are monitored for yellowing.",
    tips: ["Damp press", "Colour separation", "Avoid frequent washing"],
    image: img(6766365, 900),
  },
  {
    key: "leather",
    name: "Leather & Suede",
    latin: "Pelle",
    care: "Water dries the fibre out. A dedicated solvent and nourishing treatment restores the colour and keeps the leather supple.",
    tips: ["Specialised solvent", "Nourishing care", "Stain removal"],
    image: img(6660959, 900),
  },
];

/* -------------------------------- Gallery ------------------------------- */

export const GALLERY = [
  { src: img(6764990, 1000), alt: "Unfinished hand stitching on a jacket lapel", label: "Lapel hand stitch", span: "tall" },
  { src: img(6765065, 1000), alt: "Chalk outline drawn on a suit jacket", label: "Pattern & chalk", span: "normal" },
  { src: img(4614250, 1000), alt: "Sewing machine and measuring tape in the workshop", label: "The workbench", span: "normal" },
  { src: img(29686261, 1000), alt: "Checked shirt cuff with a black button", label: "Cuff detail", span: "tall" },
  { src: img(31492553, 1000), alt: "Classic men's suits hanging on a rail", label: "Suit rail", span: "wide" },
  { src: img(7147680, 1000), alt: "A tailor taking measurements with a tape", label: "Moment of measure", span: "normal" },
  { src: img(965632, 1000), alt: "Shirts hanging on hangers", label: "Shirt pressing", span: "normal" },
  { src: img(6461323, 1000), alt: "Dress form and sewing machine", label: "Fitting form", span: "tall" },
  { src: img(4622418, 1000), alt: "A tailor cutting fabric with scissors", label: "The cut", span: "normal" },
  { src: img(29569640, 1000), alt: "Beige suit with blue tie on a wooden hanger", label: "Ready to wear", span: "wide" },
];

/* ------------------------------ Testimonials ---------------------------- */

export const TESTIMONIALS = [
  {
    quote:
      "For years nobody had managed the shoulder of the jacket I owned. After ARYA I barely recognised it — the way it sits on the body had completely changed.",
    name: "Mehmet A.",
    role: "Suit alterations",
    stars: 5,
  },
  {
    quote:
      "The suit I had made for my wedding came out exactly as I imagined it. From fabric selection to the final fitting, I was informed at every step.",
    name: "Emre K.",
    role: "Bespoke tailoring",
    stars: 5,
  },
  {
    quote:
      "I had given up hope on a stain in an ivory silk blouse. It came back clean with the texture untouched. Now every delicate piece in my wardrobe comes here.",
    name: "Zeynep T.",
    role: "Precision dry cleaning",
    stars: 5,
  },
  {
    quote:
      "My shirts come back looking as if they just left the shop. They are ready at the promised hour on collection day — that reliability is worth a great deal to me.",
    name: "Hakan Y.",
    role: "Pressing & care",
    stars: 5,
  },
];

/* --------------------------------- FAQ --------------------------------- */

export const FAQ = [
  {
    q: "Will dry cleaning damage my clothes?",
    a: "No. Every piece is checked on intake for fabric type, lining structure and stain condition. Wool, silk, cashmere, leather and suede are each processed on their own programme; if a piece is not suitable we contact you before any treatment begins.",
  },
  {
    q: "Do I need an appointment for alterations?",
    a: "Walk-ins are welcome, but for work that requires a fitting — shoulder adjustments, evening wear, bridal dresses — an appointment by WhatsApp or phone removes the waiting time entirely.",
  },
  {
    q: "How does the bespoke process work?",
    a: "We begin by choosing the model and cloth, then take your measurements. Once the pattern is cut there is a half-baste fitting; the final fitting follows, after which the hand-finished details are completed and the garment is steamed, pressed and delivered.",
  },
  {
    q: "Which items do you accept?",
    a: "Suits, jackets, shirts, trousers, skirts, evening wear, bridal dresses, coats, leather and suede, curtains, quilts, duvets and carpets. If you are unsure about a piece, send a photo and we will advise you in advance.",
  },
  {
    q: "What happens with stubborn stains?",
    a: "Stains are analysed point by point first. If a mark cannot be removed entirely — pigment stains in particular — you are told before treatment, and no risky procedure is carried out without your approval.",
  },
  {
    q: "Can I get a price estimate?",
    a: "Prices depend on fabric, the scope of the work and the condition of the item. Send a photo of your garment to our WhatsApp line and we will come back with a clear figure and delivery time the same day.",
  },
];

/* ------------------------------- Statistics ----------------------------- */

export const STATS = [
  { value: 14, suffix: "+", label: "Years of craft experience" },
  { value: 9800, suffix: "+", label: "Garments delivered" },
  { value: 26, suffix: "", label: "Measurement points per suit" },
  { value: 100, suffix: "%", label: "Hand-finished detail checked" },
];

export const MARQUEE = [
  "Italian Sartoria",
  "Hand Stitching",
  "Precision Dry Cleaning",
  "Bespoke Tailoring",
  "Steam Pressing",
  "Alterations & Revision",
  "Leather & Suede Care",
  "Fittings",
];

export const HOURS = [
  { day: "Monday", open: "09:00", close: "19:30" },
  { day: "Tuesday", open: "09:00", close: "19:30" },
  { day: "Wednesday", open: "09:00", close: "19:30" },
  { day: "Thursday", open: "09:00", close: "19:30" },
  { day: "Friday", open: "09:00", close: "19:30" },
  { day: "Saturday", open: "09:30", close: "19:00" },
  { day: "Sunday", open: "Closed", close: "" },
];
