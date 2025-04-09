import ChapterLayout from '@/components/books/ChapterLayout';

export default function Chapter1() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={1}>
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Overview
      </h2>
      
      <p className="text-gray-600 mb-6">
        This chapter provides a comprehensive introduction to the fundamental concepts
        of probability, statistics, and R programming. We begin by exploring the basic
        principles of probability theory and its applications in real-world scenarios.
        Then, we introduce statistical concepts and their importance in data analysis.
        Finally, we get started with R programming, setting up our development
        environment and writing our first lines of code.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Learning Objectives
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Understand the basic concepts of probability theory</li>
        <li>Learn the fundamentals of statistical analysis</li>
        <li>Set up R development environment</li>
        <li>Write and execute basic R commands</li>
        <li>Explore R's built-in datasets and basic functions</li>
      </ul>
    </ChapterLayout>
  );
}
