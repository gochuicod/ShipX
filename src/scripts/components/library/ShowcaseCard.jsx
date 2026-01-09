import { cn } from "../../../lib/util";
import HighlightedHeading from "./HighlightedHeading";
import LogisticsCard from "./LogisticsCard";

export default function ShowcaseCard({
  gradient,
  image,
  imageAlt,
  headingText,
  highlights,
  capabilities,
  imageClassName,
}) {
  return (
    <div
      className={cn(
        "bg-linear-to-br rounded-2xl p-6 flex flex-col md:flex-row items-center justify-start lg:w-fit md:w-full gap-4 border border-white/50 shadow-sm",
        gradient,
      )}
    >
      {/* Left: Visuals & Heading */}
      <div className="flex flex-col items-center text-center max-w-[351px] w-[351px] h-auto">
        <img
          src={image}
          alt={imageAlt}
          className={cn(
            "w-full h-full mb-6 drop-shadow-xl rounded-3xl md:px-0 px-3",
            imageClassName,
          )}
        />
        <HighlightedHeading
          text={headingText}
          highlight={highlights}
          className="font-bold text-[#4D525C] md:text-[16px] text-[14px]"
        />
      </div>

      {/* Right: Capability List */}
      <div className="flex flex-col gap-1 w-full max-w-[320px]">
        {capabilities.map((item, index) => (
          <LogisticsCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
