import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter14() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={14}>
      <p className="text-gray-600 mb-6">
      Chapter 14 is devoted to deriving distributions of transformed random variables in one and multiple dimensions. These techniques are used to derive sampling distributions of quantities of statstical interests while sampling from the normal distribution. Three new distributions: chi-squared, t and F are derived and their properties are discussed.
      </p>
      
        <Image
          src="/bookipsrdbs/chap14images/chi2dens.png"
          alt="Chi-square Density"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap14images/decreasing_transform.png"
          alt="Decreasing Transform"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap14images/fdens.png"
          alt="F Distribution Density"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap14images/fdensnon.png"
          alt="F Distribution Non-central"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap14images/increasing_transform.png"
          alt="Increasing Transform"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />

    </ChapterLayout>
  );
}
