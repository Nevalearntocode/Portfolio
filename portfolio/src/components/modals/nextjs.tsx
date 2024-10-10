import Link from "next/link";
import React from "react";
import Airbnb from "../projects/airbnb";
import Chat from "../projects/chat";
import Ecommerce from "../projects/ecommerce";

type Props = {
  type: string;
};

export default function Nextjs({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can i do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Build full-stack applications with built-in API routes</li>
          <li>
            Implement server-side rendering (SSR) and static site generation
            (SSG)
          </li>
          <li>Optimize for performance and SEO</li>
          <li>Integrate with external APIs</li>
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
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Ok but what stands out?</h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <Airbnb type="front" />
          <Chat type="front" />
          <Ecommerce />
        </ul>
      </div>
    </div>
  );
}
