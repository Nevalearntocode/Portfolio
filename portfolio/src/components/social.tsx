"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

type Props = {};

export default function Social({}: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() =>
              window.open("https://github.com/yourusername", "_blank")
            }
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() =>
              window.open("https://linkedin.com/in/yourusername", "_blank")
            }
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
