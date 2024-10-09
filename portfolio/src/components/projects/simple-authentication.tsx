import Link from "next/link";
import React from "react";

type Props = {};

export default function SimpleAuthentication({}: Props) {
  return (
    <li className="flex w-full justify-between">
      Simple Authentication App API{" "}
      <Link href={`/`} className="">
        <span className="text-blue-500 underline">Repo here</span>
      </Link>
    </li>
  );
}
