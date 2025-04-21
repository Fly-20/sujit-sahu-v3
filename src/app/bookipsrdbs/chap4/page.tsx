import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter4() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={4}>
      <p className="text-gray-600 mb-6">
      This chapter introduces many advanced laws of probability such as the total probability theorem, conditional probability and the Bayes theorem. The famous Monty Python problem is discussed and illustrated using a simulation tool in R. The concept of independence is discussed and illustrated with many examples such system reliability and randomised response methods.
      </p>




      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap4images/bayes.png"
          alt="Bayes Theorem Illustration"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap4images/condprob2.png"
          alt="Conditional Probability Diagram"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap4images/monty.png"
          alt="Monty Hall Problem"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
