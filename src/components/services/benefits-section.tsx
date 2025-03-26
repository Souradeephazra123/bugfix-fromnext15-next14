import type React from "react";
import { CheckCircle } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

export function BenefitsSection({
  title,
  subtitle,
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block pb-3">
            {title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#C9A54E]"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#C9A54E]"
            >
              <div className="text-[#C9A54E] mb-4">
                {benefit.icon || <CheckCircle size={32} />}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
