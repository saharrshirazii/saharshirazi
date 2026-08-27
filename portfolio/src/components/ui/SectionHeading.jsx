export default function SectionHeading({ children }) {
  return (
    <div className="mb-10 flex items-center gap-6">
      <h2 className="shrink-0 text-2xl font-semibold text-violet-500 sm:text-3xl">{children}</h2>
      <span className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
    </div>
  )
}
