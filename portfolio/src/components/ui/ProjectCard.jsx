export default function ProjectCard({ title, type, description, tech, image, link }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
      <div className="flex h-40 items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-2xl font-semibold text-white/90">{title}</span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
          <span className="shrink-0 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-[#8226d3] dark:bg-violet-500/10 dark:text-violet-300">
            {type}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{description}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-violet-50 px-2.5 py-1 text-xs text-[#8226d3] dark:bg-violet-500/10 dark:text-violet-300"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${title}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#8226d3] ring-1 ring-violet-200 transition-colors hover:bg-violet-50 dark:ring-violet-800 dark:hover:bg-violet-500/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7 7 17M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
