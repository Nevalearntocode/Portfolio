"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

type Props = {
  setState: React.Dispatch<React.SetStateAction<"main" | "sub">>;
};

export default function AboutMain({ setState }: Props) {
  return (
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
            various projects with advanced features to hone and prove my skills,
            while refining my resume for the job hunt.
          </p>
          <p className="text-base leading-relaxed">
            Throughout my coding journey, I've learned that you can't possibly
            know everything and you will never be ready for everything. There
            are always new problems and you always need to learn new things to
            solve them. I've got the correct mindset now.{" "}
          </p>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="font-bold italic">
              "Strive for progress, not perfection."
            </p>
            <Button
              variant="default"
              onClick={() => setState("sub")}
              className="mt-4 flex whitespace-nowrap md:mt-0"
            >
              More about me
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
