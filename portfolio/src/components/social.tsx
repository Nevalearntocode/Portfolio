"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Facebook, Github, Linkedin } from "lucide-react";
import GitHubCalendar, { Activity } from "react-github-calendar";
import Image from "next/image";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

type Props = {};

export default function Social({}: Props) {
  const selectLastHalfYear = (
    contributions: Array<Activity>,
    months: number,
  ) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = months;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="flex h-full w-full items-start justify-center md:items-center">
      <Card className="w-full max-w-3xl bg-background text-foreground">
        <CardHeader className="rounded-xl bg-primary text-primary-foreground">
          <CardTitle>Social Links</CardTitle>
        </CardHeader>
        <CardContent className="p-2 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <Button
                  variant="outline"
                  className="w-32"
                  onClick={() =>
                    window.open("https://github.com/yourusername", "_blank")
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-32"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/yourusername",
                      "_blank",
                    )
                  }
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="w-32"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/yourusername",
                      "_blank",
                    )
                  }
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  className="w-32"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/yourusername",
                      "_blank",
                    )
                  }
                >
                  <DiscordLogoIcon className="mr-2 h-4 w-4" />
                  Discord
                </Button>
              </div>
              <div className="mt-4 flex flex-col">
                <h3 className="mb-6 ml-4 text-lg font-semibold md:ml-0">
                  GitHub Contributions
                </h3>
                <div className="hidden w-full items-center justify-center lg:flex">
                  <GitHubCalendar
                    username="Nevalearntocode"
                    colorScheme="light"
                    transformData={(data) => selectLastHalfYear(data, 12)}
                  />
                </div>
                <div className="hidden w-full items-center justify-center sm:flex lg:hidden">
                  <GitHubCalendar
                    username="Nevalearntocode"
                    colorScheme="light"
                    transformData={(data) => selectLastHalfYear(data, 9)}
                    labels={{
                      totalCount:
                        "{{count}} contributions in the last nine months",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center sm:hidden">
            <GitHubCalendar
              username="Nevalearntocode"
              colorScheme="light"
              hideColorLegend
              transformData={(data) => selectLastHalfYear(data, 9)}
              labels={{
                totalCount: "{{count}} contributions in the last nine months",
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
