import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter2() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={2}>
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Overview
      </h2>
      
      <p className="text-gray-600 mb-6">
        This chapter delves into probability theory fundamentals, covering essential concepts
        like sample spaces, events, and probability axioms. We explore both theoretical foundations
        and practical applications, using R to simulate probability experiments and visualize outcomes.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Learning Objectives
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Master the fundamental concepts of probability theory</li>
        <li>Understand sample spaces and event operations</li>
        <li>Learn about conditional probability and independence</li>
        <li>Apply probability concepts using R simulations</li>
        <li>Analyze real-world probability problems</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Key Concepts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Sample Spaces</h3>
          <p className="text-gray-600">
            Understanding the set of all possible outcomes in a probability experiment
            and how to properly define and work with them.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Probability Axioms</h3>
          <p className="text-gray-600">
            Exploring the fundamental rules that govern probability calculations
            and their implications in statistical analysis.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">R Programming Example</h3>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Simulating coin flips
n_flips <- 1000
coin_flips <- sample(c("H", "T"), n_flips, replace = TRUE)
prob_heads <- mean(coin_flips == "H")
print(paste("Probability of heads:", prob_heads))`}</code>
        </pre>
      </div>
    </ChapterLayout>
  );
}
