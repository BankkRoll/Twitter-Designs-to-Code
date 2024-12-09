"use client";

import { ArrowRight, Menu, Wallet } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FlowpayHero() {
  return (
    <div className="min-h-screen">
      <header className="flex h-20 items-center px-8 relative">
        <div className="flex flex-row items-center gap-3">
          <a href="#" className="flex items-center gap-2 text-xl">
            <div className="bg-black rounded-lg p-2">
              <Wallet className="h-5 w-auto text-white" />
            </div>
            <span className="text-[15px] font-medium">FlowPay</span>
          </a>
        </div>

        <div className="hidden md:absolute inset-x-0 md:flex justify-center bg-muted px-6 py-3 w-fit m-auto rounded-lg">
          <nav className="flex items-center gap-10">
            <a href="#" className="text-[15px] font-medium">
              Home
            </a>
            <a href="#" className="text-[15px] font-medium">
              Features
            </a>
            <a href="#" className="text-[15px] font-medium">
              About Us
            </a>
            <a href="#" className="text-[15px] font-medium">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-8 ml-auto">
          <span className="hidden md:inline-flex text-[15px] font-medium cursor-pointer">
            Log in
          </span>
          <Button className="hidden md:inline-flex bg-[#FF4444] hover:bg-[#FF4444]/90 text-[15px] font-medium rounded-lg px-5 py-2.5 h-auto">
            Sign Up <ArrowRight className="ml-2 h-4 w-4" />
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
                  Home
                </a>
                <a href="#" className="text-[15px] font-medium">
                  Features
                </a>
                <a href="#" className="text-[15px] font-medium">
                  About Us
                </a>
                <a href="#" className="text-[15px] font-medium">
                  Contact
                </a>
                <Button className="bg-[#FF4444] hover:bg-[#FF4444]/90 text-[15px] font-medium rounded-lg w-full">
                  Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-2 mb-8 bg-white px-2 py-1 rounded-full shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <Avatar key={i} className="border-2 border-white w-8 h-8">
                  <AvatarImage
                    className="bg-muted"
                    src={`https://robohash.org/${i + 1}`}
                  />
                  <AvatarFallback>U{i + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              Trusted By 21million users
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Revolutionize the Way You Manage Money
          </motion.h1>

          <motion.p
            className="text-lg text-foreground/80 font-semibold max-w-sm mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Seamlessly send, save, and grow your funds—all in one secure
            platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button className="bg-[#FF4444] hover:bg-[#FF4444]/90 text-base font-medium rounded-md px-8 py-6">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 relative w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative w-[280px] md:w-[320px] mx-auto">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/010/313/843/small_2x/tablet-touch-hand-gesture-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png"
                alt="FlowPay"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-background from-20% "></div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
