import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "Client Portfolio | Schapira CPA - Manufacturing Financial Specialists",
  description:
    "Explore our client success stories and case studies from various manufacturing sectors.",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Client Success Stories
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        See how our specialized financial strategies have helped manufacturing
        businesses across various sectors reduce taxes, improve cash flow, and
        fund growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Precision Metal Products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="text-yellow-600 font-bold mb-2">
                Metal Fabrication
              </div>
              <h3 className="text-xl font-bold mb-3">
                Precision Metal Products
              </h3>
              <p className="text-gray-600 mb-4">
                $175K in tax savings and 22% reduction in working capital
                requirements through our specialized manufacturing financial
                strategies.
              </p>
              <Link
                href="/portfolio/precision-metal-products"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                View Case Study
                <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Advanced Composites Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="text-yellow-600 font-bold mb-2">
                Plastics & Composites
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Composites</h3>
              <p className="text-gray-600 mb-4">
                Secured $1.2M in equipment financing and implemented R&D tax
                credit strategies that saved $135K annually.
              </p>
              <Link
                href="/portfolio/advanced-composites"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                View Case Study
                <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Harvest Foods Processing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="text-yellow-600 font-bold mb-2">
                Food Processing
              </div>
              <h3 className="text-xl font-bold mb-3">Harvest Foods</h3>
              <p className="text-gray-600 mb-4">
                Developed a comprehensive financial strategy that helped manage
                seasonal cash flow challenges and secured $2.5M for facility
                expansion.
              </p>
              <Link
                href="/portfolio/harvest-foods"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                View Case Study
                <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
