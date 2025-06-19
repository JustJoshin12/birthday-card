"use client";

import { motion } from "framer-motion";

export default function FinalScreen() {
  return (
    <div className="relative flex min-h-full w-full flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100 px-4 py-8 text-center space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-violet-700"
      >
        They say life's a rollercoaster, but you prefer rolling in grass instead🌱
      </motion.h2>
      <motion.video
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl max-h-[55vh] sm:max-h-[65vh] rounded-2xl sm:rounded-3xl shadow-xl object-cover"
        src="/assets/IMG_3775.MP4"
        autoPlay
        loop
        muted
        playsInline
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg sm:text-xl md:text-2xl text-rose-600 font-bold"
      >
        Happy Birthday, ShortStuff—here's to many more goofy adventures together! 🎉❤️
      </motion.p>
    </div>
  );
} 