import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Smartphone,
  Monitor,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Test Case Details | Schapira CPA Admin",
  description:
    "View and manage test case details for the Schapira CPA website.",
};

export default function TestCaseDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock data for test case details
  const testCase = {
    id: params.id,
    name: "Contact Form Submission",
    category: "Forms & Interactions",
    description:
      "Tests the functionality of the contact form submission process",
    priority: "high",
    status: "failed",
    steps: [
      "Navigate to contact page",
      "Fill out all required fields with valid data",
      "Click the submit button",
      "Verify success message appears",
      "Verify email notification is sent",
      "Verify data is stored in database",
    ],
    expectedResults:
      "Form submits successfully, displays confirmation message, sends email notification, and stores data in database",
    environments: [
      { id: "chrome", name: "Chrome", icon: Globe, status: "passed" },
      { id: "firefox", name: "Firefox", icon: Globe, status: "passed" },
      { id: "safari", name: "Safari", icon: Globe, status: "failed" },
      { id: "edge", name: "Edge", icon: Globe, status: "pending" },
      { id: "desktop", name: "Desktop", icon: Monitor, status: "passed" },
      { id: "tablet", name: "Tablet", icon: Smartphone, status: "passed" },
      { id: "mobile", name: "Mobile", icon: Smartphone, status: "failed" },
    ],
    issues: [
      {
        id: "issue-001",
        title: "Form submission fails on Safari browser",
        description:
          "When submitting the form using Safari, the submission process hangs and no confirmation message appears.",
        severity: "high",
        status: "open",
        steps:
          "1. Open Safari browser\n2. Navigate to contact page\n3. Fill out form\n4. Click submit button",
        reporter: "Alex Johnson",
        date: "2023-06-02",
      },
      {
        id: "issue-002",
        title: "Form submission fails on mobile devices",
        description:
          "On mobile devices, the form submission process completes but no confirmation message is displayed.",
        severity: "medium",
        status: "in-progress",
        steps:
          "1. Open website on mobile device\n2. Navigate to contact page\n3. Fill out form\n4. Click submit button",
        reporter: "Sarah Williams",
        date: "2023-06-03",
      },
    ],
    testReports: [
      {
        id: "report-001",
        tester: "Alex Johnson",
        date: "2023-06-02",
        environment: "Safari / Desktop",
        result: "failed",
        notes:
          "Form submission process hangs and no confirmation message appears.",
      },
      {
        id: "report-002",
        tester: "Sarah Williams",
        date: "2023-06-03",
        environment: "Chrome / Mobile",
        result: "failed",
        notes:
          "Form submission completes but no confirmation message is displayed.",
      },
      {
        id: "report-003",
        tester: "Michael Chen",
        date: "2023-06-04",
        environment: "Firefox / Desktop",
        result: "passed",
        notes: "Form submission works as expected.",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/admin/testing/cases">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Test Cases
          </Link>
        </Button>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{testCase.name}</h1>
            <div className="flex items-center mt-2">
              <Badge className="mr-2">{testCase.category}</Badge>
              <Badge variant="outline" className="mr-2">
                Priority: {testCase.priority}
              </Badge>
              <Badge
                variant={
                  testCase.status === "passed"
                    ? "success"
                    : testCase.status === "failed"
                      ? "destructive"
                      : "default"
                }
              >
                {testCase.status}
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Edit Test Case</Button>
            <Button>Run Test</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Test Case Description</h2>
              <p className="text-gray-600 mb-6">{testCase.description}</p>

              <h3 className="font-bold mb-2">Test Steps</h3>
              <ol className="list-decimal pl-5 mb-6 space-y-2">
                {testCase.steps.map((step, index) => (
                  <li key={index} className="text-gray-600">
                    {step}
                  </li>
                ))}
              </ol>

              <h3 className="font-bold mb-2">Expected Results</h3>
              <p className="text-gray-600">{testCase.expectedResults}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="issues">
            <TabsList className="mb-4">
              <TabsTrigger value="issues">
                Issues ({testCase.issues.length})
              </TabsTrigger>
              <TabsTrigger value="reports">
                Test Reports ({testCase.testReports.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="issues">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Issues</h2>
                    <Button size="sm" variant="outline">
                      Add Issue
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {testCase.issues.map((issue) => (
                      <div key={issue.id} className="border rounded-lg p-4">
                        <div className="flex items-start">
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
                            <p className="text-gray-600 mt-2">
                              {issue.description}
                            </p>
                            <div className="mt-4">
                              <h4 className="font-medium text-sm">
                                Steps to Reproduce:
                              </h4>
                              <pre className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                                {issue.steps}
                              </pre>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mt-4">
                              <span className="mr-4">
                                Reported by: {issue.reporter}
                              </span>
                              <span>Date: {issue.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Test Reports</h2>
                    <Button size="sm" variant="outline">
                      Add Report
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {testCase.testReports.map((report) => (
                      <div key={report.id} className="border rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="mr-4">
                            {report.result === "passed" && (
                              <CheckCircle className="h-6 w-6 text-green-500" />
                            )}
                            {report.result === "failed" && (
                              <XCircle className="h-6 w-6 text-red-500" />
                            )}
                            {report.result === "partial" && (
                              <AlertCircle className="h-6 w-6 text-yellow-500" />
                            )}
                            {report.result === "pending" && (
                              <Clock className="h-6 w-6 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">
                                {report.environment}
                              </h3>
                              <Badge
                                variant={
                                  report.result === "passed"
                                    ? "success"
                                    : report.result === "failed"
                                      ? "destructive"
                                      : report.result === "partial"
                                        ? "default"
                                        : "outline"
                                }
                              >
                                {report.result}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mt-2">{report.notes}</p>
                            <div className="flex items-center text-sm text-gray-500 mt-4">
                              <span className="mr-4">
                                Tested by: {report.tester}
                              </span>
                              <span>Date: {report.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Test Environments</h2>
              <div className="space-y-4">
                {testCase.environments.map((env) => (
                  <div
                    key={env.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <env.icon className="h-5 w-5 mr-2 text-gray-500" />
                      <span>{env.name}</span>
                    </div>
                    <div>
                      {env.status === "passed" && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {env.status === "failed" && (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      {env.status === "pending" && (
                        <Clock className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Test Actions</h2>
              <div className="space-y-3">
                <Button className="w-full">Run Test</Button>
                <Button variant="outline" className="w-full">
                  Mark as Passed
                </Button>
                <Button variant="outline" className="w-full">
                  Mark as Failed
                </Button>
                <Button variant="outline" className="w-full">
                  Add Issue
                </Button>
                <Button variant="outline" className="w-full">
                  Add Test Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
