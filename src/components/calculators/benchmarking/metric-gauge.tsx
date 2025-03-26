"use client";
import { Card, CardContent } from "@/components/ui/card";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricGaugeProps {
  name: string;
  value: number;
  benchmark: number;
  unit: string;
  description: string;
  isHigherBetter: boolean;
  min?: number;
  max?: number;
}

export function MetricGauge({
  name,
  value,
  benchmark,
  unit,
  description,
  isHigherBetter,
  min = 0,
  max,
}: MetricGaugeProps) {
  // Calculate performance status
  const difference = value - benchmark;
  const percentDifference =
    benchmark !== 0 ? (difference / benchmark) * 100 : 0;

  let performanceStatus: "good" | "average" | "poor";
  let performanceColor: string;

  if (isHigherBetter) {
    if (percentDifference >= 10) {
      performanceStatus = "good";
      performanceColor = "text-green-600";
    } else if (percentDifference <= -10) {
      performanceStatus = "poor";
      performanceColor = "text-red-600";
    } else {
      performanceStatus = "average";
      performanceColor = "text-yellow-600";
    }
  } else {
    if (percentDifference <= -10) {
      performanceStatus = "good";
      performanceColor = "text-green-600";
    } else if (percentDifference >= 10) {
      performanceStatus = "poor";
      performanceColor = "text-red-600";
    } else {
      performanceStatus = "average";
      performanceColor = "text-yellow-600";
    }
  }

  // Calculate gauge parameters
  const gaugeMax = max || Math.max(value, benchmark) * 1.5;
  const valuePercent = ((value - min) / (gaugeMax - min)) * 100;
  const benchmarkPercent = ((benchmark - min) / (gaugeMax - min)) * 100;

  // Ensure percentages are within bounds
  const clampedValuePercent = Math.min(Math.max(valuePercent, 0), 100);
  const clampedBenchmarkPercent = Math.min(Math.max(benchmarkPercent, 0), 100);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-1">
            <h3 className="font-medium text-sm">{name}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoCircledIcon className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              performanceStatus === "good"
                ? "bg-green-100 text-green-800"
                : performanceStatus === "poor"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {performanceStatus === "good"
              ? "Above Average"
              : performanceStatus === "poor"
                ? "Below Average"
                : "Average"}
          </div>
        </div>

        <div className="flex justify-between items-center mb-1 text-sm">
          <div>
            <span className="font-medium">
              {value.toFixed(2)}
              {unit}
            </span>
            <span className="text-gray-500 text-xs ml-1">Your Value</span>
          </div>
          <div>
            <span className="font-medium">
              {benchmark.toFixed(2)}
              {unit}
            </span>
            <span className="text-gray-500 text-xs ml-1">Benchmark</span>
          </div>
        </div>

        {/* Gauge visualization */}
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
          {/* Benchmark marker */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-blue-600 z-10"
            style={{ left: `${clampedBenchmarkPercent}%` }}
          ></div>

          {/* Value bar */}
          <div
            className={`absolute top-0 bottom-0 left-0 ${
              performanceStatus === "good"
                ? "bg-green-500"
                : performanceStatus === "poor"
                  ? "bg-red-500"
                  : "bg-yellow-500"
            }`}
            style={{ width: `${clampedValuePercent}%` }}
          ></div>
        </div>

        {/* Difference */}
        <div className="text-xs flex justify-end">
          <span className={performanceColor}>
            {difference > 0 ? "+" : ""}
            {difference.toFixed(2)}
            {unit} ({percentDifference.toFixed(1)}%)
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
