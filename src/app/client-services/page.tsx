import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { ClientServicesFormDialog } from "@/components/client-services-form-dialog";

export default function ClientServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Achieve More with Your Trusted Accounting Partner
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Exclusive opportunities for our valued clients to enhance your
              financial operations and drive greater efficiency in your
              manufacturing business.
            </p>
            <ClientServicesFormDialog triggerClassName="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-6">
              Activate My 20% Discount
            </ClientServicesFormDialog>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed">
                  As a valued client of <strong>Schapira & Co.</strong>, you
                  already know the impact of solid financial guidance on your
                  business. Now, imagine taking that success even further. We're
                  excited to introduce an{" "}
                  <strong>exclusive opportunity for existing clients</strong> to
                  enhance your financial operations and{" "}
                  <strong>
                    drive greater efficiency in your manufacturing business
                  </strong>
                  .
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-6">
                  What's in it for you?
                </h2>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                <Card className="border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">
                          Customized Business Advisory
                        </h3>
                        <p className="text-gray-700">
                          Get one-on-one CFO-level insights tailored to your
                          manufacturing needs. We'll help you analyze production
                          costs, pricing, and profitability to uncover new
                          growth opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">
                          Integrated Financial Reporting
                        </h3>
                        <p className="text-gray-700">
                          We'll implement advanced reporting tools (KPI
                          dashboards, inventory and job costing reports) that
                          give you real-time visibility into your operations, so
                          you can make faster, smarter decisions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-xl mb-2">
                          Priority Support & Guidance
                        </h3>
                        <p className="text-gray-700">
                          Enjoy dedicated support from our senior consultants.
                          Have a question on tax credits for new equipment or
                          strategies to improve your supply chain finances?
                          We're on call with answers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none mt-8">
                <p>
                  From streamlining your cost accounting processes to optimizing
                  cash flow for production, our team is here to help your
                  company reach the next level of growth –{" "}
                  <strong>all while saving you money.</strong>
                </p>
              </div>
            </div>

            {/* Right Column - Offer Card */}
            <div className="md:col-span-1">
              <Card className="bg-blue-50 border-blue-200 shadow-lg sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <span className="inline-block bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
                      LIMITED TIME OFFER
                    </span>
                    <h3 className="text-2xl font-bold text-blue-900">
                      20% Off New Services
                    </h3>
                    <p className="text-blue-700 font-medium mt-2">
                      Exclusively for our current clients
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="mb-4">
                      Add any of our <strong>premium services</strong> to your
                      package and <strong>save 20%</strong> on the first 6
                      months:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Strategic Tax Planning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Virtual CFO Advisory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Advanced Analytics Implementation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      This special discount is available only until the end of
                      the quarter.
                    </p>
                    <ClientServicesFormDialog triggerClassName="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3">
                      Activate My 20% Discount
                    </ClientServicesFormDialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Our Clients Are Saying
            </h2>
            <p className="text-gray-600">
              Hear from manufacturing businesses that have enhanced their
              services with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">
                    "Adding Schapira's CFO advisory services has been
                    transformative for our manufacturing operation. Their
                    insights helped us optimize our production costs and improve
                    cash flow by 22% in just six months."
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold">Michael Rodriguez</p>
                    <p className="text-sm text-gray-600">
                      CEO, Precision Metal Products
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">
                    "The integrated financial reporting tools Schapira
                    implemented have given us unprecedented visibility into our
                    operations. We can now make data-driven decisions faster,
                    which has been crucial for our growth in a competitive
                    market."
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold">Sarah Chen</p>
                    <p className="text-sm text-gray-600">
                      Operations Director, Advanced Composites
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Program - Subtle Section */}
      <section className="py-10 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Referral Program</h3>
                <p className="text-gray-700">
                  Know a fellow business owner who could use a financial edge?
                  When you refer another company to Schapira & Co.,
                  <strong> you both earn rewards</strong>. They get top-notch
                  accounting support (and a warm welcome discount), and you
                  receive a referral credit toward your services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Let's Achieve Even More Together
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Elevate your service package with Schapira & Co. today and take
              your manufacturing business to new heights.
            </p>
            <ClientServicesFormDialog triggerClassName="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-6">
              Activate My 20% Discount
            </ClientServicesFormDialog>
          </div>
        </div>
      </section>
    </main>
  );
}
