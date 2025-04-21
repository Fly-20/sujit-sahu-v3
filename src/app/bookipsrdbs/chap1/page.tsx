import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter1() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={1}>
      <p className="text-gray-600 mb-6">
      This chapter introduces basic statistics such as the mean, median and mode and standard deviation. It also provides introduction to many motivating data sets which are used as running examples throughout the book. An accessible discussion is also provided to debate issues like: "Lies, damned lies and statistics" and "Figures don't lie but liars can figure."
      </p>
      
      <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap1images/athletes.jpg"
          alt="athletes.jpg"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap1images/cfailbox.png"
          alt="cfailbox.png"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap1images/mediansqueeze.png"
          alt="mediansqueeze.png"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap1images/orderstats.png"
          alt="orderstats.png"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap1images/shipman_colour.png"
          alt="shipman_colour.png"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>


    </ChapterLayout>
  );
}
