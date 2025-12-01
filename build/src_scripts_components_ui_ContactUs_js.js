"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_ContactUs_js"],{

/***/ "./src/scripts/components/ui/ContactUs.js":
/*!************************************************!*\
  !*** ./src/scripts/components/ui/ContactUs.js ***!
  \************************************************/
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
const ContactForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_render_components_motion_eleme-2ba61f"), __webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs"), __webpack_require__.e("src_scripts_components_ui_ContactForm_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ContactForm */ "./src/scripts/components/ui/ContactForm.js")));
const ContactUs = () => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    id: "contact-us",
    className: "relative flex flex-col justify-center items-center md:pt-[5vw] pt-[1vw] overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_7.svg",
      alt: "ShipX Contact Us Background",
      className: "absolute md:translate-y-0 -translate-y-[35vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none -z-10",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_7.svg",
      alt: "ShipX Contact Us Background Accent",
      className: "absolute translate-x-[30vw] md:translate-y-[15vw] -translate-y-[15vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none opacity-20 -z-10",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ParallaxSection, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative flex flex-col md:shadow-[0_0.5vw_2vw_rgba(255,0,229,0.15)] shadow-[0_0.5vw_3vw_rgba(255,0,229,0.25)] md:pl-[8vw] pl-[15vw] pr-[8vw] md:py-[4vw] py-[8vw] md:rounded-t-[2vw] rounded-t-[5vw] md:w-[70vw] w-[90vw] bg-white z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_8.svg",
          alt: "ShipX Contact Us Background Accent 2",
          className: "absolute md:-translate-x-[43vw] -translate-x-[75vw] md:-translate-y-[2vw] translate-y-[5vw] w-[200vw] md:h-[34vw] h-[145vw] pointer-events-none select-none z-0",
          "aria-hidden": "true"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex flex-col justify-center items-center md:pb-[5vw] pb-[10vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] cursor-pointer select-none z-20 w-fit",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "#FF00E5",
              viewBox: "0 0 24 24",
              strokeWidth: 0,
              stroke: "currentColor",
              className: "md:size-[0.5vw] size-[1.5vw]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              })
            }), t("contact_us_section.badge_1")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: `md:text-[2.3vw] text-[6vw] text-[#1A1A1A] text-center font-semibold md:leading-[2.5vw] leading-[6.5vw] mt-[1vw] select-none z-20 ${i18n.language === "vn" ? "" : "md:px-0 px-[5vw]"}`,
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [t("contact_us_section.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "inline text-[#FF00E5]",
              children: t("contact_us_section.header_2")
            }), " ", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {
              className: "md:block hidden"
            }) : "", t("contact_us_section.header_3")]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex md:flex-row flex-col-reverse gap-x-[3vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex flex-col md:w-[23vw] w-full md:text-[0.8vw] text-[2.5vw] md:pt-0 pt-[10vw]",
            style: {
              fontFamily: "Poppins, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-[#0E0E0E] md:text-[1.7vw] text-[5vw] font-semibold select-none",
              children: t("contact_us_section.header_4")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-black md:text-[0.9vw] text-[3vw] font-normal mt-[1vw] select-none",
              children: t("contact_us_section.subheader_1")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[5vw] md:mt-[3vw] mt-[10vw] md:gap-x-0 gap-x-[5vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex flex-row items-center w-fit",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "#FF00E5",
                  className: "md:size-[1vw] size-[4.5vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                    d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                    d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  href: `mailto:${t("contact_us_section.email")}`,
                  className: "md:pl-[1vw] pl-[3vw]",
                  children: t("contact_us_section.email")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex flex-row items-center w-fit",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "#FF00E5",
                  className: "md:size-[1vw] size-[4.5vw]",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                    fillRule: "evenodd",
                    d: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                    clipRule: "evenodd"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  className: "md:pl-[1vw] pl-[3vw]",
                  children: [t("contact_us_section.address_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), t("contact_us_section.address_2")]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ContactForm, {})]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUs);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_ContactUs_js.js.map?ver=8b578768eebd0c448512