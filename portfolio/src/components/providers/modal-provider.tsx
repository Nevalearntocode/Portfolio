"use client";

import React, { useEffect, useState } from "react";
import SkillsModal from "../modals/skills/skills-modal";
import ProjectImageModal from "../modals/project-images/project-image-modal";

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
      <ProjectImageModal />
    </>
  );
}
