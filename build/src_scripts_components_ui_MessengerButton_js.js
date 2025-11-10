"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_MessengerButton_js"],{

/***/ "./src/scripts/components/ui/MessengerButton.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/ui/MessengerButton.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const MessengerButton = () => {
  const messengerLink = "https://m.me/sglinkvn";
  const [messengerVisibility, setMessengerVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timer = setTimeout(() => {
      setMessengerVisibility(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    href: messengerLink,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Chat with us on Messenger",
    className: `${messengerVisibility ? "fixed" : "hidden"} flex justify-center items-center md:gap-x-[0.5vw] gap-x-[2vw] md:bottom-[1vw] bottom-[2vw] md:left-[1vw] left-[2vw] bg-blue-600 hover:bg-blue-700 text-white md:py-[0.6vw] py-[2vw] md:px-[0.6vw] px-[2vw] rounded-full z-[1001] animate-bounce hover:animate-none md:text-[0.8vw] text-[2.2vw]`
    // className={`${messengerVisibility ? "fixed" : "hidden"} flex justify-center items-center md:gap-x-[0.5vw] gap-x-[2vw] md:bottom-[1vw] bottom-[2vw] md:left-[1vw] left-[2vw] bg-blue-600 hover:bg-blue-700 text-white md:py-[0.6vw] py-[2vw] md:px-[1vw] px-[2.4vw] rounded-full z-[1001] animate-bounce hover:animate-none md:text-[0.8vw] text-[2.2vw]`}
    ,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "white",
      viewBox: "0 0 24 24",
      className: "md:size-[2vw] size-[6vw]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
        d: "M12 0C5.373 0 0 5.118 0 11.439c0 3.594 1.792 6.802 4.616 8.886V24l4.229-2.335c1.047.288 2.162.444 3.33.444 6.627 0 12-5.118 12-11.439C24 5.118 18.627 0 12 0zm1.093 15.599l-2.93-3.126-5.824 3.126 6.475-6.818 2.97 3.125 5.778-3.125-6.469 6.818z"
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerButton);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_MessengerButton_js.js.map?ver=0156f483b21687889293