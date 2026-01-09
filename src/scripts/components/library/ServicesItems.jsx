import { cn } from "../../../lib/util";

export default function ServicesItems({
  icon,
  heading = "",
  description = "",
  variant = "list",
  isActive = false,
  className = "",
  ...rest
}) {
  // Styles strictly following Figma CSS
  const activeShadow =
    "shadow-[1px_1px_2px_rgba(20,0,0,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]";

  const inactiveShadow =
    "shadow-[1px_1px_2px_rgba(20,0,0,0.25),inset_-2px_-2px_4px_rgba(154,4,129,0.15)]";

  const baseListStyles =
    "flex flex-row items-center p-[8px_12px] gap-[12px] \
   w-fit \
   h-fit \
   rounded-[8px] transition-all duration-300 cursor-pointer";

  const renderIcon = () => {
    if (!icon) return null;

    // If icon is a string → treat as image src
    if (typeof icon === "string") {
      return (
        <img
          src={icon}
          alt={heading}
          className="w-full h-full object-contain"
          draggable={false}
        />
      );
    }

    // Otherwise → assume React node (SVG component)
    return icon;
  };

  // STAT VARIANT (The "60 million+" card)
  if (variant === "stat") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center",
          className,
        )}
        {...rest}
      >
        {/* Stat Icon Container: 135deg Gradient from Figma */}
        <div className="w-[80px] h-[80px] mb-6 bg-[linear-gradient(135deg,#F3E8FF_0%,#FAE8FF_100%)] rounded-[24px] flex items-center justify-center shrink-0">
          <div className="size-[40px] flex items-center justify-center">
            {renderIcon()}
          </div>
        </div>
        <h3 className="text-[40px] leading-tight font-normal text-[#4F378A] whitespace-pre-line mb-1">
          {heading}
        </h3>
        <p className="text-[18px] text-[#4F378A]/70 font-medium whitespace-pre-line">
          {description}
        </p>
      </div>
    );
  }

  // LIST VARIANT (The Service Items)
  return (
    <div
      className={cn(
        baseListStyles,
        isActive
          ? `bg-[#CC00B7] ${activeShadow} border-transparent`
          : `bg-white ${inactiveShadow} hover:outline hover:outline-1 hover:outline-[#CC00B7]/30`,
        className,
      )}
      {...rest}
    >
      {/* Icon Container: 40x40 with Gradient */}
      <div className="w-[40px] h-[40px] shrink-0 bg-[linear-gradient(135deg,#F3E8FF_0%,#FAE8FF_100%)] rounded-[8px] flex items-center justify-center overflow-hidden">
        <div className="relative w-[35px] h-[35px] flex items-center justify-center">
          {renderIcon()}
        </div>
      </div>

      {/* Text: Inter 16px/20px Bold */}
      <span
        className={cn(
          "font-['Inter'] font-normal text-[16px] leading-[20px] opacity-90",
          isActive ? "text-white" : "text-[#4F378A]",
        )}
      >
        {heading}
      </span>
    </div>
  );
}
