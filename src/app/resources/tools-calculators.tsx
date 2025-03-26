import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";

export function ToolsCalculators() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Financial Tools & Calculators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ToolCard
            title="Manufacturing ROI Calculator"
            description="Calculate the return on investment for manufacturing equipment purchases and process improvements."
          />
          <ToolCard
            title="Financing Payment Estimator"
            description="Estimate monthly payments and total costs for various financing options and terms."
          />
          <ToolCard
            title="Tax Savings Estimator"
            description="Estimate potential tax savings through various strategies and deductions."
          />
          <ToolCard
            title="Cash Flow Forecasting Tool"
            description="Project future cash flows based on historical data and anticipated changes."
          />
        </div>
      </div>
    </section>
  );
}

function ToolCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Calculator className="h-6 w-6 text-blue-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          Access Calculator
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
