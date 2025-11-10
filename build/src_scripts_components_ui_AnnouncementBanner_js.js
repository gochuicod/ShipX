"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_AnnouncementBanner_js"],{

/***/ "./src/scripts/components/ui/AnnouncementBanner.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/ui/AnnouncementBanner.js ***!
  \*********************************************************/
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



const ParallaxSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_value_use-scroll_mjs-node_modu-d38d2d"), __webpack_require__.e("src_scripts_components_ui_ParallaxSection_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js")));
const NewsletterForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs"), __webpack_require__.e("src_scripts_components_ui_NewsletterForm_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./NewsletterForm */ "./src/scripts/components/ui/NewsletterForm.js")));
const AnnouncementBanner = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ParallaxSection, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "w-full justify-center items-center flex md:px-0 px-[5vw]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: `flex md:flex-row flex-col w-fit justify-center items-center md:gap-x-[3vw] gap-x-[11vw] bg-gradient-to-r from-[#4F378A] from-5% to-[#FF00E5] to-100% md:rounded-[2vw] rounded-[4vw] md:pl-[8vw] pl-[5vw] md:pt-0 pt-[5vw] md:pb-0 pb-[5vw] md:pr-0 pr-[5vw] md:my-[5vw] my-[10vw]`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text-[#FFFFFF] md:text-[2.3vw] text-[6vw] font-semibold md:text-start text-center",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: t("newsletter_section.header_1")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: "text-[#FFFFFF] md:text-[0.85vw] text-[2.5vw] md:text-start text-center md:pt-[0.5vw] pt-[2vw]",
            children: [t("newsletter_section.description_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {
              className: "md:block hidden"
            }), t("newsletter_section.description_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NewsletterForm, {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex flex-col",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "md:flex hidden md:w-[25vw] w-[80vw] md:h-[15vw] h-[30vw] md:bg-size-[25vw_15vw] bg-size-[100vw_50vw] bg-center bg-no-repeat",
            style: {
              backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_13.svg")`
            }
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnouncementBanner);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_AnnouncementBanner_js.js.map?ver=c5faa94e4464ecf105ae