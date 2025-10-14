"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_TermsAndConditions_js"],{

/***/ "./src/scripts/components/TermsAndConditions.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/TermsAndConditions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const TermsAndConditions = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `flex flex-col justify-center items-center ${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.margin}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-col justify-center items-center md:py-[5vw] py-[10vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "text-[#FF00E5] md:text-[5vw] text-[7vw] md:font-semibold font-bold text-center",
        style: {
          fontFamily: "Karla, system-ui, -apple-system, sans-serif"
        },
        children: t("terms_and_conditions_page.header")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "text-[#63666D] md:text-[0.8vw] text-[2.2vw] md:font-medium font-semibold",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: t("terms_and_conditions_page.subheader")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-col md:pb-[5vw] pb-[10vw] md:w-[50vw] w-full",
      style: {
        fontFamily: "Poppins, system-ui, -apple-system, sans-serif"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-[#63666D] md:text-[0.8vw] text-[2.2vw] font-normal text-justify opacity-70 whitespace-pre-line",
        children: t("terms_and_conditions_page.message")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {
        className: "bg-[#63666D] h-[0.05vw] border-none opacity-70 mt-[2vw]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-[#63666D] opacity-60 md:text-[0.6vw] text-[2vw] font-normal mt-[1vw]",
        children: t("terms_and_conditions_page.note")
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermsAndConditions);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_TermsAndConditions_js.js.map?ver=767696c7fc961d00c2f0