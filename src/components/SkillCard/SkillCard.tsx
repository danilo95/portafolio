import type { SkillGroup } from "../../types/portfolio";
import { Reveal } from "../Reveal/Reveal";
import "./SkillCard.css";

export const SkillCard = ({ group }: { group: SkillGroup }) => (
  <Reveal>
    <article className="skill-card">
      <span className="skill-number">/{group.number}</span>
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <ul>
        {group.technologies.map(({ name, icon: Icon }) => (
          <li key={name}>
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </article>
  </Reveal>
);
