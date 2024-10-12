import Link from "next/link";
import React from "react";

type Props = {
  type: string;
};

export default function JavaScript({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can I do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Build interactive user interfaces</li>
          <li>Validate user input</li>
          <li>Interact with APIs</li>
          <li>Handle asynchronous operations</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <p>
          Most of my projects are built using JavaScript under the hood in the
          frontend.
        </p>
        <p>
          You can visit my{" "}
          <Link
            href="https://github.com/Nevalearntocode"
            className="text-blue-500 underline underline-offset-2"
          >
            GitHub
          </Link>{" "}
          here{" "}
        </p>
      </div>
    </div>
  );
}
