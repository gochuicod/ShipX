import SmartNavLink from "../ui/SmartNavLink";
import { Button } from "../../../styles/button";
import { cn } from "../../../lib/util";

export default function AppButton({
  children, // Use 'children' instead of 'text'/'icon' for maximum flexibility
  to, // Optional: If present, this becomes a Link
  className,
  variant = "primary", // Default styling
  ...props // Captures everything else: onClick, type="submit", disabled, etc.
}) {
  // Case 1: It is a Link (because 'to' exists)
  if (to) {
    return (
      <Button asChild variant={variant} className={cn("gap-2")} {...props}>
        <SmartNavLink to={to} className={cn(className)}>
          {children}
        </SmartNavLink>
      </Button>
    );
  }

  // Case 2: It is a Standard Button (Form submit, generic click, etc.)
  return (
    <Button variant={variant} className={cn("gap-2", className)} {...props}>
      {children}
    </Button>
  );
}
