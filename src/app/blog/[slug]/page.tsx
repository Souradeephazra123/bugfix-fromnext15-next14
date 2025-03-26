import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

// Example blog post data (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    id: 1,
    title: "2025 Tax Changes Every Manufacturer Should Know",
    content: `
      <p>The manufacturing sector faces unique challenges and opportunities with each year's tax code updates. As we look ahead to 2025, several significant changes are on the horizon that will directly impact manufacturing businesses of all sizes.</p>
      
      <h2>Section 179 Deduction Expansion</h2>
      <p>One of the most notable changes for manufacturers is the expansion of the Section 179 deduction limit. This allows businesses to deduct the full purchase price of qualifying equipment and software purchased or financed during the tax year.</p>
      <p>The 2025 limit has increased to $1.25 million, with the phase-out threshold raised to $3.25 million. This represents a significant opportunity for manufacturers planning equipment upgrades or expansion.</p>
      
      <h2>Changes to R&D Tax Credit Calculations</h2>
      <p>The Research and Development (R&D) tax credit continues to be one of the most valuable incentives for manufacturers, but the calculation methodology is changing in 2025. The new approach more clearly defines qualifying activities specifically for the manufacturing sector, including:</p>
      <ul>
        <li>Process improvement initiatives</li>
        <li>Material testing and quality assurance development</li>
        <li>Automation integration and testing</li>
        <li>Sustainable manufacturing process development</li>
      </ul>
      <p>These clarifications are expected to make it easier for manufacturers to document and claim legitimate R&D expenses while reducing uncertainty around qualification criteria.</p>
      
      <h2>New Energy Efficiency Incentives</h2>
      <p>Manufacturing facilities typically have significant energy requirements, making the new energy efficiency tax incentives particularly valuable. The 2025 tax code includes expanded deductions for:</p>
      <ul>
        <li>Energy-efficient building improvements</li>
        <li>Renewable energy implementation</li>
        <li>Reduced carbon footprint initiatives</li>
      </ul>
      <p>These incentives can provide both immediate tax benefits and long-term operational cost savings.</p>
      
      <h2>Changes to Depreciation Schedules</h2>
      <p>The accelerated depreciation provisions that many manufacturers have relied on are undergoing modification. While bonus depreciation was scheduled to phase down, the new tax code extends 100% bonus depreciation through 2025 for qualifying manufacturing equipment.</p>
      <p>Additionally, certain types of manufacturing technology now qualify for shorter depreciation schedules, reflecting the faster pace of technological obsolescence in modern manufacturing environments.</p>
      
      <h2>State Tax Considerations</h2>
      <p>Beyond federal changes, manufacturers should be aware of evolving state tax landscapes. Many states are implementing manufacturing-specific incentives to attract and retain manufacturing businesses, including:</p>
      <ul>
        <li>Property tax abatements for facility expansion</li>
        <li>Sales tax exemptions on manufacturing equipment</li>
        <li>Specialized workforce development credits</li>
      </ul>
      <p>The patchwork of state incentives creates both complexity and opportunity for manufacturers with multi-state operations or those considering relocation or expansion.</p>
      
      <h2>Strategic Planning Considerations</h2>
      <p>With these changes on the horizon, manufacturers should consider several strategic planning approaches:</p>
      <ol>
        <li>Evaluate timing of major equipment purchases to maximize available incentives</li>
        <li>Review and update R&D documentation processes to align with new qualification criteria</li>
        <li>Assess energy efficiency improvement opportunities that can deliver both tax benefits and operational savings</li>
        <li>Consider geographic implications of state tax incentives for expansion planning</li>
      </ol>
      <p>Early planning with these changes in mind can significantly impact a manufacturer's effective tax rate and cash flow position.</p>
      
      <h2>Conclusion</h2>
      <p>The 2025 tax changes present significant opportunities for manufacturing businesses that take a proactive approach to tax planning. By understanding these changes and their specific applications to manufacturing operations, businesses can not only reduce their tax burden but also align tax strategy with broader business goals like expansion, modernization, and sustainability.</p>
      <p>For manufacturers, these tax changes are more than just compliance requirements—they represent strategic opportunities to enhance competitiveness and drive growth. Working with financial advisors who understand both tax law and manufacturing operations will be essential to maximizing the benefits of these new provisions.</p>
    `,
    excerpt:
      "An overview of the important tax code changes and how they specifically impact manufacturing businesses.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.11.04%20-%20Abstract%20geometric%20composition%20symbolizing%20peace%20of%20mind.%20Features%20symmetrical%2C%20harmonious%20arrangements%20of%20abstract%20shapes%20in%20muted%20tones%20of%20dark%20blue-XkvcP7HEzOhunCONPgmtRa5TSyglfw.webp",
    category: "Tax Updates",
    date: "March 15, 2025",
    readTime: "8 min read",
    slug: "2025-tax-changes-manufacturers",
    author: {
      name: "David Schapira, CPA",
      title: "Tax Director",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.08.35%20-%20Minimalist%20circle%20icons%20representing%20people.%20Each%20icon%20consists%20of%20a%20simple%20round%20head%20and%20a%20slightly%20larger%20round%20body%20beneath%20it%2C%20arranged%20in%20a%20neut-vrYo6h1H4ei2q18IbPUNqmmrSfNMqH.webp",
    },
    relatedPosts: [2, 3, 5],
  },
  {
    id: 2,
    title: "Optimizing Cash Flow in Manufacturing Operations",
    excerpt:
      "Practical strategies to improve cash flow management in manufacturing businesses of all sizes.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.11.56%20-%20Abstract%20geometric%20composition%20symbolizing%20peace%20of%20mind.%20Features%20symmetrical%2C%20harmonious%20arrangements%20of%20abstract%20shapes%20in%20muted%20tones%20of%20dark%20blue-e2uhvy1LRbPOP09YFjLnGerTS3MUMa.webp",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2011.52.51%20-%20Abstract%20geometric%20composition%20representing%20partnership.%20Features%20dark%20blue%20and%20lighter%20grey%20shapes%20moving%20toward%20each%20other%2C%20symbolizing%20interaction%20-LdPpWIfzC8sp67T2nxbAN1PkLTA4Vg.webp",
    category: "Tax Strategies",
    date: "March 5, 2025",
    readTime: "10 min read",
    slug: "rd-tax-credits-manufacturing-qualifications",
  },
  {
    id: 5,
    title: "Manufacturing Valuation: Understanding Your Business Worth",
    excerpt:
      "Key factors that influence manufacturing business valuations and how to improve your company's value.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-17%2012.02.57%20-%20Abstract%20geometric%20design%20representing%20personalized%20service.%20Features%20distinct%20dark%20blue%20shapes%20initially%20separate%2C%20then%20converging%20or%20merging%20toward%20-ss2NYV2sHx02vNTU2Yvl5m04xhadQM.webp",
    category: "Business Strategy",
    date: "February 20, 2025",
    readTime: "9 min read",
    slug: "manufacturing-valuation-business-worth",
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Schapira CPA Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post || !post.content) {
    notFound();
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts
        .map((id) => blogPosts.find((p) => p.id === id))
        .filter(Boolean)
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container pt-8 pb-4">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </Button>

        <div className="flex items-center gap-2 mb-3">
          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>
      </div>

      <div className="w-full aspect-[3/1] relative bg-muted">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={`Illustration for article: ${post.title}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="flex-1 container py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-4xl font-bold tracking-tight mb-8">
              {post.title}
            </h1>

            {post.author && (
              <div className="flex items-center gap-4 mb-8 p-4 border-y">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={post.author.image || "/placeholder.svg"}
                    alt={`Profile icon for ${post.author.name}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {post.author.title}
                  </p>
                </div>
              </div>
            )}

            <div
              className="prose prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-6 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Share this article:</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Get Expert Help</h3>
              <p className="text-muted-foreground mb-4">
                Need help implementing these strategies for your manufacturing
                business? Our team of experts can help.
              </p>
              <Button
                asChild
                className="w-full bg-brand-gold hover:bg-brand-gold-dark"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>

            {relatedPosts.length > 0 && (
              <div>
                <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Card key={related?.id} className="overflow-hidden">
                      <div className="aspect-[16/9]">
                        <Image
                          src={related?.image || ""}
                          alt={`Illustration for article: ${related?.title}`}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">
                            {related?.category}
                          </span>
                        </div>
                        <CardTitle className="text-base line-clamp-2">
                          <Link
                            href={`/blog/${related?.slug}`}
                            className="hover:text-brand-gold transition-colors"
                          >
                            {related?.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {[
                  "Tax Updates",
                  "Financial Strategies",
                  "Manufacturing Trends",
                  "Cost Reduction",
                  "Business Strategy",
                ].map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <Tag className="h-4 w-4 text-brand-gold" />
                    <span>{category}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <section className="bg-muted py-12">
        <div className="container">
          <SectionHeading
            title="Ready to Optimize Your Manufacturing Business?"
            description="Get personalized guidance from our manufacturing financial experts"
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
              <Link href="/resources">Explore Our Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
