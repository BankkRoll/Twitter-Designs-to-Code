"use client";

import * as React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("overflow-hidden relative", className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-72")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
              isOpened ? "[&_pre]:overflow-auto" : "[&_pre]:overflow-hidden",
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "from-background/10 to-background absolute flex justify-center items-center p-2 bg-gradient-to-b",
            isOpened ? "h-12 inset-x-0 bottom-0" : "inset-0",
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="h-8 mb-8 text-xs">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}
