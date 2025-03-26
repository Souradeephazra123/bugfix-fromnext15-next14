"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Clock,
  ExternalLink,
  Edit,
  Save,
  MessageSquare,
  CheckSquare,
  Square,
} from "lucide-react";

// Content review status types
type ReviewStatus = "pending" | "approved" | "needs-revision";

// Content item interface
interface ContentItem {
  id: string;
  title: string;
  path: string;
  lastUpdated: string;
  status: ReviewStatus;
  type: "page" | "blog" | "service" | "calculator";
  priority: "high" | "medium" | "low";
  content?: string;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
  checklist?: {
    id: string;
    text: string;
    checked: boolean;
  }[];
  comments?: {
    id: string;
    author: string;
    date: string;
    text: string;
  }[];
}

// Sample content items for review (expanded with more details)
const contentItemsData: Record<string, ContentItem> = {
  "1": {
    id: "1",
    title: "Homepage",
    path: "/",
    lastUpdated: "2023-11-15",
    status: "pending",
    type: "page",
    priority: "high",
    content:
      "The homepage features a hero section with a call to action, services overview, testimonials, and a contact form.",
    seo: {
      title: "Schapira CPA - Financial Services & Tax Planning",
      description:
        "Expert financial services, tax planning, and business advisory from Schapira CPA. Personalized solutions for individuals and businesses.",
      keywords: [
        "CPA",
        "tax planning",
        "financial services",
        "accounting",
        "business advisory",
      ],
    },
    checklist: [
      { id: "c1-1", text: "Content is accurate and up-to-date", checked: true },
      { id: "c1-2", text: "All links are working properly", checked: false },
      { id: "c1-3", text: "Images have appropriate alt text", checked: true },
      {
        id: "c1-4",
        text: "Call-to-action is clear and prominent",
        checked: true,
      },
      { id: "c1-5", text: "Mobile responsiveness is optimal", checked: false },
      {
        id: "c1-6",
        text: "SEO metadata is properly configured",
        checked: true,
      },
    ],
    comments: [
      {
        id: "cm1-1",
        author: "Sarah Johnson",
        date: "2023-11-14",
        text: "The hero section looks great, but we should update the testimonials with more recent ones from our clients.",
      },
      {
        id: "cm1-2",
        author: "Michael Chen",
        date: "2023-11-15",
        text: "I noticed the contact form submission isn't working correctly on mobile devices. Can we fix this before approval?",
      },
    ],
  },
  "2": {
    id: "2",
    title: "Tax Planning Services",
    path: "/services/tax-planning",
    lastUpdated: "2023-11-10",
    status: "needs-revision",
    type: "service",
    priority: "high",
    content:
      "This page details our tax planning services, including individual and business tax strategies, tax compliance, and IRS representation.",
    seo: {
      title: "Tax Planning Services | Schapira CPA",
      description:
        "Comprehensive tax planning services for individuals and businesses. Minimize tax liability and maximize savings with Schapira CPA.",
      keywords: [
        "tax planning",
        "tax strategy",
        "tax compliance",
        "IRS representation",
        "tax services",
      ],
    },
    checklist: [
      {
        id: "c2-1",
        text: "Service descriptions are clear and detailed",
        checked: true,
      },
      {
        id: "c2-2",
        text: "Benefits to clients are highlighted",
        checked: true,
      },
      {
        id: "c2-3",
        text: "Process explanation is comprehensive",
        checked: false,
      },
      {
        id: "c2-4",
        text: "Case studies or examples are included",
        checked: false,
      },
      { id: "c2-5", text: "Call-to-action is present", checked: true },
      {
        id: "c2-6",
        text: "Content is free of jargon or explained clearly",
        checked: false,
      },
    ],
    comments: [
      {
        id: "cm2-1",
        author: "David Schapira",
        date: "2023-11-09",
        text: "We need to update the tax planning strategies section with the latest tax code changes from the IRS.",
      },
      {
        id: "cm2-2",
        author: "Emily Rodriguez",
        date: "2023-11-10",
        text: "The page is missing information about our tax planning process. We should add a step-by-step breakdown of how we work with clients.",
      },
    ],
  },
  "3": {
    id: "3",
    title: "Business Valuation",
    path: "/services/business-valuation",
    lastUpdated: "2023-11-05",
    status: "approved",
    type: "service",
    priority: "medium",
    content:
      "Our business valuation services help clients understand the true value of their business for sales, acquisitions, succession planning, or dispute resolution.",
    seo: {
      title: "Business Valuation Services | Schapira CPA",
      description:
        "Expert business valuation services for sales, acquisitions, succession planning, and more. Get an accurate assessment of your business value.",
      keywords: [
        "business valuation",
        "company valuation",
        "business worth",
        "valuation services",
        "acquisition valuation",
      ],
    },
    checklist: [
      {
        id: "c3-1",
        text: "Valuation methodologies are explained",
        checked: true,
      },
      {
        id: "c3-2",
        text: "Benefits of professional valuation are clear",
        checked: true,
      },
      { id: "c3-3", text: "Industries served are listed", checked: true },
      {
        id: "c3-4",
        text: "Credentials and expertise are highlighted",
        checked: true,
      },
      { id: "c3-5", text: "Case studies demonstrate value", checked: true },
      {
        id: "c3-6",
        text: "FAQ section addresses common questions",
        checked: true,
      },
    ],
    comments: [
      {
        id: "cm3-1",
        author: "David Schapira",
        date: "2023-11-04",
        text: "This page looks excellent. The case studies really help demonstrate our expertise in business valuation.",
      },
      {
        id: "cm3-2",
        author: "Sarah Johnson",
        date: "2023-11-05",
        text: "Approved! The content is comprehensive and the layout makes complex information easy to understand.",
      },
    ],
  },
  "4": {
    id: "4",
    title: "Manufacturing Valuation",
    path: "/resources/manufacturing-valuation",
    lastUpdated: "2023-11-01",
    status: "pending",
    type: "page",
    priority: "medium",
    content:
      "This resource page provides detailed information about manufacturing business valuation, including industry-specific considerations, valuation methods, and case studies.",
    seo: {
      title: "Manufacturing Business Valuation Guide | Schapira CPA",
      description:
        "Comprehensive guide to manufacturing business valuation. Learn about industry-specific factors, valuation methods, and maximizing your manufacturing business value.",
      keywords: [
        "manufacturing valuation",
        "factory valuation",
        "manufacturing business worth",
        "industrial valuation",
        "plant valuation",
      ],
    },
    checklist: [
      {
        id: "c4-1",
        text: "Industry-specific factors are addressed",
        checked: true,
      },
      {
        id: "c4-2",
        text: "Valuation methods are explained clearly",
        checked: true,
      },
      {
        id: "c4-3",
        text: "Case studies are relevant and detailed",
        checked: false,
      },
      {
        id: "c4-4",
        text: "Graphics and visuals enhance understanding",
        checked: false,
      },
      { id: "c4-5", text: "Content is technically accurate", checked: true },
      { id: "c4-6", text: "References and sources are cited", checked: true },
    ],
    comments: [
      {
        id: "cm4-1",
        author: "Michael Chen",
        date: "2023-10-31",
        text: "The content is solid, but we should add more visual elements to break up the text and illustrate key concepts.",
      },
      {
        id: "cm4-2",
        author: "Emily Rodriguez",
        date: "2023-11-01",
        text: "Can we add a downloadable checklist for manufacturing business owners to help them prepare for a valuation?",
      },
    ],
  },
};

// Status badge component
function StatusBadge({ status }: { status: ReviewStatus }) {
  switch (status) {
    case "approved":
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <CheckCircle className="mr-1 h-3 w-3" />
          Approved
        </span>
      );
    case "needs-revision":
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <AlertCircle className="mr-1 h-3 w-3" />
          Needs Revision
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <Clock className="mr-1 h-3 w-3" />
          Pending Review
        </span>
      );
  }
}

// Priority badge component
function PriorityBadge({ priority }: { priority: ContentItem["priority"] }) {
  const colors = {
    high: "bg-red-50 text-red-700 border-red-200",
    medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
    low: "bg-green-50 text-green-700 border-green-200",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded border ${colors[priority]}`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
}

export default function ContentReviewDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // Get content item data
  const item = contentItemsData[id];

  // State for checklist items
  const [checklist, setChecklist] = useState(item?.checklist || []);

  // State for comments
  const [comments, setComments] = useState(item?.comments || []);
  const [newComment, setNewComment] = useState("");

  // State for content status
  const [status, setStatus] = useState<ReviewStatus>(item?.status || "pending");

  // Handle checklist item toggle
  const toggleChecklistItem = (itemId: string) => {
    setChecklist(
      checklist.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  // Handle adding a new comment
  const addComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: `cm${id}-${comments.length + 1}`,
      author: "David Schapira", // Hardcoded for demo
      date: new Date().toISOString().split("T")[0],
      text: newComment,
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  // Handle status change
  const updateStatus = (newStatus: ReviewStatus) => {
    setStatus(newStatus);
  };

  // If item not found
  if (!item) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Content Item Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The content item you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/admin/content-review"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Content Review
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header with back button and actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link
            href="/admin/content-review"
            className="mr-4 p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{item.title}</h1>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <span>{item.path}</span>
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center text-primary hover:text-primary-dark"
              >
                View <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => updateStatus("approved")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center ${
              status === "approved"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <CheckCircle className="mr-1.5 h-4 w-4" />
            Approve
          </button>
          <button
            onClick={() => updateStatus("needs-revision")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center ${
              status === "needs-revision"
                ? "bg-red-100 text-red-800 border border-red-200"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <AlertCircle className="mr-1.5 h-4 w-4" />
            Request Revision
          </button>
          <button className="px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center bg-primary text-white hover:bg-primary-dark">
            <Save className="mr-1.5 h-4 w-4" />
            Save Review
          </button>
        </div>
      </div>

      {/* Content metadata */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Content Details
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Content Type
              </dt>
              <dd className="mt-1 text-sm text-gray-900 capitalize">
                {item.type}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Last Updated
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{item.lastUpdated}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Priority</dt>
              <dd className="mt-1">
                <PriorityBadge priority={item.priority} />
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1">
                <StatusBadge status={status} />
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Content Summary
          </h2>
          <p className="text-gray-700 mb-4">{item.content}</p>

          <h3 className="text-md font-medium text-gray-900 mb-2">
            SEO Metadata
          </h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Title</dt>
              <dd className="mt-1 text-sm text-gray-900">{item.seo?.title}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {item.seo?.description}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Keywords</dt>
              <dd className="mt-1 flex flex-wrap gap-1">
                {item.seo?.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Review checklist */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Content Review Checklist
          </h2>
          <span className="text-sm text-gray-500">
            {checklist.filter((item) => item.checked).length} of{" "}
            {checklist.length} complete
          </span>
        </div>
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item.id} className="flex items-start">
              <button
                onClick={() => toggleChecklistItem(item.id)}
                className="flex-shrink-0 mt-0.5 mr-2 text-gray-400 hover:text-primary focus:outline-none"
              >
                {item.checked ? (
                  <CheckSquare className="h-5 w-5 text-primary" />
                ) : (
                  <Square className="h-5 w-5" />
                )}
              </button>
              <span
                className={`text-sm ${item.checked ? "text-gray-500 line-through" : "text-gray-900"}`}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t">
          <button className="text-sm text-primary hover:text-primary-dark inline-flex items-center">
            <Edit className="mr-1 h-4 w-4" />
            Add Custom Checklist Item
          </button>
        </div>
      </div>

      {/* Comments section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Review Comments
        </h2>

        <div className="space-y-4 mb-6">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-sm italic">No comments yet.</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-gray-900">
                    {comment.author}
                  </span>
                  <span className="text-xs text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700 text-sm">{comment.text}</p>
              </div>
            ))
          )}
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Add a Comment
          </label>
          <textarea
            id="comment"
            rows={3}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Enter your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <div className="mt-2 flex justify-end">
            <button
              onClick={addComment}
              disabled={!newComment.trim()}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageSquare className="inline-block mr-1.5 h-4 w-4" />
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
