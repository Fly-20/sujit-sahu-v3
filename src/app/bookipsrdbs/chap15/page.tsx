import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter15() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={15}>
      <p className="text-gray-600 mb-6">
      Chapter 15 discusses bivariate and multivariate probability distributions. In particular, it discusses the marginal and conditional distributions associated with bivariate and multivariate normal distributions. It also discusses the joint moment generating function for the multivariate normal distribution. In the discrete case it introduces the multinomial distribution as a generalisation of the binomial distribution.
      </p>

        <Image
          src="/bookipsrdbs/chap15images/n0contours.png"
          alt="N0 Contours"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap15images/n2contour_rho8.png"
          alt="N2 Contour Rho 8"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap15images/n2contours2.png"
          alt="N2 Contours 2"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap15images/ndens.png"
          alt="Normal Density"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap15images/nonhpd_regions.png"
          alt="Non-HPD Regions"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap15images/nscale.png"
          alt="Normal Scale"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />

    </ChapterLayout>
  );
}
