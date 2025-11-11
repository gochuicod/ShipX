"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_LanguagePrompt_js"],{

/***/ "./src/scripts/components/ui/LanguagePrompt.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/ui/LanguagePrompt.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LanguagePrompt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../i18n */ "./src/i18n.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
"use client";






const countryToLangMap = {
  ID: "ind",
  // Indonesia
  MY: "my",
  // Malaysia
  TH: "thai",
  // Thailand
  VN: "vn" // Vietnam
};
const countryNames = {
  ID: "Indonesia",
  MY: "Malaysia",
  TH: "Thailand",
  VN: "Vietnam"
};
function LanguagePrompt() {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [detected, setDetected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    country: null,
    lang: "en"
  });
  const [initialized, setInitialized] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // detect visitor country
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const checkGeo = setInterval(() => {
      if (window.ShipXGeo?.country) {
        const countryCode = window.ShipXGeo.country.toUpperCase();
        const detectedLang = countryToLangMap[countryCode] || "en";
        setDetected({
          country: countryCode,
          lang: detectedLang
        });
        clearInterval(checkGeo);
      }
    }, 500);
    return () => clearInterval(checkGeo);
  }, []);

  // determine if modal should open
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!detected.country || initialized) return;
    const savedLang = localStorage.getItem("lang") || "en";
    const dismissed = localStorage.getItem("lang_prompt_dismissed");
    setInitialized(true);

    // Only show prompt if language differs and user hasn't dismissed it
    if (detected.lang !== "en" && detected.lang !== savedLang && !dismissed) {
      setOpen(true);
    }
  }, [detected, initialized]);

  // user accepts switching language
  const handleAccept = async () => {
    localStorage.setItem("lang", detected.lang);
    localStorage.setItem("lang_prompt_dismissed", "true");
    try {
      await _i18n__WEBPACK_IMPORTED_MODULE_3__["default"].changeLanguage(detected.lang);
    } catch (err) {
      console.error("Language switch failed:", err);
    }
    setOpen(false);
  };

  // user declines
  const handleDecline = () => {
    localStorage.setItem("lang_prompt_dismissed", "true");
    setOpen(false);
  };
  if (!open) return null;
  const modal = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
    open: open,
    onClose: setOpen,
    className: "relative z-9999",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.DialogBackdrop, {
      transition: true,
      className: "fixed inset-0 bg-black/60 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "fixed inset-0 z-9999 w-screen overflow-y-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "flex min-h-full justify-center text-center items-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.DialogPanel, {
          transition: true,
          className: "relative transform overflow-hidden md:rounded-[2vw] rounded-[3vw] bg-white text-[#1A1A1A] transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col md:gap-y-[2vw] gap-y-[3vw] md:px-[3vw] px-[5vw] md:py-[1vw] py-[3vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
              as: "h3",
              className: "md:text-[1vw] text-[3vw] font-semibold text-[#1A1A1A]",
              children: "Switch Language?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
              className: "md:text-[0.8vw] text-[2.2vw] text-[#1A1A1A]",
              children: ["It looks like you\u2019re visiting from", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                children: countryNames[detected.country] || detected.country
              }), ".", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Would you like to switch the site\u2019s language?"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "bg-white flex flex-row-reverse justify-center items-center md:gap-x-[1vw] gap-x-[3vw] md:px-[3vw]] px-[5vw] md:py-[1vw] py-[3vw] md:text-[0.8vw] text-[2.2vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              onClick: handleAccept,
              className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
              children: "Yes, switch"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              onClick: handleDecline,
              className: " flex justify-center items-center cursor-pointer bg-white text-[#1A1A1A] font-medium md:rounded-[2vw] rounded-full md:py-[0.6vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)] ",
              children: "No, stay"
            })]
          })]
        })
      })
    })]
  });
  return react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(modal, document.body);
}

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_LanguagePrompt_js.js.map?ver=f7441940f3c2eaba9361