import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-2 border-primary bg-white px-3 py-2 text-sm font-normal file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-primary/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-secondary dark:placeholder:text-white/50 dark:border-primary",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
