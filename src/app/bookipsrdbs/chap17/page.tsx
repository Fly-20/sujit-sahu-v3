import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter17() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={17}>
      <p className="text-gray-600 mb-6">
      Chapter 17 kicks off Part V of the book on introduction to statistical modelling. It discusses the concepts related to simple regression modelling with many practical examples. The concepts of estimation, inference and predictions are discussed along with the required theoretical derivations. Simultaneously, illustrations are carried along with R code so that the reader can immediately transfer their skills into the practical domain.


      </p>
      
        <Image
          src="/bookipsrdbs/chap17images/corr0.png"
          alt="Correlation 0"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/corr1.png"
          alt="Correlation 1"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/curvature.png"
          alt="Curvature Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/fat_boxplots.png"
          alt="Fat Boxplots"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/fat_scatter.png"
          alt="Fat Scatter Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/hetero.png"
          alt="Heteroscedasticity Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/logfat_scatter.png"
          alt="Log Fat Scatter Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/outlier.png"
          alt="Outlier Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/qqplot_bfat.png"
          alt="QQ Plot Body Fat"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/reg_errors.png"
          alt="Regression Errors"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/residsvleverage_bfat.png"
          alt="Residuals vs Leverage Body Fat"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/residvfitted_bfat.png"
          alt="Residuals vs Fitted Body Fat"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/structural.png"
          alt="Structural Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap17images/studentised_bfat.png"
          alt="Studentised Body Fat"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />

    </ChapterLayout>
  );
}
