"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 rounded-lg bg-white shadow-lg">
          <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
            Hi, my name is{" "}
            <strong className="font-semibold text-black">Minh Tâm</strong>
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            I'm a <strong>full-stack developer</strong> specializing in{" "}
            <strong>Django</strong> and <strong>Next.js</strong> . I've built
            various projects with advanced features to hone and prove my skills,
            while refining my resume for the job hunt.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Throughout my coding journey, I've learned that you can't possibly
            know everything and you will never be ready for everything. There
            are always new problems and you always need to learn new things to
            solve them. I've got the correct mindset now.{" "}
          </p>
          <p>
            <strong className="italic">
              "Strive for progress, not perfection."
            </strong>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
