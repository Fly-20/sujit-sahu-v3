import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter7() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={7}>
      
      <p className="text-gray-600 mb-6">
      This is the main methodological chapter which discusses spatio-temporal modeling for point referenced continuous data. As in the preceding chapter it obtains exact theoretical results for a simple separable spatio-temporal model which serves as the base line for model comparison purposes. More complex models, requiring advanced computation methods, are introduced gradually. Various models such as the independent GP based model, autoregressive model, dynamic model and the Gaussian predictive process based model are fitted and compared using the Bsptime command in the bmstdr package. The user does not need to directly code with the underlying packages such as spTimer, rstan, INLA and spBayes . The nysptime data set is used as a running example to illustrate all the methods.

R code for reproducing the examples in Chapter 7.
       </p>
       <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap7images/validation_plot_BCG_spTimer.png" alt="validation_plot_BCG_spTimer.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/theta_spBayes_dynamic.png" alt="theta_spBayes_dynamic.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/sptDyn_spat_effects.png" alt="sptDyn_spat_effects.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/sptDyn_dynamic_effects.png" alt="sptDyn_dynamic_effects.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/obs_v_pred_stan.png" alt="obs_v_pred_stan.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/predicted_ny.png" alt="predicted_ny.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/sd_predicted_ny.png" alt="sd_predicted_ny.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/obs_v_pred_spTimer.png" alt="obs_v_pred_spTimer.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/M9_residuals.png" alt="M9_residuals.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/M5_residuals.png" alt="M5_residuals.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/M4_residuals.png" alt="M4_residuals.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/M3_obs_v_pred_spTimer.png" alt="M3_obs_v_pred_spTimer.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/knot_sites.png" alt="knot_sites.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/beta_spBayes_dynamic.png" alt="beta_spBayes_dynamic.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap7images/3_validation_sites_nydata.png" alt="3_validation_sites_nydata.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>

    </ChapterLayout>
  );
}
