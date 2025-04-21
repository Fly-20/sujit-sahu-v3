import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter6() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={6}>
      
      <p className="text-gray-600 mb-6">
      This chapter introduces the general topic of practical Bayesian modeling and discusses its advantages over procedure based methods. The chapter discusses theoretical results for a simple linear regression model and also for a spatial model with known correlation parameter for point referenced data. These `exactly' computable models are treated as the starting straw models in the subsequent model comparison exercises. More advanced models, e.g., with nugget effects and unknown spatial correlation, for point referenced spatial data are then introduced and their implementations using the packages spBayes, rstan, INLA are discussed. Introductions are provided for writing code from scratch with these packages. The bmstdr package command Bspatial for fitting using any of these packages, without the need to write package specific code, is introduced and illustrated. This chapter also defines the ideas of model validation using four important statistics: root mean square error, mean absolute error, continuous ranked probability score and coverage. All these statistics are illustrated using the nyspatial data set.

      R code for reproducing the examples in Chapter 6.
       </p>
       <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap6images/validation_plot_BCG_spTimer.png" alt="validation_plot_BCG_spTimer.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/ppc_sp.png" alt="ppc_sp.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/ppc_sp_max.png" alt="ppc_sp_max.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/ny_triangulation.png" alt="ny_triangulation.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/M2_resid_v_obsn.png" alt="M2_resid_v_obsn.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/M2_fitv_resid.png" alt="M2_fitv_resid.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/M1_fitv_resid.png" alt="M1_fitv_resid.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/lm_prop_ge50.png" alt="lm_prop_ge50.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/lm_pred_check.png" alt="lm_pred_check.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/fold3_obs_v_pred_nydata.png" alt="fold3_obs_v_pred_nydata.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/8_validation_sites_nydata.png" alt="8_validation_sites_nydata.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap6images/3_validation_sites_nydata.png" alt="3_validation_sites_nydata.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>

    </ChapterLayout>
  );
}
