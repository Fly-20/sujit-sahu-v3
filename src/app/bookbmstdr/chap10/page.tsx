import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter10() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={10}>
      
      <p className="text-gray-600 mb-6">
      This chapter discusses Bayesian models for both areal and temporal areal data. As areal unit data are often discrete counts, this chapter first provides a gentle introduction to the generalized linear models (GLM). The linear predictor in the GLM is then allowed to accommodate CAR models for areal only data and then temporally varying CAR models suitable for temporal areal unit data. Several models, such as the BYM model and the Leroux model, based on the CARBayes and CARBayesST packages are discussed. These and a few alternative models based on bespoke code written in INLA are made available through the bmstdr wrapper function Bcartime. Model fitting, comparison and validation are illustrated using the Covid-19 mortality data sets engtotals and engdeaths present in the bmstdr package.


R code for reproducing the examples in Chapter 10.   
       </p>
       <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap10images/weekly_death_rate_fitted.png" alt="weekly_death_rate_fitted.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap10images/M5_residuals.png" alt="M5_residuals.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap10images/link_functions.png" alt="link_functions.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap10images/chap10_temp_resid.png" alt="chap10_temp_resid.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap10images/inlavAR2.png" alt="inlavAR2.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap10images/chap10_spat_resid.png" alt="chap10_spat_resid.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap10images/chap10_spat_resid_sd.png" alt="chap10_spat_resid_sd.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>

    </ChapterLayout>
  );
}
