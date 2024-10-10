import Link from "next/link";
import React from "react";

type Props = {};

export default function Messenger({}: Props) {
  return (
    <li className="flex w-full justify-between">
      Fullstack Next.js Messenger Clone
      <div className="flex gap-4">
        <Link href={`/`} className="">
          <span className="text-blue-500 underline">Repo here</span>
        </Link>
      </div>
    </li>
  );
}
