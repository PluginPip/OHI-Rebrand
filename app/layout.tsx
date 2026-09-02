import type { Metadata } from 'next';
import './globals.css';
import './portal.css';

export const metadata: Metadata = {
  title: 'WorkWell by OHI — Demo',
  description: 'WorkWell by OHI occupational-health platform demo. Not a production clinical system.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
