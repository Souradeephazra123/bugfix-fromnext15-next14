import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export function FeaturedVideo() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          The Manufacturer's Accounting Partner
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            {/* Video thumbnail with play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-700 transition-colors">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
            </div>
            <img
              src="/placeholder.svg?height=360&width=640"
              alt="Video thumbnail showing Mendel Schapira discussing manufacturing accounting"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Card className="border-0 shadow-none bg-gray-50 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">
                  Video Transcript:
                </h3>
                <div className="prose prose-sm max-w-none">
                  <p>
                    "Where should we start? With stories? I'd love to share our
                    successes.
                  </p>
                  <p>
                    "We saved one manufacturer one thousand, one hundred
                    seventy-six payroll hours with a single cost analysis.
                  </p>
                  <p>
                    "We helped another manufacturer cut 55% of their workforce
                    while increasing their net business income by 10%.
                  </p>
                  <p>
                    "We guided a third manufacturer to outperform Chinese
                    competitors, and capture more American clients, without a
                    dollar in hiring or marketing.
                  </p>
                  <p>
                    "But that's not why you're here. These are stories from
                    other clients. And what worked for them might not be the
                    same that works for you.
                  </p>
                  <p>
                    "So a better conversation is how you and your individual
                    business model would gain from a long-term relationship with
                    our firm.
                  </p>
                  <p>
                    "When I say "long term" and "relationship" I mean it. That's
                    our company foundation.
                  </p>
                  <p>
                    "Because you can't expect a tax preparer to have your back
                    throughout the year. And a CPA who's in touch 4 times a
                    year? There's no chance they can guide your business during
                    the other 48 weeks.
                  </p>
                  <p>
                    "At Schapira you get a partner who's invested in your 10x
                    plan. We play the long game alongside you, steadily growing
                    a high-value business on solid fundamentals and smart
                    executive action."
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>Schedule a Consultation</Button>
                  <Button variant="outline">View More Videos</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
