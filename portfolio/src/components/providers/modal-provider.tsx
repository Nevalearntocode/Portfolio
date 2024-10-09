"use client";

import React, { useEffect, useState } from "react";
import SkillsModal from "../modals/skills-modal";

type Props = {};

export default function ModalProvider({}: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <SkillsModal />
    </>
  );
}
