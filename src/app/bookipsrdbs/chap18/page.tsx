import ChapterLayout from '@/components/books/ChapterLayout';
import Image from 'next/image';

export default function Chapter18() {
  return (
    <ChapterLayout bookId="bookipsrdbs" chapterNumber={18}>
      <p className="text-gray-600 mb-6">
      Chapter 18 generalises the simple regression techniques of the previous chapter to the case where there are multiple possible explanatory variables. This chapter describes the foundational basics for machine learning where the simple and multiple regression techniques are exploited heavily for practical problems. Again, the techniques are described both theoretically and using practical modelling examples in R so that the reader can easily form their own transferable skills.
      </p>
        
      <p className="text-gray-600 mb-6">
This chapter generalises the simple linear regression methods of the previous chapter to include multiple explanatory variables (covariates). Indeed, the simple linear regression model will be seen as a particular special case of the multiple regression model to be introduced in this chapter. The methods for inference (estimation and hypothesis testing and prediction) and diagnostics plots outlined in the previous chapter will be generalised as required in this chapter. However, note that the topics remain largely the same as this chapter falls under the umbrella of statistical modelling.
      </p>
      <p>See the <a href="/bookipsrdbs/chap18/chapter18"> Chapter 18 code and output file for the R illustrations provided in this chapter.</a></p>
        <Image
          src="/bookipsrdbs/chap18images/gpairscheese.png"
          alt="G-pairs Cheese Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap18images/gpairsemissions.png"
          alt="G-pairs Emissions Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap18images/puffin_diag.png"
          alt="Puffin Diagnostic Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap18images/ricescatter.png"
          alt="Rice Scatter Plot"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />
        <Image
          src="/bookipsrdbs/chap18images/t3dpic2.png"
          alt="3D Plot 2"
          width={400}
          height={250}
          style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
          className="rounded-lg"
        />

    </ChapterLayout>
  );
}
