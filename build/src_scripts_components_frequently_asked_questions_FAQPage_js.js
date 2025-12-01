"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_frequently_asked_questions_FAQPage_js"],{

/***/ "./node_modules/lucide-react/dist/esm/Icon.js":
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "svg",
    {
      ref,
      ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
      ...!children && !(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasA11yProp)(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeClasses)(
        `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toKebabCase)((0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toPascalCase)(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toPascalCase)(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

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

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-up.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-up.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChevronUp)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chevron-up", __iconNode);


//# sourceMappingURL=chevron-up.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasA11yProp: () => (/* binding */ hasA11yProp),
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase),
/* harmony export */   toPascalCase: () => (/* binding */ toPascalCase)
/* harmony export */ });
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./src/scripts/components/frequently_asked_questions/AccordionItem.js":
/*!****************************************************************************!*\
  !*** ./src/scripts/components/frequently_asked_questions/AccordionItem.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-up.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


const AccordionItem = ({
  item,
  isOpen,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `
    md:mb-[0.8vw] mb-[4vw] md:rounded-[0.8vw] rounded-[3vw] 
    transition-all duration-300 overflow-hidden border
    ${isOpen ? "bg-white shadow-[0px_4px_25px_0px_#FF00E54D] border-[#4F378A]/20" : "bg-[#FAFAFA] hover:bg-white border-transparent hover:shadow-[0px_4px_25px_0px_#FF00E54D]"}
  `,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      onClick: onClick,
      className: "flex items-center justify-between md:p-[1.25vw] p-[5vw] cursor-pointer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: `font-semibold md:text-[1.04vw] text-[3.5vw] pr-[2vw] ${isOpen ? "text-[#99008A]" : "text-[#1A1A1A]"}`,
        children: item.question
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center md:gap-[0.8vw] gap-[3vw] shrink-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "hidden sm:block md:px-[0.8vw] px-[3vw] md:py-[0.2vw] py-[1vw] bg-[#EDE9FE] text-[#1A1A1A] md:text-[0.83vw] text-[2.5vw] font-semibold md:rounded-[0.42vw] rounded-[4vw]",
          children: item.category_label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: `md:p-[0.5vw] p-[2vw] rounded-full transition-colors ${isOpen ? "bg-[#99008A] text-white" : "bg-[#D1D5DC] text-[#1E2939]"}`,
          children: isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: "md:w-[0.8vw] md:h-[0.8vw] w-[2.5vw] h-[2.5vw]"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
            className: "md:w-[0.8vw] md:h-[0.8vw] w-[2.5vw] h-[2.5vw]"
          })
        })]
      })]
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: " md:px-[1.25vw] px-[5vw]  md:pb-[1.25vw] pb-[6vw]  text-[#1E2939]  md:text-[0.83vw] text-[3.5vw]  leading-normal md:mt-[0.5vw] mt-[0.5vw] ",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-[2.08vw] md:gap-y-[1vw] gap-y-[4vw]",
        children: (item.answer_blocks || []).map((block, index) => {
          const isFullWidth = block.type === "intro";
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: isFullWidth ? "col-span-full" : "col-span-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              children: [block.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                className: "text-[#1E2939] font-bold",
                children: [block.title, " "]
              }), block.text]
            })
          }, index);
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionItem);

/***/ }),

/***/ "./src/scripts/components/frequently_asked_questions/FAQPage.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/components/frequently_asked_questions/FAQPage.js ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ResponsiveFilterBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponsiveFilterBar */ "./src/scripts/components/frequently_asked_questions/ResponsiveFilterBar.js");
/* harmony import */ var _AccordionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccordionItem */ "./src/scripts/components/frequently_asked_questions/AccordionItem.js");
/* harmony import */ var _ui_FAQCTASection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/FAQCTASection */ "./src/scripts/components/ui/FAQCTASection.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_FAQCTASection__WEBPACK_IMPORTED_MODULE_4__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_ui_FAQCTASection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_async_dependencies_result__[0];






const FAQPage = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const rawData = t("faq_page", {
    returnObjects: true
  });
  const pageData = typeof rawData === "object" && rawData !== null ? rawData : {};
  const {
    header_section = {},
    filter_section = {},
    accordion_section = {},
    cta_section = {}
  } = pageData;

  // --- State ---
  const [activeCategoryId, setActiveCategoryId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("shipping_basics");
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [openItemId, setOpenItemId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("safely_ship_fragile");
  const [visibleCount, setVisibleCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);

  // --- Logic ---
  const rawItems = Array.isArray(accordion_section?.items) ? accordion_section.items : [];
  const filteredItems = rawItems.filter(item => {
    const matchesCategory = activeCategoryId === "all" || item.category_id === activeCategoryId;
    const matchesSearch = (item.question || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setVisibleCount(10);
  }, [activeCategoryId, searchQuery]);
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10);
  };
  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < filteredItems.length;
  if (Object.keys(pageData).length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "w-full min-h-screen bg-white"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "w-full bg-white font-sans flex flex-col",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-faq-banner.webp",
        alt: "ShipX FAQ Banner",
        className: "hidden md:block w-full h-[18vw] object-cover"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-faq-banner-mobile.webp",
        alt: "ShipX FAQ Banner",
        className: "block md:hidden w-full h-auto object-cover"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("main", {
      className: " flex flex-col items-center w-full py-[10vw] px-[5vw] md:py-[3.1vw] md:px-[17vw] md:gap-y-[2vw] gap-y-[5vw] ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "w-full bg-white md:p-[2vw] p-[6vw] text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: " inline-block py-[2.1vw] pl-[2.7vw] pr-[3.5vw] rounded-[2.1vw] text-[2.5vw] mb-[4vw] md:py-[0.42vw] md:pl-[0.52vw] md:pr-[0.68vw] md:rounded-[0.42vw] md:text-[0.7vw] md:mb-[1vw] bg-[#F3F1FF] text-[#FF00E5] font-bold tracking-wide ",
          children: ["\u25CF ", header_section.badge_text]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h1", {
          className: "md:text-[3vw] text-[7vw] font-bold text-[#1A1A1A] md:leading-[3.5vw] leading-[8vw] md:mb-[1vw] mb-[3vw]",
          children: [header_section.title_prefix, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "text-[#FF00E5]",
            children: header_section.title_suffix
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "text-[#0E0E0E]/70 md:text-[1.1vw] text-[3.5vw] md:leading-[1.6vw] leading-[5vw] md:max-w-[40vw] w-full mx-auto md:mb-[2vw] mb-[6vw]",
          children: header_section.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "w-full md:w-[75%] mx-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: " flex flex-row items-center bg-white shadow-[0px_0px_20px_0px_#FF00E533] md:rounded-[1vw] rounded-[3vw] md:p-[0.7vw] p-[2.7vw] md:gap-[0.7vw] gap-[2.7vw] ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_search_icon.svg",
              alt: "Search",
              className: "md:w-[2.1vw] md:h-[2.1vw] w-[6vw] h-[6vw] object-contain"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "text",
              placeholder: header_section.search_placeholder,
              className: " grow w-full bg-transparent focus:outline-none text-[#1A1A1A] placeholder-[#99A1AF] italic md:text-[1vw] text-[3.5vw] ",
              value: searchQuery,
              onChange: e => setSearchQuery(e.target.value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              className: "shrink-0 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_send_icon.svg",
                alt: "Search Button",
                className: "md:w-[2.1vw] md:h-[2.1vw] w-[6vw] h-[6vw] object-contain"
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "w-full text-center md:mb-[1vw] mb-[4vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
          className: "md:text-[0.9vw] text-[3.5vw] font-semibold md:mb-[1vw] mb-[3vw] text-[#1A1A1A]/80",
          children: filter_section.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ResponsiveFilterBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
          filters: filter_section.categories || [],
          activeFilterId: activeCategoryId,
          onFilterChange: setActiveCategoryId
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "w-full flex flex-col",
        children: displayedItems.length > 0 ? displayedItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AccordionItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: item,
          isOpen: openItemId === item.id,
          onClick: () => setOpenItemId(openItemId === item.id ? null : item.id)
        }, item.id)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "text-center md:py-[3vw] py-[10vw] text-[#1A1A1A]/50 md:text-[1vw] text-[3.5vw]",
          children: "No results found."
        })
      }), hasMoreItems && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "text-center md:mt-[2vw] mt-[5vw]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          onClick: handleLoadMore,
          className: " group relative inline-flex items-center justify-center p-px rounded-full bg-linear-to-b from-[#FF00E5] to-[#4F378A] transition-transform active:scale-95 ",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: " block w-full h-full rounded-full md:px-[1.56vw] px-[8vw]  md:py-[0.36vw] py-[2.5vw]  md:text-[0.9vw] text-[3.5vw]  font-medium bg-white  text-[#1A1A1A] transition-all duration-300 ease-in-out group-hover:bg-transparent  group-hover:text-white ",
            children: accordion_section.load_more_button
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_FAQCTASection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ctaData: cta_section
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/scripts/components/frequently_asked_questions/ResponsiveFilterBar.js":
/*!**********************************************************************************!*\
  !*** ./src/scripts/components/frequently_asked_questions/ResponsiveFilterBar.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// --- 1. The Original FilterPill (Desktop View) ---

const FilterPill = ({
  label,
  count,
  isActive,
  onClick
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
  onClick: onClick,
  className: `
      md:px-[1vw] md:py-[0.5vw] 
      md:rounded-[0.42vw] 
      md:text-[0.9vw] font-medium 
      transition-colors whitespace-nowrap 
      md:mb-[0.5vw] border
      hover:cursor-pointer
      ${isActive ? "bg-[#99008A] text-white border-[#99008A] shadow-[0_0.2vw_0.5vw_rgba(79,55,138,0.3)]" : "bg-[#EDE9FE] text-[#1A1A1A] border-transparent hover:bg-[#FF00E5]/10"}
    `,
  children: [label, count !== null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
    className: `ml-[0.2em] ${isActive ? "text-white" : "text-[#1A1A1A]"}`,
    children: ["(", count, ")"]
  })]
});

// --- 2. The Mobile Dropdown (Mobile View) ---
const MobileFilterDropdown = ({
  options,
  activeId,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "relative w-full px-[5vw]",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
        value: activeId,
        onChange: e => onChange(e.target.value),
        className: `
            w-full appearance-none
            py-[2.5vw] pl-[4vw] pr-[10vw]
            rounded-[2.1vw]
            text-[3.5vw] font-medium
            border border-transparent
            bg-[#EDE9FE] text-[#1A1A1A]
            focus:outline-none focus:ring-2 focus:ring-[#99008A]
          `,
        children: options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("option", {
          value: opt.id,
          children: [opt.label, " ", opt.count !== null ? `(${opt.count})` : ""]
        }, opt.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-[4vw] text-[#99008A]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
          size: "1.2em"
        })
      })]
    })
  });
};

// --- 3. The Responsive Wrapper ---
const ResponsiveFilterBar = ({
  filters,
  activeFilterId,
  onFilterChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "w-full flex justify-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "block md:hidden w-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileFilterDropdown, {
        options: filters,
        activeId: activeFilterId,
        onChange: onFilterChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "hidden md:flex flex-wrap justify-center gap-[0.5vw]",
      children: filters.map(filter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FilterPill, {
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

/***/ "./src/scripts/components/ui/FAQCTASection.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/ui/FAQCTASection.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var https_cdn_jsdelivr_net_gh_gochuicod_ShipX_main_src_assets_faq_cta_bg_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_cta_bg.webp */ "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_cta_bg.webp");
/* harmony import */ var https_cdn_jsdelivr_net_gh_gochuicod_ShipX_main_src_assets_faq_cta_bg_mobile_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_cta_bg_mobile.webp */ "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_cta_bg_mobile.webp");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_jsdelivr_net_gh_gochuicod_ShipX_main_src_assets_faq_cta_bg_webp__WEBPACK_IMPORTED_MODULE_0__, https_cdn_jsdelivr_net_gh_gochuicod_ShipX_main_src_assets_faq_cta_bg_mobile_webp__WEBPACK_IMPORTED_MODULE_1__]);
([https_cdn_jsdelivr_net_gh_gochuicod_ShipX_main_src_assets_faq_cta_bg_webp__WEBPACK_IMPORTED_MODULE_0__, https_cdn_jsdelivr_net_gh_gochuicod_ShipX_main_src_assets_faq_cta_bg_mobile_webp__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const FAQCTASection = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: " flex flex-col md:flex-row items-center justify-between mx-auto px-[4vw] w-full md:w-[55vw] md:mb-[4vw] mb-0 bg-contain bg-center bg-no-repeat bg-(image:--bg-mobile) md:bg-(image:--bg-desktop) rounded-[20px] md:rounded-[1.4vw] overflow-hidden relative /* Top & Bottom Padding: 30px -> 2.1vw */ py-8 md:py-[4.5vw] ",
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      "--bg-mobile": `url(${https_cdn_jsdelivr_net_gh_gochuicod_ShipX_main_src_assets_faq_cta_bg_mobile_webp__WEBPACK_IMPORTED_MODULE_1__["default"]})`,
      "--bg-desktop": `url(${https_cdn_jsdelivr_net_gh_gochuicod_ShipX_main_src_assets_faq_cta_bg_webp__WEBPACK_IMPORTED_MODULE_0__["default"]})`
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: " flex flex-col items-center justify-center text-center flex-1 z-10 /* Mobile Padding */ px-6  /* Desktop Left/Right Padding: 60px -> 4.2vw */ md:px-[4.2vw] ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: " text-[#1a1a1a] font-bold leading-tight mb-3 /* Text Size: 30px -> 2.1vw */ text-xl md:text-[1.6vw] ",
        children: "Didn\u2019t find what you were looking for?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: " text-[#555555] font-normal leading-relaxed max-w-xl mb-6 /* Text Size: 16px -> 1.1vw */ text-sm md:text-[0.75vw] ",
        children: "Don't let a question slow down your supply chain. Reach out to our support team directly and we'll get your goods moving in the right direction."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "/#contact-us",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: " flex items-center justify-center /* Background Gradient */ bg-linear-to-r from-[#4F378A] to-[#FF00E5] hover:opacity-90 transition-all duration-300 text-white font-medium shadow-lg shadow-purple-500/30 cursor-pointer rounded-full /* Mobile Styles */ px-6 py-2 text-sm /* Desktop VW Conversions */ /* Padding L/R: 20px -> 1.4vw */ /* Padding T/B: 7px -> 0.5vw */ md:px-[1.4vw] md:py-[0.5vw] /* Font Size: 12px -> 0.85vw */ md:text-[0.85vw] ",
          children: "Contact Us"
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQCTASection);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_frequently_asked_questions_FAQPage_js.js.map?ver=28f017801939bd64842c