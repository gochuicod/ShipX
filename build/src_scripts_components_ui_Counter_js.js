"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_Counter_js"],{

/***/ "./src/scripts/components/ui/Counter.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/ui/Counter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Counter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  style,
  decimals = 0,
  decimal = "."
}) {
  const {
    ref,
    inView
  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__.useInView)({
    triggerOnce: true,
    threshold: 0.5
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    ref: ref,
    className: className,
    children: inView ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_countup__WEBPACK_IMPORTED_MODULE_0__["default"], {
      end: end,
      duration: duration,
      prefix: prefix,
      suffix: suffix,
      decimals: decimals,
      decimal: decimal,
      style: style
    }) : `${prefix}0${suffix}`
  });
}

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_Counter_js.js.map?ver=00cb04602124c5d8c9f0