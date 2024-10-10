import Link from "next/link";
import React from "react";

type Props = {
  type?: "front" | "back" | "redux";
};

export default function SimpleAuthentication({ type = "back" }: Props) {
  return (
    <li className="flex w-full justify-between">
      Simple Authentication App{" "}
      {type === "back" ? "API" : type === "front" ? "UI" : ""}
      <Link href={`/`} className="">
        <span className="text-blue-500 underline">Repo here</span>
      </Link>
    </li>
  );
}
