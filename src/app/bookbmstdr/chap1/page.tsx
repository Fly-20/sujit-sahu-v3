import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter1() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={1}>
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Overview
      </h2>
      
      <p className="text-gray-600 mb-6">
        This introductory chapter lays the foundation for understanding spatial statistics
        and its applications. We explore the fundamental concepts of spatial data analysis,
        including spatial dependence, spatial autocorrelation, and various types of spatial
        data structures. The chapter provides real-world examples from environmental science,
        epidemiology, and other fields to illustrate the importance of spatial analysis in
        modern research.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Learning Objectives
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Understand the basic concepts of spatial statistics</li>
        <li>Learn about different types of spatial data structures</li>
        <li>Explore spatial dependence and autocorrelation</li>
        <li>Study real-world applications in environmental science</li>
        <li>Get familiar with basic spatial analysis tools in R</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Key Concepts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Spatial Dependence</h3>
          <p className="text-gray-600">
            Understanding how observations at different locations are related to each
            other and the implications for statistical analysis.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Data Structures</h3>
          <p className="text-gray-600">
            Exploring different ways to represent spatial data, including point patterns,
            geostatistical data, and areal data.
          </p>
        </div>
      </div>
    </ChapterLayout>
  );
}
