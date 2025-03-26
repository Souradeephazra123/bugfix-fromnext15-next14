import type React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactCTA } from "@/components/contact-cta";
import { BreadcrumbNav } from "@/components/navigation/breadcrumb-nav";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  headerImage?: string;
  breadcrumbs?: { label: string; href: string }[];
  children: React.ReactNode;
  showContactCTA?: boolean;
}

export function generateMetadata({ title }: { title: string }): Metadata {
  return {
    title: `${title} | Schapira CPA`,
    description: `Learn more about ${title} services from Schapira CPA.`,
  };
}

export default function PageTemplate({
  title,
  subtitle,
  headerImage = "/images/header-default.jpg",
  breadcrumbs,
  children,
  showContactCTA = true,
}: PageTemplateProps) {
  return (
    <div className="min-h-screen">
      {breadcrumbs && <BreadcrumbNav items={breadcrumbs} />}

      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={headerImage}
      />

      <main className="container mx-auto px-4 py-12">{children}</main>

      {showContactCTA && <ContactCTA />}
    </div>
  );
}
