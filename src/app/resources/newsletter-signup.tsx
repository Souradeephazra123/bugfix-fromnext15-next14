import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-amber-600" />
            </div>
            <CardTitle className="text-2xl">Stay Informed</CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Subscribe to our newsletter to receive the latest financial
              insights, resources, and event announcements directly in your
              inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy and will never share your information. You
              can unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
