'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Chapter {
  title: string;
  description?: string;
}

interface TableOfContentsProps {
  chapters: Chapter[];
  bookId: string;
  isMobile?: boolean;
}

export default function TableOfContents({ chapters, bookId, isMobile = false }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const chapterList = (
    <div className="space-y-2">
      {bookId !== 'bookbmstdr' && (
        <Link
          href={`/books/${bookId}`}
          className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={() => isMobile && setIsOpen(false)}
        >
          ipsrdbs
        </Link>
      )}
      {chapters.map((chapter, index) => (
        <Link
          key={index}
          href={`/${bookId}/chap${index + 1}`}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={() => isMobile && setIsOpen(false)}
        >
          {chapter.title}
        </Link>
      ))}
      {bookId !== 'bookbmstdr' && (
        <Link
          href={`/${bookId}/Resources`}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md bg-gray-50"
          onClick={() => isMobile && setIsOpen(false)}
        >
          Resources
        </Link>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <div className="relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-900 bg-white rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span>Table of Contents</span>
          <svg
            className={`ml-2 h-5 w-5 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-2">
            {chapterList}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
      {chapterList}
    </div>
  );
}
