import type { Metadata } from 'next';
import { GlobalStyles } from './styles.js';

export const metadata: Metadata = {
  title: 'Listening for the Long Haul',
  description: 'Add site description here...'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body>{children}</body>
    </html>
  );
}
