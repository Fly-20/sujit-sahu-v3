'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function BookCard({ title, description, imageUrl, link }: BookCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col justify-between p-6 md:w-2/3">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="flex justify-start">
          <Link
            href={`/books/${link}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
