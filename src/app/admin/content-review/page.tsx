import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Review Dashboard | Schapira CPA",
  description:
    "Internal content review dashboard for the Schapira CPA website.",
};

export default function ContentReviewPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Content Review Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Content Review Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">0%</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-600 h-2.5 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                0 of 15 pages reviewed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Issues Found</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="flex gap-2 mt-2">
                <Badge
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200"
                >
                  0 Critical
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-700 border-yellow-200"
                >
                  0 Moderate
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  0 Minor
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Review Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Brand Consistency</span>
                  <Badge variant="outline" className="bg-gray-100">
                    Not Started
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Messaging Accuracy</span>
                  <Badge variant="outline" className="bg-gray-100">
                    Not Started
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">SEO Elements</span>
                  <Badge variant="outline" className="bg-gray-100">
                    Not Started
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Conversion Elements</span>
                  <Badge variant="outline" className="bg-gray-100">
                    Not Started
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Content Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Review Status</TableHead>
                  <TableHead>Issues</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    page: "Homepage",
                    url: "/",
                    lastUpdated: "2023-03-14",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "About Us",
                    url: "/about",
                    lastUpdated: "2023-03-10",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Manufacturing Solutions",
                    url: "/manufacturing-solutions",
                    lastUpdated: "2023-03-12",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "ProFit Method",
                    url: "/profit-method",
                    lastUpdated: "2023-03-08",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Success Stories",
                    url: "/success-stories",
                    lastUpdated: "2023-03-09",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Services Overview",
                    url: "/services",
                    lastUpdated: "2023-03-11",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Manufacturing Tax Services",
                    url: "/services/manufacturing-tax",
                    lastUpdated: "2023-03-07",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "R&D Tax Credits",
                    url: "/services/rd-tax-credits",
                    lastUpdated: "2023-03-06",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Cost Accounting",
                    url: "/services/cost-accounting",
                    lastUpdated: "2023-03-05",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Growth Financing",
                    url: "/services/growth-financing",
                    lastUpdated: "2023-03-14",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Financial Analysis",
                    url: "/services/financial-analysis",
                    lastUpdated: "2023-03-04",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "M&A Advisory",
                    url: "/services/ma-advisory",
                    lastUpdated: "2023-03-03",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Resources",
                    url: "/resources",
                    lastUpdated: "2023-03-13",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Contact",
                    url: "/contact",
                    lastUpdated: "2023-03-14",
                    status: "Needs Review",
                    issues: 0,
                  },
                  {
                    page: "Client Portal",
                    url: "/client-portal",
                    lastUpdated: "2023-03-02",
                    status: "Needs Review",
                    issues: 0,
                  },
                ].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.page}</TableCell>
                    <TableCell>{item.url}</TableCell>
                    <TableCell>{item.lastUpdated}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-gray-100">
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.issues}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-2"
                        >
                          <FileText className="h-4 w-4 mr-1" />
                          Review
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-2"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Content Review Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Brand Consistency</h3>
                  <ul className="space-y-2">
                    {[
                      "Company name consistently appears as 'Schapira CPA'",
                      "Brand voice maintains professional yet approachable tone",
                      "Value proposition for manufacturers is clearly communicated",
                      "ProFit™ Method is consistently described",
                      "Color scheme and visual elements follow brand guidelines",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Messaging Accuracy</h3>
                  <ul className="space-y-2">
                    {[
                      "Service descriptions accurately reflect current offerings",
                      "Team member credentials and specializations are up-to-date",
                      "Case studies contain accurate metrics and outcomes",
                      "Industry statistics and financial data are current",
                      "Tax regulations and financial advice reflect current laws",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Style Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Brand Voice</h3>
                  <p className="text-sm text-gray-600">
                    Professional, authoritative, yet approachable. Focus on
                    clarity and value.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Preferred Terminology</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "manufacturing financial specialists",
                      "ProFit™ Method",
                      "R&D tax credits",
                      "cost optimization",
                    ].map((term, index) => (
                      <Badge key={index} variant="secondary">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Terms to Avoid</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "accountants",
                      "bookkeepers",
                      "tax preparation",
                      "generic financial services",
                    ].map((term, index) => (
                      <Badge key={index} variant="destructive">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Formatting Guidelines</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>
                      • Headings: Title case for H1 and H2, Sentence case for H3
                      and below
                    </li>
                    <li>
                      • Numbers: Use numerals for money, percentages, and
                      metrics
                    </li>
                    <li>
                      • Dates: Format as Month DD, YYYY (e.g., March 14, 2023)
                    </li>
                    <li>• Phone Numbers: Format as (XXX) XXX-XXXX</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end">
          <Button>Begin Content Review</Button>
        </div>
      </div>
    </div>
  );
}
