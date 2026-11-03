// config.js — main site settings
// Photos are { src, alt }. Edit each alt so it describes what is actually in the photo.
const SITE_CONFIG = {
  schoolName: "Mmanuel Junior School",
  brandName: "Mmanuel",
  shortName: "Mmanuel Junior School",
  tagline: "Care. Respect. Responsibility.",
  description: "A community junior school in Gulu, Uganda, nurturing every child since 2012.",

  images: {
    hero:            { src: "assets/images/hero.jpg",             alt: "" },
    about:           { src: "assets/images/about.jpg",            alt: "Pupils and teachers at Mmanuel Junior School" },
    principal:       { src: "assets/images/principal.jpg",        alt: "The Head Teacher of Mmanuel Junior School" },
    campus:          { src: "assets/images/campus.jpg",           alt: "The Mmanuel Junior School campus" },
    childrenReading: { src: "assets/images/children-reading.jpg", alt: "Children reading together in class" },
    assembly:        { src: "assets/images/assembly.jpg",         alt: "Pupils gathered for school assembly" },
    sportsDay:       { src: "assets/images/sports-day.jpg",       alt: "Pupils taking part in sports day" },
    nursery:         { src: "assets/images/nursery.jpg",          alt: "" },
    lowerPrimary:    { src: "assets/images/lower-primary.jpg",    alt: "" },
    upperPrimary:    { src: "assets/images/upper-primary.jpg",    alt: "" }
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

  // cta: true renders the item as the highlighted button
  nav: [
    { label: "About",        href: "#about" },
    { label: "Stages",       href: "#stages" },
    { label: "Admissions",   href: "admissions.html" },
    { label: "Our promise",  href: "#promise" },
    { label: "Head Teacher", href: "#principal-message" },
    { label: "Gallery",      href: "#gallery" },
    { label: "Enquire",      href: "#contact", cta: true }
  ],

  // ---------- Admissions page (admissions.html) ----------
  // Everything below is a PLACEHOLDER. Edit it, then set draftNotice to "" to remove the banner.
  admissions: {
    draftNotice: "Draft: the details on this page are placeholders. Please confirm them with the school office before relying on them.",
    heading: "Admissions",
    intro: "We welcome new families throughout the year, subject to space in each class. Here is how to apply for a place at Mmanuel Junior School.",
    ctaPrimaryLabel: "Send an enquiry",
    ctaSecondaryLabel: "Ask on WhatsApp",

    steps: [
      { title: "Enquire",
        body: "Call, WhatsApp or send the enquiry form. Tell us your child's name, age and the class you are interested in." },
      { title: "Visit the school",
        body: "Come and meet our teachers and see the classrooms. Please call ahead so someone can welcome you." },
      { title: "Meet the Head Teacher",
        body: "We talk with you and your child so we can place them in the right class and answer your questions." },
      { title: "Receive your admission letter",
        body: "If a place is available, we will confirm it in writing and explain the next steps." },
      { title: "Complete registration",
        body: "Bring the documents below, pay the fees and collect the list of school requirements." }
    ],

    bring: [
      "Child's birth certificate or immunisation card",
      "Most recent school report (for children transferring from another school)",
      "Two passport-size photographs of the child",
      "A parent or guardian's contact details and ID"
    ],

    fees: {
      note: "Fees are per term. Please contact the office for the current fee structure.",
      rows: [
        { stage: "Nursery",       amount: "To be confirmed", notes: "" },
        { stage: "Lower Primary", amount: "To be confirmed", notes: "" },
        { stage: "Upper Primary", amount: "To be confirmed", notes: "" }
      ],
      included: ["Tuition", "Assessments and report cards"],
      extra:    ["School uniform", "Scholastic materials", "Meals (if offered)"]
    },

    dates: [
      { label: "Next term opens",    value: "To be confirmed" },
      { label: "Applications close", value: "To be confirmed" },
      { label: "Office hours",       value: "To be confirmed" }
    ],

    cta: {
      heading: "Ready to start?",
      body: "Send us an enquiry and we will reply with the next steps. You can also visit us. Please call ahead."
    }
  },

  hero: {
    headline: "Care. Respect. Responsibility.",
    subheadline: "A community junior school in Gulu, Uganda — nurturing every child since 2012.",
    ctaPrimary:   { label: "Enquire now",     href: "#contact" },
    ctaSecondary: { label: "Ask on WhatsApp" }   // link is built from contact.whatsapp
  },

  about: {
    badge: "About Mmanuel · Est. 2012",
    heading: "A school where every child is known",
    body: [
      "Mmanuel Junior School is a community school in Gulu, Uganda. Since 2012 we have provided quality, affordable education to hundreds of children across the region.",
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
      imageKey: "nursery" },
    { title: "Lower Primary", subtitle: "P1 – P3",  body: "Strong foundations in literacy, numeracy and good habits.",
      imageKey: "lowerPrimary" },
    { title: "Upper Primary", subtitle: "P4 – P7",  body: "Preparation for PLE and secondary school, with leadership opportunities.",
      imageKey: "upperPrimary" }
  ],

  promises: [
    { title: "Community school since 2012", body: "Serving families in Gulu for over a decade." },
    { title: "Qualified teaching staff",    body: "Every teacher is trained and committed to each child's progress." },
    { title: "Parent partnership",          body: "Regular meetings and open communication with every family." }
  ],

  principal: {
    heading: "A message from our Head Teacher",
    name: "Head Teacher",   // TODO: replace with the Head Teacher's real name
    quote: "Every child who walks through our gates deserves to be seen, heard and encouraged. At Mmanuel Junior School we build strong minds and kind hearts.",
    body: "We are proud to serve the Gulu community and to walk alongside every family in their child's education journey. You are always welcome to visit us."
  },

  // TODO: confirm against the Ministry of Education and Sports calendar and add the year.
  terms: [
    { name: "Term I",   dates: "February – April",     note: "Opening & mid-term assessments" },
    { name: "Term II",  dates: "May – August",         note: "Sports day & mid-year reports" },
    { name: "Term III", dates: "September – November", note: "End-of-year exams & PLE preparation" }
  ],

  // TODO: replace with real quotes (first name or initials, with permission).
  // Leave the list empty ([]) and the whole section hides itself.
  testimonials: [
    { quote: "The teachers know my children by name and care about their progress. I have seen them grow in confidence.", author: "Parent", role: "Gulu" },
    { quote: "Mmanuel Junior School gave my daughter a strong start. She is now doing well in secondary school.",       author: "Parent", role: "Gulu" }
  ],

  gallery: ["campus", "childrenReading", "assembly", "sportsDay"],

  footer: {
    about: "Mmanuel Junior School — Care, Respect, Responsibility.",
    columns: [
      { heading: "Our School", links: [
        { label: "About",        href: "#about" },
        { label: "Stages",       href: "#stages" },
        { label: "Our promise",  href: "#promise" },
        { label: "Head Teacher", href: "#principal-message" }
      ] },
      { heading: "Admissions", links: [
        { label: "How to apply", href: "admissions.html" },
        { label: "Fees",         href: "admissions.html#fees" },
        { label: "Enquire",    href: "#contact" },
        { label: "Term dates", href: "#term-dates" }
      ] },
      { heading: "Community", links: [
        { label: "Family stories", href: "#stories" },
        { label: "Gallery",        href: "#gallery" }
      ] }
    ],
    // {year} is replaced with the current year automatically
    legal: { copyright: "© 2012–{year} Mmanuel Junior School. All rights reserved." }
  }
};
