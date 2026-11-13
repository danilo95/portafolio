import {
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSass,
  SiStyledcomponents,
  SiStorybook,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiGraphql,
  SiPhp,
  SiDocker,
  SiFirebase,
  SiShopify,
  SiSocketdotio,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import type { SkillGroup } from "../types/portfolio";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    number: "01",
    description: "Interfaces que conectan diseño y funcionalidad.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Gatsby", icon: SiGatsby },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "SCSS", icon: SiSass },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
  {
    title: "Backend e integración",
    number: "02",
    description: "Servicios, datos y sistemas trabajando juntos.",
    technologies: [
      { name: "NestJS", icon: SiNestjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST APIs", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql },
      { name: "WebSocket", icon: SiSocketdotio },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    title: "Plataformas y servicios",
    number: "03",
    description: "Herramientas para llevar las ideas a producción.",
    technologies: [
      { name: "Docker", icon: SiDocker },
      { name: "Microsoft Azure", icon: VscAzure },
      { name: "Firebase", icon: SiFirebase },
      { name: "Firestore", icon: SiFirebase },
      { name: "Shopify", icon: SiShopify },
    ],
  },
];
