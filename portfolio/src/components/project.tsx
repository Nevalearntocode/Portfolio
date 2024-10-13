"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { ImageModalState, Project as ProjectType } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import ProjectMain from "./project-main";
import { useAppDispatch } from "@/redux/use-store";
import { openModal } from "@/redux/slices/image-modal-slice";

export default function Project(project: ProjectType) {
  const [state, setState] = useState<"main" | "sub">("main");
  const { images, mobileImages, name } = project;
  const dispatch = useAppDispatch();

  const onOpenModal = (
    type: ImageModalState["type"],
    name: string,
    image: string,
  ) => {
    dispatch(
      dispatch(
        openModal({
          type,
          name,
          image,
        }),
      ),
    );
  };

  return (
    <AnimatePresence mode="wait">
      {state === "main" ? (
        <ProjectMain project={project} setState={setState} />
      ) : (
        <motion.div
          key="sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-black bg-opacity-50 p-4 text-white">
            <Button variant="ghost" onClick={() => setState("main")}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h2 className="text-sm font-semibold md:text-base lg:text-lg">
              {name}
            </h2>
            <div className="w-[72px]" />
          </div>
          <div className="max-h-[520px] overflow-auto pt-[72px]">
            <h3 className="text-lg font-semibold text-white">Images</h3>
            <div className="mt-4 grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {images.map((item, index) => (
                <div key={index} className="p-1">
                  <Card>
                    <CardContent
                      className="relative flex aspect-video cursor-pointer items-center justify-center p-6"
                      onClick={() =>
                        onOpenModal("desktop", item.name, item.image)
                      }
                    >
                      <Image
                        src={item.image}
                        alt={`${name} - Image ${index + 1}`}
                        fill
                        className="cursor-pointer rounded-xl object-cover transition duration-1000 hover:scale-110"
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {mobileImages.length > 0 && (
              <h3 className="mt-8 text-lg font-semibold text-white">Mobile</h3>
            )}
            <div className="mt-4 grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mobileImages.map((item, index) => (
                <div key={`mobile-${index}`} className="p-1">
                  <Card>
                    <CardContent
                      className="relative flex aspect-[9/14] cursor-pointer items-center justify-center p-6"
                      onClick={() =>
                        onOpenModal("mobile", item.name, item.image)
                      }
                    >
                      <Image
                        src={item.image}
                        alt={`${name} - Mobile ${index + 1}`}
                        fill
                        className="rounded-xl"
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
