"use client";

import ClientTweetCard from "../ui/client-tweet-card";
import { motion } from "framer-motion";

const tweetIds = [
  "1867943714259144900",
  "1867624405360054275",
  "1867261450873381115",
  "1866867214395035936",
  "1866576347478495451",
  "1866134202917531996",
  "1864689255789846862",
  "1863996532904595862",
];

export function BentoTweetGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container justify-center mx-auto p-4"
    >
      <h2 className="text-center text-3xl font-bold mb-8">Progress Tweets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
        {tweetIds.map((id) => (
          <motion.div
            key={id}
            variants={itemVariants}
            className="overflow-hidden"
          >
            <ClientTweetCard id={id} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
