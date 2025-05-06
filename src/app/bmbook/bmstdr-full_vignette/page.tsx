'use client';

import { useEffect, useState } from 'react';
import './styles.css';

export default function BmstdrVignette() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch the HTML content
    fetch('/bmbook/bmstdr-full_vignette.html')
      .then(response => response.text())
      .then(html => {
        // Extract content between main tags or find the main content area
        let mainContent = html.match(/<main[^>]*>([\s\S]*)<\/main>/i)?.[1] ||
                         html.match(/<div[^>]*id=["']content["'][^>]*>([\s\S]*)<\/div>/i)?.[1] ||
                         html.match(/<article[^>]*>([\s\S]*)<\/article>/i)?.[1];
        
        if (!mainContent) {
          // If no main content found, get body content but remove header and footer
          const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || '';
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = bodyContent;
          
          // Remove header and footer if they exist
          const header = tempDiv.querySelector('header');
          const footer = tempDiv.querySelector('footer');
          if (header) header.remove();
          if (footer) footer.remove();
          
          mainContent = tempDiv.innerHTML;
        }
        setHtmlContent(mainContent);
      })
      .catch(error => {
        console.error('Error loading content:', error);
      });
  }, []);

  return (
    <main className="min-h-screen bg-white py-8">
      {htmlContent ? (
        <div className="vignette-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </main>
  );
}
