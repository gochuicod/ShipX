import { cn } from "../../../lib/util";

export default function StatItems({ icon, heading, description, className }) {
  return (
    <div
      className={cn(
        // Use 110px width for mobile (to fit 2-3 across) and 145px for desktop
        "flex flex-col items-center gap-4 w-[110px] md:w-[145px] shrink-0",
        className,
      )}
    >
      {/* Icon Container: #EDE9FE bg, 10px radius */}
      <div className="flex justify-center items-center w-10 h-10 bg-[#EDE9FE] rounded-[10px] shrink-0">
        <div className="w-5 h-5 flex items-center justify-center text-[#FF00E5]">
          {/* Lucide icons scale to this parent container */}
          {icon}
        </div>
      </div>

      {/* Text Container: Gap 3.99px per Figma */}
      <div className="flex flex-col items-center gap-[4px] w-full">
        {/* Heading: Responsive scaling based on your Figma extracts */}
        <h4
          className="
            font-['Inter'] font-bold text-[#4F378A] text-center
            text-[14px] leading-[18px] 
            md:text-[20px] md:leading-[24px]
        "
        >
          {heading}
        </h4>

        {/* Description: Always 14px per your specs */}
        <p
          className="
            font-['Inter'] font-normal text-[14px] leading-[16px] text-[#4D525C] 
            text-center whitespace-pre-line
        "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
