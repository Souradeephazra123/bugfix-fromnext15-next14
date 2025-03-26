import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Download, FileText } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
// Import the Breadcrumb component
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Tax Planning Guide | Schapira CPA",
  description:
    "Strategies to minimize tax liability for businesses and individuals while staying compliant with current tax laws.",
};

// Add the Breadcrumb component at the top of the content
export default function TaxPlanningPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb />
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Tax Planning Guide</h1>
          <p className="text-lg text-gray-700">
            Strategies to minimize tax liability for businesses and individuals
            while staying compliant with current tax laws.
          </p>
        </div>

        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            This guide is for informational purposes only and is not a
            substitute for professional tax advice. Tax laws change frequently.
            Please{" "}
            <Link
              href="/contact"
              className="font-medium underline underline-offset-4"
            >
              contact us
            </Link>{" "}
            for personalized tax planning assistance.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="business">Business Tax Planning</TabsTrigger>
            <TabsTrigger value="individual">
              Individual Tax Planning
            </TabsTrigger>
          </TabsList>

          <TabsContent value="business" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Tax Planning Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Entity Structure Optimization
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Choosing the right business entity structure can
                    significantly impact your tax liability. Each structure—sole
                    proprietorship, partnership, LLC, S-Corporation, or
                    C-Corporation—has different tax implications.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Key Considerations:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        S-Corporations can help save on self-employment taxes
                      </li>
                      <li>
                        C-Corporations face double taxation but have lower
                        initial tax rates
                      </li>
                      <li>LLCs offer flexibility in how they're taxed</li>
                      <li>
                        Partnerships provide pass-through taxation but unlimited
                        liability
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Maximize Business Deductions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Identifying and properly documenting all eligible business
                    expenses can significantly reduce your taxable income.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Common Deductions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Home office deduction (if you qualify)</li>
                      <li>
                        Business travel, meals, and entertainment (with
                        limitations)
                      </li>
                      <li>Vehicle expenses and mileage</li>
                      <li>Employee benefits and retirement plans</li>
                      <li>Professional development and education</li>
                      <li>Insurance premiums</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Timing of Income and Expenses
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Strategic timing of income recognition and expense payments
                    can help manage your tax liability from year to year.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Strategies:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Defer income to the next tax year when possible</li>
                      <li>Accelerate deductions into the current tax year</li>
                      <li>
                        Purchase needed equipment before year-end (Section 179
                        deduction)
                      </li>
                      <li>
                        Contribute to retirement plans to reduce taxable income
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Tax Credits for Businesses
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tax credits provide a dollar-for-dollar reduction in your
                    tax liability and can be more valuable than deductions.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Available Credits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Research and Development (R&D) Tax Credit</li>
                      <li>Work Opportunity Tax Credit</li>
                      <li>Small Business Health Care Tax Credit</li>
                      <li>Disabled Access Credit</li>
                      <li>Energy-Efficient Commercial Buildings Deduction</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button className="flex items-center gap-2">
                <Download size={16} />
                <span>Download Business Tax Planning Checklist</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="individual" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Individual Tax Planning Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Retirement Planning
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Contributing to retirement accounts can reduce your current
                    taxable income while building wealth for the future.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Retirement Accounts:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Traditional IRA or 401(k): Contributions reduce current
                        taxable income
                      </li>
                      <li>
                        Roth IRA or Roth 401(k): After-tax contributions grow
                        tax-free
                      </li>
                      <li>
                        SEP IRA or Solo 401(k): Higher contribution limits for
                        self-employed individuals
                      </li>
                      <li>
                        Health Savings Accounts (HSAs): Triple tax advantage for
                        healthcare expenses
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Tax-Efficient Investing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    How you invest can significantly impact your tax liability.
                    Strategic investment decisions can minimize taxes on
                    investment income.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Strategies:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Hold investments for more than a year to qualify for
                        long-term capital gains rates
                      </li>
                      <li>
                        Consider tax-loss harvesting to offset capital gains
                      </li>
                      <li>
                        Utilize tax-advantaged accounts for less tax-efficient
                        investments
                      </li>
                      <li>
                        Consider municipal bonds for tax-free interest income
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Education Planning
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Several tax benefits are available to help offset the cost
                    of education for yourself or dependents.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Education Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        529 College Savings Plans: Tax-free growth for qualified
                        education expenses
                      </li>
                      <li>
                        American Opportunity Tax Credit: Up to $2,500 per
                        eligible student
                      </li>
                      <li>
                        Lifetime Learning Credit: Up to $2,000 per tax return
                      </li>
                      <li>
                        Student Loan Interest Deduction: Up to $2,500 in
                        interest paid
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Charitable Giving
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Strategic charitable giving can provide tax benefits while
                    supporting causes you care about.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Giving Strategies:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Bunch charitable contributions in alternating years to
                        exceed the standard deduction
                      </li>
                      <li>
                        Donate appreciated securities to avoid capital gains tax
                      </li>
                      <li>
                        Consider a donor-advised fund for more flexibility in
                        timing donations
                      </li>
                      <li>
                        Qualified Charitable Distributions (QCDs) from IRAs for
                        those over 70½
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button className="flex items-center gap-2">
                <Download size={16} />
                <span>Download Individual Tax Planning Checklist</span>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">
            Year-Round Tax Planning
          </h2>
          <p className="mb-4">
            Effective tax planning is a year-round process, not just a year-end
            activity. Regular reviews of your tax situation can help identify
            opportunities and avoid surprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Quarterly Reviews
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Schedule quarterly tax planning sessions to review your
                financial situation and make adjustments as needed.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Life Changes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Major life events like marriage, divorce, birth of a child, or
                buying a home can significantly impact your tax situation.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Tax Law Changes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Stay informed about tax law changes that could affect your
                planning strategies and require adjustments.
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4">Need personalized tax planning assistance?</p>
          <Link href="/contact" passHref>
            <Button>Schedule a Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
