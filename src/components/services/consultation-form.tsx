"use client";

import type React from "react";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface ConsultationFormProps {
  serviceName: string;
}

export function ConsultationForm({ serviceName }: ConsultationFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gray-900 text-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 relative pb-4">
                Request a Free Consultation
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#C9A54E]"></span>
              </h3>
              <p className="mb-8 text-gray-300">
                Speak with our experts about your {serviceName} needs and
                discover how we can help your business thrive.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#C9A54E] mr-4 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-sm">
                    No obligation consultation with a specialist
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#C9A54E] mr-4 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-sm">
                    Customized recommendations for your business
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#C9A54E] mr-4 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-sm">
                    Clear explanation of potential benefits and next steps
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#C9A54E] mr-4 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-sm">
                    Flexible scheduling options to fit your calendar
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-[#C9A54E] mb-4">
                    <CheckCircle size={64} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your consultation request has been received. One of our
                    specialists will contact you within 1 business day.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#C9A54E] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C9A54E] focus:border-[#C9A54E] outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C9A54E] focus:border-[#C9A54E] outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C9A54E] focus:border-[#C9A54E] outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C9A54E] focus:border-[#C9A54E] outline-none"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      How can we help you? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C9A54E] focus:border-[#C9A54E] outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C9A54E] hover:bg-[#b08f3d] text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Request Consultation"}
                  </button>
                  <p className="text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy.
                    We'll never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
