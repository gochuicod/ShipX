import {
  AffiliateCard as AffiliateCardRoot,
  AffiliateCardContent,
  AffiliateCardIllustration,
  AffiliateCardFooter,
  AffiliateCardHeaderWrapper,
} from "../../../styles/affiliate-card";
import { Badge } from "../../../styles/badge";
import AppButton from "./AppButton";
import HighlightedHeading from "./HighlightedHeading";
import { cn } from "../../../lib/util";

export default function AffiliateCard({
  // 1. Style Props
  variant = "default",
  padding,
  containerClassName = "w-full",
  logo,
  illustration,
  heading,
  headingHighlight,
  subheading,
  badges = [],
  badgeVariant = "affiliate",
  actions = [],
  className,
  style,
  ...props
}) {
  return (
    <div
      className={cn("flex flex-col", containerClassName, className)}
      style={style}
      {...props}
    >
      <AffiliateCardRoot
        variant={variant}
        padding={padding}
        className="flex flex-col relative"
      >
        <AffiliateCardHeaderWrapper>
          {illustration && (
            <AffiliateCardIllustration>
              <img
                src={illustration.src}
                alt={illustration.alt || "Illustration"}
                className={
                  illustration.className ||
                  "shrink-0 w-80 h-80 md:w-auto md:h-auto md:max-w-[240px] lg:max-w-[280px] object-contain"
                }
              />
            </AffiliateCardIllustration>
          )}

          {logo && (
            <div className="mb-2">
              <img
                src={logo.src}
                alt={logo.alt || "Logo"}
                className={logo.className || "h-10"}
              />
            </div>
          )}
        </AffiliateCardHeaderWrapper>

        <AffiliateCardContent>
          {/* Heading */}
          {headingHighlight ? (
            <HighlightedHeading
              text={heading}
              highlight={headingHighlight}
              className="text-xl font-bold leading-tight"
            />
          ) : (
            <h2 className="text-xl font-bold text-slate-900 leading-tight">
              {heading}
            </h2>
          )}

          {/* Subheading */}
          <p className="text-slate-600 text-base font-normal leading-relaxed">
            {subheading}
          </p>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-slate-900">
                Specialties:
              </p>
              <div className="flex flex-wrap md:justify-start justify-center gap-1">
                {badges.map((badge, index) => (
                  <div key={index} className="md:hidden">
                    <Badge variant={badgeVariant} size="sm" className="text-xs">
                      {badge.label}
                    </Badge>
                  </div>
                ))}
                {badges.map((badge, index) => (
                  <div key={index} className="hidden md:block">
                    <Badge
                      variant={badgeVariant}
                      size="sm"
                      className="px-4 py-2 text-sm"
                    >
                      {badge.label}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
        </AffiliateCardContent>

        {/* Footer */}
        {actions && actions.length > 0 && (
          <AffiliateCardFooter>
            {actions.map((action, index) => (
              <AppButton
                key={index}
                style={action.style || "primary"}
                text={action.text}
                onClick={action.onClick}
                className={cn(
                  action.className,
                  action.style === "primary" && "w-fit",
                )}
              />
            ))}
          </AffiliateCardFooter>
        )}
      </AffiliateCardRoot>
    </div>
  );
}
