"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
// Assuming 'codeExamples' is a predefined set of data.
import { codeExamples } from "@/lib/component-config";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const { data: examples } = useQuery({
    queryKey: ["codeExamples"],
    queryFn: async () => {
      return codeExamples;
    },
  });

  const filteredExamples = examples?.filter(
    (example) =>
      example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-background/20 sticky top-0 z-50 flex flex-col gap-2 px-2 py-4 backdrop-blur transition-all md:px-4">
      <div className="container flex justify-between items-center px-4 md:px-0 w-full">
        <Link href="/" className="flex items-center justify-center">
          <img
            src="/logo.png"
            alt="logo"
            className="dark:invert-0 invert h-8 w-8"
          />
        </Link>
        <Button
          variant="outline"
          className="md:w-64 justify-start text-left font-normal"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          <span>Search Registry...</span>
        </Button>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
      <hr
        className={cn(
          "w-full absolute right-0 bottom-0 left-0 transition-opacity duration-300 ease-in-out",
          hasScrolled ? "opacity-100" : "opacity-0",
        )}
      />

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search Registry..."
          value={searchTerm}
          onInput={handleSearchChange}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Registry Components">
            {filteredExamples?.map((example) => (
              <CommandItem
                key={example.id}
                className="cursor-pointer"
                onSelect={() => {
                  setOpen(false);
                  router.push(`/preview/${example.slug}`);
                }}
              >
                {example.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
