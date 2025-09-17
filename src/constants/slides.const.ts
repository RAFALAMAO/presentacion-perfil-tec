import type { SlideProps } from '@/components/Slide/Slide';

export const SLIDES: SlideProps['data'][] = [
  {
    section: 'profile',
    title: 'Desarrollador Fullstack',
    subtitle: '(Arquitecto de Aplicaciones)',
    image: 'imgs/profile.png',
    name: 'Aarón Juárez Terrazas',
    style: 'dark',
  },
  {
    section: 'content',
    title: 'Frontend Engineering',
    subtitle: 'React, TypeScript, Vite',
    content: 'Building modular, scalable UIs with pixel-perfect precision and smooth transitions.',
    style: 'light',
  },
  {
    section: 'content',
    title: 'Backend Architecture',
    subtitle: 'NestJS, FastAPI, TypeORM',
    content: 'Designing robust APIs and scalable database systems for real-world performance.',
    style: 'gradient',
  },
  {
    section: 'content',
    title: 'UX & Innovation',
    subtitle: 'Creative coding + Realism',
    content: 'From loader overlays to search UX, every detail matters in the user journey.',
    style: 'dark',
  },
];
