'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useBookPage } from '@/hooks/useBookPage';

interface Chapter {
  title: string;
  description?: string;
}

interface TableOfContentsProps {
  chapters: Chapter[];
  bookId: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapters, bookId }) => {
  const { isOpen, setIsOpen, isMobile, setIsMobile } = useBookPage();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOpen(window.innerWidth >= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
      <button 
        className="w-full flex items-center justify-between text-xl font-semibold text-gray-900 mb-4 focus:outline-none cursor-pointer md:cursor-default"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <span>Table of Contents</span>
        <svg 
          className={`w-6 h-6 transform transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden md:max-h-[2000px] md:opacity-100 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {chapterList}
      </div>
    </div>
  );
};

export default TableOfContents;
