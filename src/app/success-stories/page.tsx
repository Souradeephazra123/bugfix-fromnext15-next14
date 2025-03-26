import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building, TrendingUp, DollarSign } from "lucide-react";
import { generateMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = generateMetadata({
  title: "Manufacturing Client Success Stories | Schapira CPA",
  description:
    "Real results and measurable financial improvements achieved by our manufacturing clients through strategic financial management.",
  canonical: "/success-stories",
});

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative pb-4">
              Manufacturing Success Stories
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow-600"></span>
            </h1>
            <p className="text-xl max-w-[600px] mb-8">
              Real results and measurable financial improvements achieved by our
              manufacturing clients through strategic financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-[30%] clip-triangle bg-yellow-600 opacity-80"></div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Success Stories", href: "/success-stories", active: true },
        ]}
      />

      {/* Results Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results for Manufacturers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our manufacturing clients achieve significant financial
              improvements through our specialized strategies and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-yellow-600 mb-4">
                  $175K+
                </div>
                <h3 className="text-xl font-bold mb-3">Average Tax Savings</h3>
                <p className="text-gray-600">
                  Our manufacturing clients achieve substantial tax savings
                  through strategic planning and industry-specific credits.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-yellow-600 mb-4">
                  22%
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Working Capital Reduction
                </h3>
                <p className="text-gray-600">
                  Improved cash flow management and working capital optimization
                  free up resources for strategic investments.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-yellow-600 mb-4">
                  18%
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Profit Margin Increase
                </h3>
                <p className="text-gray-600">
                  Strategic financial planning and cost optimization drive
                  sustainable profit improvements for our manufacturing clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manufacturing Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed examples of how manufacturers overcame financial
              challenges with our strategic accounting and advisory services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <Card className="shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="text-yellow-600 font-bold mb-2">
                      Metal Fabrication
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Precision Metal Products
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Precision Metal Products faced declining margins and cash
                      flow challenges in their custom fabrication business,
                      threatening their ability to invest in new equipment
                      needed for growth.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <Building className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">Company Size:</span> $12M
                          annual revenue, 85 employees
                        </div>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">
                            Solutions Implemented:
                          </span>{" "}
                          ProFit™ Method, Cost Accounting, Tax Strategy
                        </div>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">Results:</span> $175K tax
                          savings, 22% working capital reduction, 11% margin
                          increase
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/success-stories/precision-metal-products"
                      className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  <div className="bg-gray-200 relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.26.06%20-%20A%20clean%2C%20professional%20image%20for%20Precision%20Metal%20Products.%20The%20composition%20includes%20an%20abstract%2C%20geometric%20pattern%20suggesting%20precision%20and%20craftsmansh-SyAqXDsLsgCGmUGCAqx4nHILdP0QeY.webp"
                      alt="Precision Metal Products - Custom metal fabrication components in blue and gold showing precision engineering tools and parts"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="text-yellow-600 font-bold mb-2">
                      Plastics & Composites
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Advanced Composites
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Advanced Composites needed to expand their production
                      capacity to meet growing demand but had been turned down
                      by three banks for equipment financing due to inconsistent
                      financial performance.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <Building className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">Company Size:</span> $9M
                          annual revenue, 65 employees
                        </div>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">
                            Solutions Implemented:
                          </span>{" "}
                          Growth Financing, R&D Tax Credits, Financial
                          Restructuring
                        </div>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">Results:</span> $1.2M
                          equipment financing secured, $135K annual R&D tax
                          credits
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/success-stories/advanced-composites"
                      className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  <div className="bg-gray-200 relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.26.09%20-%20A%20clean%2C%20professional%20image%20for%20Advanced%20Composites.%20Features%20abstract%20geometric%20patterns%20symbolizing%20innovation%2C%20modern%20technology%2C%20and%20advanced%20mate-s1RLyYbA7JKeFIKP2jbHayMmmrMlS7.webp"
                      alt="Advanced Composites - Modern materials technology represented with geometric blue and gold circular patterns"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="text-yellow-600 font-bold mb-2">
                      Food Processing
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Harvest Foods</h3>
                    <p className="text-gray-600 mb-6">
                      Harvest Foods faced significant seasonal cash flow
                      challenges that limited their ability to maintain
                      consistent production levels throughout the year and
                      hindered their facility expansion plans.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <Building className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">Company Size:</span> $25M
                          annual revenue, 150 employees
                        </div>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">
                            Solutions Implemented:
                          </span>{" "}
                          Cash Flow Management, Strategic Financing, Tax
                          Planning
                        </div>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                          <span className="font-bold">Results:</span> $2.5M
                          facility expansion financing, 42% reduction in working
                          capital requirements
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/success-stories/harvest-foods"
                      className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  <div className="bg-gray-200 relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.27.31%20-%20A%20clean%2C%20professional%20abstract%20image%20for%20Harvest%20Foods.%20Features%20geometric%20shapes%20and%20patterns%20symbolizing%20growth%2C%20freshness%2C%20and%20sustainability.%20The%20-t3VNUtHpHUKF3n9BIsTP1KRc1pm3fK.webp"
                      alt="Harvest Foods - Food processing industry represented with wheat and grain motifs in blue and gold geometric patterns"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear directly from our manufacturing clients about how our
              services have transformed their financial performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="text-yellow-600 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6">
                  The team at Schapira CPA helped us secure equipment financing
                  that allowed us to expand our production capacity without
                  depleting our working capital. Their strategic approach made
                  all the difference.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.34.24%20-%20Professional%20headshot%20of%20a%20friendly%2C%20confident%20businessperson.%20Suitable%20for%20client%20testimonials.%20Gender-neutral%20individual%20with%20a%20welcoming%20expression-aXKDut2MEphXBkIkSSF2ep5lYSzg8y.webp"
                      alt="James Anderson, Owner of Anderson Manufacturing"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-bold">James Anderson</div>
                    <div className="text-gray-500">
                      Owner, Anderson Manufacturing
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="text-yellow-600 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6">
                  When traditional banks turned us down, Schapira CPA found
                  alternative financing solutions that were actually better
                  suited to our manufacturing business model. Their expertise in
                  the industry was invaluable.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.34.25%20-%20Professional%20circular%20profile%20image%20for%20client%20testimonial.%20Depicts%20a%20friendly%2C%20confident%20businesswoman%20with%20a%20welcoming%2C%20professional%20expression.%20Sty-HAXLYE3UB0aUXaKcFyIf5IIE5HkFTl.webp"
                      alt="Lisa Rodriguez, CEO of Innovative Fabrication"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Lisa Rodriguez</div>
                    <div className="text-gray-500">
                      CEO, Innovative Fabrication
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="text-yellow-600 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6">
                  The team at Schapira CPA helped us restructure our debt and
                  secure additional growth capital, which allowed us to take on
                  larger contracts. Their financial guidance has been
                  transformative for our business.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.34.47%20-%20Professional%20circular%20profile%20image%20for%20client%20testimonial%20featuring%20a%20friendly%20and%20confident%20businessman%20with%20a%20welcoming%20smile.%20Styled%20with%20a%20clean%2C-02qjrdmcy5Kk6XKdAmWbvFJgkzezJN.webp"
                      alt="Mark Johnson, President of Johnson Precision Parts"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Mark Johnson</div>
                    <div className="text-gray-500">
                      President, Johnson Precision Parts
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8">
              Schedule a consultation with our manufacturing financial
              specialists to discover how our solutions can help your business
              thrive.
            </p>
            <Link href="/consultation">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
