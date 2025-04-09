export interface Chapter {
  title: string;
  description: string;
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
    fullTitle: 'Introduction to Probability, Statistics and R with Data-Based Simulations',
    description: `A comprehensive guide to probability, statistics, and R programming, designed for students and practitioners. This book provides a solid foundation in statistical concepts while teaching practical implementation using R.`,
    longDescription: `This textbook offers a unique blend of theoretical foundations and practical applications in probability, statistics, and R programming. It is designed to help students and practitioners develop a deep understanding of statistical concepts while simultaneously building hands-on skills in data analysis and visualization using R.`,
    chapters: [
      { title: '1. Introduction', description: 'Overview of probability, statistics, and R programming' },
      { title: '2. Probability Basics', description: 'Fundamental concepts of probability theory' },
      { title: '3. Random Variables', description: 'Discrete and continuous random variables' },
      { title: '4. Probability Distributions', description: 'Common probability distributions and their properties' },
      { title: '5. Introduction to R', description: 'Getting started with R programming' },
      { title: '6. Data Structures in R', description: 'Vectors, matrices, data frames, and lists' },
      { title: '7. Data Manipulation', description: 'Data cleaning, transformation, and preprocessing' },
      { title: '8. Descriptive Statistics', description: 'Measures of central tendency and dispersion' },
      { title: '9. Data Visualization', description: 'Creating effective plots and graphs with R' },
      { title: '10. Sampling Theory', description: 'Random sampling and sampling distributions' },
      { title: '11. Point Estimation', description: 'Methods for parameter estimation' },
      { title: '12. Confidence Intervals', description: 'Interval estimation and interpretation' },
      { title: '13. Hypothesis Testing', description: 'Statistical inference and decision making' },
      { title: '14. Linear Regression', description: 'Simple linear regression models' },
      { title: '15. Multiple Regression', description: 'Multiple predictor variables and model selection' },
      { title: '16. ANOVA', description: 'Analysis of variance and experimental design' },
      { title: '17. Time Series Analysis', description: 'Working with temporal data in R' },
      { title: '18. Statistical Learning', description: 'Introduction to machine learning concepts' },
      { title: '19. Advanced Topics', description: 'Selected advanced statistical methods' }
    ],
    keyFeatures: [
      'Clear explanations of probability theory fundamentals',
      'Step-by-step guide to statistical inference and hypothesis testing',
      'Hands-on introduction to R programming with practical examples',
      'Modern data visualization techniques and best practices',
      'Extensive exercises with real-world datasets',
      'Interactive simulations for better understanding',
      'Complete R code examples and solutions'
    ],
    imageUrl: '/book-ipsrdbs.jpg'
  },
  'bookbmstdr': {
    title: 'Bayesian Modeling of Spatio-Temporal Data with R',
    fullTitle: 'Bayesian Modeling of Spatio-Temporal Data with R',
    description: `Advanced techniques for modeling and analyzing spatio-temporal data using Bayesian methods and R. This book covers cutting-edge methods for handling complex spatial and temporal data structures.`,
    longDescription: `This advanced textbook presents modern Bayesian approaches to modeling and analyzing spatio-temporal data. It provides a comprehensive treatment of both theoretical foundations and practical implementations using R, with a focus on real-world applications in environmental science, epidemiology, and other fields.`,
    chapters: [
      { title: 'Introduction to Spatial Statistics', description: 'Fundamental concepts in spatial data analysis' },
      { title: 'Bayesian Inference', description: 'Principles of Bayesian statistics and computation' },
      { title: 'Spatial Models', description: 'Gaussian processes and spatial correlation structures' },
      { title: 'Temporal Models', description: 'Time series analysis and dynamic models' },
      { title: 'Spatio-Temporal Models', description: 'Combined spatial and temporal modeling approaches' },
      { title: 'Advanced Applications', description: 'Case studies in environmental and health sciences' }
    ],
    keyFeatures: [
      'In-depth coverage of Bayesian statistical methods',
      'Advanced spatial and temporal data analysis techniques',
      'Hierarchical modeling frameworks',
      'Efficient MCMC algorithms and implementation',
      'Integration with R-INLA and Stan',
      'Real-world case studies and applications',
      'Reproducible code examples'
    ],
    imageUrl: '/book-bmstdr.jpg'
  }
};
