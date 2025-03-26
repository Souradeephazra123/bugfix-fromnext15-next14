"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, PieChart, BarChart } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

interface SavingsResultsProps {
  results: {
    totalSavings: number;
    breakdown: {
      rndCredit: number;
      section179: number;
      bonusDepreciation: number;
      costSegregation: number;
      energyEfficiency: number;
      wotc: number;
      stateIncentives: number;
    };
    taxRate: number;
    effectiveTaxRate: number;
  };
}

export function SavingsResults({ results }: SavingsResultsProps) {
  const [view, setView] = useState<"summary" | "chart">("summary");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const barChartData = {
    labels: [
      "R&D Credit",
      "Section 179",
      "Bonus Depreciation",
      "Cost Segregation",
      "Energy Efficiency",
      "WOTC",
      "State Incentives",
    ],
    datasets: [
      {
        label: "Tax Savings",
        data: [
          results.breakdown.rndCredit,
          results.breakdown.section179,
          results.breakdown.bonusDepreciation,
          results.breakdown.costSegregation,
          results.breakdown.energyEfficiency,
          results.breakdown.wotc,
          results.breakdown.stateIncentives,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(199, 199, 199, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: [
      "R&D Credit",
      "Section 179",
      "Bonus Depreciation",
      "Cost Segregation",
      "Energy Efficiency",
      "WOTC",
      "State Incentives",
    ],
    datasets: [
      {
        data: [
          results.breakdown.rndCredit,
          results.breakdown.section179,
          results.breakdown.bonusDepreciation,
          results.breakdown.costSegregation,
          results.breakdown.energyEfficiency,
          results.breakdown.wotc,
          results.breakdown.stateIncentives,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(199, 199, 199, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <h3 className="text-lg font-medium text-blue-800 mb-2">
          Total Estimated Tax Savings
        </h3>
        <p className="text-4xl font-bold text-blue-900">
          {formatCurrency(results.totalSavings)}
        </p>
        <p className="text-sm text-blue-700 mt-2">
          Effective Tax Rate Reduction: {results.taxRate}% →{" "}
          {results.effectiveTaxRate}%
        </p>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="summary">
            <DollarSign className="h-4 w-4 mr-2" />
            Summary
          </TabsTrigger>
          <TabsTrigger value="chart">
            <PieChart className="h-4 w-4 mr-2" />
            Charts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Savings Breakdown</CardTitle>
              <CardDescription>
                Detailed breakdown of your potential tax savings by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="text-sm font-medium text-blue-800">
                      R&D Tax Credit
                    </h4>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.breakdown.rndCredit)}
                    </p>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-md">
                    <h4 className="text-sm font-medium text-teal-800">
                      Section 179 Deduction
                    </h4>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.breakdown.section179)}
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <h4 className="text-sm font-medium text-purple-800">
                      Bonus Depreciation
                    </h4>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.breakdown.bonusDepreciation)}
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-md">
                    <h4 className="text-sm font-medium text-orange-800">
                      Cost Segregation
                    </h4>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.breakdown.costSegregation)}
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-md">
                    <h4 className="text-sm font-medium text-red-800">
                      Energy Efficiency
                    </h4>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.breakdown.energyEfficiency)}
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-md">
                    <h4 className="text-sm font-medium text-yellow-800">
                      WOTC
                    </h4>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.breakdown.wotc)}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md col-span-2">
                    <h4 className="text-sm font-medium text-gray-800">
                      State-Specific Incentives
                    </h4>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.breakdown.stateIncentives)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chart" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Visual Breakdown</CardTitle>
              <CardDescription>
                Visual representation of your potential tax savings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pie">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="pie">
                    <PieChart className="h-4 w-4 mr-2" />
                    Pie Chart
                  </TabsTrigger>
                  <TabsTrigger value="bar">
                    <BarChart className="h-4 w-4 mr-2" />
                    Bar Chart
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="pie" className="h-80">
                  <Pie
                    data={pieChartData}
                    options={{ maintainAspectRatio: false }}
                  />
                </TabsContent>

                <TabsContent value="bar" className="h-80">
                  <Bar
                    data={barChartData}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                        },
                      },
                    }}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
