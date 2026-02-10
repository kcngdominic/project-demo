import { complementColor } from './colorUtils'

export const themes = {
  bento: {
    label: 'Bento Grid Minimalist',
    background: '#F9F9F9',
    text: '#0f172a',
    muted: '#475569',
    surface: 'rgba(255,255,255,0.88)',
    border: '#e2e8f0',
    accent: '#2563eb',
    accentStrong: '#1d4ed8',
    font: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
  },
  lavender: {
    label: 'Digital Lavender SaaS',
    background: '#f3f1ff',
    text: '#1f2937',
    muted: '#4b5563',
    surface: 'rgba(255,255,255,0.6)',
    border: '#e5e7eb',
    accent: '#A78BFA',
    accentStrong: '#8b5cf6',
    font: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
  },
  nocturnal: {
    label: 'Nocturnal Cyber',
    background: '#0F172A',
    text: '#e2e8f0',
    muted: '#94a3b8',
    surface: '#0b1220',
    border: '#1e293b',
    accent: '#22D3EE',
    accentStrong: '#06b6d4',
    font: "'Space Grotesk', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
  },
  terminal: {
    label: 'The Terminal',
    background: '#000000',
    text: '#f5f5f5',
    muted: '#cbd5e1',
    surface: '#0a0a0a',
    border: '#1f2933',
    accent: '#00FF41',
    accentStrong: '#00cc35',
    font: "'JetBrains Mono', ui-monospace, SFMono-Regular, 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  },
  mocha: {
    label: 'Mocha Mousse',
    background: '#F4EBD2',
    text: '#3b2f2f',
    muted: '#5b4a42',
    surface: '#f8f1e2',
    border: '#dfd3b8',
    accent: '#A47864',
    accentStrong: '#8a5e4d',
    font: "'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
  },
  swiss: {
    label: 'Swiss Engineering',
    background: '#ffffff',
    text: '#111827',
    muted: '#4b5563',
    surface: '#ffffff',
    border: '#e5e7eb',
    accent: '#E7473C',
    accentStrong: '#c53030',
    font: "'Helvetica Neue', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
  }
}

export const themeOptions = Object.entries(themes).map(([key, value]) => ({
  key,
  ...value
}))

export const themeVarsByKey = Object.fromEntries(
  themeOptions.map(({ key, text, ...theme }) => [
    key,
    {
      ...theme,
      text,
      dropdownBg: complementColor(text)
    }
  ])
)
