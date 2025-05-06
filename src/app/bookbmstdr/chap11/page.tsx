import ChapterLayout from '@/components/books/ChapterLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function Chapter11() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={11}>
      <p className="text-gray-600 mb-6">
        Parallel to Chapter 8, this chapter showcases four examples of areal and temporal areal unit data sets. Click the links below to see the R-code for the examples.
      </p>
      
      <div className="space-y-8">
        {/* Section 11.1 */}
        <div>
          <p><Link href="/bookbmstdr/chap11/chapter11.2" className="text-blue-600 hover:text-blue-800">1. Assessing childhood vaccination coverage in Kenya</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'cov80map.png',
              'cov95map.png',
              'Observed_vaccination_rate.png',
              'primarymap.png',
              'randomeffectmap.png',
              'sdrandomeffectmap.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap11images/${img}`}
                alt={img}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Section 11.2 */}
        <div>
          <p><Link href="/bookbmstdr/chap11/chapter11.4" className="text-blue-600 hover:text-blue-800">2. Assessing trend in cancer rates in the USA</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'obsd_SMR_10.png',
              'percentage_of_white.png',
              'unemployment.png',
              'uscancer_rate.png',
              'uscancerfits.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap11images/${img}`}
                alt={img}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Section 11.3 */}
        <div>
          <p><Link href="/bookbmstdr/chap11/chapter11.1" className="text-blue-600 hover:text-blue-800">3. Localized modeling of hospitalization data from England</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'local_structures.png',
              'smr_eng_boxplot.png',
              'smr_england_07-11.png',
              'v2_smr_england_07-11.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap11images/${img}`}
                alt={img}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Section 11.4 */}
        <div>
          <p><Link href="/bookbmstdr/chap11/chapter11.5" className="text-blue-600 hover:text-blue-800">4. Assessing trend in child poverty in London</Link></p>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'london_poverty.png',
              'fitted_london_poverty.png',
              'london_poverty_continuous.png',
              'tsplot_poverty.png',
              'pairs_logit.png'
            ].map((img) => (
              <Image
                key={img}
                src={`/bookbmstdr/chap11images/${img}`}
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
      All the model fitting is done using the Bcartime model fitting function in the bmstdr package. The fitted model object is then explored for making several types of inference required in different practical settings. The full version of the code lines for model fitting and further investigations are provided in an online supplement which allows the reader to reproduce all the results and graphs illustrated here.
      </p>
    </ChapterLayout>
  );
}
