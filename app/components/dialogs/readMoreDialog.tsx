import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  text: string;
  header: string;
};

function ReadMoreDialog({ children, text, header }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{header}</DialogTitle>
          </DialogHeader>
          <p className="overflow-y-auto">{text}</p>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ReadMoreDialog;
