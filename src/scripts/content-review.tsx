/**
 * Content Review Script
 *
 * This script provides a structured approach to reviewing all website content
 * for consistency, accuracy, and alignment with brand messaging.
 *
 * Note: This is a reference document and not meant to be executed directly.
 */

// Content Review Checklist
const contentReviewChecklist = {
  // Brand Consistency
  brandConsistency: [
    "Company name consistently appears as 'Schapira CPA' throughout all pages",
    "Brand voice maintains professional yet approachable tone across all content",
    "Value proposition for manufacturers is clearly communicated on all service pages",
    "ProFit™ Method and other proprietary approaches are consistently described",
    "Color scheme and visual elements follow brand guidelines",
  ],

  // Messaging Accuracy
  messagingAccuracy: [
    "All service descriptions accurately reflect current offerings",
    "Team member credentials and specializations are up-to-date",
    "Case studies and success stories contain accurate metrics and outcomes",
    "Industry statistics and financial data are current and properly sourced",
    "Tax regulations and financial advice reflect current laws",
  ],

  // Content Completeness
  contentCompleteness: [
    "All planned pages from sitemap are implemented",
    "No placeholder content or 'lorem ipsum' text remains",
    "All CTAs link to appropriate destination pages",
    "Navigation items correctly link to implemented pages",
    "Resource downloads and guides are accessible",
  ],

  // SEO Elements
  seoElements: [
    "All pages have unique, descriptive meta titles (50-60 characters)",
    "All pages have compelling meta descriptions (150-160 characters)",
    "Heading hierarchy (H1, H2, H3) is properly implemented",
    "Manufacturing-focused keywords are naturally incorporated",
    "Image alt text is descriptive and includes relevant keywords where appropriate",
  ],

  // User Experience
  userExperience: [
    "Content is scannable with appropriate headings, bullet points, and white space",
    "Industry jargon is explained or simplified for clarity",
    "Page lengths are appropriate (not too short or overwhelming)",
    "Contact information and CTAs are easily accessible",
    "Value proposition is clear within first viewport of each page",
  ],

  // Conversion Elements
  conversionElements: [
    "Each page contains at least one clear call-to-action",
    "Free consultation offer is consistently presented",
    "Service pages include relevant case studies or success metrics",
    "Contact forms are working properly with appropriate fields",
    "Lead magnets (guides, calculators) are prominently featured",
  ],
};

// Content Inventory
const contentInventory = [
  {
    page: "Homepage",
    url: "/",
    lastUpdated: "2023-03-14",
    primaryKeywords: [
      "manufacturing financial specialists",
      "manufacturing CPA",
      "R&D tax credits",
    ],
    conversionGoal: "Schedule consultation",
    reviewStatus: "Needs review",
  },
  {
    page: "About Us",
    url: "/about",
    lastUpdated: "2023-03-10",
    primaryKeywords: [
      "manufacturing financial team",
      "manufacturing CPA firm",
      "manufacturing specialists",
    ],
    conversionGoal: "Build trust and credibility",
    reviewStatus: "Needs review",
  },
  {
    page: "Manufacturing Solutions",
    url: "/manufacturing-solutions",
    lastUpdated: "2023-03-12",
    primaryKeywords: [
      "manufacturing financial solutions",
      "manufacturing accounting",
      "manufacturing tax planning",
    ],
    conversionGoal: "Explore specific services",
    reviewStatus: "Needs review",
  },
  {
    page: "ProFit Method",
    url: "/profit-method",
    lastUpdated: "2023-03-08",
    primaryKeywords: [
      "manufacturing profit improvement",
      "manufacturing financial methodology",
      "profit optimization",
    ],
    conversionGoal: "Schedule consultation",
    reviewStatus: "Needs review",
  },
  {
    page: "Success Stories",
    url: "/success-stories",
    lastUpdated: "2023-03-09",
    primaryKeywords: [
      "manufacturing case studies",
      "manufacturing financial success",
      "manufacturing ROI",
    ],
    conversionGoal: "Build credibility and request similar results",
    reviewStatus: "Needs review",
  },
  {
    page: "Services Overview",
    url: "/services",
    lastUpdated: "2023-03-11",
    primaryKeywords: [
      "manufacturing financial services",
      "manufacturing tax services",
      "manufacturing accounting",
    ],
    conversionGoal: "Navigate to specific service page",
    reviewStatus: "Needs review",
  },
  {
    page: "Manufacturing Tax Services",
    url: "/services/manufacturing-tax",
    lastUpdated: "2023-03-07",
    primaryKeywords: [
      "manufacturing tax planning",
      "manufacturing tax strategy",
      "manufacturing tax savings",
    ],
    conversionGoal: "Schedule tax consultation",
    reviewStatus: "Needs review",
  },
  {
    page: "R&D Tax Credits",
    url: "/services/rd-tax-credits",
    lastUpdated: "2023-03-06",
    primaryKeywords: [
      "manufacturing R&D tax credits",
      "R&D tax incentives",
      "process improvement tax credits",
    ],
    conversionGoal: "Schedule R&D assessment",
    reviewStatus: "Needs review",
  },
  {
    page: "Cost Accounting",
    url: "/services/cost-accounting",
    lastUpdated: "2023-03-05",
    primaryKeywords: [
      "manufacturing cost accounting",
      "production cost analysis",
      "manufacturing cost optimization",
    ],
    conversionGoal: "Schedule cost analysis",
    reviewStatus: "Needs review",
  },
  {
    page: "Growth Financing",
    url: "/services/growth-financing",
    lastUpdated: "2023-03-14",
    primaryKeywords: [
      "manufacturing growth financing",
      "equipment financing",
      "expansion capital",
    ],
    conversionGoal: "Discuss financing options",
    reviewStatus: "Needs review",
  },
  {
    page: "Financial Analysis",
    url: "/services/financial-analysis",
    lastUpdated: "2023-03-04",
    primaryKeywords: [
      "manufacturing financial analysis",
      "manufacturing KPIs",
      "manufacturing financial insights",
    ],
    conversionGoal: "Request financial analysis",
    reviewStatus: "Needs review",
  },
  {
    page: "M&A Advisory",
    url: "/services/ma-advisory",
    lastUpdated: "2023-03-03",
    primaryKeywords: [
      "manufacturing M&A",
      "manufacturing acquisition",
      "manufacturing business valuation",
    ],
    conversionGoal: "Schedule M&A consultation",
    reviewStatus: "Needs review",
  },
  {
    page: "Resources",
    url: "/resources",
    lastUpdated: "2023-03-13",
    primaryKeywords: [
      "manufacturing financial resources",
      "manufacturing guides",
      "manufacturing calculators",
    ],
    conversionGoal: "Download resource or use calculator",
    reviewStatus: "Needs review",
  },
  {
    page: "Contact",
    url: "/contact",
    lastUpdated: "2023-03-14",
    primaryKeywords: [
      "manufacturing CPA contact",
      "manufacturing financial consultation",
      "manufacturing tax help",
    ],
    conversionGoal: "Submit contact form or call",
    reviewStatus: "Needs review",
  },
  {
    page: "Client Portal",
    url: "/client-portal",
    lastUpdated: "2023-03-02",
    primaryKeywords: [
      "manufacturing client portal",
      "secure document sharing",
      "manufacturing financial portal",
    ],
    conversionGoal: "Log in to portal",
    reviewStatus: "Needs review",
  },
];

// Content Review Process
const contentReviewProcess = {
  step1: "Inventory all pages and content assets",
  step2: "Review each page against the content checklist",
  step3: "Document issues and inconsistencies",
  step4: "Prioritize content updates based on importance and visibility",
  step5: "Implement content revisions",
  step6: "Conduct secondary review to ensure issues are resolved",
  step7: "Update content inventory with review date and status",
};

// Content Review Findings Template
const contentReviewFindings = {
  page: "Page URL",
  reviewDate: "YYYY-MM-DD",
  reviewer: "Reviewer Name",
  brandConsistencyIssues: [],
  messagingAccuracyIssues: [],
  contentCompletenessIssues: [],
  seoElementIssues: [],
  userExperienceIssues: [],
  conversionElementIssues: [],
  priorityLevel: "High/Medium/Low",
  recommendedActions: [],
  implementationDeadline: "YYYY-MM-DD",
};

// Content Style Guide Reference
const contentStyleGuide = {
  brandVoice:
    "Professional, authoritative, yet approachable. Focus on clarity and value.",
  terminology: {
    preferred: [
      "manufacturing financial specialists",
      "ProFit™ Method",
      "R&D tax credits",
      "cost optimization",
    ],
    avoid: [
      "accountants",
      "bookkeepers",
      "tax preparation",
      "generic financial services",
    ],
  },
  formatting: {
    headings: "Title case for H1 and H2, Sentence case for H3 and below",
    numbers:
      "Use numerals for all numbers related to money, percentages, and metrics",
    dates: "Format as Month DD, YYYY (e.g., March 14, 2023)",
    phoneNumbers: "Format as (XXX) XXX-XXXX",
  },
  contentLength: {
    servicePage: "800-1200 words",
    blogPost: "1000-1500 words",
    caseStudy: "600-800 words",
    teamBio: "150-250 words",
  },
};

// Export for reference
export const contentReviewResources = {
  contentReviewChecklist,
  contentInventory,
  contentReviewProcess,
  contentReviewFindings,
  contentStyleGuide,
};
