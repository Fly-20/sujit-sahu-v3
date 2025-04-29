import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter16() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={16}>
      <p className="text-gray-600 mb-6">
      Chapter 16 discusses asymptotic theories which are often required to guarantee good properties of statistical inference techniques. Three types of modes of convergence in statistics are discussed and illustrated with the help of simulation using R routines. Large sample properties of the maximum likelihood estimators are stated and so are the laws of large numbers.
      </p>
      <p>See the <a href="/bookipsrdbs/chap16/chapter16"> Chapter 16 code and output file for the R illustrations provided in this chapter.</a></p>
        <Image
          src="/bookipsrdbs/chap16images/clt_cdf.png"
          alt="Central Limit Theorem CDF"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap16images/clt_histo.png"
          alt="Central Limit Theorem Histogram"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap16images/fig_wlln.png"
          alt="Weak Law of Large Numbers"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
    </ChapterLayout>
  );
}
