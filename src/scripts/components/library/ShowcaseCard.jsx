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
        "bg-gradient-to-br rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/50 shadow-sm",
        gradient,
      )}
    >
      {/* Left: Visuals & Heading */}
      <div className="flex flex-col items-center text-center max-w-[340px]">
        <img
          src={image}
          alt={imageAlt}
          className={cn("w-36 h-auto mb-6 drop-shadow-xl", imageClassName)}
        />
        <HighlightedHeading
          text={headingText}
          highlight={highlights}
          className="text-[20px] font-bold leading-tight"
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
