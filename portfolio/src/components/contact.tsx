"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {};

export default function Contact({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Feel free to reach out to me at: your.email@example.com</p>
      </CardContent>
    </Card>
  );
}
