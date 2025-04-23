import { ReactNode } from 'react';
import Layout from '@/components/layout/Layout';

interface BmBookLayoutProps {
  children: ReactNode;
}

export default function BmBookLayout({ children }: BmBookLayoutProps) {
  return <Layout>{children}</Layout>;
}
