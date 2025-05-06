import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter2CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookbmstdr/chap2/chapter2/Chapter2.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style="color:red">Chapter2.html not found.</div>';
  }
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

