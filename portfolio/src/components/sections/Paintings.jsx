import SectionHeading from '../ui/SectionHeading'
import MasonryGrid from '../ui/MasonryGrid'

const paintingModules = import.meta.glob('../../assets/paintings/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const paintings = Object.keys(paintingModules)
  .sort()
  .map((path, index) => ({
    src: paintingModules[path],
    alt: `Painting ${index + 1}`,
  }))

export default function Paintings() {
  return (
    <section id="paintings" className="bg-slate-50 py-16 dark:bg-slate-800/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Paintings</SectionHeading>
        <MasonryGrid images={paintings} />
      </div>
    </section>
  )
}
