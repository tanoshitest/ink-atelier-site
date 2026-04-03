import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("douces-preloader");
    if (seen) {
      setVisible(false);
      onComplete();
      return;
    }
    const timer = setTimeout(() => {
      sessionStorage.setItem("douces-preloader", "1");
      setVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <svg width="280" height="60" viewBox="0 0 280 60" className="overflow-visible">
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              className="preloader-text"
              fill="none"
              stroke="hsl(30, 14%, 95%)"
              strokeWidth="1"
              fontSize="48"
              fontFamily="Playfair Display, serif"
              letterSpacing="8"
            >
              DOUCES
            </text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
