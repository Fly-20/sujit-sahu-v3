'use client';

import React from 'react';
import TableOfContents from './TableOfContents';

export default function BookIPSRDBSContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/4">
        <TableOfContents
          bookId="bookipsrdbs"
          chapters={[
            { title: "1. Introduction to Basic Statistics" },
            { title: "2. Getting Started with R" },
            { title: "3. Descriptive Statistics" },
            { title: "4. Probability" },
            { title: "5. Random Variables" },
            { title: "6. Discrete Probability Distributions" },
            { title: "7. Continuous Probability Distributions" },
            { title: "8. Sampling Distribution" },
            { title: "9. Sampling from Normal Distribution" },
            { title: "10. Point Estimation" },
            { title: "11. Interval Estimation" },
            { title: "12. Testing Statistical Hypotheses" },
            { title: "13. Generating Functions" },
            { title: "14. Transformation of Random Variables" },
            { title: "15. Order Statistics" },
            { title: "16. Convergence of Random Variables" },
            { title: "17. Regression" },
            { title: "18. Correlation" },
            { title: "19. Asymptotic Theory" }
          ]}
        />
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

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          It is now possible to order this book from
          <a href="https://www.waterstones.com/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> Waterstones, </a> or
          <a href="https://www.barnesandnoble.com/w/introduction-to-probability-statistics-r-sujit-k-sahu/1143708068?ean=9783031378652" className="text-blue-600 hover:text-blue-800"> Barnes & Noble, </a> or
          <a href="https://www.foyles.co.uk/book/introduction-to-probability-statistics-and-r/sujit-k-sahu/9783031378645" className="text-blue-600 hover:text-blue-800"> foyles bookshops </a> or
          <a href="https://www.amazon.com/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/" className="text-blue-600 hover:text-blue-800"> Amazon.com </a> or 
          <a href="https://www.amazon.co.uk/Introduction-Probability-Statistics-Foundations-Data-Based/dp/3031378644/" className="text-blue-600 hover:text-blue-800"> Amazon.co.uk in the UK. </a>
        </h2>

        <p className="text-gray-600 text-lg">
          The book is based on my lecture notes for many courses (modules), for example, <a href="/2020_math1024.pdf" className="text-blue-600 hover:text-blue-800">Introduction to Probability and Statistics,</a> taught to first and second year students in various BSc in Mathematics degree programmes.
          The book contains many examples and exercises, and it is suitable for self-study as well as classroom use.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/college2.jpg" alt="college2" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/gamma_density.png" alt="gamma density" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/mediansqueeze.png" alt="mediansqueeze" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/mgf.png" alt="mgf" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/n2contours2.png" alt="n2contours2" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img src="/bookipsrdbs/possum.jpg" alt="possum" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
