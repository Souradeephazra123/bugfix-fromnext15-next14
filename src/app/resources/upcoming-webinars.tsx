import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

export function UpcomingWebinars() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Upcoming Webinars & Events
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <WebinarCard
            title="Manufacturing Financial Strategies for 2024"
            date="March 28, 2024"
            time="2:00 PM EST"
            description="Join Mendel Schapira for a deep dive into financial strategies for manufacturers in the current economic environment."
          />
          <WebinarCard
            title="Maximizing Manufacturing Tax Incentives"
            date="April 15, 2024"
            time="1:00 PM EST"
            description="Learn how to identify and leverage tax incentives specifically available to manufacturing businesses."
          />
          <WebinarCard
            title="Financing Manufacturing Growth"
            date="May 10, 2024"
            time="11:00 AM EST"
            description="Discover strategies for securing optimal financing for manufacturing equipment and expansion."
          />
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="px-6">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}

function WebinarCard({
  title,
  date,
  time,
  description,
}: {
  title: string;
  date: string;
  time: string;
  description: string;
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
          <Video className="h-6 w-6 text-amber-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4" />
          <span>{time}</span>
        </div>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Register Now</Button>
      </CardFooter>
    </Card>
  );
}
