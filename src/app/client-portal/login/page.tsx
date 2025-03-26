import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";
import BreadcrumbNav from "@/components/navigation/breadcrumb-nav";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Client Portal Login | Schapira CPA",
  description:
    "Secure login to the Schapira CPA client portal. Access your financial documents, tax returns, and communicate with your accounting team.",
  canonical: "/client-portal/login",
  openGraph: {
    images: [
      {
        url: "/images/client-portal-og.jpg",
        width: 1200,
        height: 630,
        alt: "Schapira CPA Client Portal Login",
      },
    ],
  },
});

export default function ClientPortalLoginPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: "Client Portal", href: "/client-portal" },
            { label: "Login", href: "/client-portal/login", isCurrent: true },
          ]}
        />

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-8">
          <div className="bg-gray-800 p-4 flex items-center justify-center">
            <Lock className="h-6 w-6 text-yellow-500 mr-2" />
            <h1 className="text-xl font-bold text-white">
              Client Portal Login
            </h1>
          </div>

          <div className="p-6">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/client-portal/forgot-password"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    New client?
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Contact your account manager for portal access or
                </p>
                <Link
                  href="/contact"
                  className="text-yellow-600 hover:text-yellow-500 font-medium"
                >
                  request information
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              Secure access to your financial documents and communications
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-8 text-center">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Need Help?</h2>
          <p className="text-sm text-gray-600 mb-4">
            If you're having trouble accessing your account, please contact our
            support team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
