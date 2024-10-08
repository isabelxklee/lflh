'use client';

import { ReactNode, useMemo } from 'react';
import { MiniGradientHeader } from './components/GradientHeader';
import Header from './components/Header';
import { usePathname } from 'next/navigation';

export default function PageTemplate({ children }: { children: ReactNode }) {
  // don't return anything if pathname is '/'
  const pathname = usePathname();

  const isHomePage = useMemo(() => {
    return pathname === '/';
  }, []);

  return (
    <>
      {isHomePage ? (
        <>{children}</>
      ) : (
        <>
          <Header show={true} />
          <MiniGradientHeader />
          {children}
        </>
      )}
    </>
  );
}
