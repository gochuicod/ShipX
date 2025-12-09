import { mapStatuses } from "./StatusMap";

export default function ProgressBar({ progress = 0 }) {
  return (
    <div className="w-full mx-auto">
      {/* Wrapper containing responsive CSS variables */}
      <div
        className="
          relative rounded-full bg-[#FFD6FA]
          /* Base (mobile) */
          [--thumb-size:3.5vw]
          [--track-height:2vw]

          /* sm breakpoint */
          sm:[--thumb-size:2vw]
          sm:[--track-height:0.8vw]

          /* md breakpoint */
          md:[--thumb-size:1.2vw]
          md:[--track-height:0.6vw]
        "
        style={{
          height: "var(--track-height)",
        }}
      >
        {/* Gradient Fill */}
        <div
          className="rounded-full"
          style={{
            width: `${progress}%`,
            height: "var(--track-height)",
            background: "linear-gradient(to right, #66005C, #FF00E5)",
            transition: "width 0.3s ease",
          }}
        />

        {/* Range Input Overlay */}
        <input
          type="range"
          disabled={true}
          min="0"
          max="100"
          value={progress}
          className="
            absolute top-1/2 left-0 w-full -translate-y-1/2
            appearance-none bg-transparent pointer-events-auto rounded-full
          "
          style={{
            accentColor: "transparent",
            boxShadow: "inset 0 0 0 0.15vw #FFD6FA",
          }}
        />
      </div>

      {/* Custom styled thumb (powered by CSS variables) */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: var(--thumb-size);
          height: var(--thumb-size);
          background: #ff00e5;
          border: 0.1vw solid #ff00e5;
          border-radius: 5vw;
          cursor: pointer;
          margin-top: calc((var(--track-height) - var(--thumb-size)) / 2);
          transition:
            width 0.2s ease,
            height 0.2s ease;
        }

        input[type="range"]::-moz-range-thumb {
          width: var(--thumb-size);
          height: var(--thumb-size);
          background: #ff00e5;
          border: 0.1vw solid #ff00e5;
          border-radius: 5vw;
          cursor: pointer;
        }

        input[type="range"]::-ms-thumb {
          width: var(--thumb-size);
          height: var(--thumb-size);
          background: #ff00e5;
          border: 0.1vw solid #ff00e5;
          border-radius: 5vw;
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-runnable-track {
          height: var(--track-height);
          border-radius: calc(var(--track-height) / 2);
        }
      `}</style>
    </div>
  );
}

export function getShipmentProgressPercentage(statuses) {
  if (!Array.isArray(statuses) || statuses.length === 0) return 0;

  const mapped = mapStatuses(statuses);
  const lastIndex =
    mapped.findIndex((step) => step.state === "active") !== -1
      ? mapped.findIndex((step) => step.state === "active")
      : mapped.length - 1; // if delivered, take last index

  // percentage = (current step / total steps) * 100
  const percentage = ((lastIndex + 1) / mapped.length) * 100;

  return percentage;
}
