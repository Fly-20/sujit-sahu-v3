import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { books } from '@/data/books';
import { remark } from 'remark';
import html from 'remark-html';

interface ChapterPageProps {
  params: {
    bookId: string;
    chapterId: string;
  };
}

async function getChapterContent(bookId: string, chapterId: string) {
  try {
    const response = await fetch(`/api/chapters/${bookId}/${chapterId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch chapter content');
    }
    const { content } = await response.json();
    const result = await remark().use(html).process(content);
    return result.toString();
  } catch (error) {
    console.error('Error reading chapter content:', error);
    return '';
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { bookId, chapterId } = params;
  const book = books[bookId];
  if (!book) {
    notFound();
  }

  const chapterIndex = parseInt(chapterId) - 1;
  const chapter = book.chapters[chapterIndex];
  
  if (!chapter) {
    notFound();
  }

  const chapterContent = await getChapterContent(bookId, chapterId);

  const nextChapter = book.chapters[chapterIndex + 1];
  const prevChapter = book.chapters[chapterIndex - 1];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb navigation */}
        <nav className="text-gray-500 mb-8">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600">
              Homepage
            </Link>
            <span className="mx-2">→</span>
            <Link href={`/books/${bookId}`} className="hover:text-blue-600">
              {book.title}
            </Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">
              Chapter {chapterId}: {chapter.title}
            </span>
          </div>
        </nav>

        {/* Chapter content */}
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Chapter {chapterId}: {chapter.title}
            </h1>
            <p className="text-gray-600 mb-8">{chapter.description}</p>
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: chapterContent }} />
            </div>

            {/* Chapter Navigation */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t">
              {prevChapter ? (
                <Link
                  href={`/books/${bookId}/chap${chapterIndex}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous: {prevChapter.title}
                </Link>
              ) : (
                <div></div>
              )}

              {nextChapter ? (
                <Link
                  href={`/books/${bookId}/chap${chapterIndex + 2}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Next: {nextChapter.title}
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
