import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter9CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookbmstdr/chap9/chapter9/Chapter9.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style="color:red">Chapter9.html not found.</div>';
  }
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

