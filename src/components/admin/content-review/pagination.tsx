"use client";

import type React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <nav className="flex items-center justify-center mt-4">
      <ul className="flex items-center space-x-2">
        {currentPage > 1 && (
          <li>
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query, page: currentPage - 1 },
              }}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Previous
            </Link>
          </li>
        )}

        {generatePageNumbers().map((pageNumber) => (
          <li key={pageNumber}>
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query, page: pageNumber },
              }}
              className={`px-3 py-2 rounded ${
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {pageNumber}
            </Link>
          </li>
        ))}

        {currentPage < totalPages && (
          <li>
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query, page: currentPage + 1 },
              }}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Next
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
