import '@repo/ui/styles';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Storage',
  description: 'Storage Management Dashboard',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
