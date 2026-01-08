"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_CookieBanner_jsx"],{

/***/ "./src/scripts/components/ui/CookieBanner.jsx":
/*!****************************************************!*\
  !*** ./src/scripts/components/ui/CookieBanner.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _tagmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tagmanager */ "./src/tagmanager.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const consent = localStorage.getItem("analyticsConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);
  const handleConsent = state => {
    (0,_tagmanager__WEBPACK_IMPORTED_MODULE_2__.updateGtmConsent)(state);
    localStorage.setItem("analyticsConsent", state);
    setVisible(false);
  };
  if (!visible) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: `
        fixed z-9999
        md:bottom-[3vw] md:left-[3vw] bottom-[5vw] left-0 right-0 md:mx-0 mx-auto
        bg-white md:shadow-[0_0.5vw_1vw_rgba(0,0,0,0.5)] shadow-[0_1.5vw_3vw_rgba(0,0,0,0.5)]
        md:rounded-[1.5vw] rounded-[4vw]
        md:px-[2vw] px-[6vw] md:pb-[2vw] pb-[6vw] md:pt-[2vw] pt-[5vw]
        ${i18n.language === "vn" || i18n.language === "ind" ? "md:w-[25vw]" : "md:w-[23vw]"} w-[90vw]
      `,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-col md:gap-y-[1vw] gap-y-[3vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: "flex flex-row md:gap-x-[1vw] gap-x-[2vw] justify-start items-center text-start",
        style: {
          fontFamily: "Poppins, system-ui, -apple-system, sans-serif"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          className: "md:w-[2.5vw] md:h-[2vw] w-[11vw] h-[10vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/cookies_icon.webp",
          alt: "ShipX Cookie Icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "md:text-[1.5vw] text-[6vw] font-semibold text-[#1A1A1A]",
          children: t("cookies.header")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "md:text-[0.7vw] text-[3vw]",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-[#4D4D4D]",
          dangerouslySetInnerHTML: {
            __html: t("cookies.description")
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: `
            flex flex-row
            md:gap-x-[1vw] gap-x-[2vw]
            md:text-[0.65vw]
            ${i18n.language === "vn" || i18n.language === "ind" ? "text-[2.5vw]" : "text-[3vw]"}
          `,
        style: {
          fontFamily: "Karla, system-ui, -apple-system, sans-serif"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
          type: "button",
          className: "md:p-[0.1vw] p-[0.55vw]  rounded-full relative overflow-hidden cursor-pointer",
          onClick: () => handleConsent("granted"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "absolute inset-0 bg-linear-to-t from-[#4F378A] to-[#FF00E5] rounded-full"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "relative flex flex-row items-center md:px-[0.9vw] px-[3vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full font-medium",
            children: t("cookies.accept_necessary")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          onClick: () => handleConsent("granted"),
          className: "bg-[#4F378A] text-white rounded-full md:px-[0.7vw] px-[3vw] md:py-[0.5vw] py-[1vw] font-medium cursor-pointer",
          children: t("cookies.accept_all")
        })]
      })]
    })
  });
}

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_CookieBanner_jsx.js.map?ver=7b0fafa8983e5798404c