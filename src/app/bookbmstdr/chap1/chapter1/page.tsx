import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter1CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookbmstdr/chap1/chapter1/Chapter1.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style="color:red">Chapter1.html not found.</div>';
  }
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

