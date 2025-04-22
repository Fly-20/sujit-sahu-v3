'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';

export default function EducationPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Education</h1>
          
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
              <table className="min-w-full border border-gray-200">
                <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border" style={{ width: '15%' }}>1990-1994</td>
                  <td className="px-6 py-4 text-sm text-gray-900 border">
                    PhD,{' '}
                    <a href="http://www.stat.uconn.edu/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                      Department of Statistics
                    </a>,{' '}
                    <a href="http://www.uconn.edu/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                      University of Connecticut
                    </a>.
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1987-1989</td>
                  <td className="px-6 py-4 text-sm text-gray-900 border">
                    Master of Statistics,{' '}
                    <a href="http://www.isical.ac.in/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                      Indian Statistical Institute
                    </a>,{' '}
                    Calcutta.
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1984-1987</td>
                  <td className="px-6 py-4 text-sm text-gray-900 border">
                    BSc in Statistics (Honours),{' '}
                    <a href="https://www.presiuniv.ac.in/web/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                      Presidency College
                    </a>,{' '}
                    University of Calcutta.
                  </td>
                </tr>
              </tbody>
            </table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Employment</h2>
              <table className="min-w-full border border-gray-200">
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border" style={{ width: '15%' }}>Since 2013</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Professor of Statistics, Mathematics and{' '}
                      <a href="http://www.s3ri.soton.ac.uk/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">S3RI</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">2004-2013</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Senior Lecturer in Statistics, Mathematics and{' '}
                      <a href="http://www.s3ri.soton.ac.uk/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">S3RI</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">1999-2003</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Lecturer in Statistics,{' '}
                      <a href="http://www.soton.ac.uk/maths" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">School of Mathematics</a>,{' '}
                      <a href="http://www.soton.ac.uk/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">University of Southampton.</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">1997-1999</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Lecturer in Statistics,{' '}
                      <a href="http://www.cf.ac.uk/maths/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">School of Mathematics</a>,{' '}
                      <a href="http://www.cf.ac.uk/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Cardiff University.</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">1994-1996</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Research Associate,{' '}
                      <a href="http://www.statslab.cam.ac.uk/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Statistical Laboratory</a>,{' '}
                      <a href="http://www.dpmms.cam.ac.uk/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Department of Pure Mathematics and Mathematical Statistics</a>,{' '}
                      <a href="http://www.cam.ac.uk/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Cambridge University.</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visiting Positions</h2>
              <table className="min-w-full border border-gray-200">
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border" style={{ width: '18%' }}>September 2011</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Visiting Lecturer{' '}
                      <a href="https://stat.duke.edu/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Department of Statistical Science, Duke University.</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">November 2011</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Visiting Lecturer{' '}
                      <a href="http://maths.anu.edu.au/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Mathematical Sciences Institute, Australian National University, Canberra.</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">Jul 2007-Jan 2008</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Senior Research Associate,{' '}
                      <a href="http://www.epa.gov/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">US Environmental Protection Agency.</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">Mar-Jul, 2003</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">Visiting fellow,{' '}
                      <a href="http://www.samsi.info/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">SAMSI</a> and{' '}
                      <a href="https://stat.duke.edu/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Department of Statistical Science, Duke University.</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Journal Editorships</h2>
              <table className="min-w-full border border-gray-200">
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border" style={{ width: '15%' }}>Since 2019</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">
                      <a href="https://www.journals.elsevier.com/spatial-statistics" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spatial Statistics</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">2015-2019</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">
                      <a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1521-4036" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Biometrical Journal</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">2013-2015</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">
                      <a href="http://link.springer.com/journal/10651" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Environmental and Ecological Statistics</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">2012-2014</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">
                      <a href="http://sankhya.isical.ac.in/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Sankhya, the Indian Journal of Statistics</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">2008-2012</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">
                      <a href="https://www.tandfonline.com/toc/uasa20/current" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Journal of the American Statistical Association (Applications and Case Studies)</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">2008-2012</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border">
                      <a href="http://onlinelibrary.wiley.com/journal/10.1111/%28ISSN%291467-9876" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Journal of the Royal Statistical Society, Series C: Applied Statistics</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">External Examining</h2>
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border" style={{ width: '20%' }}>Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border" style={{ width: '20%' }}>University</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border">Thesis Title</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: 'July 2020', university: 'Newcastle University', thesis: 'Modelling Voxel Dependent Hemodynamic Response Function' },
                    { date: 'May 2019', university: 'University of Sheffield', thesis: 'Bayesian Inference for Dynamic Spatio-temporal Models' },
                    { date: 'December 2018', university: 'University of Sheffield', thesis: 'Spatio-temporal Models for high dimensional data' },
                    { date: 'September 2017', university: 'Glasgow University', thesis: 'Nonparametric statistical downscaling for the fusion of in-lake and remote sensing data' },
                    { date: 'December 2016', university: 'Lancaster University', thesis: 'Statistical Methods for Weather-related Insurance Claims.' },
                    { date: 'May 2014', university: 'Open University', thesis: 'Dynamic Bayesian Smooth Transition Autoregressive (DBSTAR) models for non-stationary nonlinear time series.' },
                    { date: 'March 2014', university: 'Lancaster University', thesis: 'Spatio-Temporal Modelling of Partially Observed Processes.' },
                    { date: 'December 2012', university: 'University of Kent at Canterbury', thesis: 'Contribution to the Bayesian Analysis of Mixture Models.' },
                    { date: 'April 2011', university: 'Bath University', thesis: 'Bayesian Spatio-temporal modelling of Air pollution.' },
                    { date: 'March 2008', university: 'University of Manchester', thesis: 'Markov Chain Monte Carlo Methods Applied to Integer-Valued Time Series.' },
                    { date: 'December 2006', university: 'Imperial College', thesis: 'Non-Stationary Spatial Statistics in the Geosciences.' },
                    { date: 'July 2006', university: 'Lancaster University', thesis: 'A Bayesian partitioning approach to modelling and mapping case control data.' }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900 border">{item.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 border">{item.university}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 border">{item.thesis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
