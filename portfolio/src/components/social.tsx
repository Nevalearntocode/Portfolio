"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Facebook, Github, Linkedin } from "lucide-react";
import GitHubCalendar, { Activity } from "react-github-calendar";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

type Props = {};

export default function Social({}: Props) {
  const [isTimeout, setIsTimeout] = useState(false);
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

  const onDiscordTagsCopy = () => {
    setIsTimeout(true);
    navigator.clipboard.writeText("calmeneva#3634");
    toast.success("Discord tag copied to clipboard");
    setTimeout(() => {
      setIsTimeout(false);
    }, 15000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-16 flex h-full w-full items-start justify-center md:mt-0 md:items-center"
    >
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
                    window.open("https://github.com/Nevalearntocode/", "_blank")
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
                      "https://www.linkedin.com/in/calmeneva/",
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
                      "https://www.facebook.com/callme.Neva/", // Corrected URL
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
                  onClick={onDiscordTagsCopy}
                >
                  <DiscordLogoIcon className="mr-2 h-4 w-4" />
                  Discord
                </Button>
              </div>
              <div className="mt-0 flex flex-col md:mt-4">
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
    </motion.div>
  );
}
