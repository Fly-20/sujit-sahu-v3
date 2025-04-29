import Link from 'next/link';

export default function InstallBmstdrPage() {
  return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Install bmstdr Package</h1>
          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <pre className="text-sm bg-gray-50 p-4 rounded overflow-x-auto whitespace-pre-wrap font-mono">
{`# Update R to the latest version
## Please install from CRAN
install.packages("bmstdr", dependencies = TRUE)

## You may install the latest version from Github source

devtools::install_github("sujit-sahu/bmstdr", build_vignettes = TRUE)

# Installation may fail if you do not have all the packages.
# If installation fails you may find the following commands useful to install the
# required packages.


install.packages(c("Rcpp", "spTimer", "ggplot2", "rstan", "spBayes",  "CARBayes",
                   "CARBayesST", "BH", "RcppEigen", "StanHeaders"), dependencies =T)
install.packages(c("matrixcalc", "rgdal", "spdep", "sf"),  dependencies =T)
install.packages(c("akima", "broom", "doBy", "tidyr"))
install.packages("INLA", repos=c(getOption("repos"), INLA="https://inla.r-inla-download.org/R/stable"), dep=TRUE)
# You may also need to install
install.packages(c("coda", "extraDistr", "RcppParallel", "maps",  "spTDyn", "rstantools"),
                 dependencies =T)
install.packages(c("xtable","MASS", "mnormt", "loo", "cowplot"), dependencies=T)
install.packages(c("usmap", "directlabels", "ggrepel", "ggspatial", "ggpubr", "grid", "ggsn"),
                 dependencies=T)
install.packages(c("geoR", "RColorBrewer", "gridExtra", "sptDyn"),   dependencies=T)

# Plus some other packages maybe required to be installed


# Depending on your operating system please install the correct package
# Windows
install.packages("https://www.sujitsahu.com/bmbook/bmstdr_0.1.4.zip", repos=NULL)
# Mac
install.packages("https://www.sujitsahu.com/bmbook/bmstdr_0.1.4.tgz", repos=NULL)
# Linux Ubuntu
install.packages("https://www.sujitsahu.com/bmbook/bmstdr_0.1.4_R_x86_64-pc-linux-gnu.tar.gz", repos=NULL)

# Please check the installation
library(bmstdr)
ls("package:bmstdr")
browseVignettes('bmstdr')`}
            </pre>
          </div>
        </div>
      </div>
    
  );
}
