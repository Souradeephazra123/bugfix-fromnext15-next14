import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get dynamic params
    const title = searchParams.get("title") || "Schapira CPA";
    const description =
      searchParams.get("description") || "Manufacturing Financial Specialists";
    const type = searchParams.get("type") || "website";

    // We'll use the default system font instead of trying to load custom fonts
    // This avoids the need for the Inter font files

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2A2A2A",
            position: "relative",
          }}
        >
          {/* Background elements */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "30%",
              height: "100%",
              backgroundColor: "#C9A54E",
              opacity: 0.8,
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0 80px",
              maxWidth: "70%",
              zIndex: 10,
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                SCHAPIRA CPA
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 64,
                fontWeight: "bold",
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: 20,
                position: "relative",
              }}
            >
              {title}
              <div
                style={{
                  position: "absolute",
                  bottom: -10,
                  left: 0,
                  width: 80,
                  height: 4,
                  backgroundColor: "#C9A54E",
                }}
              />
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: 32,
                color: "#FFFFFF",
                opacity: 0.9,
                maxWidth: 600,
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              position: "absolute",
              bottom: 30,
              left: 80,
              fontSize: 24,
              color: "#FFFFFF",
              opacity: 0.7,
            }}
          >
            schapiracpa.com
          </div>

          {/* Type badge */}
          {type === "article" && (
            <div
              style={{
                position: "absolute",
                top: 40,
                right: 40,
                backgroundColor: "#C9A54E",
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold",
                padding: "8px 16px",
                borderRadius: 20,
                zIndex: 20,
              }}
            >
              ARTICLE
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // We're not loading custom fonts anymore
      },
    );
  } catch (e) {
    console.log(`${e}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
