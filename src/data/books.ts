export interface Chapter {
  title: string;
  description?: string;
  number?: number;
}

export interface Book {
  title: string;
  fullTitle: string;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  chapters: Chapter[];
  imageUrl: string;
}

export const books: Record<string, Book> = {
  'bookipsrdbs': {
    title: 'Introduction to Probability, Statistics and R',
    fullTitle: 'Introduction to Probability, Statistics and R',
    description: `A comprehensive guide to probability, statistics, and R programming, designed for students and practitioners. This book provides a solid foundation in statistical concepts while teaching practical implementation using R.`,
    longDescription: `It is now possible to order this book from Waterstones, or Barnes & Noble, or foyles bookshops or Amazon.com or Amazon.co.uk in the UK. The book is based on my lecture notes for many courses (modules), for example, Introduction to Probability and Statistics, taught to first and second year students in various BSc in Mathematics degree programmes. Here is a preview pdf file. You may be able to access the book in various different formats through your own institution.`,
    chapters: [
      { title: '1. Introduction to Basic Statistics' },
      { title: '2. Getting Started with R' },
      { title: '3. Introduction to Probability' },
      { title: '4. Conditional Probability and Independence' },
      { title: '5. Random Variables and Their Probability Distributions' },
      { title: '6. Standard Discrete Distributions' },
      { title: '7. Standard Continuous Distributions' },
      { title: '8. Joint Distributions and the CLT' },
      { title: '9. Introduction to Statistical Inference' },
      { title: '10. Methods of Point Estimation' },
      { title: '11. Interval Estimation' },
      { title: '12. Hypothesis Testing' },
      { title: '13. Generating Functions' },
      { title: '14. Transformation and Transformed Distributions' },
      { title: '15. Multivariate Distributions' },
      { title: '16. Convergence of Estimators' },
      { title: '17. Simple Linear Regression Model' },
      { title: '18. Multiple Linear Regression Model' },
      { title: '19. Analysis of Variance' }
    ],
    keyFeatures: [
      'This is an accessible textbook that engages the reader with many practical examples using probability and statistics for data science and machine learning.',
      'The book provides a comprehensive coverage of topics in probability, and both applied and mathematical statistics.',
      'The topics discussed in the book cover the syllabus for the 2023 Actuarial Statistics 1 examination administered by the Institute and Faculty of Actuaries in London.',
      'R, a popular statistical computing software package, is introduced from scratch and illustrated with many practical data sets. For example, see the R Getting Started page or the package vignette.',
      'The book comes with its own dedicated R package ipsRdbs, available from CRAN. Once inside R and with the package installed, just asking for help for any data set included in the package will produce all the code required to reproduce the results and analysis presented in the book for that data set. Hence, a beginner reader can reproduce all those results without having to first learn all the commands and their exact syntax in R. This makes it seamless to learn, use and apply practical methods in introductory probability, statistics and beyond.',
      'The textbook also contains many theoretical and applied exercises for readers and instructors.'
    ],
    imageUrl: '/book-ipsrdbs.jpg'
  },
  'bookbmstdr': {
    title: 'Bayesian Modelling of Spatio-Temporal Data with R',
    fullTitle: 'Bayesian Modelling of Spatio-Temporal Data with R',
    description: `A comprehensive guide to Bayesian methods for analyzing spatial and temporal data using R. This book covers both theoretical foundations and practical applications.`,
    longDescription: `This textbook provides an in-depth exploration of Bayesian statistical methods for analyzing spatial and temporal data. It combines rigorous theoretical foundations with practical applications and case studies, all implemented in R.`,
    chapters: [
      { title: '1. Examples of spatio-temporal data' },
      { title: '2. Jargon of spatial and spatio-temporal modeling' },
      { title: '3. Exploratory data analysis methods' },
      { title: '4. Bayesian inference methods' },
      { title: '5. Bayesian computation methods' },
      { title: '6. Bayesian modeling for point referenced spatial data' },
      { title: '7. Bayesian modeling for point referenced spatio-temporal data' },
      { title: '8. Practical examples of point referenced data modeling' },
      { title: '9. Bayesian forecasting for point referenced data' },
      { title: '10. Bayesian modeling for areal unit data' },
      { title: '11. Further examples of areal data modeling' },
      { title: '12. Gaussian processes for data science and other applications' }
    ],
    keyFeatures: [
      "Accessible detailed discussion of a majority of all aspects of Bayesian methods and computations with worked examples, numerical illustrations and exercises with which the reader should be able to experience the methodologies live.",
      "A spatial statistics jargon buster chapter that enables the reader to build up a vocabulary without getting clouded in modeling and technicalities in model fitting.",
      "Computation and modeling illustrations are provided with the help of the dedicated R package bmstdr. The look and feel of the model fitting commands and their output resemble that of the lm command in R. A novice user, who is otherwise familiar with the lm command, will quickly be able to perform spatio-temporal modeling using well-known packages and platforms such rstan, INLA, spBayes, spTimer, spTDyn, CARBayes and CARBayesST.",
      "Included are R code notes detailing the algorithms used to produce all the tables and figures. An online supplement presents the necessary data and the full code for reproducing these results.",
      "Two dedicated chapters discuss practical examples of spatio-temporal modeling of point referenced and areal unit data. Taken from a variety of disciplines all illustrations are practical data driven rather than simulation based.",
      "Throughout, the emphasis has been on validating models by splitting data into test and training sets following on the philosophy of machine learning and data science. The last chapter consolidates this connection formally by bringing in the Gaussian process based machine learning into the context of the topics presented in the book."
    ],
    imageUrl: '/book-bmstdr.jpg'
  }
};
