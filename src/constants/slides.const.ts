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
      `- Intevolution:`,
      `Desarrollador de software con Javascript junto con herramientas
        de azure para la creación de bots inteligentes.`,
      `- The Rocket Code:`,
      `Desarrollador de software fullstack para la creación de aplicaciones web utilizando React, Nextjs, Typescript,
        Javascript, etc.`,
      `- Tecnológico de Monterrey:`,
      `Desarrollador fullstack para la creación de aplicaciones y pruebas de concepto utilizando React, Angular, Typescript, Javascript, Python, etc.`
    ],
    style: 'light',
  },
  {
    section: 'content',
    title: 'Proyectos Realizados LABII',
    subtitle: '.:: Visualizador TWD ::.',
    coverImages: ['imgs/twd.png'],
    contents: [
      `Se tuvo que desarrollar dentro de un proyecto (The Next Decade) un visualizador que mostrara los resultados de análisis obtenidos por el equipo de data de acuerdo a una convocatoria que hubo.`,
    ],
    style: 'dark',
  },
  {
    section: 'content',
    title: 'Proyectos Realizados LABII',
    subtitle: '.:: Perfilador ::.',
    coverImages: ['imgs/perfilador.png'],
    contents: [
      `- Migración de Perfilador (Bobble a React):`,
      `Se desarrolló un perfilador el cual recomienda diferentes cursos de acuerdo a un cuestionario.`,
      `- Migración de Perfilador (React a Angular):`,
      `Debido a las necesidades, se tuvo que migrar el código del perfilador a Angular.`,
    ],
    style: 'gradient',
  },
  {
    section: 'content',
    title: 'Proyectos Realizados LABII',
    subtitle: '.:: Lector de formulario PDF ::.',
    coverImages: ['imgs/tabla-lector-pdf.png'],
    contents: [
      `Se tenía la necesidad de poder obtener la información contestada en un PDF con formulario para poder extraer la información de interés, por lo que se tuvo que realizar una investigación para seleccionar la mejor herramienta que se ajustara a la necesidad.`,
    ],
    style: 'dark',
  },
  {
    section: 'content',
    title: 'Proyectos Realizados LABII',
    subtitle: '.:: Lector de formulario con opción multiple desde una foto ::.',
    coverImages: ['imgs/lector-opcion-multiple.png'],
    contents: [
      `Se tenía la necesidad de poder obtener la información contestada en un formulario (desde una foto) para poder extraer la información de interés, por lo que se tuvo que realizar una investigación y simulación de formulario para seleccionar la mejor herramienta que se ajustara a la necesidad.`,
    ],
    style: 'gradient',
  },
  {
    section: 'content',
    title: 'Proyectos Realizados LABII',
    subtitle: '.:: Segmentador IA ::.',
    coverImages: ['imgs/segmentador.png'],
    contents: [
      `Se desarrolló una aplicación web en la que se pudiera realizar la clusterización de un archivo excel de manera inteligente, primero el equipo de data desarrolló el algoritmo de manera local y posteriormente se adaptó a la pagina web.`,
    ],
    style: 'light',
  },
  {
    section: 'content',
    title: 'Proyectos Futuros LABII',
    subtitle: 'ToolTec, Fábrica de contenido, SearchBar',
    coverImages: ['imgs/tooltec.png'],
    contents: [
      `- Tooltec v2:`,
      `Se va a desarrollar una nueva y propia versión de la plataforma.`,
      `- Fabrica de contenido:`,
      `Se va a digitalizar y acompañar el proceso de captura de fichas técnicas con IA para poder tener una mejor eficiencia en el proceso.`,
      `- SearchBar:`,
      `Se desarrollará una herramienta para facilitar la búsqueda de información respecto a cursos de liderazgo que se adapten al perfil y necesidades del usuario.`,
    ],
    style: 'dark',
  },
];
