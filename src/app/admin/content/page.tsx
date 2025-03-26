import Link from "next/link";
import {
  PlusCircle,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { db } from "@/lib/admin/db";

export default async function ContentListPage() {
  const contents = await db.getContents();

  // Group contents by status
  const published = contents.filter(
    (content) => content.status === "published",
  );
  const scheduled = contents.filter(
    (content) => content.status === "scheduled",
  );
  const drafts = contents.filter((content) => content.status === "draft");
  const review = contents.filter((content) => content.status === "review");

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Content Management
          </h1>
          <p className="text-gray-600">
            Create, edit, and manage your website content
          </p>
        </div>
        <Link
          href="/admin/content/new"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          New Content
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-4 border-b">
          <h2 className="text-lg font-medium text-gray-900">
            Content Overview
          </h2>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Published
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {published.length}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-yellow-100 text-yellow-600 mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Scheduled
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {scheduled.length}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-3">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Drafts</div>
                <div className="text-2xl font-bold text-gray-900">
                  {drafts.length}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  In Review
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {review.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-medium text-gray-900">All Content</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Updated
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contents.map((content) => (
                <tr key={content.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {content.title}
                    </div>
                    <div className="text-sm text-gray-500">{content.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
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
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(content.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      href={`/admin/content/${content.id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/admin/preview/${content.id}`}
                      className="text-green-600 hover:text-green-900"
                    >
                      Preview
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
