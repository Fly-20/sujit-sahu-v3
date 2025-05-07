import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import TableOfContents from '@/components/books/TableOfContents';

const BookIPSRDBSPage: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                  <button className="w-full flex items-center justify-between text-xl font-semibold text-gray-900 mb-4 focus:outline-none md:cursor-default">
                    <span>Table of Contents</span>
                  </button>
                  <div className="transition-all duration-300 ease-in-out max-h-[2000px] opacity-100">
                    <div className="space-y-2">
                      <Link href="/bookipsrdbs" className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-md">
                        ipsrdbs
                      </Link>
                      <Link href="/bookipsrdbs/chap1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        1. Introduction to Basic Statistics
                      </Link>
                      <Link href="/bookipsrdbs/chap2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        2. Getting Started with R
                      </Link>
                      <Link href="/bookipsrdbs/chap3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        3. Introduction to Probability
                      </Link>
                      <Link href="/bookipsrdbs/chap4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        4. Conditional Probability and Independence
                      </Link>
                      <Link href="/bookipsrdbs/chap5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        5. Random Variables and Their Probability Distributions
                      </Link>
                      <Link href="/bookipsrdbs/chap6" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        6. Standard Discrete Distributions
                      </Link>
                      <Link href="/bookipsrdbs/chap7" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        7. Standard Continuous Distributions
                      </Link>
                      <Link href="/bookipsrdbs/chap8" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        8. Joint Distributions and the CLT
                      </Link>
                      <Link href="/bookipsrdbs/chap9" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        9. Introduction to Statistical Inference
                      </Link>
                      <Link href="/bookipsrdbs/chap10" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        10. Methods of Point Estimation
                      </Link>
                      <Link href="/bookipsrdbs/chap11" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        11. Interval Estimation
                      </Link>
                      <Link href="/bookipsrdbs/chap12" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        12. Hypothesis Testing
                      </Link>
                      <Link href="/bookipsrdbs/chap13" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        13. Linear Regression
                      </Link>
                      <Link href="/bookipsrdbs/chap14" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        14. Analysis of Variance
                      </Link>
                      <Link href="/bookipsrdbs/chap15" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        15. Non-parametric Methods
                      </Link>
                      <Link href="/bookipsrdbs/chap16" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        16. Bayesian Inference
                      </Link>
                      <Link href="/bookipsrdbs/chap17" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        17. Markov Chain Monte Carlo
                      </Link>
                      <Link href="/bookipsrdbs/chap18" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        18. Time Series Analysis
                      </Link>
                      <Link href="/bookipsrdbs/chap19" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        19. Spatial Statistics
                      </Link>
                      <Link href="/bookipsrdbs/Resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md bg-gray-50">
                        Resources
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Probability, Statistics and R</h1>
          

          <div className="mb-8 flex justify-center items-center">
            <img
              src="/cover_ipsRdbs.png"
              alt="Introduction to Probability, Statistics & R Book Cover"
              className="w-1/3 h-auto rounded-lg shadow-lg"
              width={450}
              height={300}
            />
          </div>

          <div className="space-y-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900" id="order-book">
              It is now possible to order this book from
              <a href="https://www.waterstones.com/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> Waterstones, </a> or
              <a href="https://www.barnesandnoble.com/w/introduction-to-probability-statistics-r-sujit-k-sahu/1143708068?ean=9783031378652" className="text-blue-600 hover:text-blue-800"> Barnes & Noble, </a> or
              <a href="https://www.foyles.co.uk/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> foyles bookshops </a> or
              <a href="https://www.amazon.com/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/" className="text-blue-600 hover:text-blue-800"> Amazon.com </a> or 
              <a href="https://www.amazon.co.uk/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/" className="text-blue-600 hover:text-blue-800"> Amazon.co.uk in the UK. </a>
            </h2>

            <p className="text-gray-600 text-lg">
              The book is based on my lecture notes for many courses (modules), for example, <a href="/2020_math1024.pdf" className="text-blue-600 hover:text-blue-800">Introduction to Probability and Statistics,</a> taught to first and second year students in various BSc in Mathematics degree programmes.
            </p>

            <p className="text-gray-600 text-lg">
              Here is a <a href="/Intro_book_preview_Sahu.pdf" className="text-blue-600 hover:text-blue-800">preview pdf file</a>. You may be able to access the book in various different formats
              <a href="https://wayf.springernature.com/?redirect_uri=https%3A%2F%2Flink.springer.com%2Fbook%2F10.1007%2F978-3-031-37865-2" className="text-blue-600 hover:text-blue-800"> through your own institution.</a>
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key features of the book:</h2>
              <ul className="space-y-4 list-none">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">This is an accessible textbook that engages the reader with many practical examples using probability and statistics for data science and machine learning.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">The book provides a comprehensive coverage of topics in probability, and both applied and mathematical statistics.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">The topics discussed in the book cover the syllabus for the 2023 Actuarial Statistics 1 examination administered by the Institute and Faculty of Actuaries in London.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">R, a popular statistical computing software package, is introduced from scratch and illustrated with many practical data sets. For example, see the <a href="/bookipsrdbs/Part1.html" className="text-blue-600 hover:text-blue-800">R Getting Started page</a> or the <a href="/bookipsrdbs/vignette_full.html" className="text-blue-600 hover:text-blue-800">the package vignette.</a></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">The book comes with its own dedicated R package <a href="https://CRAN.R-project.org/package=ipsRdbs" className="text-blue-600 hover:text-blue-800">ipsRdbs,</a> available from <a href="https://CRAN.R-project.org/" className="text-blue-600 hover:text-blue-800">CRAN.</a> Once inside R and with the package installed, just asking for help for any data set included in the package will produce all the code required to reproduce the results and analysis presented in the book for that data set. Hence, a beginner reader can reproduce all those results without having to first learn all the commands and their exact syntax in R. This makes it seamless to learn, use and apply practical methods in introductory probability, statistics and beyond.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">The textbook also contains many theoretical and applied exercises for readers and instructors.</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Some of the images below are shown using Creative Commons BY License detailed in the book.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/college2.jpg" alt="college2" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/gamma_density.png" alt="gamma density" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/Lion_cub.jpg" alt="Lion cub" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/mediansqueeze.png" alt="mediansqueeze" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/n2contours2.png" alt="n2contours2" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/possum.jpg" alt="possum" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

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
              <p className="text-gray-700">
                This chapter introduces random variables and their probability distributions. It discusses the probability mass function for discrete random variables and the probability density function for continuous random variables. The cumulative distribution function is also introduced.
              </p>
            </li>
            <li>
              <h5 id="chapter-6" className="text-xl font-semibold mb-2">
                <a href="/bookipsrdbs/chap6/" className="text-blue-600 hover:text-blue-800">Chapter 6</a>
              </h5>
              <p className="text-gray-700">
                This chapter introduces the standard discrete distributions: Bernoulli, binomial, Poisson, geometric, hypergeometric and negative binomial. In each case the basic properties, such as mean and variance are obtained and the R commands to obtain probabilities and cumulative probabilities are illustrated.
              </p>
            </li>
            <li>
              <h5 id="chapter-7" className="text-xl font-semibold mb-2">
                <a href="/bookipsrdbs/chap7/" className="text-blue-600 hover:text-blue-800">Chapter 7</a>
              </h5>
              <p className="text-gray-700">
                This chapter introduces standard continuous distributions: exponential, normal, gamma and beta. As in Chapter 6, here we find the means and variances and also discuss the R commands for finding various quantities for each distribution.
              </p>
            </li>
            <li>
              <h5 id="chapter-8" className="text-xl font-semibold mb-2">
                <a href="/bookipsrdbs/chap8/" className="text-blue-600 hover:text-blue-800">Chapter 8</a>
              </h5>
              <p className="text-gray-700">
                This chapter introduces the joint probability distribution for multiple random variables. It also discusses conditional and marginal distributions, conditional expectations, covariance and correlation. Finally it introduces the central limit theorem for the sum of independent random variables.
              </p>
            </li>
            <li>
              <h5 id="chapter-9" className="text-xl font-semibold mb-2">
                <a href="/bookipsrdbs/chap9/" className="text-blue-600 hover:text-blue-800">Chapter 9</a>
              </h5>
              <p className="text-gray-700">
                This chapter introduces the basic concepts of statistical inference and statistical modelling. It distinguishes between population distributions and sample statistics (quantities). The concepts of estimators and their sampling distributions are introduced.
              </p>
            </li>
            <li>
              <h5 id="chapter-10" className="text-xl font-semibold mb-2">
                <a href="/bookipsrdbs/chap10/" className="text-blue-600 hover:text-blue-800">Chapter 10</a>
              </h5>
              <p className="text-gray-700">
                This chapter introduces the concepts of confidence intervals and hypothesis testing. It discusses the t-test for comparing means and the chi-square test for comparing variances. The concepts of Type I and Type II errors are also introduced.
              </p>
            </li>
            <li>
              <h5 id="chapter-11" className="text-xl font-semibold mb-2">
                <a href="/bookipsrdbs/chap11/" className="text-blue-600 hover:text-blue-800">Chapter 11</a>
              </h5>
              <p className="text-gray-700">
                This chapter introduces linear regression models. It discusses simple and multiple regression, model fitting, interpretation of coefficients, and model diagnostics. The chapter also covers analysis of variance (ANOVA) and its applications.
              </p>
            </li>
            <li>
              <h5 id="chapter-12" className="text-xl font-semibold mb-2">
                <a href="/bookipsrdbs/chap12/" className="text-blue-600 hover:text-blue-800">Chapter 12</a>
              </h5>
              <p className="text-gray-700">
                This chapter covers advanced topics in statistical modeling, including generalized linear models, logistic regression for binary data, and Poisson regression for count data. It also introduces model selection techniques and validation methods.
              </p>
            </li>
          </ul>

          <p className="text-gray-600 mb-6 text-lg" id="here-is-a-preview-pdf-file">
            Here is a <a href="https://www.sujitsahu.com//ipsRdbs/Intro_book_preview_Sahu.pdf" className="text-blue-600 hover:text-blue-800">preview pdf file.</a> 
            You may be able to access the book in various different formats 
            <a href="https://wayf.springernature.com/?redirect_uri=https%3A%2F%2Flink.springer.com%2Fbook%2F10.1007%2F978-3-031-37865-2%3F_gl%3D1*17rnx1i*_up*MQ..%26gclid%3DCj0KCQjw2a6wBhCVARIsABPeH1vT1jB8a8B-8flWTBxuryQYtkto1SFKqS2SNTzhL8FutIK7z72FYx4aAsTpEALw_wcB" className="text-blue-600 hover:text-blue-800">through your own institution.</a>
            <a className="anchorjs-link" aria-label="Anchor" data-anchorjs-icon="" href="#here-is-a-preview-pdf-file" style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em' }}></a>
          </p>
          <p className="text-gray-600 mb-6 text-lg" id="the-book-is-based-on-my-lecture-notes">
            The book is based on my lecture notes for the module
            <Link href="/2020_math1024.pdf" className="text-blue-600 hover:text-blue-800" target="_blank">Introduction to Probability and Statistics,</Link> 
            taught to first and second year students in various BSc in Mathematics degree programmes.
            <a className="anchorjs-link" aria-label="Anchor" data-anchorjs-icon="" href="#the-book-is-based-on-my-lecture-notes" style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em' }}></a>
          </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookIPSRDBSPage;
