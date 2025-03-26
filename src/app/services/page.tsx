import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Manufacturing Financial Services | Schapira CPA",
  description:
    "Specialized financial services for manufacturing businesses including tax optimization, cost accounting, growth financing, and more.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Specialized financial solutions for manufacturing businesses
              </p>
            </div>
            <Button
              asChild
              className="bg-brand-gold hover:bg-brand-gold-dark w-full md:w-auto"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Financial Solutions Tailored for Manufacturers"
                description="Our specialized services address the unique challenges and opportunities in the manufacturing sector"
              />
              <p className="mt-4 text-muted-foreground">
                Manufacturing businesses face distinct financial challenges –
                from complex inventory valuation to equipment depreciation, cost
                allocation, and industry-specific tax considerations. Our team
                brings deep manufacturing expertise to every service we provide,
                ensuring solutions that drive real results for your business.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2011.52.46%20-%20Abstract%20geometric%20illustration%20representing%20expertise%20and%20knowledge.%20Features%20interconnected%20dark%20blue%20and%20yellow_gold%20nodes%20forming%20a%20structured%20and-OZ9oZvzSjhNdLDyWAYwrPEeY5LCHSA.webp"
                alt="Complex network visualization representing interconnected financial solutions for manufacturing businesses"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our Core Services"
              description="Comprehensive financial solutions for manufacturing businesses"
              centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Manufacturing Tax Strategy</CardTitle>
                  <CardDescription>
                    Tax optimization for manufacturers
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Industry-specific tax planning that leverages available
                    credits, deductions, and incentives to minimize tax burden
                    and improve cash flow for manufacturing businesses.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/services/manufacturing-tax"
                      className="flex items-center justify-between w-full"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>R&D Tax Credits</CardTitle>
                  <CardDescription>
                    Maximize innovation incentives
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Specialized expertise in identifying, documenting, and
                    claiming R&D tax credits for manufacturing process
                    improvements, product development, and innovation
                    activities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/services/rd-tax-credits"
                      className="flex items-center justify-between w-full"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Cost Accounting</CardTitle>
                  <CardDescription>Precision cost management</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Manufacturing-specific cost accounting systems that provide
                    accurate visibility into production costs, enabling better
                    pricing, profitability analysis, and operational
                    decision-making.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/services/cost-accounting"
                      className="flex items-center justify-between w-full"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Growth Financing</CardTitle>
                  <CardDescription>Capital for expansion</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Strategic financing solutions for manufacturing growth,
                    including equipment acquisition, facility expansion, working
                    capital optimization, and access to industry-specific
                    funding sources.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/services/growth-financing"
                      className="flex items-center justify-between w-full"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Financial Statements</CardTitle>
                  <CardDescription>Clear financial reporting</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Comprehensive financial statement preparation tailored to
                    manufacturing businesses, providing accurate insights for
                    management decisions and stakeholder reporting.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/services/financial-statements"
                      className="flex items-center justify-between w-full"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Mergers & Acquisitions</CardTitle>
                  <CardDescription>
                    Strategic transaction support
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Expert guidance through the acquisition or sale process,
                    including valuation, due diligence, and tax-efficient
                    transaction structuring for manufacturing businesses.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/services/mergers-acquisition"
                      className="flex items-center justify-between w-full"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.45%20-%20Another%20abstract%20geometric%20image%20symbolizing%20financial%20clarity%2C%20organization%2C%20and%20strategic%20alignment.%20Features%20orderly%20geometric%20patterns%20with%20interc-cF2fFi2SU56RwAaDGDlrmDOjDw6Zet.webp"
                    alt="Financial Analysis & Forecasting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">
                      Financial Analysis & Forecasting
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Data-driven financial analysis and accurate forecasting to
                    help manufacturers make informed decisions and plan for
                    sustainable growth.
                  </p>
                  <Link
                    href="/services/financial-forecasting"
                    className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.13%20-%20Clean%20abstract%20geometric%20image%20symbolizing%20business%20strategy%2C%20growth%2C%20and%20success.%20Features%20structured%20patterns%20and%20upward-moving%20geometric%20shapes%20in%20-KB4dtyyDzEllupAhgNZjeMBNGgKkmf.webp"
                    alt="Cash Flow Optimization"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">
                      Cash Flow Optimization
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Improve liquidity, manage seasonal fluctuations, and ensure
                    capital for growth with our manufacturing-focused cash flow
                    optimization services.
                  </p>
                  <Link
                    href="/services/cash-flow-optimization"
                    className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2014.05.45%20-%20Another%20abstract%20geometric%20image%20symbolizing%20financial%20clarity%2C%20organization%2C%20and%20strategic%20alignment.%20Features%20orderly%20geometric%20patterns%20with%20interc-cF2fFi2SU56RwAaDGDlrmDOjDw6Zet.webp"
                    alt="Strategic Tax Planning"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">
                      Strategic Tax Planning
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Minimize tax liability and maximize manufacturing-specific
                    credits with our proactive tax planning strategies tailored
                    for manufacturing businesses.
                  </p>
                  <Link
                    href="/services/strategic-tax-planning"
                    className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.54%20-%20Abstract%20geometric%20representation%20of%20results-oriented%20approach.%20Features%20dynamic%20upward-moving%20dark%20blue%20lines%20or%20shapes%2C%20gradually%20increasing%20in%20size-29aooZyfEADoSoVOAKHSBA3yKVnQn8.webp"
                alt="Dynamic visualization of financial growth with upward trending gold arrow representing results-oriented approach"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Our Approach: Profit Every Day™"
                description="A proactive partnership focused on continuous financial improvement"
              />
              <div className="mt-6 space-y-4">
                <p>
                  At Schapira CPA, we believe that profitability isn't just a
                  quarterly or annual goal—it's the result of dozens of business
                  and financial decisions you make every day. Our Profit Every
                  Day™ approach ensures that we're working alongside you
                  throughout the year to optimize each decision for maximum
                  financial impact.
                </p>
                <p>
                  Unlike traditional accounting firms that focus primarily on
                  compliance and reporting, we take a forward-looking approach
                  that combines deep manufacturing expertise with proactive
                  financial strategies. The result? A partnership that drives
                  measurable improvements in your bottom line.
                </p>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-brand-gold hover:bg-brand-gold-dark"
                  >
                    <Link href="/about/approach">Learn About Our Approach</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <SectionHeading
              title="Ready to Transform Your Manufacturing Business?"
              description="Schedule a consultation to discuss your specific needs and goals"
              centered
            />
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-gold hover:bg-brand-gold-dark"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">Explore Our Resources</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
