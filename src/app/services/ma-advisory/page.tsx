import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChartHorizontal,
  Building,
  FileSearch,
  Handshake,
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
import  Testimonial  from "@/components/Testimonial";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "M&A Advisory Services for Manufacturers | Schapira CPA",
  description:
    "Expert M&A advisory services for manufacturing businesses looking to buy, sell, or merge. Strategic guidance throughout the entire transaction process.",
};

export default function MAAdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="M&A Advisory Services"
        description="Strategic guidance for manufacturing businesses navigating mergers, acquisitions, and divestitures"
        image="/placeholder.svg?height=400&width=800"
      />

      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Navigate Complex Transactions with Confidence"
                description="Our M&A advisory services provide manufacturing businesses with expert guidance throughout the entire transaction process, from initial strategy to post-closing integration."
              />
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Building className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Buy-Side Advisory</h3>
                    <p className="text-muted-foreground">
                      Strategic guidance for identifying, evaluating, and
                      acquiring target companies
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Handshake className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Sell-Side Advisory</h3>
                    <p className="text-muted-foreground">
                      Comprehensive support to maximize value when selling your
                      manufacturing business
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileSearch className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Due Diligence</h3>
                    <p className="text-muted-foreground">
                      Thorough financial, operational, and tax due diligence to
                      identify risks and opportunities
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChartHorizontal className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Valuation Services</h3>
                    <p className="text-muted-foreground">
                      Accurate business valuations using industry-specific
                      methodologies
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/consultation">
                    Schedule an M&A Consultation{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Manufacturing business merger and acquisition"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our M&A Advisory Process"
              description="A structured approach to ensure successful transactions for manufacturing businesses"
              centered
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="01"
                title="Strategy Development"
                description="We work with you to define clear M&A objectives aligned with your business strategy and growth goals."
              />
              <ProcessStep
                number="02"
                title="Target Identification"
                description="We identify and evaluate potential acquisition targets or buyers based on your strategic criteria."
              />
              <ProcessStep
                number="03"
                title="Due Diligence & Valuation"
                description="We conduct comprehensive due diligence and develop accurate valuations to support negotiations."
              />
              <ProcessStep
                number="04"
                title="Transaction Execution"
                description="We guide you through negotiations, structuring, and closing to ensure a successful transaction."
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="M&A Advisory Services"
            description="Comprehensive M&A solutions tailored for manufacturing businesses"
            centered
          />
          <Tabs defaultValue="buy-side" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="buy-side">Buy-Side Advisory</TabsTrigger>
              <TabsTrigger value="sell-side">Sell-Side Advisory</TabsTrigger>
              <TabsTrigger value="due-diligence">Due Diligence</TabsTrigger>
              <TabsTrigger value="valuation">Valuation Services</TabsTrigger>
            </TabsList>
            <TabsContent value="buy-side" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Buy-Side Advisory</CardTitle>
                  <CardDescription>
                    Strategic guidance for identifying, evaluating, and
                    acquiring target companies
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
                          <span>Acquisition strategy development</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Target identification and screening</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Initial valuation and financial modeling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Letter of intent (LOI) preparation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Negotiation and transaction structuring</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Identify optimal acquisition targets</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduce transaction risks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>
                            Optimize deal structure for tax efficiency
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>
                            Accelerate growth through strategic acquisitions
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Navigate complex transaction processes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sell-side" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sell-Side Advisory</CardTitle>
                  <CardDescription>
                    Comprehensive support to maximize value when selling your
                    manufacturing business
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
                          <span>Business valuation and exit planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Marketing materials preparation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Buyer identification and outreach</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Management presentation support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Negotiation and transaction management</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Maximize business sale value</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Identify optimal timing for sale</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Minimize tax implications</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>
                            Maintain confidentiality throughout process
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Ensure smooth transition post-sale</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="due-diligence" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Due Diligence</CardTitle>
                  <CardDescription>
                    Thorough financial, operational, and tax due diligence to
                    identify risks and opportunities
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
                          <span>Financial statement analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Quality of earnings assessment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Tax compliance review</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Operational efficiency evaluation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Working capital analysis</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Identify potential deal breakers early</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Validate financial representations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Uncover hidden liabilities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Identify post-acquisition synergies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Support purchase price negotiations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="valuation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Valuation Services</CardTitle>
                  <CardDescription>
                    Accurate business valuations using industry-specific
                    methodologies
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
                          <span>Multiple valuation methodologies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Industry-specific benchmarking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Discounted cash flow analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Asset-based valuation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Detailed valuation report</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Establish realistic price expectations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Support financing applications</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Identify value drivers in your business</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Support succession planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Provide credible third-party opinion</span>
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
              description="Common questions about our M&A advisory services"
              centered
            />
            <div className="mt-8 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    When is the right time to consider selling my manufacturing
                    business?
                  </AccordionTrigger>
                  <AccordionContent>
                    The optimal time to sell depends on multiple factors
                    including business performance, industry trends, market
                    conditions, and personal goals. Generally, businesses sell
                    at higher multiples when they demonstrate consistent growth,
                    strong profitability, diversified customer base, and
                    operational efficiency. We can help you assess your
                    readiness and timing to maximize value.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do you value a manufacturing business?
                  </AccordionTrigger>
                  <AccordionContent>
                    We use multiple valuation methodologies including EBITDA
                    multiples, discounted cash flow analysis, and asset-based
                    approaches. For manufacturing businesses, we pay particular
                    attention to equipment values, inventory, customer
                    concentration, proprietary processes, and growth potential.
                    We also consider industry-specific benchmarks and recent
                    comparable transactions to arrive at a comprehensive
                    valuation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What makes a manufacturing business attractive to buyers?
                  </AccordionTrigger>
                  <AccordionContent>
                    Attractive manufacturing businesses typically have
                    consistent financial performance, diversified customer base,
                    proprietary products or processes, strong management team,
                    modern equipment, efficient operations, and growth
                    potential. Strategic buyers often look for synergies in
                    customer relationships, geographic expansion, or
                    complementary product lines. Private equity buyers focus on
                    stable cash flows and growth opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How long does the M&A process typically take?
                  </AccordionTrigger>
                  <AccordionContent>
                    The M&A process for manufacturing businesses typically takes
                    6-12 months from initial preparation to closing. This
                    timeline can vary based on business complexity, market
                    conditions, and buyer type. The process includes preparation
                    (1-2 months), marketing (2-3 months), buyer selection and
                    LOI (1 month), due diligence (2-3 months), and closing (1-2
                    months). We work to manage the process efficiently while
                    ensuring optimal outcomes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How do you maintain confidentiality during the sale process?
                  </AccordionTrigger>
                  <AccordionContent>
                    We implement strict confidentiality measures including
                    non-disclosure agreements with all potential buyers, blind
                    teasers that don't identify your business, controlled
                    information release, and careful management of site visits
                    and management meetings. We can use code names in all
                    communications and limit knowledge of the sale to essential
                    personnel only. Maintaining confidentiality is critical to
                    protecting your business value throughout the process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="What Our Clients Say"
            description="Hear from manufacturing businesses that have benefited from our M&A advisory services"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              quote="Schapira CPA guided us through the entire acquisition process, from identifying the right target to closing the deal. Their industry expertise and attention to detail were invaluable."
              author="Robert Anderson"
              role="CEO, Precision Metal Works"
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="When selling our family-owned manufacturing business, we needed advisors who understood both the financial and emotional aspects. Their team exceeded our expectations and helped us achieve a premium valuation."
              author="Jennifer Martinez"
              role="Former Owner, Martinez Manufacturing"
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="Their due diligence process uncovered several issues that would have caused problems post-acquisition. This saved us from a potentially costly mistake and helped us negotiate better terms."
              author="Thomas Wilson"
              role="CFO, Industrial Solutions Group"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        <ContactCTA
          title="Ready to discuss your M&A strategy?"
          description="Schedule a confidential consultation to explore how our M&A advisory services can help you achieve your business objectives."
          buttonText="Schedule a Consultation"
          buttonLink="/consultation"
        />
      </main>
    </div>
  );
}
