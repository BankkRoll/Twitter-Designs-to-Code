# Before and After Comparison

Inspired by the https://x.com/aliszu/status/1863617130563846254

Inspiration:
![Inspiration](https://github.com/user-attachments/assets/75d27943-32b5-4400-9ae8-a437561e3dc0)

Outcome:
![Outcome](https://github.com/user-attachments/assets/7caace43-361a-4631-9f84-6f7c11ba6e32)

```tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <motion.nav
        className="fixed top-2 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="max-w-lg mx-auto px-4 bg-white/80 backdrop-blur-sm border rounded-lg"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-center items-center h-12 gap-8">
            <Link href="/" className="text-base font-semibold">
              Sherlock
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 text-sm"
              >
                Product
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 text-sm"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 text-sm"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 text-sm"
              >
                About
              </Link>
            </div>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm"
            >
              Log in
            </Link>
          </div>
        </motion.div>
      </motion.nav>
      <motion.section
        className="pt-32 pb-16 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="relative flex items-center justify-center w-[100px] h-[120px] m-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border border-white absolute top-0 left-0 right-0 mx-auto flex items-center justify-center"
          >
            <Image
              src="/placeholder.svg"
              alt="Sherlock Logo"
              width={60}
              height={80}
              className="rounded-md opacity-60"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border border-white absolute top-2 left-0 right-0 mx-auto flex items-center justify-center"
          >
            <Image
              src="/placeholder.svg"
              alt="Sherlock Logo"
              width={70}
              height={80}
              className="rounded-md opacity-80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border border-white  absolute top-4 left-0 right-0 mx-auto flex items-center justify-center"
          >
            <Image
              src="/placeholder.svg"
              alt="Sherlock Logo"
              width={80}
              height={80}
              className="rounded-md"
            />
          </motion.div>
        </div>

        <motion.h1
          className="text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          The easiest way to keep everyone in loop
        </motion.h1>

        <motion.p
          className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Office ipsum you must be muted. At panel mint meat line blue
          backwards. Intersection should right can't lift market fit don't
          running.
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button size="lg" className="text-base px-6 rounded-xl shadow-lg">
            Create Account
            <div className="ml-2 space-x-1">
              <span className="w-5 h-5 text-xs opacity-70 border rounded-sm p-1">
                ⌘
              </span>
              <span className="w-5 h-5 text-xs opacity-70 border rounded-sm p-1">
                K
              </span>
            </div>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base rounded-xl shadow-lg"
          >
            Learn more
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        className="pb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p className="text-center text-gray-500 mb-8">
          Trusted by specialist at
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
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
              <Image
                src="/placeholder.svg"
                alt={company}
                width={100}
                height={40}
                className="opacity-60 hover:opacity-100 transition-opacity"
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
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-lg overflow-hidden border">
          <div className="h-8 bg-gray-100 flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div>
            <div className="aspect-[16/9] bg-white" />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
```
