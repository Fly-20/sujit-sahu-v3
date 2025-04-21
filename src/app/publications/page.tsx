'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import type { NextPage } from 'next';

type PublicationsPageProps = {
  // Add props here if needed
};

const PublicationsPage: NextPage<PublicationsPageProps> = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">List of publications</h1>
          <p className="mb-8">
            See also my <a href="https://scholar.google.co.uk/citations?user=5TaCEasAAAAJ&hl=en" className="text-blue-600">Google Citation Profile.</a>
          </p>
          
          <h2 className="text-2xl font-bold mb-6">Papers</h2>
          <ol reversed className="list-decimal list-inside space-y-4">
            <li className="text-gray-800"> Sahu, S. K. (2024) <a href="/bookipsrdbs" className="text-blue-600"> Introduction to Probability, Statistics &amp; R, Foundations for Data-Based Sciences (1st ed.). </a>
    <a href="https://link.springer.com/book/10.1007/978-3-031-37865-2?_gl=1*17rnx1i*_up*MQ..&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1vT1jB8a8B-8flWTBxuryQYtkto1SFKqS2SNTzhL8FutIK7z72FYx4aAsTpEALw_wcB" className="text-blue-600"> Springer, ISBN: 978-3-031-378644-5. </a>
  </li>
  <li className="text-gray-800"> Sahu, S. K. (2022) <a href="/bookbmstdr" className="text-blue-600"> Bayesian Modeling of Spatio-Temporal Data with R (1st ed.). </a> Chapman and Hall/CRC. <a href="https://doi.org/10.1201/9780429318443" className="text-blue-600"> https://doi.org/10.1201/9780429318443 </a>
  </li>
  <li className="text-gray-800"> Pierfrancesco Alaimo Di Loro, Xiang Qian, Sahu, S. K., Dankmar Boehning (2023) <a href="https://arxiv.org/abs/2304.14110" className="text-blue-600">A novel Bayesian spatio-temporal model for the disease infection rate of Covid-19 cases in England. </a> Technical Report, University of Southampton. </li>
  <li className="text-gray-800"> Utazi, C. E., Jochem, W. C., Gacic-Dobo, Marta, Murphy, P., Sahu, S. K., Danovaro-Holliday, M. C., Tatem, A. J. (2023) Bayesian hierarchical modelling approaches for combining information from multiple data sources to produce annual estimates of national immunization coverage. Technical Report, University of Southampton. </li>
  <li className="text-gray-800"> Stan Yip, Norziha Che Him, Nur Izzah Jamil, Daihai He, and Sujit K. Sahu (2022) Spatio-temporal detection for dengue outbreaks in the Central Region of Malaysia using climatic drivers at mesoscale and synoptic scale. <i> Climate Risk Management, </i>
    <b> 36,</b> doi: <a href="https://doi.org/10.1016/j.crm.2022.100429" className="text-blue-600"></a>https://doi.org/10.1016/j.crm.2022.100429.
  </li>
  <li className="text-gray-800"> Utazi CE, Aheto JMK, Chan HMT, Tatem AJ, Sahu, S. K.. (2022) <a href="https://pubmed.ncbi.nlm.nih.gov/36129171/" className="text-blue-600"> Conditional probability and ratio-based approaches for mapping the coverage of multi-dose vaccines. </a>
    <i> Statistics in Medicine. </i> 2022 Dec 20;41(29):5662-5678. doi: 10.1002/sim.9586. Epub 2022 Sep 21. PMID: 36129171.
  </li>
  <li className="text-gray-800">Sahu, S. K. and Boehning, D. (2021) <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8114675/" className="text-blue-600"> Bayesian spatio-temporal joint disease mapping of Covid-19 cases and deaths in local authorities of England. </a>
    <i> Spatial Statistics. </i> doi: 10.1016/j.spasta.2021.100519.
  </li>
  <li className="text-gray-800"> Hammond, M.L., Beaulieu, C., Henson, S.A. and Sahu, S. K. (2020) <a href="https://www.nature.com/articles/s41598-020-72073-9" className="text-blue-600"> Regional surface chlorophyll trends and uncertainties in the global ocean.</a>
    <i> Scientific Reports, </i>
    <b> 10, </b> 15273 (2020). doi:10.1038/s41598-020-72073-9
  </li>
  <li className="text-gray-800"> Sambasivan, R., Das, S. and Sahu, S. K. (2020) <a href="papers/Bayesian_Machine_Learning_Review.pdf" className="text-blue-600"> A Bayesian Perspective of Statistical Machine Learning for Big Data. </a>
    <i> Computational Statistics. </i>
    <a href="https://rdcu.be/b4MLR" className="text-blue-600"> https://doi.org/10.1007/s00180-020-00970-8. </a>
  </li>
  <li className="text-gray-800"> Sahu, S. K., Bakar, K. S., Zhan, J., Campbell, J. L. and Yanai, R. D. (2020) <a href="../projects/Precip_JSM_proceedings_2020.pdf" className="text-blue-600"> Spatio-temporal Bayesian modeling of precipitation using rain gauge data from the Hubbard Brook Experimental Forest, New Hampshire, USA. </a>
    <i> Proceedings of the Joint Statistical Meetings </i> American Statistical Association. Pages: 77-92.
  </li>
  <li className="text-gray-800">Sahu, S. K., Bass, M. R., Sabariego, C., Cieza, A., Fellinghauer, C. S. and Chatterji, S. (2020) <a href="papers/bayesian_gpcm.pdf" className="text-blue-600"> A full Bayesian implementation of a generalised partial credit model with an application to an international disability survey. </a>
    <i> Journal of the Royal Statistical Society, </i> Series C, Applied Statistics, <b> 69, </b> 131-150. https://doi.org/10.1111/rssc.12385 Here are the <a href="papers/sahu_etal_code_and_data.zip" className="text-blue-600"> data and code files. </a> The paper can be accessed from the journal website as well: <a href="https://rss.onlinelibrary.wiley.com/doi/10.1111/rssc.12385" className="text-blue-600"> https://rss.onlinelibrary.wiley.com/doi/10.1111/rssc.12385. </a>
  </li>
  <li className="text-gray-800"> Nicolis, O. Diaz, M., Sahu, S. K. and Marin, J. C. (2019) <a href="papers/nicolis_etal_final.pdf" className="text-blue-600"> Bayesian spatio-temporal modelling for estimating short-term exposure to air pollution in Santiago de Chile. </a>
    <i> Environmetrics, </i>
    <b> 30, </b> doi: 10.1002/env.2574
  </li>
  <li className="text-gray-800"> Bass, M. R. and Sahu, S. K. (2019) <a href="https://doi.org/10.1080/10618600.2018.1482761" className="text-blue-600"> Dynamically Updated Spatially Varying Parameterizations of Hierarchical Bayesian Models for Spatial Data. </a>
    <i> Journal of Computational and Graphical Statistics. </i>
    <b> 28, </b> 105-116, doi:10.1080/10618600.2018.1482761.
  </li>
  <li className="text-gray-800"> Utazi, C. E., Sahu, S. K., Atkinson, P. M., Tejedor-Garavito, N., Lloyd C. T. and Tatem, A. J. (2018). <a href="http://gh.bmj.com/content/3/2/e000611" className="text-blue-600"> Assessing the coverage of demographic surveillance systems in sub-Saharan Africa for characterising the drivers of childhood mortality. </a>
    <i> BMJ Global Health, </i> doi:10.1136/ bmjgh-2017-000611.
  </li>
  <li className="text-gray-800"> Hammond, M. L., Beaulieu, C., Henson, S. A. and Sahu, S. K. (2018). <a href="https://doi.org/10.1029/2017GL076928" className="text-blue-600"> Assessing the effect of discontinuities in the ocean color satellite record on chlorophyll trends and their uncertainties. </a>
    <i> Geophysical Research Letters, <b> 45,</b> 7654-7662, </i> doi: 10.1029/2017GL076928.
  </li>
  <li className="text-gray-800"> Hammond, M. L., Beaulieu, C. Sahu, S. K., Henson, S. A. (2017). <a href="https://doi.org/10.1002/2016GB005600" className="text-blue-600"> Assessing trends and uncertainties in satellite-era ocean chlorophyll using space-time modeling. </a>
    <i> Global Biogeochemical Cycles</i>. doi:10.1002/2016GB005600.
  </li>
  <li className="text-gray-800"> Mukhopadhyay, S. and Sahu, S. K. (2017) <a href="https://doi.org/10.1111/rssa.12299" className="text-blue-600"> A Bayesian spatio-temporal model to estimate long term exposure to outdoor air pollution at coarser administrative geographies in England and Wales. </a>
    <i> Journal of the Royal Statistical Society, </i> Series A, <b> 181</b>, 465-486, <i> doi:10.1111/rssa.12299 </i>
    <p> A webinar was hosted by the Royal Statistical Society on February 21, 2018 with Prof Richard Chandler (UCL) in the Chair and Prof Jonathan Rougier (Bristol) as the discussant. </p>
    <p> Here is the <a href="papers/webinar_sujit_sahu.pdf" className="text-blue-600"> pdf presentation file. </a> A youtube video <a href="https://www.youtube.com/watch?v=tm_21pqe7YA" className="text-blue-600"> of the webinar </a> is also available. Discussion starts after 20 minutes into the video. </p>
  </li>
  <li className="text-gray-800"> Bass, M. R. and Sahu, S. K. (2017) <a href="https://doi.org/10.1007/s11222-016-9700-z" className="text-blue-600"> A comparison of centering parameterisations of Gaussian process based models for Bayesian computation using MCMC. </a>
    <i> Statistics and Computing, </i>
    <b> 27, </b> 1491-1512, doi 10.1007/s11222-016-9700-z.
  </li>
  <li className="text-gray-800"> Pannullo, F. , Lee, D., Neal, L., Dalvi, M., Agnew, P., O'Connor, F. M., Mukhopadhyay, S., Sahu, S. K. and Sarran, C. (2017) <a href="https://doi.org/10.1186/s12940-017-0237-1" className="text-blue-600"> Quantifying the impact of current and future concentrations of air pollutants on respiratory disease risk in England. </a>
    <i> Environmental Health, </i>
    <b> 16, </b> doi:10.1186/s12940-017-0237-1) (PMID:28347336) (PMCID:PMC5368918).
  </li>
  <li className="text-gray-800"> Lee, D., Mukhopadhyay, S., Rushworth, A. and Sahu, S. K. (2016) <a href="papers/Leebiostats.pdf" className="text-blue-600"> A rigorous statistical framework for estimating the long-term health impact of air pollution. </a> Click <a href="papers/Leebiostatssupp.pdf" className="text-blue-600"> here for supplementary materials.</a>
    <i> Biostatistics, </i> DOI: 10.1093/biostatistics/kxw048.
  </li>
  <li className="text-gray-800"> Utazi, C. E., Sahu, S. K., Atkinson, P. M., Tejedor, N. and Tatem, A. J. (2016) <a href="papers/utazi_etal_2016.pdf" className="text-blue-600"> A probabilistic predictive Bayesian approach for determining the representativeness of health and demographic surveillance networks </a>
    <i> Spatial Statistics </i>
    <b> 16, </b> 161-178.
  </li>
  <li className="text-gray-800"> Pirani, M., Panton, A., Purdie, D. A., Sahu, S. K. (2016) <a href="papers/pirani_et_al2016.pdf" className="text-blue-600"> Modelling macronutrient dynamics in the Hampshire Avon river: A Bayesian approach to estimate effect of storm events </a>
    <i> Science of the Total Environment. </i>
    <a href="http://dx.doi.org/10.1016/j.scitotenv.2016.04.129" className="text-blue-600"> http://dx.doi.org/10.1016/j.scitotenv.2016.04.129 </a>
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Mukhopadhyay, S. (2016) <a href="papers/sahu_mukhopadhyay_revised.pdf" className="text-blue-600"> On generating a flexible class of anisotropic spatial models using Gaussian predictive processes. </a>
  </li>
  <li className="text-gray-800"> Minty, J., Harper, H., Sarran, C., Sahu, S. K., and Baffour, B. (2013). <a href="papers/eng.pdf" className="text-blue-600"> Simulating Occupancy for Short-Term Hospital Planning. </a>
    <i> Technical Report, </i> University of Southampton.
  </li>
  <li className="text-gray-800"> Lee, D. and Sahu, S. K. (2016) <a href="papers/bookchapter.pdf" className="text-blue-600"> Estimating the health impact of environmental pollution fields. </a> In <i> Handbook of Spatial Epidemiology. </i> Editors: Lawson, A., Banerjee, S., Haining, R. and Ugarte, L. Chapman and Hall/CRC Press. </li>
  <li className="text-gray-800"> Sahu, S. K. (2015) <a href="papers/sujitimpact.pdf" className="text-blue-600"> Bayesian Spatio-Temporal Modelling to Deliver More Accurate and Instantaneous Air Pollution Forecasts. </a> In <i> UK Success Stories in Industrial Mathematics. </i> Editors: P. Aston, T. Mulholland and K. Tant. Springer International. 67-74. </li>
  <li className="text-gray-800"> Bakar, K. S. and Sahu, S. K. (2015) <a href="https://www.jstatsoft.org/index.php/jss/article/view/v063i15/v63i15.pdf" className="text-blue-600">spTimer: Spatio-Temporal Bayesian Modelling Using R. </a>
    <i> Journal of Statistical Software. </i>
    <b> 63 </b> doi: <a href="https://www.jstatsoft.org/index.php/jss/article/view/v063i15/v63i15.pdf" className="text-blue-600"> 10.18637/jss.v063.i15 </a>
  </li>
  <li className="text-gray-800"> Sahu, S. K., Bakar, K. S. and Awang, N. (2015) <a href="papers/sahubakarandwang2013.pdf" className="text-blue-600"> Bayesian Forecasting Using Hierarchical Spatio-temporal Models with Applications to Ozone Levels in the Eastern United States. </a> In <i> Geometry Driven Statistics, </i> Editors: I. L. Dryden and J. Kent. John Wiley and Sons. Chapter 13, pp 260-281. </li>
  <li className="text-gray-800"> Lee, D., Rushworth, A., and Sahu, S. K. (2014) <a href="papers/Lee_preprint.pdf" className="text-blue-600"> A Bayesian localised conditional auto-regressive model for estimating the health effects of air pollution. </a>
    <i> Biometrics, </i>
    <b> 70 </b> , 419-429.
  </li>
  <li className="text-gray-800"> Ewings, S. M., Sahu, S. K., Byrne, C. D., Chipperfield, A. J. (2014) <a href="papers/ewingsetal.pdf" className="text-blue-600"> A Bayesian network for modelling blood glucose concentration and exercise in type 1 diabetes. </a>
    <i> Statistical Methods in Medical Research, </i>
    <b> 24, </b> 342-372, doi: 10.1177/0962280214520732.
  </li>
  <li className="text-gray-800"> Sahu, S. K., Baffour, B., Harper, P. R., Minty, J. H. and Sarran, C. (2014) <a href="papers/admissionmetsim.pdf" className="text-blue-600">A Hierarchical Bayesian Model for Improving Short-Term Forecasting of Hospital Demand by Including Meteorological Information. </a>
    <i> Journal of the Royal Statistical Society, </i> Series A. <b> 177, </b> 39-61.
  </li>
  <li className="text-gray-800"> Ren, C., Sun, D. and Sahu, S. K.(2013) <a href="papers/rensunsahu.pdf" className="text-blue-600"> Objective Bayesian Analysis of Spatial Models with Separable Correlation Functions. </a>
    <i> The Canadaian Journal of Statistics. </i>
    <b> 41, </b> 488-507.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Bakar, K. S. (2012) <a href="papers/sptimegpp.pdf" className="text-blue-600">Hierarchical Bayesian auto-regressive models for large space time data with applications to ozone concentration modelling. </a>
    <i> Applied Stochastic Models in Business and Industry, </i>
    <b> 28, </b> 395-415.
  </li>
  <li className="text-gray-800"> Gelfand, A. E., Sahu S. K. and Holland, D. M. (2012) <a href="papers/distributedprefsampling.pdf" className="text-blue-600"> On the Effect of Preferential Sampling in Spatial Prediction. </a>
    <i> Environmetrics, </i>
    <b> 23, </b> 565-578.
  </li>
  <li className="text-gray-800"> Sahu, S. K. (2012) <a href="papers/sahu_handbook.pdf" className="text-blue-600"> Hierarchical Bayesian models for space-time air pollution data </a> In <i> Handbook of Statistics-Vol 30. Time Series Analysis, Methods and Applications. </i> Editors: T Subba Rao and C R Rao. Elsevier Publishers, Holland. Elsevier Publishers, Amsterdam, pp 477-495. </li>
  <li className="text-gray-800"> Sahu, S. K. and Bakar, K. S. (2012) <a href="papers/sahubakar11.pdf" className="text-blue-600"> A comparison of Bayesian Models for Daily Ozone Concentration Levels </a>
    <i> Statistical Methodology </i>, <b> 9, </b> 144-157, DOI: 10.1016/j.stamet.2011.04.009.
  </li>
  <li className="text-gray-800"> Sahu, S. K., Yip, S. and Holland, D. M. (2011) <a href="papers/sahuyipholland_env_eco_09.pdf" className="text-blue-600"> A fast Bayesian method for updating and forecasting hourly ozone levels. </a>
    <i> Environmental and Ecological Statistics, </i>
    <b> 18, </b> 185-207, DOI 10.1007/s10651-009-0127-y.
  </li>
  <li className="text-gray-800"> Sahu, S. K., Gelfand, A. E. and Holland, D. M. (2010) <a href="papers/sahuetal2010.pdf" className="text-blue-600"> Fusing point and areal level space-time data with application to wet deposition. </a>
    <i> Journal of the Royal Statistical Society</i>, Series C, Applied Statistics, <b> 59 </b>, 77-103.
  </li>
  <li className="text-gray-800"> Gelfand, A. E. and Sahu, S. K. (2009) <a href="papers/gelfandsahu09.pdf" className="text-blue-600"> Combining Monitoring Data and Computer model Output in Assessing Environmental Exposure. </a> In <i> Handbook of Applied Bayesian Analysis </i> edited by Anthony OHagan and Mike West, pp482-510. </li>
  <li className="text-gray-800"> Sahu, S. K. and Chai, H. S. (2009) <a href="/papers/chai" className="text-blue-600"> A new skew-elliptical distribution and its properties. </a>
    <i> Calcutta Statistical Association Bulletin, </i>
    <b> 61, </b> 197--225.
  </li>
  <li className="text-gray-800"> Sahu, S. K., Yip, S. and Holland, D. M. (2009) <a href="papers/sahuyipholland.pdf" className="text-blue-600"> Improved space-time forecasting of next day ozone concentrations in the eastern U.S </a>
    <i> Atmospheric Environment, </i>
    <b> 43, </b> 494-501.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Nicolis, O. (2008) <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/env.965" className="text-blue-600"> An evaluation of European air pollution regulations for particulate matter monitored from a heterogeneous network. </a>
    <i> Environmetrics, </i>
    <b> 20: </b> 943--961. DOI:10.1002/env.965.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Challenor, P. (2008) <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/env.895" className="text-blue-600"> A space-time model for joint modeling of ocean temperature and salinity levels as measured by Argo floats </a>
    <i> Environmetrics, </i>
    <b> 19: </b> 509--528.
  </li>
  <li className="text-gray-800"> Sahu, S. K., Gelfand, A. E. and Holland, D. M. (2007) <a href="https://pubmed.ncbi.nlm.nih.gov/19759840/" className="text-blue-600"> High Resolution Space-Time Ozone Modeling for Assessing Trends. </a>
    <i> Journal of the American Statistical Association. </i>
    <b> 102</b>, 1221--1234.
  </li>
  <li className="text-gray-800"> Jona Lasinio, G., Sahu, S. K. and Mardia, K. V. (2007) <a href="/papers/varanasi" className="text-blue-600"> Modeling rainfall data using a Bayesian Kriged-Kalman model. </a> In <i> Bayesian Statistics and its Applocations</i> edited by S. K. Upadhya, U. Singh and D. K. Dey. Anshan Ltd. London. </li>
  <li className="text-gray-800"> Sahu, S. K., Gelfand, A. E. and Holland, D. M. (2006) <a href="https://link.springer.com/article/10.1198/108571106X95746" className="text-blue-600"> Spatio-temporal modeling of fine particulate matter. </a>
    <a href="http://jabes.unl.edu/index.htm" className="text-blue-600"> Journal of Agricultural, Biological, and Environmental Statistics.</a>
    <b> 11</b>, 61--86.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Smith, T. M. F. (2006) <a href="https://rss.onlinelibrary.wiley.com/doi/pdf/10.1111/j.1467-985X.2006.00408.xf" className="text-blue-600"> A Bayesian method of sample size determination with practical applications </a>
    <i> Journal of the Royal Statistical Society</i>, Series A. <b> 169</b>, 235--253.
  </li>
  <li className="text-gray-800"> Sahu S.K., Jona Lasinio G., Orasi A., and Mardia, K.V. (2005). <a href="https://thescipub.com/abstract/10.3844/jmssp.2005.282.290" className="text-blue-600"> A Comparison of Spatio-Temporal Bayesian Models for Reconstruction of Rainfall Fields in a Cloud Seeding Experiment. </a>
    <i> Journal of Mathematics and Statistics </i>
    <b> 1 </b> (4), pp. 273--281 ISSN: 1549-3644.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Mardia, K. V. (2005) <a href="/papers/recent" className="text-blue-600"> Recent Trends in Modeling Spatio-Temporal Data. </a> In Proceedings of the special meeting on Statistics and Environment organized by the Societ\`(a) Italiana di Statistica held in Universit\`(a) Di Messina, September 21-23, 2005, <b> Invited Papers, </b> pages 69--83. Published by the Universit\`(a) Di Messina, Messina, Italy. </li>
  <li className="text-gray-800"> Sahu, S. K. and Mardia, K. V. (2005) <a href="https://rss.onlinelibrary.wiley.com/doi/full/10.1111/j.1467-9876.2005.00480.x" className="text-blue-600"> A Bayesian Kriged-Kalman model for short-term forecasting of air pollution levels. </a>
    <i> Journal of the Royal Statistical Society, Series C, Applied Statistics, </i>
    <b> 54, </b> 223--244.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Dey, D. K. (2004) <a href="/papers/logskew" className="text-blue-600"> On a Bayesian multivariate survival models with a skewed frailty </a> In <i> Skew-Elliptical Distributions and Their Applications: A Journey Beyond Normality, </i> M. G. Genton (ed). CRC/Chapman &amp; Hall, Boca Raton, FL, pp. 321-338 . </li>
  <li className="text-gray-800"> Sahu, S. K. (2004) <a href="https://link.springer.com/chapter/10.1007/978-1-4471-0231-1_5" className="text-blue-600"> Applications of formal model choice to archaeological chronology building. </a> In <i> Tools for Constructing Chronologies: Crossing Disciplinary Boundaries, </i> Buck, C.E. and Millard, A. R. (eds). London: Springer-Verlag. pp 111--127. </li>
  <li className="text-gray-800"> Sahu, S. K., Dey, D. K. and Branco, M. D. (2003) <a href="https://onlinelibrary.wiley.com/doi/abs/10.2307/3316064" className="text-blue-600"> A New Class of Multivariate Skew Distributions with Applications to Bayesian Regression Models. </a>
    <i> The Canadian Journal of Statistics. </i>
    <b> 31 </b> 129--150.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Zhigljavsky, A. A. (2003) <a href="https://projecteuclid.org/journals/bernoulli/volume-9/issue-3/Self-regenerative-Markov-chain-Monte-Carlo-with-adaptation/10.3150/bj/1065444811.full" className="text-blue-600">Self Regenerative Markov Chain Monte Carlo with Adaptation. </a>
    <i> Bernoulli. </i>
    <b> 9, </b> 395--422.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Cheng, R. C. H. (2003) <a href="https://onlinelibrary.wiley.com/doi/abs/10.2307/3315900" className="text-blue-600"> A Fast Distance Based Approach for Determining the Number of Components in Mixtures </a>
    <i> The Canadian Journal of Statistics. </i>
    <b> 31 </b> 3--22.
  </li>
  <li className="text-gray-800"> Sahu, S. K. (2002) <a href="https://www.tandfonline.com/doi/pdf/10.1080/00949650212387" className="text-blue-600">Bayesian Estimation and Model Choice in Item Response Models.</a>
    <i> Journal of Statistical Computation and Simulation. </i>
    <b> 72, </b> 217--232.
  </li>
  <li className="text-gray-800"> Roberts, G. O. and Sahu, S. K. (2001) <a href="https://www.tandfonline.com/doi/abs/10.1198/10618600152627915" className="text-blue-600"> Approximate pre-determined convergence properties of the Gibbs sampler. </a>
    <i> Journal of Computational and Graphical Statistics. </i>
    <b> 10, </b> 216--229.
  </li>
  <li className="text-gray-800"> Buck, C. E. and Sahu, S. K. (2000) <a href="/papers/arch" className="text-blue-600"> Bayesian models for relative archaeological chronology building. </a>
    <i> Applied Statistics. </i>
    <b> 49, </b> 423--440
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Dey, D. K. (2000) <a href="/papers/comp" className="text-blue-600"> A Comparison of Frailty and Other Models for Bivariate Survival Data. </a>
    <i> Lifetime Data Analysis. </i>
    <b> 6 </b> 207--228.
  </li>
  <li className="text-gray-800"> Sahu, S. K. and Roberts, G. O. (1999) <a href="/papers/em" className="text-blue-600"> On Convergence of the EM Algorithm and the Gibbs Sampler. </a>
    <i>Statistics and Computing. </i>
    <b>9, </b>55--64.
  </li>
  <li className="text-gray-800"> Mukhopadhyay, N., Chattopadhyay, S. and Sahu, S. K. (1993) <a href="https://link.springer.com/article/10.1007/BF02613675" className="text-blue-600"> Further Developments in Estimation of the Largest Mean of <i> K </i> Normal Populations. </a>
    <a>
      <i> Metrika, </i>
      <b> 40, </b> 173--183. </a>
  </li>
            <li className="text-gray-800">
              Gelfand, A. E. and Sahu, S. K. (1999) <a href="https://www.jstor.org/stable/2669699?seq=1#metadata_info_tab_contents" className="text-blue-600">Identifiability, improper priors, and Gibbs sampling for generalized linear models.</a> <i>Journal of the American Statistical Association.</i> <b>94,</b> 247--253.
            </li>
            <li className="text-gray-800">
              Gilks, W. R., Roberts, G. O. and Sahu, S. K. (1998) <a href="papers/gilksetal98.pdf" className="text-blue-600">Adaptive Markov Chain Monte Carlo through Regeneration.</a> <i>Journal of the American Statistical Association,</i> <b>93,</b> 1045--1054.
            </li>
            <li className="text-gray-800">
              Roberts, G. O. and Sahu, S. K. (1997) <a href="https://rss.onlinelibrary.wiley.com/doi/10.1111/1467-9868.00070" className="text-blue-600">Updating Schemes, Correlation Structure, Blocking and Parameterisation for the Gibbs Sampler.</a> <i>Journal of the Royal Statistical Society,</i> B, <b>59,</b> 291--317.
            </li>
            <li className="text-gray-800">
              Sahu, S. K., Dey, D. K., Aslanidou, H. and Sinha, D. (1997) <a href="https://link.springer.com/content/pdf/10.1023/A:1009605117713.pdf" className="text-blue-600">A Weibull Regression Model with Gamma Frailties for Multivariate Survival Data.</a> <i>Lifetime Data Analysis,</i> <b>3,</b> 123--137.
            </li>
            <li className="text-gray-800">
              Gelfand, A. E., Sahu, S. K. and Carlin, B. P. (1996) Efficient parametrizations for generalized linear mixed models, (with discussion). In <i>Bayesian Statistics 5</i>, J.M. Bernardo, J.O. Berger, A.P. Dawid and A.F.M. Smith, Oxford: Oxford University Press, pp. 165--180.
            </li>
            <li className="text-gray-800">
              Gelfand, A. E., Sahu, S. K. and Carlin, B. P. (1995) <a href="https://www.jstor.org/stable/2337527?seq=1#metadata_info_tab_contents" className="text-blue-600">Efficient parametrizations for normal linear mixed models.</a> <i>Biometrika,</i> <b>82,</b> 479--488.
            </li>
            <li className="text-gray-800">
              Dey, D. K., Kuo, L. and Sahu, S. K. (1995) <a href="https://link.springer.com/content/pdf/10.1007/BF00162502.pdf" className="text-blue-600">A Bayesian Predictive Approach to Determining the Number of Components in a Mixture Distribution</a> <i>Statistics and Computing,</i> <b>5</b>, 297--305.
            </li>
            <li className="text-gray-800">
              Gelfand, A. E. and Sahu, S. K. (1994) <a href="https://www.jstor.org/stable/1390911?seq=1#metadata_info_tab_contents" className="text-blue-600">On Markov Chain Monte Carlo Acceleration.</a> <i>Journal of Computational and Graphical Statistics</i> <b>3,</b> 261--276.
            </li>
            <li className="text-gray-800">
              Sahu, S. K., Bendel, R. B. and Sison, C. P. (1993) <a href="https://pubmed.ncbi.nlm.nih.gov/8272666/" className="text-blue-600">Effect of Relative Risk and Cluster Configuration on the Power of the One-dimensional Scan Statistic.</a> <i>Statistics in Medicine,</i> <b>12,</b> 1853--1865.
            </li>
            <li className="text-gray-800">
              Mukhopadhyay, N., Chattopadhyay, S. and Sahu, S. K. (1993) <a href="https://link.springer.com/article/10.1007/BF02613675" className="text-blue-600">Further Developments in Estimation of the Largest Mean of <i>K</i> Normal Populations.</a> <i>Metrika,</i> <b>40,</b> 173--183.
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-6">Discussion and Invited Comments</h2>
          <ol reversed className="list-decimal list-inside space-y-4">
            <li className="text-gray-800">
              Sahu, S. K. (2009) <a href="https://www.tandfonline.com/doi/full/10.1111/j.1467-9868.2009.00699.x" className="text-blue-600">Comment on the paper "A Moving Average Approach for Spatial Statistics Models of Stream Networks", by J. M. Ver Hoef and E. E. Peterson.</a> <i>Journal of the American Statistical Association</i>, <b>105,</b> 21-22.
            </li>
            <li className="text-gray-800">
              Sahu, S. K. (2009) <a href="https://rss.onlinelibrary.wiley.com/doi/full/10.1111/j.1467-9868.2009.00699.x" className="text-blue-600">Comments on "Approximate Bayesian Inference for latent Gaussian models using integrated nested Laplace Approximations" by Rue, Martino and Chopin.</a> <i>Journal of the Royal Statistical Society,</i> B. <b>71,</b> 358--359.
            </li>
            <li className="text-gray-800">
              Sahu, S. K. (2009) Report on the spatial statistics meeting held in Southampton on June 19, 2009. <i>RSS News,</i> <b>37,</b> Number 2, pp 9.
            </li>
            <li className="text-gray-800">
              Gelfand, A. E. and Sahu, S. K. (2005) Comments on "On Model Expansion, Model Contraction, Identifiability and Prior Information: Two Illustrative scenerios Involving Mis-measured Variables" by Paul Gustafson. <i>Statistical Science.</i> <b>20,</b> 130-131.
            </li>
            <li className="text-gray-800">
              Sahu, S. K. and Mardia, K. V. (2004) Comments on the paper "A conditional approachfor multivariatextreme values" by Heffernan, J. E. and Tawn, J. A. <i>Journal of the Royal Statistical Society,</i> B, <b>66,</b> 536.
            </li>
            <li className="text-gray-800">
              Sahu, S. K. (2002) <a href="https://rss.onlinelibrary.wiley.com/doi/full/10.1111/j.1467-9868.2009.00699.x" className="text-blue-600">Comments on the paper "Bayesian measures of model complexity and fit" by Spiegelhalter, D., Best, Carlin and van der Linde.</a> <i>Journal of the Royal Statistical Society,</i> B, <b>64</b> 625--626.
            </li>
            <li className="text-gray-800">
              Sahu, S. K. (2002) Review of the book Analysis of Multivariate Survival Data by P. Hougaard. <i>Biometrics</i> <b>58</b> 259.
            </li>
            <li className="text-gray-800">
              Sahu, S. K. (2001) Review of the book <i>Monte Carlo Methods in Bayesian Computation</i> by Chen, M.-H., Shao, Q.-M. and Ibrahim, J. G. <i>Biometrics</i> <b>57,</b> 326.
            </li>
            <li className="text-gray-800">
              Sahu, S. K. (2000) Comments on the paper "Time series analysis of non-Gaussian observations based on state space models from both classical and Bayesian perspectives" by Durbin, J and Koopman, S. J. <i>Journal of the Royal Statistical Society,</i> B, <b>62,</b> 35--36.
            </li>
            <li className="text-gray-800">
              Roberts, G. O. and Sahu, S. K. (1997) Discussion of the paper "The EM Algorithm--An Old Folk-Song Sung to a Fast New Tune" by Meng, X.-L. and van Dyk, D. <i>Journal of the Royal Statistical Society,</i> B, <b>59</b>, 558--559.
            </li>
            <li className="text-gray-800">
              Sahu, S. K. and Gelfand A. E. (1996) Comment on "Convergence of Markov Chain Monte Carlo Algorithms" In <i>Bayesian Statistics 5</i>, J.M. Bernardo, J.O. Berger, A.P. Dawid and A.F.M. Smith, Oxford: Oxford University Press, pp. 316--317.
            </li>
            <li className="text-gray-800">
              Roberts, G. O., Sahu, S. K. and Gilks, W. R. (1995) Comment on "Bayesian Computation and Stochastic Systems". <i>Statistical Science,</i> <b>10,</b> 49--51.
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default PublicationsPage;
