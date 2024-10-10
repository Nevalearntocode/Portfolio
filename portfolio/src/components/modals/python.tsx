import React from "react";
import Airbnb from "../projects/airbnb";
import Chat from "../projects/chat";
import Note from "../projects/note";
import SimpleAuthentication from "../projects/simple-authentication";

type Props = {
  type: string;
};

export default function Python({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can I do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Automating repetitive tasks </li>
          <li>Building APIs</li>
          <li>Advanced web-related features</li>
          <li>And my knowledge about {type} is primarily in Django</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <Airbnb />
          <Chat />
          <SimpleAuthentication />
          <Note />
        </ul>
      </div>
    </div>
  );
}
