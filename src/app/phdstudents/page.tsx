'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

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
        </div>
      </div>
    </Layout>
  );
}
