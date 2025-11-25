const Badge = ({ badge_text, text_color, bg_color, className = "" }) => {
  return (
    <span
      className={`
                flex flex-row
                md:gap-x-[0.5vw] gap-x-[1.5vw]
                items-center
                text-[${text_color}] font-semibold
                bg-[${bg_color}]
                md:rounded-[0.5vw] rounded-[1.5vw]
                md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]
                select-none
                w-fit
                ${className}
            `}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FF00E5"
        viewBox="0 0 24 24"
        strokeWidth={0}
        stroke="currentColor"
        className="md:size-[0.5vw] size-[1.5vw]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>
      {badge_text}
    </span>
  );
};

export default Badge;
