import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter3() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={3}>
      
      <p className="text-gray-600 mb-6">
      This chapter emphasizes the need to carry out Exploratory Data Analysis (EDA) before embarking on any modeling endeavor. EDA techniques introduced include non-spatial techniques such as histogram, pairwise scatter plots; spatial methods such as variogram and Kriging; and temporal exploration such as time series plots. In particular, the chapter explores the following four data sets which are provided in the bmstdr package.
      nyspatial : point referenced spatial air pollution data from New York,
      nysptime: point referenced spatio-temporal air pollution data from New York,
      engtotals: areal unit data on Covid-19 mortality in England,
      engdeaths: areal unit weekly temporal data on Covid-19 mortality in England,
      Familiarity of these data sets is crucial for understanding the modeling performed in the later chapters.

      R code for reproducing the examples in Chapter 3.
       </p>
       <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap3images/england_jsa_dec_2019.png" alt="england_jsa_dec_2019.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/boxplots_sptime.png" alt="boxplots_sptime.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/covd_and_socio.png" alt="covd_and_socio.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/endeaths_socio_eco.png" alt="endeaths_socio_eco.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/eng_boxplot_case_rate.png" alt="eng_boxplot_case_rate.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/england_case_rate.png" alt="england_case_rate.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/england_case_smr.png" alt="england_case_smr.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/england_house_price_mar_2020.png" alt="england_house_price_mar_2020.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/hist_nyspatial.png" alt="hist_nyspatial.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/kriged_ny.png" alt="kriged_ny.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/log_pop_density.png" alt="log_pop_density.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/mean_no2_by_LA.png" alt="mean_no2_by_LA.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/mean_variance_nysptime.png" alt="mean_variance_nysptime.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/no2_boxplots.png" alt="no2_boxplots.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/nysptime_edaplots.png" alt="nysptime_edaplots.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/pairs_nyspatial.png" alt="pairs_nyspatial.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/smr_covid_death.png" alt="smr_covid_death.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/sptDyn_dynamic_effects.png" alt="sptDyn_dynamic_effects.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/sptDyn_spat_effects.png" alt="sptDyn_spat_effects.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/sqrto3_v_maxtemp_nysptime.png" alt="sqrto3_v_maxtemp_nysptime.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/sqrto3_v_rh_nysptime.png" alt="sqrto3_v_rh_nysptime.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/sqrto3_v_wdsp_nysptime.png" alt="sqrto3_v_wdsp_nysptime.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/target_importance.png" alt="target_importance.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/timeseriesplot_nysptime.png" alt="timeseriesplot_nysptime.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/validation_time_series.png" alt="validation_time_series.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap3images/variogram_nyspatial.png" alt="variogram_nyspatial.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>

    </ChapterLayout>
  );
}
