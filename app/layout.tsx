import type { Metadata } from 'next';
import './globals.css';
import './portal.css';
import './theme-colours.css';
import {ThemeSwitcher} from './components/theme-switcher';

export const metadata: Metadata = {
  title: 'WorkWell by OHI — v1.4.0 RC1',
  description: 'WorkWell by OHI occupational-health platform release-candidate demo. Not a production clinical system.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="workwell"><body>{children}<ThemeSwitcher/></body></html>;
}
