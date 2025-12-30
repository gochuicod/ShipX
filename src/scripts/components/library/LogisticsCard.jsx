import { cn } from "../../../lib/util";

export default function LogisticsCard({
  icon: Icon,
  title,
  description,
  className,
}) {
  const isUrl = typeof Icon === "string";

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 w-full rounded-lg",
        "hover:bg-white/40 transition-all duration-200 group cursor-default",
        className,
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 shrink-0">
        {isUrl ? (
          <img
            src={Icon}
            alt=""
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <Icon className="w-10 h-10 text-[#4F378A] group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-sm font-semibold text-[#101828] leading-tight">
          {title}
        </h4>
        <p className="text-xs font-normal text-[#4A5565] mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
