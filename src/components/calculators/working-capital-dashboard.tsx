"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, TrendingDown, TrendingUp } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface WorkingCapitalData {
  cashConversionCycle: number;
  industryAvgCCC: number;
  dso: number; // Days Sales Outstanding
  dpo: number; // Days Payable Outstanding
  dio: number; // Days Inventory Outstanding
  workingCapitalNeeds: number;
  cashTied: {
    inventory: number;
    receivables: number;
    payables: number;
  };
  monthlyTrend: {
    month: number;
    ccc: number;
    workingCapital: number;
  }[];
  recommendations: string[];
  improvementOpportunities: {
    strategy: string;
    impact: number;
    difficulty: "Low" | "Medium" | "High";
    description: string;
  }[];
}

interface WorkingCapitalDashboardProps {
  data: WorkingCapitalData;
}

export function WorkingCapitalDashboard({
  data,
}: WorkingCapitalDashboardProps) {
  const cccData = {
    labels: ["Your Business", "Industry Average"],
    datasets: [
      {
        label: "Cash Conversion Cycle (Days)",
        data: [data.cashConversionCycle, data.industryAvgCCC],
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)",
          "rgba(156, 163, 175, 0.6)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const cashTiedData = {
    labels: ["Inventory", "Receivables", "Payables (Offset)"],
    datasets: [
      {
        label: "Cash Tied Up ($)",
        data: [
          data.cashTied.inventory,
          data.cashTied.receivables,
          -data.cashTied.payables,
        ],
        backgroundColor: [
          "rgba(245, 158, 11, 0.6)",
          "rgba(239, 68, 68, 0.6)",
          "rgba(34, 197, 94, 0.6)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const trendData = {
    labels: data.monthlyTrend.map((item) => `Month ${item.month}`),
    datasets: [
      {
        type: "line" as const,
        label: "Cash Conversion Cycle (Days)",
        data: data.monthlyTrend.map((item) => item.ccc),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        yAxisID: "y",
      },
      {
        type: "bar" as const,
        label: "Working Capital Needs ($)",
        data: data.monthlyTrend.map((item) => item.workingCapital),
        backgroundColor: "rgba(99, 102, 241, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const cashTiedOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              let value = context.parsed.y;
              // If payables (negative value), show as positive in tooltip
              if (context.dataIndex === 2) {
                value = Math.abs(value);
                label = "Payables (Reducing Cash Need): ";
              }
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(value);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) =>
            "$" + new Intl.NumberFormat("en-US").format(value as number),
        },
      },
    },
  };

  const trendOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              if (context.datasetIndex === 0) {
                label += context.parsed.y.toFixed(1) + " days";
              } else {
                label += new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(context.parsed.y);
              }
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Days",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Working Capital ($)",
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: (value) =>
            "$" +
            new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value as number),
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Working Capital Analysis</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <HelpCircle className="mr-2 h-4 w-4" />
              Understanding Working Capital
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">Working Capital Basics</h4>
              <p className="text-sm text-muted-foreground">
                Working capital is the difference between current assets (cash,
                inventory, receivables) and current liabilities (payables).
              </p>
              <h4 className="font-medium">Cash Conversion Cycle</h4>
              <p className="text-sm text-muted-foreground">
                CCC measures how long cash is tied up in your operations. It's
                calculated as: Days Inventory + Days Receivables - Days Payables
                = CCC
              </p>
              <h4 className="font-medium">Why It Matters</h4>
              <p className="text-sm text-muted-foreground">
                A shorter CCC means better cash flow and less financing needed
                for operations.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Cash Conversion Cycle</CardTitle>
            <CardDescription>
              Days cash is tied up in operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              {data.cashConversionCycle} days
            </div>
            <div className="text-sm text-muted-foreground mt-1 flex items-center">
              {data.cashConversionCycle > data.industryAvgCCC ? (
                <>
                  <TrendingUp className="h-4 w-4 mr-1 text-red-500" />
                  <span>
                    {data.cashConversionCycle - data.industryAvgCCC} days longer
                    than industry average
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown className="h-4 w-4 mr-1 text-green-500" />
                  <span>
                    {data.industryAvgCCC - data.cashConversionCycle} days
                    shorter than industry average
                  </span>
                </>
              )}
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="w-full">
              <div className="flex justify-between text-sm mb-1">
                <span>Your CCC</span>
                <span>Industry Avg: {data.industryAvgCCC} days</span>
              </div>
              <Progress
                value={(data.industryAvgCCC / data.cashConversionCycle) * 100}
                className="h-2"
              />
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              Working Capital Requirements
            </CardTitle>
            <CardDescription>Cash needed for operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">
              ${data.workingCapitalNeeds.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Based on your current cash conversion cycle
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="grid grid-cols-3 w-full text-center text-sm">
              <div>
                <div className="font-medium">{data.dio} days</div>
                <div className="text-muted-foreground">Inventory</div>
              </div>
              <div>
                <div className="font-medium">{data.dso} days</div>
                <div className="text-muted-foreground">Receivables</div>
              </div>
              <div>
                <div className="font-medium">{data.dpo} days</div>
                <div className="text-muted-foreground">Payables</div>
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Improvement Potential</CardTitle>
            <CardDescription>
              Possible working capital reduction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">
              ${Math.round(data.workingCapitalNeeds * 0.15).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Estimated savings from implementing recommendations
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full" asChild>
              <a href="/contact">Get Custom Analysis</a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="ccc">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="ccc">Cash Conversion Cycle</TabsTrigger>
          <TabsTrigger value="cash-tied">Cash Tied Up</TabsTrigger>
          <TabsTrigger value="trends">Trends & Forecasts</TabsTrigger>
        </TabsList>

        <TabsContent value="ccc">
          <Card>
            <CardHeader>
              <CardTitle>Cash Conversion Cycle Comparison</CardTitle>
              <CardDescription>
                Your cash conversion cycle compared to industry average
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Bar data={cccData} options={barOptions} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cash-tied">
          <Card>
            <CardHeader>
              <CardTitle>Cash Tied Up in Working Capital</CardTitle>
              <CardDescription>
                Breakdown of cash tied up in each component of working capital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Bar data={cashTiedData} options={cashTiedOptions} />
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <div className="text-amber-600 font-semibold">Inventory</div>
                  <div className="text-xl font-bold">
                    ${data.cashTied.inventory.toLocaleString()}
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-red-600 font-semibold">Receivables</div>
                  <div className="text-xl font-bold">
                    ${data.cashTied.receivables.toLocaleString()}
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold">
                    Payables (Offset)
                  </div>
                  <div className="text-xl font-bold">
                    ${data.cashTied.payables.toLocaleString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Working Capital Trends</CardTitle>
              <CardDescription>
                Projected cash conversion cycle and working capital requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Bar data={trendData} options={trendOptions} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Optimization Recommendations</CardTitle>
            <CardDescription>
              Strategies to improve your working capital management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {data.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <span className="h-3 w-3 rounded-full bg-blue-600"></span>
                  </div>
                  <p>{rec}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Improvement Opportunities</CardTitle>
            <CardDescription>
              Potential actions and their estimated impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.improvementOpportunities.map((opportunity, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{opportunity.strategy}</h4>
                    <div
                      className={`px-2 py-1 text-xs rounded-full ${
                        opportunity.difficulty === "Low"
                          ? "bg-green-100 text-green-800"
                          : opportunity.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {opportunity.difficulty} Difficulty
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {opportunity.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">Impact:</span>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${opportunity.impact}%` }}
                      ></div>
                    </div>
                    <span className="text-sm ml-2">{opportunity.impact}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
