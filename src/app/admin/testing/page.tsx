import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Smartphone,
  Monitor,
  Globe,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Functionality Testing Dashboard | Schapira CPA Admin",
  description:
    "Track and manage website functionality testing for the Schapira CPA website.",
};

export default function TestingDashboardPage() {
  // Mock data for testing dashboard
  const testingSummary = {
    total: 42,
    passed: 28,
    failed: 5,
    pending: 9,
    completion: 67, // percentage
    critical: {
      total: 12,
      passed: 10,
      failed: 2,
      pending: 0,
      completion: 83,
    },
  };

  const recentIssues = [
    {
      id: "issue-001",
      title: "Contact form submission error on mobile",
      severity: "high",
      status: "open",
      reporter: "Alex Johnson",
      date: "2023-06-02",
      category: "forms",
    },
    {
      id: "issue-002",
      title:
        "Valuation calculator shows incorrect results for high revenue inputs",
      severity: "medium",
      status: "in-progress",
      reporter: "Sarah Williams",
      date: "2023-06-03",
      category: "calculators",
    },
    {
      id: "issue-003",
      title: "Navigation dropdown not closing on mobile",
      severity: "low",
      status: "open",
      reporter: "Michael Chen",
      date: "2023-06-04",
      category: "navigation",
    },
  ];

  const testCategories = [
    {
      id: "navigation",
      name: "Navigation & Structure",
      total: 12,
      completed: 10,
    },
    { id: "forms", name: "Forms & Interactions", total: 15, completed: 8 },
    { id: "content", name: "Content & Media", total: 8, completed: 6 },
    {
      id: "performance",
      name: "Performance & Error Handling",
      total: 7,
      completed: 4,
    },
  ];

  const testEnvironments = [
    { id: "chrome", name: "Chrome", icon: Globe, total: 42, completed: 30 },
    { id: "firefox", name: "Firefox", icon: Globe, total: 42, completed: 25 },
    { id: "safari", name: "Safari", icon: Globe, total: 42, completed: 22 },
    { id: "edge", name: "Edge", icon: Globe, total: 42, completed: 20 },
    { id: "desktop", name: "Desktop", icon: Monitor, total: 42, completed: 28 },
    {
      id: "tablet",
      name: "Tablet",
      icon: Smartphone,
      total: 42,
      completed: 24,
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: Smartphone,
      total: 42,
      completed: 20,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Functionality Testing Dashboard
          </h1>
          <p className="text-gray-500">
            Track and manage website testing progress
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href="/admin/testing/new">New Test Report</Link>
          </Button>
          <Button asChild>
            <Link href="/admin/testing/issues">View All Issues</Link>
          </Button>
        </div>
      </div>

      {/* Testing Progress Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Overall Completion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">
                {testingSummary.completion}%
              </div>
              <Progress value={testingSummary.completion} className="w-1/2" />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Passed: {testingSummary.passed}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span>Failed: {testingSummary.failed}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                <span>Pending: {testingSummary.pending}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Critical Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">
                {testingSummary.critical.completion}%
              </div>
              <Progress
                value={testingSummary.critical.completion}
                className="w-1/2"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Passed: {testingSummary.critical.passed}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span>Failed: {testingSummary.critical.failed}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                <span>Pending: {testingSummary.critical.pending}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Open Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {recentIssues.filter((i) => i.status === "open").length}
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span>
                    High:{" "}
                    {
                      recentIssues.filter(
                        (i) => i.status === "open" && i.severity === "high",
                      ).length
                    }
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span>
                    Medium:{" "}
                    {
                      recentIssues.filter(
                        (i) => i.status === "open" && i.severity === "medium",
                      ).length
                    }
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span>
                  Low:{" "}
                  {
                    recentIssues.filter(
                      (i) => i.status === "open" && i.severity === "low",
                    ).length
                  }
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Testing Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">67%</div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                <span>Pre-Launch: Complete</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-yellow-500" />
                <span>Post-Launch: In Progress</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-300" />
                <span>Regression: Scheduled</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Issues */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentIssues.map((issue) => (
              <div
                key={issue.id}
                className="flex items-start p-4 border rounded-lg"
              >
                <div className="mr-4">
                  {issue.severity === "high" && (
                    <XCircle className="h-6 w-6 text-red-500" />
                  )}
                  {issue.severity === "medium" && (
                    <AlertCircle className="h-6 w-6 text-yellow-500" />
                  )}
                  {issue.severity === "low" && (
                    <AlertCircle className="h-6 w-6 text-blue-500" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{issue.title}</h3>
                    <Badge
                      variant={
                        issue.status === "open"
                          ? "destructive"
                          : issue.status === "in-progress"
                            ? "default"
                            : "outline"
                      }
                    >
                      {issue.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="mr-4">Reported by: {issue.reporter}</span>
                    <span className="mr-4">Date: {issue.date}</span>
                    <span>Category: {issue.category}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/admin/testing/issues/${issue.id}`}>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline" asChild>
              <Link href="/admin/testing/issues">View All Issues</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Testing Categories and Environments */}
      <Tabs defaultValue="categories" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="categories">Test Categories</TabsTrigger>
          <TabsTrigger value="environments">Test Environments</TabsTrigger>
          <TabsTrigger value="flows">User Flows</TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testCategories.map((category) => (
              <Card key={category.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">
                      {category.completed} of {category.total} tests completed
                    </div>
                    <div className="text-sm font-medium">
                      {Math.round((category.completed / category.total) * 100)}%
                    </div>
                  </div>
                  <Progress
                    value={(category.completed / category.total) * 100}
                  />
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/testing/categories/${category.id}`}>
                        View Tests
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="environments">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {testEnvironments.map((env) => (
              <Card key={env.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <env.icon className="h-5 w-5 mr-2 text-gray-500" />
                    <CardTitle className="text-lg">{env.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">
                      {env.completed} of {env.total} tests completed
                    </div>
                    <div className="text-sm font-medium">
                      {Math.round((env.completed / env.total) * 100)}%
                    </div>
                  </div>
                  <Progress value={(env.completed / env.total) * 100} />
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/testing/environments/${env.id}`}>
                        View Tests
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="flows">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>New Client Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Land on homepage</div>
                      <div className="text-sm text-gray-500">
                        User arrives at the website homepage
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">
                        Navigate to services overview
                      </div>
                      <div className="text-sm text-gray-500">
                        User browses available services
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">View specific service</div>
                      <div className="text-sm text-gray-500">
                        User views R&D Tax Credits service details
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Read related case study</div>
                      <div className="text-sm text-gray-500">
                        User reads success stories
                      </div>
                    </div>
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4">
                      5
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Book a consultation</div>
                      <div className="text-sm text-gray-500">
                        User completes consultation booking form
                      </div>
                    </div>
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-4">
                      6
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Receive confirmation</div>
                      <div className="text-sm text-gray-500">
                        User receives booking confirmation
                      </div>
                    </div>
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/admin/testing/flows/new-client">
                      View Flow Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existing Client Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Land on homepage</div>
                      <div className="text-sm text-gray-500">
                        User arrives at the website homepage
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">
                        Navigate to client portal
                      </div>
                      <div className="text-sm text-gray-500">
                        User clicks on client portal link
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Log in to portal</div>
                      <div className="text-sm text-gray-500">
                        User enters credentials and logs in
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Access documents</div>
                      <div className="text-sm text-gray-500">
                        User navigates to documents section
                      </div>
                    </div>
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/admin/testing/flows/existing-client">
                      View Flow Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Testing Documentation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Testing Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Comprehensive testing plan outlining all test categories,
              environments, and schedules.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/testing/plan">View Testing Plan</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Test Case Library
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Library of all test cases organized by category, with detailed
              steps and expected results.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/testing/cases">Browse Test Cases</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Testing Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Collection of all testing reports, including issue logs and
              resolution documentation.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/testing/reports">View Reports</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
