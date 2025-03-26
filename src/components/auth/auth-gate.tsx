"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "./login-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface AuthGateProps {
  children: React.ReactNode;
}

export function AuthGate({ children }: AuthGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("auth_token");
      setIsAuthenticated(!!token);
    };

    checkAuth();

    // Listen for storage events (in case user logs in/out in another tab)
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLoginForm(false);
    toast({
      title: "Login successful",
      description: "You now have access to all calculators",
      variant: "default",
    });
  };

  // If still checking auth status
  if (isAuthenticated === null) {
    return <div className="animate-pulse p-8 text-center">Loading...</div>;
  }

  // If authenticated, show children
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // If not authenticated and not showing login form
  if (!showLoginForm) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Access Manufacturing Calculators
        </h3>
        <p className="text-gray-600 mb-6">
          Create a free account or log in to access our specialized
          manufacturing financial calculators.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => setShowLoginForm(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Log In / Create Account
          </Button>
        </div>
      </div>
    );
  }

  // Show login form
  return (
    <LoginForm
      onSuccess={handleLoginSuccess}
      onCancel={() => setShowLoginForm(false)}
    />
  );
}
