import Link from "next/link";
import React from "react";

type Props = {};

export default function Note({}: Props) {
  return (
    <li className="flex w-full justify-between">
      Simple Note App API{" "}
      <Link href={`/`} className="">
        <span className="text-blue-500 underline">Repo here</span>
      </Link>
    </li>
  );
}
