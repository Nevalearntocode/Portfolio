import React from "react";
import FileDrive from "../../projects/file-drive";
import Miro from "../../projects/miro";
import Notion from "../../projects/notion";

type Props = {
  type: string;
};

export default function Convex({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can I do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Basic CRUD operations</li>
          <li>Real-time feature built-in</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <FileDrive />
          <Miro />
          <Notion />
        </ul>
      </div>
    </div>
  );
}
