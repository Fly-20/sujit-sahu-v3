import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const BookBMSTDRPage: NextPage = () => {
  const chapters = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Bayesian Modeling of Spatio-Temporal Data with R</h1>
        <div className="prose max-w-none">
          <p className="mb-8">
            By Sujit K. Sahu (2022), Chapman and Hall/CRC
          </p>
          <h2 className="text-2xl font-bold mb-6">Chapters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((chapter) => (
              <Link 
                key={chapter}
                href={`/bookbmstdr/chap${chapter}`}
                className="p-4 border rounded-lg hover:bg-gray-50 text-blue-600"
              >
                Chapter {chapter}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookBMSTDRPage;
