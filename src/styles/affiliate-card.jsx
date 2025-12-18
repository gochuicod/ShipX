import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

// 1. The Container Style
const cardVariants = cva(
  // ADDED: h-full
  "relative w-full flex flex-col h-full overflow-hidden rounded-[24px] shadow-sm transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/30 to-[oklch(0.8001_0.1751_322.55)]/30",
        amilo:
          "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/30 to-[oklch(0.7284_0.1708_59.45)]/30",
      },
      padding: {
        default: "p-8 md:p-20",
        compact: "p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  },
);

function AffiliateCard({ className, variant, padding, children, ...props }) {
  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      {...props}
    >
      {children}
    </div>
  );
}

// 2. Illustration (No changes needed, but ensure z-index is correct)
function AffiliateCardIllustration({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "mb-6 w-full flex justify-center md:absolute md:top-6 md:right-6 md:mb-0 md:w-1/3 md:justify-end z-10 pointer-events-none",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// 3. Content Section
// ADDED: flex-1 (This makes this section grow to fill empty space)
function AffiliateCardContent({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative z-20 flex flex-col gap-4 items-center text-center md:items-start md:text-left max-w-full flex-1 w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// 4. Footer Section
// ADDED: mt-auto (This is a safety double-check to force it to the bottom)
function AffiliateCardFooter({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "mt-auto pt-8 flex flex-wrap items-center gap-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  AffiliateCard,
  AffiliateCardIllustration,
  AffiliateCardContent,
  AffiliateCardFooter,
};
