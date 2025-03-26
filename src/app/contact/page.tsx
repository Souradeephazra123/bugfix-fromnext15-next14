import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Schapira CPA | Manufacturing Financial Specialists",
  description:
    "Contact our team of manufacturing financial specialists for tax planning, R&D credits, cost accounting, and growth financing solutions. Get a response within 24 hours.",
  keywords:
    "manufacturing CPA contact, manufacturing financial specialists, manufacturing tax planning, R&D tax credits contact, manufacturing accounting services",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav
          className="flex mb-6 text-sm text-gray-500"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="hover:text-yellow-600 inline-flex items-center"
              >
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ml-1 font-medium text-gray-700">Contact</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Our Manufacturing Financial Specialists
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about optimizing your manufacturing finances? Our
            team of specialists is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
            <div className="mt-4 text-sm text-gray-500">
              <p className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-yellow-600" />
                We typically respond within 24 business hours
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-600 hover:text-yellow-600"
                      >
                        (555) 123-4567
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Mon-Fri: 8am-5pm EST
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:info@schapiracpa.com"
                        className="text-gray-600 hover:text-yellow-600"
                      >
                        info@schapiracpa.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        For general inquiries
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Office Location
                      </p>
                      <address className="text-gray-600 not-italic">
                        236 Broadway Ave
                        <br />
                        Suite #220
                        <br />
                        Brooklyn, NY 11211
                      </address>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Specialized Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Specialized Inquiries
                </h3>
                <ul className="space-y-3">
                  <li>
                    <p className="font-medium text-gray-900">
                      Manufacturing Tax Services
                    </p>
                    <a
                      href="mailto:tax@schapiracpa.com"
                      className="text-gray-600 hover:text-yellow-600"
                    >
                      tax@schapiracpa.com
                    </a>
                  </li>
                  <li>
                    <p className="font-medium text-gray-900">R&D Tax Credits</p>
                    <a
                      href="mailto:rd@schapiracpa.com"
                      className="text-gray-600 hover:text-yellow-600"
                    >
                      rd@schapiracpa.com
                    </a>
                  </li>
                  <li>
                    <p className="font-medium text-gray-900">
                      Growth Financing
                    </p>
                    <a
                      href="mailto:financing@schapiracpa.com"
                      className="text-gray-600 hover:text-yellow-600"
                    >
                      financing@schapiracpa.com
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-73.96209492346847!3d40.71035597139282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c1f6d0bfa93%3A0xb05940f5b57e7c5e!2s236%20Broadway%2C%20Brooklyn%2C%20NY%2011211!5e0!3m2!1sen!2sus!4v1710805245813!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Schapira CPA office location at 236 Broadway Ave, Brooklyn"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* CTA Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Free Consultation CTA */}
          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Free Consultation
            </h3>
            <p className="text-gray-600 mb-4">
              Schedule a no-obligation consultation with our manufacturing
              financial specialists.
            </p>
            <Button
              asChild
              className="w-full bg-yellow-600 hover:bg-yellow-700"
            >
              <Link href="/consultation">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Client Portal CTA */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Client Portal
            </h3>
            <p className="text-gray-600 mb-4">
              Existing clients can access documents and communicate securely
              through our portal.
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link href="/client-portal">
                Access Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Resources CTA */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Financial Resources
            </h3>
            <p className="text-gray-600 mb-4">
              Explore our manufacturing financial calculators, guides, and
              benchmarks.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/resources">
                View Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is your response time?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 business hours.
                For urgent matters, please call our office directly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer virtual consultations?
              </h3>
              <p className="text-gray-600">
                Yes, we offer both in-person and virtual consultations to
                accommodate your schedule and preferences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What information should I prepare?
              </h3>
              <p className="text-gray-600">
                For initial consultations, having your recent financial
                statements and a list of your key financial concerns will help
                us provide the most value.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you work with manufacturers nationwide?
              </h3>
              <p className="text-gray-600">
                Yes, while our office is in Boston, we work with manufacturing
                clients across the United States.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Client testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <blockquote className="text-gray-600 italic mb-4">
                "The Schapira CPA team has been incredibly responsive to all our
                manufacturing financial needs. Their specialized knowledge has
                saved us thousands in taxes and helped secure the financing we
                needed for expansion."
              </blockquote>
              <cite className="text-gray-900 font-medium block">
                — Michael Johnson, CEO of Precision Metal Products
              </cite>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-yellow-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Optimize Your Manufacturing Finances?
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Our team of specialists is ready to help you reduce taxes, improve
            cash flow, and secure the financing you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-yellow-700"
            >
              <Link href="/consultation">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-yellow-600 hover:bg-gray-100"
            >
              <a href="tel:+15551234567">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
