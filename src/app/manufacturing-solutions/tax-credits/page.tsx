import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  DollarSign,
  FileText,
  TrendingUp,
} from "lucide-react";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Tax Credits & Incentives for Manufacturers | Schapira CPA",
  description:
    "Maximize available tax benefits with our specialized tax credit and incentive strategies for manufacturing businesses.",
  canonical: "/manufacturing-solutions/tax-credits",
  openGraph: {
    images: [
      {
        url: "/images/tax-credits-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tax Credits & Incentives for Manufacturers",
      },
    ],
  },
});

export default function TaxCreditsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tax Credits & Incentives for Manufacturers
            </h1>
            <p className="text-xl mb-8">
              Maximize available tax benefits with our specialized tax credit
              and incentive strategies for manufacturing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/resources/rd-calculators"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Try Our R&D Credit Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Benefits of Our Tax Credit & Incentive Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <DollarSign className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maximize Tax Savings</h3>
              <p className="text-gray-600">
                Our specialized approach identifies and captures all available
                tax credits and incentives, significantly reducing your tax
                burden and improving cash flow.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Calculator className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Industry-Specific Expertise
              </h3>
              <p className="text-gray-600">
                We understand the unique tax incentives available to
                manufacturers, including those for R&D, equipment investments,
                energy efficiency, and workforce development.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Comprehensive Documentation
              </h3>
              <p className="text-gray-600">
                Our thorough documentation process ensures your tax credit
                claims are well-supported and can withstand scrutiny in case of
                an audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Credits & Incentives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Manufacturing Tax Credits & Incentives We Specialize In
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <TrendingUp className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Research & Development (R&D) Tax Credits
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Many manufacturing process improvements and product developments
                qualify for valuable R&D tax credits. Our specialized approach
                has helped clients claim an average of $135K annually in R&D
                credits.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Process improvement initiatives
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  New product development
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Quality improvement efforts
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Manufacturing technology enhancements
                </li>
              </ul>
              <Link
                href="/services/rd-tax-credits"
                className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
              >
                Learn More About R&D Tax Credits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Section 179 & Bonus Depreciation
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Accelerate tax deductions for equipment purchases and facility
                improvements with these powerful incentives. We help you
                strategically time investments to maximize tax benefits.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Manufacturing equipment purchases
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Facility improvements and expansions
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Technology investments
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Strategic timing of capital expenditures
                </li>
              </ul>
              <Link
                href="/services/manufacturing-tax"
                className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
              >
                Learn More About Equipment Tax Incentives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Work Opportunity Tax Credit (WOTC)
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Receive tax credits for hiring individuals from targeted groups
                that have faced barriers to employment. Our screening and
                documentation process maximizes these credits.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Veterans
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Long-term unemployed individuals
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Vocational rehabilitation referrals
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Other qualifying groups
                </li>
              </ul>
              <Link
                href="/services/manufacturing-tax"
                className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
              >
                Learn More About WOTC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <Calculator className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Energy Efficiency Tax Incentives
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Reduce your tax liability while lowering energy costs through
                various energy efficiency incentives available to manufacturers.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Energy-efficient building improvements
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Solar and renewable energy investments
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Energy-efficient equipment upgrades
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Combined heat and power systems
                </li>
              </ul>
              <Link
                href="/services/manufacturing-tax"
                className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
              >
                Learn More About Energy Incentives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Tax Credit & Incentive Approach
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Comprehensive Assessment
                  </h3>
                  <p className="text-gray-600">
                    We conduct a thorough review of your manufacturing
                    operations, investments, and activities to identify all
                    potential tax credit and incentive opportunities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
                  <p className="text-gray-600">
                    We develop a customized tax incentive strategy that aligns
                    with your business goals and maximizes available benefits,
                    including timing recommendations for investments and
                    activities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Documentation & Substantiation
                  </h3>
                  <p className="text-gray-600">
                    We implement robust documentation processes to substantiate
                    your tax credit claims, including activity tracking, expense
                    allocation, and required certifications.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Implementation & Compliance
                  </h3>
                  <p className="text-gray-600">
                    We prepare all necessary tax forms and supporting
                    documentation to claim your credits and incentives, ensuring
                    full compliance with tax regulations and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Story
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                  <DollarSign className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Advanced Composites</h3>
                  <p className="text-gray-600">
                    Plastics & Composites Manufacturer
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-6 border-l-4 border-yellow-500 pl-4 py-2">
                "Schapira CPA's tax credit expertise helped us claim over
                $275,000 in R&D credits for our process improvement initiatives
                that we didn't realize qualified. Their documentation process
                made the entire experience smooth and worry-free."
              </blockquote>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">R&D Tax Credits Claimed:</span>
                  <span className="font-bold text-yellow-600">$275,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">
                    Additional Equipment Incentives:
                  </span>
                  <span className="font-bold text-yellow-600">$180,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Tax Savings:</span>
                  <span className="font-bold text-yellow-600">$455,000</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/success-stories/advanced-composites"
                  className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Tax Savings?
            </h2>
            <p className="text-xl mb-8">
              Schedule a consultation with our manufacturing tax specialists to
              discover how our tax credit and incentive strategies can benefit
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/contact"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  What manufacturing activities qualify for R&D tax credits?
                </h3>
                <p className="text-gray-600">
                  Many manufacturing activities qualify for R&D tax credits,
                  including process improvements, new product development,
                  quality improvements, automation initiatives, and testing new
                  materials or technologies. If your company is developing or
                  improving products, processes, or formulas, you may be
                  eligible for significant R&D tax credits.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  How far back can we claim tax credits we missed in previous
                  years?
                </h3>
                <p className="text-gray-600">
                  For federal tax credits, you can generally amend returns up to
                  three years from the original filing date. This means you may
                  be able to claim missed tax credits for the past three tax
                  years. Some state tax credits may have different lookback
                  periods. We can help you identify and claim these missed
                  opportunities.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  What documentation is needed to support tax credit claims?
                </h3>
                <p className="text-gray-600">
                  Documentation requirements vary by credit type, but generally
                  include records of qualifying activities, expenses, and their
                  connection to your business. For R&D credits, this includes
                  project documentation, payroll records for involved employees,
                  and expense tracking. For equipment incentives, purchase
                  documentation and placed-in-service dates are critical. We
                  help implement documentation systems that make this process
                  manageable.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  Are there state-specific tax incentives for manufacturers?
                </h3>
                <p className="text-gray-600">
                  Yes, many states offer additional tax incentives specifically
                  for manufacturers, including investment credits, employment
                  credits, training incentives, and property tax abatements.
                  These vary significantly by location. Our team stays current
                  on state-specific opportunities and can help you maximize both
                  federal and state tax incentives for your manufacturing
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
