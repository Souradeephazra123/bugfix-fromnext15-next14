"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  Calendar,
  Tag,
  FolderTree,
  Search,
  Save,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import type {
  Content,
  ContentStatus,
  Category,
  Tag as TagType,
  SEOAnalysis,
} from "@/lib/admin/types";
import {
  createContent,
  updateContent,
  analyzeContentSEO,
} from "@/app/admin/actions";
import dynamic from "next/dynamic";

// Dynamically import the rich text editor to avoid SSR issues
const RichTextEditor = dynamic(() => import("./rich-text-editor"), {
  ssr: false,
  loading: () => (
    <div className="h-64 border rounded-md bg-gray-50 flex items-center justify-center">
      Loading editor...
    </div>
  ),
});

interface ContentEditorProps {
  content?: Content;
  categories: Category[];
  tags: TagType[];
}

export default function ContentEditor({
  content,
  categories,
  tags,
}: ContentEditorProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("content");
  const [title, setTitle] = useState(content?.title || "");
  const [slug, setSlug] = useState(content?.slug || "");
  const [description, setDescription] = useState(content?.description || "");
  const [contentBody, setContentBody] = useState(content?.content || "");
  const [status, setStatus] = useState<ContentStatus>(
    content?.status || "draft",
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    content?.categoryIds || [],
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    content?.tagIds || [],
  );
  const [metaTitle, setMetaTitle] = useState(content?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    content?.metaDescription || "",
  );
  const [keywords, setKeywords] = useState(content?.keywords?.join(", ") || "");
  const [scheduledAt, setScheduledAt] = useState<string>(
    content?.scheduledAt
      ? new Date(content.scheduledAt).toISOString().slice(0, 16)
      : "",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [seoAnalysis, setSeoAnalysis] = useState<SEOAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Generate slug from title
  useEffect(() => {
    if (title && !content) {
      setSlug(
        title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
      );
    }
  }, [title, content]);

  // Auto-generate meta title if not set
  useEffect(() => {
    if (title && !metaTitle) {
      setMetaTitle(title);
    }
  }, [title, metaTitle]);

  // Auto-generate meta description if not set
  useEffect(() => {
    if (description && !metaDescription) {
      setMetaDescription(description);
    }
  }, [description, metaDescription]);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError(null);

    try {
      if (content) {
        formData.append("id", content.id);
        const result = await updateContent(formData);
        if (result.error) {
          setError(result.error);
        } else {
          router.push("/admin/content");
        }
      } else {
        const result = await createContent(formData);
        if (result.error) {
          setError(result.error);
        } else {
          router.push("/admin/content");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleAnalyzeSEO() {
    setIsAnalyzing(true);

    try {
      const formData = new FormData();
      formData.append("content", contentBody);
      formData.append("title", metaTitle || title);
      formData.append("metaDescription", metaDescription);
      formData.append("keywords", keywords);

      const result = await analyzeContentSEO(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setSeoAnalysis(result.analysis);
      }
    } catch (err) {
      setError("Failed to analyze SEO");
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {content ? "Edit Content" : "Create New Content"}
        </h1>
        <p className="text-gray-600">
          {content
            ? "Update your content and settings"
            : "Create new content for your website"}
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <nav className="flex">
            <button
              type="button"
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === "content"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("content")}
            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Content
              </div>
            </button>
            <button
              type="button"
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === "seo"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("seo")}
            >
              <div className="flex items-center">
                <Search className="h-4 w-4 mr-2" />
                SEO
              </div>
            </button>
            <button
              type="button"
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === "categories"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("categories")}
            >
              <div className="flex items-center">
                <FolderTree className="h-4 w-4 mr-2" />
                Categories
              </div>
            </button>
            <button
              type="button"
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === "tags"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("tags")}
            >
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                Tags
              </div>
            </button>
            <button
              type="button"
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === "scheduling"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("scheduling")}
            >
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Scheduling
              </div>
            </button>
          </nav>
        </div>

        <form action={handleSubmit}>
          <div className="p-6">
            {/* Common fields */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="slug"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Slug
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={3}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Tab content */}
            {activeTab === "content" && (
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Content
                </label>
                <RichTextEditor
                  value={contentBody}
                  onChange={setContentBody}
                  id="content"
                  name="content"
                />
                <input type="hidden" name="content" value={contentBody} />
              </div>
            )}

            {activeTab === "seo" && (
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="metaTitle"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Meta Title
                  </label>
                  <input
                    type="text"
                    id="metaTitle"
                    name="metaTitle"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    {metaTitle.length} / 60 characters
                  </p>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="metaDescription"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Meta Description
                  </label>
                  <textarea
                    id="metaDescription"
                    name="metaDescription"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    {metaDescription.length} / 160 characters
                  </p>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="keywords"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Keywords (comma separated)
                  </label>
                  <input
                    type="text"
                    id="keywords"
                    name="keywords"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handleAnalyzeSEO}
                    disabled={isAnalyzing}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze SEO"}
                  </button>
                </div>

                {seoAnalysis && (
                  <div className="mt-6 border rounded-md overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-700">
                          SEO Analysis
                        </h3>
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-700 mr-2">
                            Score:
                          </div>
                          <div className="text-sm font-medium text-blue-600">
                            {seoAnalysis.score}/100
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Suggestions
                        </h4>
                        <ul className="space-y-2">
                          {seoAnalysis.suggestions.map((suggestion, index) => (
                            <li key={index} className="text-sm">
                              <div
                                className={`flex items-start ${
                                  suggestion.type === "success"
                                    ? "text-green-600"
                                    : suggestion.type === "warning"
                                      ? "text-yellow-600"
                                      : "text-red-600"
                                }`}
                              >
                                {suggestion.type === "success" ? (
                                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5" />
                                ) : suggestion.type === "warning" ? (
                                  <AlertTriangle className="h-4 w-4 mr-2 mt-0.5" />
                                ) : (
                                  <XCircle className="h-4 w-4 mr-2 mt-0.5" />
                                )}
                                <span>{suggestion.message}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Keyword Density
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(seoAnalysis.keywordDensity).map(
                            ([keyword, density]) => (
                              <div
                                key={keyword}
                                className="flex items-center justify-between"
                              >
                                <div className="text-sm text-gray-700">
                                  {keyword}
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  {density.toFixed(2)}%
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "categories" && (
              <div>
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700 mb-2">
                    Categories
                  </legend>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <input
                          id={`category-${category.id}`}
                          name="categoryIds"
                          type="checkbox"
                          value={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([
                                ...selectedCategories,
                                category.id,
                              ]);
                            } else {
                              setSelectedCategories(
                                selectedCategories.filter(
                                  (id) => id !== category.id,
                                ),
                              );
                            }
                          }}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={`category-${category.id}`}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            )}

            {activeTab === "tags" && (
              <div>
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </legend>
                  <div className="space-y-2">
                    {tags.map((tag) => (
                      <div key={tag.id} className="flex items-center">
                        <input
                          id={`tag-${tag.id}`}
                          name="tagIds"
                          type="checkbox"
                          value={tag.id}
                          checked={selectedTags.includes(tag.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedTags([...selectedTags, tag.id]);
                            } else {
                              setSelectedTags(
                                selectedTags.filter((id) => id !== tag.id),
                              );
                            }
                          }}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={`tag-${tag.id}`}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {tag.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            )}

            {activeTab === "scheduling" && (
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as ContentStatus)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="review">Review</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                {status === "scheduled" && (
                  <div className="mb-6">
                    <label
                      htmlFor="scheduledAt"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Schedule Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      id="scheduledAt"
                      name="scheduledAt"
                      value={scheduledAt}
                      onChange={(e) => setScheduledAt(e.target.value)}
                      required={status === "scheduled"}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <Save className="mr-2 h-4 w-4" />
              {isSubmitting ? "Saving..." : "Save Content"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
