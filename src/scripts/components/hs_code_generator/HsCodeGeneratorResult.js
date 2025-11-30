import { useHsCode } from "../../hooks/useHsCode";
import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import HierarchyPill from "./HierarchyPill";

export default function HsCodeGeneratorResult() {
  const { hsCodeResult } = useHsCode();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text) => {
    if (!text) return;

    // 1. Try modern API
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => triggerCopiedState())
        .catch((err) => {
          console.warn("Navigator clipboard failed, using fallback.", err);
          fallbackCopyTextToClipboard(text);
        });
    } else {
      fallbackCopyTextToClipboard(text);
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        triggerCopiedState();
      } else {
        console.error("Fallback copy failed.");
      }
    } catch (err) {
      console.error("Fallback copy error:", err);
    }

    document.body.removeChild(textArea);
  };

  const triggerCopiedState = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

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
        colorClass: "bg-orange-500", // Matches your image
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

  return (
    <div
      className="
                flex flex-col
                md:mb-[10vw] mb-[15vw]
                md:mt-0 mt-[10vw]
            "
      style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      <span
        className="
                    text-[#FF00E5]
                    md:text-[2.5vw] text-[4vw]
                    text-center
                    font-semibold
                    md:mb-[3vw] mb-[5vw]
                "
      >
        HS Code Result
      </span>
      <div
        className="
                    flex
                    md:flex-row flex-col
                    justify-between
                    md:w-[80vw] w-[90vw]
                    md:px-[3vw] px-[5vw]
                    md:py-[2vw] py-[5vw]
                    mx-auto
                    bg-white
                    md:rounded-[1vw] rounded-[3vw]
                    shadow-[0_0_5vw_rgba(255,0,229,0.10)]
                "
      >
        <div className="flex flex-col gap-y-[1.5vw]">
          {/* Recommended HS Code */}
          <div
            className="
                            flex flex-col
                            md:w-[35.5vw] w-[80vw]
                        "
          >
            <span
              className="
                                md:text-[1vw] text-[2.5vw]
                                text-[#1E2939]
                                font-semibold
                                md:leading-0 leading-[2.7vw]
                            "
            >
              Recommended HS Code
            </span>
            <p
              className="
                                text-[#4A5565]/80
                                md:text-[0.8vw] text-[2.3vw]
                                md:leading-[2vw] leading-[3vw]
                            "
            >
              The 6-digit (ROW) or 10-digit (USA) customs code suggested for
              your product
            </p>
            <div
              className="
                                flex relative
                                items-center justify-between
                                bg-[#F8F7FF]
                                md:rounded-[1vw] rounded-[2vw]
                                md:px-[2vw] px-[2.5vw]
                                md:py-[0.5vw] py-[1vw]
                                md:mt-0 mt-[2vw]
                            "
            >
              <span
                className="
                                    font-mono
                                    md:text-[2.5vw] text-[5vw]
                                    font-semibold
                                    text-[#4B5563]
                                    tracking-wide
                                "
              >
                {hsCodeResult?.code}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(hsCodeResult?.code)}
                className={`
                                    absolute
                                    md:block hidden
                                    right-[0.5vw] bottom-[0.5vw]
                                    p-2.5 rounded-[0.5vw] transition-all duration-200
                                    cursor-pointer
                                    ${
                                      isCopied
                                        ? "bg-green-100 text-green-600"
                                        : "bg-[#EBE8FB] text-[#402B73] hover:bg-[#EBE8FB]/80 hover:text-[#402B73]/80"
                                    }
                                `}
                title="Copy to clipboard"
              >
                {isCopied ? (
                  <Check className="w-[1vw] h-[1vw]" />
                ) : (
                  <Clipboard className="w-[1vw] h-[1vw]" />
                )}
              </button>
            </div>
          </div>
          {/* Confidence Level */}
          <div
            className="
                            flex flex-col
                            md:w-[35.5vw] w-[80vw]
                        "
          >
            <span
              className="
                                md:text-[1vw] text-[2.5vw]
                                text-[#1E2939]
                                font-semibold
                                md:leading-[1vw] leading-[2.7vw]
                                md:mt-0 mt-[3vw]
                            "
            >
              Confidence Level
            </span>
            <p
              className="
                                text-[#4A5565]/80
                                md:text-[0.8vw] text-[2.3vw]
                                md:leading-[1vw] leading-[3vw]
                                md:mb-[0.5vw] mb-[2vw]
                            "
            >
              A percentage score indicating how certain the AI is that the
              recommended code is correct, helping you assess risk
            </p>
            {hsCodeResult?.confidence &&
              (() => {
                const info = getConfidenceInfo(hsCodeResult?.confidence);
                return (
                  <div className="">
                    <div
                      className="
                                            bg-[#F8F7FF]
                                            md:rounded-[1vw] rounded-[3vw]
                                            md:px-[1vw] px-[3vw]
                                            md:pt-[1vw] pt-[2.5vw]
                                            md:pb-[0.5vw] pb-[1vw]
                                        "
                    >
                      {/* The Bar Track */}
                      <div
                        className={`w-full md:h-[1.5vw] h-[6vw] rounded-full border ${info.borderClass} bg-white p-1`}
                      >
                        {/* The Bar Fill */}
                        <div
                          className={`h-full rounded-full ${info.colorClass} transition-all duration-1000 ease-out`}
                          style={{
                            width: `${hsCodeResult?.confidence * 100}%`,
                          }}
                        />
                      </div>

                      {/* The Text Below */}
                      <div
                        className={`text-center md:mt-[0.5vw] mt-[1.5vw] font-bold ${info.textClass} md:text-[1vw] text-[3vw]`}
                      >
                        {(hsCodeResult?.confidence * 100).toFixed(0)}%{" "}
                        <span className="font-bold ml-1">{info.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
          </div>
        </div>
        <div className="flex flex-col gap-y-[1.5vw]">
          {/* AI Justification */}
          <div
            className="
                            flex flex-col
                            md:w-[35.5vw] w-[80vw]
                            md:mt-0 mt-[2vw]
                        "
          >
            <span
              className="
                                md:text-[1vw] text-[2.5vw]
                                text-[#1E2939]
                                font-semibold
                                md:leading-0 leading-[2.7vw]
                            "
            >
              AI Justification
            </span>
            <p
              className="
                                text-[#4A5565]/80
                                md:text-[0.8vw] text-[2.3vw]
                                md:leading-[2vw] leading-[3vw]
                            "
            >
              Explains the reasoning behind the classification to ensure
              transparency
            </p>
            <p
              className="
                                overflow-auto
                                md:h-[7vw] h-[24vw]
                                bg-[#F8F7FF]
                                md:rounded-[1vw] rounded-[3vw]
                                md:px-[1vw] px-[3vw]
                                md:py-[0.5vw] py-[2vw]
                                md:text-[0.8vw] text-[2.3vw]
                                text-[#4A5565]
                                md:mt-0 mt-[2vw]
                            "
            >
              {hsCodeResult?.justification}
            </p>
          </div>
          {/* Tariff Heirarchy */}
          <div
            className="
                            flex flex-col
                            md:w-[35.5vw] w-[80vw]
                            md:mt-0 mt-[2vw]
                        "
          >
            <span
              className="
                                md:text-[1vw] text-[2.5vw]
                                text-[#1E2939]
                                font-semibold
                                md:leading-[1vw] leading-[2.7vw]
                            "
            >
              Tariff Heirarchy
            </span>
            <p
              className="
                                text-[#4A5565]/80
                                md:text-[0.8vw] text-[2.3vw]
                                md:leading-[1vw] leading-[3vw]
                                md:mb-[0.5vw] mb-[2vw]
                            "
            >
              Visualizes the structural path from Chapter down to the specific
              Subheading.
            </p>
            <div
              className="
                                flex flex-row
                                md:gap-x-[0.5vw] gap-x-[1.5vw]
                                bg-[#F8F7FF]
                                md:rounded-[1vw] rounded-[2vw]
                                md:px-[0.5vw] px-[3vw]
                                md:py-[0.85vw] py-[2vw]
                            "
            >
              {hsCodeResult?.tariffHierarchy &&
                hsCodeResult?.tariffHierarchy.map((item, index) => (
                  <HierarchyPill key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
