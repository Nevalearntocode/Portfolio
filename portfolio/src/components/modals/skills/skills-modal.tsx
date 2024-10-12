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
import Django from "@/components/modals/skills/django";
import DjangoRestFramework from "@/components/modals/skills/django-rest-framework";
import Celery from "@/components/modals/skills/celery";
import JavaScript from "@/components/modals/skills/javascript";
import TypeScript from "@/components/modals/skills/typescript";
import Nextjs from "@/components/modals/skills/nextjs";
import ReactSkill from "@/components/modals/skills/react-skill";
import Redux from "@/components/modals/skills/redux";
import TailwindCSS from "@/components/modals/skills/tailwindcss";
import Shadcnui from "@/components/modals/skills/shadcnui";
import Python from "@/components/modals/skills/python";
import Prisma from "@/components/modals/skills/prisma";
import Drizzle from "@/components/modals/skills/drizzle";
import Docker from "@/components/modals/skills/docker";
import Git from "@/components/modals/skills/git";
import PostgreSQL from "@/components/modals/skills/postgresql";
import Redis from "@/components/modals/skills/redis";
import Convex from "@/components/modals/skills/convex";

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
        {type === "Python" && <Python type={type} />}
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
        {type === "Shadcn/UI" && <Shadcnui type={type} />}
        {type === "Prisma" && <Prisma type={type} />}
        {type === "Drizzle" && <Drizzle type={type} />}
        {type === "Convex" && <Convex type={type} />}
        {type === "Docker" && <Docker type={type} />}
        {type === "Git" && <Git type={type} />}
        {type === "PostgreSQL" && <PostgreSQL type={type} />}
        {type === "Redis" && <Redis type={type} />}
      </DialogContent>
    </Dialog>
  );
}
