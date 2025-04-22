import Layout from '@/components/layout/Layout';

export default function Loading() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            {/* Navigation */}
            <div className="h-4 w-24 bg-gray-200 rounded mb-8"></div>

            {/* Book Title */}
            <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
            
            {/* Description */}
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>

            {/* Table of Contents */}
            <div className="space-y-4">
              <div className="h-6 w-48 bg-gray-200 rounded"></div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
