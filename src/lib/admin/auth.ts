import { cookies } from "next/headers";
import { db } from "./db";
import type { User } from "./types";

// In a real application, you would use a proper JWT library
// This is a simplified version for demonstration purposes
export async function signIn(
  email: string,
  password: string,
): Promise<{ user: User; token: string } | null> {
  // Check if the user exists
  const user = await db.getUserByEmail(email);
  if (!user) return null;

  // Check if the password matches the demo password
  if (password !== "XyZZ$$!!") return null;

  // Generate a token (simplified)
  const token = Buffer.from(
    JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role,
      // Add an expiration timestamp
      exp: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
    }),
  ).toString("base64");

  // Set the token in a cookie with proper settings
  cookies().set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", // Changed from 'strict' to 'lax' to allow redirects
    maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
    path: "/",
  });

  return { user, token };
}

export async function signOut(): Promise<void> {
  cookies().delete("auth-token");
}

export async function getCurrentUser(): Promise<User | null> {
  const token = cookies().get("auth-token")?.value;
  if (!token) return null;

  try {
    const payload = JSON.parse(Buffer.from(token, "base64").toString());

    // Check if token is expired
    if (payload.exp && payload.exp < Date.now()) {
      // Token is expired, delete it
      cookies().delete("auth-token");
      return null;
    }

    return await db.getUserById(payload.id);
  } catch (error) {
    // If there's any error parsing the token, delete it
    cookies().delete("auth-token");
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return !!user;
}

export async function hasPermission(
  requiredRole: "admin" | "editor" | "author",
): Promise<boolean> {
  const user = await getCurrentUser();
  if (!user) return false;

  // Role hierarchy: admin > editor > author
  if (user.role === "admin") return true;
  if (user.role === "editor" && requiredRole !== "admin") return true;
  if (user.role === "author" && requiredRole === "author") return true;

  return false;
}
