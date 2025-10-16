import { useState, useRef, useEffect } from "react";

export default function TooltipCard({
  image,
  country_name,
  description,
  contact_number,
  email,
  hidden,
}) {
  const [open, setOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const tooltipRef = useRef(null);
  const cardRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Detect touch device
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Close when clicking outside (for touch)
  useEffect(() => {
    if (!isTouch) return;
    const handleClickOutside = (e) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(e.target) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTouch]);

  // Hover logic (desktop)
  const handleMouseEnter = () => {
    if (!isTouch) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      hoverTimeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 200); // small delay to prevent flicker
    }
  };

  // Click logic (touch)
  const handleClick = () => {
    if (isTouch) setOpen((prev) => !prev);
  };

  return (
    <div
      className="group cursor-pointer flex flex-row md:w-full w-fit md:rounded-[2vw] rounded-[3vw] 
                 md:pl-[0.8vw] pl-[3vw] md:pr-[2vw] pr-[3vw] md:py-[0.7vw] py-[1.5vw] 
                 items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] 
                 hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] 
                 transition-shadow duration-1000 ease-in-out
                 relative"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        loading="lazy"
        className="md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw] rounded-full"
        src={image}
      />
      <span className="text-[#1A1A1A] font-semibold md:text-[0.8vw] text-[2.3vw] md:pl-[1vw] pl-[3vw]">
        {country_name}
      </span>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          absolute md:left-full left-[-2.5vw] md:top-1/2 top-0 ml-[1vw] -translate-y-1/2
          flex flex-col gap-y-[0.5vw] 
          bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-20
          md:w-[13vw] w-[25vw]
          transition-opacity duration-1000
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
          md:group-hover:opacity-100 md:group-hover:visible
          ${hidden ? "hidden" : "block"}
        `}
      >
        <img
          loading="lazy"
          className="md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw] rounded-full"
          src={image}
        />
        <span className="text-[#19191D] md:text-[0.8vw] text-[2.3vw] font-bold">
          {country_name}
        </span>
        {description}
        <a
          href={`tel:${contact_number}`}
          className="text-[#757577] md:text-[0.7vw] text-[2vw] pt-[1.5vw]"
        >
          {contact_number}
        </a>
        <a
          href={`mailto:${email}`}
          className="text-[#757577] md:text-[0.7vw] text-[2vw]"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
