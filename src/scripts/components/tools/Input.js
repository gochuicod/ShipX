import { forwardRef } from "react";
import { STYLES } from "./styles";

const Input = forwardRef(
  (
    { label, error, required, className = "", containerClass = "", ...props },
    ref,
  ) => (
    <div className={`w-full ${containerClass}`}>
      {label && (
        <label className={STYLES.label} htmlFor={props.id}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          className={`
          ${STYLES.input} 
          ${error ? STYLES.inputError : STYLES.inputDefault}
          ${className}
        `}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
        {/* {error && (
          <span
            role="alert"
            className="text-red-500 text-xs absolute -bottom-5 left-0"
          >
            {error.message}
          </span>
        )} */}
      </div>
    </div>
  ),
);

export default Input;
