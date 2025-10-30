import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

const MultiStepLoader = ({ loading = true, duration = 2000, loop = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const loadingStates = [
    { text: t("loading_states.0") },
    { text: t("loading_states.1") },
    { text: t("loading_states.2") },
    { text: t("loading_states.3") },
    { text: t("loading_states.4") },
    { text: t("loading_states.5") },
  ];

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setCurrentIndex((idx) => {
        const next = idx + 1;
        if (next >= loadingStates.length) {
          return loop ? 0 : idx; // if not looping, stay at last
        }
        return next;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [loading, loadingStates.length, duration, loop]);

  if (!loading) {
    return null;
  }

  return (
    <div
      className="multi-step-loader fixed inset-0 flex flex-col justify-center items-center bg-white z-50"
      style={{ pointerEvents: "none" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <p className="text-lg font-medium text-[#1A1A1A]">
            {loadingStates[currentIndex].text}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 h-1 w-48 bg-[#FFD6FA] overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-[#FF00E5]"
          style={{
            width: `${((currentIndex + 1) / loadingStates.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default MultiStepLoader;
