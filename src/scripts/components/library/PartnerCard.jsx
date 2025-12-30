import { cn } from "../../../lib/util";

export default function PartnerCard({
  logo,
  name,
  size = "default",
  className,
}) {
  const sizeClasses = {
    small: "h-8 w-20",
    default: "h-12 w-28",
    medium: "h-16 w-36",
    large: "h-24 w-48",
  };

  return (
    <div
      className={cn(
        "group flex items-center justify-center",
        sizeClasses[size],
        className,
      )}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
      />
    </div>
  );
}
