import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  DollarSign,
  LineChart,
  TrendingUp,
} from "lucide-react";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Cash Flow Management for Manufacturers | Schapira CPA",
  description:
    "Optimize working capital and cash flow with our specialized cash flow management solutions for manufacturing businesses.",
  canonical: "/manufacturing-solutions/cash-flow-management",
  openGraph: {
    images: [
      {
        url: "/images/cash-flow-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cash Flow Management for Manufacturers",
      },
    ],
  },
});

export default function CashFlowManagementPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cash Flow Management for Manufacturers
            </h1>
            <p className="text-xl mb-8">
              Optimize working capital, improve cash conversion cycles, and
              ensure steady operational funding with our specialized
              manufacturing cash flow solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/resources/financial-calculators"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Try Our Cash Flow Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Benefits of Our Cash Flow Management Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Improved Working Capital
              </h3>
              <p className="text-gray-600">
                Our strategies optimize inventory levels, accounts receivable,
                and accounts payable to free up cash and reduce reliance on
                external financing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <LineChart className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Enhanced Cash Forecasting
              </h3>
              <p className="text-gray-600">
                Our advanced forecasting tools provide accurate cash flow
                projections, helping you anticipate and prepare for future cash
                needs and opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <DollarSign className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Reduced Financing Costs
              </h3>
              <p className="text-gray-600">
                By optimizing your cash conversion cycle, we help reduce your
                reliance on expensive short-term financing and lower your
                overall cost of capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Cash Flow Management Approach
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Comprehensive Cash Flow Assessment
                  </h3>
                  <p className="text-gray-600">
                    We conduct a thorough analysis of your current cash flow
                    patterns, working capital management, and cash conversion
                    cycle to identify improvement opportunities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Customized Cash Flow Strategy
                  </h3>
                  <p className="text-gray-600">
                    Based on our assessment, we develop a tailored cash flow
                    management strategy that addresses your specific
                    manufacturing business needs and challenges.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Implementation Support
                  </h3>
                  <p className="text-gray-600">
                    We work alongside your team to implement cash flow
                    improvements, providing guidance, tools, and support
                    throughout the process to ensure successful execution.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Ongoing Monitoring & Refinement
                  </h3>
                  <p className="text-gray-600">
                    We establish cash flow monitoring systems and provide
                    regular reviews to track progress, identify new
                    opportunities, and refine strategies as your business
                    evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Cash Flow Management Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Inventory Optimization</h3>
              <p className="text-gray-600 mb-4">
                We help you optimize inventory levels to reduce carrying costs
                while maintaining production efficiency and customer service
                levels.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Just-in-time inventory strategies
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  ABC inventory analysis and management
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Safety stock optimization
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Supplier relationship management
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                Accounts Receivable Management
              </h3>
              <p className="text-gray-600 mb-4">
                We implement strategies to accelerate collections and reduce
                days sales outstanding (DSO) to improve cash flow.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Credit policy optimization
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Invoicing process improvements
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Collection process enhancement
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Customer payment incentives
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                Accounts Payable Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                We help you strategically manage vendor payments to maximize
                cash flow while maintaining strong supplier relationships.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Payment timing strategies
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Vendor terms negotiation
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Early payment discount analysis
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Supplier consolidation opportunities
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Cash Flow Forecasting</h3>
              <p className="text-gray-600 mb-4">
                We implement robust forecasting systems to help you anticipate
                cash needs and make informed financial decisions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  13-week cash flow forecasting
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Scenario planning and sensitivity analysis
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Seasonal cash flow management
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Capital expenditure planning
                </li>
              </ul>
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
                  <BarChart2 className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Precision Metal Products
                  </h3>
                  <p className="text-gray-600">
                    Metal Fabrication Manufacturer
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-6 border-l-4 border-yellow-500 pl-4 py-2">
                "Schapira CPA's cash flow management strategies helped us reduce
                our working capital requirements by 22% while supporting our 15%
                annual growth. Their manufacturing-specific approach made all
                the difference."
              </blockquote>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">
                    Working Capital Reduction:
                  </span>
                  <span className="font-bold text-yellow-600">22%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">
                    Cash Conversion Cycle Improvement:
                  </span>
                  <span className="font-bold text-yellow-600">18 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Annual Interest Savings:</span>
                  <span className="font-bold text-yellow-600">$85,000</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/success-stories/precision-metal-products"
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
              Ready to Optimize Your Cash Flow?
            </h2>
            <p className="text-xl mb-8">
              Schedule a consultation with our manufacturing financial
              specialists to discover how our cash flow management solutions can
              help your business.
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
                  How quickly can we see improvements in our cash flow?
                </h3>
                <p className="text-gray-600">
                  Many clients see initial improvements within 30-60 days of
                  implementing our cash flow strategies. Quick wins often come
                  from accounts receivable process improvements and inventory
                  optimization. More substantial and sustainable improvements
                  typically develop over 3-6 months as we refine and optimize
                  your entire cash conversion cycle.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  Will improving cash flow require significant changes to our
                  operations?
                </h3>
                <p className="text-gray-600">
                  Our approach focuses on optimizing existing processes rather
                  than disrupting operations. We work within your current
                  business model to identify and implement improvements that
                  enhance cash flow without compromising product quality,
                  customer service, or operational efficiency. Most changes
                  involve refining policies, improving processes, and enhancing
                  visibility into cash flow drivers.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  How do you address the unique cash flow challenges of
                  manufacturing businesses?
                </h3>
                <p className="text-gray-600">
                  Manufacturing businesses face specific cash flow challenges
                  including high inventory requirements, capital-intensive
                  equipment needs, and long production cycles. Our strategies
                  are tailored to these challenges, focusing on inventory
                  optimization, production efficiency, supplier management, and
                  customer payment terms that recognize the unique cash flow
                  patterns of manufacturing operations.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  Can you help with seasonal cash flow fluctuations?
                </h3>
                <p className="text-gray-600">
                  Yes, we specialize in helping manufacturers manage seasonal
                  fluctuations in cash flow. Our approach includes developing
                  accurate forecasting models to anticipate cash needs, creating
                  buffer strategies for peak production periods, implementing
                  flexible supplier arrangements, and establishing appropriate
                  financing facilities to bridge seasonal gaps. We help you turn
                  seasonal challenges into strategic advantages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
