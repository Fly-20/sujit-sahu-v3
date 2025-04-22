'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Research projects offered to all BSc, MSc and PhD students
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Observations that vary in both space and time are called spatio-temporal data. Example data set includes air pollution,
            precipitation, temperature, disease specific (Covid-19) case and death rates, brain imaging,
            ocean characteristics such as temperature, salinity and chlorophyll levels.
          </p>

          <p className="text-gray-600 mb-8">
            Data science techniques are to be used to extract the scientific information, e.g. long term trend in global
            warming, hidden in these large data sets. Example of data science techniques include regression modelling and validation methods.
            Intuitively one can expect that spatio-temporal regression models that exploit the spatio-temporal dependence in the data
            will perform better than regression models with iid error distribution assumption.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">If you are interested in:</h2>
          <ul className="space-y-8">
            <li>
              <span className="text-2xl text-green-600 font-arial">environmental statistics</span>
              <p className="mt-2">
                you will have the opportunity to learn modelling of large climate and air pollution data sets. You can aim to 
                <span className="text-teal-600 font-arial">'go green'</span> with Prof Sahu!
              </p>
              <p className="mt-4">
                A third year Mathematics BSc student, Ms Jinran Zhan, worked on a very similar project in 2018-2019 and
                based on the project it has been possible to publish the research paper: 
                <Link href="/projects/Precip_JSM_proceedings_2020.pdf" className="text-blue-600 hover:text-blue-800">
                  Spatio-temporal Bayesian modeling of precipitation using rain gauge data from the Hubbard Brook Experimental Forest, New Hampshire, USA.
                </Link>
              </p>
            </li>

            <li>
              <span className="text-2xl text-blue-600 font-arial">data science</span>
              <p className="mt-2">
                you will learn spatio-temporal regression models that outperfom independent error regression model in out of sample validation.
                This is indeed true for most data sets and you will have the opportunity to experience these results yourself.
                You will have ample chance to learn <i>to swim with data.</i>
              </p>
              <p className="mt-4">
                During 2019-2020 Witaya Bamrungpong, a student in our MSc in Data & Decision Analytics worked on 
                <Link href="/projects/Presentation_Witaya_31411029.pdf" className="text-blue-600 hover:text-blue-800">
                  data science project on air pollution modelling
                </Link> which secured him the <b>top prize</b> from Boeing for 19/20 CORMSIS MSc Maths OR students.
              </p>
            </li>

            <li>
              <span className="text-2xl text-purple-600 font-arial">medical statistics,</span>
              <p className="mt-2">
                you will learn to perform Bayesian disease mapping for analysing live coronavirus pandemic data. A research paper jointly written with Prof Dankmar Boehning is 
                <Link href="/projects/sptime_covid.pdf" className="text-blue-600 hover:text-blue-800">also available.</Link>
              </p>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            If you are thinking of studying for PhD please email me. You may also want to see my 
            <Link href="/publicationlist" className="text-blue-600 hover:text-blue-800 mx-1">research publication list</Link>
            and
            <Link href="/phdstudents" className="text-blue-600 hover:text-blue-800 mx-1">supervision record.</Link>
          </h2>

          <p className="text-gray-600 mt-8">
            Getting started with each project is easy with the R-package <b>bmstdr</b> developed by Prof Sahu. The projects will also benefit from an accessible textbook currently being written by Prof Sahu on the same topic.
            The projects will suit students with a wide range of interests in theory and application at all levels:
            <span className="text-red-600 font-arial mx-1">BSc,</span>
            <span className="text-teal-600 font-arial mx-1">MSc</span>
            and
            <span className="text-navy-600 font-arial mx-1">PhD.</span>
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-4">
            <li>A mathematically strong and motivated student can develop the theory behind the modelling so that new models can be fitted.</li>
            <li>A student with interests in data analytics and data science can analyse a brand new spatio-temporal data set of their choice.</li>
            <li>A student aiming to gain key skills in R programming can develop and enhance the <b>bmstdr</b> package.</li>
            <li>It is possible to mix and match the above, i.e. theoretical development, application analytics and software development, depending on your own interest and dedication.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Practical examples from projects done by past students:</h2>
          <ol className="space-y-12">
            <li>
              <h3 className="text-xl font-semibold mb-4">Number of Covid-19 deaths per million people upto September, 2020.</h3>
              <Image
                src="/projects/covid_19_deaths.png"
                alt="global trend"
                width={800}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </li>

            <li>
              <h3 className="text-xl font-semibold mb-4">Annual percentage trend in ocean chlorophyll levels.</h3>
              <Image
                src="/projects/space_trend_longhurst.png"
                alt="global trend"
                width={900}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </li>

            <li>
              <h3 className="text-xl font-semibold mb-4">Average number of weekly covid deaths and levels of NO2 in England</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src="/projects/observed_covid_death_rate.png"
                  alt="Observed Covid death rate"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/projects/mean_no2_by_LA.png"
                  alt="Mean NO2 levels"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </li>

            <li>
              <h3 className="text-xl font-semibold mb-4">Annual average temperature in the north Atlantic in 2003 and average air pollution in New York.</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src="/projects/temp_deep.png"
                  alt="annual temperature"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/projects/predicted_ny.png"
                  alt="air pollution in New York"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </li>

            <li>
              <h3 className="text-xl font-semibold mb-4">Annual precipitation and trend map of Hubbard Brook experimental forest in New Hampshire, USA</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src="/projects/rolling_rain2010_hbes.png"
                  alt="rolling average"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/projects/trend_wshed05-15.png"
                  alt="trend map"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </li>

            <li>
              <h3 className="text-xl font-semibold mb-4">Air pollution modelling maps for eastern USA</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src="/projects/grid_knots.png"
                  alt="rolling average"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/projects/prob_3y_06_gt85.png"
                  alt="trend map"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </li>

            <li>
              <h3 className="text-xl font-semibold mb-4">Air pollution and their sd map of England and Wales.</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src="/projects/no2_la_2011.png"
                  alt="rolling average"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/projects/no2_la_2011_sd.png"
                  alt="trend map"
                  width={450}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
    </Layout>
  );
}
