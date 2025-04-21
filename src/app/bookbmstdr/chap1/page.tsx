import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter1() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={1}>
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Overview
      </h2>
      
      <p className="text-gray-600 mb-6">
      Chapter 1 introduces the main data sets analyzed in this book. The example data sets are categorized in two broad types: point referenced data and areal unit data. The examples of the first type includes air pollution data from the state of New York, England and Wales and also a sub region in the Eastern United States east of the Mississippi river. Other examples include precipitation volume data from rain-gauges situated in the Hubbard Brook experimental forest in New Hampshire, USA and satellite recorded ocean chlorophyll levels and sea surface temperature and also another one on measurements of ocean temperature and salinity levels from roaming Argo floats in the North Atlantic Ocean. The areal unit data sets include Covid-19 mortality in England, vaccination coverage in Kenya, annual cancer rates in the USA, hospitalization rates in England and child poverty in London. For each data set a map of the study region is drawn and modeling objectives are stated.

R code for reproducing the figures in Chapter 1.
      </p>
      <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image
    src="/bookbmstdr/chap1images/3yave_99_06_base85.png"
    alt="3yave_99_06_base85.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/an4thmax_97_06_base85.png"
    alt="an4thmax_97_06_base85.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/argo_float_locations_deep.png"
    alt="argo_float_locations_deep.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/blank_longhurst.png"
    alt="blank_longhurst.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/covid_death_rate.png"
    alt="covid_death_rate.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap17images/deathrate_weekly_boxplots.png"
    alt="deathrate_weekly_boxplots.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/empty_frame_LA_regions.png"
    alt="empty_frame_LA_regions.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/engwsites.png"
    alt="engwsites.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/london_poverty.png"
    alt="london_poverty.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/Maps1.png"
    alt="Maps1.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/Maps2.png"
    alt="Maps2.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/nysites.png"
    alt="nysites.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/obsd_SMR_10.png"
    alt="obsd_SMR_10.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/Observed_vaccination_rate.png"
    alt="Observed_vaccination_rate.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/raw_covid_death_numbers.png"
    alt="raw_covid_death_numbers.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/smr_eng_boxplot.png"
    alt="smr_eng_boxplot.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/smr_england_07-11.png"
    alt="smr_england_07-11.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/tsplot_poverty.png"
    alt="tsplot_poverty.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/uscancer_rate.png"
    alt="uscancer_rate.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
  <Image
    src="/bookbmstdr/chap1images/uso3sites.png"
    alt="uso3sites.png"
    width={400}
    height={250}
    style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
    className="rounded-lg"
  />
</div>

    </ChapterLayout>
  );
}
