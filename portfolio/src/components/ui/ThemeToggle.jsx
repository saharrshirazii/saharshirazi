import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full bg-slate-700 transition-colors dark:bg-slate-600"
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
          isDark ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
