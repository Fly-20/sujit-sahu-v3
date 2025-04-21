import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter3() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={3}>
      <p className="text-gray-600 mb-6">
      The basic concepts of probability are introduced in this chapter. Elementary methods of counting, the number of permutations and the number of combinations are introduced and illustrated. Elementary methods for calculating probabilities are discussed and the general urn problem in probability is defined.
      </p>

      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap3images/A1B1.png"
          alt="A1B1 Diagram"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap3images/A2B2.png"
          alt="A2B2 Diagram"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap3images/AtoB.png"
          alt="A to B Transition"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap3images/ED.png"
          alt="ED Diagram"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap3images/urn_model.png"
          alt="Urn Model"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
