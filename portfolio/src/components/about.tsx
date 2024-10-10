"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export default function About() {
  const [state, setState] = useState<"main" | "sub">("main");

  return (
    <AnimatePresence mode="wait">
      {state === "main" ? (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex h-full w-full items-start justify-center md:items-center"
        >
          <Card className="w-full bg-background text-foreground lg:w-3/4 xl:w-1/2">
            <CardHeader className="rounded-xl bg-primary text-primary-foreground">
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent className="mt-4 flex flex-col gap-4 rounded-lg shadow-lg">
              <p className="text-sm leading-relaxed sm:text-base">
                Hi, my name is <strong className="font-bold">Minh Tâm</strong>
              </p>
              <p className="text-base leading-relaxed">
                I'm a <strong>full-stack developer</strong> specializing in{" "}
                <strong>Django</strong> and <strong>Next.js</strong>. I've built
                various projects with advanced features to hone and prove my
                skills, while refining my resume for the job hunt.
              </p>
              <p className="text-base leading-relaxed">
                Throughout my coding journey, I've learned that you can't
                possibly know everything and you will never be ready for
                everything. There are always new problems and you always need to
                learn new things to solve them. I've got the correct mindset
                now.{" "}
              </p>
              <div className="relative flex items-center justify-between">
                <p className="font-bold italic">
                  "Strive for progress, not perfection."
                </p>
                <Button
                  variant="default"
                  onClick={() => setState("sub")}
                  className="whitespace-nowrap"
                >
                  More about me
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          key="sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Proficient in Django, Next.js, React, and various other web
                technologies. Experienced in both frontend and backend
                development.
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Developed multiple full-stack applications, including a
                real-time chat app, an Airbnb clone, and an e-commerce CMS. Each
                project has helped me grow as a developer.
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Education</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Self-taught developer with a passion for continuous learning.
                Completed numerous online courses and coding bootcamps to stay
                up-to-date with the latest technologies.
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Goals</CardTitle>
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
