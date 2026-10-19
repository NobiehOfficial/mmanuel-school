// config.js — main site settings
const SITE_CONFIG = {
  schoolName: "Mmanuel Junior School 2012",
  shortName: "Mmanuel Junior School",
  tagline: "Care. Respect. Responsibility.",
  description: "A community junior school in Gulu, Uganda, nurturing every child since 2012.",

  images: {
    hero:            "assets/images/hero.jpg",
    about:           "assets/images/about.jpg",
    principal:       "assets/images/principal.jpg",
    campus:          "assets/images/campus.jpg",
    childrenReading: "assets/images/children-reading.jpg",
    assembly:        "assets/images/assembly.jpg",
    sportsDay:       "assets/images/sports-day.jpg",
    nursery:         "assets/images/nursery.jpg",
    lowerPrimary:    "assets/images/lower-primary.jpg",
    upperPrimary:    "assets/images/upper-primary.jpg"
  },

  contact: {
    phone: "+256 772 954 511",
    phoneHref: "tel:+256772954511",
    whatsapp: "256772954511",
    email: "mmanueljgsulu@gmail.com",
    address: {
      poBox: "P.O. Box 1285",
      city: "Gulu",
      country: "Uganda"
    }
  },

  nav: [
    { label: "About",     href: "#about" },
    { label: "Stages",    href: "#stages" },
    { label: "Awards",    href: "#awards" },
    { label: "Principal", href: "#message" },
    { label: "Gallery",   href: "#gallery" },
    { label: "Contact",   href: "#contact" }
  ],

  hero: {
    headline: "Care. Respect. Responsibility.",
    subheadline: "A community junior school in Gulu, Uganda — nurturing every child since 2012.",
    ctaPrimary:   { label: "Enquire now",     href: "#contact" },
    ctaSecondary: { label: "Ask on WhatsApp", href: "https://wa.me/256772954511" }
  },

  about: {
    badge: "About Mmanuel",
    heading: "A school where every child is known",
    body: [
      "Mmanuel Junior School 2012 is a community school in Gulu, Uganda. Since 2012 we have provided quality, affordable education to hundreds of children across the region.",
      "Our dedicated teachers create a warm, disciplined environment where every child is known by name and encouraged to grow — academically, socially and morally.",
      "We believe that care, respect and responsibility are the foundations of a happy and successful life. These values shape everything we do."
    ]
  },

  strengths: [
    { icon: "🎓", title: "Quality education",       body: "A broad, balanced curriculum delivered by qualified and caring teachers." },
    { icon: "🌍", title: "Rooted in our community", body: "We teach Ugandan values while preparing children for a changing world." },
    { icon: "📈", title: "Constant evaluation",     body: "Regular assessment and feedback keep parents informed of every child's progress." }
  ],

  stages: [
    { title: "Nursery",       subtitle: "Ages 3–5", body: "Play-based learning that builds confidence and curiosity.",
      color: "#e8eeff", imageKey: "nursery" },
    { title: "Lower Primary", subtitle: "P1 – P3",  body: "Strong foundations in literacy, numeracy and good habits.",
      color: "#f0fff6", imageKey: "lowerPrimary" },
    { title: "Upper Primary", subtitle: "P4 – P7",  body: "Preparation for PLE and secondary school, with leadership opportunities.",
      color: "#fff8d6", imageKey: "upperPrimary" }
  ],

  awards: [
    { title: "Community school since 2012", body: "Serving families in Gulu for over a decade." },
    { title: "Qualified teaching staff",    body: "Every teacher is trained and committed to each child's progress." },
    { title: "Parent partnership",          body: "Regular meetings and open communication with every family." }
  ],

  principal: {
    heading: "A message from our Head Teacher",
    name: "Head Teacher",
    quote: "Every child who walks through our gates deserves to be seen, heard and encouraged. At Mmanuel Junior School we build strong minds and kind hearts.",
    body: "We are proud to serve the Gulu community and to walk alongside every family in their child's education journey. You are always welcome to visit us."
  },

  terms: [
    { name: "Term I",   dates: "February – April",     note: "Opening & mid-term assessments" },
    { name: "Term II",  dates: "May – August",         note: "Sports day & mid-year reports" },
    { name: "Term III", dates: "September – November", note: "End-of-year exams & PLE preparation" }
  ],

  testimonials: [
    { quote: "The teachers know my children by name and care about their progress. I have seen them grow in confidence.", author: "Parent", role: "Gulu" },
    { quote: "Mmanuel Junior School gave my daughter a strong start. She is now doing well in secondary school.",       author: "Parent", role: "Gulu" }
  ],

  gallery: ["campus", "childrenReading", "assembly", "sportsDay"],

  footer: {
    about: "Mmanuel Junior School 2012 — Care, Respect, Responsibility.",
    columns: [
      { heading: "Our School", links: ["About", "Stages", "Awards", "Principal"] },
      { heading: "Admissions",  links: ["Enquire", "Term Dates", "Fees", "Contact"] },
      { heading: "Community",   links: ["Parents", "Events", "News", "Gallery"] }
    ],
    legal: { copyright: "© Mmanuel Junior School 2012. All rights reserved." }
  }
};