"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_blogs_BlogPage_jsx"],{

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-down.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chevron-down", __iconNode);


//# sourceMappingURL=chevron-down.js.map


/***/ }),

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");


function cn(...inputs) {
  return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}

/***/ }),

/***/ "./src/scripts/components/library/AppButton.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/library/AppButton.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppButton)
/* harmony export */ });
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/button */ "./src/styles/button.jsx");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const appButtonStyles = {
  smartNavLink: "flex items-center justify-center gap-2",
  // The container needs a defined size to act as a frame for the "cover" image
  iconWrapper: "flex items-center justify-center shrink-0 overflow-hidden w-5 h-5",
  // object-cover ensures the image (like a flag) fills the 20x20px area completely
  icon: "w-full h-full object-cover"
};
function AppButton({
  size = "default",
  style = "primary",
  text = "",
  withLeftIcon = false,
  withRightIcon = false,
  leftIcon,
  rightIcon,
  iconRounded = false,
  to,
  className,
  // New prop to control scroll behavior (passed to SmartNavLink)
  // Options: 'top', 'center', 'bottom'
  scrollAlign,
  ...rest
}) {
  const renderIcon = Icon => {
    if (!Icon) return null;
    const isUrl = typeof Icon === "string";
    const roundingClass = iconRounded ? "rounded-full" : "rounded-lg";
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(appButtonStyles.iconWrapper, roundingClass),
      children: isUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: Icon,
        alt: "",
        className: appButtonStyles.icon
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "flex items-center justify-center w-full h-full",
        children: (0,react__WEBPACK_IMPORTED_MODULE_3__.isValidElement)(Icon) ? Icon : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Icon, {
          className: "size-full"
        }) // 'size-full' fills the 20x20 wrapper
      })
    });
  };
  const ButtonContent = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [withLeftIcon && renderIcon(leftIcon), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "leading-tight",
      children: text
    }), withRightIcon && renderIcon(rightIcon)]
  });

  // If 'to' is present, render as a SmartNavLink inside a Button (asChild)
  if (to) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
      asChild: true,
      variant: style,
      size: size,
      className: className,
      ...rest,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: to,
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(appButtonStyles.smartNavLink)
        // Pass the new prop down to the link component
        ,
        scrollAlign: scrollAlign,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonContent, {})
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: style,
    size: size,
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(appButtonStyles.smartNavLink, className),
    ...rest,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonContent, {})
  });
}

/***/ }),

/***/ "./src/scripts/components/library/BlogCard.jsx":
/*!*****************************************************!*\
  !*** ./src/scripts/components/library/BlogCard.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_blog_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/blog-card */ "./src/styles/blog-card.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const BlogCard = ({
  post: postProp,
  variant = "default"
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  const [showShareMenu, setShowShareMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [toast, setToast] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    show: false,
    message: "",
    icon: ""
  });
  const shareMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Fetch blogs from JSON via i18n
  const blogs = t("service_headline_section.blogs", {
    returnObjects: true
  }) || [];

  // Close share menu when clicking outside
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = event => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 1. Helper Logic
  const isRecent = dateString => {
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
    setToast({
      show: true,
      message,
      icon
    });
    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        icon: ""
      });
    }, 3000);
  };

  // Clipboard fallback
  const copyToClipboardFallback = text => {
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
      showToast("Unable to copy link. Please copy manually from the address bar.", "error");
    }
    document.body.removeChild(textArea);
  };

  // Social share logic
  const handleSocialShare = platform => {
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
          navigator.clipboard.writeText(blogUrl).then(() => {
            setShowShareMenu(false);
            showToast("Link copied to clipboard!", "success");
          }).catch(() => {
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
    slug = "#"
  } = postProp || blogs[0] || {};
  const isNew = isRecent(date);
  const category = tags.length > 0 ? tags[0] : "General";

  // Build the full blog URL
  const blogUrl = slug.startsWith("http") ? slug : `${window.location.origin}${slug.startsWith("/") ? slug : "/" + slug}`;

  // Handle navigation to blog page
  const handleNavigate = () => {
    window.location.href = slug;
  };

  // 3. Render
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardRoot, {
    variant: variant,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      onClick: handleNavigate,
      className: "cursor-pointer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardImageWrapper, {
        variant: variant,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardImage, {
          src: cover,
          alt: title,
          variant: variant
        }), isNew && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardBadge, {
          variant: "new",
          children: "NEW"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardBody, {
        variant: variant,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardMetaRow, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_2__.Badge, {
            variant: "secondary",
            size: "sm",
            children: category
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardDate, {
            children: date
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardDate, {
          className: "md:hidden",
          children: date
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardExcerpt, {
          className: "md:flex hidden md:line-clamp-4",
          children: getTruncatedContent(content, 150)
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {
      className: "px-5 md:px-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardReadMore, {
        onClick: handleNavigate,
        className: "text-xs text-nowrap md:text-base cursor-pointer",
        children: [t("blogs_section.read_more_button", "Read More"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: "https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-arrow-right-icon.svg",
          alt: "Arrow Right",
          className: "w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover:translate-x-1"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "relative",
        ref: shareMenuRef,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_1__.CardShareButton, {
          onClick: e => {
            e.preventDefault();
            e.stopPropagation();
            setShowShareMenu(!showShareMenu);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-share-icon.svg",
            alt: "Share",
            className: "w-4 h-4 md:w-5 md:h-5"
          })
        }), showShareMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "absolute bottom-12 right-0 bg-white shadow-xl border border-gray-100 rounded-xl p-2 flex flex-col gap-1 min-w-40 z-50 text-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: e => {
              e.stopPropagation();
              handleSocialShare("facebook");
            },
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-blue-600 font-bold",
              children: "f"
            }), " Facebook"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: e => {
              e.stopPropagation();
              handleSocialShare("twitter");
            },
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-black font-bold",
              children: "X"
            }), " Twitter"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: e => {
              e.stopPropagation();
              handleSocialShare("linkedin");
            },
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-blue-700 font-bold",
              children: "in"
            }), " LinkedIn"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: e => {
              e.stopPropagation();
              handleSocialShare("whatsapp");
            },
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-green-500 font-bold",
              children: "WA"
            }), " WhatsApp"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "h-px bg-gray-100 my-1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: e => {
              e.stopPropagation();
              handleSocialShare("copy");
            },
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: "\uD83D\uDD17"
            }), " Copy Link"]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl transition-all duration-300 ease-in-out ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"} ${toast.icon === "success" ? "bg-green-600" : "bg-gray-900"}`,
      children: [toast.icon === "success" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
          points: "20 6 9 17 4 12"
        })
      }), toast.icon === "info" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "text-xl",
        children: "\u2B50\uFE0F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "text-white font-medium text-sm md:text-base",
        children: toast.message
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);

/***/ }),

/***/ "./src/scripts/components/library/FilterPill.jsx":
/*!*******************************************************!*\
  !*** ./src/scripts/components/library/FilterPill.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const FilterPill = ({
  label,
  count,
  isActive,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
    text: `${label} ${count !== null && count !== undefined ? `(${count})` : ""}`,
    style: isActive ? "categoryActive" : "categoryInactive",
    onClick: onClick,
    className: "whitespace-nowrap"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPill);

/***/ }),

/***/ "./src/scripts/components/library/HighlightedHeading.jsx":
/*!***************************************************************!*\
  !*** ./src/scripts/components/library/HighlightedHeading.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HighlightedHeading)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const highlightedHeadingStyles = {
  h1: "text-4xl font-bold text-dark-neutral"
};
function HighlightedHeading({
  text,
  highlight,
  // string or array
  className,
  highlightClass,
  disableNewlines = false
}) {
  if (!text) return null;

  // Convert literal "\\n" strings
  const formattedText = disableNewlines ? text.replace(/\\n/g, " ") : text.replace(/\\n/g, "\n");

  // Prepare highlights
  const highlightList = Array.isArray(highlight) ? highlight : highlight ? [highlight] : [];

  // Build regex parts
  const patternParts = [...highlightList.map(h => h.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")), !disableNewlines ? "\\n" : null].filter(Boolean);
  const regex = new RegExp(`(${patternParts.join("|")})`, "gi");
  const parts = formattedText.split(regex);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(highlightedHeadingStyles.h1, className),
    children: parts.map((part, i) => {
      // Handle Newlines only if enabled
      if (!disableNewlines && part === "\n") {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}, i);
      }
      const isHighlight = highlightList.some(h => h.toLowerCase() === part.toLowerCase());
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(isHighlight ? `text-[#FF00E5] ${highlightClass || ""}` : ""),
        children: part
      }, i);
    })
  });
}

/***/ }),

/***/ "./src/scripts/components/library/ResponsiveFilterBar.jsx":
/*!****************************************************************!*\
  !*** ./src/scripts/components/library/ResponsiveFilterBar.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var _FilterPill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterPill */ "./src/scripts/components/library/FilterPill.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const MobileFilterDropdown = ({
  options,
  activeId,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "w-full flex justify-end",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "relative inline-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        value: activeId,
        onChange: e => onChange(e.target.value),
        className: `
            appearance-none
            flex flex-row items-center justify-center
            w-[152px] h-8
            pl-2 pr-8 /* Right padding ensures text doesn't overlap icon */
            rounded-lg
            
            /* Typography from Figma */
            font-['Inter'] text-[14px] font-normal leading-4
            text-[#1E2939] text-center
            
            /* Visual Styling from Figma */
            bg-white border-none
            shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-1px_-1px_1px_rgba(154,4,129,0.1)]
            
            /* Focus State */
            focus:outline-none focus:ring-1 focus:ring-[#99008A]
            cursor-pointer
          `,
        children: options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: opt.id,
          children: opt.label
        }, opt.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-[#4F378A]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
          size: 15
        })
      })]
    })
  });
};

// --- Main Responsive Wrapper ---
const ResponsiveFilterBar = ({
  filters,
  activeFilterId,
  onFilterChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "w-full flex justify-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "block md:hidden w-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MobileFilterDropdown, {
        options: filters,
        activeId: activeFilterId,
        onChange: onFilterChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "hidden md:flex flex-row flex-wrap justify-center items-center content-center gap-4 w-full",
      children: filters.map(filter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FilterPill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: filter.label,
        count: filter.count,
        isActive: activeFilterId === filter.id,
        onClick: () => onFilterChange(filter.id)
      }, filter.id))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveFilterBar);

/***/ }),

/***/ "./src/scripts/components/library/SearchBar.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/library/SearchBar.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _styles_search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/search-bar */ "./src/styles/search-bar.jsx");
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const SearchBar = ({
  value = "",
  onChange,
  onClear,
  placeholder = "Enter tracking number...",
  variant = "default",
  size = "default",
  submitLabel = "Search",
  submitIcon,
  showClearButton = true,
  className,
  inputClassName,
  containerClassName,
  translationKey,
  ...props
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();

  // Use translation key if provided, otherwise use submitLabel
  const buttonText = translationKey ? t(translationKey, {
    defaultValue: submitLabel
  }) : submitLabel;
  const outerClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchBarOuterVariants)({
    variant,
    size
  }), className);

  // 2. Classes for the White Form Container
  const innerClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchBarVariants)({
    variant,
    size
  }), containerClassName);
  const inputClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchInputVariants)({
    size
  }), "text-[#1E2939] placeholder-[#99A1AF] italic",
  // Figma: Dark text, Gray italic placeholder
  inputClassName);
  const clearButtonClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchButtonVariants)({
    type: "clear",
    size: "sm"
  }),
  // Force small size for clear X
  "title-clear");
  const submitButtonClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchButtonVariants)({
    type: "submit",
    size
  }), "title-submit");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: outerClasses,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: innerClasses,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "pl-2 pr-1 flex items-center justify-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "text-[#99A1AF]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            d: "M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",
            stroke: "currentColor",
            strokeWidth: "1.66667",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "text",
        placeholder: placeholder,
        value: value,
        onChange: onChange,
        className: inputClasses
      }), showClearButton && value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        onClick: onClear,
        className: clearButtonClasses,
        title: "Clear search",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          className: "w-5 h-5",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            clipRule: "evenodd"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: buttonText,
        className: "title-submit",
        size: "defaultFull"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./src/scripts/components/library/SubPageHero.jsx":
/*!********************************************************!*\
  !*** ./src/scripts/components/library/SubPageHero.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _styles_sub_page_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sub-page-hero */ "./src/styles/sub-page-hero.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // Import styling definition

const SubPageHero = ({
  src,
  srcMobile,
  alt = "Hero image",
  size,
  align,
  className,
  children,
  ...props
}) => {
  // 1. Calculate container styles based on variants
  const containerClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_sub_page_hero__WEBPACK_IMPORTED_MODULE_1__.heroVariants)({
    size
  }), className);

  // 2. Determine image alignment class manually since it applies to the <img> tag, not the container
  //    (Alternatively, you could split the CVA into containerVariants and imageVariants if preferred)
  const imageAlignment = align === "top" ? "object-top" : align === "bottom" ? "object-bottom" : "object-center";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: containerClasses,
    ...props,
    children: [srcMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: srcMobile,
      alt: alt,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("absolute inset-0 w-full h-full object-cover md:hidden", imageAlignment),
      loading: "eager"
    }), src && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: src,
      alt: alt,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("absolute inset-0 w-full h-full object-cover hidden md:block", imageAlignment),
      loading: "eager"
    }), !srcMobile && src && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: src,
      alt: alt,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("absolute inset-0 w-full h-full object-cover md:hidden", imageAlignment),
      loading: "eager"
    }), children && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative z-10 w-full h-full",
      children: children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubPageHero);

/***/ }),

/***/ "./src/scripts/components/pages/blogs/BlogPage.jsx":
/*!*********************************************************!*\
  !*** ./src/scripts/components/pages/blogs/BlogPage.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/SEO */ "./src/scripts/components/ui/SEO.jsx");
/* harmony import */ var _library_ResponsiveFilterBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/ResponsiveFilterBar */ "./src/scripts/components/library/ResponsiveFilterBar.jsx");
/* harmony import */ var _library_BlogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/BlogCard */ "./src/scripts/components/library/BlogCard.jsx");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var _library_SubPageHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/SubPageHero */ "./src/scripts/components/library/SubPageHero.jsx");
/* harmony import */ var _library_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/SearchBar */ "./src/scripts/components/library/SearchBar.jsx");
/* harmony import */ var _ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _library_HighlightedHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../library/HighlightedHeading */ "./src/scripts/components/library/HighlightedHeading.jsx");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);













const BlogPage = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();

  // --- 1. Data Retrieval ---
  const blogs = t("service_headline_section.blogs", {
    returnObjects: true
  }) || [];
  const pageData = t("all_blog_posts_page", {
    returnObjects: true
  }) || {};

  // --- 2. State ---
  const [activeCategoryId, setActiveCategoryId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("all");
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [visibleCount, setVisibleCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(7);

  // --- 3. Derived Data (Categories & Filtering) ---
  const categories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // Helper to get count locally within useMemo
    const getCount = tagId => {
      if (tagId === "all") return blogs.length;
      return blogs.filter(b => (b.tags || []).includes(tagId)).length;
    };

    // Flatten all tags from all blogs
    const allTags = blogs.flatMap(b => b.tags || []);
    const uniqueTags = [...new Set(allTags)].sort();
    return [{
      id: "all",
      label: "All Categories",
      count: getCount("all")
    }, ...uniqueTags.map(tag => ({
      id: tag,
      label: tag,
      count: getCount(tag)
    }))];
  }, [blogs]);
  const filteredBlogs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const sorted = [...blogs].reverse();
    return sorted.filter(post => {
      const matchesTag = activeCategoryId === "all" || (post.tags || []).includes(activeCategoryId);

      // If no search query, show all posts matching category
      if (!searchQuery.trim()) {
        return matchesTag;
      }

      // If search query exists, filter by both tag and search
      const matchesSearch = (post.title || "").toLowerCase().includes(searchQuery.toLowerCase()) || (post.content || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [blogs, activeCategoryId, searchQuery]);

  // Pagination Logic
  const handleLoadMore = () => setVisibleCount(prev => prev + 6);
  const hasMoreItems = visibleCount < filteredBlogs.length;

  // Paginated blogs for grid display
  const paginatedBlogs = filteredBlogs.slice(0, visibleCount);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: t("seo.blog_page.title"),
      description: t("seo.blog_page.description"),
      canonical: t("seo.blog_page.canonical"),
      ogImage: t("seo.blog_page.ogImage")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "w-full bg-white font-sans flex flex-col items-center mb-20",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_SubPageHero__WEBPACK_IMPORTED_MODULE_6__["default"], {
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/blogs/hero/blogs_hero_desktop.webp",
        srcMobile: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/blogs/hero/blogs_hero_mobile.webp",
        alt: "Blog Banner"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("main", {
          className: `mx-auto relative ${_styles_themeGuide__WEBPACK_IMPORTED_MODULE_11__.themeGuide.paddingX} flex flex-col items-center md:px-8 w-full md:gap-y-8 gap-y-4 lg:-mt-6 -mt-10`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "w-full flex flex-col md:gap-y-4 gap-y-2 items-center text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_9__.Badge, {
              variant: "toolkit",
              size: "default",
              children: t("blogs_section.badge", "Blogs and Articles")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "w-full flex flex-col md:gap-y-4 gap-y-2 items-center text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_HighlightedHeading__WEBPACK_IMPORTED_MODULE_10__["default"], {
                text: `${pageData.title_section.title_prefix} ${pageData.title_section.title_suffix}`,
                highlight: pageData.title_section.title_suffix,
                className: "text-2xl 2xl:text-4xl font-semibold mt-2 text-center",
                highlightClass: "text-[#FF00E5]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                className: "flex items-center justify-center text-center mx-auto w-full font-['Inter'] font-normal text-[#63666D] opacity-90 text-sm leading-[1.125] max-w-[376px] md:text-base md:leading-5 md:max-w-[522px] lg:max-w-[822px] md:mb-0 mb-4",
                children: pageData.title_section?.subtitle
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
              value: searchQuery,
              onChange: e => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim() && activeCategoryId !== "all") {
                  setActiveCategoryId("all");
                }
              },
              onClear: () => setSearchQuery(""),
              placeholder: pageData.placeholder || "Start typing to find blogs and articles...",
              submitLabel: "Search",
              translationKey: "blog_page.searchButton",
              className: "w-full lg:w-[822px] lg:mx-auto md:w-xl md:mx-auto"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "w-full flex flex-col items-center gap-4 lg:py-5 md:py-4 py-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("h3", {
              className: "hidden md:inline lg:inline font-['Inter'] font-bold text-base leading-5 items-center text-center text-black gap-y-2 md:gap-y-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: "md:hidden",
                children: pageData.filter_section?.title || "Filter by:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: "hidden md:inline",
                children: pageData.filter_section?.title || "Select a Category"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_ResponsiveFilterBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
              filters: categories,
              activeFilterId: activeCategoryId,
              onFilterChange: setActiveCategoryId
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "w-full flex flex-col",
            children: [filteredBlogs.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: "text-center py-10 text-gray-400",
              children: "No articles found matching your criteria."
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full",
              children: paginatedBlogs.map(post => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
                to: `/blog/${post.slug}`,
                className: "no-underline",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_BlogCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  post: post,
                  variant: "fluid"
                })
              }, post.slug))
            }), hasMoreItems && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: "text-center mt-8 md:mt-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button", {
                onClick: handleLoadMore,
                className: "group relative inline-flex items-center justify-center p-px rounded-full bg-linear-to-b from-[#FF00E5] to-[#4F378A] transition-transform active:scale-95",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                  className: "block w-full h-full rounded-full bg-white text-[#1A1A1A] px-6 py-3 md:px-2 md:py-1 text-lg md:text-sm font-medium transition-all duration-300 group-hover:bg-transparent group-hover:text-white",
                  children: "Load More Articles"
                })
              })
            })]
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);

/***/ }),

/***/ "./src/scripts/components/ui/ParallaxSection.jsx":
/*!*******************************************************!*\
  !*** ./src/scripts/components/ui/ParallaxSection.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParallaxSection)
/* harmony export */ });
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
"use client";




function ParallaxSection({
  children,
  className = "",
  distance = 150,
  // how far it moves up/down
  stiffness = 120,
  damping = 12,
  mass = 0.8,
  once = false
}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const {
    scrollYProgress
  } = (0,motion_react__WEBPACK_IMPORTED_MODULE_1__.useScroll)({
    target: ref,
    offset: ["start end", "end start"] // start entering -> start leaving
  });

  // Map scroll progress (0 to 1) to y movement
  const y = (0,motion_react__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [0, 0.5, 1], [distance, 0, -distance]);
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(motion_react__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
    ref: ref,
    className: className,
    style: {
      y,
      opacity: 1
    },
    transition: {
      type: "spring",
      stiffness,
      damping,
      mass
    },
    viewport: {
      once,
      amount: 0.2
    },
    children: children
  });
}

/***/ }),

/***/ "./src/scripts/components/ui/SEO.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/components/ui/SEO.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website"
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const currentPath = location.pathname;
  const baseUrl = "https://shipx.asia";
  const canonicalUrl = canonical || `${baseUrl}${currentPath}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link", {
      rel: "canonical",
      href: canonicalUrl
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:type",
      content: ogType
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:url",
      content: canonicalUrl
    }), ogImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:image",
      content: ogImage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:title",
      content: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:description",
      content: description
    }), ogImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:image",
      content: ogImage
    }), _utils_constants__WEBPACK_IMPORTED_MODULE_2__.hreflang.map(lang => {
      if (lang.key === "en") return null;
      const href = `${baseUrl}/${lang.key}${currentPath.replace(/^\/+/, "")}`;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link", {
        rel: "alternate",
        hrefLang: lang.key,
        href: href
      }, lang.key);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link", {
      rel: "alternate",
      hrefLang: "x-default",
      href: canonicalUrl
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/scripts/components/ui/SmartNavLink.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/ui/SmartNavLink.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../i18n */ "./src/i18n.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SmartNavLink = ({
  to = "/",
  end = false,
  className,
  children,
  delay = 1000,
  onClick,
  // New prop: defaults to 'start' (top). Options: 'top', 'bottom', 'center', 'nearest'
  scrollAlign = "start"
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();

  // Prepend language prefix if not default
  const langPrefix = _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language !== "en" ? `/${_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language}` : "";
  let fullPath = to.startsWith("/") ? `${langPrefix}${to}` : `${langPrefix}/${to}`;

  // Remove double slashes if any
  fullPath = fullPath.replace(/\/+/g, "/");

  // Helper to map user-friendly terms to scrollIntoView API terms
  const getBlockAlign = align => {
    if (align === "top") return "start";
    if (align === "bottom") return "end";
    return align; // Returns 'center', 'nearest', 'start', or 'end' as is
  };
  const handleClick = e => {
    const [pathname, hash] = fullPath.split("#");
    const isSamePath = location.pathname === pathname;

    // If an external onClick handler is provided, execute it.
    if (onClick) {
      onClick(e);
    }
    if (hash) {
      e.preventDefault();
      const scrollOptions = {
        behavior: "smooth",
        block: getBlockAlign(scrollAlign)
      };
      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) target.scrollIntoView(scrollOptions);
        }, 300);
      } else {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView(scrollOptions);
      }
      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    } else {
      // Logic for non-hash links (scrolls to absolute top of page)
      if (isSamePath) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setTimeout(() => {
          window.history.replaceState(null, "", location.pathname);
        }, delay);
      } else {
        e.preventDefault();
        navigate(pathname);
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          window.history.replaceState(null, "", pathname);
        }, 300);
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.NavLink, {
    to: fullPath,
    end: end,
    className: className,
    onClick: handleClick,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartNavLink);

/***/ }),

/***/ "./src/styles/badge.jsx":
/*!******************************!*\
  !*** ./src/styles/badge.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   badgeVariants: () => (/* binding */ badgeVariants)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)([
// Base Layout
"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
// Vertical alignment fixes for icons/dots
"align-middle gap-1.5"].join(" "), {
  variants: {
    variant: {
      // 1. Solid Pink "NEW" - Top
      new: "border-transparent bg-(--badge-pink) rounded text-white shadow-sm w-fit",
      // 2. Light Purple Badge
      secondary: "border-transparent bg-(--badge-gray-2) text-(--badge-text-dark) rounded w-fit",
      // 3. Soft Pink Toolkit Badge
      toolkit: "border-transparent bg-(--badge-gray) text-(--badge-pink) font-semibold text-md w-fit",
      // 4. International Express (Standard/Default - Solid Dark Blue)
      default: "border-transparent bg-(--badge-purple) text-white font-semibold text-md w-fit",
      // 5. Outline "NEW" - Bottom
      outline: "border-transparent bg-(--badge-gray-light) rounded text-(--badge-text-purple-light) w-fit",
      // Destructive (Standard error state)
      destructive: "border-transparent bg-red-500 text-white shadow-sm w-fit",
      // Affiliate Amilo
      affiliate: "border-transparent bg-(--badge-light-purple) text-(--badge-text-gray) font-light rounded w-fit",
      // Affiliate Orange
      affiliateOrange: "border-transparent bg-(--badge-orange) text-(--badge-text-gray) font-light rounded w-fit"
    },
    size: {
      sm: "px-2 py-1 text-xs",
      default: "px-4 py-1 text-base",
      lg: "px-6 py-3 text-base"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Badge({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(badgeVariants({
      variant,
      size
    }), className),
    ...props,
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [variant === "toolkit" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "h-2 w-2 rounded-full bg-(--badge-pink) mr-1"
    }), children]
  });
}


/***/ }),

/***/ "./src/styles/blog-card.jsx":
/*!**********************************!*\
  !*** ./src/styles/blog-card.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardBadge: () => (/* binding */ CardBadge),
/* harmony export */   CardBody: () => (/* binding */ CardBody),
/* harmony export */   CardCategory: () => (/* binding */ CardCategory),
/* harmony export */   CardDate: () => (/* binding */ CardDate),
/* harmony export */   CardExcerpt: () => (/* binding */ CardExcerpt),
/* harmony export */   CardFooter: () => (/* binding */ CardFooter),
/* harmony export */   CardImage: () => (/* binding */ CardImage),
/* harmony export */   CardImageWrapper: () => (/* binding */ CardImageWrapper),
/* harmony export */   CardMetaRow: () => (/* binding */ CardMetaRow),
/* harmony export */   CardReadMore: () => (/* binding */ CardReadMore),
/* harmony export */   CardRoot: () => (/* binding */ CardRoot),
/* harmony export */   CardShareButton: () => (/* binding */ CardShareButton),
/* harmony export */   CardTitle: () => (/* binding */ CardTitle)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const cardVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("group flex md:flex-col flex-row h-full w-full md:rounded-2xl rounded-lg justify-between transition-transform duration-300 hover:scale-105 active:scale-90", {
  variants: {
    variant: {
      default: "md:max-w-sm p-4 md:p-4 gap-4 md:gap-0 border-none bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24",
      section: "p-4 md:p-4 gap-4 md:gap-0 border-none bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24",
      fluid: "p-4 md:p-4 gap-4 md:gap-0 border-none bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const CardRoot = ({
  className,
  variant,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("article", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(cardVariants({
    variant
  }), className),
  style: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
  },
  ...props
});

// --- 2. Image Components ---
const CardImageWrapper = ({
  className,
  variant,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(variant === "section" ? "relative md:mb-4 md:w-full shrink-0 w-1/2 h-auto md:h-52" : "relative md:mb-4 md:w-full shrink-0 w-1/2 h-auto", className),
  ...props
});
const CardImage = ({
  className,
  variant,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("w-full h-full object-cover md:rounded-2xl rounded-lg", className),
  loading: "lazy",
  ...props
});

// --- 3. Badge (Specific to Blog Card) ---
const cardBadgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("absolute top-4 right-4 text-[10px] md:text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wide shadow-sm z-10", {
  variants: {
    variant: {
      new: "bg-[#FF00E5] text-white",
      // Your specific pink
      default: "bg-gray-100 text-gray-800"
    }
  },
  defaultVariants: {
    variant: "new"
  }
});
const CardBadge = ({
  className,
  variant,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(cardBadgeVariants({
    variant
  }), className),
  ...props
});

// --- 4. Content Wrappers ---
const CardBody = ({
  className,
  variant,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(variant === "section" ? "flex flex-col grow w-1/2 md:w-auto px-1 md:px-1 gap-2 md:gap-3" : "flex flex-col grow w-1/2 md:w-auto px-1 md:px-1 gap-2 md:gap-3", className),
  ...props
});
const CardMetaRow = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("hidden md:flex items-center justify-between text-sm", className),
  ...props
});

// --- 5. Category Tag ---
const categoryVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("px-3 py-1 rounded-lg text-[10px] md:text-xs font-semibold", {
  variants: {
    variant: {
      default: "bg-[#F8E3F5] text-[#99008A]" // Your specific purple/pink combo
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const CardCategory = ({
  className,
  variant,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(categoryVariants({
    variant
  }), className),
  ...props
});

// --- 6. Typography ---
const CardDate = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-gray-500 text-[10px] md:text-xs font-medium", className),
  ...props
});
const CardTitle = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-sm md:text-lg font-bold text-[#121212] leading-tight group-hover:text-[#CC00B7] transition-colors line-clamp-4", className),
  ...props
});
const CardExcerpt = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("hidden md:block text-gray-600 text-sm leading-relaxed line-clamp-3 grow", className),
  ...props
});

// --- 7. Footer & Actions ---
const CardFooter = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex items-center justify-between mt-4 pt-2 border-pink-100/50", className),
  ...props
});
const CardReadMore = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex items-center text-(--badge-dark-purple) font-semibold text-sm hover:text-(--badge-dark-purple)/80 transition-colors", className),
  ...props
});
const CardShareButton = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-(--badge-dark-purple) hover:bg-[#F8E3F5] p-2 rounded-full transition-colors", className),
  ...props
});

/***/ }),

/***/ "./src/styles/button.jsx":
/*!*******************************!*\
  !*** ./src/styles/button.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @radix-ui/react-slot */ "./node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.cva)([
// Layout & Flexbox
"inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0",
// Appearance
"rounded-md font-normal",
// Transitions & Base Interaction
"transition-all outline-none",
// Focus States
"focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
// Disabled States
"disabled:pointer-events-none disabled:opacity-50",
// Validation / Error States
"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
// Child Element Overrides (SVG icons)
"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"].join(" "), {
  variants: {
    variant: {
      default: "bg-gray-200 text-foreground hover:bg-violet-300/70",
      tabDefault: "bg-background text-foreground hover:bg-gray-200",
      destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      primary: [
      // Layout & Shape
      "flex flex-row justify-center items-center gap-1 rounded-[8px] transition-all duration-300 cursor-pointer",
      // Typography
      "font-['Inter'] font-normal text-white",
      // DEFAULT STATE
      "bg-[linear-gradient(103.43deg,#4F378A_9.78%,#CC00B7_84.11%)]", "shadow-[2px_2px_4px_rgba(20,0,99,0.3),inset_2px_2px_3px_rgba(255,255,255,0.4)]",
      // HOVER STATE
      "hover:bg-[linear-gradient(103.43deg,#6D4CBF_9.78%,#E000CA_84.11%)]", "hover:shadow-[0px_0px_12px_rgba(255,0,229,0.5),inset_2px_2px_3px_rgba(255,255,255,0.5)]", "hover:scale-[1.01]",
      // EXACT ACTIVE STATE (Uniform Gradient Fix)
      "active:scale-[0.98]", "active:font-bold",
      // We use a "flat" gradient of the same color to keep the background-image property occupied
      "active:bg-[linear-gradient(103.43deg,#CC00B7_0%,#CC00B7_100%)]",
      // Complex Shadow Stack from Figma
      "active:shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"].join(" "),
      secondary: ["bg-white hover:bg-secondary-hover active:bg-secondary-active", "border border-violet-300 active:border-secondary-active", "text-primary active:text-white cursor-pointer font-normal", "shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)]"].join(" "),
      tertiary: ["bg-white hover:bg-secondary-hover active:bg-secondary-active cursor-pointer p-0", "text-primary active:text-white cursor-pointer font-normal", "shadow-[1px_1px_4px_rgba(20,0,99,0.3),inset_-1px_-1px_1px_rgba(154,4,129,0.15)]"].join(" "),
      quaternary: [
      // Layout & sizing (matches Figma)
      "flex flex-row items-center justify-center gap-1", "h-[36px] px-4 rounded-[8px]",
      // Typography
      "font-['Inter'] font-normal text-[#CC00B7]",
      // Default state (bg-white look with subtle tint)
      "bg-white", "border border-[rgba(204,0,183,0.16)]", "shadow-none",
      // Hover state (pink link-like highlight)
      "hover:bg-[rgba(204,0,183,0.06)]", "hover:border-[rgba(204,0,183,0.32)]",
      // Active state
      "active:bg-[rgba(204,0,183,0.12)]", "active:scale-[0.98]",
      // Transitions
      "transition-all duration-200 cursor-pointer"].join(" "),
      categoryInactive: ["bg-white hover:bg-secondary-hover active:bg-secondary-active", "border-none", "text-primary active:text-white cursor-pointer font-normal text-[#1E2939]", "shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)]"].join(" "),
      categoryActive: ["bg-[#CC00B7] hover:bg-[#E000CA] active:bg-[#CC00B7]", "text-white font-bold cursor-pointer", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]", "transition-all duration-300"].join(" "),
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",
      tabActive: ["bg-[#CC00B7]", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]", "text-white font-medium"].join(" "),
      tabInactive: ["bg-transparent text-white/90 font-normal hover:bg-white/5"].join(" "),
      // This matches your secondary code snippet for "HS Code Generator" style (bordered active state)
      tabBorderedActive: ["bg-[rgba(204,0,183,0.2)] border border-[#FF00E5]", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"].join(" "),
      toolsHeroActive: ["flex flex-row justify-center items-center gap-2 bg-[#CC00B7] text-white rounded-lg font-semibold", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"].join(" "),
      toolsHeroInactive: ["flex flex-row justify-center items-center gap-2 bg-transparent text-white rounded-lg font-semibold"].join(" "),
      toolsHeroMobileActive: ["flex flex-col justify-center items-center gap-2 bg-[#CC00B7] text-white rounded-lg font-semibold whitespace-normal break-words text-center", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"].join(" "),
      toolsHeroMobileInactive: ["flex flex-col justify-center items-center gap-2 bg-transparent text-white rounded-lg font-semibold whitespace-normal break-words text-center"].join(" ")
    },
    size: {
      default: "text-sm md:text-base h-9 px-4 py-2.5 has-[>svg]:px-3",
      defaultFull: "text-sm md:text-base h-full px-4 py-2.5 has-[>svg]:px-3",
      tab: "text-sm md:text-base h-full px-4 py-2.5",
      sm: "text-xs md:text-sm h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "text-base md:text-lg h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_0__.Slot : "button";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Comp, {
    "data-slot": "button",
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(buttonVariants({
      variant,
      size,
      className
    })),
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    ...props
  });
}


/***/ }),

/***/ "./src/styles/search-bar.jsx":
/*!***********************************!*\
  !*** ./src/styles/search-bar.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchBarOuterVariants: () => (/* binding */ searchBarOuterVariants),
/* harmony export */   searchBarVariants: () => (/* binding */ searchBarVariants),
/* harmony export */   searchButtonVariants: () => (/* binding */ searchButtonVariants),
/* harmony export */   searchInputVariants: () => (/* binding */ searchInputVariants)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");


// 1. New: The Outer Gradient Wrapper
const searchBarOuterVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("flex flex-col justify-center items-start transition-all w-full", {
  variants: {
    variant: {
      default: "bg-[linear-gradient(135deg,rgba(255,230,255,0.05)_0%,rgba(170,0,255,0.15)_100%)] rounded-2xl",
      minimal: "bg-transparent"
    },
    size: {
      sm: "p-3 gap-2",
      default: "p-[16px] gap-[8px]",
      // Figma: padding 16px, gap 8px
      lg: "p-5 gap-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

// 2. Updated: The Inner White Input Box
const searchBarVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("flex flex-row items-center bg-white transition-all w-full box-border", {
  variants: {
    variant: {
      default: "border-b border-[#7F22FE] rounded-lg shadow-sm",
      // Figma: border-bottom purple
      minimal: "border border-gray-200 rounded-lg"
    },
    size: {
      sm: "h-[40px] p-1 gap-2",
      default: "h-[57px] p-[4px] gap-[8px]",
      // Figma: height ~57px, padding 4px
      lg: "h-[64px] p-2 gap-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const searchInputVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("grow w-full bg-transparent focus:outline-none transition-colors font-inter", {
  variants: {
    size: {
      sm: "text-sm placeholder:text-sm",
      default: "text-[16px] placeholder:text-[16px] leading-[20px]",
      // Figma: 16px Inter
      lg: "text-lg placeholder:text-lg"
    }
  },
  defaultVariants: {
    size: "default"
  }
});

// 3. Updated: The Purple Submit Button
const searchButtonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300", {
  variants: {
    type: {
      clear: "hover:opacity-60 text-[#99A1AF] p-2",
      submit:
      // Figma: Complex gradient + Specific Shadow
      "bg-[linear-gradient(103.43deg,rgba(255,0,230,0)_9.78%,rgba(255,0,229,0.75)_84.11%),#4F378A] shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_-2px_-2px_4px_#9A00AE,inset_0px_0px_4px_rgba(255,88,238,0.6)] text-white font-medium hover:brightness-110 active:scale-95"
    },
    size: {
      sm: "h-[32px] px-3 rounded-md",
      default: "h-[48px] px-4 rounded-lg min-w-[85px]",
      // Figma: height ~48px, width 85px
      lg: "h-[56px] px-6 rounded-lg"
    }
  },
  defaultVariants: {
    type: "submit",
    size: "default"
  }
});

/***/ }),

/***/ "./src/styles/sub-page-hero.jsx":
/*!**************************************!*\
  !*** ./src/styles/sub-page-hero.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   heroVariants: () => (/* binding */ heroVariants)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");

const heroVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)(
// Base styles applied to all variants
"relative w-full bg-[#F7F7F7] overflow-hidden", {
  variants: {
    // Variant: Controls the height/size of the hero section
    size: {
      default: "h-[242px] md:h-[314px] xl:h-[350px]",
      // Responsive sizing from Figma
      sm: "h-[200px]",
      lg: "h-[450px]",
      toolsHeroMobile: "h-fit md:h-[300px]",
      fullscreen: "h-screen"
    },
    // Variant: Controls how the image is positioned
    align: {
      center: "object-center",
      top: "object-top",
      bottom: "object-bottom"
    }
  },
  defaultVariants: {
    size: "default",
    align: "center"
  }
});

/***/ }),

/***/ "./src/styles/themeGuide.js":
/*!**********************************!*\
  !*** ./src/styles/themeGuide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   themeGuide: () => (/* binding */ themeGuide)
/* harmony export */ });
const themeGuide = {
  // Padding
  paddingX: "lg:px-24 md:px-8 px-8",
  paddingY: "lg:py-5 md:py-5 py-5",
  sectionPaddingY: "xl:py-[128px] md:py-[64px] py-[48px]",
  sectionPaddingX: "xl:px-[122px]",
  // Typography - Headings
  pageTitle: "text-4xl font-extrabold tracking-tight",
  pageTitleAccent: "text-secondary",
  sectionHeading: "text-3xl font-semibold tracking-tight text-foreground",
  sectionHeadingAccent: "text-secondary",
  // Typography - Body
  sectionDescription: "text-foreground text-base",
  bodyText: "text-foreground text-base",
  // Form / Input Elements
  inputHeading: "text-foreground text-base leading-tight font-semibold",
  inputDescription: "text-muted-foreground text-sm leading-tight",
  inputPlaceholder: "placeholder:text-placeholder text-placeholder text-base md:text-sm",
  // Call to Action (CTA)
  ctaHeading: "lg:text-[40px] md:text-3xl text-2xl font-semibold tracking-tight leading-none",
  ctaDescription: "lg:text-lg md:text-md text-sm leading-tight",
  // Header
  headerTagline: "text-base text-dark-neutral font-normal",
  headerLinks: "text-base text-dark-neutral font-medium",
  headerLanguageItem: "text-md text-dark-neutral font-normal",
  // Footer
  footerTagline: "text-lg font-bold leading-tight text-dark-neutral",
  footerBody: "text-sm leading-sm font-normal text-dark-neutral",
  footerHeading: "text-base font-bold text-secondary",
  footerItem: "text-sm text-medium-neutral hover:text-foreground leading-none",
  footerIcon: "w-5 h-5",
  // Buttons & UI
  // Note: These often need base button classes + variant classes
  buttonPrimary: "rounded-md text-sm font-medium mainButton inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 min-h-12 px-4 py-2 has-[>svg]:px-3",
  buttonNormal: "bg-gray-200 text-foreground hover:bg-violet-300/70 h-9 px-4 py-2 rounded-md",
  buttonFooterCTA: "bg-white/15 text-white text-base font-normal border border-white/95 rounded-[19px] md:py-[7px] md:px-[30px] cursor-pointer",
  badge: "text-secondary flex items-center gap-1 rounded-md px-4 py-2 text-sm font-bold w-fit bg-[var(--badge-bg)] text-[var(--badge-text)]",
  // Shipment Tracker
  toolsHeroTitle: "font-['Inter'] font-semibold text-white tracking-[-1px] lg:text-[40px] text-[32px]",
  toolsHeroDescription: "font-['Inter'] font-normal text-white md:text-[16px] text-[14px] opacity-90",
  // Section Introduction
  sectionHeading: "lg:text-[32px] text-[28px] font-bold text-[#1E2939]",
  sectionDescription: "md:text-[16px] text-[14px] font-normal text-[#63666D]/75",
  // Input labels
  inputLabel: "font-['Inter'] md:text-[16px] text-[14px] font-semibold text-[#1E2939]",
  inputLabelNote: "font-['Inter'] md:text-[16px] text-[14px] font-normal text-[#4D525C]/90",
  inputPlaceholder: "font-['Inter'] md:text-[16px] text-[14px] font-normal text-[#99A1AF]"
};

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_pages_blogs_BlogPage_jsx.js.map?ver=39792a466e88ab576fe6