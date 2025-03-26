"use client";

import type React from "react";

import { useState } from "react";
import { Search, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import type { SEOAnalysis } from "@/lib/admin/types";
import { analyzeContentSEO } from "@/app/admin/actions";

export default function SEOAnalysisPage() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    setIsAnalyzing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("title", title);
      formData.append("metaDescription", metaDescription);
      formData.append("keywords", keywords);

      const result = await analyzeContentSEO(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setAnalysis(result.analysis);
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
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">SEO Analysis</h1>
        <p className="text-gray-600">
          Analyze and optimize your content for search engines
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                Content Analysis
              </h2>
            </div>
            <form onSubmit={handleAnalyze}>
              <div className="p-4 space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    {title.length} / 60 characters
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="metaDescription"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Meta Description
                  </label>
                  <textarea
                    id="metaDescription"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    required
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    {metaDescription.length} / 160 characters
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="keywords"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Keywords (comma separated)
                  </label>
                  <input
                    type="text"
                    id="keywords"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Content
                  </label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    rows={10}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isAnalyzing}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    {isAnalyzing ? "Analyzing..." : "Analyze SEO"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div>
          {analysis ? (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">
                    Analysis Results
                  </h2>
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-700 mr-2">
                      Score:
                    </div>
                    <div className="text-sm font-medium text-blue-600">
                      {analysis.score}/100
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    SEO Score
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        analysis.score >= 80
                          ? "bg-green-600"
                          : analysis.score >= 50
                            ? "bg-yellow-600"
                            : "bg-red-600"
                      }`}
                      style={{ width: `${analysis.score}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Readability Score
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        analysis.readabilityScore >= 80
                          ? "bg-green-600"
                          : analysis.readabilityScore >= 50
                            ? "bg-yellow-600"
                            : "bg-red-600"
                      }`}
                      style={{ width: `${analysis.readabilityScore}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Keyword Density
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(analysis.keywordDensity).map(
                      ([keyword, density]) => (
                        <div
                          key={keyword}
                          className="flex items-center justify-between"
                        >
                          <div className="text-sm text-gray-700">{keyword}</div>
                          <div className="text-sm font-medium text-gray-900">
                            {density.toFixed(2)}%
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Suggestions
                  </h3>
                  <ul className="space-y-2">
                    {analysis.suggestions.map((suggestion, index) => (
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
          ) : (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium text-gray-900">
                  Analysis Results
                </h2>
              </div>
              <div className="p-12 text-center">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No analysis yet
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Fill out the form and click "Analyze SEO" to get started.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
