import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter12() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={12}>
      <p className="text-gray-600 mb-6">
      Chapter 12 discusses testing of statistical hypotheses called null and alternative hypothesis. Definintions of many related keywords, e.g. critical region, types of errors while testing statistical hypothesis, power function, sensitivity and specificity are provided. These are illustrated with the t-test for testing hypothesis regarding the mean of one ir two normal distributions. This chapter ends with a discussion on designs of experiments for estimation and testing purposes.
      </p>


      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap12images/Fig112.png"
          alt="Figure 11.2"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap12images/powerfunctionn.png"
          alt="Power Function N"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap12images/powerfunctiontheta.png"
          alt="Power Function Theta"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap12images/rejection_reg.png"
          alt="Rejection Region"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap12images/t_food_pvalue.png"
          alt="T-test Food P-value"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap12images/tdens1.png"
          alt="T Distribution Density 1"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap12images/tdens2.png"
          alt="T Distribution Density 2"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
