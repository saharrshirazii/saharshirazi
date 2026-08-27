import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-16 dark:bg-slate-800/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
