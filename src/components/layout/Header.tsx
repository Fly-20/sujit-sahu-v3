'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Publications', href: '/publications' },
  { name: 'Book ipsRdbs', href: '/books/bookipsrdbs' },
  { name: 'Book Bmstdr', href: '/books/bookbmstdr' },
  { name: 'R package bmstdr', href: '/#bmstdr' },
  { name: 'Projects', href: '/projects' },
  { name: 'Student Reviews', href: '/#reviews' },
  { name: 'Contact', href: '/#contact' }
];

import SearchModal from './SearchModal';
import { useState as useThemeState } from 'react';
import { useTheme } from '@/hooks/useTheme';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useThemeState(false);
  const [theme, setTheme] = useTheme();

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
            <span className="text-xl font-bold">Prof Sujit Sahu</span>
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:items-center space-x-2" style={{ fontSize: '15px' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-1.5 py-2 transition-colors ${isActive(item.href) ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="ml-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open search"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 hover:text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </button>
            {/* Theme mode dropdown */}
            <div className="relative ml-2">
              <button
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle theme mode"
                onClick={() => setIsThemeDropdownOpen((v: boolean) => !v)}
                onBlur={e => {
                  // Only close if focus moves outside dropdown
                  if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                    setIsThemeDropdownOpen(false);
                  }
                }}
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600 hover:text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              </button>
              {isThemeDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 rounded shadow-lg z-50 py-1 border border-gray-200 dark:border-gray-700"
                  tabIndex={-1}
                  onBlur={e => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setIsThemeDropdownOpen(false);
                    }
                  }}
                >
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === 'light' ? 'font-semibold text-blue-600' : 'text-gray-700 dark:text-gray-200'}`}
                    onClick={() => { setTheme('light'); setIsThemeDropdownOpen(false); }}
                  >
                    Light
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === 'dark' ? 'font-semibold text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}
                    onClick={() => { setTheme('dark'); setIsThemeDropdownOpen(false); }}
                  >
                    Dark
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
