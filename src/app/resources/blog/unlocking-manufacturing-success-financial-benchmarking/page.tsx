import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DynamicBreadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title:
    "Unlocking Manufacturing Success: How Financial Benchmarking Drives Performance | Schapira CPA",
  description:
    "Learn how financial benchmarking can transform your manufacturing business by identifying performance gaps, setting realistic goals, and gaining a competitive edge.",
  keywords:
    "manufacturing financial benchmarks, industry KPI comparison, financial performance metrics, benchmarking dashboard, manufacturing profitability, financial ratio analysis",
  openGraph: {
    title:
      "Unlocking Manufacturing Success: How Financial Benchmarking Drives Performance",
    description:
      "Learn how financial benchmarking can transform your manufacturing business by identifying performance gaps, setting realistic goals, and gaining a competitive edge.",
    type: "article",
    publishedTime: "2023-03-19T10:00:00Z",
    authors: ["Schapira CPA"],
  },
};

export default function BenchmarkingBlogPost() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <DynamicBreadcrumb
        currentUrl="/resources/blog/unlocking-manufacturing-success-financial-benchmarking"
        className="mb-6"
      />

      <article className="prose prose-lg max-w-none">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
            Unlocking Manufacturing Success: How Financial Benchmarking Drives
            Performance
          </h1>

          <div className="flex items-center text-muted-foreground mb-6">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <time dateTime="2023-03-19">March 19, 2023</time>
            <span className="mx-2">•</span>
            <ClockIcon className="h-4 w-4 mr-2" />
            <span>10 min read</span>
          </div>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Manufacturing financial benchmarking dashboard showing performance metrics"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Introduction: The Power of Financial Benchmarking
          </h2>

          <p>
            In today's competitive manufacturing landscape, understanding how
            your business performs relative to industry peers isn't just
            helpful—it's essential for survival and growth. Yet many
            manufacturing leaders operate with limited visibility into their
            financial performance compared to industry standards, making it
            difficult to identify opportunities and threats.
          </p>

          <p>
            Financial benchmarking provides the critical context needed to
            evaluate your manufacturing operation's performance objectively. By
            comparing your key financial metrics against industry standards and
            top performers, you gain invaluable insights that can drive
            strategic decisions, operational improvements, and ultimately,
            increased profitability.
          </p>

          <p>
            At Schapira CPA, we've developed a comprehensive{" "}
            <Link
              href="/calculators/benchmarking-dashboard"
              className="text-primary hover:underline font-medium"
            >
              Financial Benchmarking Dashboard
            </Link>{" "}
            specifically designed for manufacturing businesses. This powerful
            tool eliminates the guesswork from performance assessment and
            provides clear, actionable insights to drive your business forward.
          </p>

          <div className="bg-muted p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-3">
              Key Challenges Manufacturers Face:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Limited access to relevant industry benchmarks</li>
              <li>
                Difficulty identifying which metrics truly matter for their
                specific manufacturing niche
              </li>
              <li>Uncertainty about how to interpret performance gaps</li>
              <li>
                Challenges translating benchmark insights into actionable
                improvement strategies
              </li>
              <li>
                Time-consuming manual data collection and analysis processes
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Understanding Financial Benchmarking for Manufacturers
          </h2>

          <p>
            Financial benchmarking is the process of comparing your company's
            financial performance metrics against industry standards,
            competitors, or historical data. For manufacturers, this process is
            particularly valuable due to the capital-intensive nature of the
            industry and the significant impact that operational efficiency has
            on profitability.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            The Strategic Value of Benchmarking
          </h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-2">
                  Identify Performance Gaps
                </h4>
                <p>
                  Pinpoint specific areas where your manufacturing operation
                  lags behind industry leaders, creating focused improvement
                  targets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-2">Set Realistic Goals</h4>
                <p>
                  Establish performance targets based on actual industry data
                  rather than arbitrary numbers, ensuring goals are both
                  challenging and attainable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-2">
                  Validate Strategic Decisions
                </h4>
                <p>
                  Use benchmark data to support or challenge strategic
                  initiatives, capital investments, and operational changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-2">
                  Monitor Improvement Progress
                </h4>
                <p>
                  Track your performance over time relative to benchmarks,
                  providing clear evidence of the impact of improvement
                  initiatives.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            Essential Manufacturing Financial Metrics
          </h3>

          <p>
            While there are dozens of financial metrics you could track, certain
            key indicators are particularly relevant for manufacturing
            operations:
          </p>

          <table className="min-w-full border-collapse my-6">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Metric</th>
                <th className="border p-3 text-left">Description</th>
                <th className="border p-3 text-left">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Gross Profit Margin</td>
                <td className="border p-3">(Revenue - COGS) / Revenue</td>
                <td className="border p-3">
                  Measures production efficiency and pricing strategy
                  effectiveness
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">
                  Operating Profit Margin
                </td>
                <td className="border p-3">Operating Income / Revenue</td>
                <td className="border p-3">
                  Indicates overall operational efficiency
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Inventory Turnover</td>
                <td className="border p-3">COGS / Average Inventory</td>
                <td className="border p-3">
                  Shows how efficiently inventory is managed
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">
                  Days Sales Outstanding
                </td>
                <td className="border p-3">
                  (Accounts Receivable / Revenue) × 365
                </td>
                <td className="border p-3">
                  Reflects effectiveness of collections processes
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Fixed Asset Turnover</td>
                <td className="border p-3">Revenue / Net Fixed Assets</td>
                <td className="border p-3">
                  Measures how efficiently capital equipment is utilized
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">
                  Return on Invested Capital
                </td>
                <td className="border p-3">NOPAT / Invested Capital</td>
                <td className="border p-3">
                  Evaluates overall return relative to capital investment
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            By tracking these metrics against industry benchmarks, manufacturing
            leaders can quickly identify areas of strength and opportunity,
            allowing for more targeted improvement efforts.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Using the Benchmarking Dashboard: A Step-by-Step Guide
          </h2>

          <p>
            Our{" "}
            <Link
              href="/calculators/benchmarking-dashboard"
              className="text-primary hover:underline font-medium"
            >
              Manufacturing Financial Benchmarking Dashboard
            </Link>{" "}
            simplifies the process of comparing your performance against
            industry standards. Here's how to get the most value from this
            powerful tool:
          </p>

          <div className="space-y-8 my-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Enter Your Company Information
                </h3>
                <p>
                  Begin by providing basic information about your manufacturing
                  business, including company name, industry sub-sector, annual
                  revenue, and number of employees. This information helps the
                  dashboard select the most relevant peer group for comparison.
                </p>
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden my-4">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Company information input form"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Input Your Financial Metrics
                </h3>
                <p>
                  Enter your key financial data points from your income
                  statement, balance sheet, and cash flow statement. The
                  dashboard provides clear guidance on where to find each metric
                  in your financial statements.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Customize Your Peer Group
                </h3>
                <p>
                  Refine your comparison group by selecting specific criteria
                  such as revenue range, geographic region, and company age.
                  This ensures you're comparing your business against truly
                  relevant peers.
                </p>
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden my-4">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Peer group customization interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Review Your Performance Dashboard
                </h3>
                <p>
                  Examine the visual representation of your performance across
                  key metrics. The dashboard uses intuitive gauge charts and
                  color-coding to highlight areas where you excel (green),
                  perform adequately (yellow), or need improvement (red).
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Analyze Performance Gaps
                </h3>
                <p>
                  Dive deeper into areas where your performance deviates
                  significantly from industry benchmarks. The gap analysis tool
                  quantifies the financial impact of each performance gap and
                  suggests potential improvement strategies.
                </p>
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden my-4">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Gap analysis visualization"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Generate and Share Reports
                </h3>
                <p>
                  Create comprehensive benchmark reports that can be downloaded,
                  printed, or shared with your management team, board, or
                  financial advisors. These reports provide a clear snapshot of
                  your current performance and highlight priority improvement
                  areas.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-3">
              Pro Tip: Benchmarking Best Practices
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Perform benchmarking quarterly to track progress and identify
                emerging trends
              </li>
              <li>
                Include both financial and operational metrics for a complete
                performance picture
              </li>
              <li>
                Compare against both industry averages and top performers (75th
                percentile)
              </li>
              <li>
                Use benchmark insights to set specific, measurable improvement
                goals
              </li>
              <li>
                Share benchmark results with your team to drive accountability
                and engagement
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Key Financial Metrics: Deeper Insights
          </h2>

          <p>
            Let's explore a few critical manufacturing financial metrics in
            greater detail, including how to interpret them and strategies for
            improvement:
          </p>

          <div className="space-y-10 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Gross Profit Margin
              </h3>

              <p className="mb-3">
                <strong>What it reveals:</strong> Your gross profit margin
                directly reflects the efficiency of your production processes
                and the effectiveness of your pricing strategy. A margin
                significantly below industry benchmarks may indicate issues with
                production efficiency, material costs, labor productivity, or
                pricing power.
              </p>

              <h4 className="font-semibold mt-4 mb-2">
                Improvement Strategies:
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Implement lean manufacturing principles to reduce waste and
                  improve efficiency
                </li>
                <li>
                  Negotiate better terms with suppliers or explore alternative
                  materials
                </li>
                <li>Analyze product mix to focus on higher-margin items</li>
                <li>
                  Review pricing strategy and consider value-based pricing
                  approaches
                </li>
                <li>
                  Invest in automation for repetitive, labor-intensive processes
                </li>
              </ul>

              <div className="bg-muted p-4 rounded-lg my-4">
                <p className="italic">
                  "After benchmarking revealed our gross margin was 4.2% below
                  industry average, we implemented targeted efficiency
                  improvements in our production line. Within six months, we
                  closed the gap and added $380,000 to our bottom line."
                </p>
                <p className="font-medium mt-2">
                  — Operations Director, Precision Metal Products Manufacturer
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Inventory Turnover</h3>

              <p className="mb-3">
                <strong>What it reveals:</strong> This metric shows how
                efficiently you're managing inventory levels relative to sales.
                Low turnover compared to benchmarks suggests excess inventory,
                which ties up working capital and increases carrying costs.
                Extremely high turnover might indicate stockouts and potential
                lost sales.
              </p>

              <h4 className="font-semibold mt-4 mb-2">
                Improvement Strategies:
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Implement just-in-time inventory management where appropriate
                </li>
                <li>
                  Use ABC analysis to prioritize inventory control efforts
                </li>
                <li>Improve demand forecasting accuracy</li>
                <li>
                  Establish vendor-managed inventory arrangements with key
                  suppliers
                </li>
                <li>
                  Identify and liquidate obsolete or slow-moving inventory
                </li>
              </ul>

              <div className="bg-muted p-4 rounded-lg my-4">
                <p className="italic">
                  "Benchmarking showed our inventory turnover was half the
                  industry average. By implementing improved forecasting and JIT
                  principles, we increased turnover by 70% and freed up over
                  $1.2M in working capital."
                </p>
                <p className="font-medium mt-2">
                  — CFO, Industrial Equipment Manufacturer
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Return on Invested Capital (ROIC)
              </h3>

              <p className="mb-3">
                <strong>What it reveals:</strong> ROIC measures how effectively
                your manufacturing business generates returns relative to the
                capital invested. This comprehensive metric accounts for both
                operational efficiency and capital allocation decisions. A
                below-benchmark ROIC suggests either operational inefficiencies
                or suboptimal capital deployment.
              </p>

              <h4 className="font-semibold mt-4 mb-2">
                Improvement Strategies:
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Divest underperforming assets or product lines</li>
                <li>
                  Implement more rigorous capital expenditure evaluation
                  processes
                </li>
                <li>
                  Focus on improving asset utilization through better scheduling
                </li>
                <li>
                  Consider asset-light approaches where appropriate (e.g.,
                  outsourcing non-core processes)
                </li>
                <li>Optimize working capital management</li>
              </ul>

              <div className="bg-muted p-4 rounded-lg my-4">
                <p className="italic">
                  "Our benchmarking analysis revealed our ROIC was 3.8
                  percentage points below industry leaders. By implementing a
                  comprehensive capital optimization program, we improved ROIC
                  by 5.2 percentage points over 18 months."
                </p>
                <p className="font-medium mt-2">
                  — CEO, Automotive Components Manufacturer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Real-World Success Stories: Benchmarking in Action
          </h2>

          <div className="space-y-8 my-8">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="text-xl font-semibold">
                  Case Study: Mid-Size Metal Fabricator
                </h3>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-2">Challenge:</h4>
                <p className="mb-4">
                  A metal fabrication company with $18M in annual revenue was
                  experiencing declining profitability despite stable sales.
                  Management suspected inefficiencies but lacked visibility into
                  specific problem areas.
                </p>

                <h4 className="font-semibold mb-2">Benchmarking Approach:</h4>
                <p className="mb-4">
                  Using our benchmarking dashboard, the company compared their
                  performance across 15 key financial metrics against
                  similar-sized metal fabricators. The analysis revealed that
                  while most metrics were near industry averages, their Days
                  Payable Outstanding was 22 days shorter than the industry
                  benchmark, and their SG&A expenses were 3.2 percentage points
                  higher than top-performing peers.
                </p>

                <h4 className="font-semibold mb-2">Actions Taken:</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>
                    Renegotiated payment terms with key suppliers to extend DPO
                  </li>
                  <li>Implemented a targeted SG&A reduction program</li>
                  <li>
                    Established quarterly benchmarking reviews to monitor
                    progress
                  </li>
                </ul>

                <h4 className="font-semibold mb-2">Results:</h4>
                <p>
                  Within 12 months, the company extended DPO by 15 days,
                  improving cash flow by approximately $740,000. SG&A expenses
                  were reduced by 2.1 percentage points, adding $378,000 to the
                  bottom line. Overall operating profit margin improved from
                  4.8% to 7.3%.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="text-xl font-semibold">
                  Case Study: Custom Plastic Products Manufacturer
                </h3>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-2">Challenge:</h4>
                <p className="mb-4">
                  A custom plastic products manufacturer with $7M in revenue was
                  considering a significant capital investment in new equipment
                  but was uncertain if the investment was justified given their
                  current performance.
                </p>

                <h4 className="font-semibold mb-2">Benchmarking Approach:</h4>
                <p className="mb-4">
                  The company used our benchmarking dashboard to compare their
                  asset utilization, productivity, and return metrics against
                  industry peers. The analysis revealed their Fixed Asset
                  Turnover was 1.8x compared to the industry average of 2.7x,
                  indicating significant underutilization of existing equipment.
                </p>

                <h4 className="font-semibold mb-2">Actions Taken:</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Postponed new equipment purchases</li>
                  <li>
                    Implemented improved production scheduling to maximize
                    equipment utilization
                  </li>
                  <li>
                    Introduced preventive maintenance program to reduce downtime
                  </li>
                  <li>Provided operator training to improve efficiency</li>
                </ul>

                <h4 className="font-semibold mb-2">Results:</h4>
                <p>
                  Within nine months, Fixed Asset Turnover improved to 2.5x,
                  nearly matching the industry benchmark. Production capacity
                  increased by 28% without additional capital investment, and
                  ROIC improved from 11.2% to 16.8%.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Conclusion: Transform Your Manufacturing Business Through
            Benchmarking
          </h2>

          <p>
            Financial benchmarking is not merely a diagnostic tool—it's a
            catalyst for strategic transformation in manufacturing businesses.
            By providing objective performance context and highlighting specific
            improvement opportunities, benchmarking enables more informed
            decision-making and targeted improvement efforts.
          </p>

          <p>
            Our Manufacturing Financial Benchmarking Dashboard simplifies what
            was once a complex, time-consuming process, making powerful
            performance insights accessible to manufacturing businesses of all
            sizes. By regularly comparing your performance against industry
            benchmarks, you can:
          </p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>
              Identify and prioritize your most significant improvement
              opportunities
            </li>
            <li>Set realistic, data-driven performance targets</li>
            <li>
              Make more confident strategic and capital allocation decisions
            </li>
            <li>Track your progress toward industry-leading performance</li>
            <li>
              Build a culture of continuous improvement based on objective
              metrics
            </li>
          </ul>

          <p>
            In today's competitive manufacturing environment, companies that
            leverage data-driven insights gain a significant advantage. Don't
            let your manufacturing business operate in a performance vacuum—use
            benchmarking to illuminate your path to improved profitability and
            sustainable growth.
          </p>

          <div className="bg-primary/10 p-8 rounded-lg my-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Benchmark Your Manufacturing Business?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Gain valuable insights into your financial performance and
              discover specific opportunities to improve profitability with our
              comprehensive benchmarking dashboard.
            </p>
            <Link href="/calculators/benchmarking-dashboard">
              <Button size="lg" className="group">
                Start Benchmarking Now
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground">
              <strong>About Schapira CPA:</strong> We specialize in providing
              financial advisory services to manufacturing businesses, helping
              them optimize performance, reduce tax burden, and achieve
              sustainable growth. Our team combines deep industry expertise with
              cutting-edge analytical tools to deliver actionable insights and
              measurable results.
            </p>
          </div>
        </section>

        {/* Add a prominent CTA to the dashboard */}

        {/* Related Content Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Financial Ratio Calculator
                </h3>
                <p className="text-gray-600 mb-4">
                  Calculate and analyze key financial ratios for your
                  manufacturing business to complement your benchmarking
                  analysis.
                </p>
                <Link
                  href="/calculators/financial-ratio"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  Try the calculator
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Manufacturing Business Valuation
                </h3>
                <p className="text-gray-600 mb-4">
                  Determine the value of your manufacturing business using our
                  comprehensive valuation calculator.
                </p>
                <Link
                  href="/calculators/manufacturing-valuation"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  Value your business
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  );
}
