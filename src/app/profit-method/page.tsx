import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  LineChart,
  Target,
  TrendingUp,
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
  title:
    "The Profit Method | Manufacturing Business Growth Framework | Schapira CPA",
  description:
    "Our proprietary Profit Method framework helps manufacturing businesses achieve sustainable growth through strategic financial planning and operational excellence.",
  keywords:
    "manufacturing growth framework, profit method, manufacturing business growth, financial strategy for manufacturers, operational excellence",
};

export default function ProfitMethodPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Profit Method</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Manufacturing facility with advanced machinery"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Profit Method
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Our proprietary framework for manufacturing businesses to achieve
            sustainable growth, operational excellence, and financial
            optimization.
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
          Transforming Manufacturing Business Performance
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The Profit Method is our comprehensive approach to helping
          manufacturing businesses achieve sustainable growth, operational
          excellence, and financial optimization. Developed through years of
          specialized experience with manufacturing clients, this framework
          addresses the unique challenges and opportunities in the manufacturing
          sector.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our approach integrates financial expertise with operational insights
          to create a holistic growth strategy that drives measurable results.
          We focus on the specific needs of manufacturing businesses, including
          production efficiency, supply chain optimization, cost accounting, tax
          strategy, and strategic growth planning.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="font-medium">
            Manufacturing businesses implementing the Profit Method framework
            have achieved an average of 27% profit improvement and 32% growth in
            enterprise value within 24 months.
          </p>
        </div>
      </div>

      <div id="framework-components" className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          The Profit Method Framework
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Growth Planning Framework</CardTitle>
              </div>
              <CardDescription>
                Strategic roadmap for sustainable business expansion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our Growth Planning Framework provides manufacturing businesses
                with a structured approach to achieving sustainable growth. We
                help you develop a comprehensive growth strategy that aligns
                with your business objectives, market opportunities, and
                operational capabilities.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  Market opportunity assessment and competitive positioning
                </li>
                <li>Capacity planning and resource allocation</li>
                <li>Financial modeling and capital structure optimization</li>
                <li>Risk assessment and mitigation strategies</li>
                <li>Implementation roadmap with clear milestones</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/profit-method/growth-planning-framework">
                  Explore Growth Planning{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>ROI-Driven Strategy</CardTitle>
              </div>
              <CardDescription>
                Maximizing return on investment across operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our ROI-Driven Strategy framework helps manufacturing businesses
                prioritize investments and initiatives based on their potential
                return. We focus on identifying high-impact opportunities that
                deliver measurable financial results.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Investment prioritization methodology</li>
                <li>ROI analysis for capital expenditures</li>
                <li>Process improvement ROI assessment</li>
                <li>Technology investment evaluation</li>
                <li>Performance tracking and measurement systems</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/profit-method/roi-driven-strategy">
                  Explore ROI Strategy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Financial Optimization</CardTitle>
              </div>
              <CardDescription>
                Enhancing financial structure and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our Financial Optimization component focuses on improving the
                financial structure and performance of manufacturing businesses.
                We help you optimize working capital, reduce costs, and enhance
                profitability.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Working capital optimization</li>
                <li>Cost structure analysis and improvement</li>
                <li>Tax strategy and planning</li>
                <li>Financial reporting and KPI development</li>
                <li>Cash flow management and forecasting</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/financial-ratios">
                  Financial Analysis Tools{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Operational Excellence</CardTitle>
              </div>
              <CardDescription>
                Streamlining processes for maximum efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our Operational Excellence framework helps manufacturing
                businesses optimize their operations for maximum efficiency and
                productivity. We focus on streamlining processes, reducing
                waste, and enhancing quality to drive sustainable performance
                improvements.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Production process optimization</li>
                <li>Supply chain efficiency improvement</li>
                <li>Quality management systems</li>
                <li>Lean manufacturing implementation</li>
                <li>Performance measurement and continuous improvement</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/services/cost-accounting">
                  Explore Cost Accounting{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          How The Profit Method Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">1</span>
            </div>
            <h3 className="font-bold mb-2">Assessment</h3>
            <p className="text-sm">
              Comprehensive analysis of your current operations, financial
              performance, and market position
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">2</span>
            </div>
            <h3 className="font-bold mb-2">Strategy Development</h3>
            <p className="text-sm">
              Collaborative creation of a tailored growth and optimization
              strategy
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">3</span>
            </div>
            <h3 className="font-bold mb-2">Implementation</h3>
            <p className="text-sm">
              Structured execution of strategic initiatives with clear
              milestones
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">4</span>
            </div>
            <h3 className="font-bold mb-2">Measurement & Refinement</h3>
            <p className="text-sm">
              Ongoing performance tracking and strategy refinement
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Profit Method Consultation</Link>
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Precision Metal Products</CardTitle>
              <CardDescription>CNC Machining Manufacturer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Implemented the Profit Method to optimize operations and expand
                capacity, resulting in:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>35% increase in production capacity</li>
                <li>22% improvement in gross margin</li>
                <li>$1.2M in tax savings over 3 years</li>
                <li>Successful expansion into aerospace market</li>
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
                Applied the Profit Method to drive strategic growth and
                operational improvements:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>43% revenue growth in 24 months</li>
                <li>18% reduction in production costs</li>
                <li>Successful implementation of new ERP system</li>
                <li>$850K in R&D tax credits secured</li>
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
                Leveraged the Profit Method to optimize operations and drive
                financial performance:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>28% improvement in EBITDA</li>
                <li>15% reduction in inventory carrying costs</li>
                <li>Successful implementation of cost accounting system</li>
                <li>$1.5M in growth financing secured</li>
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
              alt="Manufacturing business consultation"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Manufacturing Business?
            </h2>
            <p className="text-lg mb-6">
              Schedule a consultation to learn how the Profit Method can help
              your manufacturing business achieve sustainable growth,
              operational excellence, and financial optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/growth-planning-guide">
                  Download Growth Planning Guide{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
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

          <Card>
            <CardHeader>
              <CardTitle>Tax Savings Calculator</CardTitle>
              <CardDescription>Identify potential tax savings</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our tax savings calculator helps manufacturing businesses
                identify potential tax savings opportunities specific to the
                manufacturing sector.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/savings-calculators">
                  Calculate Savings
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Growth Planning Guide</CardTitle>
              <CardDescription>Comprehensive growth strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our comprehensive guide provides manufacturing businesses with
                actionable strategies for effective growth planning and
                implementation.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/growth-planning-guide">
                  Access Guide
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
