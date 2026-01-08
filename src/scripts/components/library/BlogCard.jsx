import { useState, useRef, useEffect } from "react";
import {
  CardRoot,
  CardImageWrapper,
  CardImage,
  CardBadge,
  CardBody,
  CardMetaRow,
  CardDate,
  CardTitle,
  CardExcerpt,
  CardFooter,
  CardReadMore,
  CardShareButton,
} from "../../../styles/blog-card";
import { Badge } from "../../../styles/badge";
import { useTranslation } from "react-i18next";

const BlogCard = ({ post: postProp, variant = "default" }) => {
  const { t } = useTranslation();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", icon: "" });
  const shareMenuRef = useRef(null);

  // Fetch blogs from JSON via i18n
  const blogs =
    t("service_headline_section.blogs", { returnObjects: true }) || [];

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

  // 1. Helper Logic
  const isRecent = (dateString) => {
    try {
      const postDate = new Date(dateString);
      const diffTime = Math.abs(new Date() - postDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    } catch (e) {
      return false;
    }
  };

  const getTruncatedContent = (content, limit = 100) => {
    if (!content) return "";
    const plainText = content.replace(/<[^>]*>?/gm, "");
    if (plainText.length <= limit) return plainText;
    return plainText.substring(0, limit) + "...";
  };

  // Toast helper
  const showToast = (message, icon) => {
    setToast({ show: true, message, icon });
    setTimeout(() => {
      setToast({ show: false, message: "", icon: "" });
    }, 3000);
  };

  // Clipboard fallback
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
      showToast(
        "Unable to copy link. Please copy manually from the address bar.",
        "error",
      );
    }
    document.body.removeChild(textArea);
  };

  // Social share logic
  const handleSocialShare = (platform) => {
    const url = encodeURIComponent(blogUrl);
    const text = encodeURIComponent(title);
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
            .writeText(blogUrl)
            .then(() => {
              setShowShareMenu(false);
              showToast("Link copied to clipboard!", "success");
            })
            .catch(() => {
              copyToClipboardFallback(blogUrl);
            });
        } else {
          copyToClipboardFallback(blogUrl);
        }
        return;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  // 2. Data Destructuring
  const {
    title = "The ASEAN Seller's Complete Guide for Going Global",
    date = "",
    cover = "/api/placeholder/400/250",
    tags = ["Logistics"],
    content = "Are you an ASEAN-based seller ready to expand your business beyond Southeast Asia? This guide provides the essential strategies.",
    slug = "#",
  } = postProp || blogs[0] || {};

  const isNew = isRecent(date);
  const category = tags.length > 0 ? tags[0] : "General";

  // Build the full blog URL
  const blogUrl = slug.startsWith("http")
    ? slug
    : `${window.location.origin}${slug.startsWith("/") ? slug : "/" + slug}`;

  // Handle navigation to blog page
  const handleNavigate = () => {
    window.location.href = slug;
  };

  // 3. Render
  return (
    <CardRoot variant={variant}>
      {/* Top Half - Clickable */}
      <div onClick={handleNavigate} className="cursor-pointer">
        {/* Image Section */}
        <CardImageWrapper variant={variant}>
          <CardImage src={cover} alt={title} variant={variant} />
          {isNew && <CardBadge variant="new">NEW</CardBadge>}
        </CardImageWrapper>

        {/* Content Section */}
        <CardBody variant={variant}>
          <CardMetaRow>
            <Badge variant="secondary" size="sm">
              {category}
            </Badge>
            <CardDate>{date}</CardDate>
          </CardMetaRow>

          <CardTitle>{title}</CardTitle>

          <CardDate className="md:hidden">{date}</CardDate>

          <CardExcerpt className="md:flex hidden md:line-clamp-4">
            {getTruncatedContent(content, 150)}
          </CardExcerpt>
        </CardBody>
      </div>

      {/* Footer Actions - Not Clickable (stops propagation) */}
      <CardFooter className="px-5 md:px-5">
        <CardReadMore
          onClick={handleNavigate}
          className="text-xs text-nowrap md:text-base cursor-pointer"
        >
          {t("blogs_section.read_more_button", "Read More")}
          <img
            src="https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-arrow-right-icon.svg"
            alt="Arrow Right"
            className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover:translate-x-1"
          />
        </CardReadMore>

        <div className="relative" ref={shareMenuRef}>
          <CardShareButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowShareMenu(!showShareMenu);
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-share-icon.svg"
              alt="Share"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </CardShareButton>

          {/* Share Dropdown Menu */}
          {showShareMenu && (
            <div className="absolute bottom-12 right-0 bg-white shadow-xl border border-gray-100 rounded-xl p-2 flex flex-col gap-1 min-w-40 z-50 text-left">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSocialShare("facebook");
                }}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span className="text-blue-600 font-bold">f</span> Facebook
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSocialShare("twitter");
                }}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span className="text-black font-bold">X</span> Twitter
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSocialShare("linkedin");
                }}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span className="text-blue-700 font-bold">in</span> LinkedIn
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSocialShare("whatsapp");
                }}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span className="text-green-500 font-bold">WA</span> WhatsApp
              </button>
              <div className="h-px bg-gray-100 my-1"></div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSocialShare("copy");
                }}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left"
              >
                <span>🔗</span> Copy Link
              </button>
            </div>
          )}
        </div>
      </CardFooter>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl transition-all duration-300 ease-in-out ${
          toast.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } ${toast.icon === "success" ? "bg-green-600" : "bg-gray-900"}`}
      >
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
        {toast.icon === "info" && <span className="text-xl">⭐️</span>}
        <p className="text-white font-medium text-sm md:text-base">
          {toast.message}
        </p>
      </div>
    </CardRoot>
  );
};

export default BlogCard;
