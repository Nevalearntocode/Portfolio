import React from "react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Project } from "@/types";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, Globe, ImageIcon } from "lucide-react";

type Props = {
  project: Project;
  setState: React.Dispatch<React.SetStateAction<"main" | "sub">>;
};

export default function ProjectMain({ project, setState }: Props) {
  const { name, image, githubLink, liveLink, technologies, features, about } =
    project;

  return (
    <motion.div
      key="main"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-full w-full items-start justify-center md:items-center"
    >
      <Card className="max-h-[calc(100vh-2rem)] w-full overflow-y-auto pb-[72px] md:pb-0">
        <CardHeader className="mb-2 bg-primary">
          <CardTitle className="text-base font-bold text-white md:text-lg">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 lg:max-h-[calc(100vh-12rem)] lg:flex-row lg:overflow-y-auto">
          <div className="relative h-48 w-full lg:h-[calc(100vh-16rem)] lg:max-h-[370px]">
            <Image src={image} alt={name} fill className="rounded-xl" />
          </div>
          <div className="relative flex h-full w-full flex-col gap-4 rounded-lg p-2 shadow-md">
            <div>
              <h3 className="text-xl font-bold text-gray-800">What is this?</h3>
              <p className="text-sm text-gray-600 sm:text-base">{about}</p>
            </div>
            <Separator className="my-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {technologies.map((technology) => (
                  <Badge key={technology} variant="secondary">
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="my-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Features</h3>
              <ul className="mt-2 list-inside list-disc text-sm text-gray-600 sm:text-base">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-between gap-2 sm:flex-row">
          <div className="flex w-full flex-col gap-2 md:flex-row md:gap-4">
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => window.open(githubLink, "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>{" "}
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setState("sub")}
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              View Screenshots
            </Button>
          </div>
          <Button
            className="w-full sm:w-auto"
            onClick={() => window.open(liveLink, "_blank")}
          >
            <Globe className="mr-2 h-4 w-4" />
            Visit Live Site
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
