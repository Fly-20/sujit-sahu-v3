const fs = require('fs').promises;
const path = require('path');

async function generateChapterData() {
  const books = {
    bookipsrdbs: {
      title: 'Introduction to Probability, Statistics and R',
      chapters: Array.from({ length: 19 }, (_, i) => ({ number: i + 1 })),
    },
    bookbmstdr: {
      title: 'Bayesian Methods for Statistical Analysis',
      chapters: Array.from({ length: 12 }, (_, i) => ({ number: i + 1 })),
    },
  };

  const outputDir = path.join(process.cwd(), 'public', 'data', 'chapters');
  await fs.mkdir(outputDir, { recursive: true });

  for (const [bookId, book] of Object.entries(books)) {
    for (const chapter of book.chapters) {
      try {
        let content;
        const filePath = path.join(
          process.cwd(),
          'src/content/books',
          bookId,
          `chapter${chapter.number}.md`
        );

        try {
          content = await fs.readFile(filePath, 'utf8');
        } catch (readError) {
          // Create placeholder content
          content = `# Chapter ${chapter.number}

This chapter is part of the book "${book.title}". Content will be available soon.

## Overview

This chapter covers important topics and concepts related to ${book.title}. The full content is available in the published book.`;
        }
        
        const outputPath = path.join(outputDir, `${bookId}-${chapter.number}.json`);
        await fs.writeFile(
          outputPath,
          JSON.stringify({ content }),
          'utf8'
        );
        console.log(`Generated content for ${bookId} chapter ${chapter.number}`);
      } catch (error) {
        console.error(`Error processing ${bookId} chapter ${chapter.number}:`, error);
      }
    }
  }
}

generateChapterData().catch(console.error);
