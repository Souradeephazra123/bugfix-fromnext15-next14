import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  PieChart,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { ProcessStep } from "@/components/process-step";
import Testimonial from "@/components/Testimonial";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Financial Analysis Services for Manufacturers | Schapira CPA",
  description:
    "Our financial analysis services help manufacturing businesses identify growth opportunities, optimize operations, and make data-driven decisions.",
};

export default function FinancialAnalysisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Financial Analysis Services"
        description="Transform your manufacturing business with data-driven insights and strategic financial analysis"
        image="/placeholder.svg?height=400&width=800"
      />

      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Make Better Business Decisions with Financial Clarity"
                description="Our financial analysis services provide manufacturing businesses with the insights needed to optimize operations, identify growth opportunities, and improve profitability."
              />
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Performance Analysis</h3>
                    <p className="text-muted-foreground">
                      Comprehensive assessment of your financial performance
                      against industry benchmarks
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Operational Metrics</h3>
                    <p className="text-muted-foreground">
                      Detailed analysis of key operational metrics to identify
                      efficiency improvements
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PieChart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Cost Structure Optimization</h3>
                    <p className="text-muted-foreground">
                      In-depth review of your cost structure to identify savings
                      opportunities
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileSpreadsheet className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Financial Forecasting</h3>
                    <p className="text-muted-foreground">
                      Data-driven projections to support strategic planning and
                      growth initiatives
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/consultation">
                    Schedule a Financial Analysis Consultation{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Financial analysis dashboard for manufacturing"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our Financial Analysis Process"
              description="A systematic approach to uncovering financial insights that drive business growth"
              centered
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="01"
                title="Data Collection"
                description="We gather financial data from your accounting systems, ERP, and other relevant sources to create a comprehensive dataset."
              />
              <ProcessStep
                number="02"
                title="Analysis & Benchmarking"
                description="We analyze your financial data against industry benchmarks to identify strengths, weaknesses, and opportunities."
              />
              <ProcessStep
                number="03"
                title="Insight Development"
                description="We develop actionable insights and recommendations based on our analysis to address key business challenges."
              />
              <ProcessStep
                number="04"
                title="Strategic Implementation"
                description="We work with you to implement recommendations and monitor progress toward financial goals."
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="Financial Analysis Services"
            description="Comprehensive financial analysis solutions tailored for manufacturing businesses"
            centered
          />
          <Tabs defaultValue="performance" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="performance">
                Performance Analysis
              </TabsTrigger>
              <TabsTrigger value="operational">Operational Metrics</TabsTrigger>
              <TabsTrigger value="cost">Cost Structure</TabsTrigger>
              <TabsTrigger value="forecasting">
                Financial Forecasting
              </TabsTrigger>
            </TabsList>
            <TabsContent value="performance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analysis</CardTitle>
                  <CardDescription>
                    Comprehensive assessment of your financial performance
                    against industry benchmarks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-medium mb-2">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Profitability ratio analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Liquidity and solvency assessment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Industry benchmark comparison</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Trend analysis and visualization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Performance improvement recommendations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>
                            Identify financial strengths and weaknesses
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Compare performance to industry peers</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Track progress toward financial goals</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Make data-driven strategic decisions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improve stakeholder communication</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="operational" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Operational Metrics</CardTitle>
                  <CardDescription>
                    Detailed analysis of key operational metrics to identify
                    efficiency improvements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-medium mb-2">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Production efficiency analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Inventory turnover assessment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Labor productivity metrics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Equipment utilization review</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Operational KPI dashboard development</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Identify operational bottlenecks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improve resource allocation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduce production costs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enhance operational efficiency</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Drive continuous improvement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cost" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cost Structure Optimization</CardTitle>
                  <CardDescription>
                    In-depth review of your cost structure to identify savings
                    opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-medium mb-2">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Fixed vs. variable cost analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cost driver identification</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Overhead allocation review</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Supply chain cost assessment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cost reduction strategy development</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Identify cost-saving opportunities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improve gross and net margins</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enhance pricing strategies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Optimize resource allocation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Increase overall profitability</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="forecasting" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Forecasting</CardTitle>
                  <CardDescription>
                    Data-driven projections to support strategic planning and
                    growth initiatives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-medium mb-2">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Revenue and expense projections</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cash flow forecasting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Scenario planning and analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Capital expenditure planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Growth strategy financial modeling</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improve strategic planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enhance budgeting accuracy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Support investment decisions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Anticipate cash flow challenges</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Facilitate better resource allocation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Frequently Asked Questions"
              description="Common questions about our financial analysis services"
              centered
            />
            <div className="mt-8 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How often should we conduct a financial analysis?
                  </AccordionTrigger>
                  <AccordionContent>
                    We recommend conducting a comprehensive financial analysis
                    quarterly to align with your financial reporting cycles.
                    This allows you to identify trends and make timely
                    adjustments to your strategy. For specific operational
                    metrics, monthly or even weekly monitoring may be beneficial
                    depending on your business needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What information do you need to perform a financial
                    analysis?
                  </AccordionTrigger>
                  <AccordionContent>
                    We typically require your financial statements (income
                    statement, balance sheet, cash flow statement), operational
                    data (production metrics, inventory levels, etc.), and any
                    relevant industry benchmarks. We can work with your
                    accounting system or ERP to extract this data efficiently.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do you benchmark our performance against the industry?
                  </AccordionTrigger>
                  <AccordionContent>
                    We use industry-specific databases and research to compare
                    your financial and operational metrics against similar-sized
                    companies in your sector. This includes profitability
                    ratios, efficiency metrics, liquidity measures, and other
                    key performance indicators relevant to manufacturing
                    businesses.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can you help implement the recommendations from the
                    analysis?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer implementation support as part of our
                    financial analysis services. Our team can work with your
                    management to develop action plans, establish monitoring
                    systems, and provide ongoing guidance to ensure the
                    recommendations are effectively implemented and yield the
                    expected results.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How do you present the findings of the financial analysis?
                  </AccordionTrigger>
                  <AccordionContent>
                    We provide a comprehensive report with executive summaries,
                    detailed analysis, visual representations of key metrics,
                    and actionable recommendations. We also conduct a
                    presentation meeting with your management team to explain
                    the findings, answer questions, and discuss implementation
                    strategies.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="What Our Clients Say"
            description="Hear from manufacturing businesses that have benefited from our financial analysis services"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              quote="The financial analysis provided by Schapira CPA helped us identify $450,000 in cost-saving opportunities that we had overlooked. Their insights were invaluable to our business."
              author="Michael Johnson"
              role="CFO, Precision Manufacturing Inc."
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="Their operational metrics analysis transformed how we track performance. We've seen a 15% improvement in production efficiency since implementing their recommendations."
              author="Sarah Williams"
              role="Operations Director, Advanced Components Ltd."
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="The forecasting models they developed helped us secure financing for our expansion. The bank was impressed with the level of detail and accuracy in our projections."
              author="David Chen"
              role="CEO, Innovative Fabrication Co."
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        <ContactCTA
          title="Ready to gain financial clarity for your manufacturing business?"
          description="Schedule a consultation to discuss how our financial analysis services can help you optimize operations and drive growth."
          buttonText="Schedule a Consultation"
          buttonLink="/consultation"
        />
      </main>
    </div>
  );
}
