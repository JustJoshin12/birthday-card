"use client";

import { motion } from "framer-motion";
import { useCallback, useMemo } from "react";

export default function LandingScreen({ onStart }) {
  function spacedPositions(count) {
    // Predefined pseudo-random offsets to keep server/client consistent
    const jitterTable = [-3, 2, -1, 4, -2, 1, 3, -4, 2, -3];
    return Array.from({ length: count }).map((_, i) => {
      const base = (i + 1) * (100 / (count + 1));
      const jitter = jitterTable[i % jitterTable.length];
      return base + jitter;
    });
  }

  const balloons = useMemo(() => {
    const positions = spacedPositions(7);
    return positions.map((pos, idx) => ({ left: `${pos}%`, delay: (idx % 5) * 1.2 }));
  }, []);

  const sparkles = useMemo(() => {
    const positions = spacedPositions(8);
    return positions.map((pos, idx) => ({ left: `${pos}%`, delay: (idx % 4) * 1.1 }));
  }, []);

  const poppers = useMemo(() => {
    const positions = spacedPositions(5);
    return positions.map((pos, idx) => ({ left: `${pos}%`, delay: (idx % 6) * 0.9 }));
  }, []);

  const hearts = useMemo(() => {
    const positions = spacedPositions(6);
    return positions.map((pos, idx) => ({ left: `${pos}%`, delay: (idx % 3) * 1.3 }));
  }, []);

  return (
    <div className="relative flex h-full flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-orange-100">
      {/* Floating balloons & big 22 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Number 22 background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-[12rem] md:text-[18rem] font-extrabold text-pink-200 select-none">
            22
          </span>
        </motion.div>

        {/* Balloons */}
        {balloons.map(({ left, delay }, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl md:text-5xl select-none"
            style={{ left }}
            initial={{ y: "100vh", opacity: 0.8 }}
            animate={{ y: "-20vh", opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay,
            }}
          >
            🎈
          </motion.span>
        ))}

        {/* Sparkles */}
        {sparkles.map(({ left, delay }, i) => (
          <motion.span
            key={"sparkle" + i}
            className="absolute text-xl md:text-2xl select-none"
            style={{ left }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay,
            }}
          >
            ✨
          </motion.span>
        ))}

        {/* Party poppers */}
        {poppers.map(({ left, delay }, i) => (
          <motion.span
            key={"popper" + i}
            className="absolute text-3xl md:text-4xl select-none"
            style={{ left }}
            initial={{ y: "100vh", opacity: 0.9, rotate: 0 }}
            animate={{ y: "-15vh", opacity: [0.9, 1, 0.9], rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay,
            }}
          >
            🎉
          </motion.span>
        ))}

        {/* Black hearts */}
        {hearts.map(({ left, delay }, i) => (
          <motion.span
            key={"heart" + i}
            className="absolute text-2xl md:text-3xl select-none"
            style={{ left }}
            initial={{ y: "100vh", opacity: 0.8, rotate: 0 }}
            animate={{ y: "-15vh", opacity: [0.8, 1, 0.8], rotate: 180 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay,
            }}
          >
            🖤
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="backdrop-blur-md bg-white/50 rounded-3xl p-10 text-center shadow-xl"
      >
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Happy Birthday, ShortStuff! 🎉🎂
        </h1>
        <p className="text-lg md:text-xl mb-6">
          You make every day feel special, but today is all about celebrating
          the amazing person you are. Thank you for filling my life with love,
          laughter, and endless joy. 💝
        </p>
        <button
          aria-label="Enter the birthday card"
          onClick={useCallback(async () => {
            const confetti = (await import("canvas-confetti")).default;
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
            // small delay to let confetti become visible before transition
            setTimeout(onStart, 400);
          }, [onStart])}
          className="rounded-full bg-gradient-to-r from-pink-400 to-rose-500 px-8 py-3 text-lg font-bold text-white shadow-lg hover:scale-105 transition-transform"
        >
          Let's go! ✨
        </button>
      </motion.div>
    </div>
  );
}
