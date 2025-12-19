import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

// 1. The Container Style
const cardVariants = cva(
  "relative w-full flex flex-col h-full overflow-visible md:rounded-3xl rounded-sm shadow-sm transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/30 to-[oklch(0.8001_0.1751_322.55)]/30",
        amilo:
          "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/30 to-[oklch(0.7284_0.1708_59.45)]/30",
      },
      padding: {
        default: "p-4 md:p-10",
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
      {...props}
    >
      {children}
    </div>
  );
}

// 2. Illustration (Floats outside container with negative margin - top half floats out on both mobile and desktop)
function AffiliateCardIllustration({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 flex justify-center z-10 pointer-events-none md:left-auto md:w-1/3 md:right-6 md:translate-x-0",
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
        "relative z-20 flex flex-col gap-4 items-center text-center md:items-start md:text-left max-w-full flex-1 w-full pt-20 md:pt-0",
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
        "mt-auto md:pt-8 py-10 md:py-4 flex flex-wrap items-center gap-3",
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
