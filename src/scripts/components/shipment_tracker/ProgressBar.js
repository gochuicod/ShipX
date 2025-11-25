import { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(50);

  const handleChange = (e) => setProgress(e.target.value);

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
          min="0"
          max="100"
          value={progress}
          onChange={handleChange}
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
