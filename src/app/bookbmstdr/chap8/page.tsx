import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter8() {
  return (
    <ChapterLayout bookId="bookbmstdr" chapterNumber={8}>
      
      <p className="text-gray-600 mb-6">
      This chapter showcases spatio-temporal modeling for point referenced data using five practical examples. The examples highlight the practical use of such modeling and extend the methodologies where necessary. The examples build on the basic concepts introduced in the earlier chapters, especially the previous chapter, on spatio-temporal modeling. Click the links below to see the R-code for the examples.

Estimating annual average air pollution in England and Wales.
       </p>
    </ChapterLayout>
  );
}
