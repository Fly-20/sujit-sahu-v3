import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import TableOfContents from './TableOfContents';
import { books } from '@/data/books';

interface ChapterLayoutProps {
  bookId: string;
  chapterNumber: number;
  children: React.ReactNode;
}

export default function ChapterLayout({ bookId, chapterNumber, children }: ChapterLayoutProps) {
  const book = books[bookId];
  const chapter = book.chapters[chapterNumber - 1];
  const nextChapter = book.chapters[chapterNumber];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 flex items-center space-x-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              href={`/books/${bookId}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {book.title}
            </Link>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar with Table of Contents */}
            <div className="lg:w-1/4">
              <TableOfContents chapters={book.chapters} bookId={bookId} />
            </div>

            {/* Main content */}
            <div className="lg:w-3/4">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
                <div className="prose max-w-none">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {chapter.title}
                  </h1>
                  
                  {children}

                  <div className="flex justify-between mt-12 pt-6 border-t">
                    {chapterNumber > 1 ? (
                      <Link
                        href={`/${bookId}/chap${chapterNumber - 1}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Previous Chapter
                      </Link>
                    ) : (
                      <div></div>
                    )}
                    {nextChapter && (
                      <Link
                        href={`/${bookId}/chap${chapterNumber + 1}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      >
                        Next Chapter: {nextChapter.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
