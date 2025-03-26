import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  DollarSign,
  Calendar,
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
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Cash Flow Optimization for Manufacturing | Schapira CPA",
  description:
    "Improve liquidity, manage seasonal fluctuations, and ensure capital for growth with our manufacturing-focused cash flow optimization services.",
  canonical: "/services/cash-flow-optimization",
  openGraph: {
    images: [
      {
        url: "/og-cash-flow-optimization.jpg",
        width: 1200,
        height: 630,
        alt: "Cash Flow Optimization for Manufacturing | Schapira CPA",
      },
    ],
    type: "article",
  },
});

export default function CashFlowOptimizationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Cash Flow Optimization for Manufacturing"
        description="Improve liquidity, manage seasonal fluctuations, and ensure capital for growth with our specialized cash flow solutions"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.45%20-%20Another%20abstract%20geometric%20image%20symbolizing%20financial%20clarity%2C%20organization%2C%20and%20strategic%20alignment.%20Features%20orderly%20geometric%20patterns%20with%20interc-cF2fFi2SU56RwAaDGDlrmDOjDw6Zet.webp"
        imageAlt="Cash flow optimization visualization with financial charts and manufacturing elements"
      />

      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Strategic Cash Flow Management for Manufacturing Success"
                description="Our cash flow optimization services help manufacturing businesses improve liquidity, manage seasonal fluctuations, and ensure adequate capital for growth and operations."
              />
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Working Capital Optimization
                    </h3>
                    <p className="text-muted-foreground">
                      Strategies to improve inventory management, accounts
                      receivable, and accounts payable cycles
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Seasonal Fluctuation Management
                    </h3>
                    <p className="text-muted-foreground">
                      Techniques to maintain steady operational funding despite
                      seasonal revenue variations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Cash Flow Forecasting</h3>
                    <p className="text-muted-foreground">
                      Accurate projections to anticipate cash needs and prevent
                      shortfalls
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Strategic Capital Allocation
                    </h3>
                    <p className="text-muted-foreground">
                      Guidance on prioritizing investments and expenditures to
                      maximize returns
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/consultation">
                    Schedule a Cash Flow Consultation{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.13%20-%20Clean%20abstract%20geometric%20image%20symbolizing%20business%20strategy%2C%20growth%2C%20and%20success.%20Features%20structured%20patterns%20and%20upward-moving%20geometric%20shapes%20in%20-KB4dtyyDzEllupAhgNZjeMBNGgKkmf.webp"
                alt="Cash flow optimization for manufacturing businesses"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our Cash Flow Optimization Process"
              description="A systematic approach to improving your manufacturing cash flow"
              centered
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="01"
                title="Cash Flow Assessment"
                description="We analyze your current cash flow patterns, identify bottlenecks, and assess working capital efficiency."
              />
              <ProcessStep
                number="02"
                title="Strategy Development"
                description="We develop customized strategies to address cash flow challenges and optimize your working capital cycle."
              />
              <ProcessStep
                number="03"
                title="Implementation Support"
                description="We help you implement cash flow optimization strategies and establish monitoring systems."
              />
              <ProcessStep
                number="04"
                title="Ongoing Optimization"
                description="We provide continuous support to refine your cash flow management as your business evolves."
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="Cash Flow Optimization Services"
            description="Comprehensive solutions tailored for manufacturing businesses"
            centered
          />
          <Tabs defaultValue="working-capital" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="working-capital">Working Capital</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal Management</TabsTrigger>
              <TabsTrigger value="forecasting">
                Cash Flow Forecasting
              </TabsTrigger>
              <TabsTrigger value="capital">Capital Allocation</TabsTrigger>
            </TabsList>
            <TabsContent value="working-capital" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Working Capital Optimization</CardTitle>
                  <CardDescription>
                    Strategies to improve inventory management, accounts
                    receivable, and accounts payable cycles
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
                          <span>Inventory optimization strategies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Accounts receivable acceleration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Accounts payable management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cash conversion cycle analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Working capital requirement forecasting</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduced inventory holding costs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improved cash conversion cycle</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enhanced supplier relationships</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduced reliance on external financing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Increased operational liquidity</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="seasonal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Seasonal Fluctuation Management</CardTitle>
                  <CardDescription>
                    Techniques to maintain steady operational funding despite
                    seasonal revenue variations
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
                          <span>Seasonal pattern analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Production smoothing strategies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Seasonal financing solutions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cash reserve planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Vendor payment scheduling</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Stable operational funding</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>
                            Reduced financial stress during slow periods
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Better supplier and employee retention</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improved production planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>
                            Enhanced ability to capitalize on opportunities
                          </span>
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
                  <CardTitle>Cash Flow Forecasting</CardTitle>
                  <CardDescription>
                    Accurate projections to anticipate cash needs and prevent
                    shortfalls
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
                          <span>13-week cash flow forecasting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Annual cash flow projections</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Scenario-based cash modeling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cash flow variance analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cash flow dashboard development</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>
                            Anticipate cash shortfalls before they occur
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Better timing of major expenditures</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduced financing costs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improved stakeholder communication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enhanced strategic decision-making</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="capital" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Strategic Capital Allocation</CardTitle>
                  <CardDescription>
                    Guidance on prioritizing investments and expenditures to
                    maximize returns
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
                          <span>Capital expenditure analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>ROI-based prioritization frameworks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Funding source optimization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Growth investment planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Capital structure optimization</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Maximized return on invested capital</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Balanced short and long-term investments</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Optimized cost of capital</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enhanced shareholder value</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Sustainable growth funding</span>
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
              description="Common questions about our cash flow optimization services"
              centered
            />
            <div className="mt-8 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How quickly can we see improvements in our cash flow?
                  </AccordionTrigger>
                  <AccordionContent>
                    Most manufacturing clients begin to see improvements within
                    30-60 days of implementing our recommendations. Quick wins
                    often come from accounts receivable acceleration and
                    inventory optimization. More substantial improvements in the
                    cash conversion cycle typically take 3-6 months as new
                    processes become established. We develop both short-term and
                    long-term strategies to ensure you see immediate benefits
                    while building sustainable cash flow improvements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do you handle seasonal manufacturing cash flow
                    challenges?
                  </AccordionTrigger>
                  <AccordionContent>
                    We address seasonal fluctuations through a combination of
                    production smoothing, strategic inventory management, vendor
                    payment scheduling, and targeted financing solutions. Our
                    approach begins with analyzing your specific seasonal
                    patterns to identify peak cash needs. We then develop
                    strategies to build cash reserves during strong periods,
                    negotiate favorable terms with suppliers, and implement
                    production schedules that balance efficiency with cash flow
                    requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Can you help with cash flow during manufacturing expansion
                    or equipment purchases?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we specialize in helping manufacturers manage cash flow
                    during growth phases and capital investments. Our approach
                    includes developing detailed cash flow projections for the
                    expansion period, identifying optimal financing structures,
                    creating phased implementation plans that minimize cash
                    strain, and establishing cash flow monitoring systems. We
                    also help evaluate equipment financing options (lease vs.
                    buy) and timing strategies to align with your cash flow
                    capacity.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How detailed are your cash flow forecasts for manufacturers?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our manufacturing cash flow forecasts typically include
                    weekly projections for the next 13 weeks and monthly
                    projections for 12-24 months. We incorporate detailed
                    components including customer payment timing, inventory
                    purchases, production costs, payroll, tax obligations, debt
                    service, and capital expenditures. We also develop
                    scenario-based models to help you prepare for different
                    business conditions. All forecasts are regularly reconciled
                    against actuals to improve accuracy over time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How do you balance inventory optimization with production
                    efficiency?
                  </AccordionTrigger>
                  <AccordionContent>
                    We take a holistic approach that considers both cash flow
                    and operational requirements. Rather than simply reducing
                    inventory across the board, we conduct SKU-level analysis to
                    identify where inventory can be safely reduced and where
                    adequate stock is critical for production efficiency. We
                    help implement just-in-time inventory systems where
                    appropriate, develop safety stock formulas based on lead
                    times and demand variability, and create inventory
                    management policies that balance working capital efficiency
                    with production needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="What Our Clients Say"
            description="Hear from manufacturing businesses that have benefited from our cash flow optimization services"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              quote="Schapira CPA's cash flow optimization strategies helped us reduce our cash conversion cycle by 18 days. We've been able to fund our growth internally instead of taking on additional debt."
              author="Michael Rodriguez"
              role="CFO, Precision Manufacturing Inc."
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="Their seasonal cash flow management approach transformed our business. We no longer struggle during slow periods and can maintain consistent production levels throughout the year."
              author="Jennifer Chen"
              role="CEO, Advanced Components Ltd."
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="The cash flow forecasting tools they implemented have given us unprecedented visibility into our future cash position. We can now plan major purchases with confidence."
              author="David Williams"
              role="Controller, Industrial Solutions Co."
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        <ContactCTA
          title="Ready to optimize your manufacturing cash flow?"
          description="Schedule a consultation to discuss how our cash flow optimization services can help you improve liquidity and fund growth."
          buttonText="Schedule a Consultation"
          buttonLink="/consultation"
        />
      </main>
    </div>
  );
}
