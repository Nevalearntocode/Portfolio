"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="flex h-full w-full items-start md:items-center justify-center">
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <p className="text-sm font-bold sm:text-lg md:text-xl">
            Feel free to reach out to me at:
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <p>Email: hmtam110501@gmail.com</p>
              <Button variant={`outline`} size={`icon`} className="ml-auto">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <p>Phone number: +84 853 151 319</p>
              <Button variant={`outline`} size={`icon`} className="ml-auto">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
