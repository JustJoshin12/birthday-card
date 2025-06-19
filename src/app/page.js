"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingScreen from "../components/LandingScreen";
import PhotoCarousel from "../components/PhotoCarousel";
import DeepMessage from "../components/DeepMessage";
import FinalScreen from "../components/FinalScreen";

export default function HomePage() {
  const [stage, setStage] = useState("landing"); // "landing" | "carousel" | "final"
  const [showMsg, setShowMsg] = useState(false);

  return (
    <main className="h-screen w-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {stage === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <LandingScreen onStart={() => setStage("carousel")} />
          </motion.div>
        )}

        {stage === "carousel" && (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            className="h-full"
          >
            <PhotoCarousel onMessage={() => setShowMsg(true)} />
            <DeepMessage
              open={showMsg}
              onClose={() => {
                setShowMsg(false);
                // Navigate to final screen after 2 seconds
                setTimeout(() => setStage("final"), 2000);
              }}
            />
          </motion.div>
        )}

        {stage === "final" && (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <FinalScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
