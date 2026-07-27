import { useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>;
}

const DEFAULT_TITLE =
  "Mercapeças | Autopeças e Peças para Caminhões Mercedes-Benz - Linha Pesada";
const DEFAULT_DESCRIPTION =
  "Especialista em autopeças e peças para caminhões Mercedes-Benz da linha pesada na Mercapeças Casa do Mercedes. Qualidade, pronta entrega e atendimento especializado em Uberlândia e região.";
const DEFAULT_CANONICAL = "https://mercapecas.com.br/";
const DEFAULT_OG_IMAGE = "https://mercapecas.com.br/img01-01.webp";

const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "@id": "https://mercapecas.com.br/#organization",
  name: "Mercapeças Casa do Mercedes",
  alternateName: "Mercapeças",
  url: "https://mercapecas.com.br/",
  logo: "https://mercapecas.com.br/assets/images/logo-mercapecas.png",
  image: "https://mercapecas.com.br/img01-01.webp",
  description:
    "Especialista em autopeças e peças para caminhões Mercedes-Benz da linha pesada na Mercapeças Casa do Mercedes. Qualidade, pronta entrega e atendimento especializado.",
  telephone: "+553432139266",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Arlindo Massaro, 395",
    addressLocality: "Uberlândia",
    addressRegion: "MG",
    postalCode: "38402-076",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-18.8953",
    longitude: "-48.2612",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/mercapecasltda/",
    "https://www.instagram.com/mercapecas_mercedes/",
  ],
};

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = DEFAULT_CANONICAL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  schema = defaultSchema,
}: SEOProps) {
  useEffect(() => {
    // Dynamic updates for document title
    document.title = title;

    // Helper function to update or create meta tags dynamically
    const updateMetaTag = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        if (selector.startsWith('meta[name="')) {
          const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
          if (name) element.setAttribute("name", name);
        } else if (selector.startsWith('meta[property="')) {
          const property = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
          if (property) element.setAttribute("property", property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    // Helper to update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Meta tags update
    updateMetaTag('meta[name="description"]', "content", description);
    updateMetaTag(
      'meta[name="robots"]',
      "content",
      noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // Open Graph
    updateMetaTag('meta[property="og:title"]', "content", title);
    updateMetaTag('meta[property="og:description"]', "content", description);
    updateMetaTag('meta[property="og:url"]', "content", canonicalUrl);
    updateMetaTag('meta[property="og:image"]', "content", ogImage);
    updateMetaTag('meta[property="og:image:secure_url"]', "content", ogImage);
    updateMetaTag('meta[property="og:type"]', "content", ogType);

    // Twitter Card
    updateMetaTag('meta[name="twitter:title"]', "content", title);
    updateMetaTag('meta[name="twitter:description"]', "content", description);
    updateMetaTag('meta[name="twitter:image"]', "content", ogImage);

    // JSON-LD Schema
    const scriptId = "json-ld-schema";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  }, [title, description, canonicalUrl, ogImage, ogType, noIndex, schema]);

  return null;
}
