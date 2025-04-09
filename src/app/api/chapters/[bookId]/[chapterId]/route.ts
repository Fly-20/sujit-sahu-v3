import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { books } from '@/data/books';

export async function GET(
  request: Request,
  { params }: { params: { bookId: string; chapterId: string } }
) {
  try {
    // Validate book and chapter exist
    const book = books[params.bookId];
    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    const chapterIndex = parseInt(params.chapterId) - 1;
    const chapter = book.chapters[chapterIndex];
    if (!chapter) {
      return NextResponse.json(
        { error: 'Chapter not found' },
        { status: 404 }
      );
    }

    // Read chapter content
    const filePath = path.join(
      process.cwd(),
      'src/content/books',
      params.bookId,
      `chapter${params.chapterId}.md`
    );
    const content = await fs.readFile(filePath, 'utf8');
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading chapter:', error);
    return NextResponse.json(
      { error: 'Failed to read chapter content' },
      { status: 500 }
    );
  }
}
