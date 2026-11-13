import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../../data/projects";
import { links } from "../../utils/links";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Reveal } from "../Reveal/Reveal";
import "./Projects.css";

export const Projects = () => (
  <section id="proyectos" className="section container" aria-labelledby="projects-title">
    <Reveal>
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / PROYECTOS SELECCIONADOS</p>
          <h2 id="projects-title">
            Menos teoría.
            <br />
            <span className="text-muted">Más cosas funcionando.</span>
          </h2>
        </div>
        <a className="text-link" href={links.github} target="_blank" rel="noopener noreferrer">
          Todo mi código en GitHub <FiArrowUpRight />
        </a>
      </div>
    </Reveal>
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);
