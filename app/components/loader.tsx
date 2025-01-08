import { cn } from "@/lib/utils";
import React from "react";

function Loader({ className }: { className?: string }) {
  return (
    <div className="flex flex-row gap-2 justify-center">
      <div
        className={cn(
          "w-4 h-4 rounded-full bg-primary animate-bounce",
          className
        )}></div>
      <div
        className={cn(
          "w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]",
          className
        )}></div>
      <div
        className={cn(
          "w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]",
          className
        )}></div>
    </div>
  );
}

export default Loader;
