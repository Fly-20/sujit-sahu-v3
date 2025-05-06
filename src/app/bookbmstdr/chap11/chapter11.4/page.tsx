import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter8CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookbmstdr/chap11/chapter11.4/Chap11_USA.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style="color:red">Chapter11_4.html not found.</div>';
  }
  return (
    <Layout>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

