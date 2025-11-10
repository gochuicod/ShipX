"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_CookieBanner_js"],{

/***/ "./src/scripts/components/ui/CookieBanner.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/ui/CookieBanner.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/dist/react-cookie-consent.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _tagmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tagmanager */ "./src/tagmanager.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const [textSize, setTextSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0.8vw");
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const updateTextSize = () => {
      if (window.innerWidth < 768) {
        // 📱 Mobile screens
        setTextSize("2.2vw");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // 💻 Tablet screens
        setTextSize("0.8vw");
      } else {
        // 🖥️ Desktop screens
        setTextSize("0.8vw");
      }
    };
    updateTextSize(); // run on mount
    window.addEventListener("resize", updateTextSize);
    return () => window.removeEventListener("resize", updateTextSize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_cookie_consent__WEBPACK_IMPORTED_MODULE_1__["default"], {
      location: "bottom",
      buttonText: "Accept",
      declineButtonText: "Decline",
      enableDeclineButton: true,
      cookieName: "analyticsConsent",
      style: {
        background: "#FFF",
        color: "#1A1A1A",
        fontSize: "14px",
        textAlign: "center",
        boxShadow: "0 -0.5vw 0.5vw rgba(255, 0, 229, 0.15)",
        flexWrap: "wrap",
        justifyContent: "center",
        fontSize: textSize
      },
      buttonStyle: {
        background: "#FFF",
        color: "#1A1A1A",
        fontWeight: "bold",
        borderRadius: "10px",
        padding: "8px 16px",
        margin: "6px"
      },
      declineButtonStyle: {
        background: "#FFF",
        color: "#1A1A1A",
        borderRadius: "10px",
        margin: "6px"
      },
      expires: 150
      // HANDLE NEW USER CLICKS
      ,
      onAccept: () => {
        (0,_tagmanager__WEBPACK_IMPORTED_MODULE_3__.updateGtmConsent)("granted");
      }
      // ADD onDecline HANDLER
      ,
      onDecline: () => {
        (0,_tagmanager__WEBPACK_IMPORTED_MODULE_3__.updateGtmConsent)("denied");
      },
      children: t("cookies.text")
    })
  });
}

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_CookieBanner_js.js.map?ver=ff8ae5afd2079c4ef9d4