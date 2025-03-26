import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  LineChart,
  TrendingUp,
  PieChart,
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
  title: "Financial Analysis & Forecasting for Manufacturers | Schapira CPA",
  description:
    "Data-driven financial analysis and accurate forecasting to help manufacturers make informed decisions and plan for sustainable growth.",
  canonical: "/services/financial-forecasting",
  openGraph: {
    images: [
      {
        url: "/og-financial-forecasting.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Analysis & Forecasting for Manufacturers | Schapira CPA",
      },
    ],
    type: "article",
  },
});

export default function FinancialForecastingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Financial Analysis & Forecasting"
        description="Data-driven insights to help manufacturers make informed decisions and plan for sustainable growth"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.45%20-%20Another%20abstract%20geometric%20image%20symbolizing%20financial%20clarity%2C%20organization%2C%20and%20strategic%20alignment.%20Features%20orderly%20geometric%20patterns%20with%20interc-cF2fFi2SU56RwAaDGDlrmDOjDw6Zet.webp"
        imageAlt="Financial analysis visualization with data charts and forecasting elements"
      />

      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Transform Data Into Strategic Manufacturing Decisions"
                description="Our financial analysis and forecasting services provide manufacturing businesses with the insights needed to optimize operations, identify growth opportunities, and plan for sustainable success."
              />
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Comprehensive Financial Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      In-depth analysis of your financial performance against
                      industry benchmarks and historical data
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <LineChart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Accurate Production Forecasting
                    </h3>
                    <p className="text-muted-foreground">
                      Data-driven projections to support production planning,
                      inventory management, and resource allocation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Scenario Planning</h3>
                    <p className="text-muted-foreground">
                      Model different business scenarios to prepare for market
                      changes and optimize decision-making
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PieChart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">
                      Manufacturing KPI Development
                    </h3>
                    <p className="text-muted-foreground">
                      Custom key performance indicators tailored to your
                      manufacturing operations and strategic goals
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.13%20-%20Clean%20abstract%20geometric%20image%20symbolizing%20business%20strategy%2C%20growth%2C%20and%20success.%20Features%20structured%20patterns%20and%20upward-moving%20geometric%20shapes%20in%20-KB4dtyyDzEllupAhgNZjeMBNGgKkmf.webp"
                alt="Data-driven financial analysis dashboard for manufacturing"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our Financial Analysis & Forecasting Process"
              description="A systematic approach to transforming your manufacturing data into actionable insights"
              centered
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="01"
                title="Data Collection & Validation"
                description="We gather financial and operational data from your systems, validate its accuracy, and prepare it for analysis."
              />
              <ProcessStep
                number="02"
                title="Analysis & Benchmarking"
                description="We analyze your data against industry benchmarks and historical performance to identify trends and opportunities."
              />
              <ProcessStep
                number="03"
                title="Forecasting & Scenario Planning"
                description="We develop accurate forecasts and model different scenarios to support strategic decision-making."
              />
              <ProcessStep
                number="04"
                title="Insights & Implementation"
                description="We deliver actionable insights and work with you to implement data-driven strategies for sustainable growth."
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="Financial Analysis & Forecasting Services"
            description="Comprehensive solutions tailored for manufacturing businesses"
            centered
          />
          <Tabs defaultValue="analysis" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="analysis">Financial Analysis</TabsTrigger>
              <TabsTrigger value="forecasting">
                Production Forecasting
              </TabsTrigger>
              <TabsTrigger value="scenarios">Scenario Planning</TabsTrigger>
              <TabsTrigger value="kpis">Manufacturing KPIs</TabsTrigger>
            </TabsList>
            <TabsContent value="analysis" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Analysis</CardTitle>
                  <CardDescription>
                    Comprehensive assessment of your manufacturing financial
                    performance
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
                          <span>Manufacturing financial ratio analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cost structure assessment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Profitability analysis by product line</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cash flow and working capital analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Industry benchmark comparison</span>
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
                          <span>Uncover hidden profit opportunities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Optimize resource allocation</span>
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
            <TabsContent value="forecasting" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Production Forecasting</CardTitle>
                  <CardDescription>
                    Accurate projections to support production planning and
                    resource allocation
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
                          <span>Sales and revenue forecasting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Production capacity planning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Inventory requirement projections</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Labor and resource forecasting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Seasonal adjustment modeling</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Optimize production scheduling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Reduce inventory carrying costs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improve resource utilization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enhance supply chain management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Better meet customer demand</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="scenarios" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scenario Planning</CardTitle>
                  <CardDescription>
                    Model different business scenarios to prepare for market
                    changes and optimize decision-making
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
                          <span>Best-case/worst-case scenario modeling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Market change impact analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Growth strategy financial modeling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Cost structure change scenarios</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Capital investment ROI projections</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Prepare for market uncertainties</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Evaluate strategic alternatives</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Mitigate business risks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Support investment decisions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Develop contingency plans</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="kpis" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manufacturing KPIs</CardTitle>
                  <CardDescription>
                    Custom key performance indicators tailored to your
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
                          <span>Manufacturing KPI development</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Performance dashboard creation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Operational efficiency metrics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Financial performance indicators</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Automated reporting systems</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Focus on critical success factors</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Track progress toward strategic goals</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Identify improvement opportunities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Enable data-driven management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Improve organizational alignment</span>
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
              description="Common questions about our financial analysis and forecasting services"
              centered
            />
            <div className="mt-8 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How often should we update our financial forecasts?
                  </AccordionTrigger>
                  <AccordionContent>
                    We recommend reviewing and updating your financial forecasts
                    quarterly to align with your financial reporting cycles.
                    However, in rapidly changing market conditions or during
                    significant business transitions, monthly updates may be
                    more appropriate. We work with you to establish a
                    forecasting cadence that balances accuracy with operational
                    efficiency.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What data do you need for accurate manufacturing
                    forecasting?
                  </AccordionTrigger>
                  <AccordionContent>
                    Effective manufacturing forecasting typically requires
                    historical sales data, production metrics, inventory levels,
                    lead times, customer order patterns, and market trend
                    information. We can work with your existing systems to
                    extract this data efficiently. The more historical data
                    available, the more accurate our forecasting models can be,
                    but we can develop effective forecasts even with limited
                    historical information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do you account for seasonality in manufacturing
                    forecasts?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our forecasting models incorporate seasonal adjustment
                    factors based on your historical data patterns and industry
                    trends. We analyze multiple years of data to identify
                    recurring seasonal patterns and apply appropriate
                    statistical methods to account for these fluctuations. This
                    approach helps ensure that your production planning,
                    inventory management, and cash flow projections accurately
                    reflect seasonal variations in your business.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can you integrate forecasts with our existing systems?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we design our forecasting outputs to integrate with
                    your existing ERP, accounting, or production planning
                    systems. We can provide data in formats compatible with your
                    systems or develop custom dashboards that pull data directly
                    from your systems for real-time forecasting. Our goal is to
                    make the forecasting process as seamless and useful as
                    possible within your current operational framework.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How accurate are your manufacturing forecasts?
                  </AccordionTrigger>
                  <AccordionContent>
                    Forecast accuracy depends on several factors, including data
                    quality, market stability, and forecast horizon. For most
                    manufacturing clients, our short-term forecasts (1-3 months)
                    typically achieve 85-95% accuracy, while medium-term
                    forecasts (4-12 months) generally maintain 75-85% accuracy.
                    We continuously monitor forecast performance against actuals
                    and refine our models to improve accuracy over time. We also
                    provide confidence intervals with our forecasts to help you
                    understand the range of potential outcomes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="What Our Clients Say"
            description="Hear from manufacturing businesses that have benefited from our financial analysis and forecasting services"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              quote="The production forecasting models developed by Schapira CPA have transformed our inventory management. We've reduced carrying costs by 22% while maintaining better product availability."
              author="Jennifer Martinez"
              role="Operations Director, Precision Components Inc."
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="Their scenario planning helped us navigate supply chain disruptions with confidence. We were prepared with contingency plans that kept our production running when competitors were struggling."
              author="Robert Chen"
              role="CEO, Advanced Manufacturing Solutions"
              image="/placeholder.svg?height=100&width=100"
            />
            <Testimonial
              quote="The manufacturing KPI dashboard they created gives us real-time visibility into our financial and operational performance. It's become an essential tool for our management team's decision-making."
              author="Sarah Johnson"
              role="CFO, Industrial Innovations Ltd."
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        <ContactCTA
          title="Ready to transform your manufacturing data into strategic insights?"
          description="Schedule a consultation to discuss how our financial analysis and forecasting services can help you optimize operations and drive growth."
          buttonText="Schedule a Consultation"
          buttonLink="/consultation"
        />
      </main>
    </div>
  );
}
