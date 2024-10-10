import React from "react";
import Airbnb from "../projects/airbnb";
import Chat from "../projects/chat";
import Note from "../projects/note";
import SimpleAuthentication from "../projects/simple-authentication";
import Auction from "../projects/auction";

type Props = {
  type: string;
};

export default function Drizzle({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can I do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Basic CRUD operations</li>
          <li>Integrate seemlessly with Auth.js (NextAuth)</li>
          <li>Build small app quick and easy with Next.js Server Actions</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <Auction />
        </ul>
      </div>
    </div>
  );
}
