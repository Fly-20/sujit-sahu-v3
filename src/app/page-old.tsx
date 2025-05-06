'use client';
import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import TestimonialSlider from '@/components/home/TestimonialSlider';

interface Experience {
  title: string;
  organization: string;
  duration: string;
  location: string;
}

const experiences = [
  {
    title: 'Professor, Senior Lecturer and Lecturer in Statistics',
    organization: 'University of Southampton',
    duration: 'Sep 1999 – Present',
    location: 'Southampton, UK',
  },
  {
    title: 'Lecturer in Statistics',
    organization: 'Cardiff University',
    duration: 'Jan 1997 – Aug 1999',
    location: 'Cardiff',
  },
  {
    title: 'Research Associate',
    organization: 'University of Cambridge',
    duration: 'Mar 1994 – Dec 1996',
    location: 'Cambridge',
  },
];

const booksList = [
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
        <section id="hero" className="py-16 bg-white">
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
                <div className="text-center mt-6">
                  <h1 className="text-3xl font-bold text-gray-900">Sujit Sahu</h1>
                  <h2 className="text-xl text-gray-700 mt-2">Professor of Statistics</h2>
                  <p className="text-gray-600 mt-1">University of Southampton</p>
                </div>
                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  <a href="https://www.sujitsahu.com/#contact" className="text-blue-600 hover:text-blue-800" title="Contact">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                  <a href="https://x.com/Sujit_K_Sahu" className="text-blue-600 hover:text-blue-800" title="Twitter/X">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href="https://scholar.google.co.uk/citations?user=5TaCEasAAAAJ&hl=en" className="text-blue-600 hover:text-blue-800" title="Google Scholar">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      <path d="M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                    </svg>
                  </a>
                  <a href="https://github.com/sujit-sahu" className="text-blue-600 hover:text-blue-800" title="GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/sujit-sahu-0a4679152" className="text-blue-600 hover:text-blue-800" title="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Biography Content */}
              <div className="w-full md:w-3/4">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Biography</h1>
                <div className="space-y-12">
                  {/* First Row */}
                  <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                      <p className="text-lg text-gray-700">
                        Sujit Sahu is a Professor of Statistics at the University of Southampton. He is the author of the book{' '}
                        <Link href="/books/bookipsrdbs" className="text-blue-600 hover:text-blue-800">Introduction to Probability, Statistics & R; Foundations for Data-Based Sciences</Link>, published by Springer Nature in 2024.
                      </p>
                      <div className="mt-6">
                        <Image
                          src="/1.png"
                          alt="Additional content"
                          width={160}
                          height={80}
                          className="w-1/5 h-auto rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Image
                        src="/cover_ipsRdbs.png"
                        alt="Introduction to Probability, Statistics & R Book Cover"
                        width={450}
                        height={300}
                        className="w-3/4 h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                                    </mask>
                                    <g id="76j0nl-gradient" filter="url(#76j0nl-blur)">
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
                                <div class="__db_background"></div>
                                <div class="__db_shape">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <use mask="url(#76j0nl-shape-mask)" xlink:href="#76j0nl-gradient"></use>
                                  </svg>
                                </div>
                                <div class="__db_score __db_score_normal">24</div>
                                <div class="__db_label">CITATIONS</div>
                                <img src="https://badge.dimensions.ai/badge?count=24" class="__dimensions_png" alt="24 total citations on Dimensions.">
                              </div>
                            </div>
                          </a>
                        </span>
                      ` }} />
                    </div>
                    <div className="col-span-1">
                      <Image
                        src="/cover_bmstdr.png"
                        alt="Bayesian modeling of spatio-temporal data with R Book Cover"
                        width={450}
                        height={300}
                        className="w-3/4 h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>


                </div>

                {/* Interests and Education Section */}
                <p className="text-lg text-gray-700 mb-8">
            <Link href="/2023_sahuresume.pdf" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Download Sujit's resumé</Link>
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
                  {/* Interests */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Interests</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Bayesian Statistics and Modeling</li>
                      <li>Spatio-temporal Data Analysis</li>
                      <li>Environmental and Climate Science Applications</li>
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
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Bachelor of Statistics (Honors), 1987</h3>
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
        <section id="books" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Introduction to Probability, Statistics and R for Data Science</h3>
                  <p className="text-gray-600 mb-4">A comprehensive guide to probability, statistics, and R programming with applications in data science.</p>
                  <a href="/books/bookipsrdbs" className="text-blue-600 hover:text-blue-800 font-medium">Learn more →</a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bayesian Modeling and Spatial-Temporal Data Analysis in R</h3>
                  <p className="text-gray-600 mb-4">Advanced techniques for analyzing spatial and temporal data using Bayesian methods in R.</p>
                  <a href="/books/bookbmstdr" className="text-blue-600 hover:text-blue-800 font-medium">Learn more →</a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bayesian Modeling and Spatial-Temporal Data Analysis in R</h3>
                  <p className="text-gray-600 mb-4">Advanced techniques for modeling and analyzing spatio-temporal data using Bayesian methods and R.</p>
                  <a href="/books/bookbmstdr" className="text-blue-600 hover:text-blue-800 font-medium">Learn more →</a>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-8">
                All my research publications are listed on <Link href="/publications" className="text-blue-600 hover:text-blue-800">my publication page</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
            <h3 className="text-xl text-gray-700 mb-8">Supervision Record, Experience and Employment history</h3>
            
            <div className="space-y-12">
              {/* Post-graduate Supervision */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Post-graduate Supervision</h4>
                <p className="text-lg text-gray-700"><Link href="/phdstudents" className="text-blue-600 hover:text-blue-800">Here is a list of all my past post-docs, PhD and MSc students.</Link></p>
              </div>

              {/* Research Grants */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Research Grants Obtained</h4>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li><Link href="/grants" className="text-blue-600 hover:text-blue-800">List of Research Grants.</Link></li>
                  <li><Link href="/pollution_estimates" className="text-blue-600 hover:text-blue-800">Air pollution estimates page.</Link></li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Education and Experience</h4>
                <p className="text-lg text-gray-700 mb-6"><Link href="/education" className="text-blue-600 hover:text-blue-800">Educational Qualifications and Experience.</Link></p>
              </div>

              {/* Employment History */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Employment History</h4>
                <div className="space-y-8">
                  {experiences.map((experience) => (
                    <div key={experience.organization} className="bg-white rounded-lg shadow-lg p-6 flex gap-6 items-start">
                      <div className="flex-shrink-0 w-32 h-32">
                        <Image
                          src={experience.organization === 'University of Southampton' ? '/University_of_Southampton_Logo.png' :
                               experience.organization === 'Cardiff University' ? '/cardiff-logo.png' :
                               experience.organization === 'University of Cambridge' ? '/cambridge-logo.png' :
                               '/placeholder.png'}
                          alt={`${experience.organization} logo`}
                          width={400}
                          height={400}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                        <div className="text-gray-600 mt-1">{experience.organization}</div>
                        <div className="text-gray-500 text-sm mt-1">{experience.duration} • {experience.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* bmstdr Section */}
        <section id="bmstdr" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12">
              {/* bmstdr content: now stacked in one column */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">R package 'bmstdr'</h1>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600">
                  The package source is available from{' '}
                  <a href="https://cran.r-project.org/package=bmstdr" className="text-blue-600 hover:text-blue-800">CRAN</a>{' '}
                  and{' '}
                  <a href="https://github.com/sujit-sahu/bmstdr" className="text-blue-600 hover:text-blue-800">github</a>.
                  Here is a{' '}
                  <a href="/bmbook/bmstdr-full_vignette" className="text-blue-600 hover:text-blue-800">full version of the vignette</a>.
                  </p>
                  <Link href="/bmbook/install-bmstdr" className="inline-block text-blue-600 hover:text-blue-800 font-medium">Installation Instructions →</Link>
                </div>
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
                      <a href="/bmbook/install-bmstdr" className="text-blue-600 hover:text-blue-800">the commands in this R file</a>{' '}
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
                    <a href="/bmstdr_0.3.0.manual.pdf" className="text-blue-600 hover:text-blue-800">A pdf version of the manual</a>{' '}
                    is also available.
                  </li>
                  <li>
                    Here is{' '}
                    <a href="/bmstdr_poster.pdf" className="text-blue-600 hover:text-blue-800">a conference poster for bmstdr</a>.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <div id="reviews">
          <TestimonialSlider />
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
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
    {/* Google reCAPTCHA v2 placeholder */}
    <div className="flex justify-center">
      {/* Replace data-sitekey with your own reCAPTCHA site key */}
      <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
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
