"use client";

import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const sticky = useState(true);

  useEffect(() => {
    if (sticky) {
      const handleScroll = () => {
        setHasScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [sticky]);

  return (
    <header className="bg-background/20 sticky top-0 z-50 flex justify-center px-2 py-4 backdrop-blur transition-all md:px-4">
      <div className="container flex justify-between items-center px-4 md:px-0">
        <div />

        <ThemeToggle />
      </div>
      {sticky && (
        <hr
          className={cn(
            "w-full absolute right-0 bottom-0 left-0 transition-opacity duration-300 ease-in-out",
            hasScrolled ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </header>
  );
}
