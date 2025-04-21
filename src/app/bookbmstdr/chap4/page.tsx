import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter4() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={4}>
      
      <p className="text-gray-600 mb-6">
      Presented in a stand alone fashion, this chapter describes the main ideas of Bayesian inference needed in the rest of the book. Starting from the Bayes theorem in probability it discusses prior and posterior distributions, point and interval estimation, prior and posterior predictive distribution for model checking, hypothesis testing and Bayesian model choice statistics such as the Deviance Information Criteria (DIC) and Watanabe Information Criteria (WAIC).

      A simple conjugate normal-normal example is used to illustrate the methods and interpretations of, and the background intuition behind, the results. All mathematical derivations are included and the level of mathematical difficulty is suitable for a final year undergraduate student majoring in mathematics/statistics or a post-graduate student with some background in these or a related subject. Theoretical exercises are provided to check understanding. However, it is not necessary to learn all the derivations to understand the modeling presented in the subsequent chapters as commentary has been provided to interpret the results from a practical view point.
      </p>
      <div className="my-0 sm:my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
  <Image src="/bookbmstdr/chap4images/prior_and_posterior2.png" alt="prior_and_posterior2.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap4images/prior_and_posterior.png" alt="prior_and_posterior.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap4images/part1.png" alt="part1.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
  <Image src="/bookbmstdr/chap4images/bayes.png" alt="bayes.png" width={400} height={250} style={{ height: '250px', width: 'auto', objectFit: 'contain' }} className="rounded-lg" />
</div>

    </ChapterLayout>
  );
}
