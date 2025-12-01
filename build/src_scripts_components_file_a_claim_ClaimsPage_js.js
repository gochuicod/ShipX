"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_file_a_claim_ClaimsPage_js"],{

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

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-check-big.js":
/*!**********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleCheckBig)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("circle-check-big", __iconNode);


//# sourceMappingURL=circle-check-big.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/copy.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/copy.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Copy)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("copy", __iconNode);


//# sourceMappingURL=copy.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/x.js":
/*!*******************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/x.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("x", __iconNode);


//# sourceMappingURL=x.js.map


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

/***/ "./src/scripts/components/file_a_claim/ClaimSubmissionModal.js":
/*!*********************************************************************!*\
  !*** ./src/scripts/components/file_a_claim/ClaimSubmissionModal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/copy.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);



const ClaimSubmissionModal = ({
  isOpen,
  onClose,
  status = "success",
  claimId,
  message
}) => {
  const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  if (!isOpen) return null;
  const handleCopySuccess = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };
  const copyToClipboard = () => {
    if (!claimId) return;

    // 1. Try the modern Clipboard API (Works in HTTPS/Secure Contexts)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(claimId).then(() => handleCopySuccess()).catch(() => fallbackCopyTextToClipboard(claimId));
    } else {
      // 2. Fallback for non-secure environments (HTTP/Localhost)
      fallbackCopyTextToClipboard(claimId);
    }
  };
  const fallbackCopyTextToClipboard = text => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // Ensure textarea is not visible but part of the DOM
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (successful) {
        handleCopySuccess();
      } else {
        console.error("Fallback: Copying text command failed");
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
  };
  const isSuccess = status === "success";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-[4vw] md:p-[1vw] animate-in fade-in duration-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bg-white rounded-[6vw] md:rounded-[1.5vw] shadow-2xl w-[90vw] md:w-[35vw] p-[8vw] md:p-[2vw] relative flex flex-col items-center text-center transform transition-all scale-100",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        onClick: onClose,
        className: "absolute top-[4vw] right-[4vw] md:top-[1.5vw] md:right-[1.5vw] text-gray-400 hover:text-gray-600 transition-colors",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: `w-[16vw] h-[16vw] md:w-[4vw] md:h-[4vw] rounded-full flex items-center justify-center mb-[6vw] md:mb-[1.5vw] ${isSuccess ? "bg-green-100" : "bg-red-100"}`,
        children: isSuccess ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] text-green-500"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] text-red-500"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        className: "font-bold text-gray-800 mb-[2vw] md:mb-[0.5vw] text-[6vw] md:text-[1.5vw]",
        children: isSuccess ? "Thank you." : "Submission Failed"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "font-bold text-gray-800 mb-[4vw] md:mb-[1vw] text-[5vw] md:text-[1.2vw]",
        children: isSuccess ? "Your claim has been submitted." : message || "An error occurred."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-gray-500 mb-[8vw] md:mb-[2vw] px-[4vw] md:px-[1vw] leading-relaxed text-[3.5vw] md:text-[0.9vw]",
        children: isSuccess ? "A Customer Support agent will respond within 24 business hours." : "Please check your details and try again. If the issue persists, contact support."
      }), isSuccess && claimId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "w-full mb-[6vw] md:mb-[1.5vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "font-bold text-gray-700 mb-[2vw] md:mb-[0.5vw] text-[3.5vw] md:text-[0.9vw]",
          children: "Your reference ID is:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "bg-[#F3F1FF] border border-[#E0D4FC] rounded-[3vw] md:rounded-[0.8vw] p-[4vw] md:p-[1vw] flex items-center justify-center gap-[3vw] md:gap-[0.8vw] group relative cursor-pointer hover:bg-[#ECE5FF] transition-colors",
          onClick: copyToClipboard,
          title: "Click to copy",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "font-extrabold text-[#99008A] tracking-wider break-all text-[4vw] md:text-[1.5vw]",
            children: claimId
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: `transition-colors ${isCopied ? "text-green-600" : "text-gray-400 hover:text-[#99008A]"}`,
            children: isCopied ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]"
            })
          }), isCopied && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "absolute -top-[8vw] md:-top-[2vw] bg-black text-white py-[1vw] px-[2vw] md:py-[0.3vw] md:px-[0.6vw] rounded opacity-100 transition-opacity text-[3vw] md:text-[0.75vw]",
            children: "Copied!"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "text-gray-400 italic mt-[4vw] md:mt-[1vw] mb-[2vw] md:mb-[0.5vw] leading-relaxed max-w-xs mx-auto text-[3vw] md:text-[0.75vw]",
          children: "Please keep this number for your records."
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimSubmissionModal);

/***/ }),

/***/ "./src/scripts/components/file_a_claim/ClaimsPage.js":
/*!***********************************************************!*\
  !*** ./src/scripts/components/file_a_claim/ClaimsPage.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/SEO */ "./src/scripts/components/ui/SEO.js");
/* harmony import */ var _FileAClaimForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileAClaimForm */ "./src/scripts/components/file_a_claim/FileAClaimForm.js");
/* harmony import */ var _shipment_tracker_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shipment_tracker/ToolsHeroSection */ "./src/scripts/components/shipment_tracker/ToolsHeroSection.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const ClaimsPage = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "File a Claim | ShipX",
      description: "Submit a claim for lost, damaged, or delayed shipments.",
      canonical: "https://shipx.com/file-a-claim",
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "w-screen min-h-screen flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shipment_tracker_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activePage: "file-a-claim"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FileAClaimForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: " flex flex-col md:w-[80vw] w-screen md:h-auto h-[80vw] bg-cover bg-center bg-no-repeat mx-auto md:mb-[4vw] mb-0 text-white text-[0.8vw] font-normal md:rounded-[1vw] rounded-[0.00000001vw] overflow-hidden md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@ffab8ad2ad6bf54f2ed5c615722bff70ee96f7ef/src/assets/shipment_tracker_cta_image.webp')] bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@281b9212a310690d195ec2f7ac6057b96436d583/src/assets/shipment_tracker_cta_image_mobile.svg')] ",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: " flex flex-col md:gap-y-0 gap-y-[3vw] md:w-[40vw] w-screen md:ps-[8vw] ps-[10vw] md:pe-0 pe-[10vw] md:py-[5vw] py-[10vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: " md:px-0 px-[5vw] md:text-[2vw] text-[7vw] md:text-start text-center md:leading-[3vw] leading-[8vw] font-semibold ",
            children: "Experience the Future of Shipping"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: " font-normal opacity-95 pb-[1vw] md:text-[0.9vw] text-[2.5vw] md:text-start text-center md:leading-[1.5vw] leading-[3vw] md:px-0 px-[3vw] ",
            children: "Don't just read about our latest tools \u2014 let us show you how they work and what they can do for your business."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: " flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] md:justify-start justify-center md:items-center items-center ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
                to: "/book-a-demo",
                end: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  type: "button",
                  className: " flex flex-row items-center justify-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white/15 text-white border border-white/95 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ",
                  children: "Book a Demo"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
              to: "/#contact-us",
              end: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                type: "button",
                className: " flex flex-row items-center justify-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white/15 text-white border border-white/95 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ",
                children: "Contact Us"
              })
            })]
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimsPage);

/***/ }),

/***/ "./src/scripts/components/file_a_claim/FileAClaimForm.js":
/*!***************************************************************!*\
  !*** ./src/scripts/components/file_a_claim/FileAClaimForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _shipment_tracker_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shipment_tracker/Badge */ "./src/scripts/components/shipment_tracker/Badge.js");
/* harmony import */ var _ClaimSubmissionModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClaimSubmissionModal */ "./src/scripts/components/file_a_claim/ClaimSubmissionModal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const FileAClaimForm = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    fullName: "",
    email: "",
    phone: "",
    role: "Sender",
    accountNumber: "",
    country: "",
    claimType: "",
    trackingNumber: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [modalConfig, setModalConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    status: "success",
    claimId: "",
    message: ""
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleRoleChange = role => {
    setFormData(prev => ({
      ...prev,
      role
    }));
  };
  const mapClaimType = type => {
    const map = {
      lost: "Missing",
      damaged: "Damage",
      late: "Late",
      customs: "Customs"
    };
    return map[type] || "Other";
  };
  const handleSubmit = async e => {
    e.preventDefault();

    // --- VALIDATION START ---
    // Check if description is at least 25 characters
    if (formData.description.length < 25) {
      setModalConfig({
        status: "error",
        claimId: "",
        message: `Description is too short. Please add ${25 - formData.description.length} more characters.`
      });
      setShowModal(true);
      return; // Stop execution here
    }
    // --- VALIDATION END ---

    setIsSubmitting(true);
    const payload = {
      customerName: formData.fullName,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      // Only send account number if role is Sender, otherwise N/A
      accountNumber: formData.role === "Sender" && formData.accountNumber ? formData.accountNumber : "N/A",
      claimantType: formData.role === "Sender" ? "shipper" : "receiver",
      country: formData.country,
      claimType: mapClaimType(formData.claimType),
      trackingNumber: formData.trackingNumber,
      description: formData.description
    };
    try {
      const response = await fetch("https://file-a-claim.replit.app/api/claims/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        result = null;
      }
      if (response.ok && result?.success !== false) {
        const backendReference = result?.referenceId || result?.reference_id;
        setModalConfig({
          status: "success",
          claimId: backendReference || "RECEIVED",
          message: "Claim submitted successfully."
        });
        setShowModal(true);
        setFormData(prev => ({
          ...prev,
          description: "",
          trackingNumber: ""
        }));
      } else {
        let errorMessage;
        if (response.status === 400) {
          errorMessage = "Tracking number not found in our system.";
        } else {
          errorMessage = result?.details || result?.message || result?.error || "Submission failed. Please check your details.";
        }
        setModalConfig({
          status: "error",
          claimId: "",
          message: errorMessage
        });
        setShowModal(true);
      }
    } catch (error) {
      console.error("Network/System Error:", error);
      setModalConfig({
        status: "error",
        claimId: "",
        message: "Network error. Please try again later."
      });
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common styling classes using vw
  const labelClass = "text-gray-700 font-bold text-[3.5vw] md:text-[1vw]";
  const inputClass = "border border-[#B9AFD0] rounded-lg p-[3vw] md:p-[0.7vw] focus:outline-none focus:border-[#99008A] w-full bg-white text-[3.5vw] md:text-[0.9vw]";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ClaimSubmissionModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isOpen: showModal,
      onClose: () => setShowModal(false),
      status: modalConfig.status,
      claimId: modalConfig.claimId,
      message: modalConfig.message
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-col items-center justify-center w-full py-[10vw] md:py-[5vw] px-[5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col items-center gap-y-[2vw] md:gap-y-[0.8vw] mb-[6vw] md:mb-[3vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shipment_tracker_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "text-[2.5vw] md:text-[0.8vw]",
          badge_text: t("file_a_claim.header_section.badge_text"),
          text_color: "#FF00E5",
          bg_color: "#F3F1FF"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "font-bold text-[#1E2939] text-center text-[6vw] md:text-[2.5vw]",
          children: t("file_a_claim.header_section.title")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-[#63666D] text-center w-full md:max-w-[40vw] leading-[1.4] text-[3.5vw] md:text-[0.9vw]",
          children: t("file_a_claim.header_section.description")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
        onSubmit: handleSubmit,
        className: "w-full md:w-[65vw]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-y-[6vw] md:gap-y-0 md:gap-x-[2vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col h-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "p-[4vw] md:p-[1.5vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center gap-x-[2vw] md:gap-x-[0.8vw] mb-[1vw] md:mb-[0.5vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/person-laptop.svg",
                  alt: "Personal Details",
                  className: "w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                  className: "text-[#FF00E5] font-bold text-[4.5vw] md:text-[1.2vw]",
                  children: t("file_a_claim.form_section.personal_details.title")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-gray-500 leading-relaxed text-[3.2vw] md:text-[0.85vw]",
                children: t("file_a_claim.form_section.personal_details.description")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex flex-col gap-y-[4vw] md:gap-y-[1.2vw] bg-[#FBF9FF] p-[4vw] md:p-[1.5vw] rounded-[4vw] md:rounded-[1vw] h-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col gap-[1vw] md:gap-[0.3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                  className: labelClass,
                  children: [t("file_a_claim.form_section.fields.full_name.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-red-500",
                    children: "*"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                  type: "text",
                  name: "fullName",
                  placeholder: t("file_a_claim.form_section.fields.full_name.placeholder"),
                  className: inputClass,
                  value: formData.fullName,
                  onChange: handleChange,
                  required: true
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col gap-[1vw] md:gap-[0.3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                  className: labelClass,
                  children: [t("file_a_claim.form_section.fields.email.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-red-500",
                    children: "*"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                  type: "email",
                  name: "email",
                  placeholder: t("file_a_claim.form_section.fields.email.placeholder"),
                  className: inputClass,
                  value: formData.email,
                  onChange: handleChange,
                  required: true
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col gap-[1vw] md:gap-[0.3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                  className: labelClass,
                  children: [t("file_a_claim.form_section.fields.phone_number.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-red-500",
                    children: "*"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex gap-[2vw] md:gap-[0.5vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "text",
                    placeholder: "+123",
                    className: `${inputClass} w-[25%] bg-gray-50`
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "tel",
                    name: "phone",
                    placeholder: t("file_a_claim.form_section.fields.phone_number.placeholder"),
                    className: inputClass,
                    value: formData.phone,
                    onChange: handleChange,
                    required: true
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col gap-[1vw] md:gap-[0.3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                  className: labelClass,
                  children: [t("file_a_claim.form_section.fields.claimant_role.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-red-500",
                    children: "*"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex w-full border border-[#B9AFD0] rounded-lg overflow-hidden bg-white",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                    type: "button",
                    onClick: () => handleRoleChange("Sender"),
                    className: `w-1/2 p-[3vw] md:p-[0.7vw] flex items-center justify-center gap-[2vw] md:gap-[0.5vw] transition-colors font-medium text-[3.5vw] md:text-[0.9vw] hover:cursor-pointer ${formData.role === "Sender" ? "bg-[#4F378A] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/file_a_claim_box-return.svg",
                      alt: "Sender",
                      className: "w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]"
                    }), t("file_a_claim.form_section.fields.claimant_role.options.sender")]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                    type: "button",
                    onClick: () => handleRoleChange("Receiver"),
                    className: `w-1/2 p-[3vw] md:p-[0.7vw] flex items-center justify-center gap-[2vw] md:gap-[0.5vw] transition-colors font-medium text-[3.5vw] md:text-[0.9vw] hover:cursor-pointer ${formData.role === "Receiver" ? "bg-[#4F378A] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/file_a_claim_parachute.svg",
                      alt: "Receiver",
                      className: "w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]"
                    }), t("file_a_claim.form_section.fields.claimant_role.options.receiver")]
                  })]
                })]
              }), formData.role === "Sender" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col gap-[1vw] md:gap-[0.3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                  className: labelClass,
                  children: t("file_a_claim.form_section.fields.account_number.label")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-[2.8vw] md:text-[0.75vw] text-gray-400",
                  children: t("file_a_claim.form_section.fields.account_number.hint")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                  type: "text",
                  name: "accountNumber",
                  placeholder: t("file_a_claim.form_section.fields.account_number.placeholder"),
                  className: inputClass,
                  value: formData.accountNumber,
                  onChange: handleChange
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col h-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "p-[4vw] md:p-[1.5vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex items-center gap-x-[2vw] md:gap-x-[0.8vw] mb-[1vw] md:mb-[0.5vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/airplane.svg",
                  alt: "Shipment Details",
                  className: "w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                  className: "text-[#FF00E5] font-bold text-[4.5vw] md:text-[1.2vw]",
                  children: t("file_a_claim.form_section.shipment_details.title")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "text-gray-500 leading-relaxed text-[3.2vw] md:text-[0.85vw]",
                children: t("file_a_claim.form_section.shipment_details.description")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex flex-col gap-y-[4vw] md:gap-y-[1.2vw] bg-[#FBF9FF] p-[4vw] md:p-[1.5vw] rounded-[4vw] md:rounded-[1vw] h-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-row gap-[3vw] md:gap-[1vw] w-full",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex flex-col gap-[1vw] md:gap-[0.3vw] w-1/2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    className: labelClass,
                    children: [t("file_a_claim.form_section.fields.country.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-red-500",
                      children: "*"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                    name: "country",
                    className: `${inputClass} hover:cursor-pointer`,
                    value: formData.country,
                    onChange: handleChange,
                    required: true,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "",
                      children: t("file_a_claim.form_section.fields.country.default_option")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "VN",
                      children: t("file_a_claim.form_section.fields.country.options.vn")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "MY",
                      children: t("file_a_claim.form_section.fields.country.options.my")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "TH",
                      children: t("file_a_claim.form_section.fields.country.options.th")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "PH",
                      children: t("file_a_claim.form_section.fields.country.options.ph")
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex flex-col gap-[1vw] md:gap-[0.3vw] w-1/2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    className: labelClass,
                    children: [t("file_a_claim.form_section.fields.claim_type.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-red-500",
                      children: "*"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                    name: "claimType",
                    className: `${inputClass} hover:cursor-pointer`,
                    value: formData.claimType,
                    onChange: handleChange,
                    required: true,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "",
                      children: t("file_a_claim.form_section.fields.claim_type.default_option")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "lost",
                      children: t("file_a_claim.form_section.fields.claim_type.options.lost")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "damaged",
                      children: t("file_a_claim.form_section.fields.claim_type.options.damaged")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "late",
                      children: t("file_a_claim.form_section.fields.claim_type.options.late")
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col gap-[1vw] md:gap-[0.3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                  className: labelClass,
                  children: [t("file_a_claim.form_section.fields.tracking_number.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-red-500",
                    children: "*"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                  type: "text",
                  name: "trackingNumber",
                  placeholder: t("file_a_claim.form_section.fields.tracking_number.placeholder"),
                  className: inputClass,
                  value: formData.trackingNumber,
                  onChange: handleChange,
                  minLength: 8,
                  required: true
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex flex-col gap-[1vw] md:gap-[0.3vw] grow",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex justify-between items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    className: labelClass,
                    children: [t("file_a_claim.form_section.fields.description.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-red-500",
                      children: "*"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: `text-[3vw] md:text-[0.75vw] ${formData.description.length < 25 ? "text-red-400" : "text-green-500"}`,
                    children: [formData.description.length, "/25"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
                  name: "description",
                  placeholder: t("file_a_claim.form_section.fields.description.placeholder"),
                  className: `${inputClass} h-[35vw] md:h-full resize-none`,
                  value: formData.description,
                  onChange: handleChange,
                  required: true,
                  minLength: 25
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "flex flex-col items-end mt-[2vw] md:mt-[1vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  type: "submit",
                  disabled: isSubmitting,
                  className: `
                      bg-linear-to-r from-[#80358E] to-[#E6007E]
                      text-white font-bold
                      py-[2.5vw] px-[8vw] md:py-[0.8vw] md:px-[3vw]
                      rounded-full
                      shadow-lg hover:shadow-xl
                      transition-transform transform hover:-translate-y-1
                      text-[4vw] md:text-[1vw] hover:cursor-pointer
                      ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
                    `,
                  children: isSubmitting ? "Sending..." : t("file_a_claim.form_section.buttons.submit_claim")
                })
              })]
            })]
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileAClaimForm);

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
//# sourceMappingURL=src_scripts_components_file_a_claim_ClaimsPage_js.js.map?ver=d5dd492e38a688c65a2a