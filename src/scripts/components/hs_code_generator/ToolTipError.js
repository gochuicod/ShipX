import { AlertCircle } from "lucide-react";

export default function TooltipError({ message }) {
  if (!message) return null;

  return (
    <div
      className="
        absolute
        left-0
        md:-top-[2vw] -top-[7vw]
        z-50
        animate-in fade-in slide-in-from-bottom-[1vw] duration-500
      "
    >
      <div
        className="
          relative
          flex items-center
          bg-red-500
          text-white
          md:text-[0.7vw] text-[2.2vw]
          font-medium
          md:py-[0.25vw] py-[1.5vw]
          md:px-[0.5vw] px-[2.5vw]
          md:rounded-[0.5vw] rounded-[2vw]
          gap-1.5
          whitespace-nowrap
        "
      >
        <AlertCircle
          className="
            md:w-[1vw] w-[3vw]
            md:h-[1vw] h-[3vw]
          "
        />
        {message}
        {/* The little arrow pointing down */}
        <div className="absolute top-full left-4 -translate-x-1/2 border-4 border-transparent border-t-red-500" />
      </div>
    </div>
  );
}