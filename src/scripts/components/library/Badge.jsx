import { themeGuide } from "../../../styles/themeGuide";
import { cn } from "../../../lib/util";

const Badge = ({ badge_text }) => {
  return (
    <span className={cn(themeGuide.badge)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="var(--badge-text)"
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
