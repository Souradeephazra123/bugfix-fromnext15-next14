import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Import the sitemap structure
import { sitemap as sitemapData } from "@/lib/sitemap";

// Recursive function to flatten the sitemap structure
function flattenSitemap(
  node: any,
  basePath = "",
): { url: string; lastModified: Date }[] {
  const result: { url: string; lastModified: Date }[] = [];

  // Add the current node if it has a URL and is not restricted
  if (node.url && !node.restricted && node.status !== "planned") {
    result.push({
      url: `${basePath}${node.url}`,
      lastModified: new Date(),
    });
  }

  // Process children recursively
  if (node.children) {
    for (const [key, child] of Object.entries(node.children)) {
      result.push(...flattenSitemap(child, basePath));
    }
  }

  return result;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Start with the home node
  const flattenedSitemap = flattenSitemap(sitemapData.home, siteConfig.url);

  return flattenedSitemap;
}
