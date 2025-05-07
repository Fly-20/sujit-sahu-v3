'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

interface MScStudent {
  id: number;
  name: string;
  nameColor: string;
  session: string;
  thesisTitle: string;
  thesisLink?: string;
}

interface Student {
  id: number;
  name: string;
  nameColor: string;
  graduationYear: string;
  thesisTitle: string;
  coSupervisors?: string;
  destination?: string;
  destinationLink?: string;
}

const mscStudents: MScStudent[] = [
  { id: 41, name: 'Md Sifat Ar Salan', nameColor: '#000080', session: '2020-2021', thesisTitle: 'A Hierarchical Bayesian Spatio-temporal Modelling to Analyze the COVID-19 Cases of Bangladesh' },
  { id: 40, name: 'Josphine Dahne', nameColor: '#FF0000', session: '2019-2020', thesisTitle: 'Bayesian Modelling of Spatio Temporal temperature data in Aragon, Spain' },
  { id: 39, name: 'Xiyue Wang', nameColor: '#FF0000', session: '2019-2020', thesisTitle: 'Study and prediction of temperature and salinity in different layers of the ocean using Argo data' },
  { id: 38, name: 'Wenyu Sun', nameColor: '#FF0000', session: '2019-2020', thesisTitle: 'Bayesian Methods for Spatial and Spatio-temporal Modelling of child poverty in London' },
  { id: 37, name: 'Qiuying Mao', nameColor: '#FF0000', session: '2019-2020', thesisTitle: 'Bayesian Methods for Spatial and Spatio-temporal Modelling of Covid-19 Cases in Local Authorities of England in 20 Weeks' },
  { id: 36, name: 'Witaya Bamrungpong', nameColor: '#000080', session: '2019-2020', thesisTitle: 'Bayesian spatio-temporal modelling and validation for air pollution data from Piemonte, Italy', thesisLink: '../projects/Presentation_Witaya_31411029.pdf' },
  { id: 35, name: 'Binbin Wang', nameColor: '#000080', session: '2019-2020', thesisTitle: 'Bayesian modelling and prediction of PM10 in Italy' },
  { id: 34, name: 'Rattanawadee Tekavong', nameColor: '#FF0000', session: '2019-2020', thesisTitle: 'Bayesian modelling for particulate matter in Piemonte, Italy' },
  { id: 33, name: 'Yunning Lei', nameColor: '#FF0000', session: '2019-2020', thesisTitle: 'Bayesian modelling and analysis of pm10 in Italy' },
  { id: 32, name: 'Zhuoran Wu', nameColor: '#000080', session: '2019-2020', thesisTitle: 'Bayesian modelling of spatio-temporal data and analysis of daily amount of PM10 in Piemonte' },
  { id: 31, name: 'Jiahao Xu', nameColor: '#000080', session: '2019-2020', thesisTitle: 'Bayesian modelling and analysis of PM10 data at Piemonte' },
  { id: 30, name: 'Farah Roslan', nameColor: '#FF0000', session: '2018-2019', thesisTitle: 'Hierarchical Bayesian Spatio-temporal modelling on Rainfall data' },
  { id: 29, name: 'Ho Man Theophilus Chan', nameColor: '#000080', session: '2018-2019', thesisTitle: 'Modelling Childhood Measles Vaccination Coverage in India' },
  { id: 28, name: 'Nian Tang', nameColor: '#000080', session: '2017-2018', thesisTitle: 'Machine Learning Methods Focus on the Beijing Air Pollution' },
  { id: 27, name: 'Zhuoyi Shen', nameColor: '#FF0000', session: '2017-2018', thesisTitle: 'Predict the number of trees and percent tree cover for those un-observed plots, and the optimal sample plots in a given city' },
  { id: 26, name: 'Xiaoqing Chen', nameColor: '#FF0000', session: '2016-2017', thesisTitle: 'On estimation of areal aggregates from point level Bayesian hierarchical spatial modelling' },
  { id: 25, name: 'Yi Huang', nameColor: '#FF0000', session: '2016-2017', thesisTitle: 'A Bayesian item response model to analyse an international disability suvey data' },
  { id: 24, name: 'Xueru Li', nameColor: '#FF0000', session: '2016-2017', thesisTitle: 'Aggregating air pollution estimates for England and Wales' },
  { id: 23, name: 'Jinwu Cai', nameColor: '#000080', session: '2014-2015', thesisTitle: 'Space-time modelling and forecasting for air pollution data' },
  { id: 22, name: 'Richard Culliford', nameColor: '#000080', session: '2013-2014', thesisTitle: 'Application of Temporal-Spatial Modelling with the Estimation of Chlorophyll Concentration' },
  { id: 21, name: 'Sthaporn Thepsumritporn', nameColor: '#FF0000', session: '2013-2014', thesisTitle: 'Preliminary Analysis and Modelling of Nutrient Data Sets from the Christchurch Harbour' },
  { id: 20, name: 'Hanlu Chen', nameColor: '#FF0000', session: '2012-2013', thesisTitle: 'Modelling and Prediction of Hospital Length of Stay' },
  { id: 19, name: 'Zhongmin Jin', nameColor: '#000080', session: '2012-2013', thesisTitle: 'Motor Insurance and Risk of Accidents' },
  { id: 18, name: 'Khadija Gasimova', nameColor: '#FF0000', session: '2011-2012', thesisTitle: 'Insurance Regulations and Solvency II' },
  { id: 17, name: 'Ermioni Papadopoulou', nameColor: '#FF0000', session: '2010-2011', thesisTitle: 'Modelling and prediction of hospital length of stay' },
  { id: 16, name: 'Samuel Dumble', nameColor: '#000080', session: '2009-2010', thesisTitle: 'Analysis of objective polysomnography and subjective sleep measurements in insomnia patients' },
  { id: 15, name: 'Muhamad Mahmod Hussen', nameColor: '#000080', session: '2008-2009', thesisTitle: 'Skew Normal Regression Models' },
  { id: 14, name: 'Colin Everett', nameColor: '#000080', session: '2008-2009', thesisTitle: 'Analysing School of Mathematics Admissions Data' },
  { id: 13, name: 'Philip Prah', nameColor: '#000080', session: '2008-2009', thesisTitle: 'Analysing School of Mathematics Admissions Data' },
  { id: 12, name: 'Alexander N. Dolia', nameColor: '#000080', session: '2007-2008', thesisTitle: 'Bayesian and Maximum Likelihood Methods for Fitting Space-time Hierarchical Models' },
  { id: 11, name: 'Yuliana Yakouskaya', nameColor: '#FF0000', session: '2007-2008', thesisTitle: 'A Bayesian Method for Updating Hourly Ozone Maps in the eastern U.S.' },
  { id: 10, name: 'Jonathan Davey', nameColor: '#000080', session: '2007-2008', thesisTitle: 'Estimating the Difference in Mean Health-care Resource Usage in the Presence of Excess Zeros' },
  { id: 9, name: 'Kara Stevens', nameColor: '#FF0000', session: '2005-2006', thesisTitle: 'Investigation of Missing DNA Status in the Analysis of Cognitive and Physical Ability by Apoe Genotype' },
  { id: 8, name: 'Mehera Kidston', nameColor: '#FF0000', session: '2004-2005', thesisTitle: 'Spatio-temporal modeling of ocean temperature and salinity' },
  { id: 7, name: 'William Neil Paget', nameColor: '#000080', session: '2003-2004', thesisTitle: 'Ozone Pollution in Illinois, Indiana and Ohio' },
  { id: 6, name: 'Chun Wah Sung', nameColor: '#000080', session: '2003-2004', thesisTitle: 'A comparison of Two Approaches for Bayesian Sample Size Determination' },
  { id: 5, name: 'Michelle Eggers', nameColor: '#FF0000', session: '2001-2002', thesisTitle: 'Statistical Modelling of Self-Reported Health State of Individuals in Selected Countries' },
  { id: 4, name: 'Abraham Brown', nameColor: '#000080', session: '2001-2002', thesisTitle: 'Effect of calcium metabolism following thyroidectomy' },
  { id: 3, name: 'Katy Hoad', nameColor: '#FF0000', session: '1999-2000', thesisTitle: 'Assessing the Performance of Monte Carlo Methods' },
  { id: 2, name: 'Mark L. Haynes', nameColor: '#000080', session: '1999-2000', thesisTitle: 'Do Women Earn Less Than Their Male Colleagues?' },
  { id: 1, name: 'Nicola E. Fernandes', nameColor: '#FF0000', session: '1999-2000', thesisTitle: 'Investigating Discrimination in Medical School Admissions' },
];

const students: Student[] = [
  {
    id: 12,
    name: 'Philip Wells',
    nameColor: 'navy',
    graduationYear: '2024',
    thesisTitle: 'Investigating the effect of survey designs on urban forest population estimates: A simulation based approach using Bayesian spatial models',
    coSupervisors: 'Jointly supervised by Malcolm Hudson and Kieron Doick.',
    destination: '--'
  },
  {
    id: 11,
    name: 'Ho Man Theophilus Chan',
    nameColor: 'navy',
    graduationYear: '2024',
    thesisTitle: 'On evaluating the Watanabe-Akaike information criteria for Bayesian modelling of point referenced spatial data.',
    coSupervisors: 'Jointly supervised by C. Edson Utazi and Andrew Tatem.',
    destination: 'Research Associate, University of Southampton',
    destinationLink: 'http://www.southampton.ac.uk/'
  },
  {
    id: 10,
    name: 'Sthaporn Thepsumritporn',
    nameColor: 'red',
    graduationYear: '2022',
    thesisTitle: 'Bayesian Multivariate Normal Modelling.',
    destination: 'Lecturer, Thailand.'
  },
  {
    id: 9,
    name: 'Matthew Hammond',
    nameColor: 'navy',
    graduationYear: '2019',
    thesisTitle: 'Assessing trends and uncertainties in satellite-era ocean chlorophyll using space-time modeling.',
    coSupervisors: 'Jointly supervised by Caudie Beaulieu and Stafanie Henson, Ocean and Earth Sciences.',
    destination: 'Research Associate, University of Southampton',
    destinationLink: 'http://www.southampton.ac.uk/'
  },
  {
    id: 8,
    name: 'Mark Bass',
    nameColor: 'navy',
    graduationYear: '2015',
    thesisTitle: 'Efficient parameterisation for modelling point reference spatial data',
    destination: 'Research Associate, S3RI, Southampton.',
    destinationLink: 'http://www.southampton.ac.uk/s3ri/'
  },
  {
    id: 7,
    name: 'Maria Adamou',
    nameColor: 'red',
    graduationYear: '2014',
    thesisTitle: 'Bayesian Optimal Designs for the Gaussian Process Model.',
    coSupervisors: 'Jointly supervised by Profs David Woods and Susan Lewis',
    destination: 'Research Associate, S3RI, Southampton.',
    destinationLink: 'http://www.southampton.ac.uk/s3ri/'
  },
  {
    id: 6,
    name: 'Sean Michael Ewings',
    nameColor: 'navy',
    graduationYear: '2013',
    thesisTitle: 'Modelling Blood Glucose Levels in Type I Diabetes Patients.',
    coSupervisors: 'Jointly supervised by Dr Andrew Chipperfield, Engineering.',
    destination: 'Senior Research Associate, S3RI, Southampton.',
    destinationLink: 'http://www.southampton.ac.uk/s3ri/'
  },
  {
    id: 5,
    name: 'Khandoker Shuvo Bakar',
    nameColor: 'navy',
    graduationYear: '2012',
    thesisTitle: 'Modelling Daily Ozone Concentration Levels.',
    destination: 'Research Associate, CSIRO, Canberra, Australia.',
    destinationLink: 'http://www.csiro.au/'
  },
  {
    id: 4,
    name: 'Jeffrey Joseph Samuel',
    nameColor: 'navy',
    graduationYear: '2011',
    thesisTitle: 'Empirical Models for Cyclic Voltammogram.',
    destination: 'Lecturer, Alton College, UK.'
  },
  {
    id: 3,
    name: 'Chun Yin Yip',
    nameColor: 'navy',
    graduationYear: '2010',
    thesisTitle: 'Bayesian Spatio-temporal modelling for forecasting ground level ozone concentration levels.',
    destination: 'Assistant Professor, Hong Kong Polytechnic University.',
    destinationLink: 'http://www.polyu.edu.hk/cpa/polyu/index.php'
  },
  {
    id: 2,
    name: 'Daphne Kounali',
    nameColor: 'red',
    graduationYear: '2006',
    thesisTitle: 'Early growth and coronary heart disease.',
    coSupervisors: 'Jointly supervised by Dr Clive Osmond, School of Medicine.',
    destination: 'Research Associate, Bristol Heart Institute, UK.',
    destinationLink: 'http://www.bristol.ac.uk/bhi/'
  },
  {
    id: 1,
    name: 'High Seng Chai',
    nameColor: 'navy',
    graduationYear: '2004',
    thesisTitle: 'A new skew elliptical distribution.',
    destination: 'Post-doctoral Researcher, Mayo Clinic, USA.'
  }
];

export default function PhDStudentsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">PhD Students</h1>
          
          <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/4">
                    Student
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Graduation Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Thesis Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/5">
                    Destination
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span style={{ color: student.nameColor === 'navy' ? '#000080' : '#FF0000' }}>
                        {student.id}. {student.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.graduationYear}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <strong>{student.thesisTitle}</strong>
                        {student.coSupervisors && (
                          <div className="mt-1 text-sm text-gray-600">
                            {student.coSupervisors}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {student.destinationLink ? (
                        <Link href={student.destinationLink} className="text-blue-600 hover:text-blue-800">
                          {student.destination}
                        </Link>
                      ) : (
                        student.destination
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Post-Doctoral Supervision */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Post-Doctoral Supervision</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/4">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/6">Dates</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Project</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/4">Destination</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4"><span style={{ color: '#000080' }}>5. Dr C. Edson Utazi</span></td>
                  <td className="px-6 py-4">2014-2016</td>
                  <td className="px-6 py-4">2-year Gates Foundation research project on site selection for health surveillance and spatial modelling.</td>
                  <td className="px-6 py-4">Research Associate, Geography & Environment, University of Southampton</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4"><span style={{ color: '#FF0000' }}>4. Dr Monica Pirani</span></td>
                  <td className="px-6 py-4">2014-2015</td>
                  <td className="px-6 py-4">1-year NERC funded research project on modelling river pollution data from the Christchurch Harbour Estuary.</td>
                  <td className="px-6 py-4">Research Associate in the Imperial College, London</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4"><span style={{ color: '#000080' }}>3. Dr Sabyasachi Mukhopadhyay</span></td>
                  <td className="px-6 py-4">2013-2015</td>
                  <td className="px-6 py-4">3-year EPSRC funded project investigating the effect of air pollution on health.</td>
                  <td className="px-6 py-4">Research Associate in the University of Hohenheim, Germany</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4"><span style={{ color: '#000080' }}>2. Dr Bernard Baffour</span></td>
                  <td className="px-6 py-4">2010-2012</td>
                  <td className="px-6 py-4">2-year EPSRC funded project: Metsim A Hospital Simulation Support Tool.</td>
                  <td className="px-6 py-4">Research Fellow in Social Statistics, Institute for Social Science Research, The University of Queensland, Australia.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4"><span style={{ color: '#000080' }}>1. Dr Alexander Dolya</span></td>
                  <td className="px-6 py-4">2007-2009</td>
                  <td className="px-6 py-4">3-year EPSRC research mobility fellow, jointly supervised with Prof Susan Lewis.</td>
                  <td className="px-6 py-4">Post-doctoral fellow at the National Oceanography Centre, Southampton.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Academic Visitors */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Supervising Long-term Academic Visitors</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-2/5">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/5">Dates</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Project</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span style={{ color: '#000080' }}>2. Dr SangHoo Yoon</span>, Chonnam National University, South Korea.
                  </td>
                  <td className="px-6 py-4">2012-2013</td>
                  <td className="px-6 py-4">Modelling South Korean air pollution data.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span style={{ color: '#FF0000' }}>1. Dr Norhashidah Awang</span>, Universiti Sains, Penang, Malaysia.
                  </td>
                  <td className="px-6 py-4">2010-2011</td>
                  <td className="px-6 py-4">Forecasting for large space-time data.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* MSc Students */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">MSc Students</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/4">Student</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-1/6">Session</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Thesis Title</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mscStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span style={{ color: student.nameColor }}>{student.id}. {student.name}</span>
                    </td>
                    <td className="px-6 py-4">{student.session}</td>
                    <td className="px-6 py-4">
                      {student.thesisLink ? (
                        <a href={student.thesisLink} className="text-blue-600 hover:text-blue-800">
                          {student.thesisTitle}
                        </a>
                      ) : (
                        student.thesisTitle
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
