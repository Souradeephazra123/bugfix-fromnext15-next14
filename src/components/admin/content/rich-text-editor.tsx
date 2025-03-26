"use client";

import { useState, useEffect } from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  name?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  id,
  name,
}: RichTextEditorProps) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editor, setEditor] = useState<any>(null);

  useEffect(() => {
    // This is a simplified rich text editor for demonstration
    // In a real application, you would use a proper rich text editor like TinyMCE, CKEditor, etc.
    setEditorLoaded(true);
  }, []);

  if (!editorLoaded) {
    return (
      <div className="border rounded-md p-4 bg-gray-50 h-64 flex items-center justify-center">
        Loading editor...
      </div>
    );
  }

  // Simple toolbar buttons
  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    const content = document.getElementById("editor")?.innerHTML || "";
    onChange(content);
  };

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-gray-50 px-3 py-2 border-b flex flex-wrap gap-1">
        <button
          type="button"
          onClick={() => formatText("bold")}
          className="p-1 rounded hover:bg-gray-200"
          title="Bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => formatText("italic")}
          className="p-1 rounded hover:bg-gray-200"
          title="Italic"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="4" x2="10" y2="4"></line>
            <line x1="14" y1="20" x2="5" y2="20"></line>
            <line x1="15" y1="4" x2="9" y2="20"></line>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => formatText("underline")}
          className="p-1 rounded hover:bg-gray-200"
          title="Underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
            <line x1="4" y1="21" x2="20" y2="21"></line>
          </svg>
        </button>
        <span className="border-r mx-1"></span>
        <button
          type="button"
          onClick={() => formatText("formatBlock", "<h1>")}
          className="p-1 rounded hover:bg-gray-200"
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => formatText("formatBlock", "<h2>")}
          className="p-1 rounded hover:bg-gray-200"
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => formatText("formatBlock", "<h3>")}
          className="p-1 rounded hover:bg-gray-200"
          title="Heading 3"
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => formatText("formatBlock", "<p>")}
          className="p-1 rounded hover:bg-gray-200"
          title="Paragraph"
        >
          P
        </button>
        <span className="border-r mx-1"></span>
        <button
          type="button"
          onClick={() => formatText("insertUnorderedList")}
          className="p-1 rounded hover:bg-gray-200"
          title="Bullet List"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => formatText("insertOrderedList")}
          className="p-1 rounded hover:bg-gray-200"
          title="Numbered List"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="10" y1="6" x2="21" y2="6"></line>
            <line x1="10" y1="12" x2="21" y2="12"></line>
            <line x1="10" y1="18" x2="21" y2="18"></line>
            <path d="M4 6h1v4"></path>
            <path d="M4 10h2"></path>
            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
          </svg>
        </button>
        <span className="border-r mx-1"></span>
        <button
          type="button"
          onClick={() => {
            const url = prompt("Enter link URL");
            if (url) formatText("createLink", url);
          }}
          className="p-1 rounded hover:bg-gray-200"
          title="Insert Link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            const url = prompt("Enter image URL");
            if (url) formatText("insertImage", url);
          }}
          className="p-1 rounded hover:bg-gray-200"
          title="Insert Image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </button>
      </div>
      <div
        id="editor"
        contentEditable
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
        className="p-4 min-h-[200px] focus:outline-none"
      />
    </div>
  );
}
