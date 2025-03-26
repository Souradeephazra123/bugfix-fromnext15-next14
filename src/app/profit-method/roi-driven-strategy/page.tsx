import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  BarChart3,
  LineChart,
  Target,
  TrendingUp,
  Calculator,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "ROI-Driven Strategy for Manufacturing | Schapira CPA",
  description:
    "Our ROI-Driven Strategy framework helps manufacturing businesses prioritize investments and initiatives based on their potential return on investment.",
  keywords:
    "manufacturing ROI, return on investment strategy, manufacturing investment prioritization, ROI analysis, capital allocation",
};

export default function ROIDrivenStrategyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/profit-method">Profit Method</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>ROI-Driven Strategy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Manufacturing ROI strategy planning session"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ROI-Driven Strategy
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            A systematic approach to help manufacturing businesses prioritize
            investments and initiatives based on their potential return on
            investment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="#framework-components">Explore the Framework</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Maximizing Return on Investment for Manufacturers
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our ROI-Driven Strategy framework helps manufacturing businesses make
          informed decisions about where to invest their limited resources to
          achieve the highest possible return. We provide a systematic approach
          to evaluating, prioritizing, and implementing initiatives based on
          their potential financial impact.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          In the capital-intensive manufacturing sector, making the right
          investment decisions is critical to long-term success. Our framework
          combines financial analysis with operational insights to ensure that
          your investments deliver measurable results and support your strategic
          objectives.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="font-medium">
            Manufacturing businesses implementing our ROI-Driven Strategy
            framework have achieved an average of 22% improvement in return on
            invested capital (ROIC) within 18 months.
          </p>
        </div>
      </div>

      <div id="framework-components" className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Framework Components
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>ROI Analysis Methodology</CardTitle>
              </div>
              <CardDescription>
                Comprehensive approach to evaluating potential returns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our comprehensive ROI analysis methodology helps you evaluate
                the potential returns of various investments and initiatives.
                Our approach includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Initial investment quantification</li>
                <li>Revenue impact projection</li>
                <li>Cost reduction/avoidance analysis</li>
                <li>Time value of money considerations</li>
                <li>Risk-adjusted return calculation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Investment Prioritization Framework</CardTitle>
              </div>
              <CardDescription>
                Systematic approach to ranking investment opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our investment prioritization framework helps you rank
                investment opportunities based on their potential return and
                strategic alignment. Our approach includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>ROI-based ranking methodology</li>
                <li>Strategic alignment assessment</li>
                <li>Risk and complexity evaluation</li>
                <li>Resource requirement analysis</li>
                <li>Interdependency mapping</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Capital Allocation Strategy</CardTitle>
              </div>
              <CardDescription>
                Strategic approach to allocating capital resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our capital allocation strategy helps you distribute your
                limited capital resources across various investment
                opportunities to maximize overall returns. Our approach
                includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Capital budgeting process design</li>
                <li>Portfolio approach to investment allocation</li>
                <li>Balance between short-term and long-term investments</li>
                <li>Maintenance vs. growth investment balance</li>
                <li>Funding source optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Performance Tracking System</CardTitle>
              </div>
              <CardDescription>
                Monitoring actual returns against projections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our performance tracking system helps you monitor the actual
                returns of your investments against projections and make
                necessary adjustments. Our approach includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>ROI metric definition and tracking</li>
                <li>Regular performance review cadence</li>
                <li>Variance analysis methodology</li>
                <li>Corrective action planning process</li>
                <li>Continuous learning and improvement system</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Implementation Excellence</CardTitle>
              </div>
              <CardDescription>
                Ensuring successful execution of high-ROI initiatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our implementation excellence approach helps you successfully
                execute high-ROI initiatives to ensure that projected returns
                are realized. Our approach includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Detailed implementation planning</li>
                <li>Resource allocation and management</li>
                <li>Project management methodology</li>
                <li>Risk management and mitigation</li>
                <li>Change management and adoption</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Continuous Optimization</CardTitle>
              </div>
              <CardDescription>
                Ongoing refinement of investment strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our continuous optimization approach helps you refine your
                investment strategy based on actual results and changing market
                conditions. Our approach includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Regular portfolio review process</li>
                <li>Investment strategy refinement methodology</li>
                <li>Market and competitive monitoring</li>
                <li>Technology and innovation tracking</li>
                <li>Agile adjustment process</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Key Investment Categories for Manufacturers
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Production Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Equipment modernization</li>
                <li>Automation and robotics</li>
                <li>Advanced manufacturing technologies</li>
                <li>Quality control systems</li>
                <li>Energy efficiency improvements</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Digital Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>ERP system implementation</li>
                <li>Manufacturing execution systems</li>
                <li>IoT and connected factory</li>
                <li>Data analytics and business intelligence</li>
                <li>Digital twin technology</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Capacity Expansion</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Facility expansion</li>
                <li>New production lines</li>
                <li>Shift optimization</li>
                <li>Bottleneck elimination</li>
                <li>Supply chain capacity</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>New product introduction</li>
                <li>Product line expansion</li>
                <li>R&D capabilities</li>
                <li>Design for manufacturability</li>
                <li>Intellectual property development</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Market Expansion</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>New customer segments</li>
                <li>Geographic expansion</li>
                <li>Channel development</li>
                <li>Sales capability enhancement</li>
                <li>Marketing and brand building</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operational Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Lean manufacturing implementation</li>
                <li>Six Sigma quality programs</li>
                <li>Supply chain optimization</li>
                <li>Workforce development</li>
                <li>Safety and compliance improvements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          ROI-Driven Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Precision Metal Products</CardTitle>
              <CardDescription>CNC Machining Manufacturer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Implemented our ROI-Driven Strategy to prioritize technology
                investments:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>28% increase in ROIC within 18 months</li>
                <li>$1.2M in capital allocated to highest-ROI projects</li>
                <li>35% improvement in production efficiency</li>
                <li>22% reduction in quality-related costs</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/portfolio/precision-metal-products">
                  Read Case Study
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Composites</CardTitle>
              <CardDescription>
                Composite Materials Manufacturer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Applied our ROI-Driven Strategy to optimize R&D investments:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>32% improvement in R&D ROI</li>
                <li>Successful commercialization of 3 new products</li>
                <li>$850K in R&D tax credits secured</li>
                <li>18-month reduction in time-to-market</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/portfolio/advanced-composites">
                  Read Case Study
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Harvest Foods</CardTitle>
              <CardDescription>Food Processing Manufacturer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Leveraged our ROI-Driven Strategy for automation investments:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>25% increase in ROIC within 12 months</li>
                <li>42% improvement in production throughput</li>
                <li>18% reduction in labor costs</li>
                <li>15% improvement in product consistency</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/portfolio/harvest-foods">Read Case Study</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Manufacturing ROI strategy session"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Maximize Your Manufacturing Investments
            </h2>
            <p className="text-lg mb-6">
              Schedule a consultation to learn how our ROI-Driven Strategy
              framework can help your manufacturing business prioritize
              investments and achieve higher returns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/roi-calculator">
                  Try Our ROI Calculator <Calculator className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Related Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>ROI Calculator</CardTitle>
              <CardDescription>Evaluate potential investments</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our interactive ROI calculator helps you evaluate potential
                investments and compare different opportunities based on their
                expected returns.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/roi-calculator">Access Calculator</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Growth Planning Framework</CardTitle>
              <CardDescription>Strategic approach to growth</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Learn how our Growth Planning Framework helps manufacturing
                businesses develop and implement effective strategies for
                sustainable growth.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/profit-method/growth-planning-framework">
                  Learn More
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manufacturing Valuation</CardTitle>
              <CardDescription>
                Understand your business's value
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our interactive valuation tool helps you assess your
                manufacturing business's current value and identify key drivers
                for increasing valuation.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/manufacturing-valuation">
                  Access Valuation Tool
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
