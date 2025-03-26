import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Edit,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { db } from "@/lib/admin/db";
import { analyzeSEO } from "@/lib/admin/seo";

interface ContentPreviewPageProps {
  params: {
    id: string;
  };
}

export default async function ContentPreviewPage({
  params,
}: ContentPreviewPageProps) {
  const { id } = params;

  const content = await db.getContentById(id);
  if (!content) {
    notFound();
  }

  const categories = await Promise.all(
    content.categoryIds.map(async (id) => await db.getCategoryById(id)),
  );

  const tags = await Promise.all(
    content.tagIds.map(async (id) => await db.getTagById(id)),
  );

  const seoAnalysis = analyzeSEO(
    content.content,
    content.metaTitle || content.title,
    content.metaDescription || content.description,
    content.keywords || [],
  );

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/admin/content"
            className="mr-4 inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Content
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Preview: {content.title}
          </h1>
        </div>
        <Link
          href={`/admin/content/${content.id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Edit className="mr-2 h-4 w-4" />
          Edit Content
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {content.title}
              </h1>
              <div className="text-gray-500 mb-6">{content.description}</div>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                Content Details
              </h2>
            </div>
            <div className="p-4">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        content.status === "published"
                          ? "bg-green-100 text-green-800"
                          : content.status === "scheduled"
                            ? "bg-yellow-100 text-yellow-800"
                            : content.status === "review"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {content.status.charAt(0).toUpperCase() +
                        content.status.slice(1)}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    URL Slug
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{content.slug}</dd>
                </div>
                {content.publishedAt && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Published Date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date(content.publishedAt).toLocaleDateString()}
                    </dd>
                  </div>
                )}
                {content.scheduledAt && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Scheduled Date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date(content.scheduledAt).toLocaleDateString()}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Last Updated
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {new Date(content.updatedAt).toLocaleDateString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Categories
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <div className="flex flex-wrap gap-1">
                      {categories.filter(Boolean).map((category) => (
                        <span
                          key={category?.id}
                          className="px-2 py-1 bg-gray-100 rounded-md text-xs"
                        >
                          {category?.name}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Tags</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <div className="flex flex-wrap gap-1">
                      {tags.filter(Boolean).map((tag) => (
                        <span
                          key={tag?.id}
                          className="px-2 py-1 bg-blue-100 rounded-md text-xs text-blue-800"
                        >
                          {tag?.name}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                SEO Analysis
              </h2>
            </div>
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-medium text-gray-500">
                  SEO Score
                </div>
                <div className="text-sm font-medium text-blue-600">
                  {seoAnalysis.score}/100
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Meta Title
                </div>
                <div className="text-sm text-gray-900 p-2 bg-gray-50 rounded-md">
                  {content.metaTitle || content.title}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {(content.metaTitle || content.title).length} / 60 characters
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Meta Description
                </div>
                <div className="text-sm text-gray-900 p-2 bg-gray-50 rounded-md">
                  {content.metaDescription || content.description}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {(content.metaDescription || content.description).length} /
                  160 characters
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Keywords
                </div>
                <div className="flex flex-wrap gap-1">
                  {content.keywords?.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-2 py-1 bg-gray-100 rounded-md text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">
                  Top Suggestions
                </div>
                <ul className="space-y-2">
                  {seoAnalysis.suggestions
                    .slice(0, 5)
                    .map((suggestion, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
