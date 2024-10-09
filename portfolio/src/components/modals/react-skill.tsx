import Link from "next/link";
import React from "react";
import Airbnb from "../projects/airbnb";
import Chat from "../projects/chat";
import Ecommerce from "../projects/ecommerce";

type Props = {
  type: string;
};

export default function ReactSkill({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can i do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>I know most basic/advanced {type} concepts</li>
          <li>
            I can utilize advanced {type} libraries to speeding up development
            process
          </li>
          <li>And I'm using {type} primarily through Next.js</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What have I built {type}?</h3>
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
