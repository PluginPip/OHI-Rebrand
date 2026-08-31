import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WorkWell by OHI — Occupational Health',
  description: 'Occupational health, rebuilt around work.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
