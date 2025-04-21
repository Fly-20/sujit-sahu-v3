import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter7() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={7}>
      <p className="text-gray-600 mb-6">
      This chapter introduces standard continuous distributions: exponential, normal, gamma and beta. As in Chapter 6, here we find the means and variances and also discuss the R commands for finding various quantities for each distribution.
      </p>




      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap7images/beta_density.png"
          alt="Beta Density Function"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap7images/beta_non.png"
          alt="Beta Non-central Distribution"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap7images/expden.png"
          alt="Exponential Density"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap7images/gamma_density.png"
          alt="Gamma Density Function"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap7images/ndens.png"
          alt="Normal Density"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap7images/nscale.png"
          alt="Normal Scale"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap7images/qnorm_both_sides.png"
          alt="Normal Distribution Both Sides"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap7images/surv2.png"
          alt="Survival Analysis"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap7images/symmetry.png"
          alt="Distribution Symmetry"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
