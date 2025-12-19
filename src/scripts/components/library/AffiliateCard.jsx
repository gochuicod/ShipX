import {
  AffiliateCard as AffiliateCardRoot,
  AffiliateCardContent,
  AffiliateCardIllustration,
  AffiliateCardFooter,
} from "../../../styles/affiliate-card";
import { Badge } from "../../../styles/badge";
import AppButton from "./AppButton";
import { cn } from "../../../lib/util"; // Make sure to import cn

export default function AffiliateCard({
  // 1. Style Props
  variant = "default",
  padding,
  containerClassName = "p-1 md:p-10 h-full w-full",
  logo,
  illustration,
  heading,
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
      <AffiliateCardRoot variant={variant} padding={padding}>
        {illustration && (
          <AffiliateCardIllustration>
            <img
              src={illustration.src}
              alt={illustration.alt || "Illustration"}
              className={
                illustration.className ||
                "w-48 h-48 object-contain drop-shadow-xl"
              }
            />
          </AffiliateCardIllustration>
        )}

        <AffiliateCardContent>
          {logo && (
            <div className="mb-2">
              <img
                src={logo.src}
                alt={logo.alt || "Logo"}
                className={logo.className || "h-8 md:h-10"}
              />
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            {heading}
          </h2>

          {/* Subheading */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {subheading}
          </p>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="mt-2 space-y-2 flex flex-col items-center md:items-start">
              <p className="text-sm font-semibold text-slate-800">
                Specialties:
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {badges.map((badge, index) => (
                  <Badge key={index} variant={badgeVariant} size="default">
                    {badge.label}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </AffiliateCardContent>

        {/* Footer */}
        {actions && actions.length > 0 && (
          <AffiliateCardFooter className="justify-center md:justify-end gap-2">
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
