import type { IconType } from "react-icons";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  url: string;
  repositories: readonly { label: string; url: string }[];
}
export interface Technology {
  name: string;
  icon: IconType;
}
export interface SkillGroup {
  title: string;
  number: string;
  description: string;
  technologies: readonly Technology[];
}
