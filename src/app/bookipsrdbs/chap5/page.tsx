import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter5() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={5}>
      <p className="text-gray-600 mb-6">
      Chapter 5 defines the random variables and their probability distributions. Many properties such as mean, variance, and quantiles of random variables are also defined here. Laws for expectations and variances of linear functions of random variables are also discussed.
      </p>




      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap5images/cdf.png"
          alt="Cumulative Distribution Function"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap5images/density.png"
          alt="Probability Density Function"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap5images/p78ex6.png"
          alt="Example 6 from Page 78"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap5images/pmf_illustrate.png"
          alt="PMF Illustration"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap5images/randomvar.png"
          alt="Random Variable Concept"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap5images/rv_mapping.png"
          alt="Random Variable Mapping"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
