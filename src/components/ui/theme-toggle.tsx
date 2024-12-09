"use client";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { VariantProps } from "class-variance-authority";
import { useTheme } from "next-themes";

type ButtonVariantType = VariantProps<typeof buttonVariants>["variant"];

interface ThemeToggleProps {
  variant?: ButtonVariantType;
}

export function ThemeToggle({ variant = "outline" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<string>(
    theme || "light",
  );

  const handleToggle = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    setCurrentTheme(nextTheme);
  };

  if (!currentTheme) {
    return null;
  }

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={handleToggle}
      className="relative flex justify-center items-center"
    >
      <AnimatePresence initial={false} mode="wait">
        {currentTheme === "light" && (
          <motion.div
            key="light"
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute"
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        )}
        {currentTheme === "dark" && (
          <motion.div
            key="dark"
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute"
          >
            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
