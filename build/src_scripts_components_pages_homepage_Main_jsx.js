"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_homepage_Main_jsx"],{

/***/ "./node_modules/lucide-react/dist/esm/icons/calendar-days.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/calendar-days.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CalendarDays)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("calendar-days", __iconNode);


//# sourceMappingURL=calendar-days.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-down.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chevron-down", __iconNode);


//# sourceMappingURL=chevron-down.js.map


/***/ }),

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");


function cn(...inputs) {
  return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}

/***/ }),

/***/ "./src/scripts/components/pages/homepage/Main.jsx":
/*!********************************************************!*\
  !*** ./src/scripts/components/pages/homepage/Main.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar-days.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





// Same folder lazy imports

const MessengerButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_pages_homepage_MessengerButton_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./MessengerButton */ "./src/scripts/components/pages/homepage/MessengerButton.jsx")));
const HeroCarousel = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_pages_homepage_HeroCarousel_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./HeroCarousel */ "./src/scripts/components/pages/homepage/HeroCarousel.jsx")));
const PartnersSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_swiper_modules_pagination_css-node_modules_swiper_swiper_css-node_module-d7fbca"), __webpack_require__.e("src_scripts_components_pages_homepage_PartnersSection_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./PartnersSection */ "./src/scripts/components/pages/homepage/PartnersSection.jsx")));
const ServicesSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_pages_homepage_ServicesSection_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./ServicesSection */ "./src/scripts/components/pages/homepage/ServicesSection.jsx")));
const ToolkitSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_pages_homepage_ToolkitSection_ToolkitSection_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./ToolkitSection/ToolkitSection */ "./src/scripts/components/pages/homepage/ToolkitSection/ToolkitSection.jsx")));
const NumbersSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-countup_build_index_js-node_modules_radix-ui_react-slot_dist_index-4c4fc9"), __webpack_require__.e("src_scripts_components_pages_homepage_NumbersSection_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./NumbersSection */ "./src/scripts/components/pages/homepage/NumbersSection.jsx")));
const PlatformSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_swiper_modules_pagination_css-node_modules_swiper_swiper_css-node_module-d7fbca"), __webpack_require__.e("src_scripts_components_pages_homepage_PlatformSection_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./PlatformSection */ "./src/scripts/components/pages/homepage/PlatformSection.jsx")));
const OfficesSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_pages_homepage_OfficesSection_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./OfficesSection */ "./src/scripts/components/pages/homepage/OfficesSection.jsx")));
const AffiliateSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_swiper_modules_pagination_css-node_modules_swiper_swiper_css-node_module-d7fbca"), __webpack_require__.e("src_scripts_components_pages_homepage_AffiliateSection_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./AffiliateSection */ "./src/scripts/components/pages/homepage/AffiliateSection.jsx")));
const FAQSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_pages_homepage_FAQSection_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FAQSection */ "./src/scripts/components/pages/homepage/FAQSection.jsx")));
const ContactUsNew = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_radix-ui_react-slot_dist_index_mjs-node_modules_class-variance-authority-63ddc6"), __webpack_require__.e("src_scripts_components_pages_homepage_ContactUsNew_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ContactUsNew */ "./src/scripts/components/pages/homepage/ContactUsNew.jsx")));
const Blogs = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_pages_homepage_BlogsSection_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./BlogsSection */ "./src/scripts/components/pages/homepage/BlogsSection.jsx")));

// External folder lazy imports
const SEO = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_ui_SEO_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../ui/SEO */ "./src/scripts/components/ui/SEO.jsx")));
const Main = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const heroSlides = [{
    id: 1,
    image: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_1.png",
    bgClassName: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)("2xl:bg-size-[1139px_636px] md:bg-size-[1093px_636px] bg-size-[724px_445px]", "2xl:bg-position-[30vw_center] bg-position-[center_bottom]"),
    title: t("hero_section.slides.slide_1.title"),
    titleHighlight: t("hero_section.slides.slide_1.title_highlighted"),
    description: t("hero_section.slides.slide_1.description"),
    note: t("hero_section.slides.slide_1.note"),
    primaryButton: {
      text: t("hero_section.slides.slide_1.button_1"),
      to: "/book-a-demo",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "size-5"
      })
    },
    secondaryButton: {
      text: t("hero_section.slides.slide_1.button_2"),
      to: "/#partners",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "size-5"
      })
    }
  }, {
    id: 2,
    image: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_2.png",
    bgClassName: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)("2xl:bg-size-[1239px_auto] md:bg-size-[1093px_auto] bg-size-[724px_auto]", "2xl:bg-position-[30vw_0vw] md:bg-position-[center_5vw] sm:bg-position-[center_35vw] bg-position-[center_45vw]"),
    title: t("hero_section.slides.slide_2.title"),
    titleHighlight: t("hero_section.slides.slide_2.title_highlighted"),
    description: t("hero_section.slides.slide_2.description"),
    note: t("hero_section.slides.slide_2.note"),
    primaryButton: {
      text: t("hero_section.slides.slide_2.button_1"),
      to: "/book-a-demo",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "size-5"
      })
    },
    secondaryButton: {
      text: t("hero_section.slides.slide_1.button_2"),
      to: "/#partners",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "size-5"
      })
    }
  }, {
    id: 3,
    image: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_3_v2.png",
    bgClassName: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)("2xl:bg-size-[1139px_636px] md:bg-size-[1093px_636px] bg-size-[724px_445px]", "2xl:bg-position-[30vw_center] bg-position-[center_bottom]"),
    title: t("hero_section.slides.slide_3.title"),
    titleHighlight: t("hero_section.slides.slide_3.title_highlighted"),
    description: t("hero_section.slides.slide_3.description"),
    note: t("hero_section.slides.slide_3.note"),
    primaryButton: {
      text: t("hero_section.slides.slide_3.button_1"),
      to: "/book-a-demo",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "size-5"
      })
    },
    secondaryButton: {
      text: t("hero_section.slides.slide_1.button_2"),
      to: "/#partners",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "size-5"
      })
    }
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SEO, {
      title: t("seo.home_page.title"),
      description: t("seo.home_page.description"),
      canonical: t("seo.home_page.canonical"),
      ogImage: t("seo.home_page.ogImage")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "relative overflow-hidden min-h-screen",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MessengerButton, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(HeroCarousel, {
          slides: heroSlides,
          autoPlayInterval: 15000,
          autoPlay: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PartnersSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ServicesSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToolkitSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(NumbersSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlatformSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(OfficesSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AffiliateSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Blogs, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FAQSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ContactUsNew, {})]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_pages_homepage_Main_jsx.js.map?ver=e185bdb3270654c622fe