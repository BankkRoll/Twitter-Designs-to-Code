"use client";

import { ArrowRight, Menu, ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function FurecomHero() {
  return (
    <div className="relative min-h-screen">
      <header className="absolute border-b top-0 left-0 right-0 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left">Menu</SheetTitle>
                <nav className="flex flex-col space-y-4 mt-8">
                  <a href="#" className="text-lg hover:text-foreground/80">
                    Shop
                  </a>
                  <a href="#" className="text-lg hover:text-foreground/80">
                    Blog
                  </a>
                  <a href="#" className="text-lg hover:text-foreground/80">
                    Contact
                  </a>
                  <a href="#" className="text-lg hover:text-foreground/80">
                    About
                  </a>
                </nav>
                <div className="mt-8 space-y-4">
                  <Input className="rounded-full" placeholder="Search..." />
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon">
                      <User className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm hover:text-foreground/80">
                Shop
              </a>
              <a href="#" className="text-sm hover:text-foreground/80">
                Blog
              </a>
              <a href="#" className="text-sm hover:text-foreground/80">
                Contact
              </a>
              <a href="#" className="text-sm hover:text-foreground/80">
                About
              </a>
            </nav>

            <div className="flex items-center justify-center flex-grow md:flex-grow-0">
              <span className="text-xl">✢ Furecom</span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Input className="rounded-full w-40" placeholder="Search..." />
              <User className="h-4 w-4" />
              <ShoppingCart className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-8">
          <div className="my-12">
            <div className="flex justify-between">
              <div className="max-w-[38rem]">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
                  <p>Beautiful Furniture,</p>
                  <p>Built for Everyday Living</p>
                </h1>
              </div>
              <div>
                <div className="flex flex-col space-y-4">
                  <p className="max-w-xl text-foreground/80">
                    Create a space that reflects your personality with furniture
                    designed for everyday living. With timeless designs and
                    robust craftsmanship, our collection delivers both aesthetic
                    charm.
                  </p>
                  <Button className="self-end bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                    Buy Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-8 h-full"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/048/471/410/non_2x/modern-chair-and-coffee-table-in-minimalist-room-free-photo.jpeg"
                alt="Modern orange armchair"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full">
              <div className="space-y-8 text-center mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-5xl font-bold">230+</h3>
                  <p className="text-foreground/80 text-sm">
                    Your favorite Products
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-5xl font-bold">50K+</h3>
                  <p className="text-foreground/80 text-sm">
                    Our satisfied clients
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="h-[calc(100%-16rem)]"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/029/508/568/non_2x/comfortable-smart-single-chair-front-said-free-photo.jpg"
                  alt="Designer chair thumbnail"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
