"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { closeModal } from "@/redux/slices/image-modal-slice";
import { useAppDispatch, useAppSelector } from "@/redux/use-store";
import Image from "next/image";
import React from "react";

type Props = {};

export default function ProjectImageModal({}: Props) {
  const { isOpen, type, name, image } = useAppSelector(
    (state) => state.imageModal,
  );
  const dispatch = useAppDispatch();

  const onOpenChange = () => {
    dispatch(closeModal());
  };

  if (!isOpen || type === "" || name === "" || image === "") return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        className={cn(
          "flex flex-col items-center justify-center p-0",
          type === "desktop" && "max-w-[90vw] sm:max-w-5xl",
          type === "mobile" && "max-w-[90vw] sm:max-w-[380px]",
        )}
      >
        <DialogHeader className="w-full rounded-lg bg-primary">
          <DialogTitle className="p-4 text-sm font-bold capitalize text-white md:text-base lg:text-lg">
            {name}
          </DialogTitle>
        </DialogHeader>
        <div
          className={cn(
            "relative w-full",
            type === "mobile" &&
              "flex aspect-[9/14] items-center justify-center",
            type === "desktop" && "aspect-video",
          )}
        >
          <Image
            src={image}
            alt={`${name} - ${image}`}
            className={cn(
              "rounded-lg",
              type === "desktop" ? "h-auto w-full object-contain" : "w-full",
            )}
            fill
            sizes={
              type === "desktop" ? "(max-width: 640px) 90vw, 100vw" : "380px"
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
