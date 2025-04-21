import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter6() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={6}>
      <p className="text-gray-600 mb-6">
      This chapter introduces the standard discrete distributions: Bernoulli, binomial, Poisson, geometric, hypergeometric and negative binomial. In each case the basic properties, such as mean and variance are obtained and the R commands to obtain probabilities and cumulative probabilities are illustrated.
      </p>

    </ChapterLayout>
  );
}
