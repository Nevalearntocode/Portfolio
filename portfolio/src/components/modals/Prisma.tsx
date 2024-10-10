import React from "react";
import Ecommerce from "../projects/ecommerce";
import AirbnbFullStackNextjs from "../projects/airbnb-nextjs-fullstack";
import Discord from "../projects/discord";
import Messenger from "../projects/messenger";

type Props = {
  type: string;
};

export default function Prisma({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can i do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>API/databse design</li>
          <li>CRUD operations</li>
          <li>Integrate seemlessly with Auth.js (NextAuth)</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <Ecommerce />
          <AirbnbFullStackNextjs />
          <Discord />
          <Messenger />
        </ul>
      </div>
    </div>
  );
}
