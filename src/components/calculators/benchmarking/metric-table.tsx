"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Metric {
  name: string;
  value: number;
  benchmark: number;
  unit: string;
  description: string;
  isHigherBetter: boolean;
}

interface MetricTableProps {
  metrics: Metric[];
}

export function MetricTable({ metrics }: MetricTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Metric</TableHead>
          <TableHead className="text-right">Your Value</TableHead>
          <TableHead className="text-right">Industry Benchmark</TableHead>
          <TableHead className="text-right">Difference</TableHead>
          <TableHead className="text-right">Performance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {metrics.map((metric) => {
          const difference = metric.value - metric.benchmark;
          const percentDifference =
            metric.benchmark !== 0 ? (difference / metric.benchmark) * 100 : 0;

          let performanceStatus: "good" | "average" | "poor";
          let performanceColor: string;

          if (metric.isHigherBetter) {
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

          return (
            <TableRow key={metric.name}>
              <TableCell>
                <div className="flex items-center gap-1">
                  <span>{metric.name}</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <InfoCircledIcon className="h-4 w-4 text-gray-400 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{metric.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">
                {metric.value.toFixed(2)}
                {metric.unit}
              </TableCell>
              <TableCell className="text-right">
                {metric.benchmark.toFixed(2)}
                {metric.unit}
              </TableCell>
              <TableCell className={`text-right ${performanceColor}`}>
                {difference > 0 ? "+" : ""}
                {difference.toFixed(2)}
                {metric.unit} ({percentDifference.toFixed(1)}%)
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
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
                </span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
