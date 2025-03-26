import Image from "next/image";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  imageSrc: string;
  imageAlt: string;
}

export function ProcessSection({
  title,
  subtitle,
  steps,
  imageSrc,
  imageAlt,
}: ProcessSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block pb-3">
            {title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#C9A54E]"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-[#C9A54E] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {step.number}
                    </div>
                    {step.number < steps.length && (
                      <div className="w-0.5 h-16 bg-gray-300 mx-auto my-2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#C9A54E] rounded-lg z-0"></div>
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
