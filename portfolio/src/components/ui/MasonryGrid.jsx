import { useEffect, useState } from 'react'

const TILE_PATTERN = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
]

export default function MasonryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + images.length) % images.length)
      if (event.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % images.length)
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, images.length])

  if (!images.length) {
    return (
      <p className="text-slate-500 dark:text-slate-400">
        Paintings coming soon — drop images into <code>src/assets/paintings/</code> to fill this gallery.
      </p>
    )
  }

  return (
    <>
      <div className="grid grid-flow-dense grid-cols-2 auto-rows-[140px] gap-4 sm:grid-cols-3 sm:auto-rows-[160px] lg:grid-cols-4 lg:auto-rows-[180px]">
        {images.map(({ src, alt }, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`block h-full w-full cursor-zoom-in overflow-hidden rounded-lg ${TILE_PATTERN[index % TILE_PATTERN.length]}`}
          >
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute right-5 top-5 text-white/70 transition-colors hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveIndex((i) => (i - 1 + images.length) % images.length)
            }}
            aria-label="Previous painting"
            className="absolute left-3 text-white/70 transition-colors hover:text-white sm:left-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-9 w-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveIndex((i) => (i + 1) % images.length)
            }}
            aria-label="Next painting"
            className="absolute right-3 text-white/70 transition-colors hover:text-white sm:right-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-9 w-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
