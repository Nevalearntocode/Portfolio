"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import AboutMain from "./about-main";

export default function About() {
  const [state, setState] = useState<"main" | "sub">("main");

  return (
    <AnimatePresence mode="wait">
      {state === "main" ? (
        <AboutMain setState={setState} />
      ) : (
        <motion.div
          key="sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full overflow-y-auto md:overflow-hidden"
        >
          <div className="sticky top-0 z-10 mb-4 flex items-center justify-between bg-background p-4 shadow-md md:static md:shadow-none">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setState("main")}
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h2 className="text-lg font-semibold">More About Me</h2>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
          <div className="grid grid-cols-1 gap-6 p-4 md:h-[calc(100%-4rem)] md:grid-cols-2 md:gap-8 md:p-8">
            <Card className="h-full">
              <CardHeader className="mb-4 rounded-xl bg-primary">
                <CardTitle className="text-lg text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Proficient in Django, Next.js, React, and various other web
                technologies. Experienced in both frontend and backend
                development.
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="mb-4 rounded-xl bg-primary">
                <CardTitle className="text-lg text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Developed multiple full-stack applications, including a
                real-time chat app, an Airbnb clone, and an e-commerce CMS. Each
                project has helped me grow as a developer.
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="mb-4 rounded-xl bg-primary">
                <CardTitle className="text-lg text-white">Education</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Self-taught developer with a passion for continuous learning.
                Completed numerous online courses and coding bootcamps to stay
                up-to-date with the latest technologies.
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="mb-4 rounded-xl bg-primary">
                <CardTitle className="text-lg text-white">Goals</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Seeking opportunities to contribute to innovative projects,
                collaborate with talented developers, and continue growing my
                skills in full-stack development.
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
