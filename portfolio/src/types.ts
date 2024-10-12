import { TypeIcon } from "lucide-react";
import { skills } from "@/constants";

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
  images: {
    name: string;
    image: string;
  }[];
  mobileImages: {
    name: string;
    image: string;
  }[];
};

type Section = "about" | "social" | "contact" | Project;

type Skills = {
  name: string;
  color: string;
  textColor: string;
  icon?: string;
}[];

type ModalState = {
  isOpen: boolean;
  type: (typeof skills)[number]["name"] | null;
};

type ImageModalState = {
  isOpen: boolean;
  type: "mobile" | "desktop" | "";
  name: string;
  image: string;
};

export type { Project, Section, ModalState, Skills, ImageModalState };
