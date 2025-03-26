import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageHeader from "@/components/page-header";
import SectionHeading from "@/components/section-heading";
import ProcessStep from "@/components/process-step";
import Testimonial from "@/components/Testimonial";
import ContactCTA from "@/components/contact-cta";
import BreadcrumbNav from "@/components/navigation/breadcrumb-nav";

export const metadata: Metadata = {
  title: "Harvest Foods Success Story | Schapira CPA",
  description:
    "Learn how Schapira CPA helped Harvest Foods optimize their financial operations and achieve significant tax savings.",
  openGraph: {
    title: "Harvest Foods Success Story | Schapira CPA",
    description:
      "Learn how Schapira CPA helped Harvest Foods optimize their financial operations and achieve significant tax savings.",
    images: ["/images/success-stories/harvest-foods-hero.jpg"],
  },
};

export default function HarvestFoodsSuccessStory() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Harvest Foods", href: "/success-stories/harvest-foods" },
  ];

  return (
    <main className="flex-1">
      <PageHeader
        title="Harvest Foods Success Story"
        subtitle="How we helped a growing food manufacturer optimize operations and reduce tax burden"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.27.31%20-%20A%20clean%2C%20professional%20abstract%20image%20for%20Harvest%20Foods.%20Features%20geometric%20shapes%20and%20patterns%20symbolizing%20growth%2C%20freshness%2C%20and%20sustainability.%20The%20-t3VNUtHpHUKF3n9BIsTP1KRc1pm3fK.webp"
      />

      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2>Client Background</h2>
              <p>
                Harvest Foods is a mid-sized food manufacturing company
                specializing in organic snacks and prepared meals. With annual
                revenue of $12 million and 45 employees, they were experiencing
                rapid growth but facing challenges with cash flow management,
                tax planning, and financial reporting.
              </p>

              <h2>The Challenge</h2>
              <p>
                When Harvest Foods approached Schapira CPA, they were dealing
                with several financial challenges:
              </p>
              <ul>
                <li>
                  Inconsistent cash flow affecting their ability to plan for
                  expansion
                </li>
                <li>
                  Lack of clarity around available tax incentives for food
                  manufacturers
                </li>
                <li>
                  Inefficient financial reporting processes causing delays in
                  decision-making
                </li>
                <li>
                  Uncertainty about how to structure their finances for planned
                  growth
                </li>
              </ul>

              <h2>Our Approach</h2>
              <p>
                We implemented a comprehensive financial strategy tailored to
                Harvest Foods' specific needs in the food manufacturing
                industry:
              </p>
            </div>

            <div className="my-12">
              <ProcessStep
                number={1}
                title="Financial Assessment"
                description="We conducted a thorough analysis of their financial operations, identifying inefficiencies and opportunities for improvement."
              />
              <ProcessStep
                number={2}
                title="Cash Flow Optimization"
                description="We implemented new forecasting tools and inventory management practices to stabilize cash flow."
              />
              <ProcessStep
                number={3}
                title="Tax Strategy Development"
                description="We identified several industry-specific tax credits and deductions, including R&D credits for new product development."
              />
              <ProcessStep
                number={4}
                title="Financial Reporting Overhaul"
                description="We streamlined their reporting processes, providing management with real-time insights into financial performance."
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Results Delivered</h2>
              <p>
                Our partnership with Harvest Foods yielded significant results:
              </p>
              <ul>
                <li>30% improvement in cash flow predictability</li>
                <li>
                  $175,000 in tax savings through proper application of food
                  manufacturing credits
                </li>
                <li>50% reduction in time spent on financial reporting</li>
                <li>
                  Successful securing of $2 million in growth financing based on
                  improved financial position
                </li>
              </ul>

              <h2>Ongoing Partnership</h2>
              <p>
                Today, Schapira CPA continues to serve as Harvest Foods' trusted
                financial advisor. We provide quarterly business reviews,
                ongoing tax planning, and strategic guidance as they expand into
                new markets and product lines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4">Company Profile</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Industry:</span> Food
                  Manufacturing
                </div>
                <div>
                  <span className="font-medium">Size:</span> 45 employees
                </div>
                <div>
                  <span className="font-medium">Revenue:</span> $12 million
                </div>
                <div>
                  <span className="font-medium">Location:</span> Portland,
                  Oregon
                </div>
                <div>
                  <span className="font-medium">Services Provided:</span>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Tax Planning & Compliance</li>
                    <li>Cash Flow Management</li>
                    <li>Financial Reporting</li>
                    <li>Strategic Advisory</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.27.31%20-%20A%20clean%2C%20professional%20abstract%20image%20for%20Harvest%20Foods.%20Features%20geometric%20shapes%20and%20patterns%20symbolizing%20growth%2C%20freshness%2C%20and%20sustainability.%20The%20-t3VNUtHpHUKF3n9BIsTP1KRc1pm3fK.webp"
                alt="Harvest Foods production facility with geometric patterns symbolizing growth and sustainability"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Harvest Foods' state-of-the-art production facility
              </p>
            </div>

            <Testimonial
              quote="Schapira CPA transformed our financial operations. Their industry-specific knowledge helped us identify tax savings we didn't know existed, and their strategic guidance has been invaluable as we've grown."
              author="Sarah Johnson"
              title="CFO, Harvest Foods"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Related Success Stories"
            subtitle="See how we've helped other manufacturing clients"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.26.06%20-%20A%20clean%2C%20professional%20image%20for%20Precision%20Metal%20Products.%20The%20composition%20includes%20an%20abstract%2C%20geometric%20pattern%20suggesting%20precision%20and%20craftsmansh-SyAqXDsLsgCGmUGCAqx4nHILdP0QeY.webp"
                alt="Precision Metal Products success story featuring precision metal components"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Precision Metal Products
                </h3>
                <p className="text-gray-600 mb-4">
                  How we helped streamline operations and reduce tax liability
                </p>
                <Link
                  href="/success-stories/precision-metal-products"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Read story →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.26.09%20-%20A%20clean%2C%20professional%20image%20for%20Advanced%20Composites.%20Features%20abstract%20geometric%20patterns%20symbolizing%20innovation%2C%20modern%20technology%2C%20and%20advanced%20mate-s1RLyYbA7JKeFIKP2jbHayMmmrMlS7.webp"
                alt="Advanced Composites success story featuring innovative materials technology"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Advanced Composites
                </h3>
                <p className="text-gray-600 mb-4">
                  Helping a composites manufacturer scale while maintaining
                  profitability
                </p>
                <Link
                  href="/success-stories/advanced-composites"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Read story →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.54%20-%20Abstract%20geometric%20representation%20of%20results-oriented%20approach.%20Features%20dynamic%20upward-moving%20dark%20blue%20lines%20or%20shapes%2C%20gradually%20increasing%20in%20size-j0X7Mt7nzOU6LyYCczCrs5WDuV0OJn.webp"
                alt="Financial growth visualization with upward trending data in blue and gold"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Evergreen Packaging
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategic tax planning for a sustainable packaging company
                </p>
                <Link
                  href="/success-stories/evergreen-packaging"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Read story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactCTA
        title="Ready to achieve similar results for your business?"
        description="Contact us today to discuss how we can help your manufacturing company optimize operations and reduce tax burden."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </main>
  );
}
