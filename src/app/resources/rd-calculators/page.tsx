import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RDQualificationAssessment } from "@/components/forms/rd-qualification-assessment";

export const metadata = {
  title: "R&D Tax Credit Calculators | Schapira CPA",
  description:
    "Estimate potential R&D tax credits for your manufacturing process improvements and innovation activities.",
};

export default function RDCalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">
        R&D Tax Credit Calculators
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Estimate potential R&D tax credits for your manufacturing process
        improvements and innovation activities.
      </p>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-black">
          What Qualifies as R&D in Manufacturing?
        </h2>
        <p className="text-gray-600 mb-4">
          Many manufacturing activities qualify for R&D tax credits, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
          <li>Developing new or improved manufacturing processes</li>
          <li>Creating prototypes or models</li>
          <li>Testing new materials</li>
          <li>Developing or improving production equipment</li>
          <li>Implementing automation solutions</li>
          <li>Designing and developing new products</li>
          <li>Environmental testing and quality assurance activities</li>
        </ul>
        <p className="text-gray-600">
          Our calculators help you estimate potential credits based on your
          specific manufacturing activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-black">
              Quick R&D Credit Estimator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Discover how much your manufacturing company could save with R&D
              tax credits. Our specialized calculator helps you:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>
                Estimate potential tax savings based on your R&D activities
              </li>
              <li>Identify qualifying research and development expenses</li>
              <li>
                Understand how the credit applies to your manufacturing
                processes
              </li>
              <li>
                Project multi-year savings from your innovation investments
              </li>
            </ul>
            <p className="mb-4">
              Manufacturing companies often overlook substantial R&D credits for
              process improvements and product development activities.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-brand-gold hover:bg-brand-dark text-white"
              size="lg"
              asChild
            >
              <Link href="/calculators/rd-credit-calculator">
                Calculate Your R&D Tax Credits Now
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-black">
              Detailed R&D Qualification Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Answer a series of questions about your manufacturing activities
              to determine which may qualify for R&D tax credits.
            </p>
            <RDQualificationAssessment />
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Need a Precise R&D Tax Credit Calculation?
        </h2>
        <p className="text-gray-600 mb-6">
          While our calculators provide useful estimates, every manufacturing
          business is unique. Our team of R&D tax specialists can conduct a
          thorough analysis of your specific activities to identify all
          qualifying expenses and maximize your credit.
        </p>
        <div className="text-center">
          <Button
            className="bg-brand-gold hover:bg-brand-dark text-white"
            size="lg"
            asChild
          >
            <Link href="/consultation">
              Schedule a Free R&D Tax Credit Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
