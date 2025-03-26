"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, ArrowRight, TrendingUp, FileText } from "lucide-react";

export function ManufacturingKPIDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Manufacturing KPI Dashboard</h2>
          <p className="text-xl text-gray-600 mt-4">
            Track and analyze your manufacturing performance metrics
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gray-100 border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-2xl">
                  Manufacturing Performance Metrics
                </CardTitle>
                <CardDescription className="mt-2">
                  Monitor key performance indicators for your manufacturing
                  operation
                </CardDescription>
              </div>
              <div className="mt-4 md:mt-0">
                <Link href="/resources/kpi-dashboard">
                  <Button>
                    Access Full Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs
              defaultValue="overview"
              className="space-y-6"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="oee">OEE</TabsTrigger>
                <TabsTrigger value="quality">Quality</TabsTrigger>
                <TabsTrigger value="cost">Cost Analysis</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Overall Equipment Effectiveness
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">
                        78.5%
                      </div>
                      <p className="text-sm text-gray-500">
                        +8.1% from last month
                      </p>
                      <div className="mt-4 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-blue-600 rounded-full"
                          style={{ width: "78.5%" }}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-500">
                        <span>Target: 85%</span>
                        <span>78.5%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        First Pass Yield
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600">
                        93.0%
                      </div>
                      <p className="text-sm text-gray-500">
                        +1.0% from last month
                      </p>
                      <div className="mt-4 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-green-600 rounded-full"
                          style={{ width: "93%" }}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-500">
                        <span>Target: 95%</span>
                        <span>93.0%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Cost Per Unit</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-amber-600">
                        $13.20
                      </div>
                      <p className="text-sm text-gray-500">
                        -2.2% from last month
                      </p>
                      <div className="mt-4 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-amber-600 rounded-full"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-500">
                        <span>Target: $12.50</span>
                        <span>$13.20</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>OEE Components</CardTitle>
                      <CardDescription>
                        Availability, Performance, and Quality factors
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <BarChart2 className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                        <p>Interactive chart available in full dashboard</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Manufacturing KPI Summary</CardTitle>
                      <CardDescription>
                        Key performance indicators for the current period
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="text-sm font-medium">OEE</div>
                          <div className="text-xl font-bold">78.5%</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Target: 85%
                          </div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="text-sm font-medium">
                            First Pass Yield
                          </div>
                          <div className="text-xl font-bold">93.0%</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Target: 95%
                          </div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="text-sm font-medium">Throughput</div>
                          <div className="text-xl font-bold">1,250</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Units/day
                          </div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="text-sm font-medium">
                            Cost per Unit
                          </div>
                          <div className="text-xl font-bold">$13.20</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Target: $12.50
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="oee" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Overall Equipment Effectiveness (OEE)</CardTitle>
                    <CardDescription>
                      Detailed breakdown of Availability, Performance, and
                      Quality factors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <TrendingUp className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                      <p>
                        Interactive OEE analysis available in full dashboard
                      </p>
                      <Link
                        href="/resources/kpi-dashboard"
                        className="mt-4 inline-block"
                      >
                        <Button variant="outline" size="sm">
                          View Full OEE Analysis
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quality" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quality Metrics</CardTitle>
                    <CardDescription>
                      First Pass Yield, Defect Rate, and Scrap Analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FileText className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                      <p>
                        Detailed quality metrics available in full dashboard
                      </p>
                      <Link
                        href="/resources/kpi-dashboard"
                        className="mt-4 inline-block"
                      >
                        <Button variant="outline" size="sm">
                          View Quality Analysis
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cost" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cost Analysis</CardTitle>
                    <CardDescription>
                      Cost per Unit, Labor Efficiency, and Material Usage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart2 className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                      <p>Detailed cost analysis available in full dashboard</p>
                      <Link
                        href="/resources/kpi-dashboard"
                        className="mt-4 inline-block"
                      >
                        <Button variant="outline" size="sm">
                          View Cost Analysis
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Access our full Manufacturing KPI Dashboard for detailed
                metrics, interactive charts, and customizable reports
              </p>
              <Link href="/resources/kpi-dashboard">
                <Button size="lg" className="px-8">
                  Access Full Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
