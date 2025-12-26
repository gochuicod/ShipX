import { cn } from "../../../lib/util";
import { iconBoxVariants } from "../../../styles/icon-box";

function IconBox({
  className,
  variant,
  size,
  layout = "default",
  icon,
  title,
  value,
  children,
  ...props
}) {
  return (
    <div
      className={cn(iconBoxVariants({ variant, size, layout }), className)}
      {...props}
    >
      {/* Icon Section */}
      {icon && (
        <div
          className={cn(
            "flex items-center justify-center text-gray-900",
            layout === "default" ? "mb-4" : "shrink-0",
          )}
        >
          {icon}
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col gap-1">
        {title && (
          <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        )}
        {value && <p className="font-semibold text-[#4F378A]">{value}</p>}
        <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default IconBox;
