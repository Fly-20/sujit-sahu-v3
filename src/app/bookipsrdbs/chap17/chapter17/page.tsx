import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';

export default function Chapter17CodeOutput() {
  const htmlPath = path.join(process.cwd(), 'src/app/bookipsrdbs/chap17/chapter17/Chapter17.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    html = '<div style=\"color:red\">Chapter17.html not found.</div>';
  }
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

