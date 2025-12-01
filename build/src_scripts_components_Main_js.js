"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_Main_js"],{

/***/ "./src/scripts/components/Main.js":
/*!****************************************!*\
  !*** ./src/scripts/components/Main.js ***!
  \****************************************/
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



const Carousel = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("vendors-node_modules_tabbable_dist_index_esm_js-node_modules_floating-ui_dom_dist_floating-ui-a89c48"), __webpack_require__.e("vendors-node_modules_material-tailwind_react_index_js"), __webpack_require__.e("vendors-node_modules_react-swipeable_es_index_js"), __webpack_require__.e("src_scripts_components_ui_CarouselNav_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/CarouselNav */ "./src/scripts/components/ui/CarouselNav.js")));
const MessengerButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_ui_MessengerButton_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/MessengerButton */ "./src/scripts/components/ui/MessengerButton.js")));
const ServiceHeadline = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_value_use-scroll_mjs-node_modu-d38d2d"), __webpack_require__.e("src_scripts_components_ui_ServiceHeadline_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/ServiceHeadline */ "./src/scripts/components/ui/ServiceHeadline.js")));
const Statistics = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_ui_Statistics_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/Statistics */ "./src/scripts/components/ui/Statistics.js")));
const Services = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("src_scripts_components_ui_Services_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/Services */ "./src/scripts/components/ui/Services.js")));
const Platform = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("src_scripts_components_ui_Platform_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/Platform */ "./src/scripts/components/ui/Platform.js")));
const SGAmiloCards = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("src_scripts_components_ui_SGAmiloCards_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/SGAmiloCards */ "./src/scripts/components/ui/SGAmiloCards.js")));
const FreightAndCustoms = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("src_scripts_components_ui_FreightAndCustoms_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/FreightAndCustoms */ "./src/scripts/components/ui/FreightAndCustoms.js")));
const Offices = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("src_scripts_components_ui_Offices_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/Offices */ "./src/scripts/components/ui/Offices.js")));
const AnnouncementBanner = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_ui_AnnouncementBanner_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/AnnouncementBanner */ "./src/scripts/components/ui/AnnouncementBanner.js")));
const ContactUs = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_ui_ContactUs_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/ContactUs */ "./src/scripts/components/ui/ContactUs.js")));
const SEO = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_ui_SEO_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/SEO */ "./src/scripts/components/ui/SEO.js")));
const FAQSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_ui_FAQSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/FAQSection */ "./src/scripts/components/ui/FAQSection.js")));
const Main = ({
  margin
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SEO, {
      title: t("seo.home_page.title"),
      description: t("seo.home_page.description"),
      canonical: t("seo.home_page.canonical"),
      ogImage: t("seo.home_page.ogImage")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MessengerButton, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "absolute top-[-5vw] left-[-10vw] size-[10vw] rounded-full shadow-[5vw_0.5vw_15vw_rgba(79,55,138,1)] z-40"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "absolute top-[8vw] right-[-15vw] size-[15vw] rounded-full shadow-[-5vw_0.5vw_20vw_rgba(255,0,229,0.2)] z-40"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "absolute top-1/2 left-[-30vw] size-[30vw] rounded-full shadow-[15vw_-10vw_20vw_rgba(255,0,229,0.1)] -z-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Carousel, {
          margin: margin
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ServiceHeadline, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Statistics, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Services, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Platform, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SGAmiloCards, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FreightAndCustoms, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Offices, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnnouncementBanner, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FAQSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ContactUs, {})]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_Main_js.js.map?ver=dfcacb60dffea5991db5