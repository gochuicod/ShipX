import { cn } from "../../../lib/util";

export default function FeatureItem({ icon: Icon, text, className }) {
  const isUrl = typeof Icon === "string";

  return (
    <div
      className={cn(
        "flex flex-row items-center gap-4 p-4 bg-[#F5F3FF] rounded-lg min-h-16 md:max-w-[288px] max-w-full",
        className,
      )}
    >
      <div className="flex items-center justify-center w-11 h-11 shrink-0 bg-linear-to-br from-[#F3E8FF] to-[#FAE8FF] rounded-lg">
        {isUrl ? (
          <img src={Icon} alt="" className="w-10 h-10 object-contain" />
        ) : (
          <Icon className="w-10 h-10 text-[#4F378A]" />
        )}
      </div>
      <p className="text-sm font-normal text-[#4D525C] leading-tight opacity-90">
        {text}
      </p>
    </div>
  );
}
