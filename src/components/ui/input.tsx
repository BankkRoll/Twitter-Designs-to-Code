import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-input w-full h-9 flex px-3 py-1 text-base bg-transparent rounded-md border shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed file:text-foreground file:text-sm file:font-medium file:bg-transparent file:border-0 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1 md:text-sm placeholder:text-muted-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
