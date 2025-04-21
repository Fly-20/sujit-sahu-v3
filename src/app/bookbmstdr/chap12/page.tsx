import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter12() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={12}>
      
      <p className="text-gray-600 mb-6">
      This chapter aims to present GP based models for machine learning showing an immediate connection between the GP based regression models presented in the earlier chapters. The chapter highlights the equivalent correspondences between the different terminologies used in the fields of mainstream statistics and data science. For example, estimation (and prediction) is generically termed as 'learning' in data science. The chapter further elaborates and uses these synergies to build bridges between the two fields - more importantly between what has been presented in the earlier chapters of this book and relevant parts of machine learning. The chapter also discusses the use of GP in Bayesian calibration of computer codes.
       </p>
       <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image src="/bookbmstdr/chap12images/LASSO_Fit.png" alt="LASSO_Fit.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <Image src="/bookbmstdr/chap12images/GP_Fit.png" alt="GP_Fit.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
        <Image src="/bookbmstdr/chap12images/DTR_Fit.png" alt="DTR_Fit.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
      </div>
    </ChapterLayout>
  );
}
