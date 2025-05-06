import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter3CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookbmstdr/chap3/chapter3/Chapter3.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style="color:red">Chapter3.html not found.</div>';
  }
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

