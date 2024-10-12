import React from "react";
import Airbnb from "../../projects/airbnb";
import Chat from "../../projects/chat";

type Props = {
  type: string;
};

export default function Docker({ type }: Props) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">What can I do with {type}?</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>
            Quickly set up development process without the need to use 3rd
            services (database, message broker, etc.)
          </li>
          <li>
            Use compose to manage multiple container, images at the same time
          </li>
          <li>Use profile to manage different moving parts of the project</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">
          what have i built with {type}?
        </h3>
        <ul className="text space-y-2 text-sm text-gray-700">
          <Airbnb type="redux" />
          <Chat type="redux" />
        </ul>
        <p className="mt-4">
          These projects are built with <strong>{type}</strong> in the
          <strong> development environment</strong>. For{" "}
          <strong> deployment</strong>, I prefer using third-party services like{" "}
          <strong> Neon </strong> or
          <strong> Redis Cloud </strong> because they offer{" "}
          <strong> free tiers </strong>
          and save me the hassle of managing infrastructure on platforms like
          <strong> AWS EC2 </strong> or <strong> DigitalOcean Droplets</strong>.
        </p>
      </div>
    </div>
  );
}
