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
import Django from "@/components/modals/django";
import DjangoRestFramework from "@/components/modals/django-rest-framework";
import Celery from "@/components/modals/celery";
import JavaScript from "@/components/modals/javascript";
import TypeScript from "@/components/modals/typescript";
import Nextjs from "@/components/modals/nextjs";
import ReactSkill from "@/components/modals/react-skill";
import Redux from "@/components/modals/redux";
import TailwindCSS from "@/components/modals/tailwindcss";
import Shadcnui from "@/components/modals/shadcnui";
import Python from "@/components/modals/python";
import Prisma from "@/components/modals/prisma";
import Drizzle from "@/components/modals/drizzle";
import Docker from "@/components/modals/docker";
import Git from "@/components/modals/git";
import PostgreSQL from "@/components/modals/postgresql";
import Redis from "@/components/modals/redis";
import Convex from "@/components/modals/convex";

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
