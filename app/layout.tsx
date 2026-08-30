import type { Metadata } from 'next';
import './globals.css';
import './live.css';
import './theme.css';
import { getSiteTheme } from './theme-config';

export const metadata: Metadata = {
  title: 'WorkWell | Occupational Health, Wherever Work Happens',
  description:
    'Modern occupational health, mobile health surveillance and employer support delivered across the UK.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteTheme = getSiteTheme();

  return (
    <html lang="en" data-theme={siteTheme}>
      <body>{children}</body>
    </html>
  );
}
