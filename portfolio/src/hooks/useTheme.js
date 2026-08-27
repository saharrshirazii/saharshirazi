import { useSyncExternalStore } from 'react'

function getSnapshot() {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

function subscribe(callback) {
  window.addEventListener('theme-change', callback)
  return () => window.removeEventListener('theme-change', callback)
}

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem('theme', theme)
  window.dispatchEvent(new Event('theme-change'))
}

if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
  applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot)

  const toggleTheme = () => applyTheme(theme === 'dark' ? 'light' : 'dark')

  return { theme, toggleTheme }
}
