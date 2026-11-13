import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import type { Project } from "../../types/portfolio";
import { Reveal } from "../Reveal/Reveal";
import "./ProjectCard.css";

export const ProjectCard = ({ project }: { project: Project }) => (
  <Reveal>
    <article className={`project-card project-${project.id}`}>
      <div className="project-art" aria-hidden="true">
        <div className="project-art-top">
          <span>SELECTED WORK / {project.number}</span>
          <FiArrowUpRight />
        </div>
        {project.id === "nestshop" ? (
          <div className="shop-visual">
            <div className="shop-bag">
              <span>N</span>
            </div>
            <div>
              <strong>
                NestShop<span>®</span>
              </strong>
              <small>THE FULL STACK SHOPPING EXPERIENCE</small>
            </div>
          </div>
        ) : (
          <div className="doom-visual">
            <div className="doom-grid" />
            <strong>
              DOOM<span>RAYCASTING LAB</span>
            </strong>
            <span className="doom-crosshair">+</span>
          </div>
        )}
        <div className="project-art-bottom">
          <span>
            {project.id === "nestshop" ? "COMMERCE, CONNECTED." : "A DIFFERENT PERSPECTIVE."}
          </span>
          <span>↗</span>
        </div>
      </div>
      <div className="project-content">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label="Tecnologías">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a className="project-view" href={project.url} target="_blank" rel="noopener noreferrer">
            Ver proyecto <FiArrowUpRight />
          </a>
          <div className="repo-links">
            {project.repositories.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: ${repo.label}`}
              >
                <SiGithub />
                {repo.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  </Reveal>
);
