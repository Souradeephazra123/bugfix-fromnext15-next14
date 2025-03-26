import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ProcessStep from "@/components/ProcessStep";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Cost Reduction Strategies | Schapira CPA",
  description:
    "Identify hidden costs, optimize your manufacturing operations, and increase profit margins with our proven cost reduction strategies.",
};

export default function CostReductionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader
        title="Manufacturing Cost Reduction Strategies"
        description="Identify hidden costs, optimize your manufacturing operations, and increase profit margins with our proven cost reduction strategies."
      />

      <section className="my-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            In the competitive manufacturing landscape, every dollar saved
            directly impacts your bottom line. Our specialized cost reduction
            strategies help manufacturing businesses identify inefficiencies,
            eliminate waste, and optimize operations without compromising
            quality or production capacity.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Key Benefits:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">•</span>
                <span>
                  <strong>Identify hidden cost drivers</strong> that may be
                  eroding your profit margins
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">•</span>
                <span>
                  <strong>Optimize production expenses</strong> through
                  data-driven analysis and benchmarking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">•</span>
                <span>
                  <strong>Increase gross profit margins</strong> without
                  sacrificing product quality or customer satisfaction
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-12 bg-white">
        <SectionHeading title="Our Cost Reduction Methodology" />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Comprehensive Cost Analysis
            </h3>
            <p className="mb-4">
              We begin with a thorough analysis of your manufacturing operation,
              examining every aspect of your cost structure to identify
              inefficiencies and opportunities for improvement.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Production process mapping and analysis</li>
              <li>Material usage and waste assessment</li>
              <li>Labor efficiency evaluation</li>
              <li>Overhead cost allocation review</li>
              <li>Supply chain and procurement analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Data-Driven Optimization
            </h3>
            <p className="mb-4">
              Using industry benchmarks and our manufacturing expertise, we
              develop targeted strategies to reduce costs while maintaining or
              improving operational performance.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Comparative analysis against industry standards</li>
              <li>Prioritization of cost-saving opportunities</li>
              <li>ROI calculation for proposed changes</li>
              <li>Implementation roadmap development</li>
              <li>Performance tracking and adjustment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-12">
        <SectionHeading title="Our Cost Reduction Process" />

        <div className="mt-8">
          <ProcessStep
            number="01"
            title="Comprehensive Cost Assessment"
            description="We conduct a detailed analysis of your current manufacturing costs, identifying all direct and indirect expenses impacting your bottom line."
          />

          <ProcessStep
            number="02"
            title="Opportunity Identification"
            description="Our team identifies specific areas where cost reductions can be achieved without compromising quality or production capacity."
          />

          <ProcessStep
            number="03"
            title="Strategy Development"
            description="We create a customized cost reduction plan addressing your unique manufacturing challenges and opportunities."
          />

          <ProcessStep
            number="04"
            title="Implementation Support"
            description="Unlike traditional consultants, we work alongside you to implement recommended changes and monitor results."
          />

          <ProcessStep
            number="05"
            title="Continuous Optimization"
            description="We provide ongoing support and adjustments to ensure sustained cost improvements as your business evolves."
          />
        </div>
      </section>

      <section className="my-12 bg-gray-50 p-8 rounded-lg">
        <SectionHeading title="Cost Reduction Focus Areas" />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Material Costs</h3>
            <p>
              Optimize material selection, reduce waste, improve yield rates,
              and enhance supplier negotiations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Labor Efficiency</h3>
            <p>
              Improve productivity, optimize staffing levels, enhance training,
              and streamline workflows.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Energy Consumption</h3>
            <p>
              Reduce utility costs, implement energy-efficient technologies, and
              optimize equipment usage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Overhead Reduction</h3>
            <p>
              Streamline administrative processes, optimize facility usage, and
              reduce non-essential expenses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Supply Chain Optimization
            </h3>
            <p>
              Improve procurement processes, enhance inventory management, and
              optimize logistics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Technology Integration
            </h3>
            <p>
              Implement cost-saving technologies, automate manual processes, and
              enhance data analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <SectionHeading title="Client Success Story" />

        <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">
            Metal Fabrication Manufacturer
          </h3>
          <p className="mb-4">
            A mid-sized metal fabrication company was struggling with rising
            material costs and inefficient production processes that were
            eroding their profit margins.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-brand-gold">23%</p>
              <p className="text-sm">Reduction in material waste</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-brand-gold">18%</p>
              <p className="text-sm">Increase in labor productivity</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-brand-gold">$215K</p>
              <p className="text-sm">Annual cost savings</p>
            </div>
          </div>

          <p className="mb-4">
            Our team implemented a comprehensive cost reduction strategy that
            included optimizing material usage, streamlining production
            workflows, and enhancing inventory management. The result was a
            significant improvement in profitability without compromising
            product quality or delivery times.
          </p>

          <Link
            href="/success-stories/manufacturing"
            className="text-brand-gold font-semibold hover:underline"
          >
            Read the full case study →
          </Link>
        </div>
      </section>

      <section className="my-12">
        <Testimonial
          quote="Schapira's cost reduction strategies transformed our manufacturing operation. They identified inefficiencies we hadn't seen and implemented practical solutions that made an immediate impact on our bottom line."
          author="Operations Director, Metal Fabrication Company"
        />
      </section>

      <section className="my-12 bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Optimize Your Manufacturing Costs?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Let's discuss your manufacturing operation and identify opportunities
          to reduce costs and improve profitability.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact/schedule-review"
            className="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule a Cost Analysis
          </Link>
          <Link
            href="/resources/manufacturing-guides"
            className="bg-white border border-brand-gold text-brand-gold font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Download Cost Reduction Guide
          </Link>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="my-12">
        <SectionHeading title="Frequently Asked Questions" />

        <div className="mt-8 space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              How quickly can we expect to see cost savings?
            </h3>
            <p>
              Many of our manufacturing clients see initial improvements within
              30-60 days, with more substantial results developing over 3-6
              months as strategic changes are fully implemented.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Will cost reduction affect our product quality?
            </h3>
            <p>
              Our approach focuses on eliminating waste and inefficiency, not
              cutting corners. We help you reduce costs while maintaining or
              even improving product quality and customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              How do you identify cost-saving opportunities?
            </h3>
            <p>
              We use a combination of detailed operational analysis, industry
              benchmarking, and our specialized manufacturing expertise to
              identify inefficiencies and opportunities that others might miss.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Do we need to implement all recommendations at once?
            </h3>
            <p>
              No. We prioritize cost-saving opportunities based on potential
              impact and implementation difficulty, allowing you to phase in
              changes at a pace that works for your operation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
