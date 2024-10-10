import Link from "next/link";
import React from "react";

type Props = {
  type?: "front" | "back" | "redux";
};

export default function Airbnb({ type = "back" }: Props) {
  return (
    <li className="flex w-full justify-between">
      Airbnb Clone {type === "back" ? "API" : type === "front" ? "UI" : ""}
      <div className="flex gap-4">
        <Link href={`/`} className="">
          <span className="text-blue-500 underline">Live here</span>
        </Link>
        <Link href={`/`} className="">
          <span className="text-blue-500 underline">Repo here</span>
        </Link>
      </div>
    </li>
  );
}
