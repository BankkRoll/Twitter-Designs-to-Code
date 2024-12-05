"use client";

import { Sparkles, Star, Upload } from "lucide-react";

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
        <Button variant="outline" className="rounded-full font-medium">
          Download Now
        </Button>
      </header>

      <main>
        <section className="container py-24 text-center">
          <motion.h1
            className="relative mx-auto max-w-3xl font-mono text-5xl font-medium tracking-tight md:text-6xl"
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
            className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-4 rounded-xl bg-muted p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button size="sm" variant="ghost" className="gap-2">
              <Star className="h-4 w-4" />
              Connect Notion
            </Button>
            <div className="h-6 w-px bg-foreground" />
            <Button size="sm" variant="ghost" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload Notes
            </Button>
            <div className="h-6 w-px bg-foreground" />
            <Button size="sm" variant="ghost" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Transcribe and Save
            </Button>
            <Button size="sm" className="rounded-lg">
              Get Started
            </Button>
          </motion.div>
        </section>

        <motion.section
          className="container relative pb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative mx-auto max-w-5xl flex items-center justify-center">
            <motion.div
              className=" bg-background border-2 rounded-[32px] absolute left-0 top-12 w-[35%] text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, rotate: -6 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                <div className="text-xs font-medium text-amber-600">
                  YOU ONLY NEED ONE APP
                </div>
                <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                  Access anywhere,{"\n"}any device
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
              className="z-10 bg-background border-2 rounded-[32px] absolute  top-20 w-[38%] text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                <div className="text-xs font-medium text-amber-600">
                  YOU ONLY NEED ONE APP
                </div>
                <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                  Quick snap-and-{"\n"}save process
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
              className=" bg-background border-2 rounded-[32px] absolute right-0 top-12 w-[35%] text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, rotate: 6 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
                <div className="text-xs font-medium text-amber-600">
                  YOU ONLY NEED ONE APP
                </div>
                <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">
                  Secure digital{"\n"}backup always
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
        </motion.section>
      </main>
    </div>
  );
}
