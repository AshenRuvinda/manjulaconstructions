import { company } from "@/data/company";

export const siteConfig = {
  siteName: company.name,
  title: "Manjula Constructions | Home Design & Construction Negombo",
  description: "Manjula Constructions provides complete house construction, tile fixing, ceiling work, plastering, electrical, plumbing, and finishing work in Kochchikade, Negombo, Sri Lanka.",
  url: "https://manjulaconstructions.com", // configure domain
  locale: "en_LK",
};

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = "/images/hero-modern-house.jpg",
  noIndex = false,
  pathname = "",
} = {}) {
  const fullTitle = title.includes("Manjula Constructions")
    ? title
    : `${title} | ${company.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteConfig.url}${pathname}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Manjula Constructions - Home Design & Construction Negombo",
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    metadataBase: new URL(siteConfig.url),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: company.name,
    image: `${siteConfig.url}/images/company-banner.jpg`,
    "@id": `${siteConfig.url}/#business`,
    url: siteConfig.url,
    telephone: company.phoneNumbers.map((p) => p.raw),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: "Kochchikade, Negombo",
      addressRegion: "Western Province",
      addressCountry: "LK",
    },
    areaServed: [
      { "@type": "City", name: "Negombo" },
      { "@type": "City", name: "Kochchikade" },
      { "@type": "City", name: "Katunayake" },
      { "@type": "City", name: "Marawila" },
      { "@type": "City", name: "Wennappuwa" },
      { "@type": "AdministrativeArea", name: "Western Province" },
    ],
  };
}
