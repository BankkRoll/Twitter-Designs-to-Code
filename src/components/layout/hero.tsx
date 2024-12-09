import { Check, Code, Laptop, Monitor, Moon, Sun } from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      defaultIcon: <Laptop className="w-6 h-6" />,
      hoverIcon: <Monitor className="w-6 h-6" />,
      title: "Fully Responsive",
    },
    {
      defaultIcon: <Moon className="w-6 h-6" />,
      hoverIcon: <Sun className="w-6 h-6" />,
      title: "Light & Dark Mode",
    },
    {
      defaultIcon: <Code className="w-6 h-6" />,
      hoverIcon: <Check className="w-6 h-6" />,
      title: "Easy Installation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="px-4 py-32 text-center relative overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mx-auto max-w-2xl mb-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap items-center justify-center gap-2 text-center"
      >
        Designs from
        <div className="inline-flex fill-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300.251"
            className="w-[1em] h-[1em] fill-inherit"
            aria-label="Logo"
          >
            <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
          </svg>
        </div>
        Brought to Life
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mx-auto max-w-2xl mb-10 text-md sm:text-xl text-foreground/60"
      >
        Explore a collection of designs I have found on X/Twitter and
        transformed into fully responsive reusable code examples. Each design is
        linked to its original creator, and the full project is open source on
        GitHub.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-wrap justify-center items-center gap-4 mb-10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="flex items-center"
          >
            <Badge
              variant="outline"
              className="flex items-center gap-2 p-2 relative"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                  opacity: hoveredFeature === index ? 0 : 1,
                  scale: hoveredFeature === index ? 0.8 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {feature.defaultIcon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredFeature === index ? 1 : 0,
                  scale: hoveredFeature === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {feature.hoverIcon}
              </motion.div>
              <span className="ml-8">{feature.title}</span>
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center items-center gap-4"
      >
        <a
          href="https://x.com/bankkroll_eth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="icon" className="shadow-lg fill-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300.251"
              className="w-[2em] h-[2em] fill-inherit"
              aria-label="X/Twitter Logo"
            >
              <path
                fill="currentColor"
                d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
              />
            </svg>
          </Button>
        </a>
        <a
          href="https://github.com/BankkRoll/tweet-to-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="icon" className="shadow-lg fill-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="w-[2em] h-[2em] fill-inherit"
              aria-label="GitHub Logo"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
              />
            </svg>
          </Button>
        </a>
      </motion.div>
    </motion.section>
  );
}
