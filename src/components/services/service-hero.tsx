import Link from "next/link";
import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceHero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background texture"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block bg-[#C9A54E] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaLink}
                className="bg-[#C9A54E] hover:bg-[#b08f3d] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
              >
                {ctaText}
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#C9A54E] opacity-20 z-10"></div>
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#C9A54E] rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C9A54E] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-5"></div>
    </section>
  );
}
