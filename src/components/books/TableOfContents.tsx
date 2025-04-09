'use client';

import Link from 'next/link';

interface Chapter {
  title: string;
  description?: string;
}

interface TableOfContentsProps {
  chapters: Chapter[];
  bookId: string;
}

export default function TableOfContents({ chapters, bookId }: TableOfContentsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <Link
            key={index}
            href={`/${bookId}/chap${index + 1}`}
            className="block border-b border-gray-100 last:border-0 pb-4 last:pb-0 hover:bg-gray-50 transition-colors rounded-lg p-3 -mx-3"
          >
            <div className="text-blue-600 font-medium text-center">
              Chapter {index + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
