"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {};

export default function About({}: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base">
          I'm a passionate full-stack developer with expertise in Python,
          Django, and modern JavaScript frameworks. I love creating scalable and
          efficient web applications using cutting-edge technologies.
        </p>
      </CardContent>
    </Card>
  );
}
