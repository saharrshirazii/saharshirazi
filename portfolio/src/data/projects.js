import miniATSImg from '../assets/MiniATS image.png'
import bookImg from '../assets/Book me image.png'
import rentImg from '../assets/Rent Right image.png'
import subeteImg from '../assets/Subete Sushi image.png'
import focusImg from '../assets/Focus Log image.png'

export const projects = [
  {
    title: 'MiniATS',
    type: 'Web app',
    description: 'A lightweight ATS built for a real hiring assignment: recruiters post jobs, add candidates, and track them through a pipeline on a compact Kanban board. Includes role-based access (admin vs. customer), and an AI-powered CV assessment feature that scores a candidate’s fit against a job using Claude.',
    tech: ['React', 'TypeScript', 'Vite',  'Tailwind CSS','Supabase (database)', 'react-hook-form', 'zod','dnd-kit (drag and drop)','Claude API','Vercel (hosting)'],
    image: miniATSImg,
    link: 'https://github.com/saharrshirazii/MiniATS'
  },
  {
    title: 'Book me',
    type: 'Web app',
    description: 'A Hotel booking App, implemented for hotel reservation.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: bookImg,
    link: 'https://hotel-booking-app-gilt.vercel.app/',
  },
  {
    title: 'Rent Right',
    type: 'Web app',
    description: 'A Property reservation app that I implemented.',
    tech: ['TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
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
