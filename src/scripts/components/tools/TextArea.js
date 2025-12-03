import { forwardRef } from "react";
import { STYLES } from "./styles";
// import ToolTipError from "./ToolTipError";

const TextArea = forwardRef(
  (
    {
      label,
      required,
      subtitle,
      height = "h-32",
      currentLength = 0,
      minLength = 0,
      ...props
    },
    ref,
  ) => (
    <div className="w-full">
      <div className="flex justify-between items-end md:mb-[0.5vw] mb-[1.5vw]">
        <div>
          {label && (
            <label
              className={`${STYLES.label} flex gap-1 md:text-[0.8vw] text-[2.5vw]`}
              htmlFor={props.id}
            >
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          {subtitle && (
            <p className="text-sm text-gray-500 md:text-[0.7vw] text-[2.2vw]">
              {subtitle}
            </p>
          )}
        </div>
        <span
          className={`md:text-[0.7vw] text-[2.2vw] font-medium ${
            currentLength < minLength ? "text-red-500" : "text-green-600"
          }`}
        >
          {currentLength}/{minLength}
        </span>
      </div>
      <div className="relative">
        <textarea
          ref={ref}
          className={`
          ${STYLES.input} ${height} resize-none
          ${props.error ? STYLES.inputError : STYLES.inputDefault}
        `}
          {...props}
        />
        {/* {props.isSubmitted && props.error && (
          <ToolTipError message={props.error.message} />
        )} */}
      </div>
    </div>
  ),
);

export default TextArea;
