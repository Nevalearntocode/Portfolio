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
    <Card className="">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex h-[400px] flex-col gap-4 lg:flex-row">
        <div className="relative h-full w-full">
          <Image src={image} alt={name} fill className="rounded-md" />
        </div>
        <div className="relative flex h-full w-full flex-col gap-4 rounded-lg bg-white p-2 shadow-md">
          {/* Added padding, background, rounded corners and shadow */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">What is this?</h3>
            <p className="text-base text-gray-600">{about}</p>
          </div>
          <Separator className="my-2" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
            <div className="grid grid-cols-4 gap-2">
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
            <ul className="list-inside list-disc text-gray-600">
              {/* Added list style and color */}
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => window.open(githubLink, "_blank")}
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
        <Button onClick={() => window.open(liveLink, "_blank")}>
          <Globe className="mr-2 h-4 w-4" />
          Visit Live Site
        </Button>
      </CardFooter>
    </Card>
  );
}
