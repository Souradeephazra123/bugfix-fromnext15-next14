import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { generateMetadata } from "@/lib/metadata";
import { CheckCircle2 } from "lucide-react";

export const metadata = generateMetadata({
  title: "Manufacturing Financial Solutions | CPA Services for Manufacturers",
  description:
    "Specialized accounting and financial services for manufacturers. Optimize operations, increase profits, and secure growth financing with Schapira CPA's manufacturing expertise.",
});

export default function ManufacturingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Manufacturing Financial Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Over the past 10 years, we've proven it: While we serve 11 sectors,
            our services move the needle farthest for manufacturing clients. Our
            specialized approach addresses the unique financial challenges
            manufacturers face in today's competitive landscape.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Schedule a Manufacturing Consultation
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          The Manufacturer's Accounting Partner
        </h2>
        <p className="text-lg mb-6">
          In manufacturing, a penny saved truly is a penny earned. The thin
          margins and capital-intensive nature of manufacturing businesses
          require specialized financial expertise that goes beyond traditional
          accounting.
        </p>
        <p className="text-lg mb-6">
          At Schapira CPA, we've developed deep expertise in manufacturing
          finance, helping our clients find hidden dollars, optimize operations,
          and secure growth capital with favorable terms.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            Our manufacturing clients consistently achieve:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Increased profit margins without raising prices</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Optimized balance between human and machine capital</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Improved cash flow and working capital management</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Strategic growth financing with clear payback plans</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Enhanced competitive position against domestic and international
                competitors
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Specialized Financial Services for Manufacturers
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Finding Hidden Dollars
            </h3>
            <p>
              We identify overlooked opportunities in the tough penny business
              of manufacturing through detailed cost analysis and process
              optimization.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Optimizing Human & Machine Balance
            </h3>
            <p>
              Our capital investment analyses help you determine the perfect
              equilibrium between labor costs and automation, ensuring maximum
              ROI on equipment purchases.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Shift Optimization</h3>
            <p>
              We help redraft shifts to maximize yield per payroll hour, often
              finding significant savings without disrupting production.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Idle Time Monetization
            </h3>
            <p>
              Our specialists identify ways to recapture lost revenues by
              monetizing idle hours and equipment downtime.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Capital Investment Analysis
            </h3>
            <p>
              We run comprehensive cost analyses to inform capital investment
              decisions, ensuring every dollar spent generates maximum return.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Automation Guidance</h3>
            <p>
              We work with your automation vendors to heal inefficiencies and
              ensure new technology investments deliver promised results.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
            <h3 className="text-xl font-semibold mb-3">Growth Financing</h3>
            <p>
              We help procure growth financing with favorable terms, plus
              develop sensible payoff strategies that align with your cash flow.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="mb-16 bg-slate-50 p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          The ProFit™ Method for Manufacturers
        </h2>
        <p className="text-lg mb-6">
          Our proprietary ProFit™ Method addresses the three critical areas of
          manufacturing financial health:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              1. The Strategies to Save
            </h3>
            <p className="mb-3">
              We conduct a comprehensive analysis of your manufacturing
              operations to identify cost-saving opportunities:
            </p>
            <ul className="grid md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Production process efficiency</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Labor utilization optimization</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Energy and resource consumption</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Inventory management</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Supply chain optimization</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Tax planning and incentives</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              2. The Guidance to Profit
            </h3>
            <p className="mb-3">
              We help you leverage existing resources and expand capabilities to
              generate more revenue:
            </p>
            <ul className="grid md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Pricing strategy optimization</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Product mix analysis</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Capacity utilization improvement</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Market expansion opportunities</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Value-added service development</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Customer profitability analysis</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              3. The Financing to Grow
            </h3>
            <p className="mb-3">
              We help you access growth capital and develop a sensible payback
              plan:
            </p>
            <ul className="grid md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Equipment financing options</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Facility expansion funding</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Working capital solutions</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>SBA loan qualification</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Bank relationship management</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                <span>Cash flow forecasting and management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study Highlights Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Manufacturing Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Plastics Manufacturer
            </h3>
            <p className="mb-4">
              By analyzing shift patterns and machine warm-up requirements, we
              helped a plastics manufacturer save 1,176+ payroll hours annually
              while increasing production by 624+ hours—all without adding a
              night shift.
            </p>
            <Link
              href="/success-stories/precision-metal-products"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read case study →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Domestic Manufacturer
            </h3>
            <p className="mb-4">
              We guided a domestic manufacturer to reduce human capital overhead
              by 55% while increasing take-home profits by 2x through strategic
              automation and SBA financing.
            </p>
            <Link
              href="/success-stories/advanced-composites"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read case study →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Primary & Secondary Packager
            </h3>
            <p className="mb-4">
              We helped a packaging company secure $4 million in financing for
              expansion, resulting in a 38% increase in production revenue with
              a 1.6-year breakeven point.
            </p>
            <Link
              href="/success-stories/harvest-foods"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read case study →
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/success-stories"
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            View All Success Stories
          </Link>
        </div>
      </section>

      {/* Manufacturing Challenges Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Understanding Manufacturing Challenges
        </h2>
        <p className="text-lg mb-6">
          Today's manufacturers face unique financial challenges:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Thin Margins</h3>
            <p>
              In manufacturing, pennies matter. We help you find and eliminate
              inefficiencies that eat into your margins.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Capital Intensity</h3>
            <p>
              Manufacturing requires significant investment in equipment and
              facilities. We help you optimize these investments for maximum
              return.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Labor Challenges</h3>
            <p>
              Finding and retaining skilled labor is increasingly difficult and
              expensive. We help you balance automation with human capital.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Global Competition</h3>
            <p>
              Overseas competitors often have lower labor costs. We help you
              leverage technology and efficiency to remain competitive.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Supply Chain Complexity
            </h3>
            <p>
              Managing inventory and suppliers impacts cash flow. We help you
              optimize your supply chain for financial performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Regulatory Compliance
            </h3>
            <p>
              Manufacturing faces complex regulations. We help you navigate
              compliance while maximizing available incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16 bg-slate-50 p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Our Manufacturing Financial Process
        </h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Assessment
              </h3>
              <p>
                We conduct a detailed analysis of your current operations,
                financial structure, and growth objectives.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Opportunity Identification
              </h3>
              <p>
                Our team identifies specific areas where financial improvements
                can be made, from cost reduction to revenue enhancement.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Strategy Development
              </h3>
              <p>
                We create a customized financial strategy addressing your unique
                manufacturing challenges and opportunities.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Implementation Support
              </h3>
              <p>
                Unlike traditional accountants, we work alongside you to
                implement recommended changes and monitor results.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
              5
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Continuous Optimization
              </h3>
              <p>
                We provide ongoing support and adjustments to ensure sustained
                financial improvement as your business evolves.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/consultation"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Start Your Assessment
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Manufacturing Financial FAQs
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              How is accounting different for manufacturers?
            </h3>
            <p>
              Manufacturing accounting requires specialized knowledge of
              inventory valuation, cost accounting, production efficiency
              metrics, and capital investment analysis that general accountants
              often lack.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              How can you help us compete with overseas manufacturers?
            </h3>
            <p>
              We focus on identifying efficiency improvements, automation
              opportunities, and strategic pricing approaches that allow you to
              compete effectively despite higher domestic labor costs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Do you understand our specific manufacturing niche?
            </h3>
            <p>
              We've worked with manufacturers across numerous specialties, from
              plastics and metals to food processing and packaging. Our approach
              adapts to your specific manufacturing processes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              How quickly can we expect to see results?
            </h3>
            <p>
              Many of our manufacturing clients see initial improvements within
              3-6 months, with more substantial results developing over 12-18
              months as strategic changes are fully implemented.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Do you help with equipment financing?
            </h3>
            <p>
              Yes, we have relationships with 21 banks and financing sources
              specifically experienced with manufacturing equipment loans and
              leases.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Can you help with tax incentives specific to manufacturing?
            </h3>
            <p>
              Absolutely. We specialize in identifying and maximizing
              manufacturing-specific tax incentives, including R&D credits,
              Section 179 deductions, and state-specific manufacturing
              incentives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-8">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Partner with Manufacturing Financial Experts
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Ready to transform your manufacturing business with strategic
            financial guidance? Let's start a conversation about your specific
            challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/consultation"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Schedule a Manufacturing Consultation
            </Link>
            <Link
              href="/resources/manufacturing-benchmarks"
              className="inline-block bg-white hover:bg-gray-100 text-slate-900 font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Download Manufacturing Financial Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
