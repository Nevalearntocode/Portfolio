import Link from "next/link";
import React from "react";

type Props = {
  type: string;
};

export default function Nextjs({type}: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          What can i do with this Framework?
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
          What have I built with TypeScript?
        </h3>
        <p>
          I’ve used TypeScript in most of my frontend projects to improve
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
          for more of my TypeScript projects.
        </p>
      </div>
    </div>
  );
}
