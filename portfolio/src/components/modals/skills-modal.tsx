"use client";

import { closeModal } from "@/redux/slices/skill-modal-slice";
import { useAppDispatch, useAppSelector } from "@/redux/use-store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { skills } from "@/constants";
import Django from "./django";
import DjangoRestFramework from "./django-rest-framework";
import Celery from "./celery";
import JavaScript from "./javascript";
import TypeScript from "./typescript";
import Nextjs from "./nextjs";
import ReactSkill from "./react-skill";
import Redux from "./redux";
import TailwindCSS from "./tailwindcss";

type Props = {};

export default function SkillsModal({}: Props) {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useAppSelector((state) => state.modal);
  const skill = skills.find((skill) => skill.name === type);
  const onOpenChange = () => {
    dispatch(closeModal());
  };

  if (!skill) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined} className="p-0">
        <DialogHeader
          className="rounded-lg p-4"
          style={{ backgroundColor: skill.color }}
        >
          <DialogTitle
            className="text-left text-lg font-bold"
            style={{ color: skill.textColor }}
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="mr-2 inline-block h-5 w-5"
                style={{}}
              />
            )}
            {type}
          </DialogTitle>
        </DialogHeader>
        {type === "Django" && <Django type={type} />}
        {type === "Django REST Framework" && (
          <DjangoRestFramework type={type} />
        )}
        {type === "Celery" && <Celery type={type} />}
        {type === "JavaScript" && <JavaScript type={type} />}
        {type === "TypeScript" && <TypeScript type={type} />}
        {type === "Next.js" && <Nextjs type={type} />}
        {type === "React" && <ReactSkill type={type} />}
        {type === "Redux" && <Redux type={type} />}
        {type === "Tailwind CSS" && <TailwindCSS type={type} />}
      </DialogContent>
    </Dialog>
  );
}
