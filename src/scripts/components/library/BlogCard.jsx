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
  CardImageContainer,
  CardMobileActionsRow,
  CardMobileReadMore,
  ShareMenuDropdown,
  ShareMenuButton,
  ShareMenuDivider,
  Toast,
  CardMobileDate,
  ShareMenuWrapper,
  ShareIconButton,
} from "../../../styles/blog-card";
import { Badge } from "../../../styles/badge";
import { useTranslation } from "react-i18next";
import { ArrowRight, Share2, CheckCircle } from "lucide-react";

const BlogCard = ({ post: postProp, variant = "default" }) => {
  const { t } = useTranslation();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", icon: "" });
  const shareMenuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch blogs from JSON via i18n
  const blogs =
    t("service_headline_section.blogs", { returnObjects: true }) || [];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Helper Logic
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
      showToast("Unable to copy link. Please copy manually.", "error");
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
              showToast("Link copied!", "success");
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

  // Data Destructuring
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

  const blogUrl = slug.startsWith("http")
    ? slug
    : `${window.location.origin}${slug.startsWith("/") ? slug : "/" + slug}`;

  const handleNavigate = () => {
    window.location.href = slug;
  };

  // Share Menu Content
  const ShareMenuContent = () => (
    <ShareMenuDropdown>
      <ShareMenuButton
        platform="facebook"
        onClick={(e) => {
          e.stopPropagation();
          handleSocialShare("facebook");
        }}
      >
        <span className="text-blue-600 font-bold">f</span> Facebook
      </ShareMenuButton>

      <ShareMenuButton
        platform="twitter"
        onClick={(e) => {
          e.stopPropagation();
          handleSocialShare("twitter");
        }}
      >
        <span className="text-black font-bold">X</span> Twitter
      </ShareMenuButton>

      <ShareMenuButton
        platform="linkedin"
        onClick={(e) => {
          e.stopPropagation();
          handleSocialShare("linkedin");
        }}
      >
        <span className="text-blue-700 font-bold">in</span> LinkedIn
      </ShareMenuButton>

      <ShareMenuButton
        platform="whatsapp"
        onClick={(e) => {
          e.stopPropagation();
          handleSocialShare("whatsapp");
        }}
      >
        <span className="text-green-500 font-bold">WA</span> WhatsApp
      </ShareMenuButton>

      <ShareMenuDivider />

      <ShareMenuButton
        platform="copy"
        onClick={(e) => {
          e.stopPropagation();
          handleSocialShare("copy");
        }}
      >
        <span>🔗</span> Copy Link
      </ShareMenuButton>
    </ShareMenuDropdown>
  );

  return (
    <CardRoot variant={variant} isMobile={isMobile}>
      {/* IMAGE SECTION */}
      <CardImageContainer onClick={handleNavigate}>
        <CardImageWrapper>
          <CardImage src={cover} alt={title} />
          {isNew && <CardBadge variant="new">NEW</CardBadge>}
        </CardImageWrapper>
      </CardImageContainer>

      {/* CONTENT SECTION */}
      <CardBody>
        {/* Meta Row - Category & Date */}
        <CardMetaRow>
          <Badge variant="secondary" size="sm">
            {category}
          </Badge>
          <CardDate>{date}</CardDate>
        </CardMetaRow>

        {/* Title */}
        <CardTitle onClick={handleNavigate} className="cursor-pointer">
          {title}
        </CardTitle>

        {/* Excerpt - Desktop Only */}
        {!isMobile && (
          <CardExcerpt>{getTruncatedContent(content, 150)}</CardExcerpt>
        )}

        {/* Mobile Date */}
        {isMobile && <CardMobileDate>{date}</CardMobileDate>}

        {/* Footer Actions */}
        <CardFooter>
          <CardReadMore onClick={handleNavigate} className="cursor-pointer">
            {t("blogs_section.read_more_button", "Read More")}
            <ArrowRight className="w-4 h-4" />
          </CardReadMore>

          <ShareMenuWrapper ref={shareMenuRef}>
            <CardShareButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowShareMenu(!showShareMenu);
              }}
            >
              <Share2 className="w-4 h-4" />
            </CardShareButton>
            {showShareMenu && <ShareMenuContent />}
          </ShareMenuWrapper>
        </CardFooter>
      </CardBody>

      {/* Toast Notification */}
      <Toast visible={toast.show} icon={toast.icon}>
        {toast.icon === "success" && (
          <CheckCircle width="20" height="20" className="text-white" />
        )}
        {toast.icon === "info" && <span className="text-xl">⭐️</span>}
        <p className="text-white font-medium text-sm">{toast.message}</p>
      </Toast>
    </CardRoot>
  );
};

export default BlogCard;
