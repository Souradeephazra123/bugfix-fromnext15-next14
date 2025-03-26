import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  DollarSign,
  BarChart2,
  TrendingUp,
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
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Strategic Tax Planning for Manufacturers | Schapira CPA",
  description:
    "Minimize tax liability and maximize manufacturing-specific credits with our proactive tax planning strategies tailored for manufacturing businesses.",
  canonical: "/services/strategic-tax-planning",
  openGraph: {
    images: [
      {
        url: "/og-strategic-tax-planning.jpg",
        width: 1200,
        height: 630,
        alt: "Strategic Tax Planning for Manufacturers | Schapira CPA",
      },
    ],
    type: "article",
  },
});

export default function StrategicTaxPlanningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Strategic Tax Planning for Manufacturers"
        description="Minimize tax liability and maximize manufacturing-specific credits with our proactive planning approach"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.45%20-%20Another%20abstract%20geometric%20image%20symbolizing%20financial%20clarity%2C%20organization%2C%20and%20strategic%20alignment.%20Features%20orderly%20geometric%20patterns%20with%20interc-cF2fFi2SU56RwAaDGDlrmDOjDw6Zet.webp"
        imageAlt="Strategic tax planning visualization with tax documents and manufacturing elements"
      />

      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Proactive Tax Strategies for Manufacturing Success"
                description="Our strategic tax planning services help manufacturing businesses minimize tax liability, maximize available credits, and create sustainable tax advantages."
              />
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Manufacturing Tax Credit Maximization
                    </h3>
                    <p className="text-muted-foreground">
                      Identify and capture all available tax credits specific to
                      manufacturing operations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calculator className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Tax-Efficient Entity Structuring
                    </h3>
                    <p className="text-muted-foreground">
                      Optimize your business structure to minimize tax burden
                      and maximize owner benefits
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Multi-Year Tax Planning</h3>
                    <p className="text-muted-foreground">
                      Develop long-term strategies that provide sustainable tax
                      advantages
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Tax-Advantaged Growth Strategies
                    </h3>
                    <p className="text-muted-foreground">
                      Plan expansions, acquisitions, and investments to maximize
                      tax benefits
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/consultation">
                    Schedule a Tax Planning Consultation{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.13%20-%20Clean%20abstract%20geometric%20image%20symbolizing%20business%20strategy%2C%20growth%2C%20and%20success.%20Features%20structured%20patterns%20and%20upward-moving%20geometric%20shapes%20in%20-KB4dtyyDzEllupAhgNZjeMBNGgKkmf.webp"
                alt="Strategic tax planning for manufacturing businesses"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our Strategic Tax Planning Process"
              description="A systematic approach to minimizing tax liability and maximizing manufacturing credits"
              centered
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="01"
                title="Tax Situation Assessment"
                description="We analyze your current tax position, entity structure, and manufacturing operations to identify opportunities."
              />
              <ProcessStep
                number="02"
                title="Strategy Development"
                description="We develop customized tax strategies that align with your business goals and manufacturing processes."
              />
              <ProcessStep
                number="03"
                title="Implementation Support"
                description="We help you implement tax planning strategies and document activities for maximum credit eligibility."
              />
              <ProcessStep
                number="04"
                title="Ongoing Optimization"
                description="We provide continuous monitoring and refinement of your tax strategies as regulations and your business evolve."
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="Strategic Tax Planning Services"
            description="Comprehensive tax solutions tailored for manufacturing businesses"
            centered
          />
          <Tabs defaultValue="credits" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="credits">Tax Credits</TabsTrigger>
              <TabsTrigger value="structure">Entity Structure</TabsTrigger>
              <TabsTrigger value="multi-year">Multi-Year Planning</TabsTrigger>
              <TabsTrigger value="growth">Growth Strategies</TabsTrigger>
            </TabsList>
            <TabsContent value="credits" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manufacturing Tax Credit Maximization</CardTitle>
                  <CardDescription>
                    Identify and capture all available tax credits specific to
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
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>R&D tax credit qualification assessment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Section 179 deduction optimization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cost segregation studies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Energy efficiency tax incentives</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Export incentives (IC-DISC)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Significant reduction in tax liability</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Increased cash flow for operations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Funding for innovation and growth</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Competitive advantage through tax savings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>
                            Improved return on manufacturing investments
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="structure" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tax-Efficient Entity Structuring</CardTitle>
                  <CardDescription>
                    Optimize your business structure to minimize tax burden and
                    maximize owner benefits
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
                          <span>Entity structure assessment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>S-Corp vs. C-Corp analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Multiple entity strategies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Owner compensation planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Succession and exit planning</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Minimized overall tax burden</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Optimized owner tax treatment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduced audit risk</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enhanced liability protection</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Simplified succession planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="multi-year" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Year Tax Planning</CardTitle>
                  <CardDescription>
                    Develop long-term strategies that provide sustainable tax
                    advantages
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
                          <span>Multi-year tax projection modeling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Income and expense timing strategies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Depreciation planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Tax law change impact analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Retirement and benefit plan optimization</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Consistent tax rate management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improved financial forecasting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduced tax surprises</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Strategic timing of major decisions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Long-term tax burden reduction</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="growth" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tax-Advantaged Growth Strategies</CardTitle>
                  <CardDescription>
                    Plan expansions, acquisitions, and investments to maximize
                    tax benefits
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
                          <span>Tax-efficient expansion planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>M&A tax structure optimization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Equipment acquisition tax planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Real estate investment strategies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>International expansion tax planning</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Maximized after-tax return on investments</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduced acquisition costs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Accelerated tax benefits from investments</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Optimized financing structures</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Strategic timing of growth initiatives</span>
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
              description="Common questions about our strategic tax planning services"
              centered
            />
            <div className="mt-8 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    When should we start tax planning for the year?
                  </AccordionTrigger>
                  <AccordionContent>
                    Effective tax planning should be a year-round activity, not
                    just a year-end exercise. We recommend beginning the formal
                    planning process in the third quarter to allow adequate time
                    for implementing strategies before year-end. However, major
                    business decisions (equipment purchases, hiring, facility
                    expansions) should incorporate tax planning considerations
                    throughout the year. Our most successful manufacturing
                    clients engage in quarterly tax planning reviews to stay
                    proactive and maximize opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What manufacturing activities typically qualify for R&D tax
                    credits?
                  </AccordionTrigger>
                  <AccordionContent>
                    Many manufacturers are surprised to learn that common
                    activities qualify for valuable R&D tax credits. These
                    typically include developing new or improved products,
                    creating prototypes, designing manufacturing processes,
                    developing or improving production techniques, testing new
                    materials, automating or improving production lines,
                    developing software for internal manufacturing processes,
                    and environmental testing. The key qualification is that the
                    activity involves experimentation to eliminate technical
                    uncertainty, regardless of whether the experiment ultimately
                    succeeds.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do you determine the optimal business structure for a
                    manufacturing company?
                  </AccordionTrigger>
                  <AccordionContent>
                    We evaluate multiple factors including current and projected
                    profitability, growth plans, exit strategy, number of
                    owners, capital needs, and risk profile. For manufacturing
                    businesses, we also consider specific factors like equipment
                    depreciation benefits, R&D credit utilization, international
                    operations, and supply chain structure. We model the tax
                    impact of different entity structures (S Corporation, C
                    Corporation, LLC, etc.) under various scenarios to identify
                    the optimal structure for your specific situation and goals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How can we maximize tax benefits when purchasing
                    manufacturing equipment?
                  </AccordionTrigger>
                  <AccordionContent>
                    Equipment purchases offer several tax planning
                    opportunities. We help manufacturers maximize benefits
                    through Section 179 expensing, bonus depreciation, strategic
                    timing of purchases, cost segregation studies to accelerate
                    depreciation, leasing vs. buying analysis, and energy
                    efficiency tax incentives. The optimal approach depends on
                    your current tax situation, projected future income, cash
                    flow needs, and the specific equipment being acquired. We
                    develop a customized strategy that maximizes both short and
                    long-term tax benefits.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How do you stay current with changing tax laws affecting
                    manufacturers?
                  </AccordionTrigger>
                  <AccordionContent>
                    We maintain a dedicated tax research team that continuously
                    monitors federal, state, and local tax law changes affecting
                    manufacturers. Our professionals participate in specialized
                    manufacturing industry tax groups, attend targeted
                    continuing education, and subscribe to multiple tax research
                    services. We also maintain relationships with manufacturing
                    associations to stay informed about industry-specific tax
                    issues. This commitment ensures we can proactively advise
                    you about new opportunities or risks created by tax law
                    changes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="What Our Clients Say"
            description="Hear from manufacturing businesses that have benefited from our strategic tax planning services"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              quote="Schapira CPA's strategic tax planning saved us over $175,000 in taxes last year. Their approach to R&D tax credits captured activities we didn't realize qualified."
              author="Thomas Wilson"
              role="CEO, Precision Manufacturing Inc."
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="Their multi-year tax planning approach has given us the confidence to make major equipment investments. We've been able to time our purchases to maximize tax benefits."
              author="Lisa Martinez"
              role="CFO, Advanced Components Ltd."
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="The entity restructuring strategy they implemented reduced our tax burden by 22% and provided better liability protection for our growing manufacturing operation."
              author="Robert Johnson"
              role="Owner, Industrial Solutions Co."
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        <ContactCTA
          title="Ready to minimize your manufacturing tax burden?"
          description="Schedule a consultation to discuss how our strategic tax planning services can help you reduce liability and maximize credits."
          buttonText="Schedule a Consultation"
          buttonLink="/consultation"
        />
      </main>
    </div>
  );
}
