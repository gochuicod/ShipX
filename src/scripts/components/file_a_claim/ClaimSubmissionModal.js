import { useState, useEffect } from "react";
import { X, CheckCircle, Copy, Check, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const ClaimSubmissionModal = ({
  isOpen,
  onClose,
  status = "success",
  claimId,
  message,
}) => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      return () => {
        document.removeEventListener("keydown", handleEscKey);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySuccess = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  const copyToClipboard = () => {
    if (!claimId) return;

    // 1. Try the modern Clipboard API (Works in HTTPS/Secure Contexts)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(claimId)
        .then(() => handleCopySuccess())
        .catch(() => fallbackCopyTextToClipboard(claimId));
    } else {
      // 2. Fallback for non-secure environments (HTTP/Localhost)
      fallbackCopyTextToClipboard(claimId);
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // Ensure textarea is not visible but part of the DOM
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        handleCopySuccess();
      } else {
        console.error("Fallback: Copying text command failed");
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
  };

  const isSuccess = status === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-[4vw] md:p-[1vw] animate-in fade-in duration-200">
      <div className="bg-white rounded-[6vw] md:rounded-[1.5vw] shadow-2xl w-[90vw] md:w-[35vw] p-[8vw] md:p-[2vw] relative flex flex-col items-center text-center transform transition-all scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[4vw] right-[4vw] md:top-[1.5vw] md:right-[1.5vw] text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw] hover:cursor-pointer" />
        </button>

        {/* Icon (Dynamic based on status) */}
        <div
          className={`w-[16vw] h-[16vw] md:w-[4vw] md:h-[4vw] rounded-full flex items-center justify-center mb-[6vw] md:mb-[1.5vw] ${
            isSuccess ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {isSuccess ? (
            <CheckCircle className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] text-green-500" />
          ) : (
            <AlertCircle className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] text-red-500" />
          )}
        </div>

        {/* Headings */}
        <h2 className="font-bold text-gray-800 mb-[2vw] md:mb-[0.5vw] text-[6vw] md:text-[1.5vw]">
          {isSuccess
            ? t("file_a_claim.submission_modal.success.title")
            : t("file_a_claim.submission_modal.error.title")}
        </h2>
        <h3 className="font-bold text-gray-800 mb-[4vw] md:mb-[1vw] text-[5vw] md:text-[1.2vw]">
          {isSuccess
            ? t("file_a_claim.submission_modal.success.subtitle")
            : message ||
              t("file_a_claim.submission_modal.error.defaultSubtitle")}
        </h3>

        {/* Description Text */}
        <p className="text-gray-500 mb-[8vw] md:mb-[2vw] px-[4vw] md:px-[1vw] leading-relaxed text-[3.5vw] md:text-[0.9vw]">
          {isSuccess
            ? t("file_a_claim.submission_modal.success.description")
            : t("file_a_claim.submission_modal.error.description")}
        </p>

        {/* Reference ID Box (Only show on Success) */}
        {isSuccess && claimId && (
          <div className="w-full mb-[6vw] md:mb-[1.5vw]">
            <p className="font-bold text-gray-700 mb-[2vw] md:mb-[0.5vw] text-[3.5vw] md:text-[0.9vw]">
              {t("file_a_claim.submission_modal.success.referenceId.label")}
            </p>
            <div
              className="bg-[#F3F1FF] border border-[#E0D4FC] rounded-[3vw] md:rounded-[0.8vw] p-[4vw] md:p-[1vw] flex items-center justify-center gap-[3vw] md:gap-[0.8vw] group relative cursor-pointer hover:bg-[#ECE5FF] transition-colors"
              onClick={copyToClipboard}
              title={t(
                "file_a_claim.submission_modal.success.referenceId.accessibility.copyTitle",
              )}
            >
              <span className="font-extrabold text-[#99008A] tracking-wider break-all text-[4vw] md:text-[1.5vw]">
                {claimId}
              </span>
              <button
                className={`transition-colors ${
                  isCopied
                    ? "text-green-600"
                    : "text-gray-400 hover:text-[#99008A]"
                }`}
              >
                {isCopied ? (
                  <Check className="w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]" />
                ) : (
                  <Copy className="w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]" />
                )}
              </button>

              {/* Optional: "Copied" Tooltip */}
              {isCopied && (
                <span className="absolute -top-[8vw] md:-top-[2vw] bg-black text-white py-[1vw] px-[2vw] md:py-[0.3vw] md:px-[0.6vw] rounded opacity-100 transition-opacity text-[3vw] md:text-[0.75vw]">
                  {t(
                    "file_a_claim.submission_modal.success.referenceId.feedback.copied",
                  )}
                </span>
              )}
            </div>
            <p className="text-gray-400 italic mt-[4vw] md:mt-[1vw] mb-[2vw] md:mb-[0.5vw] leading-relaxed max-w-xs mx-auto text-[3vw] md:text-[0.75vw]">
              {t(
                "file_a_claim.submission_modal.success.referenceId.footerNote",
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimSubmissionModal;
