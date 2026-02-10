import { useEffect, useMemo, useState } from 'react'
import './App.css'

function complementColor(hex) {
  if (!hex || typeof hex !== 'string') return '#ffffff'
  const normalized = hex.replace('#', '')
  if (normalized.length !== 6) return '#ffffff'
  const r = 255 - parseInt(normalized.slice(0, 2), 16)
  const g = 255 - parseInt(normalized.slice(2, 4), 16)
  const b = 255 - parseInt(normalized.slice(4, 6), 16)
  const toHex = (v) => v.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

const themes = {
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

const projects = [
  { title: 'Portfolio Refresh', desc: 'A sleek single-page experience with smooth, focused storytelling.' },
  { title: 'Insight Dashboard', desc: 'Data-forward visuals with responsive cards and crisp typography.' },
  { title: 'API Playground', desc: 'Developer-centric tools with clear documentation and quick starts.' }
]

export default function App() {
  const [theme, setTheme] = useState('bento')

  const themeVars = useMemo(() => {
    const current = themes[theme]
    return {
      '--bg': current.background,
      '--text': current.text,
      '--muted': current.muted,
      '--surface': current.surface,
      '--border': current.border,
      '--accent': current.accent,
      '--accent-strong': current.accentStrong,
      '--dropdown-bg': complementColor(current.text),
      '--font': current.font
    }
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [themeVars])

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-top">
          <p className="eyebrow">Dominic's Showroom</p>
          <div className="theme-switcher">
            <label htmlFor="theme-select">Theme</label>
            <select
              id="theme-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              aria-label="Select aesthetic theme"
            >
              {Object.entries(themes).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <h1>Selected projects crafted with care.</h1>
        <p className="lede">
          Explore a curated set of builds that balance clarity, usability, and a refined visual tone.
        </p>
        <div className="actions">
          <a className="action-link primary" href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
            Portfolio Refresh
          </a>
          <a className="action-link ghost" href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
            Insight Dashboard
          </a>
        </div>
      </section>

      <section className="card-grid">
        {projects.map((item) => (
          <article key={item.title} className="card">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
