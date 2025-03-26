"use client";

import type React from "react";

import { useAuth } from "@/components/admin/auth-provider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Image,
  Users,
  Search,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, isLoading } = useAuth();
  const pathname = usePathname();

  // Don't render the admin layout for the login page
  if (pathname === "/admin/login") {
    return children;
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If not authenticated and not on login page, this will be handled by the AuthProvider
  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Schapira CPA</h1>
          <p className="text-sm text-gray-600">Admin Dashboard</p>
        </div>
        <nav className="mt-6">
          <div className="px-4 py-2">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Content
            </p>
            <div className="mt-3 space-y-1">
              <Link
                href="/admin"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${pathname === "/admin" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <LayoutDashboard className="mr-3 h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/content"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${pathname.startsWith("/admin/content") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <FileText className="mr-3 h-4 w-4" />
                Content
              </Link>
              <Link
                href="/admin/media"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${pathname.startsWith("/admin/media") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <Image className="mr-3 h-4 w-4" />
                Media
              </Link>
            </div>
          </div>
          <div className="px-4 py-2 mt-4">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Settings
            </p>
            <div className="mt-3 space-y-1">
              <Link
                href="/admin/users"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${pathname.startsWith("/admin/users") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <Users className="mr-3 h-4 w-4" />
                Users
              </Link>
              <Link
                href="/admin/seo"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${pathname.startsWith("/admin/seo") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <Search className="mr-3 h-4 w-4" />
                SEO
              </Link>
              <Link
                href="/admin/settings"
                className={`flex items-center px-4 py-2 text-sm rounded-md ${pathname.startsWith("/admin/settings") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </Link>
            </div>
          </div>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0) || "A"}
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">
                {user?.name || "Admin User"}
              </p>
              <p className="text-xs text-gray-500">{user?.role || "admin"}</p>
            </div>
            <button
              onClick={logout}
              className="ml-auto p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {pathname === "/admin" && "Dashboard"}
              {pathname.startsWith("/admin/content") && "Content Management"}
              {pathname.startsWith("/admin/media") && "Media Library"}
              {pathname.startsWith("/admin/users") && "User Management"}
              {pathname.startsWith("/admin/seo") && "SEO Tools"}
              {pathname.startsWith("/admin/settings") && "Settings"}
            </h2>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
