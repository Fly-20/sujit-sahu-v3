'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function PollutionEstimatesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Air pollution estimates for England and Wales during 2007-2011
          </h1>
          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                A webinar was hosted by the Royal Statistical Society on February 21, 2018 with Prof Richard Chandler (UCL) in the Chair and Prof Jonathan Rougier (Bristol) as the discussant.
              </p>
              
              <p className="text-gray-700">
                Here is the{' '}
                <a 
                  href="/papers/webinar_sujit_sahu.pdf" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  pdf presentation file
                </a>. A youtube video{' '}
                <a 
                  href="https://www.youtube.com/watch?v=EU9O13jLh50" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  of the webinar
                </a>{' '}
                is also available. Discussion starts after about 21 minutes into the video.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Citations:</h2>
              <ol className="list-decimal list-outside ml-6 space-y-6">
                <li className="text-gray-700">
                  Mukhopadhyay, S. and Sahu, S. K. (2017)
                  A Bayesian spatio-temporal model to estimate long term exposure to outdoor air pollution at coarser administrative geographies in England and Wales. <i>Journal of the Royal Statistical Society,</i> Series A,{' '}
                  <a href="http://onlinelibrary.wiley.com/doi/10.1111/rssa.12299/full" className="text-blue-600 hover:text-blue-800">DOI: 10.1111/rssa.12299</a>
                </li>
                
                <li className="text-gray-700">
                  Lee, D., Mukhopadhyay, S., Rushworth, A. and Sahu, S. K. (2016){' '}
                  <a href="/papers/Leebiostats.pdf" className="text-blue-600 hover:text-blue-800">
                    A rigorous statistical framework for estimating the long-term health impact of air pollution.
                  </a>{' '}
                  Click{' '}
                  <a href="/papers/Leebiostatssupp.pdf" className="text-blue-600 hover:text-blue-800">here for supplementary materials.</a>{' '}
                  <i>Biostatistics,</i> DOI: 10.1093/biostatistics/kxw048.
                  
                  <p className="mt-6 mb-4 italic">We also provide the following materials.</p>
                  
                  <ul className="list-disc list-outside ml-6 space-y-4">
                    <li className="text-gray-700">
                      <a href="/projects/mukhop_sahu_suppl.zip" className="text-blue-600 hover:text-blue-800">Supplementary materials</a>{' '}
                      for this paper are available. These include a{' '}
                      <a href="/papers/suppl_mukhop_sahu.pdf" className="text-blue-600 hover:text-blue-800">pdf file,</a>{' '}
                      the{' '}
                      <a href="/projects/AURN_data_07_11.txt" className="text-blue-600 hover:text-blue-800">AURN data file</a>{' '}
                      and some R-code.
                    </li>
                    <li className="text-gray-700">
                      The file{' '}
                      <a href="/projects/example_model_code.zip" className="text-blue-600 hover:text-blue-800">example model code</a>{' '}
                      contains sample code for fitting the best model for each of the four pollutants. The modelling code will require the modified spTimer R package which is also provided as{' '}
                      <a href="/projects/spAir_3.0-0.zip" className="text-blue-600 hover:text-blue-800">a Windows binary</a>{' '}
                      or{' '}
                      <a href="/projects/spAir.tar.gz" className="text-blue-600 hover:text-blue-800">a .tar.gz</a>{' '}
                      file.
                    </li>
                  </ul>
                </li>
              </ol>
              
              <div className="mt-12 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-r"></th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-r whitespace-nowrap">NO<sub>2</sub></th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-r whitespace-nowrap">O<sub>3</sub></th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-r whitespace-nowrap">PM10</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">PM2.5</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium border-r">Annual 1 km air quality</td>
                      {['no2', 'ozone', 'pm10', 'pm2p5'].map((pollutant, index) => (
                        <td key={pollutant} className="px-6 py-4 align-top border-r">
                          <ul className="list-none space-y-2">
                            {[2007, 2008, 2009, 2010, 2011].map(year => (
                              <li key={year}>
                                <a 
                                  href={`https://www.soton.ac.uk/~sks/pollution_estimates/grid_1km_annual_${pollutant}_${year}.txt`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  {year}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium border-r">Daily 1 km air quality</td>
                      {['no2', 'ozone', 'pm10', 'pm2p5'].map((pollutant, index) => (
                        <td key={pollutant} className="px-6 py-4 align-top border-r">
                          <ul className="list-none space-y-2">
                            {[2007, 2008, 2009, 2010, 2011].map(year => (
                              <li key={year}>
                                <a 
                                  href={`https://www.soton.ac.uk/~sks/pollution_estimates/grid_1km_daily_${pollutant}_${year}.txt.zip`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  {year}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium border-r">Annual local authority air quality</td>
                      {['no2', 'ozone', 'pm10', 'pm2p5'].map((pollutant, index) => (
                        <td key={pollutant} className="px-6 py-4 align-top border-r">
                          <ul className="list-none space-y-2">
                            {[2007, 2008, 2009, 2010, 2011].map(year => (
                              <li key={year}>
                                <a 
                                  href={`https://www.soton.ac.uk/~sks/pollution_estimates/local_authority_annual_${pollutant}_${year}.txt`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  {year}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium border-r">Daily local authority air quality</td>
                      {['no2', 'ozone', 'pm10', 'pm2p5'].map((pollutant, index) => (
                        <td key={pollutant} className="px-6 py-4 align-top border-r">
                          <ul className="list-none space-y-2">
                            {[2007, 2008, 2009, 2010, 2011].map(year => (
                              <li key={year}>
                                <a 
                                  href={`https://www.soton.ac.uk/~sks/pollution_estimates/local_authority_daily_${pollutant}_${year}.txt`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  {year}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
