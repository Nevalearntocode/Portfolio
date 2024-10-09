import Link from "next/link";
import React from "react";
import Airbnb from "../projects/airbnb";
import Chat from "../projects/chat";
import SimpleAuthentication from "../projects/simple-authentication";

type Props = {
  type: string;
};

export default function Redux({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can i do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Global state management</li>
          <li>Fetching data</li>
          <li>Caching through provider tags and invalidate tags</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What have I built {type}?</h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <Airbnb />
          <Chat />
          <SimpleAuthentication />
        </ul>
      </div>
    </div>
  );
}
