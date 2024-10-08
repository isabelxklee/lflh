import { ReactNode } from 'react';
import { MiniGradientHeader } from './components/GradientHeader';
import Header from './components/Header';

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <Header show={true} />
      <MiniGradientHeader />
      {children}
    </>
  );
}
