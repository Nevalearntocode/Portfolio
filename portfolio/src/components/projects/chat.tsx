import Link from "next/link";
import React from "react";

type Props = {
  type?: "front" | "back";
};

export default function Chat({ type = "back" }: Props) {
  return (
    <li className="flex w-full justify-between">
      Chat App {type === "back" ? "API" : "UI"}
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
