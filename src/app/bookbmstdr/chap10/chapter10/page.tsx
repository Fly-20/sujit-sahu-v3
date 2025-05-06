import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter10CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookbmstdr/chap10/chapter10/Chapter10.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style="color:red">Chapter10.html not found.</div>';
  }
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

