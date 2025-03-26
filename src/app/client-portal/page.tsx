import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Lock,
  FileText,
  Calendar,
  Calculator,
  Download,
  ExternalLink,
  Shield,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Portal Login | Schapira CPA",
  description:
    "Access your secure client portal to view financial documents, tax returns, and communicate with your Schapira CPA team.",
  keywords:
    "client portal, secure document sharing, manufacturing CPA portal, tax document access, financial portal",
};

export default function ClientPortalPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb />
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Client Portal Login</h1>
          <p className="text-lg text-gray-700">
            Access your secure client portal to view financial documents, tax
            returns, and communicate with your Schapira CPA team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Login Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardHeader className="bg-slate-50">
                <CardTitle>Secure Client Portal</CardTitle>
                <CardDescription>
                  Enter your credentials to access your financial documents and
                  communications
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="existing" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="existing">Existing Clients</TabsTrigger>
                    <TabsTrigger value="new">New Portal Users</TabsTrigger>
                  </TabsList>

                  <TabsContent value="existing">
                    <form>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link
                              href="/client-portal/reset-password"
                              className="text-sm text-blue-600 hover:text-blue-800"
                            >
                              Forgot password?
                            </Link>
                          </div>
                          <Input id="password" type="password" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <Label
                            htmlFor="remember"
                            className="text-sm font-normal"
                          >
                            Remember me for 30 days
                          </Label>
                        </div>
                        <Button type="submit" className="w-full">
                          <Lock className="mr-2 h-4 w-4" /> Secure Login
                        </Button>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="new">
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        New to our client portal? Please enter your email
                        address to request access or activate your account.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="new-email">Email Address</Label>
                        <Input
                          id="new-email"
                          type="email"
                          placeholder="your@email.com"
                        />
                      </div>
                      <Button className="w-full">Request Portal Access</Button>
                      <p className="text-sm text-gray-500 italic">
                        Note: Your email must match the one we have on file.
                        You'll receive activation instructions within 1 business
                        day.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="mr-2 h-4 w-4" />
                  <span>256-bit SSL Encrypted</span>
                </div>
                <Link
                  href="/contact"
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <HelpCircle className="mr-1 h-4 w-4" />
                  Need Help?
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Portal Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Portal Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Secure document sharing and storage</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Schedule appointments with your CPA</span>
                  </li>
                  <li className="flex items-start">
                    <Calculator className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Access financial dashboards and reports</span>
                  </li>
                  <li className="flex items-start">
                    <Download className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Download tax returns and financial statements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                  <li>• JavaScript enabled</li>
                  <li>• Cookies enabled</li>
                  <li>• PDF viewer for document access</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    For the best experience, ensure your browser is updated to
                    the latest version.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Portal Apps Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Mobile Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="h-5 w-5 text-blue-600 mr-2" />
                  Mobile Portal App
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Access your financial documents and communicate with your CPA
                  team on the go with our secure mobile app.
                </p>
                <div className="flex space-x-4 mt-4">
                  <Button variant="outline" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                      <path d="M16 19h6"></path>
                      <path d="M19 16v6"></path>
                    </svg>
                    App Store
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Google Play
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  Mobile Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our mobile portal features enhanced security to protect your
                  sensitive financial information:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Biometric authentication (Face ID/Touch ID)</li>
                  <li>• End-to-end encryption for all communications</li>
                  <li>• Automatic session timeout</li>
                  <li>• Remote data wipe capability</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How secure is the client portal?
              </h3>
              <p className="text-gray-700">
                Our portal uses bank-level 256-bit SSL encryption, multi-factor
                authentication, and secure data centers to protect your
                information. All data is encrypted both in transit and at rest.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How do I upload documents?
              </h3>
              <p className="text-gray-700">
                Once logged in, navigate to the "Documents" section and click
                "Upload." You can drag and drop files or use the file browser.
                We accept PDF, Excel, Word, and image files.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                What if I forget my password?
              </h3>
              <p className="text-gray-700">
                Click the "Forgot password?" link on the login page. You'll
                receive an email with instructions to reset your password. For
                security, password reset links expire after 24 hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How long are documents stored?
              </h3>
              <p className="text-gray-700">
                We retain your documents according to our document retention
                policy, typically 7 years for tax documents. You can download
                and save copies of your documents at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Need Portal Support?</h2>
              <p className="mb-4">
                Our client support team is available Monday through Friday, 8am
                to 6pm EST to assist with any portal access or technical issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/resources/portal-guide">View Portal Guide</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 md:pl-6 flex justify-center">
              <div className="rounded-full bg-blue-100 p-6">
                <HelpCircle className="h-16 w-16 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Log in to your secure client portal to access your financial
            documents, communicate with your CPA team, and manage your
            manufacturing business finances.
          </p>
          <Button asChild size="lg">
            <a href="#top">
              <Lock className="mr-2 h-5 w-5" />
              Access Client Portal
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
