"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_FAQSection_js"],{

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

/***/ "./src/scripts/components/ui/FAQItem.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/ui/FAQItem.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const FaqItem = ({
  item,
  isOpen,
  onClick
}) => {
  if (!item) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    onClick: () => onClick(item.id),
    className: `
        relative w-full 
        rounded-[3vw] md:rounded-[0.8vw] 
        transition-all duration-300 cursor-pointer overflow-hidden 
        mb-[1.5vw] md:mb-[0.4vw]
        ${isOpen ? "bg-white shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] border border-pink-100 z-10 scale-[1.01]" : "bg-slate-50 hover:bg-slate-100 border border-transparent"}
      `,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "px-[3.5vw] py-[4vw] md:px-[1vw] md:py-[1vw]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex justify-between items-center gap-[2vw] md:gap-[0.8vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: `font-semibold text-[3vw] md:text-[0.9vw] leading-tight ${isOpen ? "text-[#170F49]" : "text-[#170F49]"}`,
            children: item.question
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: `
                grid transition-[grid-template-rows] duration-300 ease-out
                ${isOpen ? "grid-rows-[1fr] mt-[2.5vw] md:mt-[0.8vw]" : "grid-rows-[0fr]"}
              `,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "overflow-hidden",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "font-medium leading-relaxed text-[#1E2939] text-[2.8vw] md:text-[0.8vw]",
                children: item.answer
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex flex-col items-center ml-[2vw] md:ml-[0.5vw]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            className: `
                flex items-center justify-center 
                w-[5vw] h-[5vw] md:w-[1.8vw] md:h-[1.8vw] 
                rounded-full transition-all duration-300
                ${isOpen ? "bg-[#99008A] text-white rotate-180" : "bg-[#D1D5DC] text-[#1E2939] rotate-0"}
              `,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
              className: "w-[3.5vw] h-[3.5vw] md:w-[1.1vw] md:h-[1.1vw]"
            })
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FaqItem);

/***/ }),

/***/ "./src/scripts/components/ui/FAQSection.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/ui/FAQSection.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _FAQItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FAQItem */ "./src/scripts/components/ui/FAQItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ParallaxSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_value_use-scroll_mjs-node_modu-d38d2d"), __webpack_require__.e("src_scripts_components_ui_ParallaxSection_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js")));
const FAQSection = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const rawItems = t("faq_section.items", {
    returnObjects: true
  });
  const faqItems = Array.isArray(rawItems) ? rawItems : [];
  const [openId, setOpenId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(faqItems.length > 0 ? faqItems[0].id : null);
  const handleToggle = id => {
    setOpenId(openId === id ? null : id);
  };
  const midPoint = Math.ceil(faqItems.length / 2);
  const leftColItems = faqItems.slice(0, midPoint);
  const rightColItems = faqItems.slice(midPoint);
  const getSafeText = (key, fallback) => {
    const val = t(key);
    return val === key ? fallback : val;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ParallaxSection, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: " w-full bg-white font-sans py-0 px-[5vw] md:py-[3.1vw] md:px-[17vw]  ",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "w-full mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "text-center mb-[8vw] md:mb-[2.5vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: " inline-block py-[2.1vw] pl-[2.7vw] pr-[3.5vw] rounded-[2.1vw] text-[2.5vw] mb-[4vw] md:py-[0.42vw] md:pl-[0.52vw] md:pr-[0.68vw] md:rounded-[0.42vw] md:text-[0.7vw] md:mb-[0.5vw] bg-[#F3F1FF] text-[#FF00E5] font-bold tracking-wide ",
            children: ["\u25CF ", getSafeText("faq_section.badge", "Frequently Asked Questions")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "text-[5vw] md:text-[2.5vw] font-bold text-slate-950",
            children: getSafeText("faq_section.title", "Everything You Need to Know")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-[1vw] md:gap-[1vw] items-start",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex flex-col gap-[0.5vw] md:gap-[0.5vw]",
            children: leftColItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FAQItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
              item: item,
              isOpen: openId === item.id,
              onClick: handleToggle
            }, item.id))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex flex-col gap-[0.5vw] md:gap-[0.5vw]",
            children: rightColItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FAQItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
              item: item,
              isOpen: openId === item.id,
              onClick: handleToggle
            }, item.id))
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQSection);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_FAQSection_js.js.map?ver=5ef167013699c288bf2f