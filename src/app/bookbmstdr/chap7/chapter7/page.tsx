import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter7CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookbmstdr/chap7/chapter7/Chapter7.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style="color:red">Chapter7.html not found.</div>';
  }
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

