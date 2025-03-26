import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calculator,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title:
    "How to Claim R&D Tax Credits for Manufacturing Process Improvements | Schapira CPA",
  description:
    "Learn how to identify, document, and claim R&D tax credits for your manufacturing process improvements. Includes real examples, documentation templates, and step-by-step guidance.",
};

export default function RDCreditsProcessImprovementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
            Claiming R&D Tax Credits for Manufacturing Process Improvements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive guide to identifying, documenting, and claiming
            valuable R&D tax credits for your manufacturing process
            improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              <Link href="/consultation">Schedule a Free Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#calculator">Calculate Your Potential Credits</Link>
            </Button>
          </div>
        </div>

        {/* Key Points Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <ClipboardCheck className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualifying Activities</h3>
              <p className="text-gray-600">
                Learn which process improvement activities qualify for R&D
                credits and how to document them properly.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Calculator className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Credit Calculation</h3>
              <p className="text-gray-600">
                Understand how to calculate potential credits and maximize your
                eligible expenses.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Implementation Steps</h3>
              <p className="text-gray-600">
                Follow our step-by-step guide to implementing a successful R&D
                credit program.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Understanding R&D Credits for Process Improvements</h2>
          <p>
            Manufacturing process improvements are often overlooked sources of
            R&D tax credits. The IRS considers many common process improvement
            activities as qualified research, including:
          </p>
          <ul>
            <li>Developing new manufacturing processes</li>
            <li>Improving existing process efficiency</li>
            <li>Reducing waste and optimizing yields</li>
            <li>Implementing automation solutions</li>
            <li>Creating new quality control methods</li>
          </ul>

          <h2>The Four-Part Test for Process Improvements</h2>
          <p>
            To qualify for R&D credits, your process improvement activities must
            meet all four parts of the IRS qualification test:
          </p>
          <ol>
            <li>
              <strong>Permitted Purpose:</strong> Activities must relate to new
              or improved functionality, performance, reliability, or quality.
            </li>
            <li>
              <strong>Technical Uncertainty:</strong> There must be uncertainty
              regarding the capability or method for developing or improving the
              process.
            </li>
            <li>
              <strong>Process of Experimentation:</strong> You must evaluate
              alternatives through modeling, simulation, systematic trial and
              error, or other methods.
            </li>
            <li>
              <strong>Technological in Nature:</strong> The process must rely on
              principles of engineering, physical sciences, computer science, or
              other technical disciplines.
            </li>
          </ol>

          <h2>Common Qualifying Activities in Manufacturing</h2>
          <p>
            Many day-to-day process improvement activities in manufacturing can
            qualify for R&D credits, including:
          </p>
          <ul>
            <li>Developing and testing new production methods</li>
            <li>Experimenting with process parameters to improve quality</li>
            <li>Creating custom tooling or fixtures</li>
            <li>Implementing new automation systems</li>
            <li>Developing improved quality control procedures</li>
          </ul>

          <div className="my-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold mb-4">Real-World Example</h3>
            <p>
              A precision machining company implemented new CNC programming
              techniques to reduce setup time and improve part consistency. The
              experimentation process involved:
            </p>
            <ul>
              <li>Testing different toolpath strategies</li>
              <li>Evaluating various cutting parameters</li>
              <li>Developing custom fixturing solutions</li>
              <li>Creating new quality verification methods</li>
            </ul>
            <p className="mt-4">
              This process improvement project qualified for over $125,000 in
              R&D tax credits.
            </p>
          </div>

          <h2>Documentation Requirements</h2>
          <p>
            Proper documentation is crucial for supporting R&D credit claims.
            Key documents should include:
          </p>
          <ul>
            <li>Project plans and technical specifications</li>
            <li>Test results and analysis</li>
            <li>Engineering change orders</li>
            <li>Time tracking records</li>
            <li>Expense documentation</li>
          </ul>

          <div className="my-8">
            <Link
              href="/consultation"
              className="block p-6 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">
                Get Your Free R&D Credit Assessment
              </h3>
              <p className="mb-4">
                Find out how much you could save with a complimentary review of
                your manufacturing process improvements.
              </p>
              <span className="text-yellow-600 font-semibold inline-flex items-center">
                Schedule Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
