import { mapStatuses } from "./StatusMap";

export default function Stepper({ statuses = [] }) {
  const steps = mapStatuses(statuses);

  return (
    <div
      className="
        flex flex-col
        items-center justify-center
        w-max
        md:mb-[1vw] mb-[5vw]
        md:mt-0 mt-[5vw]
      "
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex flex-col items-center relative">
            {/* Text on the RIGHT */}
            <div
              className="
                absolute
                md:-top-[1vw] -top-[4vw]
                left-full
                md:ml-[1vw] ml-[3vw]
                bg-[#F8F7FF]
                md:px-[1vw] px-[3vw]
                md:py-[0.5vw] py-[2vw]
                md:rounded-[1vw] rounded-[3vw]
                md:w-[37.5vw] w-[72vw]
              "
            >
              <h6
                className={`
                  md:text-[0.7vw] text-[2.7vw]
                  font-semibold
                  ${
                    step.state === "completed"
                      ? "text-slate-900"
                      : step.state === "active"
                        ? "text-[#FF00E5]"
                        : "text-slate-400"
                  }`}
              >
                {step.label}
              </h6>

              <p
                className="
                  md:text-[0.65vw] text-[2.5vw]
                  text-slate-500
                "
              >
                {new Date(step.updatedDate).toLocaleString()}
              </p>
            </div>

            {/* Circle */}
            <div
              className={`
                md:w-[1.2vw] w-[3.5vw]
                md:h-[1.2vw] h-[3.5vw]
                shrink-0
                mx-px
                md:ms-0 ms-[3vw]
                border-2
                flex
                items-center justify-center
                rounded-full
                ${
                  step.state === "completed"
                    ? "bg-[#008236] border-[#008236]"
                    : step.state === "active"
                      ? "bg-gray-400 border-gray-300"
                      : "border-gray-300"
                }
              `}
            >
              {step.state === "completed" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    md:size-[0.8vw] size-[3.5vw]
                    fill-white
                  "
                  viewBox="0 0 24 24"
                >
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
              )}

              {step.state === "active" && (
                <span
                  className="
                    md:w-[1vw] w-[3vw]
                    md:h-[1vw] h-[3vw]
                    bg-gray-400
                    rounded-full
                  "
                ></span>
              )}

              {step.state === "upcoming" && (
                <span
                  className="
                    md:w-[1vw] w-[3vw]
                    md:h-[1vw] h-[3vw]
                    bg-gray-300
                    rounded-full
                  "
                ></span>
              )}
            </div>

            {/* Vertical line */}
            {!isLast && (
              <div
                className={`
                  md:w-[0.07vw] w-[0.06vw]
                  md:h-[2.5vw] h-[10vw]
                  md:ms-0 ms-[2vw]
                  ${
                    step.state === "completed" || step.state === "active"
                      ? "bg-[#008236]"
                      : "bg-gray-300"
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
