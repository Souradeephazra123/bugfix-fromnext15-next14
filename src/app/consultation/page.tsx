"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    revenue: "",
    interests: [],
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          interests: [...prev.interests, value],
        };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter((interest) => interest !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or email service
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Schedule Your Free Manufacturing Financial Consultation
            </h1>
            <p className="text-xl mb-8">
              Discover how our specialized financial strategies can help your
              manufacturing business reduce taxes, improve cash flow, and fund
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">
                        Thank You for Your Interest!
                      </h2>
                      <p className="text-gray-600 mb-6">
                        We've received your consultation request and will
                        contact you within 1 business day to schedule your free
                        consultation with one of our manufacturing financial
                        specialists.
                      </p>
                      <p className="text-gray-600">
                        In the meantime, feel free to explore our{" "}
                        <a
                          href="/resources"
                          className="text-blue-600 hover:underline"
                        >
                          resources section
                        </a>{" "}
                        for valuable manufacturing financial insights.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-6">
                        Request Your Free Consultation
                      </h2>
                      <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Full Name*
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="w-full p-3 border border-gray-300 rounded-lg"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Email Address*
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="w-full p-3 border border-gray-300 rounded-lg"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Phone Number*
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="w-full p-3 border border-gray-300 rounded-lg"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="company"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Company Name*
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              className="w-full p-3 border border-gray-300 rounded-lg"
                              value={formData.company}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="industry"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Manufacturing Industry*
                            </label>
                            <select
                              id="industry"
                              name="industry"
                              className="w-full p-3 border border-gray-300 rounded-lg"
                              value={formData.industry}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Industry</option>
                              <option value="Metal Fabrication">
                                Metal Fabrication
                              </option>
                              <option value="Plastics & Composites">
                                Plastics & Composites
                              </option>
                              <option value="Food Processing">
                                Food Processing
                              </option>
                              <option value="Electronics">Electronics</option>
                              <option value="Medical Devices">
                                Medical Devices
                              </option>
                              <option value="Automotive">Automotive</option>
                              <option value="Aerospace">Aerospace</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="revenue"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Annual Revenue*
                            </label>
                            <select
                              id="revenue"
                              name="revenue"
                              className="w-full p-3 border border-gray-300 rounded-lg"
                              value={formData.revenue}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Revenue Range</option>
                              <option value="Under $1M">Under $1M</option>
                              <option value="$1M-$5M">$1M-$5M</option>
                              <option value="$5M-$10M">$5M-$10M</option>
                              <option value="$10M-$25M">$10M-$25M</option>
                              <option value="$25M-$50M">$25M-$50M</option>
                              <option value="$50M+">$50M+</option>
                            </select>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className="block text-gray-700 font-medium mb-2">
                            Areas of Interest (Select all that apply)*
                          </label>
                          <div className="grid md:grid-cols-2 gap-2">
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                name="interests"
                                value="Tax Planning"
                                className="mr-2"
                                onChange={handleCheckboxChange}
                                checked={formData.interests.includes(
                                  "Tax Planning",
                                )}
                              />
                              <span>Tax Planning & Optimization</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                name="interests"
                                value="R&D Tax Credits"
                                className="mr-2"
                                onChange={handleCheckboxChange}
                                checked={formData.interests.includes(
                                  "R&D Tax Credits",
                                )}
                              />
                              <span>R&D Tax Credits</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                name="interests"
                                value="Cost Accounting"
                                className="mr-2"
                                onChange={handleCheckboxChange}
                                checked={formData.interests.includes(
                                  "Cost Accounting",
                                )}
                              />
                              <span>Cost Accounting</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                name="interests"
                                value="Growth Financing"
                                className="mr-2"
                                onChange={handleCheckboxChange}
                                checked={formData.interests.includes(
                                  "Growth Financing",
                                )}
                              />
                              <span>Growth Financing</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                name="interests"
                                value="Cash Flow Optimization"
                                className="mr-2"
                                onChange={handleCheckboxChange}
                                checked={formData.interests.includes(
                                  "Cash Flow Optimization",
                                )}
                              />
                              <span>Cash Flow Optimization</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                name="interests"
                                value="Financial Planning"
                                className="mr-2"
                                onChange={handleCheckboxChange}
                                checked={formData.interests.includes(
                                  "Financial Planning",
                                )}
                              />
                              <span>Financial Planning</span>
                            </label>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="message"
                            className="block text-gray-700 font-medium mb-2"
                          >
                            Tell us about your specific needs or questions
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                          Schedule Consultation
                        </button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Submit Your Request</p>
                      <p className="text-gray-600 text-sm">
                        Fill out the form with your information and areas of
                        interest.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Quick Response</p>
                      <p className="text-gray-600 text-sm">
                        We'll contact you within 1 business day to schedule your
                        consultation.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Free Consultation</p>
                      <p className="text-gray-600 text-sm">
                        Meet with a manufacturing financial specialist to
                        discuss your specific needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold">4</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Custom Recommendations</p>
                      <p className="text-gray-600 text-sm">
                        Receive tailored strategies to improve your
                        manufacturing finances.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="mb-4">
                  If you prefer to contact us directly, you can reach us through
                  the following channels:
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>212.380.6309</p>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@schapiracpa.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>33 Bartlett St., Suite 204</p>
                    <p>Brooklyn, NY 11206</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-yellow-600 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6">
                The free consultation was eye-opening. They identified tax
                savings opportunities our previous accountant had missed for
                years. We've now saved over $120K annually.
              </p>
              <div className="font-bold">Robert Chen</div>
              <div className="text-gray-500">CEO, Precision Manufacturing</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-yellow-600 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6">
                After being turned down by three banks, Schapira helped us
                secure $1.2M in equipment financing with better terms than we
                initially expected.
              </p>
              <div className="font-bold">Jennifer Martinez</div>
              <div className="text-gray-500">CFO, Advanced Composites</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-yellow-600 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6">
                Their cost accounting implementation revealed that two product
                lines were significantly more profitable than we believed,
                leading to a 28% increase in overall profitability.
              </p>
              <div className="font-bold">Michael Johnson</div>
              <div className="text-gray-500">Owner, Johnson Manufacturing</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Is the consultation really free?
              </h3>
              <p className="text-gray-600">
                Yes, your initial consultation is completely free with no
                obligation. We believe in demonstrating our value before asking
                for any commitment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                How long does the consultation last?
              </h3>
              <p className="text-gray-600">
                Initial consultations typically last 45-60 minutes, depending on
                the complexity of your manufacturing business and financial
                needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                What should I prepare for the consultation?
              </h3>
              <p className="text-gray-600">
                No preparation is required, but having a general understanding
                of your current financial challenges and goals will help us
                provide more targeted recommendations during the consultation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                What happens after the consultation?
              </h3>
              <p className="text-gray-600">
                After the consultation, we'll provide a summary of our
                recommendations and proposed next steps. You're under no
                obligation to proceed, but if you choose to work with us, we'll
                develop a detailed engagement plan tailored to your specific
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
