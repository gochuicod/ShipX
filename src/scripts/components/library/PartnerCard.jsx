import { cn } from "../../../lib/util";

export default function PartnerCard({
  logo,
  name,
  size = "default",
  className,
}) {
  const sizeClasses = {
    small: "h-8 w-full",
    default: "h-12 w-full",
    medium: "h-16 w-full",
    large: "h-24 w-full",
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
