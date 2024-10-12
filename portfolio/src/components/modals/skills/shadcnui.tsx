import Link from "next/link";
import React from "react";

type Props = {
  type: string;
};

export default function Shadcnui({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can i do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Build fast, get-the-job-done components in minutes.</li>
          <li>Quick and easy color theme accross the app.</li>
          <li>Easy toast and dark mode.</li>
          <li>
            Styled, complicated components like modals, dropdowns, comboboxes
            with just few lines of code.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <p>All of my projects are built using {type}.</p>
        <p>
          Check out my{" "}
          <Link
            href="https://github.com/Nevalearntocode"
            className="text-blue-500 underline underline-offset-2"
          >
            GitHub
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
