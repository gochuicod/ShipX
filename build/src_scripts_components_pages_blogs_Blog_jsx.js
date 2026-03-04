"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_blogs_Blog_jsx"],{

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js":
/*!************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleArrowRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
];
const CircleArrowRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("circle-arrow-right", __iconNode);


//# sourceMappingURL=circle-arrow-right.js.map


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
  // New props for custom icon styling
  leftIconClassName,
  rightIconClassName,
  iconRounded = false,
  to,
  className,
  // New prop to control scroll behavior (passed to SmartNavLink)
  // Options: 'top', 'center', 'bottom'
  scrollAlign,
  ...rest
}) {
  // Updated to accept a specific className for the icon being rendered
  const renderIcon = (Icon, extraClassName) => {
    if (!Icon) return null;
    const isUrl = typeof Icon === "string";
    const roundingClass = iconRounded ? "rounded-full" : "rounded-lg";
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(appButtonStyles.iconWrapper, roundingClass, extraClassName // Merge the custom class here (e.g., shadow-md)
      ),
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
    children: [withLeftIcon && renderIcon(leftIcon, leftIconClassName), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "leading-tight",
      children: text
    }), withRightIcon && renderIcon(rightIcon, rightIconClassName)]
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _styles_blog_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/blog-card */ "./src/styles/blog-card.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/share-2.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);







const BlogCard = ({
  post: postProp,
  variant = "default"
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const [showShareMenu, setShowShareMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [toast, setToast] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    show: false,
    message: "",
    icon: ""
  });
  const shareMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Fetch blogs from JSON via i18n
  const blogs = t("service_headline_section.blogs", {
    returnObjects: true
  }) || [];

  // Detect screen size
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Helper Logic
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
      showToast("Unable to copy link. Please copy manually.", "error");
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
            showToast("Link copied!", "success");
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

  // Data Destructuring
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
  const blogUrl = slug.startsWith("http") ? slug : `${window.location.origin}/blog/${slug}`;
  const handleNavigate = () => {
    navigate(`/blog/${slug}`);
  };

  // Share Menu Content
  const ShareMenuContent = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.ShareMenuDropdown, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.ShareMenuButton, {
      platform: "facebook",
      onClick: e => {
        e.stopPropagation();
        handleSocialShare("facebook");
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "text-blue-600 font-bold",
        children: "f"
      }), " Facebook"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.ShareMenuButton, {
      platform: "twitter",
      onClick: e => {
        e.stopPropagation();
        handleSocialShare("twitter");
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "text-black font-bold",
        children: "X"
      }), " Twitter"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.ShareMenuButton, {
      platform: "linkedin",
      onClick: e => {
        e.stopPropagation();
        handleSocialShare("linkedin");
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "text-blue-700 font-bold",
        children: "in"
      }), " LinkedIn"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.ShareMenuButton, {
      platform: "whatsapp",
      onClick: e => {
        e.stopPropagation();
        handleSocialShare("whatsapp");
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "text-green-500 font-bold",
        children: "WA"
      }), " WhatsApp"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.ShareMenuDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.ShareMenuButton, {
      platform: "copy",
      onClick: e => {
        e.stopPropagation();
        handleSocialShare("copy");
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        children: "\uD83D\uDD17"
      }), " Copy Link"]
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardRoot, {
    variant: variant,
    isMobile: isMobile,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardImageContainer, {
      onClick: handleNavigate,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardImageWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardImage, {
          src: cover,
          alt: title
        }), isNew && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardBadge, {
          variant: "new",
          children: "NEW"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardBody, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardMetaRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_3__.Badge, {
          variant: "secondary",
          size: "sm",
          children: category
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardDate, {
          children: date
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {
        onClick: handleNavigate,
        className: "cursor-pointer",
        children: title
      }), !isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardExcerpt, {
        children: getTruncatedContent(content, 150)
      }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardMobileDate, {
        children: date
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardReadMore, {
          onClick: handleNavigate,
          className: "cursor-pointer",
          children: [t("blogs_section.read_more_button", "Read More"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "w-4 h-4"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.ShareMenuWrapper, {
          ref: shareMenuRef,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.CardShareButton, {
            onClick: e => {
              e.preventDefault();
              e.stopPropagation();
              setShowShareMenu(!showShareMenu);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "w-4 h-4"
            })
          }), showShareMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShareMenuContent, {})]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles_blog_card__WEBPACK_IMPORTED_MODULE_2__.Toast, {
      visible: toast.show,
      icon: toast.icon,
      children: [toast.icon === "success" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        width: "20",
        height: "20",
        className: "text-white"
      }), toast.icon === "info" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "text-xl",
        children: "\u2B50\uFE0F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        className: "text-white font-medium text-sm",
        children: toast.message
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);

/***/ }),

/***/ "./src/scripts/components/library/ShareSection.jsx":
/*!*********************************************************!*\
  !*** ./src/scripts/components/library/ShareSection.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const ShareSection = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const [showShareMenu, setShowShareMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [toast, setToast] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    show: false,
    message: "",
    icon: ""
  });
  const shareMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

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

  // --- TOAST HELPER ---
  const showToast = (message, icon) => {
    setToast({
      show: true,
      message,
      icon
    });
    // Hide toast after 3 seconds
    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        icon: ""
      });
    }, 3000);
  };

  // --- SOCIAL SHARE LOGIC ---
  const handleSocialShare = platform => {
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
          navigator.clipboard.writeText(window.location.href).then(() => {
            setShowShareMenu(false);
            showToast("Link copied to clipboard!", "success");
          }).catch(() => {
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
      console.log("Fallback copy failed:", err);
      showToast("Unable to copy link. Please copy manually from the address bar.", "error");
    }
    document.body.removeChild(textArea);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "bg-[#F6F3FF] rounded-3xl mx-auto w-full md:w-3/4 px-4 md:px-8 py-8 md:py-8 mt-16 flex flex-col items-center justify-center gap-4 text-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
      className: "font-bold text-xl md:text-2xl text-[#1A1A1A] tracking-tight letter-spacing-[-1px] whitespace-nowrap",
      children: [t("share_section.title_prefix"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "text-[#FF00E5]",
        children: t("share_section.title_suffix")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-row gap-2 md:gap-4 mt-2 w-full max-w-sm md:max-w-none items-center justify-center mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "relative md:flex-none",
        ref: shareMenuRef,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          onClick: () => setShowShareMenu(!showShareMenu),
          className: "w-full h-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
            text: t("share_section.share"),
            style: "secondary",
            withLeftIcon: true,
            className: "text-xs md:text-sm px-2 md:px-4 py-1 md:py-2",
            leftIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "#CC00B7",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
                cx: "18",
                cy: "5",
                r: "3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
                cx: "6",
                cy: "12",
                r: "3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
                cx: "18",
                cy: "19",
                r: "3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
                x1: "8.59",
                y1: "13.51",
                x2: "15.42",
                y2: "17.49",
                stroke: "#CC00B7",
                strokeWidth: "2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
                x1: "15.41",
                y1: "6.51",
                x2: "8.59",
                y2: "10.49",
                stroke: "#CC00B7",
                strokeWidth: "2"
              })]
            })
          })
        }), showShareMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "absolute top-12 left-0 bg-white shadow-xl border border-gray-100 rounded-xl p-2 flex flex-col gap-1 min-w-40 z-50 text-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: () => handleSocialShare("facebook"),
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-blue-600 font-bold",
              children: "f"
            }), " Facebook"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: () => handleSocialShare("twitter"),
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-black font-bold",
              children: "X"
            }), " Twitter"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: () => handleSocialShare("linkedin"),
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-blue-700 font-bold",
              children: "in"
            }), " LinkedIn"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: () => handleSocialShare("whatsapp"),
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-green-500 font-bold",
              children: "WA"
            }), " WhatsApp"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "h-px bg-gray-100 my-1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            onClick: () => handleSocialShare("copy"),
            className: "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: "\uD83D\uDD17"
            }), " Copy Link"]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "relative md:flex-none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          text: t("share_section.bookmark"),
          style: "secondary",
          withLeftIcon: true,
          className: "text-xs md:text-sm px-2 md:px-4 py-1 md:py-2",
          leftIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "#CC00B7",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
            })
          }),
          onClick: handleBookmark
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `fixed bottom-8 left-1/2 -translate-x-1/2 z-100 flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl transition-all duration-300 ease-in-out ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"} ${toast.icon === "success" ? "bg-green-600" : "bg-gray-900"}`,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareSection);

/***/ }),

/***/ "./src/scripts/components/pages/blogs/Blog.jsx":
/*!*****************************************************!*\
  !*** ./src/scripts/components/pages/blogs/Blog.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/SEO */ "./src/scripts/components/ui/SEO.jsx");
/* harmony import */ var _not_found_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../not_found/NotFound */ "./src/scripts/components/pages/not_found/NotFound.jsx");
/* harmony import */ var _MoreBlogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MoreBlogs */ "./src/scripts/components/pages/blogs/MoreBlogs.jsx");
/* harmony import */ var _library_ShareSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/ShareSection */ "./src/scripts/components/library/ShareSection.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










// Helper to parse the raw HTML string into structured blocks

const parseContent = htmlString => {
  if (!htmlString) return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const children = Array.from(doc.body.childNodes);
  const blocks = [];
  let currentBuffer = [];
  children.forEach(node => {
    // If it's an image, flush the buffer as a full-width text block, then add the image
    if (node.tagName === "IMG") {
      if (currentBuffer.length > 0) {
        blocks.push({
          type: "text_full",
          content: currentBuffer.map(n => n.outerHTML || n.textContent).join("")
        });
        currentBuffer = [];
      }
      blocks.push({
        type: "image",
        src: node.getAttribute("src"),
        alt: node.getAttribute("alt")
      });
    } else if (node.tagName === "SECTION") {
      // Handle sections - extract images and text separately
      const sectionChildren = Array.from(node.childNodes);
      const sectionImages = [];
      const sectionText = [];
      sectionChildren.forEach(child => {
        if (child.tagName === "IMG") {
          // Flush any accumulated text before adding image
          if (sectionText.length > 0) {
            if (currentBuffer.length > 0) {
              blocks.push({
                type: "text_full",
                content: currentBuffer.map(n => n.outerHTML || n.textContent).join("")
              });
              currentBuffer = [];
            }
            blocks.push({
              type: "text_full",
              content: sectionText.map(n => n.outerHTML || n.textContent).join("")
            });
            sectionText.length = 0;
          }
          // Add the image
          blocks.push({
            type: "image",
            src: child.getAttribute("src"),
            alt: child.getAttribute("alt")
          });
        } else {
          sectionText.push(child);
        }
      });

      // Flush remaining section text to current buffer
      if (sectionText.length > 0) {
        currentBuffer.push(...sectionText);
      }
    } else {
      // It's text, paragraphs, uls, etc.
      currentBuffer.push(node);
    }
  });

  // Flush remaining text
  if (currentBuffer.length > 0) {
    blocks.push({
      type: "text_full",
      content: currentBuffer.map(n => n.outerHTML || n.textContent).join("")
    });
  }

  // Post-processing: Keep images and text as separate blocks
  // Don't pair images with following text - let them render independently
  const finalLayout = blocks;
  return finalLayout;
};
const Blog = () => {
  const {
    slug
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useParams)();
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const loadBlog = () => {
    setLoading(true);
    const blogs = JSON.parse(JSON.stringify(t("service_headline_section.blogs", {
      returnObjects: true
    }))) || [];
    const foundPost = blogs.find(b => b.slug === slug) || null;
    setPost(foundPost);
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadBlog();
    const handleLangChange = () => loadBlog();
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, [slug, i18n.language]);

  // Memoize the parsing so it doesn't run on every re-render
  const contentBlocks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!post?.content) return [];
    return parseContent(post.content);
  }, [post]);
  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: "min-h-screen flex items-center justify-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
      children: "Loading blog..."
    })
  });
  if (!post) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_not_found_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: post.title,
      description: post.content.slice(0, 120),
      canonical: `https://shipx.asia/blog/${slug}`,
      ogImage: post.cover
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("style", {
      children: `@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap');`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "w-full bg-white font-['Inter']",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("article", {
        className: "mx-auto px-4 sm:px-8 lg:px-24 py-16 max-w-[1248px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex flex-col gap-2 items-center sm:items-start max-w-[1034px] mx-auto mb-16",
          children: [post.tags && post.tags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "flex flex-row items-center gap-1.5",
            children: post.tags.slice(0, 2).map((tag, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_7__.Badge, {
              variant: "secondary",
              size: "sm",
              children: tag
            }, index))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
            className: "text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#121212] leading-10 sm:leading-10 lg:leading-[3rem] tracking-tight text-center sm:text-left",
            children: post.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "flex flex-row items-center gap-6 pt-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "text-sm sm:text-base text-[#4D525C]",
              children: post.author
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "text-sm sm:text-base text-[#4D525C]",
              children: post.date
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "w-full max-w-[1248px] mx-auto h-48 sm:h-80 lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden relative mb-16",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            src: i18n.language === "vn" && post.cover_vn ? post.cover_vn : post.cover,
            alt: post.title,
            className: "w-full h-full lg:object-cover md:object-contain object-cover",
            loading: "eager"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "flex flex-col gap-8 w-full items-center",
          children: contentBlocks.map((block, index) => {
            // 1. FULL WIDTH TEXT BLOCK (Regular font weight 400)
            // Figma: 1034px width, 16px font size, 24px line height, #1E2939 color
            if (block.type === "text_full") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "w-full max-w-[1034px] flex flex-col justify-center items-start gap-4 px-4 lg:px-0 font-['Source_Serif_Pro'] font-normal text-base leading-6 text-[#1E2939] opacity-90\r [&>p]:text-base [&>p]:leading-6 [&>p]:mb-0\r [&>h2]:text-base [&>h2]:leading-6 [&>h2]:font-bold [&>h2]:mb-0 \r [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-0 [&>li]:text-base [&>li]:leading-6",
                dangerouslySetInnerHTML: {
                  __html: block.content
                }
              }, index);
            }

            // 2. IMAGE BLOCK
            // Figma: 1034px width (same as text), 408px height, 16px border-radius, centered
            if (block.type === "image") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "w-full max-w-[1034px] flex flex-col justify-center items-center gap-4 px-4 lg:px-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                  className: "w-full h-[408px] rounded-[16px] overflow-hidden relative",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
                    src: block.src,
                    alt: block.alt || "Blog image",
                    className: "w-full h-full object-contain",
                    loading: "lazy"
                  })
                })
              }, index);
            }
            return null;
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "max-w-[1034px] mx-auto mt-12 sm:mt-12 lg:mt-16",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_library_ShareSection__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MoreBlogs__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./src/scripts/components/pages/blogs/MoreBlogs.jsx":
/*!**********************************************************!*\
  !*** ./src/scripts/components/pages/blogs/MoreBlogs.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _library_AppButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _library_BlogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/BlogCard */ "./src/scripts/components/library/BlogCard.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const ParallaxSection = (0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../ui/ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.jsx")));
const MoreBlogs = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const blogs = t("service_headline_section.blogs", {
    returnObjects: true
  }) || [];
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ParallaxSection, {
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: `mx-auto relative ${_styles_themeGuide__WEBPACK_IMPORTED_MODULE_7__.themeGuide.paddingX} flex flex-col justify-center items-center mb-20`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "flex justify-center items-center mb-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_3__.Badge, {
          variant: "toolkit",
          size: "default",
          children: "More Blogs and Articles"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "mb-8 md:mb-10 flex justify-center items-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          className: "md:text-4xl text-2xl font-semibold md:font-bold text-[0E0E0E]",
          children: "What to Read Next"
        })
      }), blogs.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8",
        children: blogs.slice().reverse().slice(0, 3).map((post, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          to: `/blog/${post.slug}`,
          className: `hover:cursor-pointer ${idx === 2 ? "md:hidden lg:block" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_BlogCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
            post: post,
            variant: "section"
          })
        }, post.slug))
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "text-center py-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "text-gray-500 text-lg",
          children: "No blog posts found."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "text-center mt-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_AppButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          to: "/blogs",
          variant: "secondary",
          text: "Read More",
          withRightIcon: true,
          rightIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: "size-5"
          })
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreBlogs);

/***/ }),

/***/ "./src/scripts/components/pages/not_found/NotFound.jsx":
/*!*************************************************************!*\
  !*** ./src/scripts/components/pages/not_found/NotFound.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const NotFound = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `min-h-screen flex flex-col justify-center items-center bg-white text-center ${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.margin}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      className: "md:text-[3vw] text-[7vw] font-extrabold text-[#4F378A]",
      children: t("not_found.title")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "text-gray-[#1A1A1A]/70 md:text-[0.8vw] text-[3vw] md:my-[1vw] my-[3vw]",
      children: t("not_found.description")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: "/",
      className: " bg-linear-to-r from-[#4F378A] via-[#FF00E5] to-[#FF00E5] bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out text-white font-semibold rounded-full px-8 py-3 shadow-md hover:shadow-lg cursor-pointer md:text-[0.8vw] text-[3vw] ",
      onClick: () => window.scrollTo({
        top: 0,
        behavior: "smooth"
      }),
      children: t("not_found.button")
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

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
/* harmony export */   CardImageContainer: () => (/* binding */ CardImageContainer),
/* harmony export */   CardImageWrapper: () => (/* binding */ CardImageWrapper),
/* harmony export */   CardMetaRow: () => (/* binding */ CardMetaRow),
/* harmony export */   CardMobileActionsRow: () => (/* binding */ CardMobileActionsRow),
/* harmony export */   CardMobileDate: () => (/* binding */ CardMobileDate),
/* harmony export */   CardMobileReadMore: () => (/* binding */ CardMobileReadMore),
/* harmony export */   CardReadMore: () => (/* binding */ CardReadMore),
/* harmony export */   CardRoot: () => (/* binding */ CardRoot),
/* harmony export */   CardShareButton: () => (/* binding */ CardShareButton),
/* harmony export */   CardTitle: () => (/* binding */ CardTitle),
/* harmony export */   ShareIconButton: () => (/* binding */ ShareIconButton),
/* harmony export */   ShareMenuButton: () => (/* binding */ ShareMenuButton),
/* harmony export */   ShareMenuDivider: () => (/* binding */ ShareMenuDivider),
/* harmony export */   ShareMenuDropdown: () => (/* binding */ ShareMenuDropdown),
/* harmony export */   ShareMenuWrapper: () => (/* binding */ ShareMenuWrapper),
/* harmony export */   Toast: () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Desktop Card (Column layout)

const cardDesktopVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("group flex flex-col items-center p-4 gap-4 w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105 active:scale-90", {
  variants: {
    variant: {
      default: "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
      section: "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
      fluid: "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

// Mobile Card (Row layout)
const cardMobileVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("group flex flex-row items-start p-4 gap-4 w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 active:scale-90", {
  variants: {
    variant: {
      default: "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
      section: "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
      fluid: "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const CardRoot = ({
  className,
  variant,
  isMobile,
  ...props
}) => {
  const variants = isMobile ? cardMobileVariants : cardDesktopVariants;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("article", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(variants({
      variant
    }), className),
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    ...props
  });
};

// --- 2. Image Components ---
const CardImageWrapper = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("relative rounded-2xl w-full h-full overflow-hidden", className),
  ...props
});
const CardImage = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("w-full h-full min-h-[160px] object-cover", className),
  loading: "lazy",
  ...props
});

// --- 3. Badge (Specific to Blog Card) ---
const cardBadgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-sm z-10 flex items-center justify-center", {
  variants: {
    variant: {
      new: "bg-[#FF00E5] text-white",
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
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex flex-col justify-center gap-4 w-full", className),
  ...props
});
const CardMetaRow = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("hidden md:flex flex-row justify-between items-center w-full gap-2", className),
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
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-gray-600 text-sm font-normal", className),
  ...props
});
const CardTitle = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-base font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-[#CC00B7] transition-colors", className),
  ...props
});
const CardExcerpt = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-gray-600 text-sm font-normal leading-relaxed line-clamp-3", className),
  ...props
});

// --- 7. Footer & Actions ---
const CardFooter = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex flex-row justify-between items-center w-full gap-2", className),
  ...props
});
const CardReadMore = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex items-center gap-1 text-[#CC00B7] font-normal text-sm hover:opacity-80 transition-opacity", className),
  ...props
});
const CardShareButton = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-[#CC00B7] hover:opacity-80 p-1 rounded transition-opacity", className),
  ...props
});

// --- 8. Image Container (for Blog Card specific layout) ---
const CardImageContainer = ({
  className,
  onClick,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  onClick: onClick,
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("cursor-pointer relative w-full h-full", className),
  ...props
});

// --- 9. Mobile Actions Row ---
const CardMobileActionsRow = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex flex-row justify-between items-center w-full gap-2", className),
  ...props
});

// --- 10. Mobile Read More Link ---
const CardMobileReadMore = ({
  className,
  onClick,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
  onClick: onClick,
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-[#CC00B7] text-sm font-normal flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity", className),
  ...props
});

// --- 11. Share Menu Dropdown ---
const ShareMenuDropdown = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("absolute bottom-8 right-0 md:bottom-12 bg-white shadow-xl border border-gray-100 rounded-xl p-2 flex flex-col gap-1 min-w-40 z-50 text-left", className),
  ...props
});

// --- 12. Share Menu Button ---
const shareMenuButtonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left", {
  variants: {
    platform: {
      facebook: "text-blue-600",
      twitter: "text-black",
      linkedin: "text-blue-700",
      whatsapp: "text-green-500",
      copy: "text-gray-700"
    }
  },
  defaultVariants: {
    platform: "facebook"
  }
});
const ShareMenuButton = ({
  className,
  platform,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(shareMenuButtonVariants({
    platform
  }), className),
  ...props
});

// --- 13. Share Menu Divider ---
const ShareMenuDivider = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("h-px bg-gray-100 my-1", className),
  ...props
});

// --- 14. Toast Notification ---
const toastVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl transition-all duration-300 ease-in-out", {
  variants: {
    visible: {
      true: "opacity-100 translate-y-0",
      false: "opacity-0 translate-y-4 pointer-events-none"
    },
    icon: {
      success: "bg-green-600",
      error: "bg-gray-900",
      info: "bg-gray-900"
    }
  },
  defaultVariants: {
    visible: false,
    icon: "error"
  }
});
const Toast = ({
  className,
  visible,
  icon,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(toastVariants({
    visible,
    icon
  }), className),
  ...props
});

// --- 15. Mobile Date Display ---
const CardMobileDate = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("text-sm text-gray-600 font-normal", className),
  ...props
});

// --- 16. Share Menu Wrapper ---
const ShareMenuWrapper = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("relative", className),
  ...props
});

// --- 17. Share Icon Button (Mobile & Desktop) ---
const ShareIconButton = ({
  className,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("p-1", className),
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
      "font-['Inter'] font-normal text-[#4F378A]",
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
  sectionPaddingY: "lg:py-[128px] md:py-[64px] py-[48px]",
  sectionPaddingX: "lg:px-[122px]",
  // Margins
  marginX: "lg:px-24 md:px-8 px-8",
  marginY: "lg:py-5 md:py-5 py-5",
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
  toolsHeroDescription: "font['Inter'] font-normal text-white md:text-[16px] text-[14px] opacity-90",
  // Section Introduction
  sectionHeading: "lg:text-[32px] text-[28px] font-bold text-[#1E2939]",
  sectionDescription: "md:text-[16px] text-[14px] font-normal text-[#63666D]/75",
  // Input labels
  inputLabel: "font['Inter'] md:text-[16px] text-[14px] font-semibold text-[#1E2939]",
  inputLabelNote: "font['Inter'] md:text-[16px] text-[14px] font-normal text-[#4D525C]/90",
  inputPlaceholder: "font['Inter'] md:text-[16px] text-[14px] font-normal text-[#99A1AF]"
};

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_pages_blogs_Blog_jsx.js.map?ver=ce5d9ee6474ee38d1501