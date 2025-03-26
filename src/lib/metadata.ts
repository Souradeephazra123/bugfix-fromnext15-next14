import type { Metadata } from "next";

type OpenGraphMetadata = {
  title: string;
  description: string;
  url?: string;
  siteName?: string;
  images?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
  locale?: string;
  type?: "website" | "article" | "profile";
};

type TwitterMetadata = {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
};

export type SEOMetadata = {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: Partial<OpenGraphMetadata>;
  twitter?: Partial<TwitterMetadata>;
};

const DEFAULT_SITE_NAME = "Schapira CPA - Manufacturing Financial Specialists";
const DEFAULT_SITE_URL = "https://schapiracpa.com";
const DEFAULT_LOCALE = "en_US";
const DEFAULT_TYPE = "website";
const DEFAULT_TWITTER_CARD = "summary_large_image";
const DEFAULT_TWITTER_SITE = "@SchapiraCPA";
const DEFAULT_TWITTER_CREATOR = "@SchapiraCPA";
const DEFAULT_OG_IMAGE = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Schapira CPA - Manufacturing Financial Specialists",
};

/**
 * Generates consistent metadata for SEO and social sharing
 */
export function generateMetadata({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: SEOMetadata): Metadata {
  // Ensure title doesn't have the site name appended twice
  const formattedTitle = title.includes(DEFAULT_SITE_NAME)
    ? title
    : `${title} | ${DEFAULT_SITE_NAME}`;

  // Construct the canonical URL
  const url = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${DEFAULT_SITE_URL}${canonical}`
    : DEFAULT_SITE_URL;

  // Default OG image if none provided
  const ogImages = openGraph?.images || [DEFAULT_OG_IMAGE];

  return {
    title,
    description,
    metadataBase: new URL(DEFAULT_SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: openGraph?.title || formattedTitle,
      description: openGraph?.description || description,
      url: openGraph?.url || url,
      siteName: openGraph?.siteName || DEFAULT_SITE_NAME,
      images: ogImages,
      locale: openGraph?.locale || DEFAULT_LOCALE,
      type: openGraph?.type || DEFAULT_TYPE,
    },
    twitter: {
      card: twitter?.card || DEFAULT_TWITTER_CARD,
      site: twitter?.site || DEFAULT_TWITTER_SITE,
      creator: twitter?.creator || DEFAULT_TWITTER_CREATOR,
      title: twitter?.title || formattedTitle,
      description: twitter?.description || description,
      images: twitter?.image ? [twitter.image] : ogImages.map((img) => img.url),
    },
    // Prevent default messaging like "Made with V0"
    other: {
      "og:image:width": "1200",
      "og:image:height": "630",
      "twitter:label1": "Industry",
      "twitter:data1": "Manufacturing Financial Services",
    },
  };
}
