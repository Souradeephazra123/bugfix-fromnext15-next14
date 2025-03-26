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
  Users,
  Lightbulb,
} from "lucide-react";
import { generateMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = generateMetadata({
  title: "Advanced Composites Case Study | Schapira CPA",
  description:
    "How Advanced Composites secured $1.2M in equipment financing and $135K in annual R&D tax credits through our specialized manufacturing financial solutions.",
  canonical: "/success-stories/advanced-composites",
});

export default function AdvancedCompositesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="text-yellow-600 font-bold mb-2">
              Plastics & Composites Case Study
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative pb-4">
              Advanced Composites
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow-600"></span>
            </h1>
            <p className="text-xl max-w-[600px] mb-8">
              How a growing composites manufacturer secured equipment financing
              and R&D tax credits to fuel their expansion after being turned
              down by traditional banks.
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
            label: "Advanced Composites",
            href: "/success-stories/advanced-composites",
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
                    <span className="font-bold">Company:</span> Advanced
                    Composites
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-yellow-600 mr-3" />
                  <div>
                    <span className="font-bold">Size:</span> $9M annual revenue,
                    65 employees
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-yellow-600 mr-3" />
                  <div>
                    <span className="font-bold">Industry:</span> Plastics &
                    Composites Manufacturing
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced Composites specializes in high-performance composite
                materials and components for the automotive, aerospace, and
                renewable energy sectors. Founded 12 years ago, the company has
                experienced rapid growth due to increasing demand for
                lightweight, durable materials.
              </p>
              <p className="text-gray-600">
                Despite strong market demand and technical innovation, the
                company faced significant financial challenges that limited
                their ability to expand production capacity and capitalize on
                new market opportunities.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.26.09%20-%20A%20clean%2C%20professional%20image%20for%20Advanced%20Composites.%20Features%20abstract%20geometric%20patterns%20symbolizing%20innovation%2C%20modern%20technology%2C%20and%20advanced%20mate-s1RLyYbA7JKeFIKP2jbHayMmmrMlS7.webp"
                alt="Advanced Composites facility featuring modern manufacturing technology for high-performance composite materials"
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
                <h3 className="text-xl font-bold mb-3">Financing Rejection</h3>
                <p className="text-gray-600">
                  Despite strong growth, the company had been turned down by
                  three banks for equipment financing due to inconsistent
                  financial performance and limited collateral.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Capacity Constraints</h3>
                <p className="text-gray-600">
                  Production capacity was maxed out, forcing the company to turn
                  away new business and limiting their ability to meet growing
                  demand from existing customers.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Untapped R&D Credits</h3>
                <p className="text-gray-600">
                  The company was investing heavily in process improvements and
                  material innovations but wasn't capturing available R&D tax
                  credits for these activities.
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

          <Tabs defaultValue="financing" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="financing">
                Growth Financing Strategy
              </TabsTrigger>
              <TabsTrigger value="rd-credits">
                R&D Tax Credit Capture
              </TabsTrigger>
              <TabsTrigger value="financial-restructuring">
                Financial Restructuring
              </TabsTrigger>
            </TabsList>

            <TabsContent value="financing" className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Growth Financing Strategy
                  </h3>
                  <p className="text-gray-600 mb-6">
                    After being rejected by traditional banks, we developed a
                    comprehensive financing strategy to secure the capital
                    needed for expansion:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Conducted comprehensive financial analysis to identify
                        strengths and weaknesses
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Developed detailed equipment ROI analysis with
                        production capacity projections
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Identified and secured specialized manufacturing
                        equipment financing
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Negotiated favorable terms with minimal down payment
                        requirements
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Financing Details</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Equipment Financed:</span>
                      <span>Automated Composite Layup System</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Total Amount:</span>
                      <span>$1,200,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Term:</span>
                      <span>72 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Interest Rate:</span>
                      <span>5.25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Down Payment:</span>
                      <span>10% ($120,000)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Monthly Payment:</span>
                      <span>$18,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Projected ROI:</span>
                      <span>28% Annual</span>
                    </div>
                    <div className="pt-4 border-t border-gray-300">
                      <div className="font-bold">Key Benefit:</div>
                      <p className="text-gray-600">
                        Increased production capacity by 65% while reducing
                        labor costs by 22% per unit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rd-credits" className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    R&D Tax Credit Capture
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We identified significant R&D tax credit opportunities that
                    had been completely overlooked:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Conducted comprehensive R&D activity assessment across
                        all departments
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Identified qualifying activities in process development,
                        material testing, and prototype creation
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Implemented documentation systems to track and
                        substantiate R&D activities
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Filed amended returns for prior years to capture
                        overlooked credits
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">
                    R&D Credit Breakdown
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="font-bold">Current Year Credits</div>
                      <div className="text-xl font-bold text-yellow-600">
                        $135,000
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="font-bold">Prior Year (Amended)</div>
                      <div className="text-xl font-bold text-yellow-600">
                        $118,500
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="font-bold">Prior Year (Amended)</div>
                      <div className="text-xl font-bold text-yellow-600">
                        $46,500
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                      <div className="font-bold text-lg">Total R&D Credits</div>
                      <div className="text-2xl font-bold text-yellow-600">
                        $300,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="financial-restructuring" className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Financial Restructuring
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We implemented comprehensive financial restructuring to
                    improve the company's financial position and support
                    sustainable growth:
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
                        Implemented job costing system to track profitability by
                        product line
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Developed cash flow forecasting model to improve working
                        capital management
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                      <span>
                        Created financial dashboard with KPIs for management
                        decision-making
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
                        <h5 className="font-bold">Financial Assessment</h5>
                        <p className="text-gray-600">
                          Comprehensive analysis of financial structure and
                          performance
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="ml-4">
                        <h5 className="font-bold">Systems Implementation</h5>
                        <p className="text-gray-600">
                          Job costing and financial tracking systems deployed
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="ml-4">
                        <h5 className="font-bold">Process Optimization</h5>
                        <p className="text-gray-600">
                          Streamlined financial processes and reporting
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div className="ml-4">
                        <h5 className="font-bold">Ongoing Management</h5>
                        <p className="text-gray-600">
                          Quarterly reviews and continuous improvement
                        </p>
                      </div>
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
                  $1.2M
                </div>
                <h3 className="text-xl font-bold mb-3">Equipment Financing</h3>
                <p className="text-gray-600">
                  Secured equipment financing after being rejected by three
                  traditional banks, enabling critical capacity expansion.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-yellow-600 mb-4">
                  $300K
                </div>
                <h3 className="text-xl font-bold mb-3">R&D Tax Credits</h3>
                <p className="text-gray-600">
                  Identified and captured $300K in R&D tax credits, including
                  $165K from amended prior year returns.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-yellow-600 mb-4">
                  65%
                </div>
                <h3 className="text-xl font-bold mb-3">Production Increase</h3>
                <p className="text-gray-600">
                  Expanded production capacity by 65% while reducing labor costs
                  by 22% per unit through new equipment.
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
                      Improved gross profit margins from 32% to 41% through
                      better job costing
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Reduced cash conversion cycle from 72 days to 54 days
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Established ongoing R&D tax credit documentation process
                      for future years
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Created financial dashboard with KPIs for management
                      decision-making
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
                      Secured two major new contracts in the renewable energy
                      sector
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Added 18 new jobs across production and engineering
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span>
                      Increased annual revenue by 37% in the first year after
                      implementation
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
                When traditional banks turned us down, Schapira CPA found
                alternative financing solutions that were actually better suited
                to our manufacturing business model. Their expertise in R&D tax
                credits was a game-changer - we had no idea we were leaving so
                much money on the table. The financial restructuring they
                implemented has given us the foundation we needed to scale our
                business with confidence.
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.34.25%20-%20Professional%20circular%20profile%20image%20for%20client%20testimonial.%20Depicts%20a%20friendly%2C%20confident%20businesswoman%20with%20a%20welcoming%2C%20professional%20expression.%20Sty-HAXLYE3UB0aUXaKcFyIf5IIE5HkFTl.webp"
                    alt="Lisa Rodriguez, CEO of Advanced Composites"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Lisa Rodriguez</div>
                  <div className="text-gray-300">CEO, Advanced Composites</div>
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2013.26.06%20-%20A%20clean%2C%20professional%20image%20for%20Precision%20Metal%20Products.%20The%20composition%20includes%20an%20abstract%2C%20geometric%20pattern%20suggesting%20precision%20and%20craftsmansh-SyAqXDsLsgCGmUGCAqx4nHILdP0QeY.webp"
                      alt="Precision Metal Products manufacturing components and tools"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6">
                    <div className="text-yellow-600 font-bold mb-1">
                      Metal Fabrication
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Precision Metal Products
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      $175K tax savings, 22% working capital reduction, and 11%
                      margin increase for a custom metal fabricator.
                    </p>
                    <Link
                      href="/success-stories/precision-metal-products"
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
                      alt="Harvest Foods sustainable food processing facility"
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
