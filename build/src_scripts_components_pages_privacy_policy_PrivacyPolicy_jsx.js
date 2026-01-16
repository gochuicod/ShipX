"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_privacy_policy_PrivacyPolicy_jsx"],{

/***/ "./node_modules/class-variance-authority/dist/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/class-variance-authority/dist/index.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cva: () => (/* binding */ cva),
/* harmony export */   cx: () => (/* binding */ cx)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ 
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx__WEBPACK_IMPORTED_MODULE_0__.clsx;
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };



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

/***/ "./src/scripts/components/pages/privacy_policy/PrivacyPolicy.jsx":
/*!***********************************************************************!*\
  !*** ./src/scripts/components/pages/privacy_policy/PrivacyPolicy.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/SEO */ "./src/scripts/components/ui/SEO.jsx");
/* harmony import */ var _library_SubPageHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/SubPageHero */ "./src/scripts/components/library/SubPageHero.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _library_HighlightedHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/HighlightedHeading */ "./src/scripts/components/library/HighlightedHeading.jsx");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const PrivacyPolicy = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }); // optional smooth scroll
  }, [pathname]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: t("seo.privacy_policy_page.title"),
      description: t("seo.privacy_policy_page.description"),
      canonical: t("seo.privacy_policy_page.canonical"),
      ogImage: t("seo.privacy_policy_page.ogImage")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "w-full bg-white font-sans flex flex-col items-center mb-20",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_SubPageHero__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/privacy_policy_desktop.webp",
        srcMobile: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/privacy_policy_mobile.webp",
        alt: "Privacy Policy Banner"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("main", {
        className: `mx-auto relative ${_styles_themeGuide__WEBPACK_IMPORTED_MODULE_7__.themeGuide.paddingX} flex flex-col items-center w-full py-8 gap-6 md:py-16 md:gap-y-6`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "w-full flex flex-col gap-2 items-center text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "md:hidden",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {
              variant: "toolkit",
              size: "small",
              children: t("privacy_policy_page.badge", "Privacy Policy")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {
              variant: "toolkit",
              size: "default",
              children: t("privacy_policy_page.badge", "Privacy Policy")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_HighlightedHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
            text: t("privacy_policy_page.header", "Privacy Policy"),
            highlight: t("privacy_policy_page.highlightedText", "Privacy Policy"),
            className: "text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "w-full flex flex-col md:w-[882px]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
            className: " font-['Inter'] font-normal text-justify text-base leading-[18px] whitespace-pre-line",
            children: t("privacy_policy_page.message")
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyPolicy);

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
//# sourceMappingURL=src_scripts_components_pages_privacy_policy_PrivacyPolicy_jsx.js.map?ver=91812e175e293a7a6ad0