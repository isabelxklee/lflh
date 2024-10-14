'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import { MiniGradientHeader } from './components/GradientHeader';
import Header from './components/Header';
import { usePathname } from 'next/navigation';
import { getThemes } from './actions';

export default function PageTemplate({ children }: { children: ReactNode }) {
  const [themes, setThemes] = useState();
  const pathname = usePathname();

  useEffect(() => {
    // server actions should be used for client components
    const fetchData = async () => {
      const themes = await getThemes();
      setThemes(themes);
    };

    fetchData();
  }, []);

  const isHomePage = useMemo(() => {
    return pathname === '/';
  }, []);

  return isHomePage ? (
    <>{children}</>
  ) : (
    <>
      <Header show={true} />
      {themes && <MiniGradientHeader themes={themes} />}
      {children}
    </>
  );
}
