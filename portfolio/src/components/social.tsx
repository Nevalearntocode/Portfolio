"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

type Props = {};

export default function Social({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            onClick={() =>
              window.open("https://github.com/yourusername", "_blank")
            }
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
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
