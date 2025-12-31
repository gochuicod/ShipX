import { cn } from "../../../lib/util";
import AppButton from "./AppButton";
import {
  searchBarOuterVariants,
  searchBarVariants,
  searchInputVariants,
  searchButtonVariants,
} from "../../../styles/search-bar";

const SearchBar = ({
  value = "",
  onChange,
  onClear,
  placeholder = "Enter tracking number...", // Updated default placeholder
  variant = "default",
  size = "default",
  submitLabel = "Search", // New prop for button text
  submitIcon, // Backwards compatibility if you pass an icon
  showClearButton = true,
  className,
  inputClassName,
  containerClassName,
  ...props
}) => {
  // 1. Classes for the Purple Gradient Wrapper
  const outerClasses = cn(searchBarOuterVariants({ variant, size }), className);

  // 2. Classes for the White Form Container
  const innerClasses = cn(
    searchBarVariants({ variant, size }),
    containerClassName,
  );

  const inputClasses = cn(
    searchInputVariants({ size }),
    "text-[#1E2939] placeholder-[#99A1AF] italic", // Figma: Dark text, Gray italic placeholder
    inputClassName,
  );

  const clearButtonClasses = cn(
    searchButtonVariants({ type: "clear", size: "sm" }), // Force small size for clear X
    "title-clear",
  );

  const submitButtonClasses = cn(
    searchButtonVariants({ type: "submit", size }),
    "title-submit",
  );

  return (
    <div className={outerClasses} {...props}>
      <div className={innerClasses}>
        {/* Left Side Search Icon (Fixed from Figma) */}
        <div className="pl-2 pr-1 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#99A1AF]"
          >
            <path
              d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClasses}
        />

        {/* Clear Button */}
        {showClearButton && value && (
          <button
            type="button"
            onClick={onClear}
            className={clearButtonClasses}
            title="Clear search"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {/* Submit Button (AppButton) */}
        <AppButton
          text={submitLabel}
          style="primary"
          className="h-[48px] px-4 rounded-lg min-w-[85px]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
