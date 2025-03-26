import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Get the source from the query string
  const { searchParams } = new URL(request.url);
  const source = searchParams.get("source") || "unknown";

  // In a real implementation, you would log this view to your analytics system
  // Example: Log to database, send to analytics API, etc.
  console.log(`Landing page view from source: ${source}`);
  console.log(`User agent: ${request.headers.get("user-agent")}`);
  console.log(`Referrer: ${request.headers.get("referer")}`);

  // Return a transparent 1x1 pixel
  return new NextResponse(
    Buffer.from(
      "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      "base64",
    ),
    {
      headers: {
        "Content-Type": "image/gif",
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    },
  );
}
