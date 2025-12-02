import { forwardRef } from "react";
import { STYLES } from "./styles";

const TextArea = forwardRef(
  ({ label, required, subtitle, height = "h-32", ...props }, ref) => (
    <div className="w-full">
      {label && (
        <label className={`${STYLES.label} flex gap-1`} htmlFor={props.id}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {subtitle && <p className="text-sm text-gray-500 mb-2">{subtitle}</p>}
      <textarea
        ref={ref}
        className={`
        ${STYLES.input} ${height} resize-none
        ${props.error ? STYLES.inputError : STYLES.inputDefault}
      `}
        {...props}
      />
    </div>
  ),
);

export default TextArea;
