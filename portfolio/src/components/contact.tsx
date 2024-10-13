"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Copy, Facebook, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

type Props = {};

export default function Contact({}: Props) {
  const [isTimeOut, setIsTimeOut] = useState(false);

  const onCopy = (string: string) => {
    setIsTimeOut(true);
    navigator.clipboard.writeText(string);
    toast.success("Copied to clipboard");
    setTimeout(() => {
      setIsTimeOut(false);
    }, 15000);
  };

  const onDiscordTagsCopy = () => {
    setIsTimeOut(true);
    navigator.clipboard.writeText("calmeneva#3634");
    toast.success("Discord tag copied to clipboard");
    setTimeout(() => {
      setIsTimeOut(false);
    }, 15000);
  };

  return (
    <div className="mt-20 flex h-full w-full items-start justify-center md:mt-0 md:items-center">
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
              <p>
                <span className="font-semibold">Email:</span>{" "}
                hmtam110501@gmail.com
              </p>
              {isTimeOut ? (
                <Button variant={`outline`} size={`icon`} className="ml-auto">
                  <Check className="h-4 w-4 text-emerald-500" />
                </Button>
              ) : (
                <Button
                  variant={`outline`}
                  size={`icon`}
                  className="ml-auto"
                  onClick={() => onCopy("hmtam110501@gmail")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="flex items-center gap-4">
              <p>
                <span className="font-semibold">Phone number:</span> +84 853 151
                319
              </p>
              {isTimeOut ? (
                <Button variant={`outline`} size={`icon`} className="ml-auto">
                  <Check className="h-4 w-4 text-emerald-500" />
                </Button>
              ) : (
                <Button
                  variant={`outline`}
                  size={`icon`}
                  className="ml-auto"
                  onClick={() => onCopy("hmtam110501@gmail")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-4">
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
                disabled={isTimeOut}
              >
                <DiscordLogoIcon className="mr-2 h-4 w-4" />
                Discord
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
