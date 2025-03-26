// SEO utility functions for Schapira CPA website

/**
 * Generates structured data for a local business
 * @returns Local business structured data object
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Schapira CPA",
    description: "Specialized financial services for manufacturing businesses",
    url: "https://www.schapiracpa.com",
    logo: "https://www.schapiracpa.com/images/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/schapira-cpa",
      "https://twitter.com/schapiracpa",
      "https://www.facebook.com/schapiracpa",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Financial District, Suite 400",
      addressLocality: "Boston",
      addressRegion: "MA",
      postalCode: "02110",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.3601",
      longitude: "-71.0589",
    },
    telephone: "+15551234567",
    email: "info@schapiracpa.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "42.3601",
        longitude: "-71.0589",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manufacturing Financial Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manufacturing Tax Services",
            description: "Specialized tax strategies for manufacturers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "R&D Tax Credits",
            description: "Maximize credits for process improvements",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Financing",
            description: "Capital solutions for expansion",
          },
        },
      ],
    },
  };
}

/**
 * Generates structured data for a service
 * @param service Service details
 * @returns Service structured data object
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider || "Schapira CPA",
      url: "https://www.schapiracpa.com",
    },
    url: `https://www.schapiracpa.com${service.url}`,
    image: service.image || "https://www.schapiracpa.com/images/services.jpg",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Manufacturing Businesses",
    },
  };
}

/**
 * Generates structured data for an article or blog post
 * @param article Article details
 * @returns Article structured data object
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image:
      article.image || "https://www.schapiracpa.com/images/blog-default.jpg",
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author || "Schapira CPA Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Schapira CPA",
      logo: {
        "@type": "ImageObject",
        url: "https://www.schapiracpa.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.schapiracpa.com${article.url}`,
    },
  };
}

/**
 * Generates structured data for a FAQ page
 * @param faqs Array of FAQ items
 * @returns FAQ structured data object
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates canonical URL
 * @param path Page path
 * @returns Full canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const baseUrl = "https://www.schapiracpa.com";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Generates meta description with optimal length
 * @param description Raw description
 * @returns Optimized meta description
 */
export function optimizeMetaDescription(description: string): string {
  // Meta descriptions should be between 120-158 characters
  const maxLength = 158;

  if (description.length <= maxLength) {
    return description;
  }

  // Truncate at the last complete word before maxLength
  return (
    description.substring(0, description.lastIndexOf(" ", maxLength)) + "..."
  );
}
