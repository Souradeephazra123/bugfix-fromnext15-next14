import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import './'
// import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MegaMenu from "@/components/layout/mega-menu";
import Footer from "@/components/layout/footer";
import { generateLocalBusinessSchema } from "@/lib/seo";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { AuthProvider } from "@/components/admin/auth-provider";
import { Chatbot } from "@/components/chatbot";
import { ToastProvider } from "@/hooks/use-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.schapiracpa.com"),
  title: {
    default: "Schapira CPA | Manufacturing Financial Specialists",
    template: "%s | Schapira CPA",
  },
  description:
    "Specialized financial services for manufacturing businesses including tax planning, R&D credits, cost accounting, and growth financing.",
  keywords: [
    "manufacturing CPA",
    "manufacturing accounting",
    "R&D tax credits",
    "manufacturing tax planning",
    "growth financing",
  ],
  authors: [{ name: "Schapira CPA" }],
  creator: "Schapira CPA",
  publisher: "Schapira CPA",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.schapiracpa.com",
    siteName: "Schapira CPA",
    title: "Schapira CPA | Manufacturing Financial Specialists",
    description:
      "Specialized financial services for manufacturing businesses including tax planning, R&D credits, cost accounting, and growth financing.",
    images: [
      {
        url: "https://www.schapiracpa.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Schapira CPA - Manufacturing Financial Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schapira CPA | Manufacturing Financial Specialists",
    description:
      "Specialized financial services for manufacturing businesses including tax planning, R&D credits, cost accounting, and growth financing.",
    images: ["https://www.schapiracpa.com/images/twitter-image.jpg"],
    creator: "@schapiracpa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate structured data for the organization
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Preconnect to essential domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            <ScrollToTop />
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <MegaMenu />
              <main>{children}</main>
              <Footer />
              <ExitIntentPopup />
              <Chatbot />
            </ThemeProvider>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
