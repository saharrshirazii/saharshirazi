export default function TimelineItem({ title, subtitle, description, isLast }) {
  return (
    <div className="relative flex gap-6 pl-2">
      <div className="relative flex flex-col items-center">
        <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#8226d3] dark:bg-violet-300" />
        {!isLast && <span className="w-px flex-1 bg-[#8226d3] dark:bg-violet-300" />}
      </div>
      <div className={isLast ? 'pb-0' : 'pb-8'}>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-[#8226d3] dark:text-violet-300">{subtitle}</p>}
        {description && <p className="mt-2 text-slate-500 dark:text-slate-400">{description}</p>}
      </div>
    </div>
  )
}
