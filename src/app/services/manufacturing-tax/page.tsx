import { ServiceHero } from "@/components/services/service-hero";
import { BenefitsSection } from "@/components/services/benefits-section";
import { ProcessSection } from "@/components/services/process-section";
import { TestimonialsSection } from "@/components/services/testimonials-section";
import { FAQSection } from "@/components/services/faq-section";
import { CTASection } from "@/components/services/cta-section";
import { ConsultationForm } from "@/components/services/consultation-form";
import {
  Building,
  Clock,
  FileText,
  Globe,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Manufacturing Tax Services | Schapira CPA",
  description:
    "Specialized tax solutions for manufacturers. Navigate complex regulations while maximizing available incentives with our industry-specific expertise.",
  canonical: "/services/manufacturing-tax",
  openGraph: {
    images: [
      {
        url: "/og-manufacturing-tax.jpg",
        width: 1200,
        height: 630,
        alt: "Manufacturing Tax Services | Schapira CPA",
      },
    ],
    type: "article",
  },
});

export default function ManufacturingTaxPage() {
  // Benefits data
  const benefits = [
    {
      title: "Industry-Specific Expertise",
      description:
        "Benefit from our deep understanding of manufacturing tax regulations and incentives specific to your industry.",
      icon: <Building size={32} />,
    },
    {
      title: "Comprehensive Compliance",
      description:
        "Stay compliant with all federal, state, and local tax requirements while minimizing your tax burden.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Strategic Tax Planning",
      description:
        "Develop forward-looking tax strategies that align with your business goals and manufacturing operations.",
      icon: <FileText size={32} />,
    },
    {
      title: "Multi-State Tax Optimization",
      description:
        "Navigate complex state tax requirements and identify opportunities across multiple jurisdictions.",
      icon: <Globe size={32} />,
    },
    {
      title: "Audit Protection",
      description:
        "Comprehensive documentation and preparation to protect your business in case of tax audits.",
      icon: <Scale size={32} />,
    },
    {
      title: "Year-Round Support",
      description:
        "Ongoing tax advisory services to address questions and opportunities throughout the year, not just at tax time.",
      icon: <Clock size={32} />,
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      title: "Comprehensive Assessment",
      description:
        "We conduct a thorough review of your manufacturing operations, tax history, and financial structure to identify opportunities and challenges.",
    },
    {
      number: 2,
      title: "Strategy Development",
      description:
        "Our team creates a customized tax strategy that addresses your specific manufacturing business needs and goals.",
    },
    {
      number: 3,
      title: "Implementation",
      description:
        "We work with you to implement tax-optimizing structures and processes throughout your business operations.",
    },
    {
      number: 4,
      title: "Compliance Management",
      description:
        "Our specialists ensure all tax filings are accurate, complete, and submitted on time across all relevant jurisdictions.",
    },
    {
      number: 5,
      title: "Ongoing Optimization",
      description:
        "We continuously monitor tax law changes and your business evolution to identify new opportunities for tax savings.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      content:
        "Schapira CPA's manufacturing tax expertise has been invaluable to our business. They identified several state tax incentives we weren't aware of, resulting in significant savings.",
      author: "Robert Thompson",
      position: "President",
      company: "Thompson Manufacturing",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "The team at Schapira CPA understands the unique tax challenges of manufacturing businesses. Their strategic approach to our tax planning has made a measurable impact on our bottom line.",
      author: "Jennifer Martinez",
      position: "CFO",
      company: "Precision Parts Inc.",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "We've worked with several accounting firms, but none have demonstrated the manufacturing industry knowledge that Schapira CPA brings to the table. Their tax strategies are tailored specifically to our operations.",
      author: "Thomas Wilson",
      position: "CEO",
      company: "Wilson Industrial Solutions",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
  ];

  // FAQs
  const faqs = [
    {
      question:
        "What tax incentives are specifically available to manufacturers?",
      answer:
        "Manufacturers can benefit from numerous tax incentives, including the Section 199A deduction, accelerated depreciation for equipment purchases, energy efficiency tax credits, work opportunity tax credits, and state-specific manufacturing incentives. Our team helps identify which incentives apply to your specific operations.",
    },
    {
      question:
        "How can cost segregation studies benefit my manufacturing business?",
      answer:
        "Cost segregation studies allow manufacturers to accelerate depreciation deductions by identifying building components that can be classified as personal property (depreciated over 5, 7, or 15 years) rather than real property (depreciated over 39 years). This can significantly improve cash flow in the early years of owning or renovating a manufacturing facility.",
    },
    {
      question:
        "What sales and use tax considerations are important for manufacturers?",
      answer:
        "Manufacturers often qualify for exemptions on purchases of machinery, equipment, and raw materials used in the manufacturing process. Additionally, understanding nexus rules for multi-state operations is crucial. Our team helps ensure you're claiming all available exemptions while maintaining proper compliance.",
    },
    {
      question:
        "How should manufacturers approach inventory accounting for tax purposes?",
      answer:
        "The method you choose for inventory accounting (FIFO, LIFO, weighted average, etc.) can significantly impact your tax liability. We analyze your specific inventory characteristics and business cycle to recommend the most advantageous method for your situation.",
    },
    {
      question:
        "What international tax considerations apply to manufacturers who import or export?",
      answer:
        "Manufacturers engaged in international business face complex tax considerations including customs duties, transfer pricing, foreign tax credits, and potentially IC-DISC benefits for exporters. Our international tax expertise helps navigate these complexities to optimize your global tax position.",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Specialized Tax Solutions for Manufacturers"
        subtitle="Industry-Specific Tax Expertise"
        description="Navigate complex tax regulations while maximizing available incentives. Our manufacturing tax services help you develop strategies that support operational efficiency and business growth."
        ctaText="Schedule a Free Consultation"
        ctaLink="/consultation"
        secondaryCtaText="Explore Our Approach"
        secondaryCtaLink="#process"
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="Manufacturing Tax Services"
      />

      <BenefitsSection
        title="Benefits of Our Manufacturing Tax Services"
        subtitle="Discover how our specialized tax expertise can transform your manufacturing business's financial performance."
        benefits={benefits}
      />

      <ProcessSection
        title="Our Manufacturing Tax Approach"
        subtitle="We've developed a comprehensive process to optimize your tax position while ensuring full compliance."
        steps={processSteps}
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="Manufacturing Tax Process"
      />

      <CTASection
        title="Ready to Optimize Your Tax Strategy?"
        subtitle="Most manufacturing businesses are missing key tax opportunities. Let's uncover yours."
        primaryCTAText="Get a Free Assessment"
        primaryCTALink="/consultation"
        bgColor="dark"
      />

      <TestimonialsSection
        title="Client Success Stories"
        subtitle="See how we've helped other manufacturers optimize their tax strategies."
        testimonials={testimonials}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about manufacturing tax strategies."
        faqs={faqs}
      />

      <ConsultationForm serviceName="Manufacturing Tax" />
    </>
  );
}
