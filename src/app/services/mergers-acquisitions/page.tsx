import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  TrendingUp,
  Search,
  FileCheck,
  Calculator,
  Building,
} from "lucide-react";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ProcessStep from "@/components/process-step";
import Testimonial from "@/components/Testimonial";
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
  title: "Manufacturing M&A Advisory Services | Schapira CPA",
  description:
    "Expert guidance through the acquisition or sale process, including valuation, due diligence, and tax-efficient transaction structuring for manufacturing businesses.",
};

export default function MergersAcquisitionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Mergers & Acquisitions Advisory"
        description="Strategic guidance for manufacturing business transactions"
        image="/placeholder.svg?height=400&width=800"
      />

      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Expert M&A Guidance for Manufacturing Businesses"
                description="Our specialized M&A advisory services help manufacturing business owners navigate complex transactions with confidence and maximize value."
              />
              <p className="mt-4 text-muted-foreground">
                Whether you're looking to acquire a complementary manufacturing
                operation, sell your business, or merge with a strategic
                partner, our team provides the industry-specific expertise
                needed to structure successful transactions that align with your
                goals.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Calculator className="h-5 w-5 mr-2 text-brand-gold" />
                      Accurate Valuation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Manufacturing-specific valuation methodologies that
                      account for equipment, inventory, and operational value.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Search className="h-5 w-5 mr-2 text-brand-gold" />
                      Comprehensive Due Diligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Thorough investigation of financial, operational, and
                      compliance aspects specific to manufacturing.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <FileCheck className="h-5 w-5 mr-2 text-brand-gold" />
                      Tax-Efficient Structuring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Transaction structures that minimize tax impact and
                      maximize after-tax proceeds.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Handshake className="h-5 w-5 mr-2 text-brand-gold" />
                      Negotiation Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Expert representation during deal negotiations to secure
                      favorable terms and conditions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Manufacturing mergers and acquisitions"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our M&A Advisory Services"
              description="Comprehensive support throughout the transaction lifecycle"
              centered
            />
            <Tabs defaultValue="buy" className="mt-12">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="buy">Buying a Business</TabsTrigger>
                <TabsTrigger value="sell">Selling Your Business</TabsTrigger>
                <TabsTrigger value="value">Business Valuation</TabsTrigger>
              </TabsList>
              <TabsContent value="buy" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Acquisition Advisory</CardTitle>
                    <CardDescription>
                      Strategic guidance for manufacturing business acquisitions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium mb-2">
                          Our Approach:
                        </h4>
                        <p className="mb-4">
                          We guide manufacturing businesses through the
                          acquisition process with a focus on strategic fit,
                          operational synergies, and financial performance. Our
                          team helps you identify suitable targets, evaluate
                          their true value, and structure deals that support
                          your growth objectives.
                        </p>
                        <h4 className="text-lg font-medium mb-2">
                          Services Include:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Acquisition strategy development</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Target identification and screening</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Manufacturing-specific due diligence</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Valuation and financial modeling</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Deal structure and negotiation support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Post-acquisition integration planning</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">
                          Manufacturing-Specific Considerations:
                        </h4>
                        <ul className="space-y-4">
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Equipment Valuation
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Accurate assessment of machinery and equipment
                              value, condition, and remaining useful life
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Production Capacity
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Evaluation of production capabilities, utilization
                              rates, and expansion potential
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Supply Chain Integration
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Assessment of supplier relationships, contracts,
                              and integration opportunities
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Workforce Evaluation
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Analysis of labor costs, skills, union agreements,
                              and retention strategies
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Regulatory Compliance
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Review of environmental, safety, and
                              industry-specific regulatory compliance
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sell" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Sale Advisory</CardTitle>
                    <CardDescription>
                      Maximizing value when selling your manufacturing business
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium mb-2">
                          Our Approach:
                        </h4>
                        <p className="mb-4">
                          We help manufacturing business owners prepare for and
                          execute successful exits that maximize value and
                          achieve personal and financial objectives. Our team
                          focuses on enhancing business value pre-sale,
                          identifying qualified buyers, and negotiating
                          favorable terms.
                        </p>
                        <h4 className="text-lg font-medium mb-2">
                          Services Include:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Exit strategy planning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Business valuation and enhancement</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>
                              Confidential marketing to qualified buyers
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Deal structure and tax planning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Negotiation and transaction support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Post-sale wealth management planning</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">
                          Pre-Sale Value Enhancement:
                        </h4>
                        <ul className="space-y-4">
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Financial Performance Optimization
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Improving financial metrics and reporting to
                              demonstrate business strength
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Operational Efficiency
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Streamlining manufacturing processes to maximize
                              productivity and profitability
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Customer Diversification
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Reducing customer concentration risk to increase
                              business stability
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Management Structure
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Developing a strong management team that can
                              operate without the owner
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Intellectual Property
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Protecting and documenting proprietary
                              manufacturing processes and technologies
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="value" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Manufacturing Business Valuation</CardTitle>
                    <CardDescription>
                      Accurate, industry-specific valuation services for
                      manufacturing businesses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-medium mb-2">
                          Our Approach:
                        </h4>
                        <p className="mb-4">
                          We provide comprehensive business valuations that
                          account for the unique aspects of manufacturing
                          operations. Our valuation methodology considers
                          tangible assets, operational efficiency, market
                          position, and growth potential to determine accurate
                          fair market value.
                        </p>
                        <h4 className="text-lg font-medium mb-2">
                          Valuation Methods:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Asset-based valuation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Income approach (DCF analysis)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Market comparable analysis</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>EBITDA multiple method</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-brand-gold" />
                            <span>Manufacturing-specific adjustments</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">
                          Valuation Purposes:
                        </h4>
                        <ul className="space-y-4">
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Mergers & Acquisitions
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Determining fair market value for business sale or
                              acquisition
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">Partner Buyouts</strong>
                            <span className="text-sm text-muted-foreground">
                              Establishing equitable value for ownership
                              transitions
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Estate & Succession Planning
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Valuing business interests for estate tax purposes
                              and succession planning
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Financial Reporting
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Goodwill impairment testing and purchase price
                              allocation
                            </span>
                          </li>
                          <li className="border-l-2 border-brand-gold pl-4 py-1">
                            <strong className="block">
                              Strategic Planning
                            </strong>
                            <span className="text-sm text-muted-foreground">
                              Establishing baseline value for growth initiatives
                              and exit planning
                            </span>
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
            title="Manufacturing M&A Considerations"
            description="Industry-specific factors that impact manufacturing business transactions"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <Building className="h-5 w-5 text-brand-gold" />
                  </div>
                  Physical Assets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manufacturing businesses typically have significant
                  investments in specialized equipment, facilities, and physical
                  infrastructure. Our approach ensures accurate valuation of
                  these assets, considering factors like condition,
                  technological obsolescence, and replacement costs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <TrendingUp className="h-5 w-5 text-brand-gold" />
                  </div>
                  Operational Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Production efficiency, capacity utilization, and process
                  optimization significantly impact manufacturing business
                  value. We analyze operational metrics to identify strengths,
                  improvement opportunities, and potential synergies in M&A
                  transactions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <Search className="h-5 w-5 text-brand-gold" />
                  </div>
                  Supply Chain Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supplier relationships, material contracts, and supply chain
                  stability are critical factors in manufacturing transactions.
                  Our due diligence process thoroughly evaluates these elements
                  to identify risks and opportunities for post-transaction
                  optimization.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <FileCheck className="h-5 w-5 text-brand-gold" />
                  </div>
                  Regulatory Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manufacturing businesses must comply with environmental,
                  safety, and industry-specific regulations. Our transaction
                  process includes comprehensive compliance assessment to
                  identify potential liabilities and ensure proper risk
                  allocation in deal structures.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <Calculator className="h-5 w-5 text-brand-gold" />
                  </div>
                  Inventory Valuation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accurate inventory valuation is essential in manufacturing
                  transactions. Our approach includes detailed analysis of raw
                  materials, work-in-process, and finished goods inventory,
                  accounting for obsolescence, turnover rates, and market value.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3">
                    <Handshake className="h-5 w-5 text-brand-gold" />
                  </div>
                  Customer Relationships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customer concentration, contract terms, and relationship
                  stability significantly impact manufacturing business value.
                  Our transaction process includes thorough evaluation of
                  customer relationships to assess revenue stability and growth
                  potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our M&A Process"
              description="A systematic approach to manufacturing business transactions"
              centered
            />
            <div className="mt-12">
              <ProcessStep
                number="01"
                title="Initial Consultation & Strategy Development"
                description="We begin by understanding your transaction objectives, whether buying or selling, and develop a strategic approach tailored to your manufacturing business."
              />

              <ProcessStep
                number="02"
                title="Valuation & Financial Analysis"
                description="Our team conducts a comprehensive valuation using manufacturing-specific methodologies to establish accurate fair market value and identify value drivers."
              />

              <ProcessStep
                number="03"
                title="Transaction Preparation"
                description="We prepare your business for the transaction process, including financial statement preparation, operational documentation, and addressing potential deal obstacles."
              />

              <ProcessStep
                number="04"
                title="Due Diligence Management"
                description="Our experts manage the due diligence process, focusing on manufacturing-specific areas like equipment valuation, operational efficiency, and regulatory compliance."
              />

              <ProcessStep
                number="05"
                title="Negotiation & Deal Structuring"
                description="We provide expert negotiation support and develop tax-efficient deal structures that maximize value and minimize risk for manufacturing business transactions."
              />

              <ProcessStep
                number="06"
                title="Closing & Post-Transaction Support"
                description="Our team guides you through the closing process and provides post-transaction support for integration, transition, and value realization."
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Case Study: Precision Manufacturing Acquisition"
                description="Strategic acquisition support for manufacturing business expansion"
              />
              <div className="mt-6 space-y-4">
                <p>
                  A mid-sized manufacturing client sought to expand their
                  production capabilities through acquisition. They needed
                  expert guidance to identify suitable targets, conduct thorough
                  due diligence, and structure a deal that would support their
                  growth objectives.
                </p>
                <p>
                  Our team provided comprehensive M&A advisory services that
                  included:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Target identification and screening based on strategic fit
                    and financial performance
                  </li>
                  <li>
                    Manufacturing-specific due diligence focusing on equipment,
                    operations, and compliance
                  </li>
                  <li>
                    Detailed valuation analysis using multiple methodologies
                  </li>
                  <li>
                    Deal structure optimization for tax efficiency and risk
                    mitigation
                  </li>
                  <li>Negotiation support to secure favorable terms</li>
                  <li>Post-acquisition integration planning</li>
                </ul>
                <p className="font-medium">Results:</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-brand-gold">35%</p>
                    <p className="text-sm">Production capacity increase</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-brand-gold">$1.8M</p>
                    <p className="text-sm">Annual synergy savings identified</p>
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
                alt="Manufacturing acquisition case study"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <Testimonial
              quote="Schapira CPA's M&A advisory team was instrumental in helping us navigate the sale of our manufacturing business. Their industry expertise, attention to detail, and strategic guidance helped us secure a deal that exceeded our expectations."
              author="Michael Thompson"
              role="Former Owner, Thompson Manufacturing"
            />
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Common questions about manufacturing business M&A"
            centered
          />
          <div className="mt-8 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What's the typical timeline for a manufacturing business
                  transaction?
                </AccordionTrigger>
                <AccordionContent>
                  Manufacturing business transactions typically take 6-9 months
                  from initial preparation to closing. The timeline can vary
                  based on business complexity, deal structure, and market
                  conditions. The process includes preparation (1-2 months),
                  marketing and buyer identification (2-3 months), due diligence
                  (1-2 months), and negotiation/closing (1-2 months). Our team
                  works to streamline the process while ensuring thorough
                  evaluation and optimal outcomes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do you value manufacturing equipment and machinery?
                </AccordionTrigger>
                <AccordionContent>
                  We use multiple approaches to value manufacturing equipment,
                  including replacement cost analysis, comparable sales method,
                  and income approach for production capacity. Our valuation
                  considers factors like equipment age, condition, technological
                  obsolescence, remaining useful life, and market demand. We
                  often work with specialized equipment appraisers for complex
                  or specialized machinery to ensure accurate valuations that
                  reflect true market value.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What factors most impact manufacturing business valuation?
                </AccordionTrigger>
                <AccordionContent>
                  Key factors affecting manufacturing business valuation include
                  financial performance (revenue growth, profit margins,
                  EBITDA), operational efficiency (capacity utilization,
                  production metrics), asset quality (equipment condition,
                  facility infrastructure), customer diversification, supply
                  chain stability, workforce capabilities, proprietary processes
                  or technologies, and market position. Our valuation
                  methodology weighs these factors based on their relevance to
                  your specific manufacturing operation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How can we prepare our manufacturing business for sale?
                </AccordionTrigger>
                <AccordionContent>
                  Preparation should begin 1-3 years before sale to maximize
                  value. Key steps include optimizing financial performance,
                  documenting operational processes, addressing deferred
                  maintenance on equipment, diversifying customer base,
                  strengthening management team, resolving regulatory issues,
                  protecting intellectual property, and implementing financial
                  reporting systems that clearly demonstrate business
                  performance. Our pre-sale planning services help identify and
                  address these areas to enhance business value.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What's the difference between asset sale and stock sale for
                  manufacturing businesses?
                </AccordionTrigger>
                <AccordionContent>
                  In an asset sale, the buyer purchases specific business assets
                  and liabilities, typically providing more flexibility in
                  selecting which assets to acquire and potentially more
                  favorable tax treatment through stepped-up basis. In a stock
                  sale, the buyer purchases the business entity, including all
                  assets and liabilities, which may be simpler for contract and
                  license transfers but and liabilities, which may be simpler
                  for contract and license transfers but may have different tax
                  implications. For manufacturing businesses, asset sales are
                  often preferred by buyers due to equipment and facility
                  considerations, while sellers may prefer stock sales for tax
                  advantages. We help structure transactions to balance these
                  considerations and achieve optimal outcomes for all parties.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Discuss Your Manufacturing M&A Needs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're considering buying, selling, or valuing a
              manufacturing business, our team provides the specialized
              expertise you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-gold hover:bg-brand-gold-dark"
              >
                <Link href="/contact/schedule-review">
                  Schedule an M&A Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/manufacturing-guides">
                  Download M&A Guide for Manufacturers
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
