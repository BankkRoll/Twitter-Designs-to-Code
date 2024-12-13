"use client";

import { ArrowUpRight, Menu, Search, ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Home",
    image:
      "https://static.vecteezy.com/system/resources/previews/035/500/119/non_2x/ai-generated-3d-succulent-plant-isolated-on-transparent-background-free-png.png",
    href: "#",
  },
  {
    title: "Footwear",
    image:
      "https://static.vecteezy.com/system/resources/previews/047/920/967/large_2x/formal-shoes-isolated-on-a-transparent-background-free-png.png",
    href: "#",
  },
  {
    title: "Technology",
    image:
      "https://static.vecteezy.com/system/resources/previews/026/773/824/large_2x/headphone-with-ai-generated-free-png.png",
    href: "#",
  },
];

export default function CommerceHero() {
  return (
    <div className="min-h-screen">
      <div className="relative container mx-auto">
        <div className="mt-6 bg-accent rounded-2xl relative">
          <header className="flex items-center">
            <div className="w-full md:w-1/2 bg-background p-4 rounded-br-2xl flex items-center gap-6">
              <a href="#" className="text-xl font-medium">
                Commerce_
              </a>

              <nav className="hidden lg:flex items-center justify-between w-full">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">Shop</Button>
                <Button variant="ghost">Collections</Button>
                <Button variant="ghost">Blog</Button>
                <Button variant="ghost" size="icon">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingBasket className="w-5 h-5" />
                </Button>
              </nav>

              <Sheet>
                <SheetTrigger asChild className="lg:hidden ml-auto">
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[400px] p-0"
                >
                  <SheetHeader className="p-6 text-left border-b">
                    <SheetTitle className="flex items-center justify-between">
                      <a href="#" className="text-xl font-medium">
                        Commerce_
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col p-6">
                    <Button variant="ghost" className="justify-start px-2">
                      Home
                    </Button>
                    <Button variant="ghost" className="justify-start px-2">
                      Shop
                    </Button>
                    <Button variant="ghost" className="justify-start px-2">
                      Collections
                    </Button>
                    <Button variant="ghost" className="justify-start px-2">
                      Blog
                    </Button>
                  </nav>
                  <Separator />
                  <div className="p-6 flex flex-col gap-4">
                    <Button variant="outline" className="justify-start gap-2">
                      <Search className="w-4 h-4" />
                      Search
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <ShoppingBasket className="w-4 h-4" />
                      Cart
                    </Button>
                  </div>
                  <Separator />
                  <div className="p-6">
                    <Button className="w-full justify-between">
                      Log In
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="hidden md:flex w-1/2 justify-end items-center pr-4 gap-4 ml-auto">
              <Button
                variant="secondary"
                className="bg-primary-foreground p-0 rounded-full"
              >
                <span className="pl-4 py-2 text-sm">Log In</span>
                <div className="rounded-full flex items-center justify-center m-auto bg-background w-10 h-10 ml-2">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Button>
            </div>
          </header>

          <motion.section
            className="px-8 py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Curate your products
                <br />
                into simple collections.
              </motion.h1>
              <motion.p
                className="text-base md:text-lg text-primary/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Use this page to group your products into themed collections,
                making it easy for customers to explore.
              </motion.p>
            </div>
          </motion.section>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-muted rounded-3xl p-8 min-h-[300px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold relative">
                {category.title}
              </h2>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-36 h-36 md:w-48 md:h-48 object-contain opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-background rounded-tl-xl flex items-center justify-center">
                <a
                  href={category.href}
                  className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
