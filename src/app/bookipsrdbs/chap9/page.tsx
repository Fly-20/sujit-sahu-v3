import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter9() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={9}>
      <p className="text-gray-600 mb-6">
      This chapter introduces the basic concepts of statistical inference and statistical modelling. It distinguishes between population distributions and sample statistics (quantities). The concepts of estimators and their sampling (probability) distributions are also introduced. The properties of bias and mean square errors of estimators and defined.
      </p>




      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap9images/bomb_hits_freq.png"
          alt="Bomb Hits Frequency"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap9images/obs_fitted_freq.png"
          alt="Observed vs Fitted Frequencies"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
