import { NextResponse } from 'next/server';
import { books } from '@/data/books';

export const dynamic = 'force-static';

type StaticParam = {
  bookId: string;
  chapterId: string;
};

export async function generateStaticParams() {
  const params: StaticParam[] = [];
  for (const [bookId, book] of Object.entries(books)) {
    book.chapters.forEach((chapter, index) => {
      params.push({
        bookId,
        chapterId: (index + 1).toString(),
      });
    });
  }
  return params;
}

export async function GET(
  request: Request,
  { params }: { params: { bookId: string; chapterId: string } }
) {
  try {
    const response = await fetch(
      new URL(`/data/chapters/${params.bookId}-${params.chapterId}.json`, process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001')
    );
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Chapter not found' },
        { status: 404 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading chapter:', error);
    return NextResponse.json(
      { error: 'Failed to read chapter content' },
      { status: 500 }
    );
  }
}
