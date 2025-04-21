import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter8() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={8}>
      <p className="text-gray-600 mb-6">
      This chapter introduces the joint probability distribution for multiple random variables. It also discusses conditional and marginal distributions, conditional expectations, covariance and correlation. Finally it introduces the central limit theorem for the sum of independent random variables.
</p>
<p>See the <a href="/bookipsrdbs/chap8/chapter8"> Chapter 8 code and output file for the R illustrations provided in this chapter.</a></p>


      <div className="my-8 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 not-prose">
        <Image
          src="/bookipsrdbs/chap8images/Fig91.png"
          alt="Figure 9.1"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap8images/Fig92.png"
          alt="Figure 9.2"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </ChapterLayout>
  );
}
