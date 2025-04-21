import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter10() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={10}>
      <p className="text-gray-600 mb-6">
      This chapter discusses three important methods for point estimation: method of moments, maximum likelihood and Bayesian methods.
      </p>




      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap10images/Lion_cub.jpg"
          alt="Lion Cub"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap10images/betapost.png"
          alt="Beta Posterior Distribution"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap10images/binomlike.png"
          alt="Binomial Likelihood"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap10images/gammapost.png"
          alt="Gamma Posterior Distribution"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap10images/poislike.png"
          alt="Poisson Likelihood"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap10images/prior_posterior.png"
          alt="Prior and Posterior Distributions"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap10images/uniformlike.png"
          alt="Uniform Likelihood"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
