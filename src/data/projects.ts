import type { Project } from "../types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "nestshop",
    number: "01",
    title: "NestShop",
    category: "E-COMMERCE · FULL STACK",
    description:
      "Una tienda de principio a fin: catálogo, carrito, pagos con PayPal e historial de compras. Panel de administración y una API modular con autenticación y PostgreSQL.",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    url: "https://nestshopdanilo.netlify.app/login",
    repositories: [
      { label: "Frontend", url: "https://github.com/danilo95/netshop-front-end" },
      { label: "Backend", url: "https://github.com/danilo95/nest-shop-postgres" },
    ],
  },
  {
    id: "doom",
    number: "02",
    title: "DOOM / Raycasting Lab",
    category: "CREATIVE CODING · WEB EXPERIENCE",
    description:
      "Un laboratorio de raycasting inspirado en DOOM. Explora un entorno en primera persona, diseña mapas y personaliza texturas; renderizado en Canvas con React y TypeScript.",
    tags: ["React", "TypeScript", "Canvas", "Raycasting"],
    url: "https://doom-javascript-emulator.netlify.app/",
    repositories: [
      { label: "Código fuente", url: "https://github.com/danilo95/Doom-javascript-emulator" },
    ],
  },
];
