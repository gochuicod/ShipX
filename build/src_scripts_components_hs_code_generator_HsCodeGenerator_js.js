"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_hs_code_generator_HsCodeGenerator_js"],{

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

/***/ "./node_modules/lucide-react/dist/esm/icons/check.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/check.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-alert.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleAlert)
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
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("circle-alert", __iconNode);


//# sourceMappingURL=circle-alert.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/clipboard.js":
/*!***************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/clipboard.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Clipboard)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
];
const Clipboard = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("clipboard", __iconNode);


//# sourceMappingURL=clipboard.js.map


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

/***/ "./src/scripts/components/hs_code_generator/HierarchyPill.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/components/hs_code_generator/HierarchyPill.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HierarchyPill)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function HierarchyPill({
  item
}) {
  const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleCopyDescription = e => {
    e.preventDefault();
    e.stopPropagation(); // Stop propagation so we don't trigger wrapper clicks

    const textToCopy = item.description;

    // Robust Copy Logic inside the Pill
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(err => {
        console.warn("Clipboard API failed in Pill, using fallback", err);
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }
  };
  const fallbackCopy = text => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fallback copy failed", err);
    }
    document.body.removeChild(textArea);
  };
  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsActive(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "relative group outline-none",
    tabIndex: 0,
    onBlur: handleBlur,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      onClick: () => setIsActive(!isActive),
      className: `
          flex flex-row
          md:gap-x-[0.5vw] gap-x-[1.5vw]
          items-center
          md:rounded-[0.5vw] rounded-[1vw]
          md:text-[0.8vw] text-[2.3vw]
          font-medium
          bg-[#EFECF6]
          ${isActive ? "bg-[#E5D9F2] ring-1 ring-[#CC00B7]" : "bg-[#EFECF6] hover:bg-[#E5D9F2]"}
          text-[#CC00B7]
          md:py-[0.25vw] py-[0.5vw]
          md:px-[0.5vw] px-[2vw]
          cursor-help
          transition-colors hover:bg-[#E5D9F2]
        `,
      children: [item.code, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#CC00B7",
        className: " md:w-[1vw] w-[2.5vw] md:h-[1vw] h-[2.5vw] md:stroke-[0.15vw] stroke-[0.5vw] ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m4.5 15.75 7.5-7.5 7.5 7.5"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          md:w-[15vw] w-[35vw]
          md:p-[0.5vw] p-[1.5vw]
          bg-[#F8F7FF]
          md:rounded-[0.7vw] rounded-[2vw]
          opacity-0 invisible 
          group-hover:opacity-100 group-hover:visible 
          transition-all duration-200 
          z-50
          pointer-events-none group-hover:pointer-events-auto
          border border-[#CC00B7]
          ${isActive ? "opacity-100 visible pointer-events-auto translate-y-0" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto translate-y-1 group-hover:translate-y-0"}
        `,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: " text-[#4A5565] md:text-[0.8vw] text-[2.3vw] md:leading-[1vw] leading-[2.2vw] md:mb-[0.5vw] mb-[2vw] ",
        children: item.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        onClick: handleCopyDescription,
        className: " flex items-center md:text-[0.8vw] text-[2.3vw] text-white font-normal bg-[#CC00B7] hover:bg-[#CC00B7]/90 md:py-[0.25vw] py-[0.5vw] md:px-[1vw] px-[2vw] md:rounded-[0.5vw] rounded-[1vw] transition-colors w-full justify-center cursor-pointer ",
        children: copied ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "font-bold",
          children: "Copied"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: "Copy Description"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#CC00B7]"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/hs_code_generator/HsCodeGenerator.js":
/*!*********************************************************************!*\
  !*** ./src/scripts/components/hs_code_generator/HsCodeGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HsCodeGenerator)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var _shipment_tracker_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shipment_tracker/Badge */ "./src/scripts/components/shipment_tracker/Badge.js");
/* harmony import */ var _HsCodeGeneratorForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HsCodeGeneratorForm */ "./src/scripts/components/hs_code_generator/HsCodeGeneratorForm.js");
/* harmony import */ var _HsCodeGeneratorResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HsCodeGeneratorResult */ "./src/scripts/components/hs_code_generator/HsCodeGeneratorResult.js");
/* harmony import */ var _shipment_tracker_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shipment_tracker/ToolsHeroSection */ "./src/scripts/components/shipment_tracker/ToolsHeroSection.js");
/* harmony import */ var _hooks_useHsCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useHsCode */ "./src/scripts/hooks/useHsCode.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/SEO */ "./src/scripts/components/ui/SEO.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









function HsCodeGenerator() {
  const {
    hsCodeResult
  } = (0,_hooks_useHsCode__WEBPACK_IMPORTED_MODULE_6__.useHsCode)();
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: t("seo.hs_code_generator_page.title"),
      description: t("seo.hs_code_generator_page.description"),
      canonical: t("seo.hs_code_generator_page.canonical"),
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "w-screen min-h-screen flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shipment_tracker_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
        activePage: "hs-code-generator"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: " flex md:flex-row flex-col gap-x-[2vw] justify-center items-center md:mt-[5vw] mt-[8vw] md:px-0 px-[10vw] ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: " flex flex-col justify-center md:items-end items-center md:w-[27vw] md:gap-y-0 gap-y-[2vw] md:mb-0 mb-[2vw] ",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shipment_tracker_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "md:text-[0.8vw] text-[2.5vw]",
            badge_text: t("shipment_tracker.track_order_section.badge_text"),
            text_color: "#FF00E5",
            bg_color: "#F3F1FF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h2", {
            className: `
                md:text-[2.5vw] text-[4vw]
                text-[#1E2939]
                font-semibold
                ${(i18n.language === "vn" || i18n.language === "ind" || i18n.language === "thai") && "text-end"}
              `,
            children: [t("hs_code_generator_page.title_section.title_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "text-[#FF00E5]",
              children: t("hs_code_generator_page.title_section.title_2")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: " text-[#63666D]/75 md:text-[1vw] text-[3vw] font-medium md:text-start text-center md:leading-[1.2vw] leading-[4vw] md:w-[30vw] ",
          children: t("hs_code_generator_page.title_section.description")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HsCodeGeneratorForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}), !hsCodeResult?.error && hsCodeResult && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_HsCodeGeneratorResult__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: " flex flex-col md:w-[80vw] w-screen md:h-auto h-[80vw] bg-cover bg-center bg-no-repeat mx-auto md:mb-[4vw] mb-0 text-white text-[0.8vw] font-normal md:rounded-[1vw] rounded-[0.00000001vw] overflow-hidden md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@ffab8ad2ad6bf54f2ed5c615722bff70ee96f7ef/src/assets/shipment_tracker_cta_image.webp')] bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@281b9212a310690d195ec2f7ac6057b96436d583/src/assets/shipment_tracker_cta_image_mobile.svg')] ",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: `
                          flex flex-col
                          md:gap-y-0 gap-y-[3vw]
                          ${i18n.language === "vn" ? "md:w-[45vw] w-screen" : "md:w-[40vw] w-screen"}
                          md:ps-[8vw] ps-[10vw]
                          md:pe-0 pe-[10vw]
                          md:py-[5vw] py-[10vw]
                      `,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: " md:px-0 px-[5vw] md:text-[2vw] text-[7vw] md:text-start text-center md:leading-[3vw] leading-[8vw] font-semibold ",
            children: t("shipment_tracker.shipment_cta_section.title")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: " font-normal opacity-95 pb-[1vw] md:text-[0.9vw] text-[2.5vw] md:text-start text-center md:leading-[1.5vw] leading-[3vw] md:px-0 px-[3vw] ",
            children: t("shipment_tracker.shipment_cta_section.description")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: " flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] md:justify-start justify-center md:items-center items-center ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
                to: "/book-a-demo",
                end: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  type: "button",
                  className: `
                                          flex flex-row
                                          items-center justify-center
                                          gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw]
                                          bg-white/15 text-white
                                          border border-white/95
                                          rounded-full
                                          transition-all duration-300 focus:outline-none
                                          cursor-pointer
                                      `,
                  children: t("footer.book_a_demo")
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
              to: "/#contact-us",
              end: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                type: "button",
                className: `
                                      flex flex-row
                                      items-center justify-center
                                      gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw]
                                      bg-white/15 text-white
                                      border border-white/95
                                      rounded-full
                                      transition-all duration-300 focus:outline-none
                                      cursor-pointer
                                  `,
                children: t("footer.contact_us")
              })
            })]
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/hs_code_generator/HsCodeGeneratorForm.js":
/*!*************************************************************************!*\
  !*** ./src/scripts/components/hs_code_generator/HsCodeGeneratorForm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HsCodeGeneratorForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hooks_useHsCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useHsCode */ "./src/scripts/hooks/useHsCode.js");
/* harmony import */ var _ToolTipError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolTipError */ "./src/scripts/components/hs_code_generator/ToolTipError.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const API_URL = "https://hs-code-generator.replit.app/api/classify";
function HsCodeGeneratorForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors
    },
    reset
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    defaultValues: {
      targetSystem: "USA",
      productDescription: "",
      primaryMaterials: "",
      intendedUse: ""
    }
  });
  const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    setHsCodeResult
  } = (0,_hooks_useHsCode__WEBPACK_IMPORTED_MODULE_2__.useHsCode)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const handleFileChange = e => {
    const selectedFiles = Array.from(e.target.files);
    validateAndAddFiles(selectedFiles);
    e.target.value = "";
  };
  const validateAndAddFiles = newFiles => {
    const validFiles = [];
    let errorMessage = "";
    if (files.length + newFiles.length > 5) {
      errorMessage = "Maximum 5 files allowed.";
    } else {
      newFiles.forEach(file => {
        if (file.size > 5 * 1024 * 1024) {
          errorMessage = `File ${file.name} is too large (Max 5MB).`;
        } else if (!["image/jpeg", "image/png", "application/pdf"].includes(file.type)) {
          errorMessage = `File ${file.name} is not a valid format (JPG, PNG, PDF only).`;
        } else {
          validFiles.push(file);
        }
      });
    }
    if (errorMessage) {
      alert(errorMessage);
    }
    setFiles(prev => [...prev, ...validFiles]);
  };
  const removeFile = index => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };
  const onSubmit = async data => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("productDescription", data.productDescription);
      formData.append("primaryMaterials", data.primaryMaterials);
      formData.append("intendedUse", data.intendedUse);
      formData.append("targetSystem", data.targetSystem);
      files.forEach(file => {
        formData.append("files", file);
      });
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || responseData.error || "Classification failed");
      }
      setHsCodeResult(responseData);
      reset();
      setFiles([]);
    } catch (err) {
      setHsCodeResult({
        error: err.message
      });
    } finally {
      setIsLoading(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    className: " flex flex-wrap justify-center items-center md:px-[10vw] px-[5vw] my-[5vw] gap-x-[2vw] gap-y-[1.5vw] ",
    onSubmit: handleSubmit(onSubmit),
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: " flex flex-col md:w-[35vw] w-[90vw] md:mt-0 mt-[5vw] relative ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        className: " md:text-[1vw] text-[3vw] text-[#1E2939] font-semibold md:leading-[1.2vw] leading-[3.2vw] ",
        children: [t("hs_code_generator_page.form_section.input_1.label"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "text-red-500",
          children: "*"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.5vw] md:leading-[1.5vw] leading-[3vw] ",
        children: t("hs_code_generator_page.form_section.input_1.note")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "relative",
        children: [errors.productDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ToolTipError__WEBPACK_IMPORTED_MODULE_3__["default"], {
          message: errors.productDescription.message
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
          className: `
                          w-full
                          border
                          md:mt-0 mt-[1.5vw]
                          md:rounded-[0.7vw] rounded-[2vw]
                          md:px-[1vw] px-[2vw]
                          md:py-[0.5vw] py-[1.5vw]
                          resize-none
                          focus:outline-none
                          italic focus:not-italic
                          md:h-[3.5vw] h-[10vw]
                          md:text-[0.7vw] text-[2vw]
                          text-[#99A1AF] focus:text-[#4A5565]/80
                          ${errors.productDescription ? "border-red-500 focus:border-red-500" : "border-[#B9AFD0]"}
                      `,
          placeholder: errors.productDescription ? errors.productDescription.message : t("hs_code_generator_page.form_section.input_1.placeholder"),
          ...register("productDescription", {
            required: "Product description is required",
            minLength: {
              value: 15,
              message: "Description must be at least 15 characters"
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: " flex flex-col md:w-[35vw] w-[90vw] md:mt-0 mt-[2vw] ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
        className: " md:text-[1vw] text-[3vw] text-[#1E2939] font-semibold md:leading-[1.2vw] leading-[3.2vw] ",
        children: t("hs_code_generator_page.form_section.input_2.label")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.5vw] md:leading-[1.5vw] leading-[3vw] ",
        children: t("hs_code_generator_page.form_section.input_2.note")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
        className: `
                        w-full
                        border
                        md:mt-0 mt-[1.5vw]
                        md:rounded-[0.7vw] rounded-[2vw]
                        md:px-[1vw] px-[2vw]
                        md:py-[0.5vw] py-[1.5vw]
                        resize-none
                        focus:outline-none
                        italic focus:not-italic
                        md:h-[3.5vw] h-[10vw]
                        md:text-[0.7vw] text-[2vw]
                        text-[#99A1AF] focus:text-[#4A5565]/80
                        ${errors.intendedUse ? "border-red-500 focus:border-red-500" : "border-[#B9AFD0]"}
                    `,
        placeholder: errors.intendedUse ? errors.intendedUse.message : t("hs_code_generator_page.form_section.input_2.placeholder"),
        ...register("intendedUse")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: " flex flex-col md:w-[35vw] w-[90vw] md:mt-0 mt-[2vw] ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
        className: " md:text-[1vw] text-[3vw] text-[#1E2939] font-semibold md:leading-[1.2vw] leading-[3.2vw] ",
        children: t("hs_code_generator_page.form_section.input_3.label")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.5vw] md:leading-[1.5vw] leading-[3vw] ",
        children: t("hs_code_generator_page.form_section.input_3.note")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
        className: `
                        w-full
                        border
                        md:mt-0 mt-[1.5vw]
                        md:rounded-[0.7vw] rounded-[2vw]
                        md:px-[1vw] px-[2vw]
                        md:py-[0.5vw] py-[1.5vw]
                        resize-none
                        focus:outline-none
                        italic focus:not-italic
                        md:h-[3.5vw] h-[10vw]
                        md:text-[0.7vw] text-[2vw]
                        text-[#99A1AF] focus:text-[#4A5565]/80
                        ${errors.primaryMaterials ? "border-red-500 focus:border-red-500" : "border-[#B9AFD0]"}
                    `,
        placeholder: errors.primaryMaterials ? errors.primaryMaterials.message : t("hs_code_generator_page.form_section.input_3.placeholder"),
        ...register("primaryMaterials")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: " flex flex-col md:w-[35vw] w-[90vw] md:mt-0 mt-[2vw] ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
        className: " md:text-[1vw] text-[3vw] text-[#1E2939] font-semibold md:leading-[1.2vw] leading-[3.2vw] ",
        children: t("hs_code_generator_page.form_section.input_images.label")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.5vw] md:leading-[1.5vw] leading-[3vw] ",
        children: t("hs_code_generator_page.form_section.input_images.note")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: " border border-[#B9AFD0] md:rounded-[0.7vw] rounded-[2vw] md:h-[3.5vw] h-[10vw] hover:bg-slate-50 transition-colors relative md:mt-0 mt-[1.5vw] ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "file",
          multiple: true,
          accept: "image/png, image/jpeg, application/pdf",
          onChange: handleFileChange,
          className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10",
          disabled: files.length >= 5
        }), files.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: " flex flex-row w-full z-20 relative md:gap-x-[0.35vw] gap-x-[1vw] justify-start items-center md:h-[3.5vw] h-[10vw] md:pl-[0.35vw] pl-[1vw] overflow-hidden ",
          children: files.map((file, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: " flex items-center justify-between bg-[#E5E7EB] md:rounded-[0.5vw] rounded-[1vw] text-start md:px-[0.5vw] px-[2.5vw] md:py-[0.75vw] py-[2vw] relative shrink-0 ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "md:text-[0.7vw] text-[2.2vw] text-[#1A1A1A] truncate",
              children: file.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "button",
              onClick: e => {
                e.preventDefault();
                e.stopPropagation();
                removeFile(index);
              },
              className: " text-slate-400 hover:text-red-500 rounded-full cursor-pointer absolute -right-[0.25vw] -top-[0.35vw] ",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#E5E7EB",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "#364153",
                className: "md:size-[1vw] size-[2.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                })
              })
            })]
          }, index))
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: " md:flex hidden flex-col md:w-[35vw] w-[90vw] self-end ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        className: " text-[#1E2939] text-[0.8vw] leading-[1.5vw] font-semibold ",
        children: [t("hs_code_generator_page.form_section.important_note.label_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "text-red-500",
          children: "*"
        }), "\xA0", t("hs_code_generator_page.form_section.important_note.label_2")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: " text-[#1E2939] text-[0.8vw] leading-[1.5vw] font-normal ",
        children: t("hs_code_generator_page.form_section.important_note.note")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: " flex flex-col md:w-[35vw] w-[90vw] md:mt-0 mt-[2vw] ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
        className: " md:text-[1vw] text-[3vw] text-[#1E2939] font-semibold md:leading-[1.2vw] leading-[3.2vw] ",
        children: [t("hs_code_generator_page.form_section.input_4.label"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "text-red-500",
          children: "*"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.5vw] md:leading-[1.5vw] leading-[3vw] ",
        children: t("hs_code_generator_page.form_section.input_4.note")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
        name: "targetSystem",
        control: control,
        render: ({
          field
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: " flex bg-white md:p-[0.2vw] p-[0.5vw] md:rounded-[0.7vw] rounded-[2vw] border border-[#B9AFD0] md:mt-0 mt-[2vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            type: "button",
            onClick: () => field.onChange("USA"),
            className: `
                            flex-1 flex
                            items-center justify-center
                            md:py-[0.5vw] py-[1.5vw]
                            md:text-[0.8vw] text-[2.5vw]
                            font-normal
                            md:rounded-[0.55vw] rounded-[1.35vw]
                            transition-all duration-500
                            cursor-pointer
                            ${field.value === "USA" ? "bg-[#4F378A]/90 text-white" : "text-[#4F378A]/90 hover:bg-slate-200/50"}`,
            children: t("hs_code_generator_page.form_section.input_4.option_1")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            type: "button",
            onClick: () => field.onChange("ROW"),
            className: `
                            flex-1 flex
                            items-center justify-center
                            md:py-[0.5vw] py-[1.5vw]
                            md:text-[0.8vw] text-[2.5vw]
                            font-normal
                            md:rounded-[0.55vw] rounded-[1.35vw]
                            transition-all duration-500
                            cursor-pointer
                            ${field.value === "ROW" ? "bg-[#4F378A]/90 text-white" : "text-[#4F378A]/90 hover:bg-slate-200/50"}`,
            children: t("hs_code_generator_page.form_section.input_4.option_2")
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: " flex flex-col md:w-[35vw] w-[90vw] "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: " flex flex-row-reverse md:w-[35vw] w-[90vw] md:mt-0 mt-[2vw] ",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "submit",
        disabled: isLoading,
        className: `
                        bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                        bg-size-[200%_100%] bg-position-[0%_0%]
                        hover:bg-position-[100%_0%]
                        transition-[background-position] duration-1000 ease-in-out
                        w-fit 
                        md:py-[0.35vw] py-[1vw]
                        md:px-[1.5vw] px-[4.5vw]
                        md:rounded-[2vw] rounded-full
                        text-white
                        md:text-[0.8vw] text-[2.5vw]
                        font-medium
                        cursor-pointer
                    `,
        children: isLoading ? t("hs_code_generator_page.form_section.find_hs_code_button_submitting") : t("hs_code_generator_page.form_section.find_hs_code_button")
      })
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/hs_code_generator/HsCodeGeneratorResult.js":
/*!***************************************************************************!*\
  !*** ./src/scripts/components/hs_code_generator/HsCodeGeneratorResult.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HsCodeGeneratorResult)
/* harmony export */ });
/* harmony import */ var _hooks_useHsCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useHsCode */ "./src/scripts/hooks/useHsCode.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/clipboard.js");
/* harmony import */ var _HierarchyPill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HierarchyPill */ "./src/scripts/components/hs_code_generator/HierarchyPill.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);







function HsCodeGeneratorResult() {
  const {
    hsCodeResult,
    setHsCodeResult
  } = (0,_hooks_useHsCode__WEBPACK_IMPORTED_MODULE_0__.useHsCode)();
  const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
  const handleCopy = text => {
    if (!text) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => triggerCopiedState()).catch(err => {
        console.warn("Navigator clipboard failed, using fallback.", err);
        fallbackCopyTextToClipboard(text);
      });
    } else {
      fallbackCopyTextToClipboard(text);
    }
  };
  const fallbackCopyTextToClipboard = text => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        triggerCopiedState();
      } else {
        console.error("Fallback copy failed.");
      }
    } catch (err) {
      console.error("Fallback copy error:", err);
    }
    document.body.removeChild(textArea);
  };
  const triggerCopiedState = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const getConfidenceInfo = confidence => {
    const percentage = Math.round(confidence * 100);
    if (percentage >= 80) {
      return {
        label: "High confidence",
        colorClass: "bg-green-500",
        textClass: "text-green-600",
        borderClass: "border-green-500"
      };
    } else if (percentage >= 50) {
      return {
        label: "Medium confidence",
        colorClass: "bg-orange-500",
        // Matches your image
        textClass: "text-orange-600",
        borderClass: "border-orange-500"
      };
    } else {
      return {
        label: "Low confidence",
        colorClass: "bg-red-500",
        textClass: "text-red-600",
        borderClass: "border-red-500"
      };
    }
  };
  const hsCodeResultRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!hsCodeResult?.error && hsCodeResultRef.current) {
      setTimeout(() => {
        hsCodeResultRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 500);
    }
  }, [hsCodeResult]);
  const handleGenerateAnotherHSCode = () => {
    setTimeout(() => {
      setHsCodeResult(null);
    }, 500);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    ref: hsCodeResultRef,
    className: " flex flex-col md:mb-[10vw] mb-[15vw] md:mt-0 mt-[10vw] justify-center items-center ",
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: " text-[#FF00E5] md:text-[2.5vw] text-[4vw] text-center font-semibold md:mb-[3vw] mb-[5vw] ",
      children: t("hs_code_generator_page.result_section.title")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: " flex md:flex-row flex-col justify-between md:w-[80vw] w-[90vw] md:px-[3vw] px-[5vw] md:py-[2vw] py-[5vw] mx-auto bg-white md:rounded-[1vw] rounded-[3vw] shadow-[0_0_5vw_rgba(255,0,229,0.10)] ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex flex-col gap-y-[1.5vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: " flex flex-col md:w-[35.5vw] w-[80vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: " md:text-[1vw] text-[2.5vw] text-[#1E2939] font-semibold md:leading-0 leading-[2.7vw] ",
            children: t("hs_code_generator_page.result_section.output_1.label")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.3vw] md:leading-[2vw] leading-[3vw] ",
            children: t("hs_code_generator_page.result_section.output_1.note")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: " flex relative items-center justify-between bg-[#F8F7FF] md:rounded-[1vw] rounded-[2vw] md:px-[2vw] px-[2.5vw] md:py-[0.5vw] py-[1vw] md:mt-0 mt-[2vw] ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: " font-mono md:text-[2.5vw] text-[5vw] font-semibold text-[#4B5563] tracking-wide ",
              children: hsCodeResult?.code
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              onClick: () => handleCopy(hsCodeResult?.code),
              className: `
                                    absolute
                                    md:block hidden
                                    right-[0.5vw] bottom-[0.5vw]
                                    p-2.5 rounded-[0.5vw] transition-all duration-200
                                    cursor-pointer
                                    ${isCopied ? "bg-green-100 text-green-600" : "bg-[#EBE8FB] text-[#402B73] hover:bg-[#EBE8FB]/80 hover:text-[#402B73]/80"}
                                `,
              title: "Copy to clipboard",
              children: isCopied ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
                className: "w-[1vw] h-[1vw]"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                className: "w-[1vw] h-[1vw]"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: " flex flex-col md:w-[35.5vw] w-[80vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: " md:text-[1vw] text-[2.5vw] text-[#1E2939] font-semibold md:leading-[1vw] leading-[2.7vw] md:mt-0 mt-[3vw] ",
            children: t("hs_code_generator_page.result_section.output_3.label")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.3vw] md:leading-[1vw] leading-[3vw] md:mb-[0.5vw] mb-[2vw] ",
            children: t("hs_code_generator_page.result_section.output_3.note")
          }), hsCodeResult?.confidence && (() => {
            const info = getConfidenceInfo(hsCodeResult?.confidence);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: " bg-[#F8F7FF] md:rounded-[1vw] rounded-[3vw] md:px-[1vw] px-[3vw] md:pt-[1vw] pt-[2.5vw] md:pb-[0.5vw] pb-[1vw] ",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: `w-full md:h-[1.5vw] h-[6vw] rounded-full border ${info.borderClass} bg-white p-1`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: `h-full rounded-full ${info.colorClass} transition-all duration-1000 ease-out`,
                    style: {
                      width: `${hsCodeResult?.confidence * 100}%`
                    }
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: `text-center md:mt-[0.5vw] mt-[1.5vw] font-bold ${info.textClass} md:text-[1vw] text-[3vw]`,
                  children: [(hsCodeResult?.confidence * 100).toFixed(0), "%", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "font-bold ml-1",
                    children: info.label
                  })]
                })]
              })
            });
          })()]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex flex-col gap-y-[1.5vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: " flex flex-col md:w-[35.5vw] w-[80vw] md:mt-0 mt-[2vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: " md:text-[1vw] text-[2.5vw] text-[#1E2939] font-semibold md:leading-0 leading-[2.7vw] ",
            children: t("hs_code_generator_page.result_section.output_2.label")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.3vw] md:leading-[2vw] leading-[3vw] ",
            children: t("hs_code_generator_page.result_section.output_2.note")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: " overflow-auto md:h-[7vw] h-[24vw] bg-[#F8F7FF] md:rounded-[1vw] rounded-[3vw] md:px-[1vw] px-[3vw] md:py-[0.5vw] py-[2vw] md:text-[0.8vw] text-[2.3vw] text-[#4A5565] md:mt-0 mt-[2vw] ",
            children: hsCodeResult?.justification
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: " flex flex-col md:w-[35.5vw] w-[80vw] md:mt-0 mt-[2vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: " md:text-[1vw] text-[2.5vw] text-[#1E2939] font-semibold md:leading-[1vw] leading-[2.7vw] ",
            children: t("hs_code_generator_page.result_section.output_4.label")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: " text-[#4A5565]/80 md:text-[0.8vw] text-[2.3vw] md:leading-[1vw] leading-[3vw] md:mb-[0.5vw] mb-[2vw] ",
            children: t("hs_code_generator_page.result_section.output_4.note")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: " flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] bg-[#F8F7FF] md:rounded-[1vw] rounded-[2vw] md:px-[0.5vw] px-[3vw] md:py-[0.85vw] py-[2vw] ",
            children: hsCodeResult?.tariffHierarchy && hsCodeResult?.tariffHierarchy.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_HierarchyPill__WEBPACK_IMPORTED_MODULE_4__["default"], {
              item: item
            }, index))
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "md:mt-[3vw] mt-[8vw]",
      to: "hs-code-generator/#",
      end: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        type: "button",
        onClick: handleGenerateAnotherHSCode,
        className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.5vw] py-[1.4vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white md:font-medium font-normal md:text-[0.8vw] text-[2.4vw] w-fit md:mb-[2vw] mb-[7vw] ",
        style: {
          fontFamily: "Karla, system-ui, -apple-system, sans-serif"
        },
        children: t("hs_code_generator_page.result_section.generate_another_hs_code_button")
      })
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/hs_code_generator/ToolTipError.js":
/*!******************************************************************!*\
  !*** ./src/scripts/components/hs_code_generator/ToolTipError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TooltipError)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TooltipError({
  message
}) {
  if (!message) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: " absolute left-0 md:-top-[2vw] -top-[7vw] z-50 animate-in fade-in slide-in-from-bottom-[1vw] duration-500 ",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: " relative flex items-center bg-red-500 text-white md:text-[0.7vw] text-[2.2vw] font-medium md:py-[0.25vw] py-[1.5vw] md:px-[0.5vw] px-[2.5vw] md:rounded-[0.5vw] rounded-[2vw] gap-1.5 whitespace-nowrap ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
        className: " md:w-[1vw] w-[3vw] md:h-[1vw] h-[3vw] "
      }), message, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute top-full left-4 -translate-x-1/2 border-4 border-transparent border-t-red-500"
      })]
    })
  });
}

/***/ }),

/***/ "./src/scripts/components/shipment_tracker/Badge.js":
/*!**********************************************************!*\
  !*** ./src/scripts/components/shipment_tracker/Badge.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Badge = ({
  badge_text,
  text_color,
  bg_color,
  className = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
    className: `
                flex flex-row
                md:gap-x-[0.5vw] gap-x-[1.5vw]
                items-center
                text-[${text_color}] font-semibold
                bg-[${bg_color}]
                md:rounded-[0.5vw] rounded-[1.5vw]
                md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]
                select-none
                w-fit
                ${className}
            `,
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#FF00E5",
      viewBox: "0 0 24 24",
      strokeWidth: 0,
      stroke: "currentColor",
      className: "md:size-[0.5vw] size-[1.5vw]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      })
    }), badge_text]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ "./src/scripts/components/shipment_tracker/ToolsHeroSection.js":
/*!*********************************************************************!*\
  !*** ./src/scripts/components/shipment_tracker/ToolsHeroSection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ToolsHeroSection = ({
  activePage = "file-a-claim"
}) => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const activeButtonStyle = "bg-[#99008A] text-white font-bold rounded-full md:px-[1.5vw] px-[2.5vw] md:py-[0.45vw] py-[1vw] text-center cursor-pointer md:text-[0.8vw] text-[3vw] whitespace-nowrap";
  const inactiveButtonStyle = "text-[#1A1A1A] text-center md:text-[0.8vw] text-[3vw] cursor-pointer md:px-[1vw] px-[2vw] md:py-[0.45vw] py-[1vw] whitespace-nowrap";
  const desktopBgUrl = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipment_tracker_cover_image_v3.webp";
  const mobileBgUrl = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipment_tracker_cta_image.svg";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: " flex flex-col w-screen md:h-auto h-[70vw] bg-cover bg-center bg-no-repeat text-white text-[0.8vw] font-normal /* Use CSS Variables to handle the URLs safely */ bg-(image:--bg-mobile)  md:bg-(image:--bg-desktop) ",
    style: {
      "--bg-mobile": `url('${mobileBgUrl}')`,
      "--bg-desktop": `url('${desktopBgUrl}')`,
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `
              ${i18n.language === "vn" ? "md:w-[50vw] w-screen" : "md:w-[40vw] w-screen"}
              md:ps-[10vw] ps-[12vw]
              md:pe-0 pe-[12vw]
              md:pt-[5vw] pt-[15vw]
              md:pb-[5vw] pb-[25vw]
              flex flex-col
              md:justify-start justify-center md:items-start items-center
              md:gap-y-[1vw] gap-y-[3vw]
              z-2
          `,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: " md:text-[2.4vw] text-[7vw] md:text-start md:justify-start md:font-bold font-semibold text-center ",
        children: t("shipment_tracker.hero_section.title")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: `
              md:text-[1vw] text-[2.8vw] md:font-semibold
              md:text-start text-center max-w-full leading-[1.2]
              ${i18n.language === "vn" && "md:w-[30vw] w-full"}
          `,
        children: t("shipment_tracker.hero_section.description")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: " flex flex-row md:gap-x-0 gap-x-[1.5vw] bg-white rounded-full md:py-[0.15vw] py-[0.7vw] md:px-[0.20vw] px-[0.7vw] w-fit items-center justify-center md:text-[0.8vw] text-[2.8vw] ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
          to: "/shipment-tracker",
          end: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: activePage === "shipment-tracker" ? activeButtonStyle : inactiveButtonStyle,
            children: t("shipment_tracker.hero_section.buttons.shipment_tracker")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
          to: "/hs-code-generator",
          end: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: activePage === "hs-code-generator" ? activeButtonStyle : inactiveButtonStyle,
            children: t("shipment_tracker.hero_section.buttons.hs_code_generator")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
          to: "/file-a-claim",
          end: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: activePage === "file-a-claim" ? activeButtonStyle : inactiveButtonStyle,
            children: t("shipment_tracker.hero_section.buttons.file_a_claim")
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolsHeroSection);

/***/ }),

/***/ "./src/scripts/components/ui/SEO.js":
/*!******************************************!*\
  !*** ./src/scripts/components/ui/SEO.js ***!
  \******************************************/
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
  delay = 1000
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();

  // Prepend language prefix if not default
  const langPrefix = _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language !== "en" ? `/${_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language}` : "";
  let fullPath = to.startsWith("/") ? `${langPrefix}${to}` : `${langPrefix}/${to}`;

  // Remove double slashes if any
  fullPath = fullPath.replace(/\/+/g, "/");
  const handleClick = e => {
    const [pathname, hash] = fullPath.split("#");
    const isSamePath = location.pathname === pathname;
    if (hash) {
      e.preventDefault();
      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) target.scrollIntoView({
            behavior: "smooth"
          });
        }, 300);
      } else {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({
          behavior: "smooth"
        });
      }
      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    } else {
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

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_hs_code_generator_HsCodeGenerator_js.js.map?ver=e5c48e4ed4c2b01c6836