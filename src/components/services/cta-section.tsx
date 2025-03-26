import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCTAText: string;
  primaryCTALink: string;
  secondaryCTAText?: string;
  secondaryCTALink?: string;
  bgColor?: "light" | "dark";
}

export function CTASection({
  title,
  subtitle,
  primaryCTAText,
  primaryCTALink,
  secondaryCTAText,
  secondaryCTALink,
  bgColor = "light",
}: CTASectionProps) {
  const isDark = bgColor === "dark";

  return (
    <section
      className={`py-16 md:py-24 ${isDark ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p
            className={`text-lg mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTALink}
              className="bg-[#C9A54E] hover:bg-[#b08f3d] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
            >
              {primaryCTAText}
            </Link>
            {secondaryCTAText && secondaryCTALink && (
              <Link
                href={secondaryCTALink}
                className={`bg-transparent border-2 ${
                  isDark
                    ? "border-white hover:bg-white hover:text-gray-900 text-white"
                    : "border-[#C9A54E] hover:bg-[#C9A54E] hover:text-white text-gray-900"
                } px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center`}
              >
                {secondaryCTAText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
