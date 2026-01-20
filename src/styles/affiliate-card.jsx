import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

// 1. The Container Style
const cardVariants = cva(
  "relative flex flex-col items-start gap-8 w-full min-h-[460px] justify-between overflow-visible rounded-2xl md:rounded-xl shadow-sm transition-all md:mt-20 lg:mt-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/30 to-[oklch(0.8001_0.1751_322.55)]/30",
        amilo:
          "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/30 to-[oklch(0.7284_0.1708_59.45)]/30",
      },
      padding: {
        default: "p-10",
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

// 2. Illustration (Uses negative margin offset with overflow visible)
function AffiliateCardIllustration({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "-mt-32 md:absolute md:right-12 md:-top-30 md:mt-0 flex justify-center md:justify-end pointer-events-none w-auto h-auto overflow-visible",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// 3. Content Section
function AffiliateCardContent({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative z-20 flex flex-col gap-4 items-center md:items-start w-full text-center md:text-left",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// 4. Footer Section
function AffiliateCardFooter({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-row justify-center items-center md:justify-end md:items-end gap-4 w-full relative z-20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// 5. Header Wrapper (for Illustration and Logo)
function AffiliateCardHeaderWrapper({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center md:flex-row md:justify-between md:items-start w-full gap-4",
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
  AffiliateCardHeaderWrapper,
};
