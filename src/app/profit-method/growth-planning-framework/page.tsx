import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  BarChart3,
  LineChart,
  Target,
  TrendingUp,
  Users,
  Download,
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
  title: "Growth Planning Framework for Manufacturing | Schapira CPA",
  description:
    "Our strategic Growth Planning Framework helps manufacturing businesses develop and implement effective strategies for sustainable growth and market expansion.",
  keywords:
    "manufacturing growth planning, business expansion strategy, manufacturing strategic planning, growth metrics, market analysis for manufacturers",
};

export default function GrowthPlanningFrameworkPage() {
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
            <BreadcrumbPage>Growth Planning Framework</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Manufacturing facility with strategic growth planning session"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Growth Planning Framework
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            A strategic approach to help manufacturing businesses develop and
            implement effective growth strategies for sustainable expansion and
            market leadership.
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
              <Link href="/resources/growth-planning-guide">
                Explore Growth Planning Guide
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Strategic Growth for Manufacturing Businesses
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our Growth Planning Framework provides manufacturing businesses with a
          structured approach to achieving sustainable growth. We help you
          develop a comprehensive growth strategy that aligns with your business
          objectives, market opportunities, and operational capabilities.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Unlike generic business growth models, our framework is specifically
          designed for the manufacturing sector, addressing the unique
          challenges and opportunities that manufacturing businesses face in
          today's competitive landscape.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="font-medium">
            Manufacturing businesses implementing our Growth Planning Framework
            have achieved an average of 31% revenue growth and 27% increase in
            market share within 24 months.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Framework Components
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Market Opportunity Assessment</CardTitle>
              </div>
              <CardDescription>
                Identifying and evaluating growth opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We help you identify and evaluate market opportunities that
                align with your manufacturing capabilities and business
                objectives. Our comprehensive assessment includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Market size and growth potential analysis</li>
                <li>Competitive landscape evaluation</li>
                <li>Customer needs and pain points identification</li>
                <li>Market entry barriers assessment</li>
                <li>Opportunity prioritization framework</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Strategic Growth Planning</CardTitle>
              </div>
              <CardDescription>
                Developing a comprehensive growth strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We work with you to develop a comprehensive growth strategy that
                addresses all aspects of your manufacturing business. Our
                strategic planning process includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Growth vision and objectives definition</li>
                <li>Market positioning and differentiation strategy</li>
                <li>Product portfolio expansion planning</li>
                <li>Channel development and market access strategy</li>
                <li>Strategic partnerships and alliance opportunities</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Capacity and Resource Planning</CardTitle>
              </div>
              <CardDescription>
                Aligning capabilities with growth objectives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We help you align your manufacturing capabilities and resources
                with your growth objectives to ensure successful implementation.
                Our capacity planning includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Production capacity analysis and expansion planning</li>
                <li>Equipment and technology investment roadmap</li>
                <li>Workforce planning and development strategy</li>
                <li>Supply chain capacity and capability assessment</li>
                <li>Facility and infrastructure planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Financial Modeling and Planning</CardTitle>
              </div>
              <CardDescription>
                Ensuring financial viability and optimization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We develop comprehensive financial models and plans to ensure
                the financial viability and optimization of your growth
                strategy. Our financial planning includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Growth scenario financial modeling</li>
                <li>Capital requirements and funding strategy</li>
                <li>ROI analysis and investment prioritization</li>
                <li>Cash flow forecasting and working capital planning</li>
                <li>Financial risk assessment and mitigation</li>
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
                <CardTitle>Implementation Roadmap</CardTitle>
              </div>
              <CardDescription>
                Translating strategy into actionable plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We help you translate your growth strategy into a detailed
                implementation roadmap with clear milestones and accountability.
                Our implementation planning includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Phased implementation planning</li>
                <li>Initiative prioritization and sequencing</li>
                <li>Resource allocation and responsibility assignment</li>
                <li>Timeline development with key milestones</li>
                <li>Risk management and contingency planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-blue-600">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Performance Measurement</CardTitle>
              </div>
              <CardDescription>
                Tracking progress and ensuring accountability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We develop comprehensive performance measurement systems to
                track progress, ensure accountability, and enable data-driven
                adjustments. Our approach includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Key performance indicator (KPI) development</li>
                <li>Performance dashboard design and implementation</li>
                <li>Regular review cadence and process design</li>
                <li>Variance analysis and corrective action planning</li>
                <li>Continuous improvement and strategy refinement</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Growth Planning Process
        </h2>

        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">1</span>
            </div>
            <h3 className="font-bold mb-2">Discovery</h3>
            <p className="text-sm">
              Comprehensive assessment of current state and growth potential
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">2</span>
            </div>
            <h3 className="font-bold mb-2">Strategy</h3>
            <p className="text-sm">
              Development of comprehensive growth strategy
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">3</span>
            </div>
            <h3 className="font-bold mb-2">Planning</h3>
            <p className="text-sm">
              Detailed implementation planning and resource allocation
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">4</span>
            </div>
            <h3 className="font-bold mb-2">Execution</h3>
            <p className="text-sm">
              Guided implementation with ongoing support
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-700">5</span>
            </div>
            <h3 className="font-bold mb-2">Optimization</h3>
            <p className="text-sm">
              Performance tracking and strategy refinement
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Growth Planning Consultation</Link>
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Growth Planning Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Precision Metal Products</CardTitle>
              <CardDescription>CNC Machining Manufacturer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Implemented our Growth Planning Framework to expand into new
                markets and increase capacity:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>35% revenue growth in 24 months</li>
                <li>Successful expansion into aerospace market</li>
                <li>50% increase in production capacity</li>
                <li>Acquisition of complementary business</li>
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
                Applied our Growth Planning Framework to drive strategic
                diversification:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>43% revenue growth through market diversification</li>
                <li>Successful entry into renewable energy sector</li>
                <li>Development of 3 new product lines</li>
                <li>Strategic acquisition of technology provider</li>
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
                Leveraged our Growth Planning Framework to expand product lines
                and distribution:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>38% revenue growth in 18 months</li>
                <li>Successful launch of premium product line</li>
                <li>Expansion into 3 new geographic markets</li>
                <li>Strategic partnership with national distributor</li>
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
              alt="Manufacturing growth planning session"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg mb-6">
              Schedule a consultation to learn how our Growth Planning Framework
              can help your manufacturing business achieve sustainable growth
              and market leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/growth-planning-guide">
                  Download Growth Planning Guide{" "}
                  <Download className="ml-2 h-4 w-4" />
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
              <CardTitle>ROI-Driven Strategy</CardTitle>
              <CardDescription>Maximize return on investment</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Learn how our ROI-Driven Strategy framework helps manufacturing
                businesses prioritize investments and initiatives based on their
                potential return.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/profit-method/roi-driven-strategy">
                  Learn More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
