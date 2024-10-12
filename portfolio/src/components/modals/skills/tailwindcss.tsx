import Link from "next/link";
import React from "react";
import Airbnb from "../../projects/airbnb";
import Chat from "../../projects/chat";
import SimpleAuthentication from "../../projects/simple-authentication";

type Props = {
  type: string;
};

export default function TailwindCSS({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can i do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Responsive Design</li>
          <li>Quick and easy CSS with prebuilt CSS classes</li>
          <li>
            Utilize with other tools like Shadcn/UI to speed up development
            process
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
          for more detail
        </p>
      </div>
    </div>
  );
}
