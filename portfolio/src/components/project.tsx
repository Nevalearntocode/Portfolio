"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { Project as ProjectType } from "@/types";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export default function Project({
  description,
  image,
  githubLink,
  liveLink,
  name,
  about,
  features,
  technologies,
}: ProjectType) {
  return (
    <Card className="w-full pb-[72px] md:pb-0">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 lg:flex-row">
        <div className="relative h-48 w-full lg:h-[370px]">
          <Image src={image} alt={name} fill className="rounded-md" />
        </div>
        <div className="relative flex h-full w-full flex-col gap-4 rounded-lg p-2 shadow-md">
          <div>
            <h3 className="text-xl font-bold text-gray-800">What is this?</h3>
            <p className="text-sm text-gray-600 sm:text-base">{about}</p>
          </div>
          <Separator className="my-2" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {technologies.map((technology) => (
                <Badge key={technology} variant="secondary">
                  {technology}
                </Badge>
              ))}
            </div>
          </div>
          <Separator className="my-2" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Features</h3>
            <ul className="list-inside list-disc text-sm text-gray-600 sm:text-base">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-between gap-2 sm:flex-row">
        <Button
          variant="secondary"
          className="w-full sm:w-auto"
          onClick={() => window.open(githubLink, "_blank")}
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
        <Button
          className="w-full sm:w-auto"
          onClick={() => window.open(liveLink, "_blank")}
        >
          <Globe className="mr-2 h-4 w-4" />
          Visit Live Site
        </Button>
      </CardFooter>
    </Card>
  );
}
