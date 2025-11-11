"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_Statistics_js"],{

/***/ "./src/scripts/components/ui/Statistics.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/ui/Statistics.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ParallaxSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_value_use-scroll_mjs-node_modu-d38d2d"), __webpack_require__.e("src_scripts_components_ui_ParallaxSection_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js")));
const Counter = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-countup_build_index_js-node_modules_react-intersection-observer_di-4f8c7e"), __webpack_require__.e("src_scripts_components_ui_Counter_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Counter */ "./src/scripts/components/ui/Counter.js")));
const Statistics = () => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    id: "statistics",
    className: `relative flex md:flex-row flex-col-reverse justify-center items-center gap-x-[3vw] md:gap-y-0 gap-y-[10vw] md:pt-[15vw] pt-[40vw] lg:pb-[5vw] md:pb-[5vw] pb-[30vw] overflow-hidden select-none ${_utils_constants__WEBPACK_IMPORTED_MODULE_2__.margin}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_2.svg",
      alt: "",
      className: "absolute -translate-x-[0.01vw] md:-translate-y-[5vw] -translate-y-[50vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_3.svg",
      alt: "",
      className: "absolute md:-translate-y-[5.5vw] -translate-y-[40vw] translate-x-[40vw] md:w-[25vw] w-[45vw] md:h-[25vw] h-[45vw] pointer-events-none select-none z-0",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ParallaxSection, {
      className: "relative flex md:flex-row flex-col-reverse justify-center items-center gap-x-[3vw] md:gap-y-0 gap-y-[10vw] overflow-hidden select-none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `flex flex-row md:gap-x-[0.5vw] gap-x-[0.5vw]`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-col gap-x-[5vw] justify-center items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.customers_number")),
                duration: 5
              }), "+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.customers_label")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.global_partners_number")),
                duration: 5
              }), "+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.global_partners_label")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.countries_covered_number")),
                duration: 5
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.countries_covered_label")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-col gap-x-[5vw] justify-center items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.orders_processed_number")),
                decimals: 1,
                duration: 5
              }), "M+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.orders_processed_label")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.tech_warehouses_number")),
                duration: 5
              }), "+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.tech_warehouses_label")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.orders_fulfilled_number")),
                duration: 5
              }), "M+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.orders_fulfilled_label")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-col gap-x-[5vw] justify-center items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.logistics_number")),
                duration: 5
              }), "+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.logistics_label")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.trucks_number")),
                duration: 5
              }), "+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.trucks_label")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
              className: "md:text-[4vw] text-[8vw] font-bold bg-linear-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
              style: {
                fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
              },
              children: ["$", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Counter, {
                className: "",
                end: Number(t("statistics_section.gmv_number")),
                duration: 5
              }), "M+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
              children: t("statistics_section.gmv_label")
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "flex flex-col",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-col md:items-start items-center md:gap-y-[0.5vw] gap-y-[1.5vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
            className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#FFD6FA] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "#FF00E5",
              viewBox: "0 0 24 24",
              strokeWidth: 0,
              stroke: "currentColor",
              className: "md:size-[0.5vw] size-[1.5vw]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              })
            }), t("statistics_section.badge_1")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h1", {
            className: "md:text-[2vw] text-[6vw] text-[#1A1A1A] md:text-start text-center font-semibold md:leading-[2.5vw] leading-[6.5vw]",
            children: [t("statistics_section.tagline_1"), "\xA0", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}) : "", t("statistics_section.tagline_2"), "\xA0", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {
              className: "md:block hidden"
            }) : "", t("statistics_section.tagline_3")]
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statistics);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_Statistics_js.js.map?ver=c0d43032170bdf7f7244