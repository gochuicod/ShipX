import { useState } from "react";

export default function HierarchyPill({ item }) {
  const [copied, setCopied] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleCopyDescription = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop propagation so we don't trigger wrapper clicks

    const textToCopy = item.description;

    // Robust Copy Logic inside the Pill
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.warn("Clipboard API failed in Pill, using fallback", err);
          fallbackCopy(textToCopy);
        });
    } else {
      fallbackCopy(textToCopy);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fallback copy failed", err);
    }
    document.body.removeChild(textArea);
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsActive(false);
    }
  };

  return (
    <div
      className="relative group outline-none"
      tabIndex={0}
      onBlur={handleBlur}
    >
      {/* The Trigger Pill */}
      <div
        onClick={() => setIsActive(!isActive)}
        className={`
          flex flex-row
          md:gap-x-[0.5vw] gap-x-[1.5vw]
          items-center
          md:rounded-[0.5vw] rounded-[1vw]
          md:text-[0.8vw] text-[2.3vw]
          font-medium
          bg-[#EFECF6]
          ${
            isActive
              ? "bg-[#E5D9F2] ring-1 ring-[#CC00B7]"
              : "bg-[#EFECF6] hover:bg-[#E5D9F2]"
          }
          text-[#CC00B7]
          md:py-[0.25vw] py-[0.5vw]
          md:px-[0.5vw] px-[2vw]
          cursor-help
          transition-colors hover:bg-[#E5D9F2]
        `}
      >
        {item.code}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#CC00B7"
          className="
            md:w-[1vw] w-[2.5vw]
            md:h-[1vw] h-[2.5vw]
            md:stroke-[0.15vw] stroke-[0.5vw]
          "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>

      {/* The Hoverable Tooltip */}
      <div
        className={`
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          md:w-[15vw] w-[35vw]
          md:p-[0.5vw] p-[1.5vw]
          bg-[#F8F7FF]
          md:rounded-[0.7vw] rounded-[2vw]
          opacity-0 invisible 
          group-hover:opacity-100 group-hover:visible 
          transition-all duration-200 
          z-50
          pointer-events-none group-hover:pointer-events-auto
          border border-[#CC00B7]
          ${
            isActive
              ? "opacity-100 visible pointer-events-auto translate-y-0"
              : "opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto translate-y-1 group-hover:translate-y-0"
          }
        `}
      >
        <div
          className="
            text-[#4A5565]
            md:text-[0.8vw] text-[2.3vw]
            md:leading-[1vw] leading-[2.2vw]
            md:mb-[0.5vw] mb-[2vw]
          "
        >
          {item.description}
        </div>

        <button
          onClick={handleCopyDescription}
          className="
            flex items-center
            md:text-[0.8vw] text-[2.3vw]
            text-white
            font-normal
            bg-[#CC00B7] hover:bg-[#CC00B7]/90
            md:py-[0.25vw] py-[0.5vw]
            md:px-[1vw] px-[2vw]
            md:rounded-[0.5vw] rounded-[1vw]
            transition-colors
            w-full justify-center
            cursor-pointer
          "
        >
          {copied ? (
            <span className="font-bold">Copied</span>
          ) : (
            <span>Copy Description</span>
          )}
        </button>

        {/* Little Arrow pointing down */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#CC00B7]" />
      </div>
    </div>
  );
}
