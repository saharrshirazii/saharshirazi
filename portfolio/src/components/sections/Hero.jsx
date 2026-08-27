import heroImg from '../../assets/pic.png'
import heroImgDark from '../../assets/pic-darkmode.jpg'
import { useTheme } from '../../hooks/useTheme'

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section id="top" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={theme === 'dark' ? heroImgDark : heroImg}
          alt="Desk with keyboard and coffee"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl h-full px-6 py-20 flex items-center">
        <div className="w-full lg:w-2/3 lg:max-w-3xl">
            <p className="text-4xl font-semibold text-slate-800 dark:text-white sm:text-7xl drop-shadow-lg">
            This is Sahar Shirazi
            </p>
            <p className="mt-6 text-4xl font-semibold text-slate-800 dark:text-white sm:text-7xl drop-shadow-lg">
            A <span className="text-[#8226d3]">Full-Stack</span> Developer
            </p>
        </div>
      </div>
    </section>
  )
}
