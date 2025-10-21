"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_BookADemo_js"],{

/***/ "./src/scripts/components/BookADemo.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/BookADemo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/SEO */ "./src/scripts/components/ui/SEO.js");
/* harmony import */ var _ui_MultiStepLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/MultiStepLoader */ "./src/scripts/components/ui/MultiStepLoader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const BookADemo = () => {
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }); // optional smooth scroll
  }, [pathname]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "ShipX - Book A Demo",
      description: "Book a Demo with ShipX!",
      canonical: "https://shipx.asia/book-a-demo",
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        width: "100%",
        height: "100vh"
      },
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_MultiStepLoader__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("iframe", {
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2xm9gkOC9hplYucI1nHkQApNfYFGrcfsjxq96a-TR3S8ZwacBAz-2lRcgARMGJx9F40_9OP_uO?gv=true",
        title: "Book a Demo with ShipX",
        style: {
          width: "100%",
          height: "100%",
          border: "none"
        },
        onLoad: () => setLoading(false),
        loading: "lazy",
        allowFullScreen: true
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookADemo);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_BookADemo_js.js.map?ver=c4b792ac66f7ec4d873b