import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Our Approach | Schapira CPA - Manufacturing Financial Specialists",
  description:
    "Learn about our systematic approach to helping manufacturing businesses optimize their financial operations.",
};

export default function ApproachPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Approach</h1>

      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Understanding Your Business
            </h2>
            <p className="text-gray-600">
              We begin every client relationship with a comprehensive analysis
              of your manufacturing operations, financial structure, and
              business goals. This deep understanding allows us to provide
              targeted solutions that address your specific needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Strategic Planning</h2>
            <p className="text-gray-600">
              Based on our analysis, we develop a strategic financial plan that
              aligns with your business objectives. This includes tax
              optimization, cost accounting strategies, and growth financing
              recommendations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Implementation & Support
            </h2>
            <p className="text-gray-600">
              Our team works closely with you to implement recommended
              strategies and provides ongoing support to ensure your financial
              operations run smoothly and efficiently.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Ready to experience our systematic approach to manufacturing finance?
        </p>
        <a
          href="/consultation"
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md transition duration-300"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </div>
  );
}
