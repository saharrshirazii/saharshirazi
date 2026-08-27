import bookImg from '../assets/Book me image.png'
import rentImg from '../assets/Rent Right image.png'
import subeteImg from '../assets/Subete Sushi image.png'
import focusImg from '../assets/Focus Log image.png'

export const projects = [
  {
    title: 'Book me',
    type: 'Web app',
    description: 'A Hotel booking App, implemented for hotel reservation.',
    tech: ['React', 'Tailwinds', 'Node.js', 'MongoDB'],
    image: bookImg,
    link: 'https://hotel-booking-app-gilt.vercel.app/',
  },
  {
    title: 'Rent Right',
    type: 'Web app',
    description: 'A Property reservation app that I implemented.',
    tech: ['TypeScript', 'Node.js', 'MongoDB', 'Tailwinds'],
    image: rentImg,
    link: 'https://github.com/saharrshirazii/RentRight',
  },
  {
    title: 'Subete Sushi',
    type: 'Web app',
    description: 'A responsive landing page for a sushi store.',
    tech: ['Javascript', 'HTML', 'CSS'],
    image: subeteImg,
    link: 'https://www.subetesushi.se/',
  },
  {
    title: 'Focus Log',
    type: 'Mobile app · Web app',
    description: 'A productivity dashboard to increasing productivity.',
    tech: ['React', 'React Native', 'HTML', 'CSS'],
    image: focusImg,
    link: 'https://productivity-system-ebon.vercel.app/',
  },
]
