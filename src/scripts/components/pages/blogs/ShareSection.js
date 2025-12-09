import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ShareSection = () => {
  const { t } = useTranslation();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", icon: "" });
  const shareMenuRef = useRef(null);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target)
      ) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- TOAST HELPER ---
  const showToast = (message, icon) => {
    setToast({ show: true, message, icon });
    // Hide toast after 3 seconds
    setTimeout(() => {
      setToast({ show: false, message: "", icon: "" });
    }, 3000);
  };

  // --- SOCIAL SHARE LOGIC ---
  const handleSocialShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
        break;
      case "copy":
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
              setShowShareMenu(false);
              showToast("Link copied to clipboard!", "success");
            })
            .catch(() => {
              copyToClipboardFallback(window.location.href);
            });
        } else {
          copyToClipboardFallback(window.location.href);
        }
        return;
      default:
        return;
    }

    // Open in a new popup window
    window.open(shareUrl, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  // --- BROWSER BOOKMARK LOGIC ---
  const handleBookmark = () => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const shortcut = isMac ? "⌘ + D" : "Ctrl + D";

    showToast(`Press ${shortcut} to bookmark this page`, "info");
  };

  // --- CLIPBOARD FALLBACK ---
  const copyToClipboardFallback = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showToast("Link copied to clipboard!", "success");
    } catch (err) {
      console.log("Fallback copy failed:", err);
      showToast(
        "Unable to copy link. Please copy manually from the address bar.",
        "error",
      );
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="bg-[#F8F9FF] rounded-2xl mx-auto md:w-[75%] p-8 mt-16 flex flex-col items-center justify-center gap-4 text-center relative">
      <h3 className="font-bold text-xl md:text-2xl">
        {t("share_section.title_prefix")}{" "}
        <span className="text-[#FF00E5]">
          {t("share_section.title_suffix")}
        </span>
      </h3>

      <div className="flex gap-4 mt-2">
        {/* --- SHARE BUTTON & DROPDOWN --- */}
        <div className="relative" ref={shareMenuRef}>
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:shadow-md transition-shadow text-xs md:text-sm font-medium whitespace-nowrap"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            {t("share_section.share")}
          </button>

          {/* Social Dropdown Menu */}
          {showShareMenu && (
            <div className="absolute top-12 left-0 bg-white shadow-xl border border-gray-100 rounded-xl p-2 flex flex-col gap-1 min-w-40 z-50 text-left">
              <button
                onClick={() => handleSocialShare("facebook")}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span className="text-blue-600 font-bold">f</span> Facebook
              </button>
              <button
                onClick={() => handleSocialShare("twitter")}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span className="text-black font-bold">X</span> Twitter
              </button>
              <button
                onClick={() => handleSocialShare("linkedin")}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span className="text-blue-700 font-bold">in</span> LinkedIn
              </button>
              <button
                onClick={() => handleSocialShare("whatsapp")}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span className="text-green-500 font-bold">WA</span> WhatsApp
              </button>
              <div className="h-px bg-gray-100 my-1"></div>
              <button
                onClick={() => handleSocialShare("copy")}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span>🔗</span> Copy Link
              </button>
            </div>
          )}
        </div>

        {/* --- BOOKMARK BUTTON --- */}
        <div className="relative">
          <button
            onClick={handleBookmark}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:shadow-md transition-shadow text-xs md:text-sm font-medium whitespace-nowrap"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            {t("share_section.bookmark")}
          </button>
        </div>
      </div>

      {/* --- TOAST COMPONENT (FIXED BOTTOM) --- */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-100 flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl transition-all duration-300 ease-in-out ${
          toast.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } ${toast.icon === "success" ? "bg-green-600" : "bg-gray-900"}`}
      >
        {/* Success Icon */}
        {toast.icon === "success" && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
        {/* Info/Star Icon */}
        {toast.icon === "info" && <span className="text-xl">⭐️</span>}

        <p className="text-white font-medium text-sm md:text-base">
          {toast.message}
        </p>
      </div>
    </div>
  );
};

export default ShareSection;
