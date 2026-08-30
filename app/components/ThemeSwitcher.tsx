'use client';

import { useEffect, useState } from 'react';

const themes = [
  { id: 'workwell', label: 'WorkWell Teal', swatch: '#0f766e' },
  { id: 'navy', label: 'Navy & Cyan', swatch: '#0f3d5e' },
  { id: 'blue', label: 'Clinical Blue', swatch: '#155e75' },
  { id: 'green', label: 'Accessible Green', swatch: '#166534' },
  { id: 'plum', label: 'Plum & Rose', swatch: '#6b214f' },
  { id: 'slate', label: 'Slate & Aqua', swatch: '#334155' },
  { id: 'amber', label: 'Amber & Charcoal', swatch: '#92400e' },
  { id: 'high-contrast', label: 'High Contrast', swatch: '#000000' },
] as const;

type ThemeId = (typeof themes)[number]['id'];

const STORAGE_KEY = 'workwell-theme';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>('workwell');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    const initial = saved && themes.some((item) => item.id === saved) ? saved : 'workwell';
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  function applyTheme(nextTheme: ThemeId) {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <div className="theme-plugin" aria-label="Colour theme controls">
      <button
        className="theme-plugin-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="theme-plugin-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="theme-plugin-icon" aria-hidden="true">◐</span>
        <span>Colours</span>
      </button>
      {open && (
        <div className="theme-plugin-panel" id="theme-plugin-panel">
          <div className="theme-plugin-heading">
            <strong>Accessible colour themes</strong>
            <span>Eight presets designed around WCAG 2.2 contrast requirements.</span>
          </div>
          <div className="theme-plugin-grid" role="radiogroup" aria-label="Choose colour theme">
            {themes.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`theme-option${theme === item.id ? ' is-active' : ''}`}
                role="radio"
                aria-checked={theme === item.id}
                onClick={() => applyTheme(item.id)}
              >
                <span className="theme-swatch" style={{ background: item.swatch }} aria-hidden="true" />
                <span>{item.label}</span>
                <span className="theme-check" aria-hidden="true">{theme === item.id ? '✓' : ''}</span>
              </button>
            ))}
          </div>
          <p className="theme-plugin-note">Colour is never the only indicator of status. Text labels, borders and icons remain available across themes.</p>
        </div>
      )}
    </div>
  );
}
