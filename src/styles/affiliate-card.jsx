import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

// 1. The Container Style
const cardVariants = cva(
  "relative w-full overflow-hidden rounded-[24px] shadow-sm transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,rgba(255,230,255,0.1)_0%,rgba(242,148,255,0.1)_100%),linear-gradient(135deg,rgba(255,230,255,0.1)_0%,rgba(242,148,255,0.1)_100%)] w-fit",
        amilo:
          "bg-[linear-gradient(135deg,rgba(255,200,100,0.15)_0%,rgba(255,140,60,0.15)_100%),linear-gradient(135deg,rgba(255,180,80,0.1)_0%,rgba(255,120,40,0.1)_100%)] w-fit",
      },
      padding: {
        default: "p-6 md:p-10",
        compact: "p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  },
);

// The Root Component
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

// 2. The Illustration Wrapper
// UPDATED: Added `w-full` and `justify-center` for mobile.
// On desktop, it reverts to `md:absolute` `md:right-6` etc.
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

// 3. The Content Section (Header + Text)
// UPDATED: Added `items-center` and `text-center` for mobile layout.
// Added `md:items-start` and `md:text-left` to maintain desktop layout.
function AffiliateCardContent({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative z-20 flex flex-col gap-4 items-center text-center md:items-start md:text-left max-w-full md:max-w-[65%]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// 4. Action/Footer Section (Buttons)
function AffiliateCardFooter({ className, children, ...props }) {
  return (
    <div
      className={cn("mt-8 flex flex-wrap items-center gap-3", className)}
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
