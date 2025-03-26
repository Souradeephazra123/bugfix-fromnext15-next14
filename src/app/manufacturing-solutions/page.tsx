import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Manufacturing Financial Solutions | Schapira CPA",
  description:
    "Specialized financial solutions for manufacturing businesses including cash flow management, cost reduction, and tax optimization.",
};

export default function ManufacturingSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                Manufacturing Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Specialized financial strategies for manufacturing businesses
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
                description="Addressing the unique challenges and opportunities in the manufacturing sector"
              />
              <div className="mt-6 space-y-4">
                <p>
                  Manufacturing businesses face distinct financial challenges –
                  from complex inventory valuation to equipment depreciation,
                  cost allocation, and industry-specific tax considerations. Our
                  team brings deep manufacturing expertise to every solution we
                  provide, ensuring strategies that drive real results for your
                  business.
                </p>
                <p>
                  Our manufacturing solutions are designed to address the
                  specific pain points that impact your profitability and
                  growth, with practical strategies that can be implemented
                  quickly to deliver measurable improvements.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2011.52.46%20-%20Abstract%20geometric%20illustration%20representing%20expertise%20and%20knowledge.%20Features%20interconnected%20dark%20blue%20and%20yellow_gold%20nodes%20forming%20a%20structured%20and-OZ9oZvzSjhNdLDyWAYwrPEeY5LCHSA.webp"
                alt="Complex network visualization representing interconnected manufacturing financial solutions"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Our Manufacturing Solutions"
              description="Comprehensive strategies to optimize your manufacturing business"
              centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Cash Flow Management</CardTitle>
                  <CardDescription>Optimize working capital</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Specialized cash flow strategies for manufacturing
                    businesses, addressing the unique challenges of inventory
                    management, equipment financing, and production cycles.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/manufacturing-solutions/cash-flow-management"
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
                  <CardTitle>Cost Reduction</CardTitle>
                  <CardDescription>Improve profit margins</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Strategic approaches to identifying and eliminating hidden
                    costs in your manufacturing operation without compromising
                    quality or production capacity.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/manufacturing-solutions/cost-reduction"
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
                  <CardTitle>Tax Credits & Incentives</CardTitle>
                  <CardDescription>Maximize available benefits</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Comprehensive identification and documentation of
                    manufacturing-specific tax credits, including R&D, equipment
                    investments, energy efficiency, and export incentives.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/manufacturing-solutions/tax-credits"
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
                  <CardTitle>Production Efficiency</CardTitle>
                  <CardDescription>Optimize operations</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Financial analysis of production processes to identify
                    bottlenecks, optimize resource allocation, and improve
                    overall operational efficiency and profitability.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/manufacturing-solutions/production-efficiency"
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
                  <CardDescription>Fund expansion</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Specialized financing solutions for manufacturing growth,
                    including equipment acquisition, facility expansion, and
                    access to industry-specific funding sources.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/manufacturing-solutions/growth-financing"
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
                  <CardTitle>Success Stories</CardTitle>
                  <CardDescription>Real client results</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Case studies highlighting how our manufacturing clients have
                    achieved significant financial improvements through our
                    specialized solutions and approach.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/manufacturing-solutions/success-stories"
                      className="flex items-center justify-between w-full"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.54%20-%20Abstract%20geometric%20representation%20of%20results-oriented%20approach.%20Features%20dynamic%20upward-moving%20dark%20blue%20lines%20or%20shapes%2C%20gradually%20increasing%20in%20size-29aooZyfEADoSoVOAKHSBA3yKVnQn8.webp"
                alt="Dynamic visualization of manufacturing financial growth with upward trending metrics"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Our Results-Driven Approach"
                description="Delivering measurable financial improvements for manufacturing businesses"
              />
              <div className="mt-6 space-y-4">
                <p>
                  At Schapira CPA, we believe that financial strategies should
                  deliver tangible results. Our manufacturing solutions are
                  designed with clear metrics and benchmarks, allowing you to
                  track progress and measure the impact on your bottom line.
                </p>
                <p>
                  We've helped manufacturing businesses across various sectors
                  achieve significant improvements in key financial metrics,
                  from cost reduction and margin improvement to tax savings and
                  growth financing.
                </p>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-brand-gold hover:bg-brand-gold-dark"
                  >
                    <Link href="/manufacturing-solutions/success-stories">
                      View Success Stories
                    </Link>
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
