import Link from "next/link";
import React from "react";

type Props = { type: string };

export default function TypeScript({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          Why do I prefer {type} over JavaScript?
        </h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Static typing helps catch errors at compile time</li>
          <li>Improved developer tooling and autocompletion</li>
          <li>Easier refactoring and maintaining large codebases</li>
          <li>Enhanced readability and documentation with type annotations</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <p>
          I’ve used {type} in most of my frontend projects to improve
          reliability and maintainability.
        </p>
        <p>
          Check out my{" "}
          <Link
            href="https://github.com/Nevalearntocode"
            className="text-blue-500 underline underline-offset-2"
          >
            GitHub
          </Link>{" "}
          for more of my {type} projects.
        </p>
      </div>
    </div>
  );
}
