import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "Mergers & Acquisitions Advisory | Schapira CPA",
  description:
    "Expert guidance for manufacturing businesses through the M&A process, from valuation and due diligence to transaction structuring and post-merger integration.",
};

export default function MergersAcquisitionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-8">
        <div className="container">
          <Breadcrumb />
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                Mergers & Acquisitions Advisory
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Expert guidance through every stage of the M&A process
              </p>
            </div>
            <Button
              asChild
              className="bg-brand-gold hover:bg-brand-gold-dark w-full md:w-auto"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Strategic M&A Guidance for Manufacturing Businesses"
                description="Maximizing value and minimizing risk throughout the transaction process"
              />
              <div className="mt-6 space-y-4">
                <p>
                  Whether you're considering selling your manufacturing
                  business, looking to acquire another company, or planning for
                  succession, our M&A advisory team provides the specialized
                  expertise you need to navigate these complex transactions
                  successfully.
                </p>
                <p>
                  We understand the unique considerations involved in
                  manufacturing M&A deals, from equipment and inventory
                  valuation to customer concentration risks, supply chain
                  relationships, and workforce integration. Our comprehensive
                  approach ensures that all aspects of the transaction are
                  carefully evaluated and structured to achieve your strategic
                  and financial objectives.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.57%20-%20Abstract%20geometric%20design%20representing%20personalized%20service.%20Features%20distinct%20dark%20blue%20shapes%20initially%20separate%2C%20then%20converging%20or%20merging%20toward%20-ss2NYV2sHx02vNTU2Yvl5m04xhadQM.webp"
                alt="Abstract geometric design representing the merging of businesses with balanced blue and gold elements"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <SectionHeading
              title="Our M&A Advisory Services"
              description="Comprehensive support throughout the transaction lifecycle"
              centered
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Transaction Planning
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Strategic transaction assessment and planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Exit strategy development for sellers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Acquisition criteria development for buyers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Timeline and process management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Valuation Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Comprehensive business valuation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Manufacturing-specific value driver analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Equipment and inventory valuation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Intellectual property valuation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Due Diligence</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Financial due diligence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Tax structure and compliance review</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Operational assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Risk identification and mitigation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Transaction Structuring
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Tax-efficient deal structuring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Purchase price allocation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Earn-out and contingent consideration design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Working capital and net debt adjustments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Negotiation Support
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Letter of intent (LOI) development and review</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Deal term negotiation strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Financial and tax implications analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Representation at negotiation meetings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Post-Transaction Support
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Integration planning and execution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Financial systems consolidation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>Synergy realization tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 mr-2" />
                      <span>
                        Post-closing adjustments and dispute resolution
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2011.55.09%20-%20Abstract%20geometric%20representation%20symbolizing%20results-oriented%20approach.%20Features%20dynamic%20upward-moving%20lines%20or%20tapering%20shapes%20in%20dark%20blue%2C%20accente-IxK5qobDxeKiGUs3x4pwfdVaVbrbYx.webp"
                alt="Abstract representation of business growth through M&A with blue buildings and gold upward arrows"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Manufacturing M&A Expertise"
                description="Specialized knowledge for manufacturing transactions"
              />
              <div className="mt-6 space-y-4">
                <p>
                  Manufacturing M&A transactions involve unique considerations
                  that require specialized expertise. Our team has extensive
                  experience working with manufacturing businesses across
                  various sectors, providing us with deep insights into the
                  specific challenges and opportunities these transactions
                  present.
                </p>
                <p>
                  From equipment and inventory valuation to customer
                  concentration analysis, supply chain relationships, and
                  workforce considerations, we understand the critical factors
                  that impact manufacturing deal value and success. This
                  specialized knowledge allows us to identify potential issues
                  early in the process and develop effective strategies to
                  address them.
                </p>
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-brand-gold hover:bg-brand-gold-dark"
                  >
                    <Link href="/contact">Discuss Your M&A Needs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <SectionHeading
              title="Our M&A Process"
              description="A structured approach to successful transactions"
              centered
            />
            <div className="mt-12 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
              <div className="space-y-12 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold hidden md:flex">
                        1
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Initial Assessment
                      </h3>
                      <p>
                        We begin with a thorough assessment of your goals,
                        timeline, and specific requirements for the transaction,
                        establishing clear objectives and expectations.
                      </p>
                    </div>
                  </div>
                  <div className="md:pl-12"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold hidden md:flex">
                        2
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Valuation & Preparation
                      </h3>
                      <p>
                        We conduct a comprehensive valuation of the business and
                        prepare the necessary financial information and
                        documentation to support the transaction process.
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold hidden md:flex">
                        3
                      </div>
                      <h3 className="text-xl font-bold mb-2">Due Diligence</h3>
                      <p>
                        We manage a thorough due diligence process, identifying
                        potential issues and opportunities while ensuring all
                        critical aspects of the business are properly evaluated.
                      </p>
                    </div>
                  </div>
                  <div className="md:pl-12"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold hidden md:flex">
                        4
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Transaction Structuring
                      </h3>
                      <p>
                        We develop and implement an optimal transaction
                        structure that addresses tax considerations, risk
                        allocation, and other key factors specific to your
                        situation.
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold hidden md:flex">
                        5
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Negotiation & Closing
                      </h3>
                      <p>
                        We provide expert support throughout the negotiation
                        process, helping you secure favorable terms and navigate
                        the complexities of closing the transaction.
                      </p>
                    </div>
                  </div>
                  <div className="md:pl-12"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold hidden md:flex">
                        6
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Post-Transaction Support
                      </h3>
                      <p>
                        We assist with integration planning and execution,
                        helping you realize the full value of the transaction
                        and address any post-closing adjustments or issues.
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="bg-brand-gold/10 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Discuss Your M&A Plans?
                </h2>
                <p className="mb-6">
                  Whether you're considering selling your manufacturing
                  business, looking to acquire another company, or planning for
                  succession, our M&A advisory team is ready to help you
                  navigate the process successfully.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-gold hover:bg-brand-gold-dark"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.54%20-%20Abstract%20geometric%20representation%20of%20results-oriented%20approach.%20Features%20dynamic%20upward-moving%20dark%20blue%20lines%20or%20shapes%2C%20gradually%20increasing%20in%20size-29aooZyfEADoSoVOAKHSBA3yKVnQn8.webp"
                  alt="Dynamic visualization of business growth through M&A with upward trending metrics"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
