import { ReactNode } from 'react';
import { MiniGradientHeader } from '../components/GradientHeader';
import Header from '../components/Header';

export const PageTemplate = (children: ReactNode) => {
  <>
    <Header show={true} />
    <MiniGradientHeader />
    {children}
  </>;
};
