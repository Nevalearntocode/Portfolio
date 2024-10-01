"use client";

import { skills } from "@/constants";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

export default function Skills({}: Props) {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const skillsElement = skillsRef.current;
    if (!skillsElement) return;

    const scrollWidth = skillsElement.scrollWidth;
    const clientWidth = skillsElement.clientWidth;

    const scroll = () => {
      if (isScrolling) {
        if (scrollPosition >= scrollWidth - clientWidth) {
          setScrollPosition(0);
        } else {
          setScrollPosition((prev) => prev + 1);
        }
      }
    };

    let intervalId: NodeJS.Timeout;

    const startScrolling = () => {
      intervalId = setInterval(scroll, 20);
    };
    startScrolling();

    return () => clearInterval(intervalId);
  }, [scrollPosition, isScrolling]);

  useEffect(() => {
    if (skillsRef.current) {
      skillsRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div
      className="bg-white p-4 shadow-md"
      onMouseEnter={() => setIsScrolling(false)}
      onMouseLeave={() => setIsScrolling(true)}
    >
      <h2 className="mb-2 text-lg font-semibold">My Skills</h2>
      <div
        ref={skillsRef}
        className="overflow-hidden whitespace-nowrap"
        style={{ width: "100%" }}
      >
        <div className="animate-marquee inline-block">
          {skills.concat(skills).map((skill, index) => (
            <span
              key={index}
              className="m-1 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
