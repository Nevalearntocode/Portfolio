"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {};

export default function Contact({}: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base">
          Feel free to reach out to me at: your.email@example.com
        </p>
      </CardContent>
    </Card>
  );
}
