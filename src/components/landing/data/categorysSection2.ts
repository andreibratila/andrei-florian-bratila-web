import {
  Css3Svg,
  DockerSvg,
  ExpressSvg,
  FramerMotionSvg,
  GitSvg,
  GsapSvg,
  HardhatSvg,
  Html5Svg,
  JavaScriptSvg,
  NestjsSvg,
  NextjsSvg,
  NginxSvg,
  PhaserSvg,
  Pm2Svg,
  PostgresSqlSvg,
  PrismaSvg,
  ReactSvg,
  ReduxSvg,
  ShadcnSvg,
  SoliditySvg,
  TailwindSvg,
  TypeScriptSvg,
  UbuntuSvg,
  VpsSvg,
  ZodSvg,
  ZustandSvg,
} from '../svg';

export interface TecnologiesI {
  title: string;
  Icon: React.FC<{ className: string }>;
  category: string;
}

export const categorysSection2 = {
  framework: {
    color: 'from-[#2196F3]/70 via-[#1E88E5]/70 to-[#1976D2]/70',
  },
  libreria: {
    color:
      'bg-gradient-to-r from-[#9C27B0]/70 via-[#8E24AA]/70 to-[#7B1FA2]/70',
  },
  lenguaje: {
    color:
      'bg-gradient-to-r from-[#FF5733]/70 via-[#FF7043]/70 to-[#FF8A65]/70',
  },
  servidor: {
    color:
      'bg-gradient-to-r from-[#FFC107]/70 via-[#FFB300]/70 to-[#FFA000]/70',
  },
  herramienta: {
    color:
      'bg-gradient-to-r from-[#4CAF50]/70 via-[#388E3C]/70 to-[#2E7D32]/70',
  },
};

export const frontendTechnologies: TecnologiesI[] = [
  {
    title: 'React',
    Icon: ReactSvg,
    category: categorysSection2.framework.color,
  },
  {
    title: 'Next.js',
    Icon: NextjsSvg,
    category: categorysSection2.framework.color,
  },
  {
    title: 'Redux',
    Icon: ReduxSvg,
    category: categorysSection2.libreria.color,
  },
  {
    title: 'TypeScript',
    Icon: TypeScriptSvg,
    category: categorysSection2.lenguaje.color,
  },
  {
    title: 'JavaScript',
    Icon: JavaScriptSvg,
    category: categorysSection2.lenguaje.color,
  },
  {
    title: 'Tailwind CSS',
    Icon: TailwindSvg,
    category: categorysSection2.libreria.color,
  },
  {
    title: 'Framer Motion',
    Icon: FramerMotionSvg,
    category: categorysSection2.libreria.color,
  },
  { title: 'GSAP', Icon: GsapSvg, category: categorysSection2.libreria.color },
  { title: 'CSS 3', Icon: Css3Svg, category: categorysSection2.lenguaje.color },
  { title: 'Zod', Icon: ZodSvg, category: categorysSection2.libreria.color },

  {
    title: 'Phaser',
    Icon: PhaserSvg,
    category: categorysSection2.libreria.color,
  },
  {
    title: 'Zustand',
    Icon: ZustandSvg,
    category: categorysSection2.libreria.color,
  },
  {
    title: 'Shadcn/ui',
    Icon: ShadcnSvg,
    category: categorysSection2.libreria.color,
  },
  {
    title: 'HTML 5',
    Icon: Html5Svg,
    category: categorysSection2.lenguaje.color,
  },
];

export const backendTechnologies: TecnologiesI[] = [
  {
    title: 'Nest.js',
    Icon: NestjsSvg,
    category: categorysSection2.framework.color,
  },
  {
    title: 'Express',
    Icon: ExpressSvg,
    category: categorysSection2.framework.color,
  },
  {
    title: 'PostgreSQL',
    Icon: PostgresSqlSvg,
    category: categorysSection2.servidor.color,
  },
  {
    title: 'Hardhat',
    Icon: HardhatSvg,
    category: categorysSection2.herramienta.color,
  },
  {
    title: 'Solidity',
    Icon: SoliditySvg,
    category: categorysSection2.lenguaje.color,
  },
  {
    title: 'Prisma',
    Icon: PrismaSvg,
    category: categorysSection2.libreria.color,
  },
];

export const serverTechnologies: TecnologiesI[] = [
  {
    title: 'Docker',
    Icon: DockerSvg,
    category: categorysSection2.herramienta.color,
  },
  { title: 'PM2', Icon: Pm2Svg, category: categorysSection2.herramienta.color },
  { title: 'VPS', Icon: VpsSvg, category: categorysSection2.herramienta.color },
  {
    title: 'Nginx',
    Icon: NginxSvg,
    category: categorysSection2.servidor.color,
  },
  { title: 'Git', Icon: GitSvg, category: categorysSection2.herramienta.color },
  {
    title: 'Ubuntu',
    Icon: UbuntuSvg,
    category: categorysSection2.servidor.color,
  },
];
