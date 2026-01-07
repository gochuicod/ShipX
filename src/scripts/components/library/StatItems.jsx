import { cn } from "../../../lib/util";
import Counter from "../ui/Counter";

export default function StatItems({
  icon,
  headingValue,
  headingSuffix = "",
  description,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 w-[110px] md:w-[145px] shrink-0",
        className,
      )}
    >
      {/* Icon */}
      <div className="flex justify-center items-center w-10 h-10 bg-[#EDE9FE] rounded-[10px] shrink-0">
        <div className="w-5 h-5 flex items-center justify-center text-[#FF00E5]">
          {icon}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1 w-full">
        <h4
          className="
            font-['Inter'] font-bold text-[#4F378A] text-center
            text-[14px] leading-[18px] 
            md:text-[20px] md:leading-6
          "
        >
          <Counter end={headingValue} suffix={headingSuffix} duration={2} />
        </h4>

        <p
          className="
            font-['Inter'] font-normal text-[14px] leading-4 text-[#4D525C] 
            text-center whitespace-pre-line
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
