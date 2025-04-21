import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import TableOfContents from '@/components/books/TableOfContents';
import { books } from '@/data/books';
import type { NextPage } from 'next';

const Resources: NextPage = () => {
  const bookId = 'bookipsrdbs';
  const book = books[bookId];

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
              {/* Desktop Table of Contents */}
              <div className="hidden lg:block">
                <TableOfContents chapters={book.chapters} bookId={bookId} />
              </div>

              {/* Mobile Table of Contents Dropdown */}
              <div className="lg:hidden">
                <TableOfContents chapters={book.chapters} bookId={bookId} isMobile={true} />
              </div>
            </div>

            {/* Main content */}
            <div className="lg:w-3/4">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
                <div className="prose max-w-none">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Resources
                  </h1>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 mb-6">
                      Further, resources (e.g. lecture slides) will be published through this page. Please revisit this page later. The data sets discussed in the book are published via the R package
                      <a href="https://cran.r-project.org/web/packages/ipsRdbs/index.html" className="text-blue-600 hover:text-blue-800"> ipsRdbs </a> 
                      available from CRAN. The data files are also available to download from this website as a zip file,
                      <a href="/ipsRdbsdata.zip" className="text-blue-600 hover:text-blue-800"> ipsRdbsdata.zip. </a>
                    </p>

                    <p className="text-gray-600 mb-6">
                      Here are my <a href="statistics_talk.pdf" className="text-blue-600 hover:text-blue-800">statistics</a> and 
                      <a href="research_writing_anatomy.pdf" className="text-blue-600 hover:text-blue-800">research writing slides</a> 
                      for my talk at the Royal Hampshire County Hospital in Winchester on 1st of May 2024.
                    </p>

                    <p className="text-gray-600 mb-6">
                      Here are my <a href="sks_tester_lecture.pdf" className="text-blue-600 hover:text-blue-800">statistics (pdf version)</a> or 
                      <a href="sks_tester_lecture.pptx" className="text-blue-600 hover:text-blue-800">powerpoint slides</a> 
                      for my talk on 8/9/2024.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
