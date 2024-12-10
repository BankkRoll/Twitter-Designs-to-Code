"use client";

import { Code2, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const productFeatures = [
  {
    title: "Data Extraction",
    description:
      "Extract HR & Payroll data automatically via our powerful API.",
    href: "#",
  },
  {
    title: "Real-time Processing",
    description:
      "Get accurate data back in seconds with our advanced algorithms.",
    href: "#",
  },
  {
    title: "Secure Integration",
    description: "Enterprise-grade security for all your sensitive data needs.",
    href: "#",
  },
];

export default function AffixHero() {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <div className="container mx-auto flex h-16 items-center px-4 relative">
          <a href="#" className="flex items-center gap-2">
            <div className="rounded-full bg-foreground p-2">
              <Code2 className="size-4 md:size-6 text-background" />
            </div>
            <span className="text-xl md:text-3xl font-medium">affix</span>
          </a>

          <NavigationMenu className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {productFeatures.map((feature) => (
                      <li key={feature.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={feature.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {feature.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {feature.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  Contact us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:inline-flex py-4 px-6 rounded-2xl"
            >
              Read the docs
            </Button>
            <Button className="hidden md:inline-flex py-4 px-6 rounded-2xl">
              Book a Call
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <a href="#" className="flex items-center">
                    <div className="rounded-full bg-foreground p-1 mr-2">
                      <Code2 className="h-4 w-4 text-background" />
                    </div>
                    <span className="text-lg font-semibold">affix</span>
                  </a>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold">Product</h2>
                    {productFeatures.map((feature) => (
                      <a
                        key={feature.title}
                        href="#"
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {feature.title}
                      </a>
                    ))}
                  </div>
                  <a href="#" className="block py-2 text-sm font-medium">
                    Pricing
                  </a>
                  <a href="#" className="block py-2 text-sm font-medium">
                    Contact us
                  </a>
                  <Button className="w-full px-6 py-4 rounded-xl">
                    Book a Call
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full  px-6 py-4 rounded-xl"
                  >
                    Read the docs
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-[800px] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Extract Census, Tax, and Historical Payroll Data.{" "}
            <span className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              In 30 seconds.
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            With Affix, extract all the HR & Payroll data you need from a
            customer's former HR/Payroll system, via API. Get accurate data back
            in seconds, without the excruciating back.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="text-lg w-full sm:w-auto  px-6 py-6 rounded-xl"
            >
              Book a Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg w-full sm:w-auto  px-6 py-6 rounded-xl"
            >
              Read the docs
            </Button>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-8">
              Trusted by the most innovative companies in HR and Payroll
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
              {["Meta", "Microsoft", "Stanford", "GoodData", "Uber Eats"].map(
                (company, index) => (
                  <motion.div
                    key={company}
                    className="w-full flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  >
                    <img
                      src={`https://placehold.co/120x40?text=${
                        company.split(" ")[0]
                      }&font=roboto`}
                      alt={company}
                      className="max-w-full h-auto"
                    />
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
