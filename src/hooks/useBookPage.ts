'use client';

import { useState } from 'react';

export function useBookPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  return {
    isMobile,
    setIsMobile,
    isOpen,
    setIsOpen,
  };
}
