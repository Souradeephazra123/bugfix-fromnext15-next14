import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Manufacturing Industry Insights | Schapira CPA Blog",
  description:
    "Expert insights, articles, and resources on financial strategies for manufacturing businesses.",
};

// Example blog post data
const blogPosts = [
  {
    id: 1,
    title: "2025 Tax Changes Every Manufacturer Should Know",
    excerpt:
      "An overview of the important tax code changes and how they specifically impact manufacturing businesses.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.15.14%20-%20A%20series%20of%20abstract%20images%20representing%20success%20and%20positive%20outcomes.%20Each%20image%20uses%20the%20brand%20colors%20of%20dark%20blue%20and%20yellow_gold%2C%20featuring%20upwar-gYouJFLKxFiA6lHwWtPWpxblZ8r5I1.webp",
    category: "Tax Updates",
    date: "March 15, 2025",
    readTime: "8 min read",
    slug: "2025-tax-changes-manufacturers",
  },
  {
    id: 2,
    title: "Optimizing Cash Flow in Manufacturing Operations",
    excerpt:
      "Practical strategies to improve cash flow management in manufacturing businesses of all sizes.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.15.16%20-%20A%20new%20abstract%20image%20representing%20success%20and%20positive%20outcomes.%20This%20version%20features%20upward-moving%20dark%20blue%20lines%20forming%20interconnected%20patterns%2C%20-uJ6SW6jCPmxbx9sqTuGCIUsz54YLrJ.webp",
    category: "Financial Strategies",
    date: "March 10, 2025",
    readTime: "6 min read",
    slug: "optimizing-cash-flow-manufacturing",
  },
  {
    id: 3,
    title: "R&D Tax Credits: What Qualifies in Manufacturing",
    excerpt:
      "A detailed guide to qualifying activities and expenses for R&D tax credits in the manufacturing sector.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.11.04%20-%20Abstract%20geometric%20composition%20symbolizing%20peace%20of%20mind.%20Features%20symmetrical%2C%20harmonious%20arrangements%20of%20abstract%20shapes%20in%20muted%20tones%20of%20dark%20blue-8PU33ODpxTY3j4axJMTczEjA3SyEZx.webp",
    category: "Tax Strategies",
    date: "March 5, 2025",
    readTime: "10 min read",
    slug: "rd-tax-credits-manufacturing-qualifications",
  },
  {
    id: 4,
    title: "Supply Chain Cost Reduction Strategies for Manufacturers",
    excerpt:
      "Effective approaches to identify and eliminate unnecessary costs throughout your supply chain.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.11.56%20-%20Abstract%20geometric%20composition%20symbolizing%20peace%20of%20mind.%20Features%20symmetrical%2C%20harmonious%20arrangements%20of%20abstract%20shapes%20in%20muted%20tones%20of%20dark%20blue-b48MED32XSy6B5FAp46rngIShwHpSC.webp",
    category: "Cost Reduction",
    date: "February 28, 2025",
    readTime: "7 min read",
    slug: "supply-chain-cost-reduction",
  },
  {
    id: 5,
    title: "Manufacturing Valuation: Understanding Your Business Worth",
    excerpt:
      "Key factors that influence manufacturing business valuations and how to improve your company's value.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.17.00%20-%20Another%20variation%20of%20an%20abstract%20image%20representing%20success.%20This%20version%20uses%20a%20subtle%2C%20gradient-filled%20background%20with%20dark%20blue%20and%20yellow_gold%20geo-Xi2P2VJbUAo1lDcEOGUTAqn4woAIGk.webp",
    category: "Business Strategy",
    date: "February 20, 2025",
    readTime: "9 min read",
    slug: "manufacturing-valuation-business-worth",
  },
  {
    id: 6,
    title: "Industry 4.0: Financial Implications for Manufacturers",
    excerpt:
      "How digital transformation impacts manufacturing finances and the opportunities it presents.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.20.35%20-%20A%20clean%2C%20professional%20image%20for%20Precision%20Metal%20Products.%20The%20composition%20includes%20an%20abstract%2C%20geometric%20pattern%20suggesting%20precision%20and%20craftsmansh-hqSw3APFYhS30tfDXJY4dOzHtc5ic0.webp",
    category: "Manufacturing Trends",
    date: "February 15, 2025",
    readTime: "11 min read",
    slug: "industry-4-0-financial-implications",
  },
];

// Featured categories
const featuredCategories = [
  { name: "Tax Updates", count: 12, slug: "tax-updates" },
  { name: "Financial Strategies", count: 18, slug: "financial-strategies" },
  { name: "Manufacturing Trends", count: 15, slug: "manufacturing-trends" },
  { name: "Cost Reduction", count: 9, slug: "cost-reduction" },
  { name: "Business Strategy", count: 14, slug: "business-strategy" },
];

export default function BlogPage() {
  // Get the featured post (first in the array)
  const featuredPost = blogPosts[0];

  // Get the remaining posts
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-3">
                Manufacturing Industry Insights
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Expert guidance and strategies for manufacturing business
                success
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
        {/* Featured Article */}
        <section className="container py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Button asChild>
                <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={`Illustration for article: ${featuredPost.title} - ${featuredPost.category} insights for manufacturing businesses`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[3/2]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <SectionHeading
              title="Latest Articles"
              description="Stay updated with our most recent insights"
              centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post) => (
                <Card key={post.id} className="flex flex-col h-full">
                  <div className="overflow-hidden">
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={`Illustration for article: ${post.title} - ${post.category} insights for manufacturing businesses`}
                        width={400}
                        height={225}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-brand-gold transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center justify-between w-full"
                      >
                        <span>Read Article</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories and Subscribe */}
        <section className="container py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="grid gap-4">
                {featuredCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Tag className="h-5 w-5 text-brand-gold" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {category.count} articles
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex justify-center mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.11.04%20-%20Abstract%20geometric%20composition%20symbolizing%20peace%20of%20mind.%20Features%20symmetrical%2C%20harmonious%20arrangements%20of%20abstract%20shapes%20in%20muted%20tones%20of%20dark%20blue-8PU33ODpxTY3j4axJMTczEjA3SyEZx.webp"
                  alt="Abstract geometric composition representing manufacturing financial insights with blue and gold elements"
                  width={120}
                  height={120}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-center mb-3">
                Stay Updated
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest manufacturing
                financial insights and strategies.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-input"
                    required
                  />
                </div>
                <Button className="w-full bg-brand-gold hover:bg-brand-gold-dark">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-center text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container text-center">
            <SectionHeading
              title="Meet Our Industry Experts"
              description="The financial professionals behind our insights"
              centered
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((expert) => (
                <div key={expert} className="text-center">
                  <div className="inline-block rounded-full overflow-hidden mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.08.35%20-%20Minimalist%20circle%20icons%20representing%20people.%20Each%20icon%20consists%20of%20a%20simple%20round%20head%20and%20a%20slightly%20larger%20round%20body%20beneath%20it%2C%20arranged%20in%20a%20neut-vrYo6h1H4ei2q18IbPUNqmmrSfNMqH.webp"
                      alt="Profile icon representing a financial expert in manufacturing accounting"
                      width={120}
                      height={120}
                      className="w-28 h-28 object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">
                    David Schapira, CPA
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Manufacturing Financial Specialist
                  </p>
                  <p className="text-sm text-muted-foreground">
                    David has over 20 years of experience working with
                    manufacturing businesses on financial strategy and
                    optimization.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-12 md:py-16">
          <div className="bg-slate-900 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need Personalized Guidance?
                </h2>
                <p className="text-slate-300 mb-6">
                  Our team of manufacturing financial experts is ready to help
                  you navigate your specific challenges and opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-brand-gold hover:bg-brand-gold-dark"
                  >
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.17.00%20-%20Another%20variation%20of%20an%20abstract%20image%20representing%20success.%20This%20version%20uses%20a%20subtle%2C%20gradient-filled%20background%20with%20dark%20blue%20and%20yellow_gold%20geo-Xi2P2VJbUAo1lDcEOGUTAqn4woAIGk.webp"
                  alt="Abstract geometric composition with triangular shapes representing financial growth and success for manufacturers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
