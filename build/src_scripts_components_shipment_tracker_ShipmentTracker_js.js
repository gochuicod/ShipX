"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_shipment_tracker_ShipmentTracker_js"],{

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

/***/ "./src/scripts/components/shipment_tracker/ShipmentTracker.js":
/*!********************************************************************!*\
  !*** ./src/scripts/components/shipment_tracker/ShipmentTracker.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge */ "./src/scripts/components/shipment_tracker/Badge.js");
/* harmony import */ var _ShipmentTrackerForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipmentTrackerForm */ "./src/scripts/components/shipment_tracker/ShipmentTrackerForm.js");
/* harmony import */ var _ShipmentTrackerAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipmentTrackerAccordion */ "./src/scripts/components/shipment_tracker/ShipmentTrackerAccordion.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useShipment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useShipment */ "./src/scripts/hooks/useShipment.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/SEO */ "./src/scripts/components/ui/SEO.js");
/* harmony import */ var _ToolsHeroSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToolsHeroSection */ "./src/scripts/components/shipment_tracker/ToolsHeroSection.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










const ShipmentTracker = () => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const {
    shipmentData,
    trackingNumber,
    setShipmentData
  } = (0,_hooks_useShipment__WEBPACK_IMPORTED_MODULE_5__.useShipment)();
  const accordionRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (!shipmentData?.errors && accordionRef.current) {
      setTimeout(() => {
        accordionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center" // Aligns the top of the element to the top of the viewport
        });
      }, 500);
    }
  }, [shipmentData]);
  const handleTrackAnotherShipment = () => {
    setTimeout(() => {
      setShipmentData(null);
    }, 500);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: t("seo.shipment_tracker_page.title"),
      description: t("seo.shipment_tracker_page.description"),
      canonical: t("seo.shipment_tracker_page.canonical"),
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "w-screen min-h-screen flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activePage: "shipment-tracker"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: " flex md:flex-row flex-col gap-x-[4vw] justify-center items-center md:mt-[5vw] mt-[10vw] md:px-0 px-[10vw] md:mb-[5vw] mb-[10vw] ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: " flex flex-col justify-center md:items-end items-center md:w-[36vw] md:gap-y-0 gap-y-[2vw] md:mb-0 mb-[8vw] ",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_0__["default"], {
            className: "md:text-[0.8vw] text-[2.5vw]",
            badge_text: t("shipment_tracker.track_order_section.badge_text"),
            text_color: "#FF00E5",
            bg_color: "#F3F1FF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h2", {
            className: " md:text-[2.5vw] text-[4vw] text-[#1E2939] font-semibold ",
            children: [t("shipment_tracker.track_order_section.title.regular"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "text-[#FF00E5]",
              children: t("shipment_tracker.track_order_section.title.highlighted")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: " text-[#63666D]/95 md:text-[1vw] text-[3vw] font-medium md:text-end text-center md:leading-[1.5vw] leading-[4vw] ",
            children: t("shipment_tracker.track_order_section.description")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ShipmentTrackerForm__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
      }), shipmentData && shipmentData.statuses && shipmentData.statuses.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        ref: accordionRef,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: " flex flex-col md:gap-y-[3vw] gap-y-[8vw] justify-center items-center ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ShipmentTrackerAccordion__WEBPACK_IMPORTED_MODULE_2__["default"], {
            shipmentData: {
              statuses: [[...(shipmentData?.statuses || [])].sort((a, b) => new Date(a.updatedDate) - new Date(b.updatedDate)).pop()]
            },
            trackingNumber: trackingNumber,
            latestStatusHidden: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "shipment-tracker/#",
            end: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              type: "button",
              onClick: handleTrackAnotherShipment,
              className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.5vw] py-[1.4vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white md:font-medium font-normal md:text-[0.8vw] text-[2.4vw] w-fit ",
              style: {
                fontFamily: "Karla, system-ui, -apple-system, sans-serif"
              },
              children: t("shipment_tracker.shipment_activity_section.track_another_shipment_button_text")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ShipmentTrackerAccordion__WEBPACK_IMPORTED_MODULE_2__["default"], {
            shipmentData: {
              statuses: shipmentData?.statuses
            },
            trackingNumber: trackingNumber
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "shipment-tracker/#",
            end: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              type: "button",
              onClick: handleTrackAnotherShipment,
              className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.5vw] py-[1.4vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white md:font-medium font-normal md:text-[0.8vw] text-[2.4vw] w-fit md:mb-[5vw] mb-[10vw] ",
              style: {
                fontFamily: "Karla, system-ui, -apple-system, sans-serif"
              },
              children: t("shipment_tracker.shipment_activity_section.track_another_shipment_button_text")
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: " flex flex-col md:w-[80vw] w-screen md:h-auto h-[80vw] bg-cover bg-center bg-no-repeat mx-auto md:mb-[4vw] mb-0 text-white text-[0.8vw] font-normal md:rounded-[1vw] rounded-[0.00000001vw] overflow-hidden md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@ffab8ad2ad6bf54f2ed5c615722bff70ee96f7ef/src/assets/shipment_tracker_cta_image.webp')] bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@281b9212a310690d195ec2f7ac6057b96436d583/src/assets/shipment_tracker_cta_image_mobile.svg')] ",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: `
              flex flex-col
              md:gap-y-0 gap-y-[3vw]
              ${i18n.language === "vn" ? "md:w-[45vw] w-screen" : "md:w-[40vw] w-screen"}
              md:ps-[8vw] ps-[10vw]
              md:pe-0 pe-[10vw]
              md:py-[5vw] py-[10vw]
            `,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            className: " md:px-0 px-[5vw] md:text-[2vw] text-[7vw] md:text-start text-center md:leading-[3vw] leading-[8vw] font-semibold ",
            children: t("shipment_tracker.shipment_cta_section.title")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            className: " font-normal opacity-95 pb-[1vw] md:text-[0.9vw] text-[2.5vw] md:text-start text-center md:leading-[1.5vw] leading-[3vw] md:px-0 px-[3vw] ",
            children: t("shipment_tracker.shipment_cta_section.description")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: " flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] md:justify-start justify-center md:items-center items-center ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                to: "/book-a-demo",
                end: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
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
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
              to: "/#contact-us",
              end: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipmentTracker);

/***/ }),

/***/ "./src/scripts/components/shipment_tracker/ShipmentTrackerAccordion.js":
/*!*****************************************************************************!*\
  !*** ./src/scripts/components/shipment_tracker/ShipmentTrackerAccordion.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShipmentTrackerAccordion)
/* harmony export */ });
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react */ "./node_modules/@material-tailwind/react/index.js");
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StatusMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatusMap */ "./src/scripts/components/shipment_tracker/StatusMap.js");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stepper */ "./src/scripts/components/shipment_tracker/Stepper.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function ShipmentTrackerAccordion({
  shipmentData = [],
  trackingNumber = "SGL2510001808",
  latestStatusHidden = false
}) {
  const handleOpen = value => setOpen(open === value ? 0 : value);
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const steps = (0,_StatusMap__WEBPACK_IMPORTED_MODULE_2__.mapStatuses)(shipmentData?.statuses, t);
  const lastStatus = (0,_StatusMap__WEBPACK_IMPORTED_MODULE_2__.getLastStatusLabel)(shipmentData?.statuses, t);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: " flex justify-center items-center md:w-[32vw] w-[90vw] mx-auto ",
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__.Accordion, {
        className: " md:rounded-[1vw] rounded-[3vw] shadow-[0_0_5vw_rgba(255,0,229,0.10)] border border-[#C9C4D3]/90 ",
        open: open === 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__.AccordionHeader, {
          className: `
              flex flex-row gap-x-0
              justify-between items-center
              ${open ? "md:rounded-t-[1vw] rounded-t-[3vw]" : "md:rounded-[1vw] rounded-[3vw]"}
              cursor-pointer border-0
              bg-[#F6F3FF]
              md:px-[1.5vw] px-[4vw]
              md:py-[1vw] py-[2.5vw]
            `,
          onClick: () => handleOpen(1),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col gap-y-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: " text-[#4D4D4D] md:text-[#1A1A1A] md:text-[0.8vw] text-[2.3vw] font-bold ",
              children: [t("shipment_tracker.shipment_activity_section.accordion_header.tracking_number_label"), ":"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: " text-[#FF00E5] md:text-[1.5vw] text-[4.5vw] font-semibold ",
              children: trackingNumber || "SGL2510001808"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__.AccordionBody, {
          className: " flex flex-col md:px-[1.5vw] px-[4vw] md:py-[1vw] py-[5vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: `
                ${latestStatusHidden === false ? "flex flex-col" : "hidden"}
              `,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: " text-[#4D4D4D] md:text-[#1A1A1A] md:text-[0.8vw] text-[3vw] font-bold ",
              children: t("shipment_tracker.shipment_activity_section.accordion_body.latest_status_text")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: " text-[#008236] md:text-[1vw] text-[3.5vw] font-bold ",
              children: lastStatus
            }), shipmentData?.statuses && shipmentData.statuses.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: " text-[#63666D]/90 md:text-[0.65vw] text-[2.3vw] font-normal ",
              children: (0,_StatusMap__WEBPACK_IMPORTED_MODULE_2__.formatShipmentDate)(shipmentData?.statuses)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: `
              text-[#4D4D4D] md:text-[#1A1A1A]
                md:text-[0.8vw] text-[3vw]
                font-bold
                md:mb-[1.5vw] mb-[1.5vw]
                ${latestStatusHidden === true ? "md:mt-0 mt-0" : "md:mt-[1vw] mt-[2vw]"}
              `,
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: t("shipment_tracker.shipment_activity_section.accordion_header.shipment_activity_log_label")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Stepper__WEBPACK_IMPORTED_MODULE_3__["default"], {
            statuses: !shipmentData?.errors ? steps : []
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: " flex flex-row md:gap-x-[0.25vw] gap-x-[0.5vw] justify-center items-center md:mt-[1vw] mt-[3vw] ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              className: "md:size-[1.2vw] size-[4vw] md:stroke-[0.1vw] stroke-[0.4vw] stroke-[#FF00E5]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: " text-[#4D4D4D]/90 md:text-[0.7vw] text-[2.5vw] font-normal ",
              children: t("shipment_tracker.shipment_activity_section.accordion_body.local_time_notice")
            })]
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./src/scripts/components/shipment_tracker/ShipmentTrackerForm.js":
/*!************************************************************************!*\
  !*** ./src/scripts/components/shipment_tracker/ShipmentTrackerForm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hooks_useShipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useShipment */ "./src/scripts/hooks/useShipment.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hs_code_generator_ToolTipError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hs_code_generator/ToolTipError */ "./src/scripts/components/hs_code_generator/ToolTipError.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const ShipmentTrackerForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const {
    shipmentData,
    setShipmentData,
    setTrackingNumber
  } = (0,_hooks_useShipment__WEBPACK_IMPORTED_MODULE_1__.useShipment)();
  const onSubmit = async data => {
    const trackingNumber = data.trackingNumber;
    setTrackingNumber(trackingNumber);
    try {
      const response = await fetch(`https://shipx.asia/wp-json/shipx/v1/track/${trackingNumber}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ae6fkmMv7nw6A-pBqgocXN6BNn3pdfiesJf-hgOeJJJWDFDmLvkFxvzUJWRLw6Rw`,
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Something went wrong with the tracking request.");
      }
      const result = await response.json();
      setShipmentData(result);
      reset();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      className: " flex flex-row md:gap-x-[1vw] gap-x-[2vw] justify-center items-end bg-white shadow-[0_0_5vw_rgba(255,0,229,0.10)] md:py-[1.5vw] py-[3vw] md:px-[2.5vw] px-[4vw] md:rounded-[1vw] rounded-[3vw] md:text-[0.8vw] text-[2.6vw] md:w-full w-[90vw] ",
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        className: "w-[2.2vw] h-[2.2vw] md:block hidden",
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_1.svg",
        alt: "ShipX - globe"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: " flex flex-col md:gap-y-0 gap-y-[1.5vw] ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          className: " flex flex-row md:gap-x-0 gap-x-[2vw] text-nowrap font-semibold md:text-[1vw] text-[2.7vw] text-[#1E2939] ",
          htmlFor: "trackingNumber",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            className: "w-[4vw] h-[4vw] md:hidden block",
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_1.svg",
            alt: "ShipX - globe"
          }), t("shipment_tracker.track_order_section.form.label")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "relative",
          children: [shipmentData?.errors && Array.isArray(shipmentData.errors) && shipmentData.errors.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hs_code_generator_ToolTipError__WEBPACK_IMPORTED_MODULE_3__["default"], {
            message: shipmentData.errors[0]
          }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            "aria-invalid": errors.trackingNumber ? "true" : "false",
            id: "trackingNumber",
            className: `
                              bg-[#F9FAFB]
                              border border-[#B9AFD0]
                              md:w-full w-full
                              md:h-[2.2vw] h-[6.5vw]
                              md:rounded-[0.5vw] rounded-[2vw]
                              p-2
                              focus:outline-none
                              ${errors.trackingNumber ? "placeholder-red-500" : "placeholder-black/50"}
                          `,
            ...register("trackingNumber", {
              required: "Tracking number is required"
            }),
            placeholder: errors.trackingNumber ? errors.trackingNumber.message : "",
            autoComplete: "number"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "submit",
        disabled: isSubmitting,
        className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.5vw] py-[1.4vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white md:font-medium font-normal md:text-[0.8vw] text-[2.4vw] ",
        style: {
          fontFamily: "Karla, system-ui, -apple-system, sans-serif"
        },
        children: isSubmitting ? t("shipment_tracker.track_order_section.form.submitting") : t("shipment_tracker.track_order_section.form.submit_button")
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipmentTrackerForm);

/***/ }),

/***/ "./src/scripts/components/shipment_tracker/StatusMap.js":
/*!**************************************************************!*\
  !*** ./src/scripts/components/shipment_tracker/StatusMap.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatShipmentDate: () => (/* binding */ formatShipmentDate),
/* harmony export */   getLastStatusLabel: () => (/* binding */ getLastStatusLabel),
/* harmony export */   mapStatuses: () => (/* binding */ mapStatuses)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");


function mapStatuses(statuses, t = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t) {
  if (!Array.isArray(statuses)) return [];
  const sorted = [...statuses].sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate));
  return sorted.map((step, i) => {
    let state = "completed";
    if (i == 0 && step.statusCode !== "SHIPMENT_DELIVERED") {
      state = "active";
    }
    return {
      ...step,
      label: t(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATUS_I18N_KEYS[step.statusCode] || step.statusCode),
      state
    };
  });
}
function getLastStatusLabel(statuses, t) {
  if (!Array.isArray(statuses) || statuses.length === 0 || !t) return null;

  // Sort by date (Newest First) just to be safe
  const sorted = [...statuses].sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate));

  // Since we sorted Newest -> Oldest, the LATEST status is now at index 0
  const latestStatus = sorted[0];
  return t(`shipment_tracker.shipment_status_map.${latestStatus.statusCode.toLowerCase()}`);
}
const formatShipmentDate = statuses => {
  if (!statuses || statuses.length === 0) return "Date not available";

  // Create a shallow copy to avoid mutating the original array
  // Sort by updatedDate in ascending order (Oldest -> Newest)
  const sortedStatuses = [...statuses].sort((a, b) => new Date(a.updatedDate) - new Date(b.updatedDate));

  // Get the last item (most recent status)
  const latestStatus = sortedStatuses[sortedStatuses.length - 1];
  if (!latestStatus?.updatedDate) return "Date not available";
  const date = new Date(latestStatus.updatedDate);

  // Format: "Nov 22, 2025"
  const datePart = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  // Format: "04:45 PM"
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  return `${datePart} · ${timePart}`;
};

/***/ }),

/***/ "./src/scripts/components/shipment_tracker/Stepper.js":
/*!************************************************************!*\
  !*** ./src/scripts/components/shipment_tracker/Stepper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stepper)
/* harmony export */ });
/* harmony import */ var _StatusMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusMap */ "./src/scripts/components/shipment_tracker/StatusMap.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Stepper({
  statuses = []
}) {
  const steps = (0,_StatusMap__WEBPACK_IMPORTED_MODULE_0__.mapStatuses)(statuses);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: " flex flex-col items-center justify-center w-max md:mb-[1vw] mb-[5vw] md:mt-0 mt-[5vw] ",
    children: steps.reverse().map((step, index) => {
      const isLast = index === steps.length - 1;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex flex-col items-center relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: " absolute md:-top-[1vw] -top-[4vw] left-full md:ml-[0.5vw] ml-[2.5vw] bg-[#F8F7FF] md:px-[1vw] px-[3vw] md:py-[0.5vw] py-[2vw] md:rounded-[0.5vw] rounded-[3vw] md:w-[25vw] w-[72vw] ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h6", {
            className: `
                  md:text-[0.7vw] text-[2.7vw]
                  font-semibold
                  ${step.state === "completed" ? "text-slate-900" : step.state === "active" ? "text-slate-900" : "text-slate-400"}`,
            children: step.label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: " md:text-[0.65vw] text-[2.5vw] text-slate-500 ",
            children: new Date(step.updatedDate).toLocaleString()
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: `
                md:w-[1.2vw] w-[3.5vw]
                md:h-[1.2vw] h-[3.5vw]
                shrink-0
                mx-px
                md:ms-[1vw] ms-[3vw]
                border-2
                flex
                items-center justify-center
                rounded-full
                ${step.state === "completed" ? "bg-[#008236] border-[#008236]" : step.state === "active" ? "bg-gray-400 border-gray-300" : "border-gray-300"}
              `,
          children: [step.state === "completed" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: " md:size-[0.8vw] size-[3.5vw] fill-white ",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
            })
          }), step.state === "active" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: " md:w-[1vw] w-[3vw] md:h-[1vw] h-[3vw] bg-gray-400 rounded-full "
          }), step.state === "upcoming" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: " md:w-[1vw] w-[3vw] md:h-[1vw] h-[3vw] bg-gray-300 rounded-full "
          })]
        }), !isLast && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: `
                  md:w-[0.07vw] w-[0.3vw]
                  md:h-[2.5vw] h-[10vw]
                  md:ms-[1vw] ms-[2.5vw]
                  ${step.state === "completed" || step.state === "active" ? "bg-[#008236]" : "bg-gray-300"}
                `
        })]
      }, index);
    })
  });
}

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
//# sourceMappingURL=src_scripts_components_shipment_tracker_ShipmentTracker_js.js.map?ver=12bb6c15bce7a77479bc