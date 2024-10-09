"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { skills } from "@/constants";

// Example URL structure to fetch icons from Simple Icons

export default function Skills() {
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

  const handleSkillClick = (skillName: string) => {
    console.log(skillName); // Log the clicked skill
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-primary p-4 text-foreground shadow-md md:relative"
      onMouseEnter={() => setIsScrolling(false)}
      onMouseLeave={() => setIsScrolling(true)}
    >
      <h2 className="mb-2 text-lg font-semibold text-white">My Skills</h2>
      <div
        ref={skillsRef}
        className="overflow-hidden whitespace-nowrap"
        style={{ width: "100%" }}
      >
        <div className="animate-marquee inline-block">
          {skills.concat(skills).map((skill, index) => (
            <span
              key={index}
              className={cn(
                `m-1 inline-block rounded-full px-3 py-1 text-xs transition-opacity duration-200 hover:opacity-80 sm:text-sm`,
              )}
              style={{
                backgroundColor: skill.color,
                color: skill.textColor,
              }}
              onClick={() => handleSkillClick(skill.name)}
            >
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="mr-2 inline-block h-5 w-5"
                  style={{}}
                />
              )}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
