"use client";

import React, { useState } from "react";
import { Section } from "@/types";
import Sidebar from "@/components/sidebar";
import Skills from "@/components/skills";
import About from "@/components/about";
import Social from "@/components/social";
import Contact from "@/components/contact";
import Project from "@/components/project";
import { motion, AnimatePresence } from "framer-motion";

const slideInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: {
    type: "spring",
    stiffness: 30, // Further reduced from 50
    damping: 15, // Further reduced from 20
    duration: 0.8, // Increased from 0.5
  },
};

export default function Portfolio() {
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
    <div className="flex h-screen flex-col bg-primary/80 text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />

        <main className="h-full flex-1 overflow-hidden p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={
                typeof activeSection === "string"
                  ? activeSection
                  : activeSection?.id
              }
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInFromRight}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Skills />
    </div>
  );
}
