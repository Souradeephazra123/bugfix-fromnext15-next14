import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Growth Financing for Manufacturers | Equipment & Expansion Loans | Schapira CPA",
  description:
    "Secure optimal financing for manufacturing growth with Schapira CPA's financing services. Independent advocacy, multiple lender relationships, and integrated repayment planning.",
};

export default function GrowthFinancingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          Growth Financing for Manufacturers
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          No, we're not in financing. Yes, we do finance growth. We may have
          mentioned it, but at Schapira we invest in long-term relationships.
          That's even more important when it comes to helping you with growth
          financing: more money could mean more opportunity, or just more risk.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/consultation">Discuss Financing Options</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/success-stories">See Financing Success Stories</Link>
          </Button>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          All the capital you need. All in a way that serves you.
        </h2>
        <p className="text-gray-600 mb-6">
          In the financing market, brokers are happy to maximize their
          origination points. They see it as a one-time, transactional item, and
          may push their borrowers into more debt than is sensible.
        </p>
        <p className="text-gray-600">
          We take a different approach. Most of our clients don't need financing
          annually, so it isn't where we make our money. Instead, we offer this
          value-add service to master your business ambitions.
        </p>
      </div>

      {/* Three Key Differentiators */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Twice the Contacts</h3>
          <p className="text-gray-600 mb-4">
            We never represent any one lender. Our contacts with 21 banks ensure
            you only borrow from the one that offers the best loan for your
            needs.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Half the Headache</h3>
          <p className="text-gray-600 mb-4">
            With capped fees, comprehensive statements, and all bank
            communication handled by our team, funding is truly stress-free.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">None of the Risk</h3>
          <p className="text-gray-600 mb-4">
            We won't allow you to take on irresponsible debt, and build a clear
            plan to help you pay it off quickly, easily, and inline with your
            goals.
          </p>
        </Card>
      </div>

      {/* Case Study Highlights */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Financing Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-yellow-600 mb-2">$4M</div>
            <p className="text-gray-600">
              Financing procured for a packaging company's expansion
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-600 mb-2">38%</div>
            <p className="text-gray-600">
              Increase in production revenue after implementation
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-600 mb-2">1.6</div>
            <p className="text-gray-600">Years to full breakeven point</p>
          </div>
        </div>
      </div>

      {/* Financing Process */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Financing Process
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "1. Needs Assessment",
              description:
                "We begin by understanding your specific financing needs, whether for equipment purchases, facility expansion, working capital, or other growth initiatives.",
            },
            {
              title: "2. Financial Preparation",
              description:
                "Our team prepares comprehensive financial statements and projections that present your business in the most favorable light to potential lenders.",
            },
            {
              title: "3. Lender Matching",
              description:
                "We leverage our relationships with 21 banks and lending institutions to identify the best financing options for your specific situation.",
            },
            {
              title: "4. Application Management",
              description:
                "We handle the entire application process, preparing all required documentation and responding to lender inquiries on your behalf.",
            },
            {
              title: "5. Term Negotiation",
              description:
                "Our team negotiates with lenders to secure the most favorable terms possible, including interest rates, repayment schedules, and covenants.",
            },
            {
              title: "6. Closing Coordination",
              description:
                "We coordinate the closing process to ensure a smooth and timely funding experience with minimal disruption to your business.",
            },
            {
              title: "7. Repayment Planning",
              description:
                "After funding, we develop a detailed repayment plan that aligns with your cash flow and business objectives, ensuring the debt serves your growth rather than becoming a burden.",
            },
          ].map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Finance Your Growth?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss your financing needs and how we can help you secure the
          capital required to achieve your business objectives.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/consultation">Schedule a Financing Consultation</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources">Download Financing Guide</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
