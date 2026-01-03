import { useMemo } from "react";

const getConfidenceInfo = (confidence) => {
  const percentage = Math.round(confidence * 100);

  if (percentage >= 80) {
    return {
      label: "High confidence",
      colorClass: "bg-green-500",
      textClass: "text-green-600",
      borderClass: "border-green-500",
    };
  } else if (percentage >= 50) {
    return {
      label: "Medium confidence",
      colorClass: "bg-orange-500",
      textClass: "text-orange-600",
      borderClass: "border-orange-500",
    };
  } else {
    return {
      label: "Low confidence",
      colorClass: "bg-red-500",
      textClass: "text-red-600",
      borderClass: "border-red-500",
    };
  }
};

const ConfidenceMeter = ({ confidence }) => {
  const info = useMemo(() => getConfidenceInfo(confidence), [confidence]);
  const percentage = (confidence * 100).toFixed(0);

  if (!confidence) return null;

  return (
    <div
      className="
        bg-white
        rounded-[12px]
        px-4 pt-4 pb-2
      "
    >
      {/* Progress Bar */}
      <div
        className={`w-full h-3 rounded-full border ${info.borderClass} bg-white`}
      >
        <div
          className={`
            h-full
            rounded-full
            ${info.colorClass}
            transition-all duration-1000 ease-out
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Label */}
      <div
        className={`
          text-center
          mt-2
          font-semibold
          ${info.textClass}
          text-sm
        `}
      >
        {percentage}%<span className="font-normal ml-1">{info.label}</span>
      </div>
    </div>
  );
};

export default ConfidenceMeter;
