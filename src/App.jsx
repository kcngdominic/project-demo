import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { themeOptions, themeVarsByKey } from './themes'

const projects = [
  { title: 'Portfolio Refresh', desc: 'A sleek single-page experience with smooth, focused storytelling.' },
  { title: 'Insight Dashboard', desc: 'Data-forward visuals with responsive cards and crisp typography.' },
  { title: 'API Playground', desc: 'Developer-centric tools with clear documentation and quick starts.' }
]

export default function App() {
  const [theme, setTheme] = useState('bento')

  const themeVars = useMemo(() => {
    const current = themeVarsByKey[theme] ?? themeVarsByKey.bento
    return {
      '--bg': current.background,
      '--text': current.text,
      '--muted': current.muted,
      '--surface': current.surface,
      '--border': current.border,
      '--accent': current.accent,
      '--accent-strong': current.accentStrong,
      '--dropdown-bg': current.dropdownBg,
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
              {themeOptions.map(({ key, label }) => (
                <option key={key} value={key}>
                  {label}
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
