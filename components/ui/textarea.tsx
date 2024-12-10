import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full border-2 border-primary bg-background px-3 py-2 text-sm resize-none placeholder:text-primary/50 font-normal focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary dark:placeholder:text-white/50 dark:bg-secondary",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
