/**
 * Site-wide configuration
 * Configure your site settings, colors, and theme here
 */

export const siteConfig = {
  name: 'Markoff',
  description: 'Building something new',
  url: 'https://markoff.finance',

  colors: {
    background: '#f5f5f5',
    foreground: '#525252',
    primary: '#000000',
    accent: '#3b82f6',
    muted: '#a3a3a3',
    border: '#e5e5e5',
  },

  fonts: {
    sans: 'Geist, system-ui, -apple-system, sans-serif',
    mono: 'Geist Mono, Consolas, Monaco, monospace',
  },

  social: {
    twitter: 'https://x.com/skyman_one',
    github: 'https://github.com/markoff-finance',
  },
} as const;

export type SiteConfig = typeof siteConfig;
