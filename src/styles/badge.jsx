import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

const badgeVariants = cva(
  [
    // Base Layout
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    // Vertical alignment fixes for icons/dots
    "align-middle gap-1.5",
  ].join(" "),
  {
    variants: {
      variant: {
        // 1. Solid Pink "NEW" - Top
        new: "border-transparent bg-(--badge-pink) rounded text-white shadow-sm w-fit",

        // 2. Light Purple Badge
        secondary:
          "border-transparent bg-(--badge-gray-2) text-(--badge-text-dark) rounded w-fit",

        // 3. Soft Pink Toolkit Badge
        toolkit:
          "border-transparent bg-(--badge-gray) text-(--badge-pink) font-semibold text-md w-fit",

        // 4. International Express (Standard/Default - Solid Dark Blue)
        default:
          "border-transparent bg-(--badge-purple) text-white font-semibold text-md w-fit",

        // 5. Outline "NEW" - Bottom
        outline:
          "border-transparent bg-(--badge-gray-light) rounded text-(--badge-text-purple-light) w-fit",

        // Destructive (Standard error state)
        destructive: "border-transparent bg-red-500 text-white shadow-sm w-fit",

        // Affiliate Amilo
        affiliate:
          "border-transparent bg-(--badge-light-purple) text-(--badge-text-gray) font-light rounded w-fit",

        // Affiliate Orange
        affiliateOrange:
          "border-transparent bg-(--badge-orange) text-(--badge-text-gray) font-light rounded w-fit",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        default: "px-4 py-1 text-base",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Badge({ className, variant, size, children, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      {variant === "toolkit" && (
        <span className="h-2 w-2 rounded-full bg-(--badge-pink) mr-1" />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
