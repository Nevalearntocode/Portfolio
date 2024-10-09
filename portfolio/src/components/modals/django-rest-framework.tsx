"use client";

import React from "react";
import Airbnb from "../projects/airbnb";
import Chat from "../projects/chat";
import SimpleAuthentication from "../projects/simple-authentication";
import Note from "../projects/note";

type Props = {
  type: string;
};

export default function DjangoRestFramework({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          What can I do with {type}?
        </h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Authentication with JWT tokens</li>
          <li>Serialize data</li>
          <li>Custom API endpoints</li>
          <li>Basic backend logics</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          What have I built with {type}?
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
