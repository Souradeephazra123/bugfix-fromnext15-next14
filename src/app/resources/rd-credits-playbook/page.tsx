import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle2,
  AlertCircle,
  FileText,
  Calculator,
  Download,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing R&D Tax Credits Playbook | Schapira CPA",
  description:
    "Comprehensive guide to R&D tax credits for manufacturing businesses. Learn about qualifying activities, documentation requirements, and how to maximize your tax savings.",
  keywords:
    "R&D tax credits manufacturing, research and development tax credit, manufacturing tax incentives, R&D documentation, manufacturing process improvement credits",
};

export default function RDCreditsPlaybookPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb />
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Manufacturing R&D Tax Credits Playbook
          </h1>
          <p className="text-lg text-gray-700">
            Your comprehensive guide to identifying, documenting, and claiming
            valuable R&D tax credits for your manufacturing business.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">
                Manufacturers Are Missing Out on Millions in R&D Credits
              </h2>
              <p className="mb-4">
                Many manufacturing companies don't realize their process
                improvements, product development, and engineering activities
                qualify for valuable R&D tax credits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/calculators/rd-credit-calculator">
                    Calculate Your Potential Credits
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/consultation">Schedule a Free Assessment</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 md:pl-6 flex justify-center">
              <div className="rounded-full bg-blue-100 p-6">
                <Calculator className="h-16 w-16 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="qualifying">Qualifying Activities</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="claiming">Claiming Credits</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="pt-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  What Are R&D Tax Credits?
                </h2>
                <p className="text-gray-700 mb-4">
                  The Research & Development (R&D) Tax Credit is a
                  dollar-for-dollar tax incentive for companies that develop new
                  or improved products, processes, or software in the United
                  States. For manufacturers, this can result in significant tax
                  savings.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Federal Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Up to 10% of qualifying R&D expenses can be claimed as a
                        federal tax credit, reducing your tax liability
                        dollar-for-dollar.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">State Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Many states offer additional R&D tax credits, which can
                        be claimed alongside federal credits for even greater
                        savings.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Carryforward</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Unused R&D credits can be carried forward for up to 20
                        years, providing long-term tax benefits for your
                        manufacturing business.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  The Four-Part Test for R&D Activities
                </h3>
                <p className="text-gray-700 mb-4">
                  To qualify for the R&D tax credit, activities must meet these
                  four criteria:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Permitted Purpose</h4>
                      <p className="text-gray-700">
                        Activities must relate to developing or improving
                        functionality, performance, reliability, or quality of a
                        product, process, software, technique, formula, or
                        invention.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Technological in Nature</h4>
                      <p className="text-gray-700">
                        Activities must rely on principles of physical sciences,
                        engineering, or computer science.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Elimination of Uncertainty
                      </h4>
                      <p className="text-gray-700">
                        Activities must be intended to eliminate uncertainty
                        regarding the development or improvement of a product or
                        process.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Process of Experimentation
                      </h4>
                      <p className="text-gray-700">
                        Activities must involve evaluating alternatives through
                        modeling, simulation, systematic trial and error, or
                        other methods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Qualifying Activities Tab */}
          <TabsContent value="qualifying" className="pt-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Qualifying Manufacturing R&D Activities
                </h2>
                <p className="text-gray-700 mb-4">
                  Many common manufacturing activities qualify for R&D tax
                  credits. Here are examples of qualifying activities across
                  different manufacturing sectors:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Development & Improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Designing and developing new products</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Improving existing product functionality or
                          performance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Creating and testing prototypes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Developing new materials or material applications
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Engineering design work and 3D modeling</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Manufacturing Process Improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Developing more efficient production methods
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Automating manual processes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Implementing lean manufacturing techniques</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Designing and developing custom tooling or fixtures
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Improving quality control processes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technology Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Implementing IoT sensors and monitoring systems
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Developing custom software for manufacturing processes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Integrating robotics or automation systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Creating digital twins of manufacturing processes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Developing machine learning algorithms for predictive
                          maintenance
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      Environmental & Sustainability Improvements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Developing energy-efficient manufacturing processes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Creating recycling or waste reduction systems
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Developing alternative materials with lower
                          environmental impact
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Testing and implementing water conservation techniques
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Designing products for improved recyclability or reuse
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Non-Qualifying Activities
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Not all manufacturing activities qualify for R&D tax
                      credits. The following activities generally do not
                      qualify:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Routine quality control testing</li>
                      <li>• Market research or customer surveys</li>
                      <li>• Style, taste, or cosmetic changes</li>
                      <li>• Routine data collection</li>
                      <li>• Foreign research activities</li>
                      <li>• Research after commercial production begins</li>
                      <li>
                        • Adaptation of existing products to a particular
                        customer's needs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  Industry-Specific Qualifying Activities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Metal Fabrication</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Developing new alloys or metal composites</li>
                      <li>• Improving welding or joining techniques</li>
                      <li>• Creating custom tooling for complex parts</li>
                      <li>• Optimizing CNC programming for efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Plastics & Composites
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Developing new polymer formulations</li>
                      <li>• Improving molding or extrusion processes</li>
                      <li>
                        • Testing material properties under various conditions
                      </li>
                      <li>• Creating lightweight composite alternatives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Electronics Manufacturing
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Developing new circuit designs</li>
                      <li>• Improving PCB manufacturing processes</li>
                      <li>• Testing component reliability</li>
                      <li>
                        • Creating miniaturized versions of existing components
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Food Processing</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Developing new preservation techniques</li>
                      <li>• Creating automated sorting or packaging systems</li>
                      <li>• Testing shelf-life extension methods</li>
                      <li>
                        • Improving nutritional content while maintaining taste
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Documentation Tab */}
          <TabsContent value="documentation" className="pt-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Documentation Requirements
                </h2>
                <p className="text-gray-700 mb-4">
                  Proper documentation is critical for supporting R&D tax credit
                  claims. The IRS requires contemporaneous documentation that
                  demonstrates both the process of experimentation and the
                  technological uncertainty being addressed.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  Essential Documentation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Project Documentation
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Project plans and technical specifications</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Design documents and engineering drawings</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Test protocols and results</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Project status reports and meeting minutes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Financial Documentation
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Payroll records for R&D staff</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Contractor invoices for R&D services</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Material costs for prototypes and testing</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Equipment usage logs for R&D activities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  Documentation Best Practices
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Contemporaneous Documentation
                      </h4>
                      <p className="text-gray-700">
                        Create documentation during the R&D process, not after
                        the fact. Real-time documentation is more credible and
                        valuable for supporting your claim.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Link Activities to Four-Part Test
                      </h4>
                      <p className="text-gray-700">
                        Ensure your documentation clearly demonstrates how
                        activities meet the four-part test for qualifying R&D,
                        especially the process of experimentation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Track Time by Project</h4>
                      <p className="text-gray-700">
                        Implement systems to track employee time spent on
                        specific R&D projects, including detailed descriptions
                        of activities performed.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Document Failures</h4>
                      <p className="text-gray-700">
                        Failed experiments and prototypes are strong evidence of
                        R&D activity. Document these thoroughly, including what
                        was learned from the failure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold mb-4">
                  Our Documentation Support Services
                </h3>
                <p className="text-gray-700 mb-4">
                  Schapira CPA can help you implement effective documentation
                  systems for your R&D activities:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Custom R&D activity tracking templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Project documentation review and enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      Time tracking system implementation for R&D staff
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      Documentation training for engineering and technical staff
                    </span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/contact">
                      <Download className="mr-2 h-4 w-4" />
                      Download Our R&D Documentation Toolkit
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Claiming Credits Tab */}
          <TabsContent value="claiming" className="pt-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Claiming R&D Tax Credits
                </h2>
                <p className="text-gray-700 mb-4">
                  The process of claiming R&D tax credits involves several
                  steps, from identifying qualifying activities to filing the
                  appropriate forms with your tax return.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">
                  The R&D Credit Claim Process
                </h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Identify Qualifying Projects & Activities
                      </h4>
                      <p className="text-gray-700">
                        Review all projects and activities to determine which
                        ones meet the four-part test for qualifying R&D.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Calculate Qualified Research Expenses (QREs)
                      </h4>
                      <p className="text-gray-700">
                        Determine eligible expenses, including wages, supplies,
                        and contract research costs related to qualifying
                        activities.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Select Calculation Method
                      </h4>
                      <p className="text-gray-700">
                        Choose between the Regular Credit Method and the
                        Alternative Simplified Credit (ASC) method based on
                        which provides the greater benefit.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Prepare Required Forms</h4>
                      <p className="text-gray-700">
                        Complete Form 6765 (Credit for Increasing Research
                        Activities) and attach it to your business tax return.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Document Credit Calculation
                      </h4>
                      <p className="text-gray-700">
                        Prepare a detailed study documenting how activities
                        qualify and how expenses were calculated.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-bold text-blue-600">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">File with Tax Return</h4>
                      <p className="text-gray-700">
                        Submit the completed forms and documentation with your
                        federal tax return.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Regular Credit Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      The Regular Credit Method compares current year QREs to a
                      base amount calculated using historical research expenses.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          20% credit rate on QREs exceeding the base amount
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Requires historical financial data from 1984-1988
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          More complex calculation but potentially higher credit
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Alternative Simplified Credit (ASC)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      The ASC method calculates the credit based on the increase
                      in QREs over 50% of the average QREs for the previous
                      three years.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          14% credit rate on QREs exceeding the base amount
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Only requires data from the previous three years
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Simpler calculation and more commonly used</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Audit Considerations
                    </h3>
                    <p className="text-gray-700 mb-3">
                      R&D tax credit claims may be subject to IRS audit. To
                      minimize risk, ensure you:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Maintain thorough contemporaneous documentation</li>
                      <li>
                        • Clearly connect activities to the four-part test
                      </li>
                      <li>
                        • Have technical staff available to explain projects
                      </li>
                      <li>
                        • Work with experienced R&D tax credit specialists
                      </li>
                      <li>
                        • Consider a pre-filing review by tax professionals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  How Schapira CPA Can Help
                </h3>
                <p className="mb-4">
                  Our specialized R&D tax credit team has helped manufacturing
                  clients claim millions in tax credits. Our services include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-white mt-0.5 mr-2 flex-shrink-0" />
                        <span>Comprehensive R&D activity assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-white mt-0.5 mr-2 flex-shrink-0" />
                        <span>QRE calculation and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-white mt-0.5 mr-2 flex-shrink-0" />
                        <span>Documentation review and enhancement</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-white mt-0.5 mr-2 flex-shrink-0" />
                        <span>Credit calculation and form preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-white mt-0.5 mr-2 flex-shrink-0" />
                        <span>Audit defense support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-white mt-0.5 mr-2 flex-shrink-0" />
                        <span>Multi-year planning strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="secondary">
                    <Link href="/consultation">Schedule a Free Assessment</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-blue-700"
                  >
                    <Link href="/calculators/rd-credit-calculator">
                      Calculate Potential Credits
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-blue-600" />
                R&D Credit Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Estimate your potential R&D tax credits based on your qualifying
                research expenses.
              </p>
              <Button asChild className="w-full">
                <Link href="/calculators/rd-credit-calculator">
                  Calculate Credits <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Documentation Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Download our R&D documentation templates to help track and
                document your qualifying activities.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources/rd-documentation-templates">
                  Download Templates <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Free R&D Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Schedule a free assessment with our R&D tax specialists to
                identify your qualifying activities.
              </p>
              <Button asChild className="w-full">
                <Link href="/consultation">
                  Schedule Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Claim Your R&D Tax Credits?
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Our team of manufacturing R&D tax specialists is ready to help you
            identify, document, and claim the maximum credits available for your
            innovative activities.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Our R&D Tax Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
