import { forwardRef } from "react";
import { cn } from "../../../lib/util";
import {
  inputVariants,
  labelVariants,
  inputGroupVariants,
} from "../../../styles/form-styles";

// --- Reusable Components ---

export const FormLabel = ({
  children,
  className,
  htmlFor,
  required,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(labelVariants(), className)}
      {...props}
    >
      {children}
      {required && (
        <span className="text-[#E7000B] font-bold text-[16px] leading-[19px]">
          *
        </span>
      )}
    </label>
  );
};

export const FormInput = forwardRef(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({ state: hasError ? "error" : "default" }),
          "h-[55px]", // Fixed height for standard inputs
          className,
        )}
        {...props}
      />
    );
  },
);
FormInput.displayName = "FormInput";

export const FormTextarea = forwardRef(
  ({ className, hasError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          inputVariants({
            state: hasError ? "error" : "default",
            resize: "none",
          }),
          "h-[122px]", // Fixed height for textareas
          className,
        )}
        {...props}
      />
    );
  },
);
FormTextarea.displayName = "FormTextarea";

export const InputGroup = ({ children, className }) => {
  return <div className={cn(inputGroupVariants(), className)}>{children}</div>;
};
