import { useState } from 'react'
import ThemeToggle from '../ui/ThemeToggle'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'paintings', label: 'Paintings' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(LINKS.map((link) => link.id));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          Sahar Shirazi
        </a>

        <a
          href="/cv.pdf"
          download
          className="hidden shrink-0 rounded-lg bg-[#8226d3] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#6d06ce] sm:inline-block"
        >
          Download CV
        </a>

        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={
                  activeId === link.id
                    ? 'font-medium text-[#8226d3] dark:text-violet-300'
                    : 'text-slate-600 transition-colors hover:text-[#8226d3] dark:text-slate-300 dark:hover:text-violet-300'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-slate-700 dark:text-slate-200">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M6 18 18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'} />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 px-6 pb-6 lg:hidden dark:border-slate-800">
          <ul className="flex flex-col gap-4 pt-4 text-sm">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={activeId === link.id ? 'font-medium text-[#8226d3]' : 'text-slate-600 dark:text-slate-300'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <ThemeToggle />
            <a
              href="/cv.pdf"
              download
              className="rounded-lg bg-[#8226d3] px-4 py-2 text-sm font-medium text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
