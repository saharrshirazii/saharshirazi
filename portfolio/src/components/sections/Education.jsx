import SectionHeading from '../ui/SectionHeading'
import TimelineItem from '../ui/TimelineItem'
import { education } from '../../data/education'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading>Education</SectionHeading>

      <div className="max-w-2xl">
        {education.map((item, index) => (
          <TimelineItem
            key={item.degree}
            title={item.degree}
            subtitle={[item.school, item.period].filter(Boolean).join(' - ')}
            description={item.description}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
