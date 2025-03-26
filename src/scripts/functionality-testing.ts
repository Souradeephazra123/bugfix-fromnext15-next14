/**
 * Schapira CPA Website Functionality Testing Plan
 *
 * This script outlines the comprehensive functionality testing approach
 * for the Schapira CPA website to ensure all features work as expected
 * across different devices, browsers, and user scenarios.
 */

// Test Categories
const testCategories = [
  {
    id: "navigation",
    name: "Navigation & Structure",
    description:
      "Tests for navigation menus, links, breadcrumbs, and site structure",
    testCases: [
      {
        id: "nav-main-menu",
        name: "Main Navigation Menu",
        steps: [
          "Verify all main navigation links are visible",
          "Click each main navigation item",
          "Verify dropdown menus appear correctly",
          "Verify all dropdown links work correctly",
          "Test mobile menu toggle functionality",
          "Verify navigation state indicators (active page)",
        ],
        expectedResults:
          "All navigation elements function correctly and lead to appropriate pages",
        devices: ["desktop", "tablet", "mobile"],
        priority: "high",
      },
      {
        id: "nav-breadcrumbs",
        name: "Breadcrumb Navigation",
        steps: [
          "Navigate to a deep-level page",
          "Verify breadcrumb trail is accurate",
          "Click each breadcrumb link",
          "Verify correct navigation to parent pages",
        ],
        expectedResults:
          "Breadcrumb navigation accurately reflects page hierarchy and links work correctly",
        devices: ["desktop", "tablet", "mobile"],
        priority: "medium",
      },
      {
        id: "nav-footer",
        name: "Footer Navigation",
        steps: [
          "Verify all footer links are visible",
          "Click each footer link",
          "Verify social media links open in new tabs",
          "Test footer responsive behavior",
        ],
        expectedResults:
          "All footer links function correctly and maintain proper layout across devices",
        devices: ["desktop", "tablet", "mobile"],
        priority: "medium",
      },
      {
        id: "nav-cta-buttons",
        name: "CTA Buttons",
        steps: [
          "Identify all CTA buttons across the site",
          "Click each CTA button",
          "Verify correct destination pages",
          "Test hover states and animations",
        ],
        expectedResults:
          "All CTA buttons function correctly with proper visual feedback",
        devices: ["desktop", "tablet", "mobile"],
        priority: "high",
      },
    ],
  },
  {
    id: "forms",
    name: "Forms & Interactions",
    description: "Tests for all forms, calculators, and interactive elements",
    testCases: [
      {
        id: "form-contact",
        name: "Contact Form",
        steps: [
          "Navigate to contact page",
          "Test form with valid inputs",
          "Test form with invalid inputs",
          "Test form with empty required fields",
          "Verify form submission success message",
          "Verify form error messages",
          "Test form reset functionality",
        ],
        expectedResults:
          "Contact form validates inputs correctly, displays appropriate error messages, and confirms successful submission",
        devices: ["desktop", "tablet", "mobile"],
        priority: "high",
      },
      {
        id: "form-consultation",
        name: "Consultation Booking Form",
        steps: [
          "Navigate to consultation page",
          "Test date/time picker functionality",
          "Test form with valid inputs",
          "Test form with invalid inputs",
          "Verify confirmation email/message",
          "Test rescheduling functionality",
        ],
        expectedResults:
          "Consultation booking form works correctly with proper validation and confirmation",
        devices: ["desktop", "tablet", "mobile"],
        priority: "high",
      },
      {
        id: "calculator-valuation",
        name: "Business Valuation Calculator",
        steps: [
          "Navigate to valuation calculator",
          "Test with various input values",
          "Verify calculations are correct",
          "Test input validation",
          "Test reset functionality",
          "Verify results display correctly",
        ],
        expectedResults:
          "Calculator processes inputs correctly and displays accurate results",
        devices: ["desktop", "tablet", "mobile"],
        priority: "high",
      },
      {
        id: "client-portal",
        name: "Client Portal Login",
        steps: [
          "Navigate to client portal",
          "Test login with valid credentials",
          "Test login with invalid credentials",
          "Test password reset functionality",
          "Verify secure session handling",
          "Test logout functionality",
        ],
        expectedResults:
          "Client portal authentication works securely with proper error handling",
        devices: ["desktop", "tablet", "mobile"],
        priority: "high",
      },
    ],
  },
  {
    id: "content",
    name: "Content & Media",
    description:
      "Tests for content display, media loading, and dynamic content",
    testCases: [
      {
        id: "content-images",
        name: "Image Loading",
        steps: [
          "Visit pages with images",
          "Verify all images load correctly",
          "Test image lazy loading",
          "Verify image alt text",
          "Check responsive image behavior",
        ],
        expectedResults:
          "All images load correctly and display appropriately across devices",
        devices: ["desktop", "tablet", "mobile"],
        priority: "medium",
      },
      {
        id: "content-videos",
        name: "Video Playback",
        steps: [
          "Visit pages with video content",
          "Test video playback controls",
          "Verify autoplay settings (if applicable)",
          "Test video responsive behavior",
        ],
        expectedResults: "All videos load and play correctly across devices",
        devices: ["desktop", "tablet", "mobile"],
        priority: "medium",
      },
      {
        id: "content-downloads",
        name: "Downloadable Content",
        steps: [
          "Locate downloadable resources",
          "Test download functionality",
          "Verify file integrity",
          "Check download tracking (if implemented)",
        ],
        expectedResults:
          "All downloadable content is accessible and downloads correctly",
        devices: ["desktop", "tablet", "mobile"],
        priority: "medium",
      },
    ],
  },
  {
    id: "performance",
    name: "Performance & Error Handling",
    description: "Tests for site performance, error pages, and edge cases",
    testCases: [
      {
        id: "perf-page-load",
        name: "Page Load Times",
        steps: [
          "Measure initial page load time",
          "Test navigation between pages",
          "Verify lazy loading behavior",
          "Test with network throttling",
        ],
        expectedResults:
          "Pages load within acceptable time limits (under 3 seconds for initial load)",
        devices: ["desktop", "tablet", "mobile"],
        priority: "high",
      },
      {
        id: "error-404",
        name: "404 Error Page",
        steps: [
          "Navigate to non-existent URL",
          "Verify 404 page displays correctly",
          "Test navigation options on 404 page",
          "Verify search functionality (if available)",
        ],
        expectedResults:
          "404 page displays correctly with helpful navigation options",
        devices: ["desktop", "tablet", "mobile"],
        priority: "medium",
      },
      {
        id: "error-server",
        name: "Server Error Handling",
        steps: [
          "Simulate server errors (if possible)",
          "Verify error page displays correctly",
          "Test error reporting functionality",
          "Verify recovery options",
        ],
        expectedResults:
          "Server errors are handled gracefully with appropriate user feedback",
        devices: ["desktop", "tablet", "mobile"],
        priority: "medium",
      },
    ],
  },
];

// Test Environments
const testEnvironments = [
  {
    id: "browsers",
    name: "Browser Compatibility",
    items: [
      { id: "chrome", name: "Google Chrome (latest)" },
      { id: "firefox", name: "Mozilla Firefox (latest)" },
      { id: "safari", name: "Safari (latest)" },
      { id: "edge", name: "Microsoft Edge (latest)" },
    ],
  },
  {
    id: "devices",
    name: "Device Compatibility",
    items: [
      { id: "desktop", name: "Desktop (1920×1080)" },
      { id: "laptop", name: "Laptop (1366×768)" },
      { id: "tablet", name: "Tablet (768×1024)" },
      { id: "mobile", name: "Mobile (375×667)" },
    ],
  },
  {
    id: "connections",
    name: "Connection Types",
    items: [
      { id: "fast", name: "Fast (Cable/Fiber)" },
      { id: "average", name: "Average (4G/LTE)" },
      { id: "slow", name: "Slow (3G)" },
    ],
  },
];

// User Flows to Test
const userFlows = [
  {
    id: "flow-new-client",
    name: "New Client Journey",
    description:
      "Testing the journey of a new manufacturing client seeking financial services",
    steps: [
      { id: "home", description: "Land on homepage" },
      { id: "services", description: "Navigate to services overview" },
      {
        id: "specific-service",
        description: "View specific service (e.g., R&D Tax Credits)",
      },
      { id: "case-study", description: "Read related case study" },
      { id: "consultation", description: "Book a consultation" },
      { id: "confirmation", description: "Receive confirmation" },
    ],
    expectedOutcome:
      "User successfully books a consultation after learning about services and case studies",
  },
  {
    id: "flow-existing-client",
    name: "Existing Client Journey",
    description:
      "Testing the journey of an existing client accessing resources and portal",
    steps: [
      { id: "home", description: "Land on homepage" },
      { id: "client-portal", description: "Navigate to client portal" },
      { id: "login", description: "Log in to portal" },
      { id: "documents", description: "Access documents" },
      { id: "resources", description: "Navigate to resources" },
      { id: "calculator", description: "Use business valuation calculator" },
    ],
    expectedOutcome:
      "Existing client successfully accesses portal, documents, and resources",
  },
  {
    id: "flow-information-seeker",
    name: "Information Seeker Journey",
    description:
      "Testing the journey of someone researching manufacturing financial information",
    steps: [
      { id: "blog", description: "Land on blog post from search" },
      { id: "related-posts", description: "View related posts" },
      { id: "resources", description: "Navigate to resources" },
      { id: "download-guide", description: "Download industry guide" },
      { id: "newsletter", description: "Sign up for newsletter" },
    ],
    expectedOutcome:
      "Information seeker finds valuable content and subscribes to newsletter",
  },
];

// Test Reporting Template
const testReportTemplate = {
  testId: "",
  testName: "",
  tester: "",
  date: "",
  environment: {
    browser: "",
    device: "",
    screenSize: "",
    connection: "",
  },
  result: "", // pass, fail, partial
  notes: "",
  screenshots: [],
  issues: [
    {
      description: "",
      severity: "", // critical, high, medium, low
      steps: "",
      expected: "",
      actual: "",
    },
  ],
};

// Testing Schedule
const testingSchedule = {
  phases: [
    {
      name: "Pre-Launch Testing",
      description: "Comprehensive testing before site launch",
      startDate: "2023-06-01",
      endDate: "2023-06-07",
      focus: "All functionality across all environments",
    },
    {
      name: "Post-Launch Verification",
      description: "Verification testing after site launch",
      startDate: "2023-06-15",
      endDate: "2023-06-16",
      focus: "Critical functionality and reported issues",
    },
    {
      name: "Ongoing Regression Testing",
      description: "Regular testing after content or feature updates",
      frequency: "Monthly",
      focus: "New features and core functionality",
    },
  ],
};

// Export testing plan components
export {
  testCategories,
  testEnvironments,
  userFlows,
  testReportTemplate,
  testingSchedule,
};
