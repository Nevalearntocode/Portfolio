"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Project as ProjectType } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import ProjectMain from "./project-main";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.3,
  },
};

export default function Project(project: ProjectType) {
  const [state, setState] = useState<"main" | "sub">("main");
  const { images, mobileImages, name } = project;

  return (
    <AnimatePresence mode="wait">
      {state === "main" ? (
        <ProjectMain project={project} setState={setState} />
      ) : (
        <motion.div
          key="sub"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
          className="relative h-full w-full"
        >
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-black bg-opacity-50 p-4 text-white">
            <Button variant="ghost" onClick={() => setState("main")}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h2 className="text-sm font-semibold md:text-base lg:text-lg">
              {name}
            </h2>
            <div className="w-[72px]" />
          </div>
          <div className="max-h-[520px] overflow-auto pt-[72px]">
            <h3 className="text-lg font-semibold text-white">Images</h3>
            <div className="mt-4 grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {images.map((image, index) => (
                <div key={index} className="p-1">
                  <Card>
                    <CardContent className="relative flex aspect-video items-center justify-center p-6">
                      <Image
                        src={image}
                        alt={`${name} - Image ${index + 1}`}
                        fill
                        className="rounded-xl object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-semibold text-white">Mobile</h3>
            <div className="mt-4 grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mobileImages.map((image, index) => (
                <div key={`mobile-${index}`} className="p-1">
                  <Card>
                    <CardContent className="relative flex aspect-[9/14] items-center justify-center p-6">
                      <Image
                        src={image}
                        alt={`${name} - Mobile ${index + 1}`}
                        fill
                        className="rounded-xl object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
