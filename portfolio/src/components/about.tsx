"use client";

import React from "react";
import AboutMain from "./about-main";

export default function About() {
  const [state, setState] = React.useState<"main" | "sub">("main");

  return <>{state === "main" ? <AboutMain /> : <div>Sub</div>}</>;
}
