import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter9() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={9}>
      
      <p className="text-gray-600 mb-6">
      The topic of forecasting is discussed in this chapter. Several easy to use and scalable forecasting methods are presented for Gaussian data. The first of these is an exact Bayesian method based on the separable spatio-temporal model discussed in Chapter 7. In this case we evaluate the exact forecast estimates from the exact forecasting distribution and illustrate with the nyspitme data set. As an alternative to the exact method, we illustrate with the built-in forecasting method in the spTimer package. We also discuss several forecasting relevant statistics and diagrams such as the hit and false alarm rates, sharpness diagram, probability integral transform diagram and a marginal calibration plot. We compare the forecasting methods using daily ozone pollution data in the eastern United States for a two week period in July 2010.
       </p>
       <p><a href="/bookbmstdr/chap9/chapter9">R code for reproducing the figures in Chapter 9.</a></p>
       <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap9images/ussitesmap.png" alt="ussitesmap.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/ny_sptstanmcp_diagram.png" alt="ny_sptstanmcp_diagram.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/ny_sptimer_Stan_pitdiagram.png" alt="ny_sptimer_Stan_pitdiagram.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/ny_spt_stan_sharpdiagram.png" alt="ny_spt_stan_sharpdiagram.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/ny_sharpdiagram.png" alt="ny_sharpdiagram.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/ny_pitdiagram.png" alt="ny_pitdiagram.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/ny_mcp_diagram.png" alt="ny_mcp_diagram.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/fourstates_sharpness.png" alt="fourstates_sharpness.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/fourstates_rmse_mae.png" alt="fourstates_rmse_mae.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/fourstates_pitdiagram.png" alt="fourstates_pitdiagram.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/fourstates_pitdiagram_2.png" alt="fourstates_pitdiagram_2.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/fourstates_mcp_diagram.png" alt="fourstates_mcp_diagram.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/forecastmapJuly14.png" alt="forecastmapJuly14.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/forecastmapJuly14_sd.png" alt="forecastmapJuly14_sd.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/easrernusforecastrmse.png" alt="easrernusforecastrmse.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap9images/4statesmap.png" alt="4statesmap.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>

    </ChapterLayout>
  );
}
