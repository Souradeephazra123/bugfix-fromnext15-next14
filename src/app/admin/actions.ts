"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/admin/db";
import {
  signIn,
  signOut,
  getCurrentUser,
  hasPermission,
} from "@/lib/admin/auth";
import { analyzeSEO } from "@/lib/admin/seo";
import type { Content, ContentStatus } from "@/lib/admin/types";

// Authentication actions
export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  try {
    const result = await signIn(email, password);
    if (!result) {
      return { success: false, error: "Invalid credentials" };
    }

    // Don't use redirect here, let the client handle it
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: "Authentication failed. Please try again.",
    };
  }
}

export async function logout() {
  await signOut();
  redirect("/admin/login");
}

// User actions
export async function getUsers() {
  const isAuthorized = await hasPermission("admin");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  return { users: await db.getUsers() };
}

export async function createUser(formData: FormData) {
  const isAuthorized = await hasPermission("admin");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as "admin" | "editor" | "author";

  if (!email || !name || !role) {
    return { error: "All fields are required" };
  }

  const existingUser = await db.getUserByEmail(email);
  if (existingUser) {
    return { error: "User with this email already exists" };
  }

  const user = await db.createUser({ email, name, role });
  revalidatePath("/admin/users");
  return { user };
}

export async function updateUser(formData: FormData) {
  const isAuthorized = await hasPermission("admin");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as "admin" | "editor" | "author";

  if (!id || !name || !role) {
    return { error: "All fields are required" };
  }

  const user = await db.updateUser(id, { name, role });
  if (!user) {
    return { error: "User not found" };
  }

  revalidatePath("/admin/users");
  return { user };
}

export async function deleteUser(formData: FormData) {
  const isAuthorized = await hasPermission("admin");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  if (!id) {
    return { error: "User ID is required" };
  }

  const success = await db.deleteUser(id);
  if (!success) {
    return { error: "User not found" };
  }

  revalidatePath("/admin/users");
  return { success };
}

// Content actions
export async function getContents(status?: ContentStatus) {
  const isAuthorized = await hasPermission("author");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const filters: Partial<Content> = {};
  if (status) {
    filters.status = status;
  }

  const currentUser = await getCurrentUser();
  if (currentUser?.role === "author") {
    filters.authorId = currentUser.id;
  }

  return { contents: await db.getContents(filters) };
}

export async function getContentById(id: string) {
  const isAuthorized = await hasPermission("author");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const content = await db.getContentById(id);
  if (!content) {
    return { error: "Content not found" };
  }

  // Check if the user has permission to view this content
  const currentUser = await getCurrentUser();
  if (currentUser?.role === "author" && content.authorId !== currentUser.id) {
    return { error: "Unauthorized" };
  }

  return { content };
}

export async function createContent(formData: FormData) {
  const isAuthorized = await hasPermission("author");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as ContentStatus;
  const categoryIds = (formData.getAll("categoryIds") as string[]).filter(
    Boolean,
  );
  const tagIds = (formData.getAll("tagIds") as string[]).filter(Boolean);
  const metaTitle = formData.get("metaTitle") as string;
  const metaDescription = formData.get("metaDescription") as string;
  const keywords = (formData.get("keywords") as string)
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  const scheduledAt = formData.get("scheduledAt")
    ? new Date(formData.get("scheduledAt") as string)
    : undefined;

  if (!title || !slug || !description || !content || !status) {
    return { error: "Required fields are missing" };
  }

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { error: "Unauthorized" };
  }

  const newContent = await db.createContent({
    title,
    slug,
    description,
    content,
    status,
    authorId: currentUser.id,
    categoryIds,
    tagIds,
    metaTitle,
    metaDescription,
    keywords,
    scheduledAt,
    publishedAt: status === "published" ? new Date() : undefined,
  });

  // Create initial version
  await db.createContentVersion({
    contentId: newContent.id,
    versionNumber: 1,
    content,
    authorId: currentUser.id,
  });

  revalidatePath("/admin/content");
  return { content: newContent };
}

export async function updateContent(formData: FormData) {
  const isAuthorized = await hasPermission("author");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as ContentStatus;
  const categoryIds = (formData.getAll("categoryIds") as string[]).filter(
    Boolean,
  );
  const tagIds = (formData.getAll("tagIds") as string[]).filter(Boolean);
  const metaTitle = formData.get("metaTitle") as string;
  const metaDescription = formData.get("metaDescription") as string;
  const keywords = (formData.get("keywords") as string)
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  const scheduledAt = formData.get("scheduledAt")
    ? new Date(formData.get("scheduledAt") as string)
    : undefined;

  if (!id || !title || !slug || !description || !content || !status) {
    return { error: "Required fields are missing" };
  }

  const existingContent = await db.getContentById(id);
  if (!existingContent) {
    return { error: "Content not found" };
  }

  // Check if the user has permission to update this content
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { error: "Unauthorized" };
  }

  if (
    currentUser.role === "author" &&
    existingContent.authorId !== currentUser.id
  ) {
    return { error: "Unauthorized" };
  }

  // Create a new version if content has changed
  if (existingContent.content !== content) {
    const versions = await db.getContentVersions(id);
    const versionNumber =
      versions.length > 0 ? versions[0].versionNumber + 1 : 1;

    await db.createContentVersion({
      contentId: id,
      versionNumber,
      content,
      authorId: currentUser.id,
    });
  }

  const updatedContent = await db.updateContent(id, {
    title,
    slug,
    description,
    content,
    status,
    categoryIds,
    tagIds,
    metaTitle,
    metaDescription,
    keywords,
    scheduledAt,
    publishedAt:
      status === "published" && !existingContent.publishedAt
        ? new Date()
        : existingContent.publishedAt,
  });

  revalidatePath("/admin/content");
  revalidatePath(`/admin/content/${id}`);
  return { content: updatedContent };
}

export async function deleteContent(formData: FormData) {
  const isAuthorized = await hasPermission("editor");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  if (!id) {
    return { error: "Content ID is required" };
  }

  const existingContent = await db.getContentById(id);
  if (!existingContent) {
    return { error: "Content not found" };
  }

  // Check if the user has permission to delete this content
  const currentUser = await getCurrentUser();
  if (
    currentUser?.role === "author" &&
    existingContent.authorId !== currentUser.id
  ) {
    return { error: "Unauthorized" };
  }

  const success = await db.deleteContent(id);
  if (!success) {
    return { error: "Failed to delete content" };
  }

  revalidatePath("/admin/content");
  return { success };
}

export async function analyzeContentSEO(formData: FormData) {
  const isAuthorized = await hasPermission("author");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const content = formData.get("content") as string;
  const title = formData.get("title") as string;
  const metaDescription = formData.get("metaDescription") as string;
  const keywords = (formData.get("keywords") as string)
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  if (!content || !title || !metaDescription) {
    return { error: "Required fields are missing" };
  }

  const analysis = analyzeSEO(content, title, metaDescription, keywords);
  return { analysis };
}

// Category actions
export async function getCategories() {
  return { categories: await db.getCategories() };
}

export async function createCategory(formData: FormData) {
  const isAuthorized = await hasPermission("editor");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const parentId = formData.get("parentId") as string;

  if (!name || !slug) {
    return { error: "Name and slug are required" };
  }

  const category = await db.createCategory({
    name,
    slug,
    description,
    parentId: parentId || undefined,
  });

  revalidatePath("/admin/categories");
  return { category };
}

export async function updateCategory(formData: FormData) {
  const isAuthorized = await hasPermission("editor");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const parentId = formData.get("parentId") as string;

  if (!id || !name || !slug) {
    return { error: "Required fields are missing" };
  }

  const category = await db.updateCategory(id, {
    name,
    slug,
    description,
    parentId: parentId || undefined,
  });

  if (!category) {
    return { error: "Category not found" };
  }

  revalidatePath("/admin/categories");
  return { category };
}

export async function deleteCategory(formData: FormData) {
  const isAuthorized = await hasPermission("editor");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  if (!id) {
    return { error: "Category ID is required" };
  }

  const success = await db.deleteCategory(id);
  if (!success) {
    return { error: "Category not found" };
  }

  revalidatePath("/admin/categories");
  return { success };
}

// Tag actions
export async function getTags() {
  return { tags: await db.getTags() };
}

export async function createTag(formData: FormData) {
  const isAuthorized = await hasPermission("editor");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;

  if (!name || !slug) {
    return { error: "Name and slug are required" };
  }

  const tag = await db.createTag({ name, slug });

  revalidatePath("/admin/tags");
  return { tag };
}

export async function updateTag(formData: FormData) {
  const isAuthorized = await hasPermission("editor");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;

  if (!id || !name || !slug) {
    return { error: "Required fields are missing" };
  }

  const tag = await db.updateTag(id, { name, slug });
  if (!tag) {
    return { error: "Tag not found" };
  }

  revalidatePath("/admin/tags");
  return { tag };
}

export async function deleteTag(formData: FormData) {
  const isAuthorized = await hasPermission("editor");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  if (!id) {
    return { error: "Tag ID is required" };
  }

  const success = await db.deleteTag(id);
  if (!success) {
    return { error: "Tag not found" };
  }

  revalidatePath("/admin/tags");
  return { success };
}

// Media actions
export async function getMedia() {
  const isAuthorized = await hasPermission("author");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  return { media: await db.getMedia() };
}

export async function uploadMedia(formData: FormData) {
  const isAuthorized = await hasPermission("author");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  // In a real application, you would handle file uploads here
  // For demonstration, we'll create a mock media item
  const file = formData.get("file") as File;
  const alt = formData.get("alt") as string;
  const caption = formData.get("caption") as string;

  if (!file) {
    return { error: "File is required" };
  }

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { error: "Unauthorized" };
  }

  // Mock media creation
  const media = await db.createMedia({
    filename: `${Date.now()}-${file.name}`,
    originalFilename: file.name,
    mimeType: file.type,
    size: file.size,
    url: "/placeholder.svg?height=400&width=600",
    width: 600,
    height: 400,
    alt,
    caption,
    authorId: currentUser.id,
  });

  revalidatePath("/admin/media");
  return { media };
}

export async function deleteMedia(formData: FormData) {
  const isAuthorized = await hasPermission("author");
  if (!isAuthorized) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  if (!id) {
    return { error: "Media ID is required" };
  }

  const media = await db.getMediaById(id);
  if (!media) {
    return { error: "Media not found" };
  }

  // Check if the user has permission to delete this media
  const currentUser = await getCurrentUser();
  if (currentUser?.role === "author" && media.authorId !== currentUser.id) {
    return { error: "Unauthorized" };
  }

  const success = await db.deleteMedia(id);
  if (!success) {
    return { error: "Failed to delete media" };
  }

  revalidatePath("/admin/media");
  return { success };
}
