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
    title: 'Experiencia Profesional',
    subtitle: 'Intevolution (1 año), The Rocket Code (2 años), Tecnológico de Monterrey (9 meses)',
    coverImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWmvc_ElWkDKIh6p6fX808ralPIiI04TDzg&s',
      'https://therocketcode.com/opengraph-image.png',
    ],
    contents: [
      `- Intevolution: como desarrollador de software con Javascript junto con herramientas
        de azure para la creación de bots inteligentes.`,
      `- The Rocket Code: como desarrollador de
        software fullstack para la creación de aplicaciones web utilizando React, Nextjs, Typescript,
        Javascript, etc.`,
      `- Tecnológico de Monterrey: como desarrollador fullstack para la creación de aplicaciones y pruebas de concepto
        utilizando React, Angular, Typescript, Javascript, Python, etc.`,
    ],
    style: 'light',
  },
  {
    section: 'content',
    title: 'Proyectos Trabajados',
    subtitle: 'LABII (Laboratorio de Innovación e Inteligencia)',
    coverImages: ['imgs/perfilador.png'],
    contents: [
      `Migración de Perfilador a código: se desarrolló un perfilador de empresas utilizando React, Typescript, Javascript.`,
      `Migración de Perfilador a Angular: Se desarrolló un perfilador de empresas utilizando React, Typescript, Javascript.`,
    ],
    style: 'gradient',
  },
  {
    section: 'content',
    title: 'UX & Innovation',
    subtitle: 'Creative coding + Realism',
    content: 'From loader overlays to search UX, every detail matters in the user journey.',
    style: 'light',
  },
];
