'use client';

import { useEffect, useState } from 'react';

export default function BmstdrVignette() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cdnUrl = 'https://cdn.jsdelivr.net/gh/Fly-20/sujit-sahu-v3@main/public/bmbook/bmstdr-full_vignette.html';

    fetch(cdnUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load content');
        }
        return response.text();
      })
      .then(html => {
        // Create a temporary div to parse the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Remove any existing scripts for security
        const scripts = tempDiv.getElementsByTagName('script');
        Array.from(scripts).forEach(script => {
          script.parentNode?.removeChild(script);
        });

        // Set the content
        document.documentElement.innerHTML = tempDiv.innerHTML;
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading vignette:', err);
        setError('Failed to load the vignette. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  // The content will be set directly to document.documentElement.innerHTML
  return null;
}
