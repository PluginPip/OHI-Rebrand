export const siteThemes = [
  { id: 'workwell', label: 'WorkWell Teal', swatch: '#0f766e' },
  { id: 'navy', label: 'Navy & Cyan', swatch: '#0f3d5e' },
  { id: 'blue', label: 'Clinical Blue', swatch: '#155e75' },
  { id: 'green', label: 'Accessible Green', swatch: '#166534' },
  { id: 'plum', label: 'Plum & Rose', swatch: '#6b214f' },
  { id: 'slate', label: 'Slate & Aqua', swatch: '#334155' },
  { id: 'amber', label: 'Amber & Charcoal', swatch: '#92400e' },
  { id: 'high-contrast', label: 'High Contrast', swatch: '#000000' },
] as const;

export type SiteThemeId = (typeof siteThemes)[number]['id'];

export function getSiteTheme(): SiteThemeId {
  const configuredTheme = process.env.SITE_THEME;
  return siteThemes.some((theme) => theme.id === configuredTheme)
    ? (configuredTheme as SiteThemeId)
    : 'workwell';
}
