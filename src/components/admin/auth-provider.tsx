"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type User = {
  id: string;
  email: string;
  name: string;
  role: "admin" | "editor" | "author";
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Check for existing auth on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem("admin-user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Failed to restore auth state:", error);
        localStorage.removeItem("admin-user");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Handle redirects based on auth state
  useEffect(() => {
    if (isLoading) return;

    // If on login page but already logged in, redirect to admin
    if (pathname === "/admin/login" && user) {
      router.push("/admin");
      return;
    }

    // If on admin page but not logged in, redirect to login
    if (
      pathname?.startsWith("/admin") &&
      pathname !== "/admin/login" &&
      !user
    ) {
      router.push("/admin/login");
      return;
    }
  }, [user, isLoading, pathname, router]);

  const login = async (email: string, password: string) => {
    try {
      // For demo purposes, hardcode the credentials
      if (email === "admin@schapira.com" && password === "XyZZ$$!!") {
        const newUser = {
          id: "1",
          email,
          name: "Admin User",
          role: "admin" as const,
        };

        // Store in localStorage
        localStorage.setItem("admin-user", JSON.stringify(newUser));
        setUser(newUser);

        return { success: true };
      }

      return { success: false, error: "Invalid credentials" };
    } catch (error) {
      console.error("Login error:", error);
      // Ensure we return a string error message
      return {
        success: false,
        error: error instanceof Error ? error.message : "Authentication failed",
      };
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("admin-user");
      setUser(null);
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
