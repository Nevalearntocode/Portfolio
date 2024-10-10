"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Linkedin, Mail, User, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { projects } from "@/constants";
import { Section } from "@/types";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

type Props = {
  activeSection: Section | null;
  setActiveSection: Dispatch<SetStateAction<Section | null>>;
};

export default function Sidebar({ setActiveSection, activeSection }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const SidebarContent = () => (
    <div className="bg-primary p-4 text-primary-foreground">
      <h1 className="mb-4 text-lg font-bold">El Portfolio de Neva</h1>
      <nav className="space-y-2">
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-secondary-foreground",
            activeSection === "about" && "bg-accent text-accent-foreground",
          )}
          onClick={() => handleSectionClick("about")}
        >
          <User className="mr-2 h-4 w-4" />
          <span className="text-xs md:text-sm xl:text-base">About</span>
        </Button>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-secondary-foreground",
            activeSection === "social" && "bg-accent text-accent-foreground",
          )}
          onClick={() => handleSectionClick("social")}
        >
          <Linkedin className="mr-2 h-4 w-4" />
          <span className="text-xs md:text-sm xl:text-base">Social</span>
        </Button>
        <Separator className="my-2 bg-secondary" />
        <h2 className="mb-2 text-sm font-semibold text-secondary">Projects</h2>
        {projects.map((project) => (
          <Button
            key={project.id}
            variant="outline"
            className={cn(
              "w-full justify-start text-secondary-foreground",
              activeSection === project && "bg-accent text-accent-foreground",
            )}
            onClick={() => handleSectionClick(project)}
          >
            <project.icon className="mr-2 h-4 w-4" />
            <span className="md:text-xs lg:text-sm xl:text-base">
              {project.name}
            </span>
          </Button>
        ))}
        <Separator className="my-2 bg-secondary" />
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-secondary-foreground",
            activeSection === "contact" && "bg-accent text-accent-foreground",
          )}
          onClick={() => handleSectionClick("contact")}
        >
          <Mail className="mr-2 h-4 w-4" />
          <span className="text-xs md:text-sm xl:text-base">Contact</span>
        </Button>
      </nav>
    </div>
  );

  return (
    <>
      <div className="hidden bg-primary shadow-md transition-all duration-300 ease-in-out sm:w-40 md:block md:w-48 lg:w-56 xl:w-64">
        <SidebarContent />
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed right-2 top-2 z-50 md:right-4 md:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 bg-primary p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
