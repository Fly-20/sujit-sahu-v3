import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter11() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={11}>
      <p className="text-gray-600 mb-6">
      Chapter 11 discusses techniques such as the pivoting method for interval estimation. The central limit theorem is used to derive confidence intervals for the mean parameters of binomial, Poisson and normal distributions. For the normal distribution we also discuss the exact confidence interval using the t-distribution without actually deriving the sampling distribution of the t-statistic.
      </p>



      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap11images/Fig81.png"
          alt="Figure 8.1"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap11images/lotplot.png"
          alt="Lot Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap11images/tdens.png"
          alt="T Distribution Density"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
