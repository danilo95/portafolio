import { skillGroups } from "../../data/skills";
import { Reveal } from "../Reveal/Reveal";
import { SkillCard } from "../SkillCard/SkillCard";
import "./Skills.css";

export const Skills = () => (
  <section id="tecnologias" className="section skills" aria-labelledby="skills-title">
    <div className="container">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / MI STACK</p>
            <h2 id="skills-title">
              Las herramientas.
              <br />
              <span className="text-muted">El criterio para usarlas.</span>
            </h2>
          </div>
          <p className="section-caption">
            Un stack versátil para conectar cada parte del producto.
          </p>
        </div>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </div>
  </section>
);
