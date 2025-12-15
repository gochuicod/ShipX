import SmartNavLink from "../ui/SmartNavLink";
import { button as MotionButton } from "motion/react-client";

export default function BookADemoButton({
  children,
  to = "/book-a-demo",
  className = "",
}) {
  return (
    <SmartNavLink
      to={to}
      className={`text-[#4F378A] font-semibold ${className}`}
    >
      <MotionButton
        type="button"
        className="p-px rounded-full relative overflow-hidden cursor-pointer"
        whileHover={{
          y: -5,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 10,
          },
        }}
      >
        {/* Gradient border */}
        <div className="absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-[19px]" />

        {/* Inner white area */}
        <div className="relative flex flex-row items-center gap-x-[1vw] md:px-[30px] px-[5vw] md:py-[6.5px] py-[1vw] bg-white rounded-[19px]">
          {children}
        </div>
      </MotionButton>
    </SmartNavLink>
  );
}
