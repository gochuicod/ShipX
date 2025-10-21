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
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var _ui_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/ContactForm */ "./src/scripts/components/ui/ContactForm.js");
/* harmony import */ var _ui_NewsletterForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/NewsletterForm */ "./src/scripts/components/ui/NewsletterForm.js");
/* harmony import */ var _ui_CarouselNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/CarouselNav */ "./src/scripts/components/ui/CarouselNav.js");
/* harmony import */ var _ui_CarouselServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/CarouselServices */ "./src/scripts/components/ui/CarouselServices.js");
/* harmony import */ var _ui_Counter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/Counter */ "./src/scripts/components/ui/Counter.js");
/* harmony import */ var _ui_ToolTipCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/ToolTipCard */ "./src/scripts/components/ui/ToolTipCard.js");
/* harmony import */ var _ui_MessengerButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/MessengerButton */ "./src/scripts/components/ui/MessengerButton.js");
/* harmony import */ var _ui_ServiceHeadline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/ServiceHeadline */ "./src/scripts/components/ui/ServiceHeadline.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/SEO */ "./src/scripts/components/ui/SEO.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);


















const Main = ({
  margin
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)();
  const [slide, setSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [isOpen1, setIsOpen1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isOpen2, setIsOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: "ShipX - ASEAN's Next Generation Platform",
      description: "Enter And Scale In The U.S. Market With Custom Logistics Solutions Built To Support Sellers From Launch To Nationwide Expansion",
      canonical: "https://shipx.asia",
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_MessengerButton__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "absolute top-[-5vw] left-[-10vw] size-[10vw] rounded-full shadow-[5vw_0.5vw_15vw_rgba(79,55,138,1)] z-40"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "absolute top-[8vw] right-[-15vw] size-[15vw] rounded-full shadow-[-5vw_0.5vw_20vw_rgba(255,0,229,0.2)] z-40"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "absolute top-1/2 left-[-30vw] size-[30vw] rounded-full shadow-[15vw_-10vw_20vw_rgba(255,0,229,0.1)] -z-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_CarouselNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
          margin: margin
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ServiceHeadline__WEBPACK_IMPORTED_MODULE_12__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "statistics",
          className: `relative flex md:flex-row flex-col-reverse justify-center items-center gap-x-[3vw] md:gap-y-0 gap-y-[10vw] md:pt-[15vw] pt-[40vw] lg:pb-[5vw] md:pb-[5vw] pb-[30vw] overflow-hidden select-none ${margin}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_2.svg",
            alt: "",
            className: "absolute -translate-x-[0.01vw] md:-translate-y-[5vw] -translate-y-[50vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_3.svg",
            alt: "",
            className: "absolute md:-translate-y-[5.5vw] -translate-y-[40vw] translate-x-[40vw] md:w-[25vw] w-[45vw] md:h-[25vw] h-[45vw] pointer-events-none select-none z-0",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "relative flex md:flex-row flex-col-reverse justify-center items-center gap-x-[3vw] md:gap-y-0 gap-y-[10vw] overflow-hidden select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: `flex flex-row md:gap-x-[0.5vw] gap-x-[0.5vw]`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-x-[5vw] justify-center items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.customers_number")),
                      duration: 5
                    }), "+"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.customers_label")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.global_partners_number")),
                      duration: 5
                    }), "+"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.global_partners_label")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.countries_covered_number")),
                      duration: 5
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.countries_covered_label")
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-x-[5vw] justify-center items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.orders_processed_number")),
                      decimals: 1,
                      duration: 5
                    }), "M+"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.orders_processed_label")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.tech_warehouses_number")),
                      duration: 5
                    }), "+"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.tech_warehouses_label")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.orders_fulfilled_number")),
                      duration: 5
                    }), "M+"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.orders_fulfilled_label")
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-x-[5vw] justify-center items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.logistics_number")),
                      duration: 5
                    }), "+"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.logistics_label")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.trucks_number")),
                      duration: 5
                    }), "+"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.trucks_label")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col items-center md:w-[15vw] w-[30vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                    className: "md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]",
                    style: {
                      fontFamily: "Kantumruy_Pro, system-ui, -apple-system, sans-serif"
                    },
                    children: ["$", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      className: "",
                      end: Number(t("statistics_section.gmv_number")),
                      duration: 5
                    }), "M+"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h6", {
                    className: "md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium",
                    children: t("statistics_section.gmv_label")
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "flex flex-col",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col md:items-start items-center md:gap-y-[0.5vw] gap-y-[1.5vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                  className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#FFD6FA] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "#FF00E5",
                    viewBox: "0 0 24 24",
                    strokeWidth: 0,
                    stroke: "currentColor",
                    className: "md:size-[0.5vw] size-[1.5vw]",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    })
                  }), t("statistics_section.badge_1")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h1", {
                  className: "md:text-[2vw] text-[6vw] text-[#1A1A1A] md:text-start text-center font-semibold md:leading-[2.5vw] leading-[6.5vw]",
                  children: [t("statistics_section.tagline_1"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), t("statistics_section.tagline_2"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("statistics_section.tagline_3")]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "services",
          className: `lg:h-screen md:h-fit h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center pt-[5vw] overflow-hidden`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_4.svg",
            alt: "",
            className: "absolute -translate-x-[40vw] translate-y-[12vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_5.svg",
            alt: "",
            className: "absolute -translate-x-[41vw] -translate-y-[35vw] w-[150vw] h-[80vw] pointer-events-none select-none z-0",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_5.svg",
            alt: "",
            className: "absolute translate-x-[23vw] translate-y-[24vw] w-[200vw] h-[80vw] pointer-events-none select-none -z-10 rotate-190",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "lg:h-screen md:h-fit h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] select-none",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#FF00E5",
                viewBox: "0 0 24 24",
                strokeWidth: 0,
                stroke: "currentColor",
                className: "md:size-[0.5vw] size-[1.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                })
              }), t("services_section.badge_1")]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
              className: "md:text-[2vw] text-[6vw] text-[#1A1A1A] text-center font-semibold md:leading-[2.5vw] leading-[6.5vw] select-none md:mt-0 mt-[1vw] px-[2vw]",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                className: "inline text-[#FF00E5]",
                children: t("services_section.header_1")
              }), "\xA0\u2013\xA0", t("services_section.header_2"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                className: "md:block hidden"
              }), t("services_section.header_3")]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex md:flex-row flex-col gap-x-[5vw] justify-center items-center md:pt-0 pt-[5vw]",
              style: {
                fontFamily: "Karla, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[3vw] md:w-[25vw] w-[95vw] md:justify-start justify-center md:gap-x-0 gap-x-[3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex flex-row",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    whileHover: {
                      scale: 1.2
                    },
                    whileTap: {
                      scale: 0.8
                    },
                    onClick: () => setSlide(0),
                    className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_1.svg",
                      alt: "globe"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                      children: t("services_section.link_1")
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex flex-row",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    whileHover: {
                      scale: 1.2
                    },
                    whileTap: {
                      scale: 0.8
                    },
                    onClick: () => setSlide(1),
                    className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_2.svg",
                      alt: "plane"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                      children: t("services_section.link_2")
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex flex-row",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    whileHover: {
                      scale: 1.2
                    },
                    whileTap: {
                      scale: 0.8
                    },
                    onClick: () => setSlide(2),
                    className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_3.svg",
                      alt: "flag"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                      children: t("services_section.link_3")
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex flex-row",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    whileHover: {
                      scale: 1.2
                    },
                    whileTap: {
                      scale: 0.8
                    },
                    onClick: () => setSlide(3),
                    className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_4.svg",
                      alt: "warehouse"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                      children: t("services_section.link_4")
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex flex-row",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    whileHover: {
                      scale: 1.2
                    },
                    whileTap: {
                      scale: 0.8
                    },
                    onClick: () => setSlide(4),
                    className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_5.svg",
                      alt: "amazon icon"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                      children: t("services_section.link_5")
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex flex-row",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    whileHover: {
                      scale: 1.2
                    },
                    whileTap: {
                      scale: 0.8
                    },
                    onClick: () => setSlide(5),
                    className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_6.svg",
                      alt: "package"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                      children: t("services_section.link_6")
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex flex-row",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    whileHover: {
                      scale: 1.2
                    },
                    whileTap: {
                      scale: 0.8
                    },
                    onClick: () => setSlide(6),
                    className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_7.svg",
                      alt: "magnifier"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                      children: t("services_section.link_7")
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex flex-row",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    whileHover: {
                      scale: 1.2
                    },
                    whileTap: {
                      scale: 0.8
                    },
                    onClick: () => setSlide(7),
                    className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_8.svg",
                      alt: "dollar"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                      children: t("services_section.link_8")
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center select-none",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_4__.MotionButton, {
                    type: "button",
                    className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
                    whileHover: {
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    },
                    whileTap: {
                      scale: 0.9,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 10
                      }
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                        to: "/book-a-demo",
                        className: "text-[#4F378A] font-semibold",
                        children: t("services_section.book_a_demo")
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    to: "/#contact-us",
                    end: true,
                    className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
                    children: t("services_section.contact_us")
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_CarouselServices__WEBPACK_IMPORTED_MODULE_8__["default"], {
                slide: slide
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
              className: "text-[#63666D] md:text-[0.6vw] text-[2vw] text-center select-none md:pt-0 pt-[3vw]",
              children: t("services_section.note")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "platform",
          className: `lg:min-h-screen md:min-h-fit min-h-screen relative flex flex-col justify-center items-center pt-[3vw] pb-[5vw] overflow-hidden select-none`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            className: "absolute md:w-[50vw] w-[80vw] md:h-[45vw] h-[80vw] md:translate-x-[17vw] translate-x-[10vw] md:-translate-y-[1vw] translate-y-[1vw] -z-10",
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_4.webp",
            alt: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "lg:min-h-screen md:min-h-fit min-h-screen relative flex flex-col justify-center items-center overflow-hidden select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex md:flex-row flex-col gap-x-[0.1vw] justify-center items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex md:flex-row flex-col gap-x-[0.5vw] md:gap-y-0 gap-y-[2vw] md:items-start items-center",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                    className: "flex flex-row gap-x-[0.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "#FF00E5",
                      viewBox: "0 0 24 24",
                      strokeWidth: 0,
                      stroke: "currentColor",
                      className: "md:size-[0.5vw] size-[1.5vw]",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      })
                    }), t("platform_section.badge_1")]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "flex flex-row gap-x-[0.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#414141] font-normal bg-[#FFD6FA] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]",
                    children: t("platform_section.badge_2")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "text-[#1A1A1A] md:text-[2.3vw] text-[6vw] font-semibold md:leading-[2.5vw] leading-[6.5vw] md:text-start text-center",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [t("platform_section.header_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), t("platform_section.header_2")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80 md:text-start text-center md:pt-0 pt-[3vw] md:pb-0 pb-[2vw]",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [t("platform_section.description_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("platform_section.description_2")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center",
                  style: {
                    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_4__.MotionButton, {
                    type: "button",
                    className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
                    whileHover: {
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    },
                    whileTap: {
                      scale: 0.9,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 10
                      }
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                        to: "/book-a-demo",
                        className: "text-[#4F378A] font-semibold",
                        children: t("platform_section.book_a_demo")
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    to: "/#contact-us",
                    end: true,
                    className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
                    children: t("platform_section.contact_us")
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                className: "md:w-[35vw] w-[60vw] md:h-[25vw] h-[20vh]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_2.webp",
                alt: ""
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex md:flex-row flex-col-reverse justify-center items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col justify-center items-center md:rounded-[2vw] rounded-[4vw] md:p-[2vw] p-[5vw] bg-white md:inset-shadow-[0_0_0.5vw_rgba(79,55,138,0.1)] inset-shadow-[0_0_3.5vw_rgba(79,55,138,0.1)]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-[#4D4D4D] md:text-[0.7vw] text-[2.4vw] font-medium",
                  children: t("platform_section.trusted_by")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "relative md:w-[30vw] w-[80vw] h-fit overflow-hidden",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex animate-scroll-right items-center gap-y-[3vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_2.webp",
                      alt: "scrolling",
                      className: "md:h-[6vw] h-[10vw] object-contain"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_2.webp",
                      alt: "scrolling",
                      className: "md:h-[6vw] h-[10vw] object-contain"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("style", {
                    jsx: true,
                    children: `
                      @keyframes scrollRight {
                        0% {
                          transform: translateX(-50%);
                        }
                        100% {
                          transform: translateX(0);
                        }
                      }

                      .animate-scroll-right {
                        animation: scrollRight 50s linear infinite;
                        width: max-content; /* ensures no weird shrinking */
                      }
                    `
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "relative md:w-[30vw] w-[80vw] h-fit overflow-hidden",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex animate-scroll items-center gap-y-[3vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_3.webp",
                      alt: "scrolling",
                      className: "md:h-[6vw] h-[10vw] object-contain"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_3.webp",
                      alt: "scrolling",
                      className: "md:h-[6vw] h-[10vw] object-contain"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("style", {
                    jsx: true,
                    children: `
                      @keyframes scroll {
                        0% {
                          transform: translateX(0);
                        }
                        100% {
                          transform: translateX(-50%);
                        }
                      }

                      .animate-scroll {
                        animation: scroll 45s linear infinite;
                        width: max-content; /* ensures no weird shrinking */
                      }
                    `
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col justify-start items-center text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] font-medium md:w-[40vw] w-[80vw] md:gap-y-[1.5vw] gap-y-[4vw] md:pl-[5vw] pl-0 md:pr-[10vw] pr-0 md:pb-0 pb-[5vw]",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                    src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_2.svg",
                    alt: "plane"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                    className: "pl-[1vw]",
                    children: [t("platform_section.info_1"), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                      className: "md:block hidden"
                    }), t("platform_section.info_1_1")]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                    src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_9.svg",
                    alt: "basket"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                    className: "pl-[1vw]",
                    children: [t("platform_section.info_2"), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                      className: "md:block hidden"
                    }), t("platform_section.info_2_1")]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                    src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_7.svg",
                    alt: "magnifier"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                    className: "pl-[1vw]",
                    children: [t("platform_section.info_3"), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                      className: "md:block hidden"
                    }), t("platform_section.info_3_1")]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                    src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_6.svg",
                    alt: "package"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                    className: "pl-[1vw]",
                    children: [t("platform_section.info_4"), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                      className: "md:block hidden"
                    }), t("platform_section.info_4_1")]
                  })]
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: `relative w-[100vw] ${margin} flex md:flex-row flex-col justify-center items-center md:gap-x-[3vw] gap-x-0 md:gap-y-0 gap-y-[10vw] md:pb-[10vw] pb-[25vw]`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[15vw_0vw_25vw_rgba(74,58,255,0.3)] -z-10"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[20vw_10vw_15vw_rgba(255,0,229,0.3)] -z-30"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[5vw_0.5vw_25vw_rgba(45,91,255,0.35)] -z-20"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("button", {
                type: "button",
                end: true,
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium absolute md:bottom-[-1vw] bottom-[-3vw] left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center z-[10] lg:w-auto md:w-auto w-[60vw] ",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "md:text-[0.8vw] text-[2.5vw] font-normal",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                    to: "/book-a-demo",
                    end: true,
                    children: t("systems_section.signup_button.question")
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  className: "flex flex-row md:text-[0.8vw] text-[2.5vw] md:gap-x-[0.1vw] gap-x-[0.5vw] justify-center items-center text-white font-bold",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                    to: "/book-a-demo",
                    end: true,
                    children: t("systems_section.signup_button.button")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 3.5,
                    stroke: "#FFFFFF",
                    className: "md:size-[0.7vw] size-[2.5vw]",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "relative overflow-hidden flex flex-col md:gap-y-[1vw] gap-y-[3vw] md:w-[35vw] w-full md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)] md:rounded-[2vw] rounded-[3vw] md:px-[3vw] px-[5vw] md:pt-[3vw] pt-[5vw] md:pb-[23vw] pb-[33vw] bg-white",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex justify-center items-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_14.svg",
                    alt: "Amilo Logo",
                    className: "md:h-[4vw] h-[15vw] md:w-[12vw] w-[30vw]"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "text-[#0E0E0E] md:text-[1.7vw] text-[4vw] text-wrap text-left font-semibold md:leading-[2.1vw] leading-[4.5vw]",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                    className: "inline text-[#FF00E5]",
                    children: [t("systems_section.sglink_card.title_highlight"), "\xA0"]
                  }), t("systems_section.sglink_card.title_rest")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                  className: "text-[#63666D]/80 md:text-[1.05vw] text-[2.55vw] text-wrap text-justify font-medium md:leading-[1.55vw] leading-[3.05vw]",
                  children: t("systems_section.sglink_card.description")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_4__.MotionButton, {
                  type: "button",
                  className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit z-[10]",
                  whileHover: {
                    scale: 1.1
                  },
                  whileTap: {
                    scale: 0.8
                  },
                  onClick: () => window.location.href = "https://admin.sglinkapi.com/",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2.5vw]",
                      children: t("systems_section.sglink_card.button")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/header_svg_2.svg",
                      alt: "Amilo Logo",
                      className: "md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[2vw] gap-x-[5vw] items-center justify-center absolute bottom-0 left-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: " md:h-[13vw] h-[20vw] md:w-[20vw] w-[50vw] opacity-30 bg-no-repeat md:bg-top bg-top-left bg-[length:50vw_50vw] md:bg-[length:30vw_30vw] ",
                    style: {
                      backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_16.svg")`
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex flex-col gap-y-[3vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-top bg-[length:120vw_60vw] md:bg-[length:100vw_50vw] ",
                      style: {
                        backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_17.svg")`
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-center bg-[length:120vw_60vw] md:bg-[length:100vw_50vw] ",
                      style: {
                        backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_18.svg")`
                      }
                    })]
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("button", {
                type: "button",
                end: true,
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium absolute md:bottom-[-1vw] bottom-[-3vw] left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center z-[10] lg:w-auto md:w-auto w-[60vw] ",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "md:text-[0.8vw] text-[2.5vw] font-normal",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                    to: "/book-a-demo",
                    end: true,
                    children: t("systems_section.signup_button.question")
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  className: "flex flex-row md:text-[0.8vw] text-[2.5vw] md:gap-x-[0.1vw] gap-x-[0.5vw] justify-center items-center text-white font-bold",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                    to: "/book-a-demo",
                    end: true,
                    children: t("systems_section.signup_button.button")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 3.5,
                    stroke: "#FFFFFF",
                    className: "md:size-[0.7vw] size-[2.5vw]",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "relative overflow-hidden flex flex-col md:gap-y-[1vw] gap-y-[3vw] md:w-[35vw] w-full md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)] md:rounded-[2vw] rounded-[3vw] md:px-[3vw] px-[5vw] md:pt-[3vw] pt-[5vw] md:pb-[23vw] pb-[33vw] bg-white",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "flex justify-center items-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_15.svg",
                    alt: "Amilo Logo",
                    className: "md:h-[4vw] h-[15vw] md:w-[12vw] w-[30vw]"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "text-[#0E0E0E] md:text-[1.7vw] text-[4vw] text-wrap text-left font-semibold md:leading-[2.1vw] leading-[4.5vw]",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                    className: "inline text-[#FF00E5]",
                    children: [t("systems_section.amilo_card.title_highlight"), "\xA0"]
                  }), t("systems_section.amilo_card.title_rest")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                  className: "text-[#63666D]/80 md:text-[1.05vw] text-[2.55vw] text-wrap text-justify font-medium md:leading-[1.55vw] leading-[3.05vw]",
                  children: t("systems_section.amilo_card.description")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_4__.MotionButton, {
                  type: "button",
                  className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit z-[10]",
                  whileHover: {
                    scale: 1.1
                  },
                  whileTap: {
                    scale: 0.8
                  },
                  onClick: () => window.location.href = "https://vip.amilo.co/",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2.5vw]",
                      children: t("systems_section.amilo_card.button")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/header_svg_1.svg",
                      alt: "Amilo Logo",
                      className: "md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[2vw] gap-x-[5vw] items-center justify-center absolute bottom-0 left-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    className: " md:h-[13vw] h-[20vw] md:w-[20vw] w-[50vw] opacity-30 bg-no-repeat md:bg-top bg-center bg-[length:150vw_25vw] md:bg-[length:100vw_13vw] ",
                    style: {
                      backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_20.svg")`
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex flex-col gap-y-[3vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-top bg-[length:120vw_25vw] md:bg-[length:100vw_20vw] ",
                      style: {
                        backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_19.svg")`
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-center bg-[length:150vw_60vw] md:bg-[length:100vw_15vw] ",
                      style: {
                        backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_21.svg")`
                      }
                    })]
                  })]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: `flex flex-col md:gap-y-[2vw] gap-y-0 ${margin} select-none`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex md:flex-row flex-col justify-between items-center gap-x-[5vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: `flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center ${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:w-[42vw]" : "md:w-[25vw]"} w-auto`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "#FF00E5",
                    viewBox: "0 0 24 24",
                    strokeWidth: 0,
                    stroke: "currentColor",
                    className: "md:size-[0.5vw] size-[1.5vw]",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    })
                  }), t("freight_section.badge_1")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "md:text-[2.3vw] text-[6vw] text-[#1A1A1A] md:text-start text-center font-semibold md:leading-[2.5vw] leading-[6.5vw]",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                    className: "inline text-[#FF00E5]",
                    children: t("freight_section.header_1")
                  }), "\xA0", t("freight_section.header_2"), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("freight_section.header_3")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center md:pt-0 pt-[2vw]",
                  style: {
                    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_4__.MotionButton, {
                    type: "button",
                    className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
                    whileHover: {
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    },
                    whileTap: {
                      scale: 0.9,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 10
                      }
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                        to: "/book-a-demo",
                        className: "text-[#4F378A] font-semibold",
                        children: t("freight_section.book_a_demo")
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    to: "/#contact-us",
                    end: true,
                    className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
                    children: t("freight_section.contact_us")
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex md:flex-row flex-col justify-between md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[2vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2.5vw] pl-[5vw] md:pr-0 pr-[5vw] md:py-0 py-[5vw]",
                  style: {
                    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                      className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#4F378A] font-semibold bg-transparent md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-0 md:py-[0.2vw] py-[0.5vw]",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "#4F378A",
                        viewBox: "0 0 24 24",
                        strokeWidth: 0,
                        stroke: "currentColor",
                        className: "md:size-[0.7vw] size-[1.5vw]",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        })
                      }), t("freight_section.badge_2")]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                      className: "md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-semibold md:leading-[2.5vw] leading-[5.5vw]",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                        className: "inline text-[#FF00E5]",
                        children: t("freight_section.header_4")
                      }), "\xA0", t("freight_section.header_5"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                        className: "hidden md:block"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                        className: "inline text-[#FF00E5]",
                        children: t("freight_section.header_6")
                      }), "\xA0", t("freight_section.header_7")]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    className: "md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]",
                    src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_5.webp",
                    alt: "Freight Section - Freight & Customs"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "md:hidden flex flex-col justify-start items-start w-full mt-[1vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                      type: "button",
                      onClick: () => setIsOpen1(!isOpen1),
                      className: "w-full text-[#1A1A1A] text-[2.4vw] text-center transition",
                      children: isOpen1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                        className: "font-medium",
                        children: t("freight_section.collapsible_text_opened_1")
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                        className: "font-medium",
                        children: t("freight_section.collapsible_text_closed_1")
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      initial: false,
                      children: isOpen1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                        initial: {
                          height: 0,
                          opacity: 0
                        },
                        animate: {
                          height: "auto",
                          opacity: 1
                        },
                        exit: {
                          height: 0,
                          opacity: 0
                        },
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 10
                        },
                        className: "overflow-hidden",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                          className: "flex md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[5vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
                          style: {
                            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                          },
                          children: _utils_constants__WEBPACK_IMPORTED_MODULE_2__.services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                            className: "flex flex-row justify-start items-center",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                              className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                              src: service.icon,
                              alt: t(`freight_section.services_1.${service.key}.title`)
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                              className: "font-semibold text-start md:pl-[1.5vw] pl-[3vw]",
                              children: [t(`freight_section.services_1.${service.key}.title`), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                                className: "text-[#63666D] text-normal",
                                children: [t(`freight_section.services_1.${service.key}.description`), " "]
                              })]
                            })]
                          }, index))
                        })
                      }, "content")
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "md:flex hidden md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: _utils_constants__WEBPACK_IMPORTED_MODULE_2__.services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw] ${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" && "w-[18vw]"}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                      src: service.icon,
                      alt: t(`freight_section.services_1.${service.key}.title`)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      className: "font-semibold text-start md:pl-[1.5vw] pl-[3vw]",
                      children: [t(`freight_section.services_1.${service.key}.title`), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                        className: "text-[#63666D] text-normal",
                        children: t(`freight_section.services_1.${service.key}.description`)
                      })]
                    })]
                  }, index))
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex md:flex-row flex-col justify-between md:items-center items-start gap-x-[5vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex md:flex-row flex-col-reverse justify-start md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[2vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:p-0 p-[5vw]",
                  style: {
                    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "md:hidden flex flex-col justify-start items-start w-full mt-[1vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                      type: "button",
                      onClick: () => setIsOpen2(!isOpen2),
                      className: "w-full text-[#1A1A1A] text-[2.4vw] text-center transition",
                      children: isOpen2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                        className: "font-medium",
                        children: t("freight_section.collapsible_text_opened_2")
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                        className: "font-medium",
                        children: t("freight_section.collapsible_text_closed_2")
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      initial: false,
                      children: isOpen2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                        initial: {
                          height: 0,
                          opacity: 0
                        },
                        animate: {
                          height: "auto",
                          opacity: 1
                        },
                        exit: {
                          height: 0,
                          opacity: 0
                        },
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 10
                        },
                        className: "overflow-hidden",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                          className: "flex md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[5vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
                          style: {
                            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                          },
                          children: _utils_constants__WEBPACK_IMPORTED_MODULE_2__.services_2.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                            className: "flex flex-row justify-start items-center",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                              className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                              src: service.icon,
                              alt: t(`freight_section.services_2.${service.key}.title`)
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                              className: "font-semibold text-start md:pl-[1.5vw] pl-[3vw]",
                              children: [t(`freight_section.services_2.${service.key}.title`), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                                className: "text-[#63666D] text-normal",
                                children: t(`freight_section.services_2.${service.key}.description`)
                              })]
                            })]
                          }, index))
                        })
                      }, "content")
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    className: "md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]",
                    src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_6.webp",
                    alt: "Freight Section - Customs & Fulfillment Solutions"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                      className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#4F378A] font-semibold bg-transparent md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-0 md:py-[0.2vw] py-[0.5vw]",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "#4F378A",
                        viewBox: "0 0 24 24",
                        strokeWidth: 0,
                        stroke: "currentColor",
                        className: "md:size-[0.7vw] size-[1.5vw]",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        })
                      }), t("freight_section.badge_3")]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                      className: `md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-semibold md:leading-[2.5vw] leading-[5.5vw] ${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" && "md:pr-[3vw]"}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                        className: "inline text-[#FF00E5]",
                        children: t("freight_section.header_8")
                      }), " ", t("freight_section.header_9"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                        className: "md:block hidden"
                      }), t("freight_section.header_10")]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "md:flex hidden md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: _utils_constants__WEBPACK_IMPORTED_MODULE_2__.services_2.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex flex-row justify-start items-center  md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]  shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)]  md:pl-[2vw] pl-[5vw] pr-[3.5vw]  md:py-[1.5vw] py-[3vw]  rounded-[1.5vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                      className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                      src: service.icon,
                      alt: t(`freight_section.services_2.${service.key}.title`)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      className: "font-semibold text-start md:pl-[1.5vw] pl-[3vw]",
                      children: [t(`freight_section.services_2.${service.key}.title`), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                        className: "text-[#63666D] text-normal",
                        children: t(`freight_section.services_2.${service.key}.description`)
                      })]
                    })]
                  }, index))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:w-[30vw]" : "md:w-[21vw]"} flex flex-col md:pt-0 pt-[10vw] w-auto`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "text-[#63666D] md:text-[1vw] text-[4vw] text-center font-medium italic opacity-90",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [t("freight_section.header_11"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("freight_section.header_12"), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("freight_section.header_13")]
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "network",
          className: `lg:min-h-screen md:h-fit h-auto relative flex flex-col justify-center items-center pt-[16vw] overflow-hidden select-none md:px-[8vw] px-[5vw]`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_10.svg",
            alt: "",
            className: "absolute translate-x-[36vw] -translate-y-[18vw] w-[200vw] md:h-[43vw] h-[83vw] pointer-events-none select-none -z-10",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: `flex md:flex-row flex-col gap-x-[2vw] justify-center items-center w-full ${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" ? "md:ml-[5vw]" : "md:ml-[2vw]"}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "md:w-[36vw] w-auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  className: "md:hidden flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] w-fit mx-auto",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "#FF00E5",
                    viewBox: "0 0 24 24",
                    strokeWidth: 0,
                    stroke: "currentColor",
                    className: "md:size-[0.5vw] size-[1.5vw]",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    })
                  }), t("offices_section.badge_1")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "text-[#1A1A1A] md:text-[2.3vw] text-[6vw] md:text-start text-center font-semibold md:leading-[3.5vw] leading-[6.5vw]",
                  children: [t("offices_section.header_1"), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("offices_section.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                    className: "inline text-[#FF00E5]",
                    children: t("offices_section.header_3")
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw] md:w-[35vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row md:justify-start justify-center md:gap-x-[3vw] gap-x-[10vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                    className: "md:flex hidden flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.6vw] text-white font-semibold bg-[#4F378A] md:rounded-[0.5vw] rounded-[2vw] md:px-[0.8vw] px-[1.8vw] py-[0.2vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "#FFFFFF",
                      viewBox: "0 0 24 24",
                      strokeWidth: 0,
                      stroke: "currentColor",
                      className: "md:size-[0.5vw] size-[1.5vw]",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      })
                    }), t("offices_section.badge_1")]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center",
                    style: {
                      fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_4__.MotionButton, {
                      type: "button",
                      className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
                      whileHover: {
                        y: -5,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }
                      },
                      whileTap: {
                        scale: 0.9,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 10
                        }
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                        className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
                          to: "/book-a-demo",
                          className: "text-[#4F378A] font-semibold",
                          children: t("offices_section.book_a_demo")
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_16__["default"], {
                      to: "/#contact-us",
                      end: true,
                      className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
                      children: t("offices_section.contact_us")
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "text-[#63666D] md:text-[0.85vw] text-[2.5vw] font-medium opacity-80 tracking-wider md:pt-0 pt-[2vw] md:text-start text-center",
                  children: [t("offices_section.description_1"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), t("offices_section.description_2")]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex md:flex-row flex-col justify-center items-center md:pt-0 pt-[5vw]",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex md:flex-col flex-wrap md:justify-normal justify-center md:gap-y-[1.5vw] gap-y-[3vw] md:gap-x-0 gap-x-[3vw] md:pl-[8vw] pl-[1.5vw] md:pr-0 pr-[1.5vw]",
                children: _utils_constants__WEBPACK_IMPORTED_MODULE_2__.offices.map((office, index) => office.hidden ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ToolTipCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  image: office.image,
                  country_name: t(`offices_section.offices.${office.key}.country_name`),
                  description: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#757577] md:text-[0.7vw] text-[2vw]",
                    children: t(`offices_section.offices.${office.key}.address`)
                  }),
                  contact_number: t(`offices_section.offices.${office.key}.contact_number`, ""),
                  email: t(`offices_section.offices.${office.key}.email`)
                }, index))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex md:w-[60vw] w-[100vw] md:h-[40vw] h-[75vw] md:bg-size-[auto_47vw] bg-size-[125vw_90vw] bg-center bg-no-repeat",
                style: {
                  backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/offices_section_map_image.webp")`
                }
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "w-full justify-center items-center flex md:px-0 px-[5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: `flex md:flex-row flex-col w-fit justify-center items-center md:gap-x-[3vw] gap-x-[11vw] bg-gradient-to-r from-[#4F378A] from-5% to-[#FF00E5] to-100% md:rounded-[2vw] rounded-[4vw] md:pl-[8vw] pl-[5vw] md:pt-0 pt-[5vw] md:pb-0 pb-[5vw] md:pr-0 pr-[5vw] md:my-[5vw] my-[10vw]`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-[#FFFFFF] md:text-[2.3vw] text-[6vw] font-semibold md:text-start text-center",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: t("newsletter_section.header_1")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "text-[#FFFFFF] md:text-[0.85vw] text-[2.5vw] md:text-start text-center md:pt-[0.5vw] pt-[2vw]",
                  children: [t("newsletter_section.description_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("newsletter_section.description_2")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_NewsletterForm__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "md:flex hidden md:w-[25vw] w-[80vw] md:h-[15vw] h-[30vw] md:bg-size-[25vw_15vw] bg-size-[100vw_50vw] bg-center bg-no-repeat",
                  style: {
                    backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_13.svg")`
                  }
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "contact-us",
          className: "relative flex flex-col justify-center items-center md:pt-[10vw] pt-[1vw] overflow-hidden",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_7.svg",
            alt: "",
            className: "absolute md:-translate-y-[5vw] -translate-y-[35vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none -z-10",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_7.svg",
            alt: "",
            className: "absolute translate-x-[30vw] md:translate-y-[10vw] -translate-y-[15vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none opacity-20 -z-10",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "relative flex flex-col md:shadow-[0_0.5vw_2vw_rgba(255,0,229,0.15)] shadow-[0_0.5vw_3vw_rgba(255,0,229,0.25)] md:pl-[8vw] pl-[15vw] pr-[8vw] md:py-[4vw] py-[8vw] md:rounded-t-[2vw] rounded-t-[5vw] md:w-[70vw] w-[90vw] bg-white z-10",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_8.svg",
                alt: "",
                className: "absolute md:-translate-x-[43vw] -translate-x-[75vw] md:-translate-y-[2vw] translate-y-[5vw] w-[200vw] md:h-[34vw] h-[145vw] pointer-events-none select-none z-0",
                "aria-hidden": "true"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col justify-center items-center md:pb-[5vw] pb-[10vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] cursor-pointer select-none z-20 w-fit",
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "#FF00E5",
                    viewBox: "0 0 24 24",
                    strokeWidth: 0,
                    stroke: "currentColor",
                    className: "md:size-[0.5vw] size-[1.5vw]",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    })
                  }), t("contact_us_section.badge_1")]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: `md:text-[2.3vw] text-[6vw] text-[#1A1A1A] text-center font-semibold md:leading-[2.5vw] leading-[6.5vw] mt-[1vw] select-none z-20 ${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "" : "md:px-0 px-[5vw]"}`,
                  style: {
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                  },
                  children: [t("contact_us_section.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                    className: "inline text-[#FF00E5]",
                    children: t("contact_us_section.header_2")
                  }), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("contact_us_section.header_3")]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex md:flex-row flex-col-reverse gap-x-[3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-col md:w-[23vw] w-full md:text-[0.8vw] text-[2.5vw] md:pt-0 pt-[10vw]",
                  style: {
                    fontFamily: "Poppins, system-ui, -apple-system, sans-serif"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#0E0E0E] md:text-[1.7vw] text-[5vw] font-semibold select-none",
                    children: t("contact_us_section.header_4")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-black md:text-[0.9vw] text-[3vw] font-normal mt-[1vw] select-none",
                    children: t("contact_us_section.subheader_1")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[5vw] md:mt-[3vw] mt-[10vw] md:gap-x-0 gap-x-[5vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      className: "flex flex-row items-center w-fit",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "#FF00E5",
                        className: "md:size-[1vw] size-[4.5vw]",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                          d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                          d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                        href: `mailto:${t("contact_us_section.email")}`,
                        className: "md:pl-[1vw] pl-[3vw]",
                        children: t("contact_us_section.email")
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      className: "flex flex-row items-center w-fit",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "#FF00E5",
                        className: "md:size-[1vw] size-[4.5vw]",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                          fillRule: "evenodd",
                          d: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                          clipRule: "evenodd"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                        className: "md:pl-[1vw] pl-[3vw]",
                        children: [t("contact_us_section.address_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), t("contact_us_section.address_2")]
                      })]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
              })]
            })
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/scripts/components/ui/CarouselNav.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/ui/CarouselNav.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarouselNav)
/* harmony export */ });
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react */ "./node_modules/@material-tailwind/react/index.js");
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function CarouselNav() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  const handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_1__.useSwipeable)({
    onSwipedLeft: () => document.querySelector(".mt-prev")?.click(),
    onSwipedRight: () => document.querySelector(".mt-next")?.click(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true
  });
  const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("75vh");
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        // 📱 Mobile screens
        setHeight("100vh");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // 💻 Tablet screens
        setHeight("45vw");
      } else {
        // 🖥️ Desktop screens
        setHeight("90vh");
      }
    };
    updateHeight(); // run on mount
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    ...handlers,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__.Carousel, {
      style: {
        height
      },
      autoplay: true,
      autoplayDelay: 10000,
      loop: true,
      transition: {
        duration: 1
      },
      className: "w-screen rounded-none md:pb-[1vw] pb-[10vw] lg:mt-0 md:mt-[5vw] mt-0",
      swipe: true,
      draggable: true,
      touchMove: true,
      verticalSwiping: false // make sure it only reacts to horizontal
      ,
      prevArrow: ({
        handlePrev
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        type: "button",
        onClick: handlePrev,
        className: " !absolute top-2/4 left-[1vw] -translate-y-2/4 mt-next bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out rounded-full p-[0.5vw] shadow-lg cursor-pointer md:flex hidden ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "white",
          viewBox: "0 0 24 24",
          strokeWidth: 2.5,
          stroke: "white",
          className: "w-[1vw] h-[1vw]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 19.5L8.25 12l7.5-7.5"
          })
        })
      }),
      nextArrow: ({
        handleNext
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        type: "button",
        onClick: handleNext,
        className: " !absolute top-2/4 right-[1vw] -translate-y-2/4 mt-prev bg-gradient-to-r from-[#FF00E5] from-0% via-[#FF00E5] via-60% to-[#4F378A] to-100% bg-[length:200%_100%] bg-[position:100%_0%] hover:bg-[position:0%_0%] transition-[background-position] duration-1000 ease-in-out rounded-full p-[0.5vw] shadow-lg cursor-pointer md:flex hidden ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "white",
          viewBox: "0 0 24 24",
          strokeWidth: 2.5,
          stroke: "white",
          className: "w-[1vw] h-[1vw]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
          })
        })
      }),
      navigation: ({
        setActiveIndex,
        activeIndex,
        length
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "absolute bottom-0 left-2/4 flex -translate-x-2/4 md:gap-[0.4vw] gap-[1vw]",
        children: new Array(length).fill("").map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: `block md:h-[0.3vw] h-[2vw] cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "md:w-[1.5vw] w-[5.5vw] bg-[#FF00E5]" : "md:w-[0.3vw] w-[2vw] bg-[#FF00E5]/50"}`,
          onClick: () => setActiveIndex(i)
        }, i))
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] lg:min-h-[75vh] md:min-h-fit min-h-fit bg-white md:px-[10vw] px-[10vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "md:flex-1 flex flex-col md:w-[55%] w-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full md:pl-[0.3vw] pl-[0.7vw] md:pr-[0.45vw] pr-[2vw] md:py-[0.2vw] py-[0.5vw] md:text-[0.6vw] text-[2.5vw] items-center font-semibold text-[#6941C6]",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
                className: "bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]",
                children: t("hero_section.slide_1.badge_1")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                className: "md:pl-[0.5vw] pl-[1vw] md:pr-[0.5vw] pr-[1vw]",
                children: t("hero_section.slide_1.badge_2")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "#9E77ED",
                className: "md:size-[0.6vw] size-[2.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col md:gap-y-[1.5vw] gap-y-[5vw] select-none mt-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
                className: "text-[#1A1A1A] font-extrabold md:text-[3.7vw] text-[10vw] md:leading-[4.2vw] leading-[10.5vw]",
                style: {
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                },
                children: [t("hero_section.slide_1.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {
                  className: "md:block hidden"
                }), t("hero_section.slide_1.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "inline text-[#FF00E5] font-black",
                  children: t("hero_section.slide_1.header_3")
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                className: "text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: [t("hero_section.slide_1.p_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {
                  className: "md:block hidden"
                }), t("hero_section.slide_1.p_1_1")]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-[#402B73] md:text-[0.8vw] text-[2.5vw] font-bold",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: t("hero_section.slide_1.p_2")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]",
              style: {
                fontFamily: "Karla, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_1.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
                className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
                whileHover: {
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                },
                whileTap: {
                  scale: 0.9,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 10
                  }
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                  to: "/#services",
                  end: true,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold",
                      children: t("hero_section.slide_1.learn_more")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: 3.5,
                      stroke: "#FF00E5",
                      className: "md:size-[0.7vw] size-[2.5vw]",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      })
                    })]
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "md:w-fit w-full flex justify-end items-center select-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_1.webp",
              alt: "Main SVG 1"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex flex-col select-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2vw] font-medium text-center",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [t("hero_section.slide_1.trusted_by_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
              children: t("hero_section.slide_1.trusted_by_2")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "relative w-full h-fit overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex animate-scroll-left items-center gap-y-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_4.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_4.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
              jsx: true,
              children: `
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .animate-scroll-left {
                  animation: scroll 45s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "relative w-full h-fit overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex animate-scroll-right items-center gap-y-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_5.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_5.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
              jsx: true,
              children: `
                @keyframes scroll {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                .animate-scroll-right {
                  animation: scroll 50s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] lg:min-h-[75vh] md:min-h-fit min-h-fit bg-white md:px-[10vw] px-[10vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex-1 flex-col md:w-[55%] w-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full md:pl-[0.3vw] pl-[0.7vw] md:pr-[0.45vw] pr-[2vw] md:py-[0.2vw] py-[0.5vw] md:text-[0.6vw] text-[2.5vw] items-center font-semibold text-[#6941C6]",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
                className: "bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]",
                children: t("hero_section.slide_2.badge_1")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                className: "md:pl-[0.5vw] pl-[1vw] md:pr-[0.5vw] pr-[1vw]",
                children: t("hero_section.slide_2.badge_2")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "#9E77ED",
                className: "md:size-[0.6vw] size-[2.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col md:gap-y-[1.5vw] gap-y-[5vw] select-none mt-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
                className: "text-[#1A1A1A] font-extrabold md:text-[3.8vw] text-[10vw] md:leading-[4.3vw] leading-[10.5vw]",
                style: {
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                },
                children: [t("hero_section.slide_2.header_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                  className: "inline text-[#FF00E5] font-black",
                  children: [" ", t("hero_section.slide_2.header_2")]
                }), " ", t("hero_section.slide_2.header_3")]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                className: "text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: [t("hero_section.slide_2.p_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {
                  className: "md:block hidden"
                }), t("hero_section.slide_2.p_1_1")]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-[#402B73] md:text-[0.8vw] text-[2.5vw] font-bold",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: t("hero_section.slide_2.p_2")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]",
              style: {
                fontFamily: "Karla, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_2.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
                className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
                whileHover: {
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                },
                whileTap: {
                  scale: 0.9,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 10
                  }
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                  to: "/#services",
                  end: true,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold",
                      children: t("hero_section.slide_2.learn_more")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: 3.5,
                      stroke: "#FF00E5",
                      className: "md:size-[0.7vw] size-[2.5vw]",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      })
                    })]
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "md:w-fit w-full flex justify-end items-center select-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_11.webp",
              alt: "Main SVG 11"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex flex-col select-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2vw] font-medium text-center",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [t("hero_section.slide_2.trusted_by_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
              children: t("hero_section.slide_2.trusted_by_2")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "relative w-full h-fit overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex animate-scroll-left items-center gap-y-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_6.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_6.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
              jsx: true,
              children: `
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .animate-scroll-left {
                  animation: scroll 55s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "relative w-full h-fit overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex animate-scroll-right items-center gap-y-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_7.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_7.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
              jsx: true,
              children: `
                @keyframes scroll {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                .animate-scroll-right {
                  animation: scroll 55s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] lg:min-h-[75vh] md:min-h-fit min-h-fit bg-white md:px-[10vw] px-[10vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex-1 flex-col md:w-[55%] w-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full md:pl-[0.3vw] pl-[0.7vw] md:pr-[0.45vw] pr-[2vw] md:py-[0.2vw] py-[0.5vw] md:text-[0.6vw] text-[2.5vw] items-center font-semibold text-[#6941C6]",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
                className: "bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]",
                children: t("hero_section.slide_3.badge_1")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                className: "md:pl-[0.5vw] pl-[1vw] md:pr-[0.5vw] pr-[1vw]",
                children: t("hero_section.slide_3.badge_2")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "#9E77ED",
                className: "md:size-[0.6vw] size-[2.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col md:gap-y-[1.5vw] gap-y-[5vw] select-none mt-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
                className: "text-[#1A1A1A] font-extrabold md:text-[3.8vw] text-[10vw] md:leading-[4.3vw] leading-[10.5vw]",
                style: {
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                },
                children: [t("hero_section.slide_3.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                  className: "inline text-[#FF00E5]",
                  children: [t("hero_section.slide_3.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("hero_section.slide_3.header_3")]
                }), " ", t("hero_section.slide_3.header_4")]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                className: "text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: [t("hero_section.slide_3.p_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {
                  className: "md:block hidden"
                }), t("hero_section.slide_3.p_1_1")]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-[#402B73] md:text-[0.8vw] text-[3vw] font-bold",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: t("hero_section.slide_3.p_2")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]",
              style: {
                fontFamily: "Karla, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_3.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
                className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
                whileHover: {
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                },
                whileTap: {
                  scale: 0.9,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 10
                  }
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                  to: "/#services",
                  end: true,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "text-[#4F378A] font-semibold",
                      children: t("hero_section.slide_3.learn_more")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: 3.5,
                      stroke: "#FF00E5",
                      className: "md:size-[0.7vw] size-[2.5vw]",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      })
                    })]
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "md:w-fit w-full flex justify-end items-center select-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_12.webp",
              alt: "Main SVG 12"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex flex-col select-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2vw] font-medium text-center",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [t("hero_section.slide_3.trusted_by_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
              children: t("hero_section.slide_3.trusted_by_2")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "relative w-full h-fit overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex animate-scroll-left items-center gap-y-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_8.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_8.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
              jsx: true,
              children: `
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .animate-scroll-left {
                  animation: scroll 45s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "relative w-full h-fit overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex animate-scroll-right items-center gap-y-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_9.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_logo_9.webp",
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
              jsx: true,
              children: `
                @keyframes scroll {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                .animate-scroll-right {
                  animation: scroll 50s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `
            })]
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/scripts/components/ui/CarouselServices.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/ui/CarouselServices.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarouselServices)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react */ "./node_modules/@material-tailwind/react/index.js");
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function CarouselServices({
  slide
}) {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_2__.useSwipeable)({
    onSwipedLeft: () => document.querySelector(".st-prev")?.click(),
    onSwipedRight: () => document.querySelector(".st-next")?.click(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true
  });
  const setActiveIndexRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (typeof slide === "number" && setActiveIndexRef.current) setActiveIndexRef.current(slide);
  }, [slide]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ...handlers,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
      autoplay: true,
      autoplayDelay: 5000,
      loop: true,
      transition: {
        duration: 1
      },
      className: "md:w-[25vw] w-[80vw] rounded-none select-none md:pt-0 pt-[5vw]",
      prevArrow: ({
        handlePrev
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        onClick: handlePrev,
        className: " !absolute top-2/4 left-[1vw] -translate-y-2/4 st-next bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out rounded-full p-[0.5vw] shadow-lg cursor-pointer hidden ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "white",
          viewBox: "0 0 24 24",
          strokeWidth: 2.5,
          stroke: "white",
          className: "w-[1vw] h-[1vw]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 19.5L8.25 12l7.5-7.5"
          })
        })
      }),
      nextArrow: ({
        handleNext
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        onClick: handleNext,
        className: " !absolute top-2/4 right-[1vw] -translate-y-2/4 st-prev bg-gradient-to-r from-[#FF00E5] from-0% via-[#FF00E5] via-60% to-[#4F378A] to-100% bg-[length:200%_100%] bg-[position:100%_0%] hover:bg-[position:0%_0%] transition-[background-position] duration-1000 ease-in-out rounded-full p-[0.5vw] shadow-lg cursor-pointer hidden ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "white",
          viewBox: "0 0 24 24",
          strokeWidth: 2.5,
          stroke: "white",
          className: "w-[1vw] h-[1vw]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
          })
        })
      }),
      navigation: ({
        setActiveIndex,
        activeIndex,
        length
      }) => {
        setActiveIndexRef.current = setActiveIndex;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "absolute md:bottom-4 bottom-2 left-2/4 flex -translate-x-2/4 md:gap-[0.4vw] gap-[1vw]",
          children: new Array(length).fill("").map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: `block md:h-[0.3vw] h-[1vw] cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? "md:w-[0.5vw] w-[3.5vw] bg-[#FF00E5]" : "md:w-[0.3vw] w-[1vw] bg-[#FF00E5]/50"}`,
            onClick: () => setActiveIndex(i)
          }, i))
        });
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#4F378A",
            viewBox: "0 0 24 24",
            strokeWidth: 0,
            stroke: "currentColor",
            className: "md:size-[0.5vw] size-[1.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            })
          }), t("services_section.link_1")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_1.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "inline text-[#FF00E5]",
            children: [t("services_section.carousel.slide_1.header_2"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_1.header_3")]
          }), " ", t("services_section.carousel.slide_1.header_4")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_1.price_desc_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_1.price_desc_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_1.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[4vw] text-[8vw]",
              children: t("services_section.carousel.slide_1.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_1.webp",
          alt: "Main Image 1"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#4F378A",
            viewBox: "0 0 24 24",
            strokeWidth: 0,
            stroke: "currentColor",
            className: "md:size-[0.5vw] size-[1.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            })
          }), t("services_section.link_2")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_2.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "inline text-[#FF00E5]",
            children: [t("services_section.carousel.slide_2.header_2"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_2.header_3")]
          }), " ", t("services_section.carousel.slide_2.header_4")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_2.price_desc_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_2.price_desc_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_2.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[4vw] text-[8vw]",
              children: t("services_section.carousel.slide_2.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_7.webp",
          alt: "Main Image 7"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#4F378A",
            viewBox: "0 0 24 24",
            strokeWidth: 0,
            stroke: "currentColor",
            className: "md:size-[0.5vw] size-[1.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            })
          }), t("services_section.link_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_3.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "inline text-[#FF00E5]",
            children: [t("services_section.carousel.slide_3.header_2"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_3.header_3")]
          }), " ", t("services_section.carousel.slide_3.header_4"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_3.header_5")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_3.price_desc_1"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_3.price_desc_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[4vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_3.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[4vw] text-[8vw]",
              children: t("services_section.carousel.slide_3.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_8.webp",
          alt: "Main Image 8"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#4F378A",
            viewBox: "0 0 24 24",
            strokeWidth: 0,
            stroke: "currentColor",
            className: "md:size-[0.5vw] size-[1.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            })
          }), t("services_section.link_4")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_4.header_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "inline text-[#FF00E5]",
            children: t("services_section.carousel.slide_4.header_2")
          }), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_4.header_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_4.price_desc_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
              className: "md:block hidden"
            }), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_4.price_desc_2"), "\xA0", t("services_section.carousel.slide_4.price_desc_3")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_4.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[3vw] text-[8vw]",
              children: t("services_section.carousel.slide_4.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_9.webp",
          alt: "Main Image 9"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#4F378A",
            viewBox: "0 0 24 24",
            strokeWidth: 0,
            stroke: "currentColor",
            className: "md:size-[0.5vw] size-[1.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            })
          }), t("services_section.link_5")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "inline text-[#FF00E5]",
            children: t("services_section.carousel.slide_5.header_1")
          }), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: "\xA0"
          }), t("services_section.carousel.slide_5.header_2")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[0.7vw] py-[1.5vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2vw] leading-snug text-left",
            children: [t("services_section.carousel.slide_5.price_desc_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_5.price_desc_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col justify-center items-center md:gap-y-[0.1vw] gap-y-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex flex-row items-baseline",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-[#FF99F5] md:text-[1.5vw] text-[3vw] font-black leading-none",
                children: t("services_section.carousel.slide_5.currency")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-[#FF00E5] md:text-[3vw] text-[8vw] font-black leading-none ml-[0.3vw]",
                children: t("services_section.carousel.slide_5.price_1")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "md:text-[1vw] text-[2vw] text-[#0E0E0E] font-medium leading-none",
              children: t("services_section.carousel.slide_5.price_2")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_10.webp",
          alt: "Main Image 10"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#4F378A",
            viewBox: "0 0 24 24",
            strokeWidth: 0,
            stroke: "currentColor",
            className: "md:size-[0.5vw] size-[1.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            })
          }), t("services_section.link_6")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_6.header_1"), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language !== "vn" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_6.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "inline text-[#FF00E5]",
            children: [t("services_section.carousel.slide_6.header_3"), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: "\xA0"
            }), t("services_section.carousel.slide_6.header_4")]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_6.price_desc_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_6.price_desc_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_6.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[4vw] text-[8vw]",
              children: t("services_section.carousel.slide_6.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_11.webp",
          alt: "Main Image 11"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: `flex flex-row md:gap-x-[0.5vw] gap-x-[1vw] items-center ${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[0.7vw]" : "md:text-[0.8vw]"} text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#4F378A",
            viewBox: "0 0 24 24",
            strokeWidth: 0,
            stroke: "currentColor",
            className: "md:size-[0.5vw] size-[1.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            })
          }), t("services_section.link_7")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_7.header_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "inline text-[#FF00E5]",
            children: t("services_section.carousel.slide_7.header_2")
          }), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: "\xA0"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_7.header_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_7.price_desc_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_7.price_desc_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_7.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[4vw] text-[8vw]",
              children: t("services_section.carousel.slide_7.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_12.webp",
          alt: "Main Image 12"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "#4F378A",
            viewBox: "0 0 24 24",
            strokeWidth: 0,
            stroke: "currentColor",
            className: "md:size-[0.5vw] size-[1.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            })
          }), t("services_section.carousel.slide_8.badge_1")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: `${i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-center font-semibold`,
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_8.header_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "inline text-[#FF00E5]",
            children: t("services_section.carousel.slide_8.header_2")
          }), "\xA0", t("services_section.carousel.slide_8.header_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col md:gap-y-[1vw] gap-y-[2vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_23.svg",
              alt: "Main Icon 23"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_1")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_24.svg",
              alt: "Main Icon 24"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_2")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_24.svg",
              alt: "Main Icon 24"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_3")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_25.svg",
              alt: "Main Icon 25"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_4")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_8.svg",
              alt: "Main Icon 8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_5")
            })]
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/scripts/components/ui/ContactForm.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/ui/ContactForm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)();
  const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onSubmit = async data => {
    try {
      const res = await fetch("/wp-json/mytheme/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "flex flex-col gap-y-[1.5vw] md:text-[0.8vw] text-[2.5vw] font-normal z-10 select-none md:w-auto w-full",
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex md:flex-row flex-col gap-x-[1vw] md:gap-y-0 gap-y-[5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          className: "text-nowrap",
          htmlFor: "name",
          children: t("contact_us_section.form.name")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          "aria-invalid": errors.name ? "true" : "false",
          id: "name",
          className: `border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`,
          ...register("name", {
            required: t("contact_us_section.form.name_placeholder")
          }),
          placeholder: errors.name ? errors.name.message : "",
          autoComplete: "name"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          className: "text-nowrap",
          htmlFor: "email",
          children: t("contact_us_section.form.email")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          "aria-invalid": errors.email ? "true" : "false",
          id: "email",
          type: "email",
          className: `border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.email ? "placeholder-red-500" : "placeholder-black/50"}`,
          ...register("email", {
            required: t("contact_us_section.form.email_placeholder_1"),
            pattern: {
              value: /^\S+@\S+$/i,
              message: t("contact_us_section.form.email_placeholder_2")
            }
          }),
          placeholder: errors.email ? errors.email.message : "",
          autoComplete: "email"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          className: "text-nowrap",
          htmlFor: "tel",
          children: t("contact_us_section.form.phone")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          "aria-invalid": errors.phone ? "true" : "false",
          id: "tel",
          type: "tel",
          className: `border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`,
          ...register("phone", {
            pattern: {
              value: /^\+?[\d\s\-()]{7,}$/,
              message: t("contact_us_section.form.phone_placeholder")
            }
          }),
          inputMode: "tel",
          autoComplete: "tel",
          placeholder: errors.phone ? errors.phone.message : ""
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-col md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
        className: "text-nowrap",
        htmlFor: "message",
        children: t("contact_us_section.form.message")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
        "aria-invalid": errors.message ? "true" : "false",
        id: "message",
        className: `border-b border-[#CACACA] w-full resize-none md:h-[5vw] h-[15vw] focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`,
        ...register("message", {
          required: t("contact_us_section.form.message_placeholder")
        }),
        placeholder: errors.message ? errors.message.message : "",
        autoComplete: "off"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.5vw] font-normal justify-start items-center md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "submit",
        disabled: isSubmitting,
        className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
        children: isSubmitting ? t("contact_us_section.form.button_sending") : isSent ? t("contact_us_section.form.button_sent") : t("contact_us_section.form.button_default")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
        type: "button",
        className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
        whileHover: {
          y: -5,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
          }
        },
        whileTap: {
          scale: 0.9,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 10
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            to: "/book-a-demo",
            className: "text-[#4F378A] font-semibold",
            children: t("contact_us_section.form.book_a_demo")
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ "./src/scripts/components/ui/Counter.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/ui/Counter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Counter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  style,
  decimals = 0,
  decimal = "."
}) {
  const {
    ref,
    inView
  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__.useInView)({
    triggerOnce: true,
    threshold: 0.5
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    ref: ref,
    className: className,
    children: inView ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_countup__WEBPACK_IMPORTED_MODULE_0__["default"], {
      end: end,
      duration: duration,
      prefix: prefix,
      suffix: suffix,
      decimals: decimals,
      decimal: decimal,
      style: style
    }) : `${prefix}0${suffix}`
  });
}

/***/ }),

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

/***/ }),

/***/ "./src/scripts/components/ui/NewsletterForm.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/ui/NewsletterForm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)();
  const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onSubmit = async data => {
    try {
      const res = await fetch("/wp-json/mytheme/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "flex flex-row md:justify-start justify-center gap-x-[1vw] md:text-[0.8vw] text-[2.3vw] font-normal z-10 select-none md:w-auto w-full md:pt-[1vw] pt-[5vw]",
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0 bg-gradient-to-t from-[#4F378A] to-[#FF00E5] rounded-full"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        type: "email",
        className: `relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-[#8E3CAD] rounded-full ${errors.email ? "placeholder-red-500" : "placeholder-white/50"} text-white focus:outline-none`,
        ...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email"
          }
        }),
        placeholder: errors.email ? errors.email.message : t("newsletter_section.form.placeholder"),
        autoComplete: "email"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
      type: "submit",
      className: "md:p-[0.10vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
      disabled: isSubmitting,
      whileHover: {
        y: -5,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15
        }
      },
      whileTap: {
        scale: 0.9,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 10
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0 bg-gradient-to-t from-[#4F378A] to-[#FF00E5] rounded-full"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-[#8E3CAD] text-white rounded-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          to: "/book-a-demo",
          children: isSubmitting ? t("newsletter_section.form.button_sending") : isSent ? t("newsletter_section.form.button_sent") : t("newsletter_section.form.button_default")
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsletterForm);

/***/ }),

/***/ "./src/scripts/components/ui/ParallaxSection.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/ui/ParallaxSection.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParallaxSection)
/* harmony export */ });
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
"use client";




function ParallaxSection({
  children,
  className = "",
  distance = 150,
  // how far it moves up/down
  stiffness = 120,
  damping = 12,
  mass = 0.8,
  once = false
}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const {
    scrollYProgress
  } = (0,motion_react__WEBPACK_IMPORTED_MODULE_1__.useScroll)({
    target: ref,
    offset: ["start end", "end start"] // start entering -> start leaving
  });

  // Map scroll progress (0 to 1) to y movement
  const y = (0,motion_react__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [0, 0.5, 1], [distance, 0, -distance]);
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(motion_react__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
    ref: ref,
    className: className,
    style: {
      y,
      opacity: 1
    },
    transition: {
      type: "spring",
      stiffness,
      damping,
      mass
    },
    viewport: {
      once,
      amount: 0.2
    },
    children: children
  });
}

/***/ }),

/***/ "./src/scripts/components/ui/ServiceHeadline.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/ui/ServiceHeadline.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const ServiceHeadline = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: `flex flex-col ${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.margin} justify-center items-center md:py-[10vw] py-[15vw]`,
    style: {
      fontFamily: "Public_Sans, system-ui, -apple-system, sans-serif"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      to: "/blog",
      end: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex md:flex-row flex-col md:gap-x-[5vw] gap-x-0 md:gap-y-0 gap-y-[10vw] justify-center items-center bg-[#FFD6FA]/50 md:rounded-[1.5vw] rounded-[3.5vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "flex md:w-[30vw] w-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            loading: "lazy",
            className: "shadow-[0_0_1vw_rgba(79,55,138,0.15)] md:rounded-[1.5vw] rounded-[3.5vw]",
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_sglink_banner_image_1.webp",
            alt: "ShipX Goes Live"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col md:gap-y-[0.5vw] gap-y-[2vw] md:w-[15vw] w-auto justify-center md:items-start items-center md:pb-0 pb-[5vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
            className: "text-[#1A1A1A] md:text-[1vw] text-[5vw] font-semibold md:leading-[1vw] leading-[5vw] md:text-start text-center",
            children: [t("service_headline_section.heading_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-[#FF00E5]",
              children: t("service_headline_section.heading_2")
            }), "\xA0", t("service_headline_section.heading_3")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_0__.MotionButton, {
            type: "button",
            className: "bg-[#FF00E5] flex flex-row md:gap-x-[0.5vw] gap-[1.5vw] justify-center items-center md:px-[1.5vw] px-[5vw] md:py-[0.5vw] py-[1.5vw] md:rounded-[0.5vw] rounded-[2vw] text-white font-medium md:text-[0.8vw] text-[2.5vw] text-center cursor-pointer",
            whileHover: {
              scale: 1.2
            },
            whileTap: {
              scale: 0.8
            },
            children: [t("service_headline_section.button_text_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2.5,
              stroke: "currentColor",
              className: "md:w-[1vw] w-[2.5vw] md:h-[1vw] h-[2.5vw]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              })
            })]
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceHeadline);

/***/ }),

/***/ "./src/scripts/components/ui/ToolTipCard.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/ui/ToolTipCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TooltipCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TooltipCard({
  image,
  country_name,
  description,
  contact_number,
  email,
  hidden
}) {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isTouch, setIsTouch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const hoverTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Detect touch device
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Close when clicking outside (for touch)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isTouch) return;
    const handleClickOutside = e => {
      if (cardRef.current && !cardRef.current.contains(e.target) && tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTouch]);

  // Hover logic (desktop)
  const handleMouseEnter = () => {
    if (!isTouch) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setOpen(true);
    }
  };
  const handleMouseLeave = () => {
    if (!isTouch) {
      hoverTimeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 200); // small delay to prevent flicker
    }
  };

  // Click logic (touch)
  const handleClick = () => {
    if (isTouch) setOpen(prev => !prev);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "group cursor-pointer flex flex-row md:w-full w-fit md:rounded-[2vw] rounded-[3vw]  md:pl-[0.8vw] pl-[3vw] md:pr-[2vw] pr-[3vw] md:py-[0.7vw] py-[1.5vw]  items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)]  hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)]  transition-shadow duration-1000 ease-in-out relative",
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      loading: "lazy",
      className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw] rounded-full",
      src: image,
      alt: country_name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "text-[#1A1A1A] font-semibold md:text-[0.8vw] text-[2.3vw] md:pl-[1vw] pl-[3vw]",
      children: country_name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      ref: tooltipRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: `
          absolute md:left-full left-[-2.5vw] md:top-1/2 top-0 ml-[1vw] -translate-y-1/2
          flex flex-col gap-y-[0.5vw] 
          bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-20
          md:w-[13vw] w-[25vw]
          transition-opacity duration-1000
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
          md:group-hover:opacity-100 md:group-hover:visible
          ${hidden ? "hidden" : "block"}
        `,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        loading: "lazy",
        className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw] rounded-full",
        src: image,
        alt: country_name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-[#19191D] md:text-[0.8vw] text-[2.3vw] font-bold",
        children: country_name
      }), description, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: `tel:${contact_number}`,
        className: "text-[#757577] md:text-[0.7vw] text-[2vw] pt-[1.5vw]",
        children: contact_number
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: `mailto:${email}`,
        className: "text-[#757577] md:text-[0.7vw] text-[2vw]",
        children: email
      })]
    })]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_Main_js.js.map?ver=e733631ae6895b30ff19