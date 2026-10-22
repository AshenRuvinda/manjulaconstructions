// Central configuration for Manjula Constructions
export const company = {
  name: "Manjula Constructions",
  shortName: "Manjula Constructions",
  category: "Home Design & Construction",
  tagline: "Building Your Vision. Creating Your Future.",
  establishedNote: "Serving Negombo and Western Province",
  address: {
    line1: "No. 560/01, Daluwakotuwa",
    city: "Kochchikade, Negombo",
    country: "Sri Lanka",
    full: "No. 560/01, Daluwakotuwa, Kochchikade, Negombo, Sri Lanka",
    mapQuery: "Manjula construction, Daluwakotuwa, Kochchikade, Negombo, Sri Lanka",
    mapsUrl: "https://maps.app.goo.gl/qaVHocVvUXskoezn8",
    mapEmbedUrl: "https://maps.google.com/maps?q=7.2373444,79.8769673&hl=en&z=17&output=embed",
    coordinates: {
      latitude: 7.2373444,
      longitude: 79.8769673,
    },
  },
  phoneNumbers: [
    { display: "077 808 8058", raw: "+94778088058", tel: "tel:+94778088058" },
    { display: "076 323 1495", raw: "+94763231495", tel: "tel:+94763231495" },
    { display: "076 889 8293", raw: "+94768898293", tel: "tel:+94768898293" },
  ],
  // Confirmed primary WhatsApp contact number (international format without + or spaces for wa.me)
  // Configured with 076 889 8293 (prominently shown with WhatsApp/FB on promotional flyer)
  whatsapp: {
    number: "94768898293",
    display: "076 889 8293",
    defaultMessage: "Hello Manjula Constructions, I would like to inquire about your house design and construction services.",
  },
  email: "manjulaconstructions.support@gmail.com",
  socials: {
    // Only real links configured; placeholder for owner verification
    facebook: "https://facebook.com", // can be updated with official page
  },
  sellingPoints: [
    {
      title: "Accurate Cost Estimates",
      description: "Transparent pricing with no hidden costs. Fair rates based on realistic market specifications.",
      icon: "Calculator",
    },
    {
      title: "Reliable & Trustworthy Service",
      description: "Direct owner supervision, clear milestones, and dependable commitments on every building phase.",
      icon: "ShieldCheck",
    },
    {
      title: "Quality Materials Guaranteed",
      description: "We use tested cement, quality steel, treated timber, and premium grade fittings from verified suppliers.",
      icon: "Layers",
    },
    {
      title: "Experienced Workmanship",
      description: "Skilled masons, certified electricians, plumbers, and finishing specialists with hands-on expertise.",
      icon: "Hammer",
    },
  ],
};

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Our Process", href: "/process" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];
