"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export function SherlockHero() {
  return (
    <div className="min-h-screen relative">
      <header className="absolute right-0 left-0 top-2 z-50">
        <nav>
          <div className="bg-background/80 mx-auto max-w-lg px-4 rounded-lg border backdrop-blur-sm">
            <div className="h-12 flex justify-between items-center md:justify-center md:gap-8">
              <a href="#" className="text-base font-semibold">
                Sherlock
              </a>
              <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-sm">
                  Product
                </a>
                <a href="#" className="text-sm">
                  Features
                </a>
                <a href="#" className="text-sm">
                  Pricing
                </a>
                <a href="#" className="text-sm">
                  About
                </a>
              </div>
              <a href="#" className="hidden md:block text-sm">
                Log in
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4">
                    <a href="#" className="text-sm">
                      Product
                    </a>
                    <a href="#" className="text-sm">
                      Features
                    </a>
                    <a href="#" className="text-sm">
                      Pricing
                    </a>
                    <a href="#" className="text-sm">
                      About
                    </a>
                    <a href="#" className="text-sm">
                      Log in
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      <motion.section
        className="px-4 pt-32 pb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="relative flex items-center justify-center w-[100px] h-[120px] m-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border-background mx-auto absolute top-0 right-0 left-0 flex justify-center items-center border-2"
          >
            <img
              src="https://placehold.co/20x20?text=S3&font=roboto"
              alt="Sherlock Logo"
              className="rounded-md w-[3rem] h-[3rem]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border-background mx-auto absolute right-0 left-0 top-2 flex justify-center items-center border-2"
          >
            <img
              src="https://placehold.co/24x24?text=S3&font=roboto"
              alt="Sherlock Logo"
              className="rounded-md w-[4rem] h-[4rem]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-background mx-auto absolute right-0 left-0 top-4 flex justify-center items-center border-2"
          >
            <img
              src="https://placehold.co/28x28?text=S3&font=roboto"
              alt="Sherlock Logo"
              className="rounded-md w-[5rem] h-[5rem]"
            />
          </motion.div>
        </div>

        <motion.h1
          className="mx-auto max-w-4xl mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          The easiest way to keep everyone in loop
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl mb-10 text-base sm:text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Office ipsum you must be muted. At panel mint meat line blue
          backwards. Intersection should right can't lift market fit don't
          running.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto px-6 text-base rounded-xl shadow-lg"
          >
            Create Account
            <div className="ml-2 space-x-1 hidden sm:inline-flex">
              <span className="w-5 h-5 text-xs rounded-sm border opacity-70">
                ⌘
              </span>
              <span className="w-5 h-5 text-xs rounded-sm border opacity-70">
                K
              </span>
            </div>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-base rounded-xl shadow-lg"
          >
            Learn more
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        className="px-4 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p className="mb-8 text-center text-gray-500">
          Trusted by specialist at
        </p>
        <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 justify-items-center items-center gap-8">
          {[
            "Bloomberg",
            "TechCrunch",
            "Forbes",
            "Gizmodo",
            "Wired",
            "The New York Times",
            "NBC",
            "CNN",
          ].map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            >
              <img
                src={`https://placehold.co/36x12?text=${
                  company.split(" ")[0]
                }&font=roboto`}
                alt={company}
                className="w-36 h-auto"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="px-4 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="bg-muted mx-auto max-w-6xl overflow-hidden rounded-lg border">
          <div className="bg-muted h-8 flex items-center px-4 space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div>
            <div className="aspect-[16/9] bg-card" />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
