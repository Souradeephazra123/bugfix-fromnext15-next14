"use client";

import { useState } from "react";
import { Image, Upload, Trash2, Search } from "lucide-react";
import type { Media } from "@/lib/admin/types";
import { getMedia, uploadMedia, deleteMedia } from "@/app/admin/actions";

export default function MediaLibraryPage() {
  const [media, setMedia] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Load media on component mount
  useState(() => {
    async function loadMedia() {
      try {
        const result = await getMedia();
        if (result.error) {
          setError(result.error);
        } else {
          setMedia(result.media || []);
        }
      } catch (err) {
        setError("Failed to load media");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadMedia();
  }, []);

  // Filter media by search query
  const filteredMedia = media.filter(
    (item) =>
      item.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.alt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.caption?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  async function handleUpload(formData: FormData) {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 10;
        });
      }, 300);

      const result = await uploadMedia(formData);

      clearInterval(interval);
      setUploadProgress(100);

      if (result.error) {
        setError(result.error);
      } else if (result.media) {
        setMedia((prev) => [result.media!, ...prev]);
      }
    } catch (err) {
      setError("Failed to upload media");
      console.error(err);
    } finally {
      setTimeout(() => {
        setIsUploading(false);
        setUploadProgress(0);
      }, 500);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this media item?")) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("id", id);

      const result = await deleteMedia(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setMedia((prev) => prev.filter((item) => item.id !== id));
        if (selectedMedia === id) {
          setSelectedMedia(null);
        }
      }
    } catch (err) {
      setError("Failed to delete media");
      console.error(err);
    }
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Media Library
          </h1>
          <p className="text-gray-600">Upload and manage media files</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Media Files</h2>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="p-4">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              ) : filteredMedia.length === 0 ? (
                <div className="text-center py-12">
                  <Image className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No media files
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {searchQuery
                      ? "No results found. Try a different search."
                      : "Upload your first media file to get started."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {filteredMedia.map((item) => (
                    <div
                      key={item.id}
                      className={`relative group rounded-lg overflow-hidden border ${
                        selectedMedia === item.id ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => setSelectedMedia(item.id)}
                    >
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          src={item.url || "/placeholder.svg"}
                          alt={item.alt || item.filename}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item.id);
                          }}
                          className="p-1 bg-red-600 rounded-full text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="p-2 text-xs truncate">
                        {item.filename}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                Upload Media
              </h2>
            </div>
            <div className="p-4">
              <form action={handleUpload}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    File
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file"
                            type="file"
                            className="sr-only"
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="alt"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Alt Text
                  </label>
                  <input
                    type="text"
                    id="alt"
                    name="alt"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="caption"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Caption
                  </label>
                  <input
                    type="text"
                    id="caption"
                    name="caption"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {isUploading && (
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-center mt-1">
                      Uploading... {uploadProgress}%
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isUploading}
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isUploading ? "Uploading..." : "Upload Media"}
                </button>
              </form>
            </div>
          </div>

          {selectedMedia && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium text-gray-900">
                  Media Details
                </h2>
              </div>
              <div className="p-4">
                {(() => {
                  const item = media.find((m) => m.id === selectedMedia);
                  if (!item) return null;

                  return (
                    <div>
                      <div className="mb-4">
                        <img
                          src={item.url || "/placeholder.svg"}
                          alt={item.alt || item.filename}
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                      <dl className="space-y-4">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            Filename
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {item.filename}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            Type
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {item.mimeType}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            Size
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {(item.size / 1024).toFixed(2)} KB
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            Dimensions
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {item.width} × {item.height}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            Alt Text
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {item.alt || "-"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            Caption
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {item.caption || "-"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">
                            URL
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 break-all">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              {item.url}
                            </a>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
