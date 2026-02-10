export const themes = {
  light: {
    label: 'Light',
    background: '#ffffff',
    text: '#111827',
    muted: '#4b5563',
    surface: '#ffffff',
    border: '#e5e7eb',
    accent: '#E7473C',
    accentStrong: '#c53030',
    switcherBg: '#f8fafc',
    font: "'Helvetica Neue', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
  },
  dark: {
    label: 'Dark',
    background: '#0F172A',
    text: '#e2e8f0',
    muted: '#94a3b8',
    surface: '#0b1220',
    border: '#1e293b',
    accent: '#22D3EE',
    accentStrong: '#06b6d4',
    switcherBg: '#0b1220',
    font: "'Space Grotesk', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
  }
}

export const themeVarsByKey = Object.fromEntries(
  Object.entries(themes).map(([key, theme]) => [
    key,
    {
      ...theme,
      switcherBg: theme.switcherBg ?? theme.surface
    }
  ])
)
