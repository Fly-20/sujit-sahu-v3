'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';

export default function GrantsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Research Grants</h1>
          
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">RCUK Grants</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Grant Reference and Body</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Dates</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Value</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">EP/J017485/1 and EPSRC</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2013-2016</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP365,643</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <a href="http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/J017485/1" className="text-blue-600 hover:text-blue-800">
                          A rigorous statistical framework for estimating the long-term health effects of air pollution
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        I am the sole investigator on this grant awarded to Southampton and it relates to a 
                        <a href="http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/J017442/1" className="text-blue-600 hover:text-blue-800">partner grant</a> 
                        held by Glasgow University.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">NE/J012238/1 and NERC</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2012-2015</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP475,583</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <a href="http://www.christchurch-macronutrients.org.uk/" className="text-blue-600 hover:text-blue-800">
                          Quantifying annual cycles of macronutrient fluxes and net effect of transformations in an estuary: their responses to stochastic storm-driven events
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        I am a CI who leads the statistical modelling arm in this 
                        <a href="http://gotw.nerc.ac.uk/list_med_pi.asp?pi=51299" className="text-blue-600 hover:text-blue-800">multi-disciplinary multi-university consortium grant</a> 
                        totalling more than a million pounds. This will enable me to hire a statistics post-doc for one year.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">EP/H010637/1 and EPSRC</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2010-2012</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP341,363</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <a href="http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/H010637/1" className="text-blue-600 hover:text-blue-800">
                          MetSim: a Hospital Simulation Support Tool Using Meteorological Information to Improve the Planning and Management of Health Services
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        I am a CI who led the statistical modelling arm in this joint grant with Cardiff Univerrsity.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">EP/C531965/1 and EPSRC</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2005</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP4,507</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <a href="http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/C531965/1" className="text-blue-600 hover:text-blue-800">
                          Recent advances in modelling spatio-temporal data
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        This grant, obtained jointly with Prof Susan Lewis, enabled me to organise a research workshop in Southampton.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">EP/C008863/1 and EPSRC</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2005-2010</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP415,486</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <a href="http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/C008863/1" className="text-blue-600 hover:text-blue-800">
                          PLATFORM: End-to-End pipeline for chemical information: from the laboratory to literature and back again
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        I am a CI who led the statistical modelling arm in this multi-disciplinary grant.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Travel and Sabbatical Funding</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Funding Body</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Dates</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Value</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <a href="http://www.samsi.info" className="text-blue-600 hover:text-blue-800">SAMSI</a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">2013</td>
                      <td className="px-6 py-4 text-sm text-gray-900">US$2,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To participate in a SAMSI-SAVI US-India workshop on environmental statistics</td>
                      <td className="px-6 py-4 text-sm text-gray-900">I gave an invited talk.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">Australian National University</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2011</td>
                      <td className="px-6 py-4 text-sm text-gray-900">AUS$8,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To establish research collaboration.</td>
                      <td className="px-6 py-4 text-sm text-gray-900">This funding also allowed me to give a 3-day shor-course on Bayesian methods for spatial and spatio-temporal data.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">Duke University</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2011</td>
                      <td className="px-6 py-4 text-sm text-gray-900">US$3,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To continue research collaboration.</td>
                      <td className="px-6 py-4 text-sm text-gray-900">This funding also allowed me to give 3 invited talks in the USA.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">The National Academies</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2007</td>
                      <td className="px-6 py-4 text-sm text-gray-900">US$45,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To model large space-time data</td>
                      <td className="px-6 py-4 text-sm text-gray-900">This funding allowed me to become a resident Senior Research Fellow at the US Environmental protection Agency offices in Research Triangle Park, North Carolina.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">US Environmental protection Agency</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2005-2006</td>
                      <td className="px-6 py-4 text-sm text-gray-900">US$45,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To model and forecast ozone levels in the Eastern USA</td>
                      <td className="px-6 py-4 text-sm text-gray-900">This funding allowed me to develop methods and software for real time forecasting of ozone levels.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">Universities of Rome and Bergamo, Italy</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2004-2005</td>
                      <td className="px-6 py-4 text-sm text-gray-900">EUR5,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To work with Prof Giovanna Jona Lasinio and Prof A. Fasso.</td>
                      <td className="px-6 py-4 text-sm text-gray-900">This enabled me to visit Rome and Bergamo for three weeks.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <a href="http://www.samsi.info" className="text-blue-600 hover:text-blue-800">SAMSI</a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">2003</td>
                      <td className="px-6 py-4 text-sm text-gray-900">US$11,500</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To participate in a SAMSI environmental statistics programme</td>
                      <td className="px-6 py-4 text-sm text-gray-900">This funding allowed me to visit SAMSI for 6 months that initiated collaboration with Prof Alan Gelfand (Duke University) and Dr David Holland, US Environmental Protection Agency.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">The Royal Society, UK</td>
                      <td className="px-6 py-4 text-sm text-gray-900">1999</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP600</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To give an invited talk at Joint Statistical Meetings</td>
                      <td className="px-6 py-4 text-sm text-gray-900">I gave a talk at the JSM in Baltimore in 1999.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Other Forms of Funding</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Funding Body</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Dates</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Value</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">University of Southampton</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2011</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP21,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To partially fund a PhD Studentship for 3 years</td>
                      <td className="px-6 py-4 text-sm text-gray-900">I won this from a university-wide competition.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">University of Southampton</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2008</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP75,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">An overseas PhD studentship</td>
                      <td className="px-6 py-4 text-sm text-gray-900">I won this from a university-wide competition.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">University of Southampton</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2008</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP75,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">A PhD studentship</td>
                      <td className="px-6 py-4 text-sm text-gray-900">This funding was obtained jointly with Dr Andrew Chipperfield in Engineering.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">Dorothy Hodgkin Trust</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2005</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP75,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">A PhD studentship for three years</td>
                      <td className="px-6 py-4 text-sm text-gray-900">This grant was administered by the University of Southampton and was obtained jointly with Peter Challenor.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">The Royal Statistical Society, UK</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2005</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP1,200</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To jointly organise a research workshop in Southampton</td>
                      <td className="px-6 py-4 text-sm text-gray-900">The workshop had more than 60 participants from 10 different countries.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">Ordnance Survey, UK</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2005</td>
                      <td className="px-6 py-4 text-sm text-gray-900">GBP500</td>
                      <td className="px-6 py-4 text-sm text-gray-900">To organise a research workshop in Southampton</td>
                      <td className="px-6 py-4 text-sm text-gray-900">The workshop had more than 60 participants from 10 different countries.</td>
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
