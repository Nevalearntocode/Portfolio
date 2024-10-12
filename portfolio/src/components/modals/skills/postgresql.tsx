import React from "react";
import Airbnb from "../../projects/airbnb";
import Chat from "../../projects/chat";
import Ecommerce from "../../projects/ecommerce";
import Link from "next/link";

type Props = {
  type: string;
};

export default function PostgreSQL({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Why {type}?</h3>
        <p>
          Through my learning journey, there are many tutorial that use {type},
          so I use it, practice it and love it more than other databases.
        </p>
        <p>
          I've tried different database technologies, from NoSQL like Firebase,
          MongoDB, to SQL like MySQL and BaaS like Convex. But I love Django and
          Django likes SQL databases so I choose {type} over MySQL.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <Airbnb type="redux" />
          <Chat type="redux" />
          <Ecommerce />
        </ul>
        <p>
          And most of my projects are built with {type} if it needs a SQL
          database.
        </p>
        <p>
          Check out my{" "}
          <Link
            href="https://github.com/Nevalearntocode"
            className="text-blue-500 underline underline-offset-2"
          >
            GitHub
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
