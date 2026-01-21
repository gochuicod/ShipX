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
        "bg-linear-to-br",
        gradient,
        "w-full max-w-[878px] min-w-0 min-h-[225px]",
        "flex xl:flex",
        "md:flex-row flex-col",
        "gap-4",
        "py-4 px-6",
        "rounded-2xl",
      )}
    >
      {/* image and headline */}
      <div className={cn("flex flex-col gap-2 w-full")}>
        <img
          src={image}
          alt={imageAlt}
          className={cn("rounded-2xl", "max-h-56", "h-[110%]", "object-cover")}
        />
        <HighlightedHeading
          text={headingText}
          highlight={highlights}
          className="font-bold text-[#4D525C] md:text-[16px] text-[14px] text-center leading-5"
          disableNewlines
        />
      </div>
      {/* platform capabilities */}
      <div className="flex flex-col gap-1 w-full">
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
