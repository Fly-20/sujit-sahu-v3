import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { books } from '@/data/books';
import BookFeatureList from '@/components/books/BookFeatureList';
import TableOfContents from '@/components/books/TableOfContents';

export function generateStaticParams() {
  return Object.keys(books).map((bookId) => ({
    bookId,
  }));
}

export default function BookPage({ params }: { params: { bookId: string } }) {
  const { bookId } = params;
  const book = books[bookId];

  if (!book) {
    notFound();
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <TableOfContents chapters={book.chapters} bookId={bookId} />
              </div>

              <div className="lg:w-3/4">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {book.fullTitle}
                </h1>
                {bookId === 'bookbmstdr' && (
                  <div className="mb-8 flex justify-center items-center">
                    <img
                      src="/cover_bmstdr.png"
                      alt="Bayesian modeling of spatio-temporal data with R Book Cover"
                      className="w-1/3 h-auto rounded-lg shadow-lg"
                      width={450}
                      height={300}
                    />
                  </div>
                )}
                {bookId === 'bookipsrdbs' && (
                  <div className="mb-8 flex justify-center items-center">
                    <img
                      src="/cover_ipsRdbs.png"
                      alt="Introduction to Probability, Statistics & R Book Cover"
                      className="w-1/3 h-auto rounded-lg shadow-lg"
                      width={450}
                      height={300}
                    />
                  </div>
                )}
                {bookId === 'bookbmstdr' ? (
                  <div className="text-gray-600 mb-6 space-y-6">
                    <ul className="list-none space-y-8">
                      <li>
                        <b>Here is a preview</b> <a href="https://www.soton.ac.uk/~sks/bmbook/preview.pdf" className="text-blue-600 hover:text-blue-800">pdf file.</a> <b>Available for purchase in paperback and other formats from</b> <a href="https://www.taylorfrancis.com/books/mono/10.1201/9780429318443/bayesian-modeling-spatio-temporal-data-sujit-sahu" className="text-blue-600 hover:text-blue-800">Taylor & Francis</a> or <a href="https://www.amazon.com/Bayesian-Modeling-Spatio-Temporal-Data-Interdisciplinary-Statistics-ebook/dp/B09PNML5F7/" className="text-blue-600 hover:text-blue-800">Amazon.com.</a>
                      </li>
                      <li>
                        <div className="dimensions-badge" data-doi="10.1201/9780429318443"></div>
                        <p><a href="https://badge.dimensions.ai/details/id/pub.1144241223" className="text-blue-600 hover:text-blue-800">Dimensions badge (citation counts and impact).</a></p>
                      </li>
                      <li>
                        <b>Reviews:</b>
                        <ul className="list-disc pl-6 mt-2 space-y-4">
                          <li>
                            <a href="https://www.statistics.utoronto.ca/people/directories/all-faculty/patrick-brown" className="text-blue-600 hover:text-blue-800">Prof Patrick Brown's</a> review as published in the journal <i>Spatial Statistics.</i> "Sujit Sahu has been prolific at writing papers and creating R packages for spatio-temporal modelling. ... The book's greatest contribution is providing useable and stable methods (and software) for fitting spatio-temporal models, these tools provide useful solution to a range of problems. ..." <a href="spasta_review.pdf" className="text-blue-600 hover:text-blue-800">Read the full review here.</a>
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
                        <b>R package</b> Sahu, S. K. (2021) <a href="/bmbook/bmstdr-vig_version" className="text-blue-600 hover:text-blue-800">bmstdr: Bayesian Modeling of Spatio-Temporal Data with R.</a> Available from https://github.com/sujit-sahu/bmstdr/ and <a href="https://CRAN.R-project.org/package=bmstdr" className="text-blue-600 hover:text-blue-800">CRAN</a>
                        <p className="mt-2">
                          <a href="/#bmstdr" className="text-blue-600 hover:text-blue-800">This is the companion R package. Please click here for download and installation information.</a>
                        </p>
                      </li>
                    </ul>

                    <div className="mt-12">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Description</h2>
                      <div className="space-y-4 text-gray-700">
                        <p>
                          Applied sciences, both physical and social, such as atmospheric, biological, climate, demographic, economic, ecological, environmental, oceanic and political, routinely gather large volumes of spatial and spatio-temporal data in order to make wide ranging inference and prediction. Ideally such inferential tasks should be approached through modeling as modeling automatically aids in estimation of uncertainties in all conclusions drawn from such data. Unified Bayesian modeling, implemented through user friendly software packages, provides a crucial key to unlocking the full power of these methods for solving challenging practical problems.
                        </p>
                        <p>
                          Keeping the applied scientists in mind, this book presents most of the modeling with the help of R commands written in a purposefully developed R package to facilitate spatio-temporal modeling. However, the presentation in the book does not lose sight of mathematical and statistical rigor as it presents the underlying theories of Bayesian inference and computation in stand alone chapters in the first part which would be appealing to mathematics/statistics major final year undergraduate or post-graduate students who are in search of such modeling.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 mb-6 text-lg">
                    It is now possible to order this book from
                    <a href="https://www.waterstones.com/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> Waterstones, </a>
                    or
                    <a href="https://www.barnesandnoble.com/w/introduction-to-probability-statistics-r-sujit-k-sahu/1143708068?ean=9783031378652" className="text-blue-600 hover:text-blue-800"> Barnes & Noble, </a>
                    or
                    <a href="https://www.foyles.co.uk/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> foyles bookshops </a>
                    or
                    <a href="https://www.amazon.com/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/" className="text-blue-600 hover:text-blue-800"> Amazon.com </a>
                    or
                    <a href="https://www.amazon.co.uk/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/" className="text-blue-600 hover:text-blue-800"> Amazon.co.uk </a>
                    in the UK. The book is based on my lecture notes for many courses (modules), for example, Introduction to Probability and Statistics, taught to first and second year students in various BSc in Mathematics degree programmes.
                    Here is a preview pdf file. You may be able to access the book in various different formats through your own institution.
                  </p>
                )}

                <BookFeatureList features={book.keyFeatures} />

                {bookId === 'bookbmstdr' && (
                  <div className="mt-8 mb-12">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      This book is designed to make spatio-temporal modeling and analysis accessible and understandable to a wide audience from bachelors, masters and PhD students to researchers, from mathematicians and statisticians to practitioners in applied sciences. By avoiding hard core mathematics and calculus, this book aims to be a bridge that removes the statistical knowledge gap from among the applied scientists.
                    </p>
                  </div>
                )}

                {bookId === 'bookbmstdr' && (
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
                )}

                {bookId === 'bookbmstdr' && (
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
                )}

                {bookId === 'bookipsrdbs' && (
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Some of the images below are shown using Creative Commons BY License detailed in the book.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        'college2.jpg',
                        'gamma_density.png',
                        'Lion_cub.jpg',
                        'mediansqueeze.png',
                        'n2contours2.png',
                        'possum.jpg',
                        'puffin_scotland.jpg',
                        'rv_mapping.png'
                      ].map((image) => (
                        <div key={image} className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                          <img
                            src={`/bookipsrdbs/${image}`}
                            alt={image.split('.')[0].replace(/_/g, ' ')}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-12">
                      <ul className="space-y-8 list-none">
                        <li>
                          <h5 id="chapter-1" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap1/" className="text-blue-600 hover:text-blue-800">Chapter 1</a>
                          </h5>
                          <p className="text-gray-700">This chapter introduces basic statistics such as the mean, median and mode and standard deviation. It also provides introduction to many motivating data sets which are used as running examples throughout the book.</p>
                        </li>
                        <li>
                          <h5 id="chapter-2" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap2/" className="text-blue-600 hover:text-blue-800">Chapter 2</a>
                          </h5>
                          <p className="text-gray-700">This chapter introduces the R software package and discusses how to get started with many examples. It revisits some of the data sets already mentioned in Chapter 1 by drawing simple graphs and obtaining summary statistics.</p>
                        </li>
                        <li>
                          <h5 id="chapter-3" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap3/" className="text-blue-600 hover:text-blue-800">Chapter 3</a>
                          </h5>
                          <p className="text-gray-700">The basic concepts of probability are introduced in this chapter. Elementary methods of counting, the number of permutations and the number of combinations are introduced and illustrated. Elementary methods for calculating probabilities are discussed and the general urn problem in probability is defined.</p>
                        </li>
                        <li>
                          <h5 id="chapter-4" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap4/" className="text-blue-600 hover:text-blue-800">Chapter 4</a>
                          </h5>
                          <p className="text-gray-700">This chapter introduces many advanced laws of probability such as the total probability theorem, conditional probability and the Bayes theorem. The famous Monty Python problem is discussed and illustrated using a simulation tool in R.</p>
                        </li>
                        <li>
                          <h5 id="chapter-5" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap5/" className="text-blue-600 hover:text-blue-800">Chapter 5</a>
                          </h5>
                          <p className="text-gray-700">Chapter 5 defines the random variables and their probability distributions. Many properties such as mean, variance, and quantiles of random variables are also defined here. Laws for expectations and variances of linear functions of random variables are also discussed.</p>
                        </li>
                        <li>
                          <h5 id="chapter-6" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap6/" className="text-blue-600 hover:text-blue-800">Chapter 6</a>
                          </h5>
                          <p className="text-gray-700">This chapter introduces the standard discrete distributions: Bernoulli, binomial, Poisson, geometric, hypergeometric and negative binomial. In each case the basic properties, such as mean and variance are obtained and the R commands to obtain probabilities and cumulative probabilities are illustrated.</p>
                        </li>
                        <li>
                          <h5 id="chapter-7" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap7/" className="text-blue-600 hover:text-blue-800">Chapter 7</a>
                          </h5>
                          <p className="text-gray-700">This chapter introduces standard continuous distributions: exponential, normal, gamma and beta. As in Chapter 6, here we find the means and variances and also discuss the R commands for finding various quantities for each distribution.</p>
                        </li>
                        <li>
                          <h5 id="chapter-8" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap8/" className="text-blue-600 hover:text-blue-800">Chapter 8</a>
                          </h5>
                          <p className="text-gray-700">This chapter introduces the joint probability distribution for multiple random variables. It also discusses conditional and marginal distributions, conditional expectations, covariance and correlation. Finally it introduces the central limit theorem for the sum of independent random variables.</p>
                        </li>
                        <li>
                          <h5 id="chapter-9" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap9/" className="text-blue-600 hover:text-blue-800">Chapter 9</a>
                          </h5>
                          <p className="text-gray-700">This chapter introduces the basic concepts of statistical inference and statistical modelling. It distinguishes between population distributions and sample statistics (quantities). The concepts of estimators and their sampling (probability) distributions are also introduced.</p>
                        </li>
                        <li>
                          <h5 id="chapter-10" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap10/" className="text-blue-600 hover:text-blue-800">Chapter 10</a>
                          </h5>
                          <p className="text-gray-700">This chapter discusses three important methods for point estimation: method of moments, maximum likelihood and Bayesian methods.</p>
                        </li>
                        <li>
                          <h5 id="chapter-11" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap11/" className="text-blue-600 hover:text-blue-800">Chapter 11</a>
                          </h5>
                          <p className="text-gray-700">Chapter 11 discusses techniques such as the pivoting method for interval estimation. The central limit theorem is used to derive confidence intervals for the mean parameters of binomial, Poisson and normal distributions.</p>
                        </li>
                        <li>
                          <h5 id="chapter-12" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap12/" className="text-blue-600 hover:text-blue-800">Chapter 12</a>
                          </h5>
                          <p className="text-gray-700">Chapter 12 discusses testing of statistical hypotheses called null and alternative hypothesis. Definintions of many related keywords, e.g. critical region, types of errors while testing statistical hypothesis, power function, sensitivity and specificity are provided.</p>
                        </li>
                        <li>
                          <h5 id="chapter-13" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap13/" className="text-blue-600 hover:text-blue-800">Chapter 13</a>
                          </h5>
                          <p className="text-gray-700">Chapter 13 starts the Part III of this book on advanced distribution theory and probability. It discusses the moment generating function, cumulant generating function and probability generating function for discrete random variables.</p>
                        </li>
                        <li>
                          <h5 id="chapter-14" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap14/" className="text-blue-600 hover:text-blue-800">Chapter 14</a>
                          </h5>
                          <p className="text-gray-700">Chapter 14 is devoted to deriving distributions of transformed random variables in one and multiple dimensions. These techniques are used to derive sampling distributions of quantities of statstical interests while sampling from the normal distribution.</p>
                        </li>
                        <li>
                          <h5 id="chapter-15" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap15/" className="text-blue-600 hover:text-blue-800">Chapter 15</a>
                          </h5>
                          <p className="text-gray-700">Chapter 15 discusses bivariate and multivariate probability distributions. In particular, it discusses the marginal and conditional distributions associated with bivariate and multivariate normal distributions. It also discusses the joint moment generating function for the multivariate normal distribution.</p>
                        </li>
                        <li>
                          <h5 id="chapter-16" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap16/" className="text-blue-600 hover:text-blue-800">Chapter 16</a>
                          </h5>
                          <p className="text-gray-700">Chapter 16 discusses asymptotic theories which are often required to guarantee good properties of statistical inference techniques. Three types of modes of convergence in statistics are discussed and illustrated with the help of simulation using R routines.</p>
                        </li>
                        <li>
                          <h5 id="chapter-17" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap17/" className="text-blue-600 hover:text-blue-800">Chapter 17</a>
                          </h5>
                          <p className="text-gray-700">Chapter 17 kicks off Part V of the book on introduction to statistical modelling. It discusses the concepts related to simple regression modelling with many practical examples. The concepts of estimation, inference and predictions are discussed along with the required theoretical derivations.</p>
                        </li>
                        <li>
                          <h5 id="chapter-18" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap18/" className="text-blue-600 hover:text-blue-800">Chapter 18</a>
                          </h5>
                          <p className="text-gray-700">Chapter 18 generalises the simple regression techniques of the previous chapter to the case where there are multiple possible explanatory variables. This chapter describes the foundational basics for machine learning where the simple and multiple regression techniques are exploited heavily for practical problems.</p>
                        </li>
                        <li>
                          <h5 id="chapter-19" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/chap19/" className="text-blue-600 hover:text-blue-800">Chapter 19</a>
                          </h5>
                          <p className="text-gray-700">Finally, Chapter 19 introduces the concepts of analysis of variance which is a seen as a general model comparison technique where there are categorical explanatory variables. Theoretical generalisation of the techniques from the two preceding chapters are included and so are illustrations using R.</p>
                        </li>
                        <li>
                          <h5 id="resources" className="text-xl font-semibold mb-2">
                            <a href="/bookipsrdbs/Resources" className="text-blue-600 hover:text-blue-800">Resources</a>
                          </h5>
                          <p className="text-gray-700">Further, resources (e.g. lecture slides) will be published through this page. Please revisit this page later. The data sets discussed in the book are published via the R package ipsRdbs available from CRAN.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
