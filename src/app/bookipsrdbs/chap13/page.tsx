import ChapterLayout from '@/components/books/ChapterLayout';

export default function Chapter13() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={13}>
      <p className="text-gray-600 mb-6">
      Chapter 13 starts the Part III of this book on advanced distribution theory and probability. It discusses the moment generating function, cumulant generating function and probability generating function for discrete random variables. The uniqueness theorem for the moment generating function is also stated here to facilitate many proofs in statistical distribution theory.
      </p>
      

    </ChapterLayout>
  );
}
