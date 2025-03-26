import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import ProcessStep from "@/components/process-step";
import Testimonial  from "@/components/Testimonial";

export const metadata = {
  title:
    "Schapira CPA | Manufacturing Financial Solutions | Profit Every Day™",
  description:
    "Schapira CPA helps manufacturers exceed financial goals through strategic accounting, cost optimization, and growth financing. Make every decision profitable.",
  keywords:
    "manufacturing accountant, CPA for manufacturers, manufacturing financial solutions, profit optimization, growth financing",
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced with better spacing and gradient */}
      <section className="bg-gradient-to-b from-amber-50 via-amber-50/70 to-white py-20 md:py-28">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl leading-tight">
                Exceed Your Financial Goals with Manufacturing Expertise
              </h1>
              <p className="text-gray-700 text-lg md:text-xl max-w-xl">
                Schapira CPA is the manufacturer's accounting partner. We go
                beyond traditional accounting to help you make profitable
                decisions every day of the year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-medium"
                >
                  <Link href="/about">View Our Approach</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-100 rounded-full blur-2xl opacity-30 z-0"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2011.52.51%20-%20Abstract%20geometric%20composition%20representing%20partnership.%20Features%20dark%20blue%20and%20lighter%20grey%20shapes%20moving%20toward%20each%20other%2C%20symbolizing%20interaction%20-LdPpWIfzC8sp67T2nxbAN1PkLTA4Vg.webp"
                  alt="Abstract geometric composition representing financial solutions with blue and gold elements"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover relative z-10 shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Improved spacing and typography */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="mb-12">
            <SectionHeading title="Profit Every Day™" centered={true} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              At Schapira, profit isn't just a one-time number on your tax
              filing. It's the result of dozens of business and financial
              decisions you make every day of the year. Our integrated approach
              ensures each decision leads to greater profitability.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Over the past 10 years, we've proven that while we serve 11
              sectors, our services move the needle farthest for manufacturing
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Focus Section - Enhanced card design and spacing */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              title="Why Manufacturers Choose Schapira"
              description="Our specialized approach delivers measurable results for manufacturing businesses"
              centered={true}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-amber-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Finding Hidden Dollars
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We identify overlooked opportunities in the tough penny
                  business of manufacturing.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-amber-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Optimizing Human & Machine Balance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We help you find the perfect equilibrium between labor costs
                  and automation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-amber-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Maximizing Production Efficiency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our analysis helps recapture lost revenues by monetizing idle
                  hours and optimizing shifts.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 font-medium"
            >
              <Link href="/industries/manufacturing">
                Explore Manufacturing Solutions →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results Highlights Section - Improved card design and visual hierarchy */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              title="Real Results for Manufacturers"
              description="Our clients achieve measurable improvements in their financial performance"
              centered={true}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-none shadow-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold text-amber-600 mb-3">
                  1,176+
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Payroll hours saved annually for a plastics manufacturer
                  without adding a night shift
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-none shadow-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold text-amber-600 mb-3">55%</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reduction in human capital overhead while increasing net
                  business income by 10%
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-none shadow-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold text-amber-600 mb-3">
                  $4 Million
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Financing procured for a packaging company's expansion with
                  38% production revenue increase
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-none shadow-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-4xl font-bold text-amber-600 mb-3">
                  1.6 Years
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Average time to full breakeven on major capital investments
                  for our clients
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 font-medium"
            >
              <Link href="/case-studies">See Our Success Stories →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Approach Section - Enhanced visual presentation */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              title="Our Three-Pillar Approach"
              description="A comprehensive strategy to optimize your manufacturing business"
              centered={true}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <ProcessStep
              number="1"
              title="The Strategies to Save"
              description="We plug holes and reduce overhead to keep more money in your company."
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            <ProcessStep
              number="2"
              title="The Guidance to Profit"
              description="We help you leverage existing resources and expand capabilities to generate more revenue."
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            <ProcessStep
              number="3"
              title="The Financing to Grow"
              description="We help you access growth capital and pay it off with a sensible plan that builds long-term success."
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 font-medium"
            >
              <Link href="/services">Learn About Our Approach →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Introduction Section - Improved layout and visual appeal */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-100 rounded-full blur-2xl opacity-30 z-0"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.57%20-%20Abstract%20geometric%20design%20representing%20personalized%20service.%20Features%20distinct%20dark%20blue%20shapes%20initially%20separate%2C%20then%20converging%20or%20merging%20toward%20-ss2NYV2sHx02vNTU2Yvl5m04xhadQM.webp"
                  alt="Abstract geometric design representing personalized financial service with balanced blue and gold elements"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover mx-auto lg:mx-0 shadow-lg relative z-10"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <SectionHeading
                  title="All In. All Year. All Inclusive."
                  description="A different kind of accounting partnership"
                />
              </div>
              <Testimonial
                quote="Because you can't expect a tax preparer to have your back throughout the year. And a CPA who's in touch 4 times a year? There's no chance they can guide your business during the other 48 weeks. At Schapira you get a partner who's invested in your 10x plan."
                author="Mendel Schapira"
                role="Founder & Chief CPA"
                className="mb-8"
              />
              <Button
                asChild
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 font-medium"
              >
                <Link href="/team">Meet Our Team →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced visual appeal and spacing */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 leading-tight">
            Make Today Profitable
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Ready to transform your manufacturing business with strategic
            financial guidance? Let's start a conversation about your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 font-medium px-8 py-6 h-auto"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-amber-700/50 font-medium px-8 py-6 h-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
