import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Building,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  Clock,
  Users,
} from "lucide-react";
import { generateMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = generateMetadata({
  title: "Precision Metal Products Case Study | Schapira CPA",
  description:
    "How Precision Metal Products achieved $175K in tax savings and 22% working capital reduction through our ProFit™ Method and strategic financial management.",
  canonical: "/success-stories/precision-metal-products",
});

export default function PrecisionMetalProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="text-yellow-600 font-bold mb-2">
              Metal Fabrication Case Study
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative pb-4">
              Precision Metal Products
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow-600"></span>
            </h1>
            <p className="text-xl max-w-[600px] mb-8">
              How a custom metal fabricator overcame declining margins and cash
              flow challenges to achieve sustainable growth and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="#results">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-lg font-semibold"
                >
                  View Results
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
          { label: "Success Stories", href: "/success-stories" },
          {
            label: "Precision Metal Products",
            href: "/success-stories/precision-metal-products",
            active: true,
          },
        ]}
      />

      {/* Client Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Client Overview</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Building className="h-6 w-6 text-yellow-600 mr-3" />
                  <div>
                    <span className="font-bold">Company:</span> Precision Metal
                    Products
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-yellow-600 mr-3" />
                  <div>
                    <span className="font-bold">Size:</span> $12M annual
                    revenue, 85 employees
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-yellow-600 mr-3" />
                  <div>
                    <span className="font-bold">Industry:</span> Custom Metal
                    Fabrication
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Precision Metal Products is a second-generation family-owned
                business specializing in custom metal fabrication for the
                aerospace, defense, and medical device industries. With over 30
                years of experience, they've built a reputation for
                high-quality, precision components.
              </p>
              <p className="text-gray-600">
                Despite their technical expertise, the company faced significant
                financial challenges that threatened their ability to invest in
                new equipment needed for growth and maintain their competitive
                edge in a rapidly evolving industry.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.26.06%20-%20A%20clean%2C%20professional%20image%20for%20Precision%20Metal%20Products.%20The%20composition%20includes%20an%20abstract%2C%20geometric%20pattern%20suggesting%20precision%20and%20craftsmansh-SyAqXDsLsgCGmUGCAqx4nHILdP0QeY.webp"
                alt="Precision Metal Products facility showing high-precision metal components and tools in blue and gold"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            The Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Declining Profit Margins
                </h3>
                <p className="text-gray-600">
                  Profit margins had declined from 12% to 7% over three years
                  due to rising material costs and pricing pressures,
                  threatening the company's long-term viability.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Cash Flow Constraints
                </h3>
                <p className="text-gray-600">
                  Long payment cycles (net-60) from major customers combined
                  with inventory requirements created significant working
                  capital challenges and limited growth.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Equipment Financing Needs
                </h3>
                <p className="text-gray-600">
                  The company needed to invest $1.5M in new CNC equipment to
                  remain competitive, but traditional banks were hesitant due to
                  inconsistent financial performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Solution</h2>

          <Tabs defaultValue="profit-method" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="profit-method">
                ProFit™ Method Implementation
              </TabsTrigger>
              <TabsTrigger value="tax-strategy">
                Strategic Tax Planning
              </TabsTrigger>
              <TabsTrigger value="financing">
                Equipment Financing Solution
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profit-method" className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    ProFit™ Method Implementation
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We implemented our proprietary ProFit™ Method to address
                    the core financial challenges facing Precision Metal
                    Products. This comprehensive approach included:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Comprehensive cost accounting analysis to identify
                        hidden profit drains and inefficiencies
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Implementation of job costing system to accurately track
                        profitability by customer and product line
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Development of data-driven pricing strategy based on
                        actual production costs and target margins
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Quarterly business reviews to track progress and make
                        strategic adjustments
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">
                    Implementation Timeline
                  </h4>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div className="ml-4">
                        <h5 className="font-bold">Initial Assessment</h5>
                        <p className="text-gray-600">
                          Comprehensive financial analysis and identification of
                          key challenges
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="ml-4">
                        <h5 className="font-bold">Strategy Development</h5>
                        <p className="text-gray-600">
                          Creation of customized financial improvement roadmap
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="ml-4">
                        <h5 className="font-bold">Implementation</h5>
                        <p className="text-gray-600">
                          Execution of cost accounting, pricing, and cash flow
                          strategies
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div className="ml-4">
                        <h5 className="font-bold">Ongoing Optimization</h5>
                        <p className="text-gray-600">
                          Quarterly reviews and continuous improvement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tax-strategy" className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Strategic Tax Planning
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We identified significant tax saving opportunities that had
                    been overlooked, implementing a comprehensive tax strategy
                    that included:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        R&D tax credit qualification for process improvements
                        and custom fabrication innovations
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Section 179 and bonus depreciation optimization for
                        equipment purchases
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Cost segregation study to accelerate depreciation on
                        building improvements
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Strategic entity restructuring to optimize tax position
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">
                    Tax Savings Breakdown
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="font-bold">R&D Tax Credits</div>
                      <div className="text-xl font-bold text-yellow-600">
                        $92,500
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: "53%" }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="font-bold">Accelerated Depreciation</div>
                      <div className="text-xl font-bold text-yellow-600">
                        $58,700
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: "34%" }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="font-bold">Entity Restructuring</div>
                      <div className="text-xl font-bold text-yellow-600">
                        $23,800
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: "13%" }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                      <div className="font-bold text-lg">Total Tax Savings</div>
                      <div className="text-2xl font-bold text-yellow-600">
                        $175,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="financing" className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Equipment Financing Solution
                  </h3>
                  <p className="text-gray-600 mb-6">
                    After being turned down by three traditional banks, we
                    developed a comprehensive financing strategy that secured
                    the necessary capital for equipment investment:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Restructured financial statements to highlight true
                        business performance
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Developed detailed ROI analysis for new equipment
                        investment
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Secured $1.5M equipment financing through specialized
                        manufacturing lender
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Negotiated favorable terms with 90-day deferred payment
                        start
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Financing Details</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Equipment Financed:</span>
                      <span>CNC Machining Centers (2)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Total Amount:</span>
                      <span>$1,500,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Term:</span>
                      <span>60 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Interest Rate:</span>
                      <span>4.75% (vs. 6.5% bank offer)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Monthly Payment:</span>
                      <span>$28,175</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Payment Start:</span>
                      <span>90 Days Deferred</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Projected ROI:</span>
                      <span>22% Annual</span>
                    </div>
                    <div className="pt-4 border-t border-gray-300">
                      <div className="font-bold">Key Benefit:</div>
                      <p className="text-gray-600">
                        Equipment was operational and generating revenue before
                        first payment was due
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">The Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-yellow-600 mb-4">
                  $175K
                </div>
                <h3 className="text-xl font-bold mb-3">Tax Savings</h3>
                <p className="text-gray-600">
                  Annual tax savings through R&D credits, accelerated
                  depreciation, and strategic entity restructuring.
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
                  freed up resources for strategic investments.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-yellow-600 mb-4">
                  11%
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Profit Margin Increase
                </h3>
                <p className="text-gray-600">
                  Margins improved from 7% to 18% through cost accounting,
                  strategic pricing, and operational efficiencies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Long-Term Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">
                  Financial Transformation
                </h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Secured $1.5M equipment financing that three banks had
                      previously declined
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Reduced cash conversion cycle from 87 days to 62 days
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Implemented data-driven pricing strategy that improved
                      margins by 11%
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Established quarterly business review process for ongoing
                      financial optimization
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Business Growth</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Increased production capacity by 35% with new equipment
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Added 12 new jobs in manufacturing and engineering
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Secured three new major contracts in aerospace and medical
                      device sectors
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Positioned for sustainable growth with improved financial
                      foundation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 text-white p-8 md:p-12 rounded-xl relative">
            <div className="text-yellow-600 text-6xl absolute top-6 left-8">
              "
            </div>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <p className="text-xl md:text-2xl mb-8 italic">
                The team at Schapira CPA transformed our financial operations.
                Their ProFit™ Method gave us visibility into our true costs and
                profitability for the first time. The tax savings alone paid for
                their services many times over, but the real value was in
                helping us secure the equipment financing we needed to grow and
                the strategic guidance that's put us on a sustainable path to
                profitability.
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.34.24%20-%20Professional%20headshot%20of%20a%20friendly%2C%20confident%20businessperson.%20Suitable%20for%20client%20testimonials.%20Gender-neutral%20individual%20with%20a%20welcoming%20expression-aXKDut2MEphXBkIkSSF2ep5lYSzg8y.webp"
                    alt="Michael Anderson, President of Precision Metal Products"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Michael Anderson</div>
                  <div className="text-gray-300">
                    President, Precision Metal Products
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Related Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 bg-gray-200 relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.26.09%20-%20A%20clean%2C%20professional%20image%20for%20Advanced%20Composites.%20Features%20abstract%20geometric%20patterns%20symbolizing%20innovation%2C%20modern%20technology%2C%20and%20advanced%20mate-s1RLyYbA7JKeFIKP2jbHayMmmrMlS7.webp"
                      alt="Advanced Composites innovative materials and technology"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6">
                    <div className="text-yellow-600 font-bold mb-1">
                      Plastics & Composites
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Advanced Composites
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      $1.2M equipment financing secured and $135K annual R&D tax
                      credits identified for a growing composites manufacturer.
                    </p>
                    <Link
                      href="/success-stories/advanced-composites"
                      className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center text-sm"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-3">
                  <div className="col-span-1 bg-gray-200 relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.27.31%20-%20A%20clean%2C%20professional%20abstract%20image%20for%20Harvest%20Foods.%20Features%20geometric%20shapes%20and%20patterns%20symbolizing%20growth%2C%20freshness%2C%20and%20sustainability.%20The%20-t3VNUtHpHUKF3n9BIsTP1KRc1pm3fK.webp"
                      alt="Harvest Foods sustainable food processing operations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6">
                    <div className="text-yellow-600 font-bold mb-1">
                      Food Processing
                    </div>
                    <h3 className="text-xl font-bold mb-2">Harvest Foods</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      $2.5M facility expansion financing and 42% reduction in
                      working capital requirements for a seasonal food
                      processor.
                    </p>
                    <Link
                      href="/success-stories/harvest-foods"
                      className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center text-sm"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
