"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Linkedin, Mail, User, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { projects } from "@/constants";
import { Section } from "@/types";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

type Props = {
  setActiveSection: Dispatch<SetStateAction<Section | null>>;
};

export default function Sidebar({ setActiveSection }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = () => (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">My Portfolio</h1>
      <nav>
        <Button
          variant="ghost"
          className="mb-2 w-full justify-start"
          onMouseEnter={() => setActiveSection("about")}
          onClick={() => setIsOpen(false)}
        >
          <User className="mr-2 h-4 w-4" />
          About
        </Button>
        <Button
          variant="ghost"
          className="mb-2 w-full justify-start"
          onMouseEnter={() => setActiveSection("social")}
          onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact
        </Button>
      </nav>
    </div>
  );

  return (
    <>
      <div className="hidden bg-white shadow-md md:block md:w-64">
        <SidebarContent />
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed right-6 top-4 z-50 md:right-4 md:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
