import type { Metadata } from 'next';
import './globals.css';
import './live.css';

export const metadata: Metadata = {
  title: 'WorkWell | Occupational Health, Wherever Work Happens',
  description:
    'Modern occupational health, mobile health surveillance and employer support delivered across the UK.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
