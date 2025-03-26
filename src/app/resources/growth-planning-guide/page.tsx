import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  CalendarCheck,
  BarChartIcon as ChartBar,
  LineChart,
  Target,
  Users,
  ArrowRight,
  Download,
  FileText,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Growth Planning Guide for Manufacturing Businesses | Schapira CPA",
  description:
    "Comprehensive growth planning strategies for manufacturing businesses. Learn effective market analysis, goal setting, strategic planning, and performance measurement techniques.",
  keywords:
    "manufacturing growth planning, business expansion strategy, manufacturing strategic planning, growth metrics, market analysis for manufacturers",
};

export default function GrowthPlanningGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Growth Planning Guide</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Manufacturing facility with workers planning growth strategies"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Growth Planning Guide for Manufacturing Businesses
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            A comprehensive framework to help manufacturing businesses develop
            effective growth strategies, set achievable goals, and implement
            actionable plans for sustainable expansion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <Link href="#strategic-planning">Explore Strategic Planning</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why Growth Planning Matters for Manufacturers
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          In today's competitive manufacturing landscape, strategic growth
          planning is no longer optional—it's essential. Manufacturing
          businesses face unique challenges including capital-intensive
          operations, complex supply chains, workforce development needs, and
          rapidly evolving technology. A well-structured growth plan helps
          navigate these challenges while capitalizing on opportunities.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This guide provides manufacturing executives, owners, and financial
          leaders with a framework to develop comprehensive growth strategies
          tailored to the manufacturing sector's specific needs.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="font-medium">
            According to industry research, manufacturing businesses with
            documented growth plans are 2.5x more likely to achieve their
            revenue targets and 3x more likely to successfully expand into new
            markets.
          </p>
        </div>
      </div>

      <Tabs defaultValue="market-analysis" className="max-w-5xl mx-auto mb-16">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="market-analysis">Market Analysis</TabsTrigger>
          <TabsTrigger value="goal-setting">Goal Setting</TabsTrigger>
          <TabsTrigger value="strategic-planning">
            Strategic Planning
          </TabsTrigger>
          <TabsTrigger value="performance-measurement">
            Performance Measurement
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="market-analysis"
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Users className="mr-2 h-6 w-6 text-blue-600" />
            Market Analysis for Manufacturing Growth
          </h3>
          <p className="mb-6">
            Effective market analysis helps manufacturing businesses identify
            opportunities, understand competitive landscapes, and align
            production capabilities with market demands.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Industry Trend Analysis</CardTitle>
                <CardDescription>
                  Identify emerging patterns and shifts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Monitor technological advancements affecting your
                    manufacturing niche
                  </li>
                  <li>
                    Track regulatory changes impacting production processes
                  </li>
                  <li>
                    Analyze supply chain evolutions and material availability
                  </li>
                  <li>
                    Evaluate sustainability trends and their impact on
                    manufacturing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Competitive Landscape Assessment</CardTitle>
                <CardDescription>
                  Understand your position in the market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Identify direct and indirect competitors</li>
                  <li>
                    Analyze competitor production capabilities and capacity
                  </li>
                  <li>
                    Evaluate pricing strategies across the competitive landscape
                  </li>
                  <li>Assess quality positioning and market perception</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Customer Needs Analysis</CardTitle>
                <CardDescription>
                  Align production with market demands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Conduct customer interviews and feedback sessions</li>
                  <li>Analyze order patterns and product performance</li>
                  <li>Identify unmet needs in your customer segments</li>
                  <li>
                    Evaluate changing expectations in quality, delivery, and
                    service
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Opportunity Identification</CardTitle>
                <CardDescription>Find new avenues for growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Identify adjacent markets for existing production
                    capabilities
                  </li>
                  <li>Evaluate international expansion opportunities</li>
                  <li>Assess vertical integration possibilities</li>
                  <li>Analyze potential for new product development</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-bold mb-2">
              Market Analysis Tools for Manufacturers
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)
              </li>
              <li>Porter's Five Forces Model</li>
              <li>Market Segmentation Analysis</li>
              <li>Voice of Customer (VOC) Research</li>
              <li>Competitive Benchmarking</li>
            </ul>
          </div>

          <div className="flex justify-end">
            <Button asChild>
              <Link href="/resources/market-analysis-template">
                Download Market Analysis Template{" "}
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent
          value="goal-setting"
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Target className="mr-2 h-6 w-6 text-blue-600" />
            Effective Goal Setting for Manufacturing Growth
          </h3>
          <p className="mb-6">
            Strategic goal setting provides manufacturing businesses with clear
            targets and milestones to guide growth initiatives and measure
            progress.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-bold text-lg mb-3">
              The SMART Framework for Manufacturing Goals
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-blue-700">Specific:</span>{" "}
                Clearly define what you want to achieve (e.g., "Increase
                production capacity of Product X by 25%" rather than "Grow
                production")
              </li>
              <li>
                <span className="font-semibold text-blue-700">Measurable:</span>{" "}
                Establish concrete criteria for measuring progress (e.g., units
                produced per hour, defect rates, on-time delivery percentage)
              </li>
              <li>
                <span className="font-semibold text-blue-700">Achievable:</span>{" "}
                Set goals that are challenging but attainable given your
                resources and constraints
              </li>
              <li>
                <span className="font-semibold text-blue-700">Relevant:</span>{" "}
                Ensure goals align with your overall business strategy and
                manufacturing capabilities
              </li>
              <li>
                <span className="font-semibold text-blue-700">Time-bound:</span>{" "}
                Establish a clear timeframe for achievement with interim
                milestones
              </li>
            </ul>
          </div>

          <h4 className="text-xl font-bold mb-4">
            Key Growth Goal Categories for Manufacturers
          </h4>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Production Capacity Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Output volume increases</li>
                  <li>Production line efficiency improvements</li>
                  <li>Facility expansion targets</li>
                  <li>Equipment utilization rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Performance Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Revenue growth targets</li>
                  <li>Profit margin improvements</li>
                  <li>Cost reduction objectives</li>
                  <li>Working capital optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Expansion Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>New customer acquisition targets</li>
                  <li>Geographic expansion objectives</li>
                  <li>Market share growth goals</li>
                  <li>New product introduction timelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operational Excellence Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Quality improvement metrics</li>
                  <li>Lead time reduction targets</li>
                  <li>Inventory optimization objectives</li>
                  <li>Sustainability and compliance goals</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-bold mb-2">Goal Alignment Strategies</h4>
            <p className="mb-4">
              Ensure your manufacturing growth goals are aligned across these
              key dimensions:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Vertical alignment:</span> Goals
                should cascade from strategic objectives to departmental and
                individual targets
              </li>
              <li>
                <span className="font-medium">Horizontal alignment:</span> Goals
                across departments should be complementary (e.g., production and
                sales capacity alignment)
              </li>
              <li>
                <span className="font-medium">Resource alignment:</span> Goals
                should be supported by appropriate budget, staffing, and
                equipment allocations
              </li>
              <li>
                <span className="font-medium">Timeline alignment:</span>{" "}
                Short-term goals should build toward medium and long-term
                objectives
              </li>
            </ul>
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/profit-method/growth-planning-framework"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Learn more about our Growth Planning Framework{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Button asChild>
              <Link href="/resources/goal-setting-worksheet">
                Download Goal Setting Worksheet{" "}
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent
          value="strategic-planning"
          id="strategic-planning"
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <ChartBar className="mr-2 h-6 w-6 text-blue-600" />
            Strategic Planning for Manufacturing Growth
          </h3>
          <p className="mb-6">
            Strategic planning translates market insights and goals into
            actionable initiatives that drive manufacturing business growth and
            competitive advantage.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">
              Core Components of Manufacturing Growth Strategy
            </h4>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Production Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Capacity expansion planning</li>
                    <li>Technology investment roadmap</li>
                    <li>Automation and efficiency initiatives</li>
                    <li>Make vs. buy decisions</li>
                    <li>Facility optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Customer segment prioritization</li>
                    <li>Product portfolio expansion</li>
                    <li>Pricing and positioning strategy</li>
                    <li>Channel development plans</li>
                    <li>Brand and reputation building</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operational Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Supply chain optimization</li>
                    <li>Quality management systems</li>
                    <li>Lean manufacturing implementation</li>
                    <li>Inventory management approach</li>
                    <li>Continuous improvement programs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Capital allocation framework</li>
                    <li>Investment prioritization criteria</li>
                    <li>Working capital optimization</li>
                    <li>Funding and financing approach</li>
                    <li>Cost structure management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organizational Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Talent acquisition and development</li>
                    <li>Organizational structure evolution</li>
                    <li>Leadership development pipeline</li>
                    <li>Culture and change management</li>
                    <li>Knowledge management systems</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-bold text-lg mb-3">
              Strategic Planning Process for Manufacturers
            </h4>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-medium">Situation Analysis:</span> Assess
                current manufacturing capabilities, market position, and
                competitive landscape
              </li>
              <li>
                <span className="font-medium">
                  Strategic Direction Setting:
                </span>{" "}
                Define vision, mission, and core strategic objectives for growth
              </li>
              <li>
                <span className="font-medium">Strategy Formulation:</span>{" "}
                Develop specific strategies across production, market,
                operations, finance, and organization
              </li>
              <li>
                <span className="font-medium">Initiative Development:</span>{" "}
                Create detailed action plans with owners, timelines, and
                resource requirements
              </li>
              <li>
                <span className="font-medium">Resource Allocation:</span> Align
                capital, operating budgets, and human resources with strategic
                priorities
              </li>
              <li>
                <span className="font-medium">Implementation Planning:</span>{" "}
                Establish governance, communication, and change management
                approaches
              </li>
              <li>
                <span className="font-medium">Performance Monitoring:</span>{" "}
                Define KPIs and review cadence to track progress and make
                adjustments
              </li>
            </ol>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">
              Growth Strategy Frameworks for Manufacturers
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold mb-2">
                  Ansoff Matrix for Manufacturing
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Market Penetration:</span>{" "}
                    Sell more existing products to current customers
                  </li>
                  <li>
                    <span className="font-medium">Market Development:</span>{" "}
                    Sell existing products to new customer segments
                  </li>
                  <li>
                    <span className="font-medium">Product Development:</span>{" "}
                    Create new products for existing customers
                  </li>
                  <li>
                    <span className="font-medium">Diversification:</span>{" "}
                    Develop new products for new markets
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold mb-2">
                  BCG Matrix for Manufacturing Portfolio
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Stars:</span> High-growth
                    products with high market share
                  </li>
                  <li>
                    <span className="font-medium">Cash Cows:</span> Low-growth
                    products with high market share
                  </li>
                  <li>
                    <span className="font-medium">Question Marks:</span>{" "}
                    High-growth products with low market share
                  </li>
                  <li>
                    <span className="font-medium">Dogs:</span> Low-growth
                    products with low market share
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/profit-method/roi-driven-strategy"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Explore our ROI-Driven Strategy approach{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Button asChild>
              <Link href="/resources/strategic-planning-template">
                Download Strategic Planning Template{" "}
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent
          value="performance-measurement"
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <LineChart className="mr-2 h-6 w-6 text-blue-600" />
            Performance Measurement for Manufacturing Growth
          </h3>
          <p className="mb-6">
            Effective performance measurement enables manufacturing businesses
            to track progress, identify improvement opportunities, and make
            data-driven adjustments to growth strategies.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">
              Key Performance Indicators (KPIs) for Manufacturing Growth
            </h4>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Growth Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Revenue Growth Rate:</span>{" "}
                      Year-over-year and quarter-over-quarter
                    </li>
                    <li>
                      <span className="font-medium">Gross Profit Margin:</span>{" "}
                      Gross profit as percentage of revenue
                    </li>
                    <li>
                      <span className="font-medium">EBITDA Growth:</span>{" "}
                      Earnings before interest, taxes, depreciation, and
                      amortization
                    </li>
                    <li>
                      <span className="font-medium">
                        Return on Invested Capital (ROIC):
                      </span>{" "}
                      Net operating profit after tax divided by invested capital
                    </li>
                    <li>
                      <span className="font-medium">
                        Cash Conversion Cycle:
                      </span>{" "}
                      Days inventory + days receivable - days payable
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/resources/financial-ratios"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View our Financial Ratios Calculator →
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operational Growth Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">
                        Production Volume Growth:
                      </span>{" "}
                      Increase in units produced
                    </li>
                    <li>
                      <span className="font-medium">Capacity Utilization:</span>{" "}
                      Actual output as percentage of maximum capacity
                    </li>
                    <li>
                      <span className="font-medium">
                        Overall Equipment Effectiveness (OEE):
                      </span>{" "}
                      Availability × Performance × Quality
                    </li>
                    <li>
                      <span className="font-medium">
                        New Product Introduction Success Rate:
                      </span>{" "}
                      Percentage of new products meeting targets
                    </li>
                    <li>
                      <span className="font-medium">
                        Manufacturing Cycle Time:
                      </span>{" "}
                      Time from production start to completion
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Growth Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Market Share Growth:</span>{" "}
                      Change in percentage of total addressable market
                    </li>
                    <li>
                      <span className="font-medium">
                        Customer Acquisition Rate:
                      </span>{" "}
                      New customers per period
                    </li>
                    <li>
                      <span className="font-medium">
                        Customer Retention Rate:
                      </span>{" "}
                      Percentage of customers retained
                    </li>
                    <li>
                      <span className="font-medium">Revenue per Customer:</span>{" "}
                      Average revenue generated per customer
                    </li>
                    <li>
                      <span className="font-medium">
                        New Market Penetration:
                      </span>{" "}
                      Sales in new geographic or vertical markets
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Innovation & Capability Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">R&D ROI:</span> Return on
                      research and development investment
                    </li>
                    <li>
                      <span className="font-medium">
                        New Product Revenue Percentage:
                      </span>{" "}
                      Revenue from products launched in past 3 years
                    </li>
                    <li>
                      <span className="font-medium">
                        Technology Adoption Rate:
                      </span>{" "}
                      Implementation of new manufacturing technologies
                    </li>
                    <li>
                      <span className="font-medium">Skill Gap Reduction:</span>{" "}
                      Improvement in workforce capability metrics
                    </li>
                    <li>
                      <span className="font-medium">
                        Digital Transformation Progress:
                      </span>{" "}
                      Advancement against digital roadmap
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/services/rd-tax-credits"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Learn about R&D Tax Credits →
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-bold text-lg mb-3">
              Performance Measurement Best Practices
            </h4>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <span className="font-medium">
                  Balanced Scorecard Approach:
                </span>{" "}
                Maintain balance across financial, customer, internal process,
                and learning & growth perspectives
              </li>
              <li>
                <span className="font-medium">
                  Leading & Lagging Indicators:
                </span>{" "}
                Track both predictive (leading) and results-based (lagging)
                metrics
              </li>
              <li>
                <span className="font-medium">Cascading Metrics:</span> Align
                enterprise KPIs with department, team, and individual
                performance measures
              </li>
              <li>
                <span className="font-medium">Visual Management:</span>{" "}
                Implement dashboards and visual controls to make performance
                visible
              </li>
              <li>
                <span className="font-medium">Regular Review Cadence:</span>{" "}
                Establish structured review processes at appropriate intervals
                (daily, weekly, monthly, quarterly)
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">
              Performance Measurement Systems for Manufacturers
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold mb-2">
                  Real-Time Production Monitoring
                </h5>
                <p className="mb-2">
                  Implement systems that provide immediate visibility into:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Machine utilization and downtime</li>
                  <li>Production rates against targets</li>
                  <li>Quality metrics and defect rates</li>
                  <li>Material consumption and waste</li>
                  <li>Labor productivity and efficiency</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-bold mb-2">Executive Growth Dashboards</h5>
                <p className="mb-2">Develop executive-level visibility into:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Growth KPIs against targets</li>
                  <li>Strategic initiative progress</li>
                  <li>Resource utilization and allocation</li>
                  <li>Market and competitive position</li>
                  <li>Risk indicators and mitigation status</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button asChild>
              <Link href="/resources/kpi-dashboard-template">
                Download KPI Dashboard Template{" "}
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Implementing Your Manufacturing Growth Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarCheck className="mr-2 h-5 w-5 text-blue-600" />
                Phased Implementation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Break your growth plan into manageable phases with clear
                milestones:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Foundation building (0-6 months)</li>
                <li>Capability development (6-12 months)</li>
                <li>Acceleration (12-24 months)</li>
                <li>Sustained growth (24+ months)</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-600" />
                Cross-Functional Alignment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Ensure alignment across key manufacturing functions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Operations and production</li>
                <li>Sales and marketing</li>
                <li>Engineering and R&D</li>
                <li>Finance and accounting</li>
                <li>Human resources</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-blue-600" />
                Resource Allocation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Strategically allocate resources to support growth:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Capital investment prioritization</li>
                <li>Workforce development planning</li>
                <li>Technology investment roadmap</li>
                <li>Working capital management</li>
                <li>Strategic partnership development</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h3 className="text-xl font-bold mb-4">
            Common Growth Planning Pitfalls for Manufacturers
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-medium">
                    Misalignment between sales and production capacity
                  </span>
                  <p className="text-sm mt-1">
                    Ensure sales growth targets align with production capacity
                    expansion plans
                  </p>
                </li>
                <li>
                  <span className="font-medium">
                    Underestimating capital requirements
                  </span>
                  <p className="text-sm mt-1">
                    Develop detailed capital plans with appropriate
                    contingencies
                  </p>
                </li>
                <li>
                  <span className="font-medium">
                    Insufficient focus on workforce development
                  </span>
                  <p className="text-sm mt-1">
                    Address talent acquisition and training needs proactively
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-medium">
                    Neglecting supply chain implications
                  </span>
                  <p className="text-sm mt-1">
                    Ensure suppliers can support increased volume and new
                    requirements
                  </p>
                </li>
                <li>
                  <span className="font-medium">
                    Inadequate quality system scaling
                  </span>
                  <p className="text-sm mt-1">
                    Evolve quality systems to maintain standards during growth
                  </p>
                </li>
                <li>
                  <span className="font-medium">
                    Failing to adapt management systems
                  </span>
                  <p className="text-sm mt-1">
                    Develop management capabilities and systems to support a
                    larger operation
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Manufacturing growth planning consultation"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Expert Guidance for Your Growth Plan
            </h2>
            <p className="text-lg mb-6">
              Our team specializes in helping manufacturing businesses develop
              and implement effective growth strategies tailored to your
              specific needs, capabilities, and market opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/profit-method/growth-planning-framework">
                  Explore Our Growth Framework{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Additional Growth Planning Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Manufacturing Valuation Calculator</CardTitle>
              <CardDescription>
                Understand your business's current and potential value
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our interactive valuation tool helps you assess your
                manufacturing business's current value and identify key drivers
                for increasing valuation through strategic growth.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/manufacturing-valuation">
                  Access Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Ratio Analysis</CardTitle>
              <CardDescription>
                Benchmark your financial performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Compare your manufacturing business's financial ratios against
                industry benchmarks to identify strengths, weaknesses, and
                growth opportunities.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/financial-ratios">
                  Analyze Ratios <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Savings Calculator</CardTitle>
              <CardDescription>
                Optimize your tax position for growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Identify potential tax savings opportunities that can free up
                capital for reinvestment in your manufacturing growth
                initiatives.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/savings-calculators">
                  Calculate Savings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-600" />
                Growth Planning Case Studies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/portfolio/precision-metal-products"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Precision Metal Products: 35% Growth in 18 Months
                  </Link>
                  <p className="text-sm mt-1">
                    How a precision metal manufacturer implemented a strategic
                    growth plan to expand capacity and enter new markets.
                  </p>
                </li>
                <li>
                  <Link
                    href="/portfolio/advanced-composites"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Advanced Composites: Doubling Revenue Through
                    Diversification
                  </Link>
                  <p className="text-sm mt-1">
                    Strategic diversification into adjacent markets led to
                    sustained growth for this composites manufacturer.
                  </p>
                </li>
                <li>
                  <Link
                    href="/portfolio/harvest-foods"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Harvest Foods: Scaling Production While Maintaining Quality
                  </Link>
                  <p className="text-sm mt-1">
                    How a food manufacturer successfully scaled operations while
                    enhancing quality systems and compliance.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="mr-2 h-5 w-5 text-blue-600" />
                Downloadable Templates & Guides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Link href="/resources/downloads/manufacturing-growth-plan-template.xlsx">
                      Manufacturing Growth Plan Template{" "}
                      <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
                <li className="flex items-center">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Link href="/resources/downloads/capacity-planning-worksheet.xlsx">
                      Production Capacity Planning Worksheet{" "}
                      <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
                <li className="flex items-center">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Link href="/resources/downloads/market-expansion-checklist.pdf">
                      Market Expansion Readiness Checklist{" "}
                      <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
                <li className="flex items-center">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Link href="/resources/downloads/growth-financing-guide.pdf">
                      Growth Financing Options Guide{" "}
                      <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
