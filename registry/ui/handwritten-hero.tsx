"use client";

import { Menu, Sparkles, Star, Upload } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HandwrittenHero() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#" className="font-mono text-xl font-bold tracking-tighter">
          LOGO
        </a>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 transform space-x-12 md:flex">
          <a href="#" className="text-[15px] font-medium">
            Products
          </a>
          <a href="#" className="text-[15px] font-medium">
            Testimonial
          </a>
          <a href="#" className="text-[15px] font-medium">
            About Us
          </a>
          <a href="#" className="text-[15px] font-medium">
            Resources
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full font-medium hidden md:inline-flex"
          >
            Download Now
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-6">
                <a href="#" className="text-[15px] font-medium">
                  Products
                </a>
                <a href="#" className="text-[15px] font-medium">
                  Testimonial
                </a>
                <a href="#" className="text-[15px] font-medium">
                  About Us
                </a>
                <a href="#" className="text-[15px] font-medium">
                  Resources
                </a>
                <Button
                  variant="outline"
                  className="rounded-full font-medium w-full"
                >
                  Download Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section className="container py-12 md:py-24 text-center px-4">
          <motion.h1
            className="relative mx-auto max-w-3xl font-mono text-xl sm:text-4xl md:text-6xl font-medium tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Digitalize{" "}
            <motion.span
              className="relative inline-block bg-blue-500/20"
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              handwritten
              <motion.div
                className="absolute -left-2 -top-2 h-3 w-3 rounded-full bg-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              />
              <motion.div
                className="absolute -left-1 top-0 bottom-0 w-1 bg-blue-500"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.9, duration: 0.3 }}
              />
              <motion.div
                className="absolute -right-1 top-0 bottom-0 w-1 bg-blue-500"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.9, duration: 0.3 }}
              />
            </motion.span>{" "}
            notes in seconds.
          </motion.h1>

          <motion.div
            className="mx-auto mt-8 md:mt-16 flex flex-col sm:flex-row max-w-2xl items-center justify-center gap-4 rounded-xl bg-muted p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 w-full sm:w-auto"
            >
              <Star className="h-4 w-4" />
              Connect Notion
            </Button>
            <div className="hidden sm:block h-6 w-px bg-foreground" />
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 w-full sm:w-auto"
            >
              <Upload className="h-4 w-4" />
              Upload Notes
            </Button>
            <div className="hidden sm:block h-6 w-px bg-foreground" />
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 w-full sm:w-auto"
            >
              <Sparkles className="h-4 w-4" />
              Transcribe and Save
            </Button>
            <Button size="sm" className="rounded-lg w-full sm:w-auto">
              Get Started
            </Button>
          </motion.div>
        </section>

        <motion.section
          className="container relative pb-12 md:pb-24 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-0">
              <motion.div
                className="bg-background border-2 rounded-[32px] w-full md:w-[35%] md:absolute md:left-0 md:top-12 text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: [0, 0, -6] }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="text-xs font-medium text-amber-600">
                    YOU ONLY NEED ONE APP
                  </div>
                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                    Access anywhere, any device
                  </h3>
                  <div className="mt-6 flex justify-center">
                    <img
                      src="https://placehold.co/48x48?text=Access+anywhere&font=roboto"
                      alt="Access anywhere illustration"
                      className="h-48 w-48 object-contain"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="z-10 bg-background border-2 rounded-[32px] w-full md:w-[38%] md:absolute md:top-20 text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="text-xs font-medium text-amber-600">
                    YOU ONLY NEED ONE APP
                  </div>
                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                    Quick snap-and- save process
                  </h3>
                  <div className="mt-6 flex justify-center">
                    <img
                      src="https://placehold.co/48x48?text=Quick%20snap%20illustration&font=roboto"
                      alt="Quick snap illustration"
                      className="h-48 w-48 object-contain"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-background border-2 rounded-[32px] w-full md:w-[35%] md:absolute md:right-0 md:top-12 text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, rotate: [0, 0, 6] }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  <div className="text-xs font-medium text-amber-600">
                    YOU ONLY NEED ONE APP
                  </div>
                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                    Secure digital backup always
                  </h3>
                  <div className="mt-6 flex justify-center">
                    <img
                      src="https://placehold.co/48x48?text=Secure+Digital+Backup&font=roboto"
                      alt="Secure backup illustration"
                      className="h-48 w-48 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
