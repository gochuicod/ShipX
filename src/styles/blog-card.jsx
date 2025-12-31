import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

const cardVariants = cva(
  "group flex md:flex-col flex-row h-full w-full md:rounded-2xl rounded-lg transition-all duration-300 hover:cursor-pointer hover:shadow-[0px_4px_25px_0px_#FF00E54D]",
  {
    variants: {
      variant: {
        default:
          "md:max-w-sm p-4 md:p-4 gap-4 md:gap-0 border-none bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24",
        section:
          "p-4 md:p-4 gap-4 md:gap-0 border-none bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24",
        fluid:
          "p-4 md:p-4 gap-4 md:gap-0 border-none bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const CardRoot = ({ className, variant, ...props }) => (
  <article
    className={cn(cardVariants({ variant }), className)}
    style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    {...props}
  />
);

// --- 2. Image Components ---
export const CardImageWrapper = ({ className, variant, ...props }) => (
  <div
    className={cn(
      variant === "section"
        ? "relative md:mb-4 md:w-full shrink-0 w-1/2 h-auto md:h-52"
        : "relative md:mb-4 md:w-full shrink-0 w-1/2 h-auto",
      className,
    )}
    {...props}
  />
);

export const CardImage = ({ className, variant, ...props }) => (
  <img
    className={cn(
      "w-full h-full object-cover md:rounded-2xl rounded-lg",
      className,
    )}
    loading="lazy"
    {...props}
  />
);

// --- 3. Badge (Specific to Blog Card) ---
const cardBadgeVariants = cva(
  "absolute top-4 right-4 text-[10px] md:text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wide shadow-sm z-10",
  {
    variants: {
      variant: {
        new: "bg-[#FF00E5] text-white", // Your specific pink
        default: "bg-gray-100 text-gray-800",
      },
    },
    defaultVariants: {
      variant: "new",
    },
  },
);

export const CardBadge = ({ className, variant, ...props }) => (
  <span className={cn(cardBadgeVariants({ variant }), className)} {...props} />
);

// --- 4. Content Wrappers ---
export const CardBody = ({ className, variant, ...props }) => (
  <div
    className={cn(
      variant === "section"
        ? "flex flex-col grow w-1/2 md:w-auto px-1 md:px-1 gap-2 md:gap-3"
        : "flex flex-col grow w-1/2 md:w-auto px-1 md:px-1 gap-2 md:gap-3",
      className,
    )}
    {...props}
  />
);

export const CardMetaRow = ({ className, ...props }) => (
  <div
    className={cn(
      "hidden md:flex items-center justify-between text-sm",
      className,
    )}
    {...props}
  />
);

// --- 5. Category Tag ---
const categoryVariants = cva(
  "px-3 py-1 rounded-lg text-[10px] md:text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-[#F8E3F5] text-[#99008A]", // Your specific purple/pink combo
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const CardCategory = ({ className, variant, ...props }) => (
  <span className={cn(categoryVariants({ variant }), className)} {...props} />
);

// --- 6. Typography ---
export const CardDate = ({ className, ...props }) => (
  <span
    className={cn(
      "text-gray-500 text-[10px] md:text-xs font-medium",
      className,
    )}
    {...props}
  />
);

export const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-sm md:text-lg font-bold text-[#121212] leading-tight group-hover:text-[#CC00B7] transition-colors line-clamp-4",
      className,
    )}
    {...props}
  />
);

export const CardExcerpt = ({ className, ...props }) => (
  <p
    className={cn(
      "hidden md:block text-gray-600 text-sm leading-relaxed line-clamp-3 grow",
      className,
    )}
    {...props}
  />
);

// --- 7. Footer & Actions ---
export const CardFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex items-center justify-between mt-4 pt-2 border-pink-100/50",
      className,
    )}
    {...props}
  />
);

export const CardReadMore = ({ className, ...props }) => (
  <span
    className={cn(
      "flex items-center text-(--badge-dark-purple) font-semibold text-sm hover:text-(--badge-dark-purple)/80 transition-colors",
      className,
    )}
    {...props}
  />
);

export const CardShareButton = ({ className, ...props }) => (
  <button
    className={cn(
      "text-(--badge-dark-purple) hover:bg-[#F8E3F5] p-2 rounded-full transition-colors",
      className,
    )}
    {...props}
  />
);
