import { ThemeProvider } from '../src/providers/ThemeProvider';
import ThemeToggle from '../src/components/ThemeToggle';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import '@repo/ui/styles';
import './globals.css';

export const metadata: Metadata = {
  title: 'Storage',
  description: 'Storage Management Dashboard',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
