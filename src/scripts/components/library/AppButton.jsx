import SmartNavLink from "../ui/SmartNavLink";
import { Button } from "../../../styles/button";
import { cn } from "../../../lib/util";

const appButtonStyles = {
  smartNavLink: "flex items-center justify-center gap-2 px-4 py-[10px]",
};

export default function AppButton({
  size = "medium",
  style = "primary",
  color = "",
  status = "default",
  text = "",
  withLeftIcon = false,
  withRightIcon = false,
  leftIcon,
  rightIcon,
  to,
  className,
  ...rest
}) {
  const ButtonContent = () => (
    <>
      {withLeftIcon && leftIcon && <span className="shrink-0">{leftIcon}</span>}

      <span>{text}</span>

      {withRightIcon && rightIcon && (
        <span className="shrink-0">{rightIcon}</span>
      )}
    </>
  );

  if (to) {
    return (
      // We pass size and variant to the Button wrapper
      <Button
        asChild
        variant={style}
        size={size}
        className={className}
        {...rest}
      >
        <SmartNavLink
          to={to}
          // We add flex, items-center and gap-2 here to align icons and text
          className={cn(appButtonStyles.smartNavLink)}
        >
          <ButtonContent />
        </SmartNavLink>
      </Button>
    );
  }

  return (
    <Button
      variant={style}
      size={size}
      className={cn(appButtonStyles.smartNavLink, className)}
      {...rest}
    >
      <ButtonContent />
    </Button>
  );
}
