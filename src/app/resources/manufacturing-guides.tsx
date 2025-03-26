import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export function ManufacturingGuides() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Manufacturing Financial Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GuideCard
            title="The ProFit™ Method for Manufacturers"
            description="Our comprehensive guide to optimizing manufacturing finances through our proprietary three-pillar approach."
          />
          <GuideCard
            title="Manufacturing Efficiency Analysis"
            description="Learn how to identify and eliminate inefficiencies in your manufacturing operation to increase profitability."
          />
          <GuideCard
            title="Manufacturing Growth Financing"
            description="Discover strategies for securing optimal financing for manufacturing equipment, expansion, and working capital needs."
          />
          <GuideCard
            title="Competing with Overseas Manufacturers"
            description="Practical strategies for domestic manufacturers to compete effectively against lower-cost overseas competitors."
          />
        </div>
      </div>
    </section>
  );
}

function GuideCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
          <FileText className="h-6 w-6 text-amber-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full flex items-center justify-center gap-2">
          <Download className="h-4 w-4" />
          Download Guide
        </Button>
      </CardFooter>
    </Card>
  );
}
