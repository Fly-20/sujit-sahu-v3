'use client';

import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import TestimonialSlider from '@/components/home/TestimonialSlider';

interface Experience {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Professor of Statistics',
    organization: 'University of Southampton',
    duration: '2010 - Present',
    description: 'Teaching and research in statistics, focusing on Bayesian methods and spatial-temporal modeling.'
  },
  {
    title: 'Associate Professor',
    organization: 'University of Southampton',
    duration: '2005 - 2010',
    description: 'Led research projects in statistical modeling and supervised graduate students.'
  },
  {
    title: 'Assistant Professor',
    organization: 'Cardiff University',
    duration: '2000 - 2005',
    description: 'Developed and taught courses in statistics and probability theory.'
  }
];

const books = [
  {
    title: 'Introduction to Probability, Statistics and R for Data Science',
    description: 'A comprehensive guide to probability, statistics, and R programming with applications in data science.',
    link: 'bookipsrdbs',
    imageUrl: '/book-ipsrdbs.jpg', // We'll add this image later
  },
  {
    title: 'Bayesian Modeling and Spatial-Temporal Data Analysis in R',
    description: 'Advanced techniques for analyzing spatial and temporal data using Bayesian methods in R.',
    link: 'bookbmstdr',
    imageUrl: '/book-bmstdr.jpg', // We'll add this image later
  },
  {
    title: 'Bayesian Modeling of Spatio-Temporal Data with R',
    description: 'Advanced techniques for modeling and analyzing spatio-temporal data using Bayesian methods and R.',
    link: 'bookbmstdr',
  }
];

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left Column - Profile Image & Social Icons */}
              <div className="w-full md:w-1/4 flex flex-col items-center">
                <div className="w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src="/sujit-profile.png"
                    alt="Prof Sujit Sahu"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-full"
                    priority
                    quality={100}
                  />
                </div>
                
                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  <a href="https://twitter.com/example" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href="https://github.com/example" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/example" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Biography Content */}
              <div className="w-full md:w-3/4">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Biography</h1>
              <div className="space-y-8">
                <p className="text-lg text-gray-700">
                  Sujit Sahu is a Professor of Statistics at the University of Southampton. He is the author of the book{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">Introduction to Probability, Statistics & R; Foundations for Data-Based Sciences</a>, published by Springer Nature in 2024.
                </p>

                <p className="text-lg text-gray-700">
                  He is also the author of the book{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">Bayesian modeling of spatio-temporal data with R</a> published by{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">Chapman and Hall/CRC Press</a>. Here is a{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">(Twitter) X video</a> introducing the book.
                </p>

                <p className="text-lg text-gray-700">
                  This textbook is one of the top 20 winners of the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800">Book Authority Best Bayesian Statistics Books of All Time</a>.
                </p>

                <p className="text-lg text-gray-700">
                  <a href="/resume.pdf" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Sujit's resumé
                  </a>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {/* Interests */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interests</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Bayesian modeling
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Bayesian computation
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Spatio-temporal data modeling
                    </li>
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">PhD in Statistics, 1994</h3>
                      <p className="text-gray-600">University of Connecticut</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Master of Statistics, 1989</h3>
                      <p className="text-gray-600">Indian Statistical Institute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {books.map((book, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-gray-600 mb-4">{book.description}</p>
                    <a
                      href={`/books/${book.link}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn more &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.organization} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                  <div className="text-gray-600 mt-1">{experience.organization}</div>
                  <div className="text-gray-500 text-sm mt-1">{experience.duration}</div>
                  <p className="text-gray-700 mt-4">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* bmstdr Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">R package 'bmstdr'</h1>
                <p className="text-lg text-gray-600">
                  The package source is available from{' '}
                  <a href="https://cran.r-project.org/package=bmstdr" className="text-blue-600 hover:text-blue-800">CRAN</a>{' '}
                  and{' '}
                  <a href="https://github.com/sujit-sahu/bmstdr" className="text-blue-600 hover:text-blue-800">github</a>.
                  Here is a{' '}
                  <a href="/bmbook/bmstdr-full_vignette" className="text-blue-600 hover:text-blue-800">full version of the vignette</a>.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <ul className="space-y-6">
                  <li>
                    <p className="mb-2">Please install the package directly from CRAN.</p>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>install.packages("bmstdr", dependencies = TRUE)</code>
                    </pre>
                  </li>
                  <li>
                    <p className="mb-2">
                      There is a long list of dependent packages that may need to be installed on your computer. You may find{' '}
                      <a href="/bmbook/install-bmstdr.R" className="text-blue-600 hover:text-blue-800">the commands in this R file</a>{' '}
                      useful to install those packages.
                    </p>
                  </li>
                  <li>
                    <p className="mb-2">
                      Development version of the package can be installed from github using the <b>R</b> command:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>devtools::install_github("sujit-sahu/bmstdr", build_vignettes = TRUE)</code>
                    </pre>
                  </li>
                  <li>
                    <p className="mb-2">You may check the installation:</p>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>library(bmstdr)
ls("package:bmstdr")
browseVignettes('bmstdr')</code>
                    </pre>
                  </li>
                  <li>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      Here is{' '}
                      <a href="/bmbook/bmstdr-full_vignette" className="text-blue-600 hover:text-blue-800">a full version of the vignette</a>.
                      This version has not been distributed with the package because of file size limitation in CRAN.
                    </h2>
                  </li>
                  <li>
                    <a href="/bmbook/bmstdr_0.3.0.manual.pdf" className="text-blue-600 hover:text-blue-800">A pdf version of the manual</a>{' '}
                    is also available.
                  </li>
                  <li>
                    Here is{' '}
                    <a href="/bmbook/bmstdr_poster.pdf" className="text-blue-600 hover:text-blue-800">a conference poster for bmstdr</a>.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <TestimonialSlider />

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
