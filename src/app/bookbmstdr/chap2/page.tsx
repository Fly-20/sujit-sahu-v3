import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter2() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={2}>
      
      <p className="text-gray-600 mb-6">
      This chapter introduces the main keywords and concepts we often encounter in spatial and spatio-temporal modeling. Written from a beginner reader’s point of view, it explains the basic concepts of stochastic processes, stationarity, variogram, isotropy, Matern covariance function, Gaussian Processes, space-time covariance function, Kriging, auto-correlation, Moran’s I and Geary’s C, internal and external standardization, spatial smoothers, CAR models and point processes. Detailed examples are provided to illustrate the concepts. Longer discussions are provided to understand the roles played by the two parameters (decay and smoothness) of a Matern correlation function. For areal unit data the terms internal and external standardization are discussed in detail so that the basic concepts of disease mapping are understood before undertaking the modeling tasks.
       </p>
       <p><a href="/bookbmstdr/chap2/chapter2">R code for reproducing the figures in Chapter 2.</a></p>
       <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image
    src="/bookbmstdr/chap2images/sepnsepcovar.png"
    alt="sepnsepcovar.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap2images/matterncorrandvariog.png"
    alt="matterncorrandvariog.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap2images/maternfields.png"
    alt="maternfields.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap2images/maternvariog.png"
    alt="maternvariog.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap2images/materncorr.png"
    alt="materncorr.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
</div>

    </ChapterLayout>
  );
}
