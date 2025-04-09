import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter2() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={2}>
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Overview
      </h2>
      
      <p className="text-gray-600 mb-6">
        This chapter explores spatial data types and their characteristics in detail.
        We examine different forms of spatial data including point patterns, geostatistical
        data, and areal data. The chapter also introduces fundamental concepts in spatial
        data manipulation and visualization using R's spatial packages.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Learning Objectives
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Understand different types of spatial data structures</li>
        <li>Learn to manipulate and visualize spatial data in R</li>
        <li>Master spatial data import and export techniques</li>
        <li>Explore coordinate systems and projections</li>
        <li>Practice with real-world spatial datasets</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
        Key Concepts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Point Patterns</h3>
          <p className="text-gray-600">
            Understanding spatial point processes and how to analyze patterns
            of point events in space.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Areal Data</h3>
          <p className="text-gray-600">
            Working with data aggregated over regions, such as counties,
            census tracts, or other administrative boundaries.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">R Programming Example</h3>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Loading and plotting spatial data
library(sf)
library(ggplot2)

# Read shapefile
nc <- st_read(system.file("shape/nc.shp", package="sf"))

# Basic plot
ggplot(nc) +
  geom_sf() +
  theme_minimal()`}</code>
        </pre>
      </div>
    </ChapterLayout>
  );
}
