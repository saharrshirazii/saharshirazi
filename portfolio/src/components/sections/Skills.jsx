import SectionHeading from '../ui/SectionHeading'

const TECHNICAL_SKILLS = [
  'JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js', 'REST APIs',
  'React Hook Form', 'HTML', 'CSS', 'Tailwind', 'Git', 'GitHub', 'Vite', 'Figma',
  'Adobe Photoshop CS5', 'Illustrator', 'After Effects', 'SEO', 'Jest',
]

const SOFT_SKILLS = [
  'Negotiation skills',
  'Problem-solving skills',
  'Organization and time management skills',
]

function SkillPill({ label }) {
  return (
    <span className="rounded-full bg-violet-50 px-3 py-1.5 text-sm text-[#8226d3] dark:bg-violet-500/10 dark:text-violet-300">
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading>Skills</SectionHeading>

      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {TECHNICAL_SKILLS.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-slate-800 dark:text-slate-100">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
