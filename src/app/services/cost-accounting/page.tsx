import { ServiceHero } from "@/components/services/service-hero";
import { BenefitsSection } from "@/components/services/benefits-section";
import { ProcessSection } from "@/components/services/process-section";
import { TestimonialsSection } from "@/components/services/testimonials-section";
import { FAQSection } from "@/components/services/faq-section";
import { CTASection } from "@/components/services/cta-section";
import { ConsultationForm } from "@/components/services/consultation-form";
import {
  BarChart,
  ClipboardCheck,
  DollarSign,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Cost Accounting Services for Manufacturers | Schapira CPA",
  description:
    "Detailed cost analysis for improved manufacturing profitability. Our cost accounting services provide insights into your production costs for better decision-making.",
  canonical: "/services/cost-accounting",
  openGraph: {
    images: [
      {
        url: "/og-cost-accounting.jpg",
        width: 1200,
        height: 630,
        alt: "Cost Accounting Services for Manufacturers | Schapira CPA",
      },
    ],
    type: "article",
  },
});

export default function CostAccountingPage() {
  // Benefits data
  const benefits = [
    {
      title: "Accurate Product Costing",
      description:
        "Determine the true cost of each product to set appropriate pricing and identify your most profitable items.",
      icon: <DollarSign size={32} />,
    },
    {
      title: "Waste Identification",
      description:
        "Pinpoint areas of waste and inefficiency in your manufacturing processes to reduce costs and improve margins.",
      icon: <ClipboardCheck size={32} />,
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Make informed business decisions based on accurate cost data rather than assumptions or estimates.",
      icon: <BarChart size={32} />,
    },
    {
      title: "Improved Profitability",
      description:
        "Enhance overall profitability by understanding and optimizing your cost structures across all operations.",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Better Budgeting",
      description:
        "Develop more accurate budgets and forecasts based on detailed understanding of your cost drivers.",
      icon: <LineChart size={32} />,
    },
    {
      title: "Strategic Pricing",
      description:
        "Set optimal pricing strategies based on comprehensive cost data and market positioning.",
      icon: <PieChart size={32} />,
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      title: "Cost System Assessment",
      description:
        "We evaluate your current cost accounting methods and identify opportunities for improvement based on your manufacturing processes.",
    },
    {
      number: 2,
      title: "System Design & Implementation",
      description:
        "Our team designs and implements a cost accounting system tailored to your specific manufacturing operations and information needs.",
    },
    {
      number: 3,
      title: "Data Collection & Analysis",
      description:
        "We help establish processes for collecting relevant cost data and perform detailed analysis to uncover insights.",
    },
    {
      number: 4,
      title: "Reporting & Dashboard Creation",
      description:
        "We develop customized reports and dashboards that provide clear visibility into your cost structures and performance metrics.",
    },
    {
      number: 5,
      title: "Ongoing Optimization",
      description:
        "Our team provides continuous support to refine your cost accounting system as your business evolves and grows.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      content:
        'Schapira CPA\'s cost accounting services transformed our understanding of our manufacturing costs. We discovered that one of our "flagship" products was actually losing money, while another overlooked product line had our highest margins.',
      author: "Patricia Miller",
      position: "Operations Director",
      company: "Miller Manufacturing",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "The job costing system that Schapira CPA implemented has given us unprecedented visibility into our true costs. We've been able to reduce waste, improve pricing, and significantly increase our overall profitability.",
      author: "Daniel Garcia",
      position: "CEO",
      company: "Precision Fabricators",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "Before working with Schapira CPA, we were essentially guessing at our product costs. Their cost accounting expertise has helped us implement a system that provides accurate, actionable data we can use to make better business decisions.",
      author: "Susan Taylor",
      position: "CFO",
      company: "Taylor Industries",
      imageSrc: "/placeholder.svg?height=100&width=100",
    },
  ];

  // FAQs
  const faqs = [
    {
      question:
        "What's the difference between job costing and process costing?",
      answer:
        "Job costing tracks costs for specific customer orders or distinct batches, making it ideal for custom manufacturers or those with highly varied products. Process costing allocates costs across all units produced during a period and works best for continuous production of identical or similar items. We help determine which approach (or hybrid system) is right for your manufacturing operation.",
    },
    {
      question:
        "How can activity-based costing benefit my manufacturing business?",
      answer:
        "Activity-based costing (ABC) provides more accurate cost allocation by identifying specific activities that drive costs and assigning them based on actual consumption. This gives manufacturers deeper insights into which products, customers, or processes are most profitable. ABC is particularly valuable for businesses with diverse product lines, complex processes, or high overhead costs.",
    },
    {
      question: "What's involved in implementing a new cost accounting system?",
      answer:
        "Implementation typically involves assessing current processes, designing the new system, configuring software (if applicable), training staff, establishing data collection procedures, creating reports, and monitoring results. Our team guides you through each step to ensure a smooth transition with minimal disruption to your operations.",
    },
    {
      question: "How does cost accounting differ from financial accounting?",
      answer:
        "Financial accounting focuses on reporting to external stakeholders and follows strict standards (GAAP), while cost accounting is primarily for internal management decision-making and offers more flexibility in methodology. Cost accounting provides detailed information about specific products, processes, and departments that financial accounting doesn't typically capture.",
    },
    {
      question:
        "How often should we review and update our cost accounting methods?",
      answer:
        "Cost accounting systems should be reviewed at least annually and updated whenever significant changes occur in your manufacturing processes, product mix, or cost structures. Regular reviews ensure your cost data remains accurate and relevant for decision-making as your business evolves.",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Detailed Cost Analysis for Improved Profitability"
        subtitle="Strategic Cost Accounting"
        description="Understanding your true costs is essential for manufacturing profitability. Our cost accounting services provide detailed insights into your production costs, helping you make informed decisions."
        ctaText="Schedule a Free Consultation"
        ctaLink="/consultation"
        secondaryCtaText="Explore Our Approach"
        secondaryCtaLink="#process"
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="Cost Accounting for Manufacturers"
      />

      <BenefitsSection
        title="Benefits of Our Cost Accounting Services"
        subtitle="Discover how detailed cost analysis can transform your manufacturing business's profitability."
        benefits={benefits}
      />

      <ProcessSection
        title="Our Cost Accounting Approach"
        subtitle="We've developed a comprehensive process to implement effective cost accounting systems for manufacturers."
        steps={processSteps}
        imageSrc="/placeholder.svg?height=600&width=800"
        imageAlt="Cost Accounting Process"
      />

      <CTASection
        title="Ready to Gain Clarity on Your True Costs?"
        subtitle="Most manufacturers discover significant profit opportunities when they implement proper cost accounting systems."
        primaryCTAText="Get a Free Assessment"
        primaryCTALink="/consultation"
        bgColor="dark"
      />

      <TestimonialsSection
        title="Client Success Stories"
        subtitle="See how we've helped other manufacturers improve profitability through better cost accounting."
        testimonials={testimonials}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about cost accounting for manufacturers."
        faqs={faqs}
      />

      <ConsultationForm serviceName="Cost Accounting" />
    </>
  );
}
