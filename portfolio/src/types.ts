import { TypeIcon } from "lucide-react";

type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  icon: typeof TypeIcon;
  about: string;
  features: string[];
  technologies: string[];
};

type Section = "about" | "social" | "contact" | Project;


export type { Project, Section }