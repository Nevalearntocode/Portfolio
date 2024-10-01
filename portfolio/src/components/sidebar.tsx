"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Linkedin, Mail, User } from "lucide-react";
import { Separator } from "./ui/separator";
import { projects } from "@/constants";
import { Section } from "@/types";

type Props = {
  setActiveSection: Dispatch<SetStateAction<Section | null>>;
};

export default function Sidebar({
  setActiveSection,
}: Props) {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">My Portfolio</h1>
        <nav>
          <Button
            variant="ghost"
            className="mb-2 w-full justify-start"
            onMouseEnter={() => setActiveSection("about")}
          >
            <User className="mr-2 h-4 w-4" />
            About
          </Button>
          <Button
            variant="ghost"
            className="mb-2 w-full justify-start"
            onMouseEnter={() => setActiveSection("social")}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            Social
          </Button>
          <Separator className="my-2" />
          <h2 className="mb-2 text-sm font-semibold text-gray-500">Projects</h2>
          {projects.map((project) => (
            <Button
              key={project.id}
              variant="ghost"
              className="mb-2 w-full justify-start"
              onMouseEnter={() => setActiveSection(project)}
            >
              <project.icon className="mr-2 h-4 w-4" />
              {project.name}
            </Button>
          ))}
          <Separator className="my-2" />
          <Button
            variant="ghost"
            className="w-full justify-start"
            onMouseEnter={() => setActiveSection("contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </nav>
      </div>
    </div>
  );
}
