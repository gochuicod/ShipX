import SmartNavLink from "../ui/SmartNavLink";
import { Button } from "../../../styles/button";
import { cn } from "../../../lib/util";
import { isValidElement } from "react";

const appButtonStyles = {
  smartNavLink: "flex items-center justify-center gap-2 px-4 py-[8px]",
  // The container needs a defined size to act as a frame for the "cover" image
  iconWrapper:
    "flex items-center justify-center shrink-0 overflow-hidden w-5 h-5",
  // object-cover ensures the image (like a flag) fills the 20x20px area completely
  icon: "w-full h-full object-cover",
};

export default function AppButton({
  size = "medium",
  style = "primary",
  text = "",
  withLeftIcon = false,
  withRightIcon = false,
  leftIcon,
  rightIcon,
  iconRounded = false,
  to,
  className,
  ...rest
}) {
  const renderIcon = (Icon) => {
    if (!Icon) return null;

    const isUrl = typeof Icon === "string";
    const roundingClass = iconRounded ? "rounded-full" : "rounded-lg";

    return (
      <div className={cn(appButtonStyles.iconWrapper, roundingClass)}>
        {isUrl ? (
          <img src={Icon} alt="" className={appButtonStyles.icon} />
        ) : (
          <span className="flex items-center justify-center w-full h-full">
            {isValidElement(Icon) ? (
              Icon
            ) : (
              <Icon className="size-full" /> // 'size-full' fills the 20x20 wrapper
            )}
          </span>
        )}
      </div>
    );
  };

  const ButtonContent = () => (
    <>
      {withLeftIcon && renderIcon(leftIcon)}
      <span className="leading-tight">{text}</span>
      {withRightIcon && renderIcon(rightIcon)}
    </>
  );

  // ... (to ? SmartNavLink : Button) logic remains the same
  if (to) {
    return (
      <Button
        asChild
        variant={style}
        size={size}
        className={className}
        {...rest}
      >
        <SmartNavLink to={to} className={cn(appButtonStyles.smartNavLink)}>
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
