import SectionHeading from '../ui/SectionHeading'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-16 dark:bg-slate-800/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Experience</SectionHeading>

        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <div key={`${item.company}-${item.period}`}>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{item.role}</h3>
              <p className="mt-1 text-sm text-[#8226d3] dark:text-violet-300">
                {item.company} <span className="text-slate-400">•</span> {item.period}
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
