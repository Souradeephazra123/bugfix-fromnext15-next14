"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CompanyInfoForm } from "./company-info-form";
import { IndustrySelector } from "./industry-selector";
import { MetricsComparison } from "./metrics-comparison";
import { GapAnalysis } from "./gap-analysis";
import { TrendAnalysis } from "./trend-analysis";
import { BenchmarkReport } from "./benchmark-report";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  FileText,
  Save,
  RefreshCw,
} from "lucide-react";
import type {
  CompanyData,
  BenchmarkData,
  IndustryData,
} from "@/lib/benchmarking/types";
import { fetchBenchmarkData } from "@/lib/benchmarking/data-service";

export function BenchmarkingDashboard() {
  const [activeTab, setActiveTab] = useState("company-info");
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [industryData, setIndustryData] = useState<IndustryData | null>(null);
  const [benchmarkData, setBenchmarkData] = useState<BenchmarkData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [savedReports, setSavedReports] = useState<string[]>([]);
  const { toast } = useToast();

  // Load saved company data if available
  useEffect(() => {
    const savedData = localStorage.getItem("benchmarking_company_data");
    if (savedData) {
      try {
        setCompanyData(JSON.parse(savedData));
      } catch (e) {
        console.error("Error loading saved company data", e);
      }
    }

    const savedReportsList = localStorage.getItem("benchmarking_saved_reports");
    if (savedReportsList) {
      try {
        setSavedReports(JSON.parse(savedReportsList));
      } catch (e) {
        console.error("Error loading saved reports list", e);
      }
    }
  }, []);

  const handleCompanyDataSubmit = async (data: CompanyData) => {
    setCompanyData(data);
    localStorage.setItem("benchmarking_company_data", JSON.stringify(data));

    // Move to industry selection tab
    setActiveTab("industry-selection");

    toast({
      title: "Company information saved",
      description:
        "Your financial data has been saved. Now select your industry for benchmarking.",
      variant: "success",
    });
  };

  const handleIndustrySelect = async (industry: IndustryData) => {
    setIsLoading(true);
    setIndustryData(industry);

    try {
      // Fetch benchmark data based on selected industry
      const data = await fetchBenchmarkData(industry.id);
      setBenchmarkData(data);

      // Move to metrics comparison tab
      setActiveTab("metrics-comparison");

      toast({
        title: "Benchmark data loaded",
        description: `Comparing your data against ${industry.name} industry standards.`,
        variant:"success"
      });
    } catch (error) {
      toast({
        title: "Error loading benchmark data",
        description:
          "There was a problem loading the industry benchmark data. Please try again.",
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveReport = () => {
    if (!companyData || !industryData || !benchmarkData) return;

    const reportId = `report_${Date.now()}`;
    const reportData = {
      id: reportId,
      date: new Date().toISOString(),
      companyData,
      industryData,
      benchmarkData,
    };

    // Save report to localStorage
    localStorage.setItem(
      `benchmarking_${reportId}`,
      JSON.stringify(reportData)
    );

    // Update saved reports list
    const updatedReports = [...savedReports, reportId];
    setSavedReports(updatedReports);
    localStorage.setItem(
      "benchmarking_saved_reports",
      JSON.stringify(updatedReports)
    );

    toast({
      title: "Report saved",
      description: "Your benchmark report has been saved for future reference.",
      variant: "success",
    });
  };

  const handleRefreshData = async () => {
    if (!industryData) return;

    setIsLoading(true);

    try {
      // Refresh benchmark data
      const data = await fetchBenchmarkData(industryData.id, true);
      setBenchmarkData(data);

      toast({
        title: "Data refreshed",
        description:
          "Benchmark data has been updated with the latest industry standards.",
          variant: "success"
      });
    } catch (error) {
      toast({
        title: "Error refreshing data",
        description:
          "There was a problem refreshing the benchmark data. Please try again.",
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Financial Benchmarking Dashboard</CardTitle>
          <CardDescription>
            Compare your manufacturing business performance against industry
            standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div>
              {companyData && (
                <div className="text-sm">
                  <span className="font-medium">Company:</span>{" "}
                  {companyData.companyName} |
                  <span className="font-medium ml-2">Revenue:</span> $
                  {companyData.annualRevenue.toLocaleString()} |
                  <span className="font-medium ml-2">Year:</span>{" "}
                  {companyData.fiscalYear}
                </div>
              )}
              {industryData && (
                <div className="text-sm mt-1">
                  <span className="font-medium">Benchmarking against:</span>{" "}
                  {industryData.name} |
                  <span className="font-medium ml-2">Peer group:</span>{" "}
                  {industryData.subCategory || "All"}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {benchmarkData && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSaveReport}
                    className="flex items-center gap-1"
                  >
                    <Save className="h-4 w-4" />
                    Save Report
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRefreshData}
                    disabled={isLoading}
                    className="flex items-center gap-1"
                  >
                    <RefreshCw
                      className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                    />
                    Refresh Data
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
          <TabsTrigger value="company-info" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Company Info</span>
          </TabsTrigger>
          <TabsTrigger
            value="industry-selection"
            disabled={!companyData}
            className="flex items-center gap-1"
          >
            <PieChart className="h-4 w-4" />
            <span className="hidden md:inline">Industry Selection</span>
          </TabsTrigger>
          <TabsTrigger
            value="metrics-comparison"
            disabled={!benchmarkData}
            className="flex items-center gap-1"
          >
            <BarChart3 className="h-4 w-4" />
            <span className="hidden md:inline">Metrics Comparison</span>
          </TabsTrigger>
          <TabsTrigger
            value="gap-analysis"
            disabled={!benchmarkData}
            className="flex items-center gap-1"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="hidden md:inline">Gap Analysis</span>
          </TabsTrigger>
          <TabsTrigger
            value="trend-analysis"
            disabled={!benchmarkData}
            className="flex items-center gap-1"
          >
            <LineChart className="h-4 w-4" />
            <span className="hidden md:inline">Trend Analysis</span>
          </TabsTrigger>
          <TabsTrigger
            value="report"
            disabled={!benchmarkData}
            className="flex items-center gap-1"
          >
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Report</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="company-info" className="space-y-4">
          <CompanyInfoForm
            initialData={companyData}
            onSubmit={handleCompanyDataSubmit}
          />
        </TabsContent>

        <TabsContent value="industry-selection" className="space-y-4">
          <IndustrySelector
            onSelectIndustry={handleIndustrySelect}
            isLoading={isLoading}
            selectedIndustry={industryData}
          />
        </TabsContent>

        <TabsContent value="metrics-comparison" className="space-y-4">
          {benchmarkData && companyData && (
            <MetricsComparison
              companyData={companyData}
              benchmarkData={benchmarkData}
            />
          )}
        </TabsContent>

        <TabsContent value="gap-analysis" className="space-y-4">
          {benchmarkData && companyData && (
            <GapAnalysis
              companyData={companyData}
              benchmarkData={benchmarkData}
            />
          )}
        </TabsContent>

        <TabsContent value="trend-analysis" className="space-y-4">
          {benchmarkData && companyData && (
            <TrendAnalysis
              companyData={companyData}
              benchmarkData={benchmarkData}
            />
          )}
        </TabsContent>

        <TabsContent value="report" className="space-y-4">
          {benchmarkData && companyData && industryData && (
            <BenchmarkReport
              companyData={companyData}
              benchmarkData={benchmarkData}
              industryData={industryData}
              savedReports={savedReports}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
