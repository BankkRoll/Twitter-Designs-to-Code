"use client";

import * as React from "react";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export async function copyToClipboardWithMeta(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch (error) {
    console.error("Failed to copy:", error);
    return false;
  }
}

interface NpmCommands {
  __npmCommand__: string;
  __yarnCommand__: string;
  __pnpmCommand__: string;
  __bunCommand__: string;
}

interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
  commands: Required<NpmCommands>;
}

export function CopyNpmCommandButton({
  commands,
  className,
  ...props
}: CopyNpmCommandButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyCommand = React.useCallback(
    async (value: string, pm: "npm" | "pnpm" | "yarn" | "bun") => {
      const success = await copyToClipboardWithMeta(value);
      if (success) {
        setHasCopied(true);
        toast.success(`Copied ${pm} command to clipboard!`, {
          description: `${value}`,
          descriptionClassName:
            "font-mono text-xs p-2 mt-1 bg-muted/20 border border-input rounded",
        });
      } else {
        toast.error(`Failed to copy ${pm} command.`);
      }
    },
    [],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "w-6 h-6 relative z-10 text-zinc-50 hover:text-zinc-50 hover:bg-zinc-700",
            className,
          )}
        >
          {hasCopied ? (
            <CheckIcon className="w-3 h-3" />
          ) : (
            <ClipboardIcon className="w-3 h-3" />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__npmCommand__, "npm")}
        >
          npm
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__yarnCommand__, "yarn")}
        >
          yarn
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__pnpmCommand__, "pnpm")}
        >
          pnpm
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__bunCommand__, "bun")}
        >
          bun
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
