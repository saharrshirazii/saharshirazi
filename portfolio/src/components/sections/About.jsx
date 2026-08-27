import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading>About me</SectionHeading>
      <p className="max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
        I've always been someone who loves creating new things, a passion I discovered as a
        child, alongside a love for mathematics. That curiosity led me to work as a web designer
        and frontend developer, building responsive and interactive web applications. Since moving
        to Sweden, I've continued growing my skills through a Fullstack Developer program, and I'm
        now open to opportunities in Sweden.
      </p>
    </section>
  )
}
