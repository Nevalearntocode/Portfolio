import Link from 'next/link';
import React from 'react'

type Props = {}

export default function Chat({}: Props) {
  return (
    <li className="flex w-full justify-between">
      A Chat App API{" "}
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