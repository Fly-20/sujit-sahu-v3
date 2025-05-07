'use client';

import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const BookBMSTDRPage: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                  <button 
                    className="w-full flex items-center justify-between text-lg md:text-xl font-semibold text-gray-900 mb-4 focus:outline-none cursor-pointer md:cursor-default"
                    onClick={(e) => {
                      const target = e.currentTarget;
                      const content = target.nextElementSibling;
                      const arrow = target.querySelector('.arrow');
                      if (window.innerWidth < 768) { // Only for mobile
                        if (content instanceof HTMLElement) {
                          content.style.maxHeight = content.style.maxHeight === '0px' ? '2000px' : '0px';
                          content.style.opacity = content.style.maxHeight === '0px' ? '0' : '1';
                        }
                        if (arrow instanceof HTMLElement) {
                          arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
                        }
                      }
                    }}
                  >
                    <span>Table of Contents</span>
                    <svg 
                      className="arrow w-6 h-6 transform transition-transform duration-300 md:hidden" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="transition-all duration-300 ease-in-out max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100">
                    <div className="space-y-2">
                      <Link href="/bookbmstdr/chap1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        1. Examples of spatio-temporal data
                      </Link>
                      <Link href="/bookbmstdr/chap2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        2. Jargon of spatial and spatio-temporal modeling
                      </Link>
                      <Link href="/bookbmstdr/chap3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        3. Exploratory data analysis methods
                      </Link>
                      <Link href="/bookbmstdr/chap4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        4. Bayesian inference methods
                      </Link>
                      <Link href="/bookbmstdr/chap5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        5. Bayesian computation methods
                      </Link>
                      <Link href="/bookbmstdr/chap6" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        6. Bayesian modeling for point referenced spatial data
                      </Link>
                      <Link href="/bookbmstdr/chap7" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        7. Bayesian modeling for point referenced spatio-temporal data
                      </Link>
                      <Link href="/bookbmstdr/chap8" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        8. Practical examples of point referenced data modeling
                      </Link>
                      <Link href="/bookbmstdr/chap9" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        9. Bayesian forecasting for point referenced data
                      </Link>
                      <Link href="/bookbmstdr/chap10" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        10. Bayesian modeling for areal unit data
                      </Link>
                      <Link href="/bookbmstdr/chap11" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        11. Bayesian modeling for areal unit spatio-temporal data
                      </Link>
                      <Link href="/bookbmstdr/chap12" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        12. Practical examples of areal unit data modeling
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/4">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Bayesian Modeling of Spatio-Temporal Data with R</h1>
                
                <p className="text-gray-600 mb-6 text-lg">
                  By Sujit K. Sahu (2022), Chapman and Hall/CRC
                </p>

                <div className="mb-8 flex justify-center items-center">
                  <img
                    src="/cover_bmstdr.png"
                    alt="Bayesian modeling of spatio-temporal data with R Book Cover"
                    className="w-1/3 h-auto rounded-lg shadow-lg"
                    width={450}
                    height={300}
                  />
                </div>

<div className="text-gray-600 mb-6 space-y-6">
                  <ul className="list-none space-y-8">
                    <li>
                      <b>Here is a preview</b> <a href="https://www.soton.ac.uk/~sks/bmbook/preview.pdf" className="text-blue-600 hover:text-blue-800">pdf file.</a> <b>Available for purchase in paperback and other formats from</b> <a href="https://www.taylorfrancis.com/books/mono/10.1201/9780429318443/bayesian-modeling-spatio-temporal-data-sujit-sahu" className="text-blue-600 hover:text-blue-800">Taylor & Francis</a> or <a href="https://www.amazon.com/Bayesian-Modeling-Spatio-Temporal-Data-Interdisciplinary-Statistics-ebook/dp/B09PNML5F7/" className="text-blue-600 hover:text-blue-800">Amazon.com.</a>
                    </li>
                    <li>
                      <span className="__dimensions_badge_embed__" data-doi="10.1201/9780429318443" data-dimensions-badge-installed="true">
                        <a className="__dimensions_Link" href="https://badge.dimensions.ai/details/doi/10.1201/9780429318443?domain=https://www.sujitsahu.com" target="_blank" referrerPolicy="no-referrer-when-downgrade" aria-label="24 total citations on Dimensions.">
                          <div className="__dimensions_Badge __dimensions_Badge_style_medium_circle">
                            <div className="__dimensions_Badge_Image">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                                <defs>
                                  <filter id="ho3rb-blur" colorInterpolationFilters="sRGB">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="40"></feGaussianBlur>
                                  </filter>
                                  <mask id="ho3rb-shape-mask">
                                    <path fill="white" d="M546.5,287.3l-111.8-194c-1.8-3-4.1-5.6-6.7-7.7c-2.2-2.7-5.4-4.3-8.9-4.5c-2.3-0.7-4.7-1-7-1L188.2,80c-9.3,0-18,5-22.6,13.1l-112,193.8c-4.7,8.1-4.7,18,0,26.1l111.9,193.9c4.7,8.1,13.3,13,22.6,13.1l223.9,0.1c9.3,0,17.9-4.8,22.6-12.8l112-193.7l0,0C551.1,305.1,551.2,295.4,546.5,287.3z M516.6,287.4l-41.5,0.1l-26.7-118.2L516.6,287.4z M337.2,106.2l-114.5,36.3l-20.3-36.4L337.2,106.2z M180.7,119l20.1,36.2L112,237.7L180.7,119z M181,481.8l-69.3-120l89.2,84L181,481.8z M203.3,493.8l19.6-35.6l114.6,35.7L203.3,493.8z M408.1,489.3l-152.7-47.5l-32.3-10.6l-25.3-23.2L82.6,299.6l114.6-106.9l25-23.1v-0.2l0.7-0.2l32.4-10.7l153.6-48.7l35.5,156.6l7.5,33.4l-7.6,33.5L408.1,489.3z M447.1,432.9l27.9-120.3l41.7-0.1L447.1,432.9z"></path>
                                  </mask>
                                  <g id="ho3rb-gradient" filter="url(#ho3rb-blur)">
                                    <g>
                                      <path fill="#006EB6" d="M0,0l300,300v-424.4C182.9-124.4,76.8-76.9,0,0z"></path>
                                      <path fill="#28348A" d="M300-124.4V300L600,0C523.2-76.9,417.1-124.4,300-124.4z"></path>
                                      <path fill="#E20613" d="M600,600c76.8-76.8,124.3-182.9,124.3-300H300L600,600z"></path>
                                      <path fill="#DA0078" d="M300,300h424.4c0-117.1-47.5-223.2-124.3-300L300,300z"></path>
                                      <path fill="#5BC4F1" d="M-124.4,300H300L0,0C-76.9,76.8-124.4,182.9-124.4,300z"></path>
                                      <path fill="#A1C517" d="M0,600l300-300h-424.4C-124.4,417.1-76.9,523.2,0,600z"></path>
                                      <path fill="#F08800" d="M300,724.4c117.1,0,223.2-47.5,300-124.3L300,300V724.4z"></path>
                                      <path fill="#FFCB00" d="M300,724.4V300L0,600C76.8,676.9,182.9,724.4,300,724.4z"></path>
                                    </g>
                                  </g>
                                </defs>
                              </svg>
                              <div className="__db_background"></div>
                              <div className="__db_shape">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <use mask="url(#ho3rb-shape-mask)" xlinkHref="#ho3rb-gradient"></use>
                                </svg>
                              </div>
                              <div className="__db_score __db_score_normal">24</div>
                              <div className="__db_label">CITATIONS</div>
                              <img src="https://badge.dimensions.ai/badge?count=24" className="__dimensions_png" alt="24 total citations on Dimensions." />
                            </div>
                          </div>
                          <div className="__dimensions_Badge_Legend_padding __dimensions_Badge_Legend_style_medium_circle">
                            <div className="__dimensions_Badge_Legend">
                              <div className="__dimensions_Badge_stat_group __dimensions_Badge_stat_group_citations">
                                <div className="__dimensions_Badge_stat __dimensions_Badge_stat_total_citations">
                                  <span className="__dimensions_Badge_stat_icon"></span>
                                  <span className="__dimensions_Badge_stat_count">24</span>
                                  <span className="__dimensions_Badge_stat_text">Total citations</span>
                                </div>
                                <div className="__dimensions_Badge_stat __dimensions_Badge_stat_recent_citations">
                                  <span className="__dimensions_Badge_stat_icon"></span>
                                  <span className="__dimensions_Badge_stat_count">17</span>
                                  <span className="__dimensions_Badge_stat_text">Recent citations</span>
                                </div>
                              </div>
                              <div className="__dimensions_Badge_stat_group __dimensions_Badge_stat_group_cr">
                                <div className="__dimensions_Badge_stat __dimensions_Badge_stat_fcr">
                                  <span className="__dimensions_Badge_stat_icon"></span>
                                  <span className="__dimensions_Badge_stat_count">11</span>
                                  <span className="__dimensions_Badge_stat_text">Field Citation Ratio</span>
                                </div>
                                <div className="__dimensions_Badge_stat __dimensions_Badge_stat_rcr">
                                  <span className="__dimensions_Badge_stat_icon"></span>
                                  <span className="__dimensions_Badge_stat_count">n/a</span>
                                  <span className="__dimensions_Badge_stat_text">Relative Citation Ratio</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </span>
                      <p className="mt-2">
                        <a href="https://badge.dimensions.ai/details/id/pub.1144241223" className="text-blue-600 hover:text-blue-800">Dimensions badge (citation counts and impact).</a>
                      </p>
                    </li>

                    <li>
                      <b>Reviews:</b>
                      <ul className="list-disc pl-6 mt-2 space-y-4">
                        <li>
                          <a href="https://www.statistics.utoronto.ca/people/directories/all-faculty/patrick-brown" className="text-blue-600 hover:text-blue-800">Prof Patrick Brown's</a> review as published in the journal <i>Spatial Statistics.</i> "Sujit Sahu has been prolific at writing papers and creating R packages for spatio-temporal modelling. ... The book's greatest contribution is providing useable and stable methods (and software) for fitting spatio-temporal models, these tools provide useful solution to a range of problems. ..." <a href="/spasta_review.pdf" className="text-blue-600 hover:text-blue-800">Read the full review here.</a>
                        </li>
                        <li>
                          <b>Prof Peter Diggle</b> "This book is a fine addition to the literature on linear modelling of spatio-temporal data, both geostatistical and areal unit; the linkage to the author's R package bmstdr is particularly useful."
                        </li>
                        <li>
                          <b>Prof Sir David Spiegelhalter</b> on Twitter: <a href="https://twitter.com/d_spiegel/status/1494272959506264068" className="text-blue-600 hover:text-blue-800">I've seen this, and it looks excellent. And with Covid examples!</a>
                        </li>
                        <li>
                          <b>Prof Alan Gelfand</b> "... it emphasizes modeling in building bridges to the practitioner's application is one of its strongest virtues...." <a href="https://www.routledge.com/Bayesian-Modeling-of-Spatio-Temporal-Data-with-R/Sahu/p/book/9780367277987" className="text-blue-600 hover:text-blue-800">Read more at Routledge</a>
                        </li>
                        <li>
                          <b>Prof Giovanna Jona Lasinio</b> "This book fills an essential gap in the literature about spatial-temporal data modelling...." <a href="https://www.routledge.com/Bayesian-Modeling-of-Spatio-Temporal-Data-with-R/Sahu/p/book/9780367277987" className="text-blue-600 hover:text-blue-800">Read more at Routledge</a>
                        </li>
                        <li>
                          <b>Prof Duncan Lee</b> "This book is an invaluable guide to statisticians and non-statisticians alike who are new to spatio-temporal modelling, ..." <a href="https://www.routledge.com/Bayesian-Modeling-of-Spatio-Temporal-Data-with-R/Sahu/p/book/9780367277987" className="text-blue-600 hover:text-blue-800">Read more at Routledge</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Citation:</b> Sahu, S.K. (2022). Bayesian Modeling of Spatio-Temporal Data with R (1st ed.). Chapman and Hall/CRC. <a href="https://doi.org/10.1201/9780429318443" className="text-blue-600 hover:text-blue-800">https://doi.org/10.1201/9780429318443.</a>
                    </li>
                    <li>
                      <b>R package</b> Sahu, S. K. (2021) <a href="/bookbmstdr/bmstdr-vig_version.html" className="text-blue-600 hover:text-blue-800">bmstdr: Bayesian Modeling of Spatio-Temporal Data with R.</a> Available from https://github.com/sujit-sahu/bmstdr/ and <a href="https://CRAN.R-project.org/package=bmstdr" className="text-blue-600 hover:text-blue-800">CRAN</a>
                      <p className="mt-2">
                        <a href="/#bmstdr" className="text-blue-600 hover:text-blue-800">This is the companion R package. Please click here for download and installation information.</a>
                      </p>
                    </li>
                  </ul>
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Description</h2>
                    <div className="space-y-4 text-gray-700">
                      <p>Applied sciences, both physical and social, such as atmospheric, biological, climate, demographic, economic, ecological, environmental, oceanic and political, routinely gather large volumes of spatial and spatio-temporal data in order to make wide ranging inference and prediction. Ideally such inferential tasks should be approached through modeling as modeling automatically aids in estimation of uncertainties in all conclusions drawn from such data. Unified Bayesian modeling, implemented through user friendly software packages, provides a crucial key to unlocking the full power of these methods for solving challenging practical problems.</p>
                      <p>Keeping the applied scientists in mind, this book presents most of the modeling with the help of R commands written in a purposefully developed R package to facilitate spatio-temporal modeling. However, the presentation in the book does not lose sight of mathematical and statistical rigor as it presents the underlying theories of Bayesian inference and computation in stand alone chapters in the first part which would be appealing to mathematics/statistics major final year undergraduate or post-graduate students who are in search of such modeling.</p>

                      <div className="bg-gray-50 rounded-lg p-6 mt-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Accessible detailed discussion of a majority of all aspects of Bayesian methods and computations with worked examples, numerical illustrations and exercises with which the reader should be able to experience the methodologies live.</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">A spatial statistics jargon buster chapter that enables the reader to build up a vocabulary without getting clouded in modeling and technicalities in model fitting.</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Computation and modeling illustrations are provided with the help of the dedicated R package bmstdr. The look and feel of the model fitting commands and their output resemble that of the lm command in R. A novice user, who is otherwise familiar with the lm command, will quickly be able to perform spatio-temporal modeling using well-known packages and platforms such rstan, INLA, spBayes, spTimer, spTDyn, CARBayes and CARBayesST.</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Included are R code notes detailing the algorithms used to produce all the tables and figures. An online supplement presents the necessary data and the full code for reproducing these results.</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Two dedicated chapters discuss practical examples of spatio-temporal modeling of point referenced and areal unit data. Taken from a variety of disciplines all illustrations are practical data driven rather than simulation based.</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">Throughout, the emphasis has been on validating models by splitting data into test and training sets following on the philosophy of machine learning and data science. The last chapter consolidates this connection formally by bringing in the Gaussian process based machine learning into the context of the topics presented in the book.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {[
                            'empty_frame_LA_regions.png',
                            'london_poverty.png',
                            'maternfields.png',
                            'met_adjusted_4thmax_99_05.png',
                            'space_trend_longhurst.png',
                            'temp_deep.png',
                            'trend_wshed05-15_sd.png',
                            'uscancer_rate.png',
                            'v2_smr_england_07-11.png'
                          ].map((image) => (
                            <div key={image} className="relative group overflow-hidden rounded-lg shadow-lg">
                              <img
                                src={`/bookbmstdr/${image}`}
                                alt={image.replace('.png', '').split('_').join(' ')}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-center px-4 text-sm">
                                  {image.replace('.png', '').split('_').join(' ')}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-12">
                        <ul className="space-y-8">
                          <li>
                            <h5 id="chapter-1" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap1/" className="text-blue-600 hover:text-blue-800">Chapter 1</a>
                            </h5>
                            <p className="text-gray-700">Chapter 1 introduces the main data sets analyzed in this book. The example data sets are categorized in two broad types: point referenced data and areal unit data. The examples of the first type includes air pollution data from the state of New York, England and Wales and also a sub region in the Eastern United States east of the Mississippi river.</p>
                          </li>
                          <li>
                            <h5 id="chapter-2" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap2/" className="text-blue-600 hover:text-blue-800">Chapter 2</a>
                            </h5>
                            <p className="text-gray-700">This chapter introduces the main keywords and concepts we often encounter in spatial and spatio-temporal modeling. Written from a beginner reader's point of view, it explains the basic concepts of stochastic processes, stationarity, variogram, isotropy, Matern covariance function, Gaussian Processes, space-time covariance function, Kriging, auto-correlation, Moran's I and Geary's C, internal and external standardization, spatial smoothers, CAR models and point processes.</p>
                          </li>
                          <li>
                            <h5 id="chapter-3" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap3/" className="text-blue-600 hover:text-blue-800">Chapter 3</a>
                            </h5>
                            <p className="text-gray-700">This chapter emphasizes the need to carry out Exploratory Data Analysis (EDA) before embarking on any modeling endeavor. EDA techniques introduced include non-spatial techniques such as histogram, pairwise scatter plots; spatial methods such as variogram and Kriging; and temporal exploration such as time series plots.</p>
                          </li>
                          <li>
                            <h5 id="chapter-4" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap4/" className="text-blue-600 hover:text-blue-800">Chapter 4</a>
                            </h5>
                            <p className="text-gray-700">Presented in a stand alone fashion, this chapter describes the main ideas of Bayesian inference needed in the rest of the book. Starting from the Bayes theorem in probability it discusses prior and posterior distributions, point and interval estimation, prior and posterior predictive distribution for model checking, hypothesis testing and Bayesian model choice statistics such as the Deviance Information Criteria (DIC) and Watanabe Information Criteria (WAIC).</p>
                          </li>
                          <li>
                            <h5 id="chapter-5" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap5/" className="text-blue-600 hover:text-blue-800">Chapter 5</a>
                            </h5>
                            <p className="text-gray-700">This chapter introduces the underlying concepts behind the powerful and popular computation methods used to make Bayesian inference for complex but parametric modeling problems. Presented with two simple running examples the chapter defines the methods of Monte Carlo, importance sampling, rejection sampling, Markov chain, Metropolis-Hastings algorithm, Gibbs sampler, Hamiltonian Monte Carlo and integrated nested Laplace approximation.</p>
                          </li>
                          <li>
                            <h5 id="chapter-6" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap6/" className="text-blue-600 hover:text-blue-800">Chapter 6</a>
                            </h5>
                            <p className="text-gray-700">This chapter introduces the general topic of practical Bayesian modeling and discusses its advantages over procedure based methods. The chapter discusses theoretical results for a simple linear regression model and also for a spatial model with known correlation parameter for point referenced data.</p>
                          </li>
                          <li>
                            <h5 id="chapter-7" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap7/" className="text-blue-600 hover:text-blue-800">Chapter 7</a>
                            </h5>
                            <p className="text-gray-700">This is the main methodological chapter which discusses spatio-temporal modeling for point referenced continuous data. As in the preceding chapter it obtains exact theoretical results for a simple separable spatio-temporal model which serves as the base line for model comparison purposes.</p>
                          </li>
                          <li>
                            <h5 id="chapter-8" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap8/" className="text-blue-600 hover:text-blue-800">Chapter 8</a>
                            </h5>
                            <p className="text-gray-700">This chapter showcases spatio-temporal modeling for point referenced data using five practical examples. The examples highlight the practical use of such modeling and extend the methodologies where necessary. The examples build on the basic concepts introduced in the earlier chapters, especially the previous chapter, on spatio-temporal modeling.</p>
                          </li>
                          <li>
                            <h5 id="chapter-9" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap9/" className="text-blue-600 hover:text-blue-800">Chapter 9</a>
                            </h5>
                            <p className="text-gray-700">The topic of forecasting is discussed in this chapter. Several easy to use and scalable forecasting methods are presented for Gaussian data. The first of these is an exact Bayesian method based on the separable spatio-temporal model discussed in Chapter 7.</p>
                          </li>
                          <li>
                            <h5 id="chapter-10" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap10/" className="text-blue-600 hover:text-blue-800">Chapter 10</a>
                            </h5>
                            <p className="text-gray-700">This chapter discusses Bayesian models for both areal and temporal areal data. As areal unit data are often discrete counts, this chapter first provides a gentle introduction to the generalized linear models (GLM).</p>
                          </li>
                          <li>
                            <h5 id="chapter-11" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap11/" className="text-blue-600 hover:text-blue-800">Chapter 11</a>
                            </h5>
                            <p className="text-gray-700">Parallel to Chapter 8, this chapter showcases four examples of areal and temporal areal unit data sets. Click the links below to see the R-code for the examples. Assessing childhood vaccination coverage in Kenya, assessing trend in cancer rates in the USA, localized modeling of hospitalization data from England, and assessing trend in child poverty in London. All the model fitting is done using the Bcartime model fitting function in the bmstdr package.</p>
                          </li>
                          <li>
                            <h5 id="chapter-12" className="text-xl font-semibold mb-2">
                              <a href="/bookbmstdr/chap12/" className="text-blue-600 hover:text-blue-800">Chapter 12</a>
                            </h5>
                            <p className="text-gray-700">This chapter aims to present GP based models for machine learning showing an immediate connection between the GP based regression models presented in the earlier chapters. The chapter highlights the equivalent correspondences between the different terminologies used in the fields of mainstream statistics and data science.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookBMSTDRPage;
