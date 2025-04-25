"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navigationLinks } from "./navigationLinks";
// @ts-ignore
import { books } from "@/data/books";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  label: string;
  href: string;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ label: string; href: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  // Real search logic: search book and chapter titles
  useEffect(() => {
    if (query.length > 1) {
      const q = query.toLowerCase();
      const found: { label: string; href: string }[] = [];
      // Search navigation links
      navigationLinks.forEach((nav) => {
        if (nav.label.toLowerCase().includes(q)) {
          found.push({ label: nav.label, href: nav.href });
        }
      });
      // Search books and chapters
      Object.entries(books).forEach(([bookId, book]: [string, any]) => {
        if (book.title.toLowerCase().includes(q) || book.fullTitle.toLowerCase().includes(q)) {
          found.push({ label: `Book: ${book.fullTitle}`, href: `/${bookId}` });
        }
        (book.chapters as { title: string }[]).forEach((chapter: { title: string }, idx: number) => {
          if (chapter.title.toLowerCase().includes(q)) {
            found.push({ label: `Chapter: ${chapter.title} (${book.fullTitle})`, href: `/${bookId}/chap${idx+1}` });
          }
        });
      });
      setResults(found);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-xl min-h-[24rem] md:min-h-[36rem] pt-2 pb-6 px-6 relative flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-gray-400 hover:text-gray-600 z-10"
          aria-label="Close search"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <h2 className="text-xl font-semibold mb-2 mt-8 text-gray-800">Search</h2>
        <input
          ref={inputRef}
          type="text"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {results.length === 0 && query.length > 1 && (
            <li className="text-gray-500">No results found.</li>
          )}
          {results.map((result, idx) => (
            <li key={idx}>
              <Link href={result.href} onClick={onClose} className="block py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">
                {result.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
