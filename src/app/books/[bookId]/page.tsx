import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { books } from '@/data/books';
import BookFeatureList from '@/components/books/BookFeatureList';
import TableOfContents from '@/components/books/TableOfContents';

export function generateStaticParams() {
  return Object.keys(books).map((bookId) => ({
    bookId,
  }));
}

export default function BookPage({ params }: { params: { bookId: string } }) {
  const { bookId } = params;
  const book = books[bookId];

  if (!book) {
    notFound();
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-4">
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
              Back to Homepage
            </Link>
          </nav>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <TableOfContents chapters={book.chapters} bookId={bookId} />
              </div>

              <div className="lg:w-3/4">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {book.fullTitle}
                </h1>
                <p className="text-gray-600 mb-6 text-lg">
                  It is now possible to order this book from Waterstones, or Barnes & Noble, or foyles bookshops or Amazon.com or Amazon.co.uk in the UK.
                  The book is based on my lecture notes for many courses (modules), for example, Introduction to Probability and Statistics, taught to first and second year students in various BSc in Mathematics degree programmes.
                  Here is a preview pdf file. You may be able to access the book in various different formats through your own institution.
                </p>

                <BookFeatureList features={book.keyFeatures} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
