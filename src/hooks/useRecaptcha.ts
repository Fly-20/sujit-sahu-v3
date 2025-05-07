import { useEffect } from 'react';

export const useRecaptcha = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (typeof window !== 'undefined' && !window.grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);
};
