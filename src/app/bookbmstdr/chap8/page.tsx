import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function Chapter8() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={8}>
      <p className="text-gray-600 mb-6">
        This chapter showcases spatio-temporal modeling for point referenced data using five practical examples. The examples highlight the practical use of such modeling and extend the methodologies where necessary. The examples build on the basic concepts introduced in the earlier chapters, especially the previous chapter, on spatio-temporal modeling. Click the links below to see the R-code for the examples.
      </p>

      <div className="space-y-8">
        {/* Section 8.1 */}
        <div>
          <p><Link href="/bookbmstdr/chap8/chapter8.2" className="text-blue-600 hover:text-blue-800">1. Estimating annual average air pollution in England and Wales</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '2011_no2_sd.png',
              '2011_no2.png',
              'predgridew.png',
              'insideknots.png',
              'allknotsew.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap8images/${img}`}
                alt={img}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Section 8.2 */}
        <div>
          <p><Link href="/bookbmstdr/chap8/chapter8.5" className="text-blue-600 hover:text-blue-800">2. Assessing probability of non-compliance in air pollution</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'compliance_plot_05.png',
              'compliance_plot_06.png',
              'fitted_3yave_99_06_base85.png',
              'fitted_an4thmax_97_06_base85.png',
              'met_adjusted_3yave_99_06_base85.png',
              'met_adjusted_an4thmax_97_06_base85.png',
              'met_adjusted_3ave_99_05.png',
              'met_adjusted_4thmax_99_05.png',
              'prob03-06.png',
              'prob99-02.png',
              'usagrid_knots.png',
              'uso3sites.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap8images/${img}`}
                alt={img}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Section 8.3 */}
        <div>
          <p><Link href="/bookbmstdr/chap8/chapter8.4" className="text-blue-600 hover:text-blue-800">3. Analyzing precipitation data from the Hubbard Brook Experimental Forest</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '9a.png',
              '9ab.png',
              '9b.png',
              'allpred_rolling_rain2010.png',
              'allpred_rolling_rain2010_sd.png',
              'ann_and_rolling.png',
              'average_annual.png',
              'elevation_hubbardbrook.png',
              'mean_var_log.png',
              'mean_var_orig.png',
              'mean_var_sqrt.png',
              'rain2001_hbes_wshed_sd.png',
              'rain2001_hbes_wshed.png',
              'rain2011_hbes_wshed_sd.png',
              'rain2011_hbes_wshed.png',
              'rain2015_total_sd.png',
              'rolling_rain2010_hbes_wshed.png',
              'rolling_rain2010_hbes.png',
              'rain_hist_orig.png',
              'rain_hist_sqrt.png',
              'rain_v_elevation.png',
              'rain_v_latitude.png',
              'rain_v_long_lat.png',
              'rain_v_longitude.png',
              'rain_mean_vars.png',
              'rainfall_phichoice.png',
              'rain2015_total.png',
              'rainfall_validation.png',
              'rolling_average_annual.png',
              'rolling_rain2010_sd_hbes_wshed.png',
              'rolling_rain2010_sd_hbes.png',
              'trend_rolling_rain_05-15_hbes.png',
              'trend_wshed05-15_sd.png',
              'trend_wshed05-15.png',
              'sd_trend_rolling_rain_05-15_hbes.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap8images/${img}`}
                alt={img}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Section 8.4 */}
        <div>
          <p><Link href="/bookbmstdr/chap8/chapter8.3" className="text-blue-600 hover:text-blue-800">4. Assessing annual trends in ocean chlorophyll levels</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'blank_longhurst_hu2456fed288eff63c5e500691743cb1a9_374327_0x190_resize_q75_h2_lanczos_3.webp',
              'space_trend_longhurst.png',
              'uso3sites.png',
              'temp_deep.png',
              'sd_temp_deep.png',
              'predgridew.png',
              'insideknots.png',
              'allknotsew.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap8images/${img}`}
                alt={img}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Section 8.5 */}
        <div>
          <p><Link href="/bookbmstdr/chap8/chapter8.1" className="text-blue-600 hover:text-blue-800">5. Modeling temperature data from roaming ocean Argo floats</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'argo_float_exploratory_deep.png',
              'argo_float_locations_deep.png',
              'lat_and_lon_v_temp_scatter.png',
              'lat_lon_v_temp_scatter.png',
              'latlon_v_salinity_scatter.png',
              'latlon_v_temp_scatter.png',
              'lon_v_sali_scatter.png',
              'lon_v_temp_scatter.png',
              'lat_v_sali_scatter.png',
              'lat_v_temp_scatter.png',
              'sd_temp_deep.png',
              'temp_deep.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap8images/${img}`}
                alt={img}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-6">
      All the examples illustrate calculation of spatio-temporal statistics, e.g. annual levels from daily observations, trends in annual levels along with their uncertainties. Commentary has been provided to reproduce the results and the online supplement contains the full code.
      </p>
    </ChapterLayout>
  );
}
