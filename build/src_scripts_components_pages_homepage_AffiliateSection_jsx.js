"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_homepage_AffiliateSection_jsx"],{

/***/ "./src/scripts/components/library/AffiliateCard.jsx":
/*!**********************************************************!*\
  !*** ./src/scripts/components/library/AffiliateCard.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AffiliateCard)
/* harmony export */ });
/* harmony import */ var _styles_affiliate_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/affiliate-card */ "./src/styles/affiliate-card.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _HighlightedHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HighlightedHeading */ "./src/scripts/components/library/HighlightedHeading.jsx");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function AffiliateCard({
  // 1. Style Props
  variant = "default",
  padding,
  containerClassName = "w-full",
  logo,
  illustration,
  heading,
  headingHighlight,
  subheading,
  badges = [],
  badgeVariant = "affiliate",
  actions = [],
  className,
  style,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col", containerClassName, className),
    style: style,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles_affiliate_card__WEBPACK_IMPORTED_MODULE_0__.AffiliateCard, {
      variant: variant,
      padding: padding,
      className: "flex flex-col relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles_affiliate_card__WEBPACK_IMPORTED_MODULE_0__.AffiliateCardHeaderWrapper, {
        children: [illustration && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_affiliate_card__WEBPACK_IMPORTED_MODULE_0__.AffiliateCardIllustration, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: illustration.src,
            alt: illustration.alt || "Illustration",
            className: illustration.className || "shrink-0 w-80 h-80 md:w-auto md:h-auto md:max-w-[240px] lg:max-w-[280px] object-contain"
          })
        }), logo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "mb-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: logo.src,
            alt: logo.alt || "Logo",
            className: logo.className || "h-10"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles_affiliate_card__WEBPACK_IMPORTED_MODULE_0__.AffiliateCardContent, {
        children: [headingHighlight ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_HighlightedHeading__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: heading,
          highlight: headingHighlight,
          className: "text-xl font-bold leading-tight"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "text-xl font-bold text-slate-900 leading-tight",
          children: heading
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "text-slate-600 text-base font-normal leading-relaxed",
          children: subheading
        }), badges && badges.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-base font-medium text-slate-900",
            children: "Specialties:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-wrap md:justify-start justify-center gap-1",
            children: [badges.map((badge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "md:hidden",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                variant: badgeVariant,
                size: "sm",
                className: "text-xs",
                children: badge.label
              })
            }, index)), badges.map((badge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "hidden md:block",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                variant: badgeVariant,
                size: "sm",
                className: "px-4 py-2 text-sm",
                children: badge.label
              })
            }, index))]
          })]
        })]
      }), actions && actions.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_affiliate_card__WEBPACK_IMPORTED_MODULE_0__.AffiliateCardFooter, {
        children: actions.map((action, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: action.style || "primary",
          text: action.text,
          onClick: action.onClick,
          className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__.cn)(action.className, action.style === "primary" && "w-fit")
        }, index))
      })]
    })
  });
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

/***/ "./src/scripts/components/library/Container.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/library/Container.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Container({
  className,
  children,
  rest
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_0__.themeGuide.paddingX, "max-w-[1440px]", "lg:mx-auto", className),
    ...rest,
    children: children
  });
}

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

/***/ "./src/scripts/components/library/MobileAffiliateCard.jsx":
/*!****************************************************************!*\
  !*** ./src/scripts/components/library/MobileAffiliateCard.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileAffiliateCard)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _HighlightedHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HighlightedHeading */ "./src/scripts/components/library/HighlightedHeading.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function MobileAffiliateCard({
  variant = "default",
  logo,
  illustration,
  heading,
  headingHighlight,
  subheading,
  badges = [],
  badgeVariant = "affiliate",
  actions = [],
  className,
  style,
  ...props
}) {
  const variantStyles = {
    default: "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/20 to-[oklch(0.8001_0.1751_322.55)]/20",
    amilo: "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/20 to-[oklch(0.7284_0.1708_59.45)]/20"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("relative w-full h-[535px] flex flex-col items-center overflow-visible mt-40", className),
    style: style,
    ...props,
    children: [illustration && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "absolute top-0 left-1/2 -translate-x-1/2 -mt-24 z-30 pointer-events-none overflow-visible aspect-square",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: illustration.src,
        alt: illustration.alt || "Illustration",
        className: "w-auto h-auto object-contain"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("absolute bottom-0 left-0 right-0 w-full flex flex-col items-center rounded-2xl shadow-sm overflow-hidden", "pt-20 px-4 pb-10 gap-7", variantStyles[variant]),
      children: [logo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "flex justify-center z-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: logo.src,
          alt: logo.alt || "Logo",
          className: logo.className || "h-10"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "relative z-20 flex flex-col gap-4 items-center w-full text-center",
        children: [headingHighlight ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_HighlightedHeading__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: heading,
          highlight: headingHighlight,
          className: "text-xl font-bold leading-tight"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-xl font-bold text-slate-900 leading-tight",
          children: heading
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-slate-600 text-base font-normal leading-relaxed",
          children: subheading
        }), badges && badges.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col gap-1 w-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-sm font-medium text-slate-900",
            children: "Specialties:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-wrap justify-center gap-1",
            children: badges.map((badge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {
              variant: badgeVariant,
              size: "sm",
              className: "px-2 py-1 text-xs",
              children: badge.label
            }, index))
          })]
        })]
      }), actions && actions.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "flex flex-row justify-center items-center gap-4 w-full relative z-20",
        children: actions.map((action, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: action.style || "primary",
          text: action.text,
          onClick: action.onClick,
          className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(action.className, action.style === "primary" && "w-fit")
        }, index))
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/pages/homepage/AffiliateSection.jsx":
/*!********************************************************************!*\
  !*** ./src/scripts/components/pages/homepage/AffiliateSection.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _library_AffiliateCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/AffiliateCard */ "./src/scripts/components/library/AffiliateCard.jsx");
/* harmony import */ var _library_MobileAffiliateCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/MobileAffiliateCard */ "./src/scripts/components/library/MobileAffiliateCard.jsx");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
/* harmony import */ var _library_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../library/Container */ "./src/scripts/components/library/Container.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












const AffiliateSection = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const cards = [{
    id: "shipx",
    variant: "default",
    badgeVariant: "affiliate",
    logo: {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/main_svg_14.svg",
      alt: "ShipX Logo"
    },
    illustration: {
      src: "https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@shipx-v2/src/assets/affiliate_card/sglink-affiliate-card.webp",
      alt: "Global Shipping"
    },
    heading: t("sg_link_and_amilo_section.sg_link_card.title"),
    headingHighlight: t("sg_link_and_amilo_section.sg_link_card.title_highlighted"),
    subheading: t("sg_link_and_amilo_section.sg_link_card.description"),
    badges: [{
      label: t("sg_link_and_amilo_section.sg_link_card.specialties.specialty_1")
    }, {
      label: t("sg_link_and_amilo_section.sg_link_card.specialties.specialty_2")
    }, {
      label: t("sg_link_and_amilo_section.sg_link_card.specialties.specialty_3")
    }],
    actions: [{
      text: t("sg_link_and_amilo_section.sg_link_card.login_button"),
      style: "secondary",
      onClick: () => window.open("https://admin.sglinkapi.com", "_blank")
    }, {
      text: t("sg_link_and_amilo_section.sg_link_card.signup_button"),
      style: "primary",
      onClick: () => window.open("https://admin.sglinkapi.com", "_blank")
    }]
  }, {
    id: "amilo",
    variant: "amilo",
    badgeVariant: "affiliateOrange",
    logo: {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/main_svg_15.svg",
      alt: "Amilo Logo"
    },
    illustration: {
      src: "https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@shipx-v2/src/assets/affiliate_card/amilo-affiliate-card.webp",
      alt: "Amilo Illustration"
    },
    heading: t("sg_link_and_amilo_section.amilo_card.title"),
    headingHighlight: t("sg_link_and_amilo_section.amilo_card.title_highlighted"),
    subheading: t("sg_link_and_amilo_section.amilo_card.description"),
    badges: [{
      label: t("sg_link_and_amilo_section.amilo_card.specialties.specialty_1")
    }, {
      label: t("sg_link_and_amilo_section.amilo_card.specialties.specialty_2")
    }, {
      label: t("sg_link_and_amilo_section.amilo_card.specialties.specialty_3")
    }],
    actions: [{
      text: t("sg_link_and_amilo_section.amilo_card.login_button"),
      style: "secondary",
      onClick: () => window.open("https://vip.amilo.co/", "_blank")
    }, {
      text: t("sg_link_and_amilo_section.amilo_card.signup_button"),
      style: "primary",
      onClick: () => window.open("https://vip.amilo.co/", "_blank")
    }]
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_library_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)("relative w-full overflow-visible", _styles_themeGuide__WEBPACK_IMPORTED_MODULE_2__.themeGuide.sectionPaddingY),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: `hidden md:flex md:flex-col lg:flex-row justify-center px-0 md:px-20 lg:px-0 items-center gap-12 overflow-visible w-full`,
      children: cards.map(card => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_library_AffiliateCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        containerClassName: "w-full",
        className: "w-full",
        variant: card.variant,
        badgeVariant: card.badgeVariant,
        logo: card.logo,
        illustration: card.illustration,
        heading: card.heading,
        headingHighlight: card.headingHighlight,
        subheading: card.subheading,
        badges: card.badges,
        actions: card.actions
      }, card.id))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "md:hidden overflow-visible w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Autoplay],
        autoplay: {
          delay: 7000,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active"
        },
        onSlideChange: swiper => setCurrentSlide(swiper.activeIndex),
        className: "w-full overflow-visible",
        children: cards.map(card => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
          className: "w-full overflow-visible",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_library_MobileAffiliateCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: card.variant,
            badgeVariant: card.badgeVariant,
            logo: card.logo,
            illustration: card.illustration,
            heading: card.heading,
            headingHighlight: card.headingHighlight,
            subheading: card.subheading,
            badges: card.badges,
            actions: card.actions
          })
        }, card.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "custom-pagination swiper-pagination flex justify-center gap-2 mt-8"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("style", {
        children: `
          .md\:hidden { overflow: visible !important; }
          .md\:hidden .swiper { overflow: visible !important; }
          .md\:hidden .swiper-viewport { overflow: visible !important; }
          .md\:hidden .swiper-wrapper { overflow: visible !important; }
          .custom-pagination {
            position: relative !important;
            display: flex !important;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 8px;
            width: auto !important;
            height: 15px;
            margin-top: 16px;
          }
          .swiper-bullet {
            box-sizing: border-box;
            width: 15px;
            height: 15px;
            background: transparent;
            border: 2px solid #4F378A;
            border-radius: 9999px;
            cursor: pointer;
            transition: all 300ms ease-in-out;
            opacity: 1;
            flex: none;
            margin: 0 !important;
          }
          .swiper-bullet-active {
            width: 30px;
            height: 15px;
            background: #4F378A !important;
            border: none;
            border-radius: 9999px;
          }
          .swiper-slide { padding: 0 12px; display: flex !important; overflow: visible !important; align-items: center; justify-content: center; }
        `
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AffiliateSection);

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

/***/ "./src/styles/affiliate-card.jsx":
/*!***************************************!*\
  !*** ./src/styles/affiliate-card.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffiliateCard: () => (/* binding */ AffiliateCard),
/* harmony export */   AffiliateCardContent: () => (/* binding */ AffiliateCardContent),
/* harmony export */   AffiliateCardFooter: () => (/* binding */ AffiliateCardFooter),
/* harmony export */   AffiliateCardHeaderWrapper: () => (/* binding */ AffiliateCardHeaderWrapper),
/* harmony export */   AffiliateCardIllustration: () => (/* binding */ AffiliateCardIllustration)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// 1. The Container Style

const cardVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("relative flex flex-col items-start gap-8 w-full min-h-[460px] justify-between overflow-visible rounded-2xl md:rounded-xl shadow-sm transition-all md:mt-20 lg:mt-0", {
  variants: {
    variant: {
      default: "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/30 to-[oklch(0.8001_0.1751_322.55)]/30",
      amilo: "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/30 to-[oklch(0.7284_0.1708_59.45)]/30"
    },
    padding: {
      default: "p-10",
      compact: "p-5"
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "default"
  }
});
function AffiliateCard({
  className,
  variant,
  padding,
  children,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(cardVariants({
      variant,
      padding
    }), className),
    ...props,
    children: children
  });
}

// 2. Illustration (Uses negative margin offset with overflow visible)
function AffiliateCardIllustration({
  className,
  children,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("-mt-32 md:absolute md:right-12 md:-top-30 md:mt-0 flex justify-center md:justify-end pointer-events-none w-auto h-auto overflow-visible", className),
    ...props,
    children: children
  });
}

// 3. Content Section
function AffiliateCardContent({
  className,
  children,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("relative z-20 flex flex-col gap-4 items-center md:items-start w-full text-center md:text-left", className),
    ...props,
    children: children
  });
}

// 4. Footer Section
function AffiliateCardFooter({
  className,
  children,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex flex-row justify-center items-center md:justify-end md:items-end gap-4 w-full relative z-20", className),
    ...props,
    children: children
  });
}

// 5. Header Wrapper (for Illustration and Logo)
function AffiliateCardHeaderWrapper({
  className,
  children,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex flex-col items-center md:flex-row md:justify-between md:items-start w-full gap-4", className),
    ...props,
    children: children
  });
}


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
//# sourceMappingURL=src_scripts_components_pages_homepage_AffiliateSection_jsx.js.map?ver=eeee878e17eddf583da1