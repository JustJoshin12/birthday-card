"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useInterval from "../utils/useInterval";
import { photoCards } from "../data/photoCards";

export default function PhotoCarousel({ onMessage }) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [showNote, setShowNote] = useState(false);

  // Autoplay every 3 seconds when playing
  useInterval(() => setIdx((i) => (i + 1) % photoCards.length), playing ? 3000 : null);

  const change = useCallback(
    (delta) => setIdx((i) => (i + delta + photoCards.length) % photoCards.length),
    []
  );

  return (
    <div className="relative flex h-full flex-col items-center bg-gradient-to-br from-purple-100 via-rose-50 to-pink-100 px-4">
      {/* Heading */}
      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-center">Our Memories Together</h2>
      <p className="mt-2 max-w-2xl text-center text-base md:text-lg text-gray-700">
        Swipe through a few of my favourite moments with you. Here&rsquo;s to many more adventures ahead! 💕
      </p>

      <p className="mt-1 text-xs md:text-sm text-gray-500 text-center italic">
        Hold or hover to see my note ✨
      </p>

      {/* Carousel viewport */}
      <div className="relative w-full max-w-4xl lg:max-w-5xl overflow-hidden mt-8">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={photoCards[idx].src}
            src={photoCards[idx].src}
            alt={photoCards[idx].alt}
            className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/5] md:aspect-[4/3] max-h-[90vh]"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Note overlay */}
        <motion.div
          whileHover={{ opacity: 1 }}
          animate={{ opacity: showNote ? 1 : 0 }}
          initial={{ opacity: 0 }}
          onTouchStart={() => setShowNote(true)}
          onTouchEnd={() => setShowNote(false)}
          onTouchCancel={() => setShowNote(false)}
          className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/40 text-white text-xl font-medium p-4 text-center select-none"
        >
          {photoCards[idx].note}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center gap-4">
        <button
          aria-label="Previous photo"
          className="hidden md:block text-3xl"
          onClick={() => change(-1)}
        >
          ❮
        </button>
        <button
          onClick={() => setPlaying((p) => !p)}
          className="rounded-full bg-white/80 px-6 py-2 shadow"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        >
          {playing ? "⏸ Pause" : "▶ Play"}
        </button>
        <button
          aria-label="Next photo"
          className="hidden md:block text-3xl"
          onClick={() => change(1)}
        >
          ❯
        </button>
      </div>

      {/* Message button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={onMessage}
          className="rounded-lg bg-gradient-to-r from-rose-400 to-pink-500 px-4 py-2 text-white"
        >
          Read My Message ❤️
        </button>
      </div>
    </div>
  );
} 