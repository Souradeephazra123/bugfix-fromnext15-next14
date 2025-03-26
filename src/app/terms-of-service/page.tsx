export const metadata = {
  title: "Terms of Service | Schapira CPA",
  description:
    "Our terms of service outline the rules and guidelines for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose max-w-none">
        <p className="mb-4">Last updated: March 1, 2025</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">
          By accessing or using our website and services, you agree to be bound
          by these Terms of Service. If you do not agree to these Terms, you may
          not access or use our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          2. Description of Services
        </h2>
        <p className="mb-4">
          Schapira CPA provides accounting, tax, and financial advisory services
          specifically for manufacturing businesses. Our services include, but
          are not limited to, tax planning and preparation, financial statement
          preparation, cost accounting, and business advisory services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          3. Use of Website and Services
        </h2>
        <p className="mb-4">
          You agree to use our website and services only for lawful purposes and
          in accordance with these Terms. You agree not to:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Use our website or services in any way that violates applicable laws
            or regulations
          </li>
          <li>
            Engage in any conduct that restricts or inhibits anyone's use or
            enjoyment of our website or services
          </li>
          <li>
            Attempt to gain unauthorized access to our systems or user accounts
          </li>
          <li>
            Use our website or services to transmit any malware, viruses, or
            other malicious code
          </li>
          <li>
            Collect or harvest any information from our website without our
            consent
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          Our website, including its content, features, and functionality, is
          owned by Schapira CPA and is protected by copyright, trademark, and
          other intellectual property laws. You may not reproduce, distribute,
          modify, create derivative works of, publicly display, publicly
          perform, republish, download, store, or transmit any of our materials
          without our express written consent.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. User Accounts</h2>
        <p className="mb-4">
          If you create an account on our website, you are responsible for
          maintaining the confidentiality of your account information and for
          all activities that occur under your account. You agree to notify us
          immediately of any unauthorized access to or use of your account.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Fees and Payment</h2>
        <p className="mb-4">
          Fees for our services will be as agreed upon in a separate engagement
          letter or service agreement. Payment terms will be specified in such
          agreements.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          7. Disclaimer of Warranties
        </h2>
        <p className="mb-4">
          Our website and services are provided on an "as is" and "as available"
          basis, without any warranties of any kind, either express or implied.
          We disclaim all warranties, including but not limited to, implied
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          8. Limitation of Liability
        </h2>
        <p className="mb-4">
          To the fullest extent permitted by law, Schapira CPA shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, including but not limited to, loss of profits, data,
          use, goodwill, or other intangible losses, resulting from your access
          to or use of or inability to access or use our website or services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify, defend, and hold harmless Schapira CPA and its
          officers, directors, employees, agents, and representatives from and
          against any claims, liabilities, damages, judgments, awards, losses,
          costs, expenses, or fees (including reasonable attorneys' fees)
          arising out of or relating to your violation of these Terms or your
          use of our website or services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the
          laws of the State of New York, without regard to its conflict of law
          provisions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. The updated
          version will be effective as soon as it is posted on our website. Your
          continued use of our website or services after any such changes
          constitutes your acceptance of the new Terms.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          12. Contact Information
        </h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="mb-4">
          Schapira CPA
          <br />
          33 Bartlett St., Suite 204
          <br />
          Brooklyn, NY 11206
          <br />
          Email: info@schapiracpa.com
          <br />
          Phone: 212.380.6309
        </p>
      </div>
    </div>
  );
}
