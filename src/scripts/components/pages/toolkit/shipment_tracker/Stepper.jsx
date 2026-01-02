import { mapStatuses } from "./StatusMap";
import { cn } from "../../../../../lib/util";

export default function Stepper({ statuses = [] }) {
  const steps = mapStatuses(statuses);

  return (
    <div className="relative w-full">
      {/* THE CONNECTING LINE
          This sits behind all rows.
          top-8 starts it at the center of the first circle.
          bottom-8 ends it at the center of the last circle.
      */}
      {steps.length > 1 && (
        <div
          className="absolute bg-[#008236] w-[1.5px] left-3 z-0"
          style={{
            top: "31px",
            bottom: "31px",
          }}
        />
      )}

      <div className="flex flex-col gap-2.5 w-full">
        {steps.map((step, index) => {
          const isFirst = index === 0;

          return (
            <div
              key={`step-row-${index}`}
              className="flex flex-row items-start gap-4 w-full"
            >
              {/* LEFT: Indicator Circle
                  The h-[62px] container ensures that even if the card grows,
                  the circle initial position is based on the standard card height.
              */}
              <div className="flex justify-center min-w-6 h-[62px] shrink-0 z-10">
                <div
                  className={cn(
                    "mt-[19px] flex items-center justify-center rounded-full border-2 bg-[#008236] border-[#008236]",
                    "w-6 h-6 shrink-0",
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3.5 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                  </svg>
                </div>
              </div>

              {/* RIGHT: Activity Card */}
              <div
                className={cn(
                  "flex flex-col justify-center px-4 py-2 bg-white rounded-lg shadow-sm",
                  "min-h-[62px] grow min-w-0",
                  isFirst ? "opacity-100" : "opacity-40",
                )}
              >
                <h6 className="font-semibold text-[16px] leading-tight text-[#1E2939] break-words">
                  {step.label}
                </h6>
                <p className="text-[14px] text-[#4D525C] font-normal mt-0.5 break-words">
                  {new Date(step.updatedDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  · {step.location || "In Transit"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
