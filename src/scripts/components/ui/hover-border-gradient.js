"use client";;
import React, { useState, useEffect } from "react";

import { motion } from "motion/react";
import { cn } from "../../utils";

export default function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = currentDirection => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(70% 140% at 50% 0%, #FF00E5 0%, rgba(255,0,229,0) 100%)",
    LEFT: "radial-gradient(60% 120% at 0% 50%, #4F378A 0%, rgba(79,55,138,0) 100%)",
    BOTTOM: "radial-gradient(70% 140% at 50% 100%, #FF00E5 0%, rgba(255,0,229,0) 100%)",
    RIGHT: "radial-gradient(60% 120% at 100% 50%, #4F378A 0%, rgba(79,55,138,0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={(event) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full content-center cursor-pointer bg-gradient-to-r from-[#4F378A] to-[#FF00E5] transition duration-1000 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible md:p-[0.15vw] p-[0.5vw] decoration-clone w-fit",
        containerClassName
      )}
      {...props}>
      <div
        className={cn("w-auto text-white z-10 bg-black md:px-[1.5vw] px-[3vw] md:py-[0.5vw] py-[1vw] rounded-[inherit]", className)}>
        {children}
      </div>
      <motion.div
        className={cn("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]")}
        style={{
          filter: "blur(0.5vw)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }} />
      <div className="bg-black absolute z-1 flex-none inset-[1.5vw] rounded-[100px]" />
    </Tag>
  );
}
