import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Shield,
} from "lucide-react";

import { Breadcrumb } from "@/components/breadcrumb";
import { SectionHeading } from "@/components/section-heading";
import ProcessStep from "@/components/process-step";
import  Testimonial  from "@/components/Testimonial";
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

export const metadata: Metadata = {
  title: "Financial Statement Services for Manufacturers | Schapira CPA",
  description:
    "Accurate, timely financial statements that provide clear insights for better decision-making and stakeholder confidence for manufacturing businesses.",
};

export default function FinancialStatementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-12">
        <div className="container">
          <Breadcrumb
            items={[
              { title: "Home", link: "/" },
              { title: "Services", link: "/services" },
              {
                title: "Financial Statement Services",
                link: "/services/financial-statements",
              },
            ]}
          />
          <div className="mt-6">
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              Financial Statement Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Accurate, timely financial statements tailored for manufacturing
              businesses
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="Financial statements for manufacturing"
          className="w-full h-[300px] object-cover"
        />
      </div>

      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Financial Clarity for Manufacturing Success"
                description="Our financial statement services provide manufacturing businesses with accurate, insightful financial reporting that supports better decision-making and builds stakeholder confidence."
              />
              <p className="mt-4 text-muted-foreground">
                Manufacturing businesses face unique financial reporting
                challenges, from complex inventory valuation to specialized
                equipment depreciation. Our team brings deep industry expertise
                to ensure your financial statements accurately reflect your
                manufacturing operation's financial position and performance.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-brand-gold" />
                      Audit-Ready Statements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Financial statements prepared to withstand scrutiny from
                      auditors, lenders, and investors.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Users className="h-5 w-5 mr-2 text-brand-gold" />
                      Stakeholder Confidence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Build trust with banks, investors, and partners through
                      professional, accurate reporting.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-brand-gold" />
                      Decision Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Gain insights that inform strategic decisions about
                      production, pricing, and growth.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-brand-gold" />
                      Timely Reporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Receive financial statements when you need them, not weeks
                      after the period ends.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Manufacturing financial statements"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our Financial Statement Services"
              description="Comprehensive financial reporting solutions for manufacturing businesses"
              centered
            />
            <Tabs defaultValue="compilation" className="mt-12">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="compilation">Compilation</TabsTrigger>
                <TabsTrigger value="review">Review</TabsTrigger>
                <TabsTrigger value="specialized">
                  Specialized Reporting
                </TabsTrigger>
              </TabsList>
              <TabsContent value="compilation" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Statement Compilation</CardTitle>
                    <CardDescription>
                      Professional preparation of financial statements without
                      assurance
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
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Balance Sheet preparation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Income Statement preparation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Statement of Cash Flows</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Statement of Changes in Equity</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Financial statement disclosures</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>
                              Manufacturing-specific accounting treatments
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">Ideal For:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Internal management use</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>
                              Bank financing with minimal requirements
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Smaller manufacturing operations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>
                              Businesses with straightforward operations
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>
                              Companies with limited third-party reporting needs
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="review" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Statement Review</CardTitle>
                    <CardDescription>
                      Limited assurance engagement providing increased
                      confidence in financial statements
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
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>All compilation services</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Analytical procedures</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Management inquiries</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Limited assurance report</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>
                              Enhanced financial statement disclosures
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Industry-specific ratio analysis</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">Ideal For:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Bank financing requirements</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Bonding requirements</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Mid-sized manufacturing operations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Businesses seeking outside investment</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>
                              Companies with moderate third-party reporting
                              needs
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="specialized" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Specialized Manufacturing Reporting</CardTitle>
                    <CardDescription>
                      Industry-specific financial reporting tailored to
                      manufacturing operations
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
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Cost of Goods Manufactured statements</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Production efficiency reporting</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Inventory valuation analysis</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Product line profitability reporting</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>
                              Manufacturing capacity utilization reports
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Custom KPI dashboards</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">Ideal For:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Manufacturing-specific decision support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Production optimization</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Pricing strategy development</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Operational efficiency improvement</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Strategic planning and forecasting</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="Manufacturing-Specific Financial Reporting Considerations"
            description="We understand the unique financial reporting challenges faced by manufacturers"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5 text-brand-gold" />
                  </div>
                  Inventory Valuation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proper valuation of raw materials, work-in-process, and
                  finished goods inventory is critical for manufacturing
                  financial statements. We ensure accurate application of FIFO,
                  LIFO, or weighted average methods based on your specific
                  needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <TrendingUp className="h-5 w-5 text-brand-gold" />
                  </div>
                  Cost Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manufacturing businesses must properly allocate direct and
                  indirect costs to accurately reflect production expenses. Our
                  approach ensures appropriate allocation of labor, materials,
                  and overhead to provide clear visibility into true production
                  costs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-brand-gold" />
                  </div>
                  Equipment Depreciation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manufacturing equipment represents significant capital
                  investment that must be properly depreciated. We implement
                  appropriate depreciation methods that align with your
                  equipment usage patterns and tax strategy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <BarChart3 className="h-5 w-5 text-brand-gold" />
                  </div>
                  Revenue Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manufacturing contracts often involve complex revenue
                  recognition issues, especially for custom orders or long-term
                  projects. We ensure compliance with current accounting
                  standards while accurately reflecting your business
                  activities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-brand-gold" />
                  </div>
                  Production Capacity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Properly accounting for idle capacity and production variances
                  is essential for understanding true manufacturing costs. Our
                  financial statements provide clear visibility into these
                  factors to support better operational decisions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-brand-gold" />
                  </div>
                  Supply Chain Impacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manufacturing financial statements must properly reflect
                  supply chain disruptions, long-lead inventory items, and
                  vendor deposits. Our approach ensures these factors are
                  appropriately represented in your financial reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our Financial Statement Process"
              description="A systematic approach to creating accurate, insightful financial statements"
              centered
            />
            <div className="mt-12">
              <ProcessStep
                number="01"
                title="Initial Assessment"
                description="We evaluate your current financial reporting processes, identify manufacturing-specific requirements, and determine the appropriate level of service for your needs."
              />

              <ProcessStep
                number="02"
                title="Data Collection & Organization"
                description="Our team works with you to gather and organize the financial data needed for accurate statement preparation, including manufacturing-specific information."
              />

              <ProcessStep
                number="03"
                title="Statement Preparation"
                description="We prepare your financial statements using industry-specific accounting treatments that accurately reflect your manufacturing operations."
              />

              <ProcessStep
                number="04"
                title="Review & Analysis"
                description="Our experts review the statements for accuracy and compliance, then provide analysis to help you understand the financial implications for your business."
              />

              <ProcessStep
                number="05"
                title="Delivery & Implementation"
                description="We deliver finalized statements and work with you to implement any recommendations for improving financial performance or reporting processes."
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Case Study: Metal Fabrication Manufacturer"
                description="How improved financial statements transformed business decision-making"
              />
              <div className="mt-6 space-y-4">
                <p>
                  A mid-sized metal fabrication company was struggling with
                  inconsistent financial reporting that made it difficult to
                  understand true product profitability and operational
                  performance.
                </p>
                <p>
                  Our team implemented a comprehensive financial statement
                  overhaul that included:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Restructured chart of accounts to better reflect
                    manufacturing operations
                  </li>
                  <li>Improved inventory valuation methodology</li>
                  <li>
                    Enhanced cost allocation for direct and indirect
                    manufacturing expenses
                  </li>
                  <li>
                    Developed specialized reports for production efficiency and
                    capacity utilization
                  </li>
                  <li>Created product line profitability analysis</li>
                </ul>
                <p className="font-medium">Results:</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-brand-gold">32%</p>
                    <p className="text-sm">
                      Increase in gross margin through better pricing
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-brand-gold">$1.2M</p>
                    <p className="text-sm">
                      New credit line secured with improved reporting
                    </p>
                  </div>
                </div>
                <Link
                  href="/success-stories/manufacturing"
                  className="text-brand-gold font-medium hover:underline inline-block mt-4"
                >
                  Read the full case study →
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Metal fabrication financial statements case study"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <Testimonial
              quote="Schapira CPA transformed our financial reporting from a confusing mess to a powerful decision-making tool. Their manufacturing expertise made all the difference in creating statements that actually reflect how our business operates."
              author="James Wilson"
              role="CFO, Precision Metal Works"
            />
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Common questions about financial statements for manufacturing businesses"
            centered
          />
          <div className="mt-8 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How often should manufacturing businesses prepare financial
                  statements?
                </AccordionTrigger>
                <AccordionContent>
                  Most manufacturing businesses should prepare complete
                  financial statements monthly to support timely
                  decision-making. At minimum, quarterly statements are
                  essential for tracking seasonal variations and production
                  cycles. For specialized manufacturing reports like production
                  efficiency or capacity utilization, weekly or even daily
                  reporting may be beneficial depending on your operational
                  needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What's the difference between compiled and reviewed financial
                  statements?
                </AccordionTrigger>
                <AccordionContent>
                  Compiled financial statements are prepared by an accountant
                  without providing any assurance about their accuracy or
                  compliance with accounting standards. Reviewed financial
                  statements involve analytical procedures and inquiries to
                  provide limited assurance that no material modifications are
                  needed for the statements to conform with accounting
                  standards. For manufacturing businesses, the appropriate level
                  depends on your stakeholder requirements and the complexity of
                  your operations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do financial statements help with manufacturing business
                  decisions?
                </AccordionTrigger>
                <AccordionContent>
                  Properly prepared financial statements provide critical
                  insights for manufacturing businesses, including product line
                  profitability, production efficiency, capacity utilization,
                  inventory management effectiveness, and overall financial
                  health. These insights support decisions about pricing,
                  production scheduling, capital investments, and strategic
                  growth initiatives. Our manufacturing-specific financial
                  statements are designed to highlight the metrics most relevant
                  to your operational decisions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What information do you need to prepare our financial
                  statements?
                </AccordionTrigger>
                <AccordionContent>
                  We typically need your general ledger data, bank statements,
                  accounts receivable and payable aging reports, inventory
                  records, production reports, fixed asset listings, loan
                  agreements, and prior financial statements. For manufacturing
                  businesses, we also request information about work-in-process
                  inventory, production capacity, direct and indirect costs, and
                  any specialized manufacturing contracts or arrangements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How do you handle inventory valuation in manufacturing
                  financial statements?
                </AccordionTrigger>
                <AccordionContent>
                  We implement appropriate inventory valuation methods (FIFO,
                  LIFO, or weighted average) based on your specific
                  manufacturing processes and tax strategy. For work-in-process
                  inventory, we ensure proper allocation of direct materials,
                  direct labor, and manufacturing overhead. Our approach
                  includes regular inventory reconciliation and valuation
                  adjustments to maintain accuracy while complying with
                  accounting standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready for Financial Clarity?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get financial statements that provide true visibility into your
              manufacturing operation's performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-gold hover:bg-brand-gold-dark"
              >
                <Link href="/contact/schedule-review">
                  Schedule a Financial Statement Review
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/manufacturing-guides">
                  Download Sample Financial Package
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
