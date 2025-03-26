import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  FileText,
  Calculator,
  BarChart,
  BookOpen,
  Video,
} from "lucide-react";
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

export const metadata = {
  title: "Manufacturing Financial Resources | Schapira CPA",
  description:
    "Free resources, guides, and tools to help manufacturing businesses optimize financial performance and drive growth.",
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Free guides, tools, and insights for manufacturing businesses
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
                title="Knowledge That Drives Manufacturing Success"
                description="Practical resources designed specifically for manufacturing businesses"
              />
              <p className="mt-4 text-muted-foreground">
                Our team has developed a comprehensive library of resources
                based on our extensive experience working with manufacturing
                businesses. From detailed guides and calculators to industry
                benchmarks and video tutorials, these tools are designed to help
                you make more informed financial decisions.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2011.52.46%20-%20Abstract%20geometric%20illustration%20representing%20expertise%20and%20knowledge.%20Features%20interconnected%20dark%20blue%20and%20yellow_gold%20nodes%20forming%20a%20structured%20and-OZ9oZvzSjhNdLDyWAYwrPEeY5LCHSA.webp"
                alt="Complex network visualization representing manufacturing financial knowledge and expertise with interconnected nodes"
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
              title="Featured Resources"
              description="Our most popular tools and guides for manufacturing businesses"
              centered
            />
            <div className="mt-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-12">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 mb-4">
                      Featured Video
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Manufacturing Cost Reduction Strategies
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Learn practical strategies to identify and eliminate
                      hidden costs in your manufacturing operation without
                      compromising quality or production capacity.
                    </p>
                    <Button asChild className="w-full sm:w-auto">
                      <Link
                        href="/resources/manufacturing-cost-reduction"
                        className="flex items-center gap-2"
                      >
                        <Video className="h-4 w-4" />
                        <span>Watch Video</span>
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-gray-100 flex items-center justify-center p-8">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.54%20-%20Abstract%20geometric%20representation%20of%20results-oriented%20approach.%20Features%20dynamic%20upward-moving%20dark%20blue%20lines%20or%20shapes%2C%20gradually%20increasing%20in%20size-29aooZyfEADoSoVOAKHSBA3yKVnQn8.webp"
                        alt="Dynamic visualization of financial growth strategies with upward trending metrics"
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <Calculator className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle>R&D Tax Credit Calculator</CardTitle>
                    <CardDescription>
                      Estimate your potential tax savings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Our interactive calculator helps manufacturing businesses
                      estimate potential R&D tax credits based on qualifying
                      research activities and expenditures.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="/resources/rd-calculators"
                        className="flex items-center justify-between w-full"
                      >
                        <span>Use Calculator</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <FileText className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle>Manufacturing Financial Guide</CardTitle>
                    <CardDescription>
                      Comprehensive financial strategies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      A detailed guide covering key financial considerations for
                      manufacturing businesses, from cost accounting to
                      inventory management and growth financing.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="/resources/financial-guides"
                        className="flex items-center justify-between w-full"
                      >
                        <span>Download Guide</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <BarChart className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle>Manufacturing Benchmarks</CardTitle>
                    <CardDescription>
                      Industry performance metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Compare your manufacturing business against industry
                      benchmarks for key financial and operational metrics, with
                      insights on improving performance.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="/resources/manufacturing-benchmarks"
                        className="flex items-center justify-between w-full"
                      >
                        <span>View Benchmarks</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <Calculator className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle>Business Valuation Tool</CardTitle>
                    <CardDescription>
                      Estimate your business value
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Our interactive valuation tool helps manufacturing
                      business owners estimate the potential value of their
                      business based on financial performance and industry
                      multiples.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="/resources/manufacturing-valuation"
                        className="flex items-center justify-between w-full"
                      >
                        <span>Use Valuation Tool</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <BookOpen className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle>Tax Planning Guide</CardTitle>
                    <CardDescription>
                      Manufacturing tax strategies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      A comprehensive guide to tax planning strategies
                      specifically for manufacturing businesses, including
                      credits, deductions, and year-end planning considerations.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="/resources/tax-planning"
                        className="flex items-center justify-between w-full"
                      >
                        <span>Download Guide</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                      <Calculator className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle>Financial Ratio Calculator</CardTitle>
                    <CardDescription>
                      Analyze your financial health
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Calculate and interpret key financial ratios specific to
                      manufacturing businesses, with industry-specific
                      benchmarks and improvement recommendations.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="/resources/financial-ratios"
                        className="flex items-center justify-between w-full"
                      >
                        <span>Use Calculator</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Manufacturing Business Valuation"
                description="Understand what drives value in your manufacturing business"
              />
              <div className="mt-6 space-y-4">
                <p>
                  Whether you're planning for succession, considering a sale, or
                  simply want to build long-term value, understanding your
                  manufacturing business's worth is essential. Our comprehensive
                  valuation resources help you identify and enhance the key
                  value drivers in your operation.
                </p>
                <p>
                  From equipment and inventory valuation to customer
                  concentration and operational efficiency, our
                  manufacturing-specific approach ensures an accurate assessment
                  of your business's true worth.
                </p>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-brand-gold hover:bg-brand-gold-dark"
                  >
                    <Link href="/resources/manufacturing-valuation">
                      Explore Valuation Resources
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2011.52.51%20-%20Abstract%20geometric%20composition%20representing%20partnership.%20Features%20dark%20blue%20and%20lighter%20grey%20shapes%20moving%20toward%20each%20other%2C%20symbolizing%20interaction%20-LdPpWIfzC8sp67T2nxbAN1PkLTA4Vg.webp"
                alt="Abstract geometric composition representing business valuation concepts with integrated blue and gold elements"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <SectionHeading
              title="Need Personalized Guidance?"
              description="Our team is ready to help with your specific manufacturing financial challenges"
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
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
