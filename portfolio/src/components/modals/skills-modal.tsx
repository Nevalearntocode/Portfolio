"use client";

import { closeModal } from "@/redux/slices/skill-modal-slice";
import { useAppDispatch, useAppSelector } from "@/redux/use-store";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

type Props = {};

export default function SkillsModal({}: Props) {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useAppSelector((state) => state.modal);
  const onOpenChange = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Works</DialogTitle>
        </DialogHeader>
        something for show
      </DialogContent>
    </Dialog>
  );
}
