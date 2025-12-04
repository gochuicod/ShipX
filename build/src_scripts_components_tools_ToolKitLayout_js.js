"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_tools_ToolKitLayout_js"],{

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
    className: " absolute left-0 md:-top-[2vw] -top-[7vw] animate-in fade-in slide-in-from-bottom-[1vw] duration-500 ",
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

/***/ "./src/scripts/components/tools/Button.js":
/*!************************************************!*\
  !*** ./src/scripts/components/tools/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./src/scripts/components/tools/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({
  children,
  isLoading,
  className = "",
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
  type: "submit",
  className: `${_styles__WEBPACK_IMPORTED_MODULE_0__.STYLES.button} ${className} font-bold`,
  ...props,
  style: {
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
  },
  children: children
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/scripts/components/tools/FileClaimForm.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/tools/FileClaimForm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/scripts/components/tools/Input.js");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextArea */ "./src/scripts/components/tools/TextArea.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/scripts/components/tools/Button.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





// import { useTranslation } from "react-i18next";
// import ToolTipError from "./ToolTipError";

const FileClaimForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    // formState: { errors, isSubmitted },
    clearErrors,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  // const { t } = useTranslation();

  const fileClaimDescription = watch("fileClaimDescription");
  const minLength = 25;
  const currentLength = fileClaimDescription?.length || 0;
  const onSubmit = data => {
    navigate(`/file-a-claim?trackingNumber=${data.fileClaimTrackingNumber}&description=${data.fileClaimDescription}`);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "w-full flex flex-col gap-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
        ...register("fileClaimTrackingNumber", {
          required: "Tracking number is required.",
          minLength: {
            value: 8,
            message: "Minimum 8 characters."
          },
          onChange: () => clearErrors("fileClaimTrackingNumber")
        }),
        label: "Tracking Number",
        id: "fileClaimTrackingNumber",
        required: true,
        placeholder: "Enter tracking number (min 8 characters)",
        error: errors.fileClaimTrackingNumber
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_1__["default"], {
        currentLength: currentLength,
        minLength: minLength,
        ...register("fileClaimDescription", {
          required: "A description of the claim is required.",
          onChange: () => clearErrors("fileClaimDescription")
        }),
        label: "Description",
        id: "fileClaimDescription",
        required: true,
        placeholder: "Please provide as much detail as possible about your claim...",
        error: errors.fileClaimDescription
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "flex justify-end mt-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "submit",
        children: "Continue adding details"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileClaimForm);

/***/ }),

/***/ "./src/scripts/components/tools/HSCodeForm.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/tools/HSCodeForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea */ "./src/scripts/components/tools/TextArea.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/scripts/components/tools/Button.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






// import ToolTipError from "./ToolTipError";

const HSCodeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: {
      errors,
      isSubmitted
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const productDescriptionValue = watch("productDescription");
  const minLength = 15;
  const currentLength = productDescriptionValue?.length || 0;
  const onSubmit = data => {
    navigate(`/hs-code-generator?productDescription=${data.productDescription}`);
  };
  const [touchedProductDescription, setTouchedProductDescription] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "w-full flex flex-col gap-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_0__["default"], {
      currentLength: currentLength,
      minLength: minLength,
      ...register("productDescription", {
        required: "Product description is required.",
        minLength: {
          value: minLength,
          message: `Description must be at least ${minLength} characters.`
        },
        onChange: e => {
          clearErrors("productDescription");
          if (!touchedProductDescription) setTouchedProductDescription(true);
        }
      }),
      label: t("hs_code_generator_page.form_section.input_1.label"),
      id: "productDescription",
      required: true,
      placeholder: t("hs_code_generator_page.form_section.input_1.placeholder"),
      error: errors.productDescription,
      isSubmitted: isSubmitted
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "flex justify-end md:mt-0 mt-[1vw]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "submit",
        children: "Continue adding details"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HSCodeForm);

/***/ }),

/***/ "./src/scripts/components/tools/Input.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/tools/Input.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/scripts/components/tools/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Input = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  label,
  error,
  required,
  className = "",
  containerClass = "",
  ...props
}, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
  className: `w-full ${containerClass}`,
  children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: `${_styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.label} md:text-[0.8vw] text-[2.5vw]`,
    htmlFor: props.id,
    children: [label, " ", required && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "text-red-500",
      children: "*"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "relative",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      ref: ref,
      className: `
          ${_styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.input} 
          ${error ? _styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.inputError : _styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.inputDefault}
          ${className}
        `,
      "aria-invalid": error ? "true" : "false",
      ...props
    })
  })]
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./src/scripts/components/tools/ShipmentTrackerForm.js":
/*!*************************************************************!*\
  !*** ./src/scripts/components/tools/ShipmentTrackerForm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ "./src/scripts/components/tools/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./src/scripts/components/tools/Button.js");
/* harmony import */ var _hs_code_generator_ToolTipError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hs_code_generator/ToolTipError */ "./src/scripts/components/hs_code_generator/ToolTipError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const ShipmentTrackerForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isSubmitted
    },
    watch,
    clearErrors
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const onSubmit = data => {
    navigate(`/shipment-tracker?trackingNumber=${data.trackingNumber}&autosubmit=true`);
  };
  const trackingNumberValue = watch("trackingNumber");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (errors.trackingNumber) {
      clearErrors("trackingNumber");
    }
  }, [trackingNumberValue, clearErrors]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "w-full flex flex-col gap-y-[0.5vw]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
      className: "md:text-[1vw] text-[2.5vw] font-semibold text-[#1E2939]",
      children: t("shipment_tracker.track_order_section.form.label")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "relative flex flex-row md:gap-x-[1vw] gap-x-[3vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "grow relative",
        children: [isSubmitted && errors.trackingNumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_hs_code_generator_ToolTipError__WEBPACK_IMPORTED_MODULE_6__["default"], {
          message: errors.trackingNumber.message
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
          ...register("trackingNumber", {
            required: "Tracking number is required",
            pattern: {
              value: /^[A-Za-z0-9]{2,20}$/,
              message: "Please enter a valid tracking number"
            },
            validate: value => {
              if (/\s/.test(value)) return "Tracking number cannot contain spaces";
              return true;
            },
            onChange: () => {
              clearErrors("trackingNumber");
              if (shipmentData?.errors) setShipmentData(null);
            }
          }),
          id: "trackingNumber",
          placeholder: t("shipment_tracker.track_order_section.form.placeholder"),
          error: errors.trackingNumber
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "submit",
        disabled: isSubmitting,
        children: isSubmitting ? t("shipment_tracker.track_order_section.form.submitting") : t("shipment_tracker.track_order_section.form.submit_button")
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipmentTrackerForm);

/***/ }),

/***/ "./src/scripts/components/tools/TabSwitcher.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/tools/TabSwitcher.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TabSwitcher = ({
  activeTab,
  setActiveTab
}) => {
  const tabs = [{
    id: "tracker",
    label: "Shipment Tracker"
  }, {
    id: "hscode",
    label: "HS Code Generator"
  }, {
    id: "claim",
    label: "File a Claim"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    role: "tablist",
    className: " flex flex-row bg-white rounded-full md:p-[0.15vw] p-[0.5vw] border border-[#B9AFD0] md:w-[30vw] w-full md:mb-[1vw] mb-[3vw] ",
    children: tabs.map(tab => {
      const isActive = activeTab === tab.id;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        role: "tab",
        "aria-selected": isActive,
        onClick: () => setActiveTab(tab.id),
        className: `
              flex-1
              md:px-[1.5vw] px-[3vw]
              md:py-[0.5vw] py-[1.5vw]
              rounded-full
              md:text-[0.7vw] text-[2.2vw]
              transition-all duration-300
              cursor-pointer
              ${isActive ? "bg-[#A0168F] text-white font-bold" : "text-gray-600 hover:bg-gray-50 font-normal"}
            `,
        children: tab.label
      }, tab.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabSwitcher);

/***/ }),

/***/ "./src/scripts/components/tools/TextArea.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/tools/TextArea.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/scripts/components/tools/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


// import ToolTipError from "./ToolTipError";

const TextArea = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  label,
  required,
  subtitle,
  height = "h-32",
  currentLength = 0,
  minLength = 0,
  ...props
}, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
  className: "w-full",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex justify-between items-end md:mb-[0.5vw] mb-[1.5vw]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
        className: `${_styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.label} flex gap-1 md:text-[0.8vw] text-[2.5vw]`,
        htmlFor: props.id,
        children: [label, " ", required && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-red-500",
          children: "*"
        })]
      }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-sm text-gray-500 md:text-[0.7vw] text-[2.2vw]",
        children: subtitle
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      className: `md:text-[0.7vw] text-[2.2vw] font-medium ${currentLength < minLength ? "text-red-500" : "text-green-600"}`,
      children: [currentLength, "/", minLength]
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "relative",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
      ref: ref,
      className: `
          ${_styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.input} ${height} resize-none
          ${props.error ? _styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.inputError : _styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.inputDefault}
        `,
      ...props
    })
  })]
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

/***/ }),

/***/ "./src/scripts/components/tools/ToolKitLayout.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/tools/ToolKitLayout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/scripts/components/tools/styles.js");
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useTranslation */ "./src/scripts/hooks/useTranslation.js");
/* harmony import */ var _TabSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabSwitcher */ "./src/scripts/components/tools/TabSwitcher.js");
/* harmony import */ var _ShipmentTrackerForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShipmentTrackerForm */ "./src/scripts/components/tools/ShipmentTrackerForm.js");
/* harmony import */ var _HSCodeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HSCodeForm */ "./src/scripts/components/tools/HSCodeForm.js");
/* harmony import */ var _FileClaimForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FileClaimForm */ "./src/scripts/components/tools/FileClaimForm.js");
/* harmony import */ var _shipment_tracker_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shipment_tracker/Badge */ "./src/scripts/components/shipment_tracker/Badge.js");
/* harmony import */ var _ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










const ToolkitLayout = () => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("tracker");
  const {
    t
  } = (0,_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const tabsContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    tracker: {
      prefix: t("shipment_tracker.title"),
      highlight: t("shipment_tracker.highlight"),
      desc: t("shipment_tracker.desc"),
      Component: _ShipmentTrackerForm__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    hscode: {
      prefix: t("hs_code.title"),
      highlight: t("hs_code.highlight"),
      desc: t("hs_code.desc"),
      Component: _HSCodeForm__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    claim: {
      prefix: t("claim.title"),
      highlight: t("claim.highlight"),
      desc: t("claim.desc"),
      Component: _FileClaimForm__WEBPACK_IMPORTED_MODULE_6__["default"]
    }
  }), [t]);
  const {
    prefix,
    highlight,
    desc,
    Component
  } = tabsContent[activeTab];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "flex items-center justify-center md:mt-[2vw] mt-[5vw] md:mb-[5vw] mb-[15vw]",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: " flex items-start justify-center bg-white ",
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: " md:w-[80vw] w-[90vw] flex md:flex-row flex-col justify-center items-start gap-x-[2vw] md:pr-[10vw] ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: " flex flex-col md:items-end items-center md:justify-start justify-center md:w-[40vw] w-full md:gap-y-0 gap-y-[3vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shipment_tracker_Badge__WEBPACK_IMPORTED_MODULE_7__["default"], {
            badge_text: "Trade and Logistics Toolkit",
            text_color: "#FF00E5",
            bg_color: "#F3F1FF",
            className: "md:text-[0.8vw] text-[2.5vw]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h1", {
              className: " md:text-end text-center font-semibold md:text-[2.5vw] text-[4vw] text-[#1E2939] leading-[1.4] ",
              children: [prefix, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                className: "text-[#FF00E5]",
                children: highlight
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              className: " md:text-[1vw] text-[3vw] font-medium md:text-end text-center md:leading-[1.5vw] leading-[4vw] text-[#63666D] md:w-[35vw] w-full ",
              children: desc
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex flex-col items-end md:w-[30vw] w-full md:mt-0 mt-[5vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TabSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
            activeTab: activeTab,
            setActiveTab: setActiveTab
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: _styles__WEBPACK_IMPORTED_MODULE_1__.STYLES.card,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "w-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Component, {})
            }, activeTab)
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolkitLayout);

/***/ }),

/***/ "./src/scripts/components/tools/styles.js":
/*!************************************************!*\
  !*** ./src/scripts/components/tools/styles.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STYLES: () => (/* binding */ STYLES)
/* harmony export */ });
const STYLES = {
  input: `
    w-full
    bg-white
    border border-[1px] border-[#B9AFD0]
    md:rounded-[0.6vw] rounded-[1.5vw]
    md:px-[1vw] px-[3vw]
    md:py-[0.4vw] py-[1.5vw]
    text-gray-700
    focus:outline-none
    md:text-[0.8vw] text-[2.3vw]
  `,
  inputError: `
    border-red-500 bg-red-50 placeholder-red-400
  `,
  inputDefault: `border-gray-300`,
  label: `
    block
    md:text-[1vw]
    font-semibold
    text-gray-800
    mb-1
  `,
  button: `
    bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
    bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%]
    transition-[background-position] duration-1000 ease-in-out
    md:py-[0.4vw] py-[1vw]
    md:px-[1.5vw] px-[5vw]
    md:rounded-[2vw] rounded-full
    cursor-pointer
    text-white
    md:font-medium font-normal
    md:text-[0.8vw] text-[2.3vw]
  `,
  card: `
    flex flex-col
    items-center
    md:rounded-[0.8vw] rounded-[2vw]
    md:px-[2vw] px-[5vw]
    md:py-[1vw] py-[3vw]
    w-full
    bg-white
    shadow-[0_0_5vw_rgba(255,0,229,0.10)]
    transition-all duration-500 ease-in-out
  `
};

/***/ }),

/***/ "./src/scripts/components/tools/translations.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/tools/translations.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TRANSLATIONS: () => (/* binding */ TRANSLATIONS)
/* harmony export */ });
const TRANSLATIONS = {
  "shipment_tracker.title": "Track Your",
  "shipment_tracker.highlight": "Order",
  "shipment_tracker.desc": "Use your tracking number to instantly access up-to-the-minute updates on your package's journey, from warehouse to doorstep.",
  "hs_code.title": "Your",
  "hs_code.highlight": "HS Code AI Finder",
  "hs_code.desc": "Input your product details, and let our system instantly handle the complexity of HTSUS (US) and HS (ROW) code selection.",
  "claim.title": "We’re here to",
  "claim.highlight": "make things right.",
  "claim.desc": "We apologize if you experienced an issue with your delivery. Please complete the form below to help our support team investigate.",
  // Form Labels
  "btn.track": "Track Shipment",
  "btn.submitting": "Tracking...",
  "btn.continue": "Continue adding details",
  "lbl.tracking": "Input your shipment tracking number"
};

/***/ }),

/***/ "./src/scripts/components/ui/ParallaxSection.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/ui/ParallaxSection.js ***!
  \******************************************************/
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

/***/ "./src/scripts/hooks/useTranslation.js":
/*!*********************************************!*\
  !*** ./src/scripts/hooks/useTranslation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTranslation: () => (/* binding */ useTranslation)
/* harmony export */ });
/* harmony import */ var _components_tools_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tools/translations */ "./src/scripts/components/tools/translations.js");

const useTranslation = () => ({
  t: key => _components_tools_translations__WEBPACK_IMPORTED_MODULE_0__.TRANSLATIONS[key] || key
});

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_tools_ToolKitLayout_js.js.map?ver=f49219337f26a726299b