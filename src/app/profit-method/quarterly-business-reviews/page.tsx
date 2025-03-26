import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  FileText,
  LineChart,
  TrendingUp,
} from "lucide-react";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Quarterly Business Reviews | ProFit™ Method | Schapira CPA",
  description:
    "Regular financial health assessments for manufacturing businesses through our ProFit™ Method's Quarterly Business Reviews.",
  canonical: "/profit-method/quarterly-business-reviews",
  openGraph: {
    images: [
      {
        url: "/images/quarterly-business-reviews-og.jpg",
        width: 1200,
        height: 630,
        alt: "Quarterly Business Reviews | ProFit™ Method",
      },
    ],
  },
});

export default function QuarterlyBusinessReviewsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quarterly Business Reviews
            </h1>
            <p className="text-xl mb-8">
              Regular financial health assessments to keep your manufacturing
              business on track and identify opportunities for growth and
              improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/profit-method"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Learn About the ProFit™ Method
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Benefits of Quarterly Business Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BarChart2 className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Proactive Financial Management
              </h3>
              <p className="text-gray-600">
                Regular reviews help identify potential issues before they
                become problems, allowing for timely corrective action and
                strategic adjustments.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Tracking</h3>
              <p className="text-gray-600">
                Consistent monitoring of key performance indicators helps track
                progress toward goals and ensures accountability throughout your
                organization.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <LineChart className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Strategic Decision Support
              </h3>
              <p className="text-gray-600">
                Data-driven insights from quarterly reviews provide a solid
                foundation for making informed strategic decisions about your
                manufacturing business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What's Included in Our Quarterly Business Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <BarChart2 className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Financial Performance Analysis
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive review of your financial statements with variance
                analysis against budgets, forecasts, and industry benchmarks.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Income statement analysis with margin trends
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Balance sheet review and working capital analysis
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Cash flow statement review and forecasting
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Key financial ratio analysis and benchmarking
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <TrendingUp className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Operational KPI Review</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Analysis of key operational metrics specific to your
                manufacturing business to identify efficiency improvements and
                cost reduction opportunities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Production efficiency metrics
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Inventory turnover and management
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Quality control and defect rates
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Labor productivity and utilization
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Strategic Initiative Tracking
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Review progress on strategic initiatives and projects, ensuring
                alignment with business goals and timelines.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Project milestone tracking
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  ROI analysis on major investments
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Resource allocation assessment
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Strategic goal alignment check
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <LineChart className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Forward-Looking Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Development of action plans and forecasts for the upcoming
                quarter based on review findings and market conditions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Updated financial forecasts
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Prioritized action items
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Risk assessment and mitigation planning
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Opportunity identification and evaluation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Quarterly Business Review Process
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Data Collection & Preparation
                  </h3>
                  <p className="text-gray-600">
                    We gather financial statements, operational data, and other
                    relevant information for the quarter. Our team prepares
                    preliminary analyses and identifies key areas for
                    discussion.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    In-Depth Review Meeting
                  </h3>
                  <p className="text-gray-600">
                    We conduct a structured meeting with your leadership team to
                    review performance, discuss findings, and identify both
                    challenges and opportunities for your manufacturing
                    business.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Action Plan Development
                  </h3>
                  <p className="text-gray-600">
                    Based on the review findings, we collaborate with your team
                    to develop specific, actionable recommendations and
                    priorities for the upcoming quarter.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Implementation Support
                  </h3>
                  <p className="text-gray-600">
                    We provide ongoing support throughout the quarter to help
                    implement the action plan, address emerging issues, and
                    prepare for the next review cycle.
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
                "The quarterly business reviews have transformed how we manage
                our manufacturing business. They've helped us identify over
                $350,000 in cost savings opportunities and implement strategic
                changes that increased our profit margins by 3.5% in just nine
                months."
              </blockquote>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Cost Savings Identified:</span>
                  <span className="font-bold text-yellow-600">$350,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">
                    Profit Margin Improvement:
                  </span>
                  <span className="font-bold text-yellow-600">3.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Implementation Timeline:</span>
                  <span className="font-bold text-yellow-600">9 months</span>
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
              Ready to Transform Your Financial Management?
            </h2>
            <p className="text-xl mb-8">
              Schedule a consultation to learn how our Quarterly Business
              Reviews can help your manufacturing business achieve its financial
              goals.
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
                  Who should participate in the quarterly business reviews?
                </h3>
                <p className="text-gray-600">
                  We recommend including key decision-makers from your
                  organization, typically the CEO, CFO, COO, and department
                  heads responsible for manufacturing operations, sales, and
                  other critical functions. This ensures comprehensive insights
                  and buy-in for action plans developed during the review.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  How do quarterly business reviews differ from regular
                  financial statements?
                </h3>
                <p className="text-gray-600">
                  While financial statements provide historical data, our
                  quarterly business reviews offer in-depth analysis, context,
                  and forward-looking insights. We don't just report what
                  happened; we explain why it happened, what it means for your
                  business, and what actions you should take next. The reviews
                  also incorporate operational metrics and strategic initiatives
                  that aren't captured in standard financial statements.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  How much preparation is required from our team?
                </h3>
                <p className="text-gray-600">
                  We've designed our process to minimize the burden on your
                  team. Typically, we need access to your financial and
                  operational data systems, which we can often integrate with
                  directly. Your team may need to provide some context or
                  clarification on specific activities or variances, but we
                  handle the heavy lifting of data collection, analysis, and
                  presentation preparation.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">
                  How do you tailor the reviews for manufacturing businesses?
                </h3>
                <p className="text-gray-600">
                  Our quarterly business reviews are specifically designed for
                  manufacturing companies, focusing on industry-specific metrics
                  like production efficiency, inventory management, equipment
                  utilization, and manufacturing overhead allocation. We
                  benchmark your performance against industry standards and
                  incorporate manufacturing-specific financial and operational
                  best practices into our analysis and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
