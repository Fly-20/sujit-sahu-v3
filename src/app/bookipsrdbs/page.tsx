import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const BookIPSRDBSPage: NextPage = () => {
  const chapters = Array.from({ length: 19 }, (_, i) => i + 1);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="lg:w-3/4">
          <Link href="/books/bookipsrdbs" className="hover:text-blue-800">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Probability, Statistics and R</h1>
          </Link>
          
          <p className="text-gray-600 mb-6 text-lg">
            By Sujit K. Sahu (2024), Springer, ISBN: 978-3-031-378644-5
          </p>
          <p className="text-gray-600 mb-6 text-lg" id="it-is-now-possible-to-order-this-book-from-waterstones-or-barnes">
            It is now possible to order this book from
            <a href="https://www.waterstones.com/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> Waterstones, </a> or
            <a href="https://www.barnesandnoble.com/w/introduction-to-probability-statistics-r-sujit-k-sahu/1143708068?ean=9783031378652" className="text-blue-600 hover:text-blue-800"> Barnes & Noble, </a> or
            <a href="https://www.foyles.co.uk/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> foyles bookshops </a> or
            <a href="https://www.amazon.com/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/ref=sr_1_9?crid=1RJ2IRPKDNIPQ&dib=eyJ2IjoiMSJ9.EeHNUwCPC6hUERkoYK3e96D9zzcyyRECNegYO-4_I_w1oQuexD8zxT5CC7jIrBtNb9e_2uPlUaisxd1EyFqOQ1C0s37ouJffIdXKb9t9JHtQSP6e5BcwrfN-RCx6SPtlkAPlit27t7-9qZeg3vqlocsNKAEhFWOhbG3-0bdmPNdEpJNpgUWs1EVuAFfC9waTakndlivBcbmF4fl3lDhHvHNAPzCxLYCYcJjpA7Rq3IA.XGN5h2li9HOJv88G401nWx8lJdvGduyvAoSJJWjK6js&dib_tag=se&keywords=introduction+to+probability+and+statistics&qid=1711893475&sprefix=Introduction+to+Pr%2Caps%2C86&sr=8-9" className="text-blue-600 hover:text-blue-800"> Amazon.com </a> or
            <a href="https://www.amazon.co.uk/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/ref=sr_1_9?crid=1RJ2IRPKDNIPQ&dib=eyJ2IjoiMSJ9.EeHNUwCPC6hUERkoYK3e96D9zzcyyRECNegYO-4_I_w1oQuexD8zxT5CC7jIrBtNb9e_2uPlUaisxd1EyFqOQ1C0s37ouJffIdXKb9t9JHtQSP6e5BcwrfN-RCx6SPtlkAPlit27t7-9qZeg3vqlocsNKAEhFWOhbG3-0bdmPNdEpJNpgUWs1EVuAFfC9waTakndlivBcbmF4fl3lDhHvHNAPzCxLYCYcJjpA7Rq3IA.XGN5h2li9HOJv88G401nWx8lJdvGduyvAoSJJWjK6js&dib_tag=se&keywords=introduction+to+probability+and+statistics&qid=1711893475&sprefix=Introduction+to+Pr%2Caps%2C86&sr=8-9" className="text-blue-600 hover:text-blue-800"> Amazon.co.uk in the UK. </a>
            <a className="anchorjs-link" aria-label="Anchor" data-anchorjs-icon="" href="#it-is-now-possible-to-order-this-book-from-waterstones-or-barnes" style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em' }}></a>
          </p>

          <p className="text-gray-600 mb-6 text-lg" id="the-book-is-based-on-my-lecture-notes">
            The book is based on my lecture notes for many courses (modules), for example, 
            <a href="https://www.sujitsahu.com/teach/2020_math1024.pdf" className="text-blue-600 hover:text-blue-800">Introduction to Probability and Statistics,</a> 
            taught to first and second year students in various BSc in Mathematics degree programmes.
            <a className="anchorjs-link" aria-label="Anchor" data-anchorjs-icon="" href="#the-book-is-based-on-my-lecture-notes" style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em' }}></a>
          </p>

          <p className="text-gray-600 mb-6 text-lg" id="here-is-a-preview-pdf-file">
            Here is a <a href="https://www.sujitsahu.com//ipsRdbs/Intro_book_preview_Sahu.pdf" className="text-blue-600 hover:text-blue-800">preview pdf file.</a> 
            You may be able to access the book in various different formats 
            <a href="https://wayf.springernature.com/?redirect_uri=https%3A%2F%2Flink.springer.com%2Fbook%2F10.1007%2F978-3-031-37865-2%3F_gl%3D1*17rnx1i*_up*MQ..%26gclid%3DCj0KCQjw2a6wBhCVARIsABPeH1vT1jB8a8B-8flWTBxuryQYtkto1SFKqS2SNTzhL8FutIK7z72FYx4aAsTpEALw_wcB" className="text-blue-600 hover:text-blue-800">through your own institution.</a>
            <a className="anchorjs-link" aria-label="Anchor" data-anchorjs-icon="" href="#here-is-a-preview-pdf-file" style={{ font: '1em / 1 anchorjs-icons', paddingLeft: '0.375em' }}></a>
          </p>
          

          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3">
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
                <span className="text-gray-600">R, a popular statistical computing software package, is introduced from scratch and illustrated with many practical data sets. For example, see the <Link href="/bookipsrdbs/part1" className="text-blue-600 hover:text-blue-800">R Getting Started page</Link> or the <Link href="/bookipsrdbs/vignette_full" className="text-blue-600 hover:text-blue-800">package vignette.</Link></span>
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

          <h2 className="text-2xl font-bold mb-6">Chapters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((chapter) => (
              <Link 
                key={chapter}
                href={`/bookipsrdbs/chap${chapter}`}
                className="p-4 border rounded-lg hover:bg-gray-50 text-blue-600"
              >
                Chapter {chapter}
              </Link>
            ))}
            <Link 
              href="/bookipsrdbs/Resources"
              className="p-4 border rounded-lg hover:bg-gray-50 text-blue-600 bg-gray-50"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookIPSRDBSPage;
