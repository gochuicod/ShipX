"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_NotFound_js"],{

/***/ "./src/scripts/components/ui/NotFound.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/ui/NotFound.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const NotFound = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: `min-h-screen flex flex-col justify-center items-center bg-white text-center ${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.margin}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      className: "md:text-[3vw] text-[7vw] font-extrabold text-[#4F378A]",
      children: t("not_found.title")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: "text-gray-[#1A1A1A]/70 md:text-[0.8vw] text-[3vw] md:my-[1vw] my-[3vw]",
      children: t("not_found.description")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      to: "/",
      className: " bg-gradient-to-r from-[#4F378A] via-[#FF00E5] to-[#FF00E5] bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out text-white font-semibold rounded-full px-8 py-3 shadow-md hover:shadow-lg cursor-pointer md:text-[0.8vw] text-[3vw] ",
      onClick: () => window.scrollTo({
        top: 0,
        behavior: "smooth"
      }),
      children: t("not_found.button")
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_NotFound_js.js.map?ver=2b5f4d3aa8794657ad1f