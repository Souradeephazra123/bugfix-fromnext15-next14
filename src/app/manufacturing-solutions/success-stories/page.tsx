import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import {
  Quote,
  ChevronRight,
  Building2,
  TrendingUp,
  Percent,
  DollarSign,
} from "lucide-react";

export const metadata = {
  title: "Manufacturing Success Stories | Schapira CPA",
  description:
    "Real results and financial improvements achieved by our manufacturing clients through our specialized solutions.",
};

// Example success stories data
const successStories = [
  {
    id: 1,
    client: "Precision Metal Industries",
    title: "30% Tax Savings Through R&D Credits",
    excerpt:
      "How we helped a precision metal manufacturer identify and document qualifying R&D activities, resulting in significant tax savings and improved cash flow.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.20.35%20-%20A%20clean%2C%20professional%20image%20for%20Precision%20Metal%20Products.%20The%20composition%20includes%20an%20abstract%2C%20geometric%20pattern%20suggesting%20precision%20and%20craftsmansh-hqSw3APFYhS30tfDXJY4dOzHtc5ic0.webp",
    category: "Tax Strategy",
    results: [
      { label: "Tax Savings", value: "$280,000", icon: DollarSign },
      { label: "Tax Rate Reduction", value: "30%", icon: Percent },
    ],
    slug: "precision-metal-rd-credits",
  },
  {
    id: 2,
    client: "Advanced Composites, LLC",
    title: "Strategic Cost Accounting Implementation",
    excerpt:
      "Implementing an accurate cost accounting system that revealed true product profitability and led to strategic pricing adjustments and improved margins.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.15.14%20-%20A%20series%20of%20abstract%20images%20representing%20success%20and%20positive%20outcomes.%20Each%20image%20uses%20the%20brand%20colors%20of%20dark%20blue%20and%20yellow_gold%2C%20featuring%20upwar-gYouJFLKxFiA6lHwWtPWpxblZ8r5I1.webp",
    category: "Cost Accounting",
    results: [
      { label: "Margin Improvement", value: "18%", icon: TrendingUp },
      { label: "Annual Savings", value: "$425,000", icon: DollarSign },
    ],
    slug: "advanced-composites-cost-accounting",
  },
  {
    id: 3,
    client: "Global Manufacturing Solutions",
    title: "Cash Flow Optimization Strategy",
    excerpt:
      "A comprehensive approach to improving working capital efficiency through inventory management, accounts receivable optimization, and strategic payment timing.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.15.16%20-%20A%20new%20abstract%20image%20representing%20success%20and%20positive%20outcomes.%20This%20version%20features%20upward-moving%20dark%20blue%20lines%20forming%20interconnected%20patterns%2C%20-uJ6SW6jCPmxbx9sqTuGCIUsz54YLrJ.webp",
    category: "Cash Flow Management",
    results: [
      {
        label: "Working Capital Improvement",
        value: "$1.2M",
        icon: DollarSign,
      },
      { label: "Days Cash on Hand", value: "+22 days", icon: TrendingUp },
    ],
    slug: "global-manufacturing-cash-flow",
  },
  {
    id: 4,
    client: "Harvest Foods Manufacturing",
    title: "Growth Financing Strategy",
    excerpt:
      "Securing optimal financing for facility expansion through a combination of equipment loans, mezzanine financing, and strategic use of tax incentives.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.17.00%20-%20Another%20variation%20of%20an%20abstract%20image%20representing%20success.%20This%20version%20uses%20a%20subtle%2C%20gradient-filled%20background%20with%20dark%20blue%20and%20yellow_gold%20geo-Xi2P2VJbUAo1lDcEOGUTAqn4woAIGk.webp",
    category: "Growth Financing",
    results: [
      { label: "Financing Secured", value: "$3.5M", icon: DollarSign },
      { label: "Interest Savings", value: "$175,000", icon: Percent },
    ],
    slug: "harvest-foods-growth-financing",
  },
];

// Client testimonials
const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    title: "CEO, Precision Metal Industries",
    quote:
      "The team at Schapira CPA transformed our approach to R&D documentation. Their deep knowledge of manufacturing processes and tax law helped us capture credits we didn't even know we qualified for.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.08.35%20-%20Minimalist%20circle%20icons%20representing%20people.%20Each%20icon%20consists%20of%20a%20simple%20round%20head%20and%20a%20slightly%20larger%20round%20body%20beneath%20it%2C%20arranged%20in%20a%20neut-vrYo6h1H4ei2q18IbPUNqmmrSfNMqH.webp",
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "CFO, Advanced Composites, LLC",
    quote:
      "Implementing the cost accounting system recommended by Schapira gave us visibility into product profitability that we never had before. It's completely changed how we price our products and which opportunities we pursue.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.08.35%20-%20Minimalist%20circle%20icons%20representing%20people.%20Each%20icon%20consists%20of%20a%20simple%20round%20head%20and%20a%20slightly%20larger%20round%20body%20beneath%20it%2C%20arranged%20in%20a%20neut-vrYo6h1H4ei2q18IbPUNqmmrSfNMqH.webp",
  },
  {
    id: 3,
    name: "Robert Martinez",
    title: "President, Global Manufacturing Solutions",
    quote:
      "The cash flow strategies implemented by Schapira CPA allowed us to significantly improve our working capital position. We're now better positioned to weather market fluctuations and pursue growth opportunities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.08.35%20-%20Minimalist%20circle%20icons%20representing%20people.%20Each%20icon%20consists%20of%20a%20simple%20round%20head%20and%20a%20slightly%20larger%20round%20body%20beneath%20it%2C%20arranged%20in%20a%20neut-vrYo6h1H4ei2q18IbPUNqmmrSfNMqH.webp",
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                Manufacturing Success Stories
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Real results achieved by our manufacturing clients
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
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading
                title="Real Results for Manufacturing Businesses"
                description="Case studies showcasing our impact on client success"
              />
              <div className="mt-6 space-y-4">
                <p>
                  At Schapira CPA, we measure our success by the tangible
                  results we deliver for our manufacturing clients. Each success
                  story represents a unique business with specific challenges
                  and opportunities, but they all share one thing in common:
                  significant measurable improvements in financial performance.
                </p>
                <p>
                  From tax savings and cost reduction to cash flow optimization
                  and growth financing, these case studies demonstrate our
                  ability to develop and implement practical strategies that
                  drive real business results.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.15.14%20-%20A%20series%20of%20abstract%20images%20representing%20success%20and%20positive%20outcomes.%20Each%20image%20uses%20the%20brand%20colors%20of%20dark%20blue%20and%20yellow_gold%2C%20featuring%20upwar-gYouJFLKxFiA6lHwWtPWpxblZ8r5I1.webp"
                alt="Abstract geometric icons representing manufacturing success metrics with blue and gold upward arrows"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <SectionHeading
              title="Client Success Stories"
              description="How we've helped manufacturing businesses achieve their financial goals"
              centered
            />
            <div className="mt-12 space-y-12">
              {successStories.map((story, index) => (
                <Card key={story.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div
                      className={`${index % 2 === 1 ? "order-1 md:order-2" : ""}`}
                    >
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={`${story.client} - ${story.title} - ${story.category} success story showing ${story.results[0].value} in ${story.results[0].label}`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? "order-2 md:order-1" : ""}`}
                    >
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 mb-4">
                        {story.category}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {story.client}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {story.excerpt}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {story.results.map((result, idx) => (
                          <div key={idx} className="bg-muted p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <result.icon className="h-4 w-4 text-brand-gold" />
                              <span className="text-sm font-medium">
                                {result.label}
                              </span>
                            </div>
                            <span className="text-xl font-bold">
                              {result.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Button asChild>
                        <Link
                          href={`/manufacturing-solutions/success-stories/${story.slug}`}
                          className="flex items-center gap-2"
                        >
                          <span>Read Full Case Study</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <SectionHeading
            title="Client Testimonials"
            description="What our manufacturing clients say about working with us"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden w-16 h-16">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Profile icon for ${testimonial.name}, ${testimonial.title}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-muted-foreground/20 absolute -top-1 -left-2" />
                    <p className="relative z-10 text-muted-foreground pl-4">
                      {testimonial.quote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <SectionHeading
              title="Ready to Achieve Similar Results?"
              description="Schedule a consultation to discuss your specific manufacturing business needs"
              centered
            />
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-gold hover:bg-brand-gold-dark"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/manufacturing-solutions">View All Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
