// src/lib/component-config.ts
import { FlowpayHero } from "@/components/registry-examples/flowpay-hero";
import { HandwrittenHero } from "@/components/registry-examples/handwritten-hero";
import { SherlockHero } from "@/components/registry-examples/sherlock-hero";

export const codeExamples = [
  {
    id: 1,
    slug: "sherlock-hero",
    category: "Hero",
    title: "Sherlock Hero",
    description: "A hero section for your website.",
    component: SherlockHero,
    dependencies: ["framer-motion", "lucide-react"],
    inspiration: "https://x.com/aliszu/status/1863617130563846254",
    shoutout: "https://x.com/bankkroll_eth/status/1863996532904595862",
    registryCommands: {
      npm: `npx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/sherlock-hero.json"`,
      pnpm: `pnpm dlx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/sherlock-hero.json"`,
      yarn: `yarn add "https://tweet-to-code.vercel.app/r/ui/sherlock-hero.json"`,
      bun: `bunx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/sherlock-hero.json"`,
    },
    installCommands: {
      npm: `npm install framer-motion lucide-react`,
      pnpm: `pnpm add framer-motion lucide-react`,
      yarn: `yarn add framer-motion lucide-react`,
      bun: `bun add framer-motion lucide-react`,
    },
    shadcnCommands: {
      npm: `npx shadcn@latest add button sheet`,
      pnpm: `pnpm exec shadcn@latest add button sheet`,
      yarn: `yarn dlx shadcn@latest add button sheet`,
      bun: `bunx shadcn@latest add button sheet`,
    },
    code: '"use client";\n\nimport { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";\n\nimport { Button } from "@/components/ui/button";\nimport { Menu } from "lucide-react";\nimport { motion } from "framer-motion";\n\nexport function SherlockHero() {\n  return (\n    <div className="min-h-screen relative">\n      <header className="absolute right-0 left-0 top-2 z-50">\n        <nav>\n          <div className="bg-background/80 mx-auto max-w-lg px-4 rounded-lg border backdrop-blur-sm">\n            <div className="h-12 flex justify-between items-center md:justify-center md:gap-8">\n              <a href="#" className="text-base font-semibold">\n                Sherlock\n              </a>\n              <div className="hidden md:flex items-center space-x-4">\n                <a href="#" className="text-sm">\n                  Product\n                </a>\n                <a href="#" className="text-sm">\n                  Features\n                </a>\n                <a href="#" className="text-sm">\n                  Pricing\n                </a>\n                <a href="#" className="text-sm">\n                  About\n                </a>\n              </div>\n              <a href="#" className="hidden md:block text-sm">\n                Log in\n              </a>\n              <Sheet>\n                <SheetTrigger asChild>\n                  <Button variant="ghost" size="icon" className="md:hidden">\n                    <Menu className="h-5 w-5" />\n                    <span className="sr-only">Toggle menu</span>\n                  </Button>\n                </SheetTrigger>\n                <SheetContent side="right">\n                  <nav className="flex flex-col gap-4">\n                    <a href="#" className="text-sm">\n                      Product\n                    </a>\n                    <a href="#" className="text-sm">\n                      Features\n                    </a>\n                    <a href="#" className="text-sm">\n                      Pricing\n                    </a>\n                    <a href="#" className="text-sm">\n                      About\n                    </a>\n                    <a href="#" className="text-sm">\n                      Log in\n                    </a>\n                  </nav>\n                </SheetContent>\n              </Sheet>\n            </div>\n          </div>\n        </nav>\n      </header>\n\n      <motion.section\n        className="px-4 pt-32 pb-16 text-center"\n        initial={{ opacity: 0, y: 20 }}\n        animate={{ opacity: 1, y: 0 }}\n        transition={{ duration: 0.6, delay: 0.7 }}\n      >\n        <div className="relative flex items-center justify-center w-[100px] h-[120px] m-auto">\n          <motion.div\n            initial={{ opacity: 0, scale: 0.8 }}\n            animate={{ opacity: 1, scale: 1 }}\n            transition={{ delay: 0.4, duration: 0.5 }}\n            className="border-background mx-auto absolute top-0 right-0 left-0 flex justify-center items-center border-2"\n          >\n            <img\n              src="https://placehold.co/20x20?text=S3&font=roboto"\n              alt="Sherlock Logo"\n              className="rounded-md w-[3rem] h-[3rem]"\n            />\n          </motion.div>\n\n          <motion.div\n            initial={{ opacity: 0, scale: 0.8 }}\n            animate={{ opacity: 1, scale: 1 }}\n            transition={{ delay: 0.2, duration: 0.5 }}\n            className="border-background mx-auto absolute right-0 left-0 top-2 flex justify-center items-center border-2"\n          >\n            <img\n              src="https://placehold.co/24x24?text=S3&font=roboto"\n              alt="Sherlock Logo"\n              className="rounded-md w-[4rem] h-[4rem]"\n            />\n          </motion.div>\n\n          <motion.div\n            initial={{ opacity: 0, scale: 0.8 }}\n            animate={{ opacity: 1, scale: 1 }}\n            transition={{ duration: 0.5 }}\n            className="border-background mx-auto absolute right-0 left-0 top-4 flex justify-center items-center border-2"\n          >\n            <img\n              src="https://placehold.co/28x28?text=S3&font=roboto"\n              alt="Sherlock Logo"\n              className="rounded-md w-[5rem] h-[5rem]"\n            />\n          </motion.div>\n        </div>\n\n        <motion.h1\n          className="mx-auto max-w-4xl mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"\n          initial={{ opacity: 0, y: 20 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ delay: 0.3, duration: 0.5 }}\n        >\n          The easiest way to keep everyone in loop\n        </motion.h1>\n\n        <motion.p\n          className="mx-auto max-w-2xl mb-10 text-base sm:text-lg md:text-xl text-gray-600"\n          initial={{ opacity: 0, y: 20 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ delay: 0.4, duration: 0.5 }}\n        >\n          Office ipsum you must be muted. At panel mint meat line blue\n          backwards. Intersection should right can\'t lift market fit don\'t\n          running.\n        </motion.p>\n\n        <motion.div\n          className="flex flex-col sm:flex-row justify-center items-center gap-4"\n          initial={{ opacity: 0, y: 20 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ delay: 0.5, duration: 0.5 }}\n        >\n          <Button\n            size="lg"\n            className="w-full sm:w-auto px-6 text-base rounded-xl shadow-lg"\n          >\n            Create Account\n            <div className="ml-2 space-x-1 hidden sm:inline-flex">\n              <span className="w-5 h-5 text-xs rounded-sm border opacity-70">\n                ⌘\n              </span>\n              <span className="w-5 h-5 text-xs rounded-sm border opacity-70">\n                K\n              </span>\n            </div>\n          </Button>\n          <Button\n            variant="outline"\n            size="lg"\n            className="w-full sm:w-auto text-base rounded-xl shadow-lg"\n          >\n            Learn more\n          </Button>\n        </motion.div>\n      </motion.section>\n\n      <motion.section\n        className="px-4 pb-16"\n        initial={{ opacity: 0, y: 20 }}\n        animate={{ opacity: 1, y: 0 }}\n        transition={{ delay: 0.6, duration: 0.5 }}\n      >\n        <p className="mb-8 text-center text-gray-500">\n          Trusted by specialist at\n        </p>\n        <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 justify-items-center items-center gap-8">\n          {[\n            "Bloomberg",\n            "TechCrunch",\n            "Forbes",\n            "Gizmodo",\n            "Wired",\n            "The New York Times",\n            "NBC",\n            "CNN",\n          ].map((company, index) => (\n            <motion.div\n              key={company}\n              initial={{ opacity: 0, y: 20 }}\n              animate={{ opacity: 1, y: 0 }}\n              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}\n            >\n              <img\n                src={`https://placehold.co/36x12?text=${\n                  company.split(" ")[0]\n                }&font=roboto`}\n                alt={company}\n                className="w-36 h-auto"\n              />\n            </motion.div>\n          ))}\n        </div>\n      </motion.section>\n\n      <motion.section\n        className="px-4 pb-16"\n        initial={{ opacity: 0, y: 20 }}\n        animate={{ opacity: 1, y: 0 }}\n        transition={{ delay: 0.8, duration: 0.5 }}\n      >\n        <div className="bg-muted mx-auto max-w-6xl overflow-hidden rounded-lg border">\n          <div className="bg-muted h-8 flex items-center px-4 space-x-2">\n            <div className="w-3 h-3 bg-red-500 rounded-full" />\n            <div className="w-3 h-3 bg-yellow-500 rounded-full" />\n            <div className="w-3 h-3 bg-green-500 rounded-full" />\n          </div>\n          <div>\n            <div className="aspect-[16/9] bg-card" />\n          </div>\n        </div>\n      </motion.section>\n    </div>\n  );\n}',
  },
  {
    id: 2,
    slug: "handwritten-hero",
    category: "Hero",
    title: "Handwritten Hero",
    description: "A hero section for your website.",
    component: HandwrittenHero,
    dependencies: ["framer-motion", "lucide-react"],
    inspiration: "https://x.com/JayDwivedi_/status/1863076027611963719",
    shoutout: "hhttps://x.com/bankkroll_eth/status/1864689255789846862",
    registryCommands: {
      npm: `npx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/handwritten-hero.json"`,
      pnpm: `pnpm dlx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/handwritten-hero.json"`,
      yarn: `yarn add "https://tweet-to-code.vercel.app/r/ui/handwritten-hero.json"`,
      bun: `bunx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/handwritten-hero.json"`,
    },
    installCommands: {
      npm: `npm install framer-motion lucide-react`,
      pnpm: `pnpm add framer-motion lucide-react`,
      yarn: `yarn add framer-motion lucide-react`,
      bun: `bun add framer-motion lucide-react`,
    },
    shadcnCommands: {
      npm: `npx shadcn@latest add button sheet`,
      pnpm: `pnpm exec shadcn@latest add button sheet`,
      yarn: `yarn dlx shadcn@latest add button sheet`,
      bun: `bunx shadcn@latest add button sheet`,
    },
    code: '"use client";\n\nimport { Menu, Sparkles, Star, Upload } from "lucide-react";\nimport { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";\n\nimport { Button } from "@/components/ui/button";\nimport { motion } from "framer-motion";\n\nexport function HandwrittenHero() {\n  return (\n    <div className="min-h-screen">\n      <header className="container mx-auto flex h-20 items-center justify-between px-4">\n        <a href="#" className="font-mono text-xl font-bold tracking-tighter">\n          LOGO\n        </a>\n        <nav className="absolute left-1/2 hidden -translate-x-1/2 transform space-x-12 md:flex">\n          <a href="#" className="text-[15px] font-medium">\n            Products\n          </a>\n          <a href="#" className="text-[15px] font-medium">\n            Testimonial\n          </a>\n          <a href="#" className="text-[15px] font-medium">\n            About Us\n          </a>\n          <a href="#" className="text-[15px] font-medium">\n            Resources\n          </a>\n        </nav>\n        <div className="flex items-center gap-2">\n          <Button\n            variant="outline"\n            className="rounded-full font-medium hidden md:inline-flex"\n          >\n            Download Now\n          </Button>\n          <Sheet>\n            <SheetTrigger asChild>\n              <Button variant="ghost" size="icon" className="md:hidden">\n                <Menu className="h-5 w-5" />\n                <span className="sr-only">Toggle menu</span>\n              </Button>\n            </SheetTrigger>\n            <SheetContent>\n              <nav className="flex flex-col space-y-4 mt-6">\n                <a href="#" className="text-[15px] font-medium">\n                  Products\n                </a>\n                <a href="#" className="text-[15px] font-medium">\n                  Testimonial\n                </a>\n                <a href="#" className="text-[15px] font-medium">\n                  About Us\n                </a>\n                <a href="#" className="text-[15px] font-medium">\n                  Resources\n                </a>\n                <Button\n                  variant="outline"\n                  className="rounded-full font-medium w-full"\n                >\n                  Download Now\n                </Button>\n              </nav>\n            </SheetContent>\n          </Sheet>\n        </div>\n      </header>\n\n      <main>\n        <section className="container py-12 md:py-24 text-center px-4">\n          <motion.h1\n            className="relative mx-auto max-w-3xl font-mono text-xl sm:text-4xl md:text-6xl font-medium tracking-tight"\n            initial={{ opacity: 0, y: 20 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ duration: 0.6 }}\n          >\n            Digitalize{" "}\n            <motion.span\n              className="relative inline-block bg-blue-500/20"\n              transition={{ delay: 0.3, duration: 0.6 }}\n            >\n              handwritten\n              <motion.div\n                className="absolute -left-2 -top-2 h-3 w-3 rounded-full bg-blue-500"\n                initial={{ scale: 0 }}\n                animate={{ scale: 1 }}\n                transition={{ delay: 0.6, duration: 0.3 }}\n              />\n              <motion.div\n                className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-blue-500"\n                initial={{ scale: 0 }}\n                animate={{ scale: 1 }}\n                transition={{ delay: 0.8, duration: 0.3 }}\n              />\n              <motion.div\n                className="absolute -left-1 top-0 bottom-0 w-1 bg-blue-500"\n                initial={{ scaleY: 0 }}\n                animate={{ scaleY: 1 }}\n                transition={{ delay: 0.9, duration: 0.3 }}\n              />\n              <motion.div\n                className="absolute -right-1 top-0 bottom-0 w-1 bg-blue-500"\n                initial={{ scaleY: 0 }}\n                animate={{ scaleY: 1 }}\n                transition={{ delay: 0.9, duration: 0.3 }}\n              />\n            </motion.span>{" "}\n            notes in seconds.\n          </motion.h1>\n\n          <motion.div\n            className="mx-auto mt-8 md:mt-16 flex flex-col sm:flex-row max-w-2xl items-center justify-center gap-4 rounded-xl bg-muted p-2"\n            initial={{ opacity: 0, y: 20 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ delay: 0.3, duration: 0.6 }}\n          >\n            <Button\n              size="sm"\n              variant="ghost"\n              className="gap-2 w-full sm:w-auto"\n            >\n              <Star className="h-4 w-4" />\n              Connect Notion\n            </Button>\n            <div className="hidden sm:block h-6 w-px bg-foreground" />\n            <Button\n              size="sm"\n              variant="ghost"\n              className="gap-2 w-full sm:w-auto"\n            >\n              <Upload className="h-4 w-4" />\n              Upload Notes\n            </Button>\n            <div className="hidden sm:block h-6 w-px bg-foreground" />\n            <Button\n              size="sm"\n              variant="ghost"\n              className="gap-2 w-full sm:w-auto"\n            >\n              <Sparkles className="h-4 w-4" />\n              Transcribe and Save\n            </Button>\n            <Button size="sm" className="rounded-lg w-full sm:w-auto">\n              Get Started\n            </Button>\n          </motion.div>\n        </section>\n\n        <motion.section\n          className="container relative pb-12 md:pb-24 px-4"\n          initial={{ opacity: 0 }}\n          animate={{ opacity: 1 }}\n          transition={{ delay: 0.6, duration: 0.6 }}\n        >\n          <div className="relative mx-auto max-w-5xl">\n            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-0">\n              <motion.div\n                className="bg-background border-2 rounded-[32px] w-full md:w-[35%] md:absolute md:left-0 md:top-12 text-center"\n                initial={{ y: 100, opacity: 0 }}\n                animate={{ y: 0, opacity: 1, rotate: [0, 0, -6] }}\n                transition={{ duration: 0.6 }}\n              >\n                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">\n                  <div className="text-xs font-medium text-amber-600">\n                    YOU ONLY NEED ONE APP\n                  </div>\n                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">\n                    Access anywhere, any device\n                  </h3>\n                  <div className="mt-6 flex justify-center">\n                    <img\n                      src="https://placehold.co/48x48?text=Access+anywhere&font=roboto"\n                      alt="Access anywhere illustration"\n                      className="h-48 w-48 object-contain"\n                    />\n                  </div>\n                </div>\n              </motion.div>\n\n              <motion.div\n                className="z-10 bg-background border-2 rounded-[32px] w-full md:w-[38%] md:absolute md:top-20 text-center"\n                initial={{ y: 100, opacity: 0 }}\n                animate={{ y: 0, opacity: 1 }}\n                transition={{ duration: 0.6, delay: 0.2 }}\n              >\n                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">\n                  <div className="text-xs font-medium text-amber-600">\n                    YOU ONLY NEED ONE APP\n                  </div>\n                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">\n                    Quick snap-and- save process\n                  </h3>\n                  <div className="mt-6 flex justify-center">\n                    <img\n                      src="https://placehold.co/48x48?text=Quick%20snap%20illustration&font=roboto"\n                      alt="Quick snap illustration"\n                      className="h-48 w-48 object-contain"\n                    />\n                  </div>\n                </div>\n              </motion.div>\n\n              <motion.div\n                className="bg-background border-2 rounded-[32px] w-full md:w-[35%] md:absolute md:right-0 md:top-12 text-center"\n                initial={{ y: 100, opacity: 0 }}\n                animate={{ y: 0, opacity: 1, rotate: [0, 0, 6] }}\n                transition={{ duration: 0.6, delay: 0.4 }}\n              >\n                <div className="rounded-[32px] p-8 shadow-[0_8px_0px_0px_rgba(0,0,0,1)] transition-transform">\n                  <div className="text-xs font-medium text-amber-600">\n                    YOU ONLY NEED ONE APP\n                  </div>\n                  <h3 className="px-6 mt-2 text-[28px] font-semibold leading-tight">\n                    Secure digital backup always\n                  </h3>\n                  <div className="mt-6 flex justify-center">\n                    <img\n                      src="https://placehold.co/48x48?text=Secure+Digital+Backup&font=roboto"\n                      alt="Secure backup illustration"\n                      className="h-48 w-48 object-contain"\n                    />\n                  </div>\n                </div>\n              </motion.div>\n            </div>\n          </div>\n        </motion.section>\n      </main>\n    </div>\n  );\n}',
  },
  {
    id: 3,
    slug: "flowpay-hero",
    category: "Hero",
    title: "Flowpay Hero",
    description: "A hero section for your website.",
    component: FlowpayHero,
    dependencies: ["framer-motion", "lucide-react"],
    inspiration: "https://x.com/zlashyyyy/status/1862414802968093139",
    shoutout: "https://x.com/bankkroll_eth/status/1866134202917531996",
    registryCommands: {
      npm: `npx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/flowpay-hero.json"`,
      pnpm: `pnpm dlx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/flowpay-hero.json"`,
      yarn: `yarn add "https://tweet-to-code.vercel.app/r/ui/flowpay-hero.json"`,
      bun: `bunx shadcn@latest add "https://tweet-to-code.vercel.app/r/ui/flowpay-hero.json"`,
    },
    installCommands: {
      npm: `npm install framer-motion lucide-react`,
      pnpm: `pnpm add framer-motion lucide-react`,
      yarn: `yarn add framer-motion lucide-react`,
      bun: `bun add framer-motion lucide-react`,
    },
    shadcnCommands: {
      npm: `npx shadcn@latest add button sheet avatar`,
      pnpm: `pnpm exec shadcn@latest add button sheet avatar`,
      yarn: `yarn dlx shadcn@latest add button sheet avatar`,
      bun: `bunx shadcn@latest add button sheet avatar`,
    },
    code: '"use client";\n\nimport { ArrowRight, Menu, Wallet } from "lucide-react";\nimport { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\nimport { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";\n\nimport { Button } from "@/components/ui/button";\nimport { motion } from "framer-motion";\n\nexport function FlowpayHero() {\n  return (\n    <div className="min-h-screen">\n      <header className="flex h-20 items-center px-8 relative">\n        <div className="flex flex-row items-center gap-3">\n          <a href="#" className="flex items-center gap-2 text-xl">\n            <div className="bg-black rounded-lg p-2">\n              <Wallet className="h-5 w-auto text-white" />\n            </div>\n            <span className="text-[15px] font-medium">FlowPay</span>\n          </a>\n        </div>\n\n        <div className="hidden md:absolute inset-x-0 md:flex justify-center bg-muted px-6 py-3 w-fit m-auto rounded-lg">\n          <nav className="flex items-center gap-10">\n            <a href="#" className="text-[15px] font-medium">\n              Home\n            </a>\n            <a href="#" className="text-[15px] font-medium">\n              Features\n            </a>\n            <a href="#" className="text-[15px] font-medium">\n              About Us\n            </a>\n            <a href="#" className="text-[15px] font-medium">\n              Contact\n            </a>\n          </nav>\n        </div>\n\n        <div className="flex items-center gap-8 ml-auto">\n          <span className="hidden md:inline-flex text-[15px] font-medium cursor-pointer">\n            Log in\n          </span>\n          <Button className="hidden md:inline-flex bg-[#FF4444] hover:bg-[#FF4444]/90 text-[15px] font-medium rounded-lg px-5 py-2.5 h-auto">\n            Sign Up <ArrowRight className="ml-2 h-4 w-4" />\n          </Button>\n          <Sheet>\n            <SheetTrigger asChild>\n              <Button variant="ghost" size="icon" className="md:hidden">\n                <Menu className="h-5 w-5" />\n                <span className="sr-only">Toggle menu</span>\n              </Button>\n            </SheetTrigger>\n            <SheetContent>\n              <nav className="flex flex-col space-y-4 mt-6">\n                <a href="#" className="text-[15px] font-medium">\n                  Home\n                </a>\n                <a href="#" className="text-[15px] font-medium">\n                  Features\n                </a>\n                <a href="#" className="text-[15px] font-medium">\n                  About Us\n                </a>\n                <a href="#" className="text-[15px] font-medium">\n                  Contact\n                </a>\n                <Button className="bg-[#FF4444] hover:bg-[#FF4444]/90 text-[15px] font-medium rounded-lg w-full">\n                  Sign Up <ArrowRight className="ml-2 h-4 w-4" />\n                </Button>\n              </nav>\n            </SheetContent>\n          </Sheet>\n        </div>\n      </header>\n\n      <main className="container mx-auto px-4 py-16 md:py-24">\n        <motion.div\n          className="flex flex-col items-center text-center"\n          initial={{ opacity: 0, y: 20 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.6 }}\n        >\n          <motion.div\n            className="flex items-center gap-2 mb-8 bg-white px-2 py-1 rounded-full shadow-sm"\n            initial={{ opacity: 0, y: 20 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ delay: 0.2, duration: 0.6 }}\n          >\n            <div className="flex -space-x-2">\n              {[...Array(4)].map((_, i) => (\n                <Avatar key={i} className="border-2 border-white w-8 h-8">\n                  <AvatarImage\n                    className="bg-muted"\n                    src={`https://robohash.org/${i + 1}`}\n                  />\n                  <AvatarFallback>U{i + 1}</AvatarFallback>\n                </Avatar>\n              ))}\n            </div>\n            <span className="text-sm font-medium text-gray-600">\n              Trusted By 21million users\n            </span>\n          </motion.div>\n\n          <motion.h1\n            className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl mb-6"\n            initial={{ opacity: 0, y: 20 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ delay: 0.3, duration: 0.6 }}\n          >\n            Revolutionize the Way You Manage Money\n          </motion.h1>\n\n          <motion.p\n            className="text-lg text-foreground/80 font-semibold max-w-sm mb-8 px-4"\n            initial={{ opacity: 0, y: 20 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ delay: 0.4, duration: 0.6 }}\n          >\n            Seamlessly send, save, and grow your funds—all in one secure\n            platform\n          </motion.p>\n\n          <motion.div\n            initial={{ opacity: 0, y: 20 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ delay: 0.5, duration: 0.6 }}\n          >\n            <Button className="bg-[#FF4444] hover:bg-[#FF4444]/90 text-base font-medium rounded-md px-8 py-6">\n              Get Started <ArrowRight className="ml-2 h-4 w-4" />\n            </Button>\n          </motion.div>\n\n          <motion.div\n            className="mt-16 relative w-full max-w-md mx-auto"\n            initial={{ opacity: 0, y: 40 }}\n            animate={{ opacity: 1, y: 0 }}\n            transition={{ delay: 0.6, duration: 0.8 }}\n          >\n            <div className="relative w-[280px] md:w-[320px] mx-auto">\n              <img\n                src="https://static.vecteezy.com/system/resources/thumbnails/010/313/843/small_2x/tablet-touch-hand-gesture-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png"\n                alt="FlowPay"\n              />\n            </div>\n\n            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-background from-20% "></div>\n          </motion.div>\n        </motion.div>\n      </main>\n    </div>\n  );\n}',
  },
];
