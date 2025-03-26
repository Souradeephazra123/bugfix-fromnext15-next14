const brevity: boolean = true; // Placeholder declaration. Adjust as needed.

export type Role = "admin" | "editor" | "author";

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export interface RolePermission {
  roleId: string;
  permissionId: string;
}

export type ContentStatus =
  | "draft"
  | "review"
  | "scheduled"
  | "published"
  | "archived";

export interface Content {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  status: ContentStatus;
  authorId: string;
  categoryIds: string[];
  tagIds: string[];
  featuredImageId?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  publishedAt?: Date;
  scheduledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContentVersion {
  id: string;
  contentId: string;
  versionNumber: number;
  content: string;
  authorId: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Media {
  id: string;
  filename: string;
  originalFilename: string;
  mimeType: string;
  size: number;
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SEOAnalysis {
  score: number;
  readabilityScore: number;
  keywordDensity: Record<string, number>;
  suggestions: SEOSuggestion[];
}

export interface SEOSuggestion {
  type: "error" | "warning" | "success";
  message: string;
  context?: string;
}
