"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function DeepMessage({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative max-h-[80vh] w-[92vw] sm:w-[85vw] md:w-[70vw] lg:w-[60vw] max-w-3xl overflow-y-auto rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-lg ring-2 ring-transparent bg-clip-padding"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
            }}
          >
            <button
              aria-label="Close message"
              className="absolute right-4 top-4 text-2xl hover:rotate-90 transition-transform"
              onClick={onClose}
            >
              ✕
            </button>
            <h2 className="mb-6 text-3xl font-bold text-rose-600 text-center">
              "Contigo, mi corazón baila"
            </h2>
            <p className="whitespace-pre-wrap leading-relaxed text-lg md:text-xl text-gray-700">
              Happy 22nd Birthday, Babe! 🎂 Mamas,no one
              lights up a room like you do. You care so deeply for everyone
              around you, always putting others first and making people feel
              seen. Your thoughtfulness, your silly sense of humor, and your
              huge heart make you truly one of a kind. I'm so grateful to know
              you and to watch you make the world a better, brighter place just
              by being yourself. Here's to you, Lupe—never stop being the
              amazing person you are. Happy birthday ShortStuff!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
