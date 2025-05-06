export const dynamic = 'force-static';

export async function generateMetadata() {
  return {
    title: 'BMSTDR R Package Vignette',
  };
}

export default function BmstdrVignette() {
  return (
    <meta httpEquiv="refresh" content="0;url=/bmbook/bmstdr-full_vignette.html" />
  );
}
