import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Allow: /consultation
Allow: /services
Allow: /resources
Allow: /blog
Allow: /about
Allow: /contact

Sitemap: https://schapiracpa.com/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
