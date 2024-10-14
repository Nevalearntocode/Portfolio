import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CVDownloadCTA() {
  return (
    <div className="mt-0 rounded-lg bg-secondary p-4 shadow-md lg:mt-8">
      <h3 className="mb-2 text-lg font-semibold">
        Want to know what my resume looks like?
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Get a comprehensive overview of my skills and experience.
      </p>
      <Button
        variant="default"
        onClick={() => window.open("/documents/resume.pdf", "_blank")}
        className="w-full md:w-auto"
      >
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </Button>
    </div>
  );
}
