import React from "react";

type Props = {
  type: string;
};

export default function Git({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can I do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Basic version control operations</li>
          <li>Create and manage branches for feature development</li>
          <li>Resolve merge conflicts during collaboration</li>
          <li>Revert commits and roll back changes when needed</li>
        </ul>
      </div>
    </div>
  );
}
