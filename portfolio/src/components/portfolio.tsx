"use client";

import React, { useState } from "react";
import { Section } from "@/types";
import Sidebar from "@/components/sidebar";
import Skills from "@/components/skills";
import About from "@/components/about";
import Social from "@/components/social";
import Contact from "@/components/contact";
import Project from "@/components/project";

type Props = {};

export default function Portfolio({}: Props) {
  const [activeSection, setActiveSection] = useState<Section | null>("about");

  const renderContent = () => {
    if (!activeSection) {
      return (
        <div className="flex h-full items-center justify-center">
          <p className="text-lg text-gray-500">
            Select a section to see details
          </p>
        </div>
      );
    }

    if (typeof activeSection === "string") {
      switch (activeSection) {
        case "about":
          return <About />;
        case "social":
          return <Social />;
        case "contact":
          return <Contact />;
      }
    } else {
      return <Project {...activeSection} />;
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar setActiveSection={setActiveSection} />

        {/* Main Content */}
        <div className="h-full flex-1 overflow-auto p-4 md:p-8 lg:overflow-hidden">
          {renderContent()}
        </div>
      </div>
      <Skills />
    </div>
  );
}
