import { ServiceHero } from "@/components/services/service-hero";
import { BenefitsSection } from "@/components/services/benefits-section";
import { ProcessSection } from "@/components/services/process-section";
import { TestimonialsSection } from "@/components/services/testimonials-section";
import { FAQSection } from "@/components/services/faq-section";
import { CTASection } from "@/components/services/cta-section";
import { ConsultationForm } from "@/components/services/consultation-form";
import {
  Calculator,
  BarChartIcon as ChartBar,
  DollarSign,
  FileCheck,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "R&D Tax Credits for Manufacturers | Schapira CPA",
  description:
    "Maximize your tax benefits from research and development activities. Our specialized team helps identify qualifying activities and optimize your R&D tax credits.",
  canonical: "/services/rd-tax-credits",
  openGraph: {
    images: [
      {
        url: "/og-rd-tax-credits.jpg",
        width: 1200,
        height: 630,
        alt: "R&D Tax Credits for Manufacturers | Schapira CPA",
      },
    ],
    type: "article",
  },
});

export default function RDTaxCreditsPage() {
  // Benefits data
  const benefits = [
    {
      title: "Reduce Tax Liability",
      description:
        "Lower your overall tax burden by claiming credits for qualifying R&D activities, potentially saving thousands of dollars annually.",
      icon: <DollarSign size={32} />,
    },
    {
      title: "Improve Cash Flow",
      description:
        "Convert your innovation investments into immediate cash flow improvements through dollar-for-dollar tax reductions.",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Maximize Credit Amount",
      description:
        "Our specialized approach ensures you identify all qualifying activities and expenses to maximize your eligible credit amount.",
      icon: <Calculator size={32} />,
    },
    {
      title: "Comprehensive Documentation",
      description:
        "We provide thorough documentation support to substantiate your claims and prepare you for potential audits.",
      icon: <FileCheck size={32} />,
    },
    {
      title: "Strategic Planning",
      description:
        "Develop a forward-looking R&D strategy that aligns with tax incentives to maximize future benefits.",
      icon: <ChartBar size={32} />,
    },
    {
      title: "Industry-Specific Expertise",
      description:
        "Benefit from our deep understanding of manufacturing processes and how they qualify for R&D credits.",
      icon: <PieChart size={32} />,
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      title: "Initial Assessment",
      description:
        "We conduct a preliminary review of your R&D activities to determine potential credit eligibility and estimate possible savings.",
    },
    {
      number: 2,
      title: "Activity Identification",
      description:
        "Our team works with your technical staff to identify all qualifying R&D activities, many of which you may not realize qualify.",
    },
    {
      number: 3,
      title: "Documentation Collection",
      description:
        "We help gather and organize the necessary documentation to substantiate your R&D claims, including technical records and financial data.",
    },
    {
      number: 4,
      title: "Credit Calculation",
      description:
        "Our specialists calculate your eligible credit amount using our proprietary methodology to maximize your benefit.",
    },
    {
      number: 5,
      title: "Claim Preparation & Filing",
      description:
        "We prepare all necessary forms and supporting documentation for your tax return to ensure a smooth filing process.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      content:
        "The R&D tax credit process seemed overwhelming until we worked with Schapira CPA. They identified activities we never realized qualified and helped us secure a significant credit that improved our cash flow.",
      author: "Michael Johnson",
      position: "CFO",
      company: "Precision Manufacturing Inc.",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "Working with Schapira CPA has been transformative for our business. Their expertise in R&D tax credits helped us recover substantial costs from our product development efforts.",
      author: "Sarah Williams",
      position: "CEO",
      company: "Innovative Solutions",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "I was skeptical about R&D credits for our manufacturing processes, but Schapira CPA showed us exactly how we qualified. The documentation process was smooth, and the results exceeded our expectations.",
      author: "David Chen",
      position: "Operations Director",
      company: "Advanced Materials Co.",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What activities qualify for R&D tax credits?",
      answer:
        "Qualifying activities include developing new products, improving existing products, creating new manufacturing processes, enhancing existing processes, developing prototypes and models, testing new materials, and developing or improving software that controls manufacturing processes. The key is that these activities must involve resolving technical uncertainties through a process of experimentation.",
    },
    {
      question: "How much can my business save with R&D tax credits?",
      answer:
        "The federal R&D tax credit is generally equal to 6-8% of qualified research expenses, though this can vary based on your specific situation. Many states also offer additional R&D tax credits. For manufacturing businesses, this often translates to tens or even hundreds of thousands of dollars in annual tax savings.",
    },
    {
      question:
        "Do I need to be a large company to benefit from R&D tax credits?",
      answer:
        "No, businesses of all sizes can benefit from R&D tax credits. In fact, small and medium-sized businesses often qualify for special provisions that allow them to apply the credit against payroll taxes if they have little to no income tax liability.",
    },
    {
      question: "How far back can we claim R&D tax credits?",
      answer:
        "Generally, you can amend returns to claim R&D tax credits for the previous three tax years, in addition to the current year. This means you could potentially recover significant tax dollars from prior years' R&D activities.",
    },
    {
      question:
        "What documentation is needed to support an R&D tax credit claim?",
      answer:
        "Documentation should include project records, payroll records for employees involved in R&D, project lists, technical documentation of the development process, meeting notes, test results, and financial records showing related expenses. Our team helps you identify and organize all necessary documentation.",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Maximize Your R&D Tax Credits"
        subtitle="Tax Incentives for Innovation"
        description="Unlock substantial tax savings for your manufacturing business through R&D tax credits. Our specialized team helps identify qualifying activities, document your processes, and maximize your eligible credits."
        ctaText="Schedule a Free Consultation"
        ctaLink="/consultation"
        secondaryCtaText="Learn How It Works"
        secondaryCtaLink="#process"
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="R&D Tax Credits for Manufacturing"
      />

      <BenefitsSection
        title="Benefits of R&D Tax Credits"
        subtitle="Discover how R&D tax credits can transform your manufacturing business's financial outlook."
        benefits={benefits}
      />

      <ProcessSection
        title="Our R&D Tax Credit Process"
        subtitle="We've streamlined the process to make claiming R&D tax credits simple and effective."
        steps={processSteps}
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="R&D Tax Credit Process"
      />

      <CTASection
        title="Ready to See If You Qualify?"
        subtitle="Most manufacturing businesses qualify for more R&D tax credits than they realize. Let's discover your potential savings."
        primaryCTAText="Get a Free Assessment"
        primaryCTALink="/consultation"
        bgColor="dark"
      />

      <TestimonialsSection
        title="Success Stories"
        subtitle="See how we've helped other manufacturers maximize their R&D tax benefits."
        testimonials={testimonials}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about R&D tax credits for manufacturers."
        faqs={faqs}
      />

      <ConsultationForm serviceName="R&D Tax Credits" />
    </>
  );
}
