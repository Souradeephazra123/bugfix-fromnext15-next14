import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  href: string;
  imageSrc: string;
  featured?: boolean;
  comingSoon?: boolean;
}

export function CalculatorCard({
  title,
  description,
  icon,
  benefits,
  href,
  imageSrc,
  featured = false,
  comingSoon = false,
}: CalculatorCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? "ring-2 ring-blue-500" : ""}`}
    >
      <div className="relative h-48">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        {comingSoon && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-md">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        {!comingSoon ? (
          <Link
            href={href}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Access Calculator
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        ) : (
          <span className="text-gray-400 font-medium">Available Soon</span>
        )}
      </div>
    </div>
  );
}
