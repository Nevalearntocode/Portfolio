"use client";

import React from "react";
import Airbnb from "../projects/airbnb";

type Props = { type: string };

export default function Celery({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can I do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Asynchronous tasks</li>
          <li>Task scheduling</li>
          <li>Background tasks</li>
          <li>CronJobs</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <Airbnb type="redux" />
        </ul>
      </div>
    </div>
  );
}
