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
        bg-[#F8F7FF] md:rounded-[1vw] rounded-[3vw]
        md:px-[1vw] px-[3vw] md:pt-[1vw] pt-[2.5vw] md:pb-[0.5vw] pb-[1vw]
      "
    >
      <div
        className={`w-full md:h-[1.5vw] h-[6vw] rounded-full border ${info.borderClass} bg-white p-1`}
      >
        <div
          className={`h-full rounded-full ${info.colorClass} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div
        className={`text-center md:mt-[0.5vw] mt-[1.5vw] font-bold ${info.textClass} md:text-[1vw] text-[3vw]`}
      >
        {percentage}% <span className="font-bold ml-1">{info.label}</span>
      </div>
    </div>
  );
};

export default ConfidenceMeter;
