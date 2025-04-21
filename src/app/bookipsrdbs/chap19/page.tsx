import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter19() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={19}>
      <p className="text-gray-600 mb-6">
      Finally, Chapter 19 introduces the concepts of analysis of variance which is a seen as a general model comparison technique where there are categorical explanatory variables. Theoretical generalisation of the techniques from the two preceding chapters are included and so are illustrations using R. In particular, the one way analysis of variance technique is illustrated by using an ecological example on modelling body weights of brushtail possums – a nocturnal animal only native to Australia.
      </p>

        <Image
          src="/bookipsrdbs/chap19images/possum_boxplot.png"
          alt="Possum Boxplot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap19images/possum_interactive.png"
          alt="Possum Interactive Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap19images/possum_scatter.png"
          alt="Possum Scatter Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />

    </ChapterLayout>
  );
}
