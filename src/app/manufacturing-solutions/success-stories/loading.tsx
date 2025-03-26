import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header skeleton */}
      <div className="w-full h-64 bg-gray-200 animate-pulse"></div>

      <div className="container mx-auto py-16 px-4">
        {/* Section heading skeleton */}
        <div className="space-y-3 max-w-3xl mx-auto text-center mb-12">
          <Skeleton className="h-10 w-3/4 mx-auto" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>

        {/* Success stories grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Results section skeleton */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-3 max-w-3xl mx-auto text-center mb-12">
            <Skeleton className="h-10 w-2/4 mx-auto" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow text-center"
                >
                  <Skeleton className="h-10 w-24 mx-auto mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* CTA skeleton */}
      <div className="container mx-auto py-16 px-4">
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>
    </div>
  );
}
