export const metadata = {
  title: "Accessibility Statement | Schapira CPA",
  description:
    "Our commitment to making our website and services accessible to all users.",
};

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>

      <div className="prose max-w-none">
        <p className="mb-4">Last updated: March 1, 2025</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
        <p className="mb-4">
          Schapira CPA is committed to ensuring digital accessibility for people
          with disabilities. We are continually improving the user experience
          for everyone and applying the relevant accessibility standards.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conformance Status</h2>
        <p className="mb-4">
          The Web Content Accessibility Guidelines (WCAG) define requirements
          for designers and developers to improve accessibility for people with
          disabilities. It defines three levels of conformance: Level A, Level
          AA, and Level AAA.
        </p>
        <p className="mb-4">
          Our website is partially conformant with WCAG 2.1 level AA. Partially
          conformant means that some parts of the content do not fully conform
          to the accessibility standard.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Accessibility Features</h2>
        <p className="mb-4">
          Our website includes the following accessibility features:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Semantic HTML structure</li>
          <li>ARIA landmarks and roles</li>
          <li>Alt text for images</li>
          <li>Keyboard navigation</li>
          <li>Color contrast compliance</li>
          <li>Resizable text without loss of functionality</li>
          <li>Clear focus indicators</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Limitations and Alternatives
        </h2>
        <p className="mb-4">
          Despite our best efforts to ensure accessibility of our website, there
          may be some limitations. Below is a description of known limitations,
          and potential solutions:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            PDF Documents: Some of our older PDF documents may not be fully
            accessible. We are working to remediate these documents. If you
            encounter an inaccessible PDF, please contact us and we will provide
            the information in an alternative format.
          </li>
          <li>
            Third-Party Content: Some content provided by third-party
            applications may not be fully accessible. We are working with our
            vendors to improve the accessibility of these components.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Feedback</h2>
        <p className="mb-4">
          We welcome your feedback on the accessibility of our website. Please
          let us know if you encounter accessibility barriers:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Phone: 212.380.6309</li>
          <li>Email: accessibility@schapiracpa.com</li>
          <li>
            Postal address: 33 Bartlett St., Suite 204, Brooklyn, NY 11206
          </li>
        </ul>
        <p className="mb-4">
          We try to respond to feedback within 3 business days.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Assessment Approach</h2>
        <p className="mb-4">
          Schapira CPA assessed the accessibility of our website by the
          following approaches:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Self-evaluation</li>
          <li>External evaluation using automated testing tools</li>
          <li>User testing with assistive technologies</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Formal Approval</h2>
        <p className="mb-4">
          This accessibility statement was created on March 1, 2025 and was last
          reviewed on March 1, 2025.
        </p>
      </div>
    </div>
  );
}
