import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter5() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={5}>
      
      <p className="text-gray-600 mb-6">
      This chapter introduces the underlying concepts behind the powerful and popular computation methods used to make Bayesian inference for complex but parametric modeling problems. Presented with two simple running examples the chapter defines the methods of Monte Carlo, importance sampling, rejection sampling, Markov chain, Metropolis-Hastings algorithm, Gibbs sampler, Hamiltonian Monte Carlo and integrated nested Laplace approximation. These methods are illustrated using R commands in the bmstdr package and the results are compared with the exact theoretical and approximate results using numerical integration. The topics of Markov chain Monte Carlo (MCMC): convergence, diagnostics, run length and the number of chains are discussed from a practical implementation view point. Exact and MCMC estimated values of Bayesian model choice criteria such as the DIC and WAIC for a simple normal-normal example are compared. Exercises are provided to check understanding.
       </p>
       <p><a href="/bookbmstdr/chap5/chapter5">R code for reproducing the figures in Chapter 5.</a></p>
       <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap5images/target_importance.png" alt="target_importance.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  </div>
    </ChapterLayout>
  );
}
