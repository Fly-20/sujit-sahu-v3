import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter19CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookipsrdbs/chap19/chapter19/Chapter19.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style=\"color:red\">Chapter19.html not found.</div>';
  }
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

