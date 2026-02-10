export function complementColor(hex) {
  if (!hex || typeof hex !== 'string') return '#ffffff'
  const normalized = hex.replace('#', '')
  if (normalized.length !== 6) return '#ffffff'
  const r = 255 - parseInt(normalized.slice(0, 2), 16)
  const g = 255 - parseInt(normalized.slice(2, 4), 16)
  const b = 255 - parseInt(normalized.slice(4, 6), 16)
  const toHex = (v) => v.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
