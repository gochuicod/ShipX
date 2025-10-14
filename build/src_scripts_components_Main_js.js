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
/* harmony import */ var _assets_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/assets */ "./src/assets/assets.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var _ui_ContactForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/ContactForm */ "./src/scripts/components/ui/ContactForm.js");
/* harmony import */ var _ui_NewsletterForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/NewsletterForm */ "./src/scripts/components/ui/NewsletterForm.js");
/* harmony import */ var _ui_CarouselNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/CarouselNav */ "./src/scripts/components/ui/CarouselNav.js");
/* harmony import */ var _ui_CarouselServices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/CarouselServices */ "./src/scripts/components/ui/CarouselServices.js");
/* harmony import */ var _ui_Counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/Counter */ "./src/scripts/components/ui/Counter.js");
/* harmony import */ var _ui_ToolTipCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/ToolTipCard */ "./src/scripts/components/ui/ToolTipCard.js");
/* harmony import */ var _ui_MessengerButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/MessengerButton */ "./src/scripts/components/ui/MessengerButton.js");
/* harmony import */ var _ui_ServiceHeadline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/ServiceHeadline */ "./src/scripts/components/ui/ServiceHeadline.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/SEO */ "./src/scripts/components/ui/SEO.js");
/* harmony import */ var _hooks_useYoastSEO__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/useYoastSEO */ "./src/scripts/hooks/useYoastSEO.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);


















const Main = ({
  margin,
  slug = "",
  customSeo
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)();
  const [slide, setSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [isOpen1, setIsOpen1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isOpen2, setIsOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const page = (0,_hooks_useYoastSEO__WEBPACK_IMPORTED_MODULE_15__["default"])(slug); // fetch WP page based on slug

  // Fallback SEO if Yoast data is not available yet
  const seo = page?.yoast_head_json || {
    title: customSeo?.title || "ShipX - ASEAN's Next Generation Platform",
    description: customSeo?.description || "Enter And Scale In The U.S. Market With Custom Logistics Solutions Built To Support Sellers From Launch To Nationwide Expansion",
    canonical: customSeo?.canonical || `https://shipx.asia${_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language !== "en" ? `/${_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language}` : ""}${slug ? `/${slug}` : ""}`,
    og_image: customSeo?.ogImage ? [{
      url: customSeo.ogImage
    }] : [{
      url: "https://shipx.asia/assets/default-og.jpg"
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: seo.title,
      description: seo.description,
      canonical: seo.canonical,
      ogImage: seo.og_image?.[0]?.url
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_MessengerButton__WEBPACK_IMPORTED_MODULE_12__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "absolute top-[-5vw] left-[-10vw] size-[10vw] rounded-full shadow-[5vw_0.5vw_15vw_rgba(79,55,138,1)] z-40"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "absolute top-[8vw] right-[-15vw] size-[15vw] rounded-full shadow-[-5vw_0.5vw_20vw_rgba(255,0,229,0.2)] z-40"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "absolute top-1/2 left-[-30vw] size-[30vw] rounded-full shadow-[15vw_-10vw_20vw_rgba(255,0,229,0.1)] -z-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_CarouselNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
          margin: margin
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ServiceHeadline__WEBPACK_IMPORTED_MODULE_13__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "statistics",
          className: `relative flex md:flex-row flex-col-reverse justify-center items-center gap-x-[3vw] md:gap-y-0 gap-y-[10vw] md:pt-[15vw] pt-[40vw] md:pb-[5vw] pb-[30vw] overflow-hidden select-none ${margin}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_2,
            alt: "",
            className: "absolute -translate-x-[0.01vw] md:-translate-y-[5vw] -translate-y-[50vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_3,
            alt: "",
            className: "absolute md:-translate-y-[5.5vw] -translate-y-[40vw] translate-x-[40vw] md:w-[25vw] w-[45vw] md:h-[25vw] h-[45vw] pointer-events-none select-none z-0",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                  children: ["$", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                children: [t("statistics_section.tagline_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), t("statistics_section.tagline_2"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                  className: "md:block hidden"
                }), t("statistics_section.tagline_3")]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "services",
          className: `md:h-screen h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center pt-[5vw] overflow-hidden`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_4,
            alt: "",
            className: "absolute -translate-x-[40vw] translate-y-[12vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_5,
            alt: "",
            className: "absolute -translate-x-[41vw] -translate-y-[35vw] w-[150vw] h-[80vw] pointer-events-none select-none z-0",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_5,
            alt: "",
            className: "absolute translate-x-[23vw] translate-y-[24vw] w-[200vw] h-[80vw] pointer-events-none select-none -z-10 rotate-190",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
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
            }), " ", "\u2013", t("services_section.header_2"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
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
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_1
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                    children: t("services_section.link_1")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex flex-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_2
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                    children: t("services_section.link_2")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex flex-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_3
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                    children: t("services_section.link_3")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex flex-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_4
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                    children: t("services_section.link_4")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex flex-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_5
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                    children: t("services_section.link_5")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex flex-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_6
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                    children: t("services_section.link_6")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex flex-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_7
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                    children: t("services_section.link_7")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "flex flex-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_8
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                    children: t("services_section.link_8")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center select-none",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionButton, {
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
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                      to: "/book-a-demo",
                      className: "text-[#4F378A] font-semibold",
                      children: t("services_section.book_a_demo")
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                  to: "/#contact-us",
                  end: true,
                  className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
                  children: t("services_section.contact_us")
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_CarouselServices__WEBPACK_IMPORTED_MODULE_9__["default"], {
              slide: slide
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2vw] text-center select-none md:pt-0 pt-[3vw]",
            children: t("services_section.note")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "platform",
          className: `min-h-screen relative flex flex-col justify-center items-center py-[10vw] overflow-hidden select-none`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            className: "absolute md:w-[50vw] w-[80vw] md:h-[45vw] h-[80vw] md:translate-x-[17vw] translate-x-[10vw] md:-translate-y-[1vw] translate-y-[1vw] -z-10",
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_img_4
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
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
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionButton, {
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
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                      to: "/book-a-demo",
                      className: "text-[#4F378A] font-semibold",
                      children: t("platform_section.book_a_demo")
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                  to: "/#contact-us",
                  end: true,
                  className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
                  children: t("platform_section.contact_us")
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
              className: "md:w-[35vw] w-[60vw] md:h-[25vw] h-[20vh]",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_img_2
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_2,
                    alt: "scrolling",
                    className: "md:h-[6vw] h-[10vw] object-contain"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_2,
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
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_3,
                    alt: "scrolling",
                    className: "md:h-[6vw] h-[10vw] object-contain"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                    src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_3,
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
                  src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_2
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "pl-[1vw]",
                  children: [t("platform_section.info_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("platform_section.info_1_1")]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                  className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                  src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_9
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "pl-[1vw]",
                  children: [t("platform_section.info_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("platform_section.info_2_1")]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                  className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                  src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_7
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "pl-[1vw]",
                  children: [t("platform_section.info_3"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("platform_section.info_3_1")]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                  className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                  src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_icon_6
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                  className: "pl-[1vw]",
                  children: [t("platform_section.info_4"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                    className: "md:block hidden"
                  }), t("platform_section.info_4_1")]
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: `flex flex-col md:gap-y-[2vw] gap-y-0 ${margin} select-none`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "flex md:flex-row flex-col justify-between items-center gap-x-[5vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center md:w-[25vw] w-auto",
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
                }), "\xA0", t("freight_section.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                  className: "md:block hidden"
                }), t("freight_section.header_3")]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center md:pt-0 pt-[2vw]",
                style: {
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionButton, {
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
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                      to: "/book-a-demo",
                      className: "text-[#4F378A] font-semibold",
                      children: t("freight_section.book_a_demo")
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
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
                    }), "\xA0", t("freight_section.header_5"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                      className: "md:block hidden"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                      className: "inline text-[#FF00E5]",
                      children: t("freight_section.header_6")
                    }), "\xA0", t("freight_section.header_7")]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                  className: "md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]",
                  src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_img_5
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "md:hidden flex flex-col justify-start items-start w-full mt-[1vw]",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                    onClick: () => setIsOpen1(!isOpen1),
                    className: "w-full text-[#1A1A1A] text-[2.4vw] text-center transition",
                    children: isOpen1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "font-medium",
                      children: t("freight_section.collapsible_text_opened_1")
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "font-medium",
                      children: t("freight_section.collapsible_text_closed_1")
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
                    initial: false,
                    children: isOpen1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                        children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
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
                children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw]",
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
                    onClick: () => setIsOpen2(!isOpen2),
                    className: "w-full text-[#1A1A1A] text-[2.4vw] text-center transition",
                    children: isOpen2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "font-medium",
                      children: t("freight_section.collapsible_text_opened_2")
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "font-medium",
                      children: t("freight_section.collapsible_text_closed_2")
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
                    initial: false,
                    children: isOpen2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionDiv, {
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
                        children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.services_2.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
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
                  src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_img_6
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
                    className: "md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-semibold md:leading-[2.5vw] leading-[5.5vw]",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                      className: "inline text-[#FF00E5]",
                      children: t("freight_section.header_8")
                    }), " ", t("freight_section.header_9"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                      className: "md:block hidden"
                    }), t("freight_section.header_10")]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "md:flex hidden md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.services_2.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
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
              className: "flex flex-col md:pt-0 pt-[10vw] md:w-[21vw] w-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                className: "text-[#63666D] md:text-[1vw] text-[4vw] text-center font-medium italic opacity-90",
                style: {
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                },
                children: [t("freight_section.header_11"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                  className: "md:block hidden"
                }), t("freight_section.header_12"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                  className: "md:block hidden"
                }), t("freight_section.header_13")]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "network",
          className: `md:min-h-screen h-auto relative flex flex-col justify-center items-center pt-[16vw] overflow-hidden select-none md:px-[8vw] px-[5vw]`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_10,
            alt: "",
            className: "absolute translate-x-[36vw] -translate-y-[18vw] w-[200vw] md:h-[43vw] h-[83vw] pointer-events-none select-none -z-10",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: `flex md:flex-row flex-col gap-x-[2vw] justify-center items-center w-full`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
              className: "text-[#1A1A1A] md:text-[2.3vw] text-[6vw] md:text-start text-center font-semibold md:leading-[3.5vw] leading-[6.5vw]",
              children: [t("offices_section.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
                className: "md:block hidden"
              }), t("offices_section.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                className: "inline text-[#FF00E5]",
                children: t("offices_section.header_3")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-row md:justify-start justify-center md:gap-x-[3vw] gap-x-[10vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                  className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.6vw] text-white font-semibold bg-[#4F378A] md:rounded-[0.5vw] rounded-[2vw] md:px-[0.8vw] px-[1.8vw] py-[0.2vw]",
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionButton, {
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
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                        to: "/book-a-demo",
                        className: "text-[#4F378A] font-semibold",
                        children: t("offices_section.book_a_demo")
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                    to: "/#contact-us",
                    end: true,
                    className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
                    children: t("offices_section.contact_us")
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
                className: "text-[#63666D] md:text-[0.85vw] text-[2.5vw] font-medium opacity-80 tracking-wider md:pt-0 pt-[2vw]",
                children: [t("offices_section.description_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {}), t("offices_section.description_2")]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "flex md:flex-row flex-col justify-center items-center md:pt-0 pt-[5vw]",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "flex md:flex-col flex-wrap md:justify-normal justify-center md:gap-y-[1.5vw] gap-y-[3vw] md:gap-x-0 gap-x-[3vw] md:pl-[8vw] pl-[1.5vw] md:pr-0 pr-[1.5vw]",
              children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.offices.map((office, index) => office.hidden ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ToolTipCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
              className: "flex md:w-[60vw] w-[100vw] md:h-[40vw] h-[75vw] md:bg-size-[auto_47vw] bg-size-[130vw_120vw] bg-center bg-no-repeat",
              style: {
                backgroundImage: `url(${_assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_6})`
              }
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: `relative w-[100vw] ${margin} flex md:flex-row flex-col justify-center items-center md:gap-x-[3vw] gap-x-0 md:gap-y-0 gap-y-[5vw] md:pt-[5vw] pt-[10vw]`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[15vw_0vw_25vw_rgba(74,58,255,0.3)] -z-10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[20vw_10vw_15vw_rgba(255,0,229,0.3)] -z-30"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[5vw_0.5vw_25vw_rgba(45,91,255,0.35)] -z-20"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            to: "/book-a-demo",
            end: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("button", {
            end: true,
            className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium absolute md:bottom-[-1vw] bottom-[-3vw] cursor-pointer flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center z-[10] ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
              className: "md:text-[0.8vw] text-[2.5vw] font-normal",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
                to: "/book-a-demo",
                end: true,
                children: t("systems_section.signup_button.question")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
              className: "flex flex-row md:text-[0.8vw] text-[2.5vw] md:gap-x-[0.1vw] gap-x-[0.5vw] justify-center items-center text-white font-bold",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
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
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_14,
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
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionButton, {
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
                  src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.header_svg_2,
                  alt: "Amilo Logo",
                  className: "md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex flex-row md:gap-x-[2vw] gap-x-[5vw] items-center justify-center absolute bottom-0 left-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: " md:h-[13vw] h-[20vw] md:w-[20vw] w-[50vw] opacity-30 bg-no-repeat md:bg-top bg-top-left bg-[length:50vw_50vw] md:bg-[length:30vw_30vw] ",
                style: {
                  backgroundImage: `url(${_assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_16})`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-y-[3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-top bg-[length:120vw_60vw] md:bg-[length:100vw_50vw] ",
                  style: {
                    backgroundImage: `url(${_assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_17})`
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-center bg-[length:120vw_60vw] md:bg-[length:100vw_50vw] ",
                  style: {
                    backgroundImage: `url(${_assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_18})`
                  }
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "relative overflow-hidden flex flex-col md:gap-y-[1vw] gap-y-[3vw] md:w-[35vw] w-full md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)] md:rounded-[2vw] rounded-[3vw] md:px-[3vw] px-[5vw] md:pt-[3vw] pt-[5vw] md:pb-[23vw] pb-[33vw] bg-white",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "flex justify-center items-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_15,
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
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_5__.MotionButton, {
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
                  src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.header_svg_1,
                  alt: "Amilo Logo",
                  className: "md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex flex-row md:gap-x-[2vw] gap-x-[5vw] items-center justify-center absolute bottom-0 left-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: " md:h-[13vw] h-[20vw] md:w-[20vw] w-[50vw] opacity-30 bg-no-repeat md:bg-top bg-center bg-[length:150vw_25vw] md:bg-[length:100vw_13vw] ",
                style: {
                  backgroundImage: `url(${_assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_20})`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col gap-y-[3vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-top bg-[length:120vw_25vw] md:bg-[length:100vw_20vw] ",
                  style: {
                    backgroundImage: `url(${_assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_19})`
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-center bg-[length:150vw_60vw] md:bg-[length:100vw_15vw] ",
                  style: {
                    backgroundImage: `url(${_assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_21})`
                  }
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "w-full justify-center items-center flex md:px-0 px-[5vw] md:pt-[5vw] pt-[10vw]",
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_NewsletterForm__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "flex flex-col",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "md:flex hidden md:w-[25vw] w-[80vw] md:h-[15vw] h-[30vw] md:bg-size-[25vw_15vw] bg-size-[100vw_50vw] bg-center bg-no-repeat",
                style: {
                  backgroundImage: `url(${_assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_13})`
                }
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          id: "contact-us",
          className: "relative flex flex-col justify-center items-center md:pt-[0.5vw] pt-[1vw] overflow-hidden",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_7,
            alt: "",
            className: "absolute md:-translate-y-[6vw] -translate-y-[35vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none -z-10",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_7,
            alt: "",
            className: "absolute translate-x-[30vw] md:translate-y-[10vw] -translate-y-[15vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none opacity-20 -z-10",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
            className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] cursor-pointer select-none z-20 md:mt-[5vw] mt-0",
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
            className: `md:text-[2.3vw] text-[6vw] text-[#1A1A1A] text-center font-semibold md:leading-[2.5vw] leading-[6.5vw] mt-[1vw] md:mb-[5vw] mb-[15vw] select-none z-20 md:px-0 px-[5vw]`,
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [t("contact_us_section.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
              className: "inline text-[#FF00E5]",
              children: t("contact_us_section.header_2")
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("br", {
              className: "md:block hidden"
            }), t("contact_us_section.header_3")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "relative flex md:flex-row flex-col-reverse justify-start items-center gap-x-[5vw] md:shadow-[0_0.5vw_2vw_rgba(255,0,229,0.15)] shadow-[0_0.5vw_3vw_rgba(255,0,229,0.25)] md:pl-[10vw] pl-[15vw] pr-[8vw] py-[8vw] rounded-t-[2vw] md:w-[70vw] w-[90vw] bg-white z-10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_8,
              alt: "",
              className: "absolute md:-translate-x-[44vw] -translate-x-[65vw] md:-translate-y-0 translate-y-[5vw] w-[200vw] md:h-[29vw] h-[145vw] pointer-events-none select-none z-0",
              "aria-hidden": "true"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
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
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "#FF00E5",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "#FF00E5",
                    className: "md:size-[1vw] size-[4.5vw]",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: "md:pl-[1vw] pl-[3vw]",
                    children: t("contact_us_section.number")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
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
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
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
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
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
/* harmony import */ var _assets_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/assets */ "./src/assets/assets.js");
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-tailwind/react */ "./node_modules/@material-tailwind/react/index.js");
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/es/index.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function CarouselNav() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const handlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_2__.useSwipeable)({
    onSwipedLeft: () => document.querySelector(".mt-prev")?.click(),
    onSwipedRight: () => document.querySelector(".mt-next")?.click(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    ...handlers,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
      autoplay: true,
      autoplayDelay: 10000,
      loop: true,
      transition: {
        duration: 1
      },
      className: "w-screen rounded-none md:pb-[1vw] pb-[10vw]",
      swipe: true,
      draggable: true,
      touchMove: true,
      verticalSwiping: false // make sure it only reacts to horizontal
      ,
      prevArrow: ({
        handlePrev
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
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
          className: "relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] md:min-h-[75vh] min-h-fit bg-white md:px-[10vw] px-[10vw]",
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_1.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionButton, {
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
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "md:w-fit w-full flex justify-end items-center select-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0",
              loading: "lazy",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_1,
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
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_4,
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_4,
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
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_5,
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_5,
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
          className: "relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] md:min-h-[75vh] min-h-fit bg-white md:px-[10vw] px-[10vw]",
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_2.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionButton, {
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
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "md:w-fit w-full flex justify-end items-center select-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0",
              loading: "lazy",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_11,
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
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_6,
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_6,
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
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_7,
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_7,
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
          className: "relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] md:min-h-[75vh] min-h-fit bg-white md:px-[10vw] px-[10vw]",
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_3.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionButton, {
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
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "md:w-fit w-full flex justify-end items-center select-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              className: "md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0",
              loading: "lazy",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_svg_12,
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
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_8,
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_8,
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
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_9,
                loading: "lazy",
                alt: "scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_logo_9,
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
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react */ "./node_modules/@material-tailwind/react/index.js");
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/assets */ "./src/assets/assets.js");
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
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__.Carousel, {
      autoplay: true,
      autoplayDelay: 5000,
      loop: true,
      transition: {
        duration: 1
      },
      className: "md:w-[25vw] w-[75vw] rounded-none select-none md:pt-0 pt-[5vw]",
      prevArrow: ({
        handlePrev
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
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
          className: "md:text-[1.6vw] text-[4.5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[7vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_1.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "inline text-[#FF00E5]",
            children: [t("services_section.carousel.slide_1.header_2"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_1.header_3")]
          }), " ", t("services_section.carousel.slide_1.header_4")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
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
          src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_img_1
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
          className: "md:text-[1.6vw] text-[4.5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[7vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_2.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "inline text-[#FF00E5]",
            children: [t("services_section.carousel.slide_2.header_2"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_2.header_3")]
          }), " ", t("services_section.carousel.slide_2.header_4")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
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
          src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_img_7
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
          className: "md:text-[1.3vw] text-[4vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[6vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_3.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "inline text-[#FF00E5]",
            children: [t("services_section.carousel.slide_3.header_2"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_3.header_3")]
          }), " ", t("services_section.carousel.slide_3.header_4"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_3.header_5")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_3.price_desc_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_3.price_desc_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[4vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_3.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[4vw] text-[8vw]",
              children: t("services_section.carousel.slide_3.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_img_8
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
          className: "md:text-[1.4vw] text-[4vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2.2vw] leading-[6vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_4.header_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "inline text-[#FF00E5]",
            children: t("services_section.carousel.slide_4.header_2")
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_4.header_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_4.price_desc_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
              className: "md:block hidden"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_4.price_desc_2"), "\xA0", t("services_section.carousel.slide_4.price_desc_3")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_4.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[3vw] text-[8vw]",
              children: t("services_section.carousel.slide_4.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_img_9
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
          className: "md:text-[1.8vw] text-[5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2.5vw] leading-[7vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "inline text-[#FF00E5]",
            children: t("services_section.carousel.slide_5.header_1")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_5.header_2")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[0.7vw] py-[1.5vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
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
          src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_img_10
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
          className: "md:text-[1.3vw] text-[4vw] text-[#1A1A1A] text-start font-semibold  md:leading-[1.5vw] leading-[5vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_6.header_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_6.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "inline text-[#FF00E5]",
            children: [t("services_section.carousel.slide_6.header_3"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "\xA0", t("services_section.carousel.slide_6.header_4")]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
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
          src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_img_11
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
          }), t("services_section.link_7")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "md:text-[1.6vw] text-[5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[7vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_7.header_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "inline text-[#FF00E5]",
            children: t("services_section.carousel.slide_7.header_2")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_7.header_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
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
          src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_img_12
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
          className: "md:text-[1.6vw] text-[5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[7vw]",
          style: {
            fontFamily: "Karla, system-ui, -apple-system, sans-serif"
          },
          children: [t("services_section.carousel.slide_8.header_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "inline text-[#FF00E5]",
            children: t("services_section.carousel.slide_8.header_2")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), t("services_section.carousel.slide_8.header_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col md:gap-y-[1vw] gap-y-[2vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_icon_23
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_1")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_icon_24
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_2")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_icon_24
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_3")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_icon_25
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_4")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: _assets_assets__WEBPACK_IMPORTED_MODULE_1__.main_icon_8
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
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
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
          children: t("contact_us_section.form.name")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          className: `border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`,
          ...register("name", {
            required: t("contact_us_section.form.name_placeholder")
          }),
          placeholder: errors.name ? errors.name.message : ""
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          className: "text-nowrap",
          children: t("contact_us_section.form.email")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "email",
          className: `border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.email ? "placeholder-red-500" : "placeholder-black/50"}`,
          ...register("email", {
            required: t("contact_us_section.form.email_placeholder_1"),
            pattern: {
              value: /^\S+@\S+$/i,
              message: t("contact_us_section.form.email_placeholder_2")
            }
          }),
          placeholder: errors.email ? errors.email.message : ""
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          className: "text-nowrap",
          children: t("contact_us_section.form.phone")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
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
        children: t("contact_us_section.form.message")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
        className: `border-b border-[#CACACA] w-full resize-none md:h-[5vw] h-[15vw] focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`,
        ...register("message", {
          required: t("contact_us_section.form.message_placeholder")
        }),
        placeholder: errors.message ? errors.message.message : ""
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.5vw] font-normal justify-start items-center md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "submit",
        disabled: isSubmitting,
        className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
        children: isSubmitting ? t("contact_us_section.form.button_sending") : isSent ? t("contact_us_section.form.button_sent") : t("contact_us_section.form.button_default")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
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
    className: "flex flex-row md:justify-start justify-center gap-x-[1vw] md:text-[0.8vw] text-[2.5vw] font-normal z-10 select-none md:w-auto w-full md:pt-[1vw] pt-[5vw]",
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
        placeholder: errors.email ? errors.email.message : t("newsletter_section.form.placeholder")
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

/***/ "./src/scripts/components/ui/SEO.js":
/*!******************************************!*\
  !*** ./src/scripts/components/ui/SEO.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website"
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const currentUrl = `https://shipx.asia${location.pathname}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link", {
      rel: "canonical",
      href: canonical || currentUrl
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:type",
      content: ogType
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:url",
      content: canonical || currentUrl
    }), ogImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:image",
      content: ogImage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:title",
      content: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:description",
      content: description
    }), ogImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:image",
      content: ogImage
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

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
/* harmony import */ var _assets_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/assets */ "./src/assets/assets.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const ServiceHeadline = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: `flex flex-col ${_utils_constants__WEBPACK_IMPORTED_MODULE_2__.margin} justify-center items-center md:py-[5vw] py-[15vw]`,
    style: {
      fontFamily: "Public_Sans, system-ui, -apple-system, sans-serif"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex md:flex-row flex-col md:gap-x-[5vw] gap-x-0 md:gap-y-0 gap-y-[10vw] justify-center items-center bg-[#FFD6FA]/50 md:rounded-[1.5vw] rounded-[3.5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "flex md:w-[30vw] w-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          className: "shadow-[0_0_1vw_rgba(79,55,138,0.15)] md:rounded-[1.5vw] rounded-[3.5vw]",
          src: _assets_assets__WEBPACK_IMPORTED_MODULE_0__.main_sglink_banner_image_1,
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_1__.MotionButton, {
          type: "button",
          className: "bg-[#FF00E5] flex flex-row md:gap-x-[0.5vw] gap-[1.5vw] justify-center items-center md:px-[1.5vw] px-[5vw] md:py-[0.5vw] py-[1.5vw] md:rounded-[0.5vw] rounded-[2vw] text-white font-medium md:text-[0.8vw] text-[4vw] text-center cursor-pointer",
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
            className: "md:w-[1vw] w-[3.5vw] md:h-[1vw] h-[3.5vw]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            })
          })]
        })]
      })]
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "group cursor-pointer flex flex-row md:w-full w-fit md:rounded-[2vw] rounded-[3vw]  md:pl-[0.8vw] pl-[3vw] md:pr-[2vw] pr-[3vw] md:py-[0.7vw] py-[1.5vw]  items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)]  hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)]  transition-shadow duration-1000 ease-in-out relative",
    onClick: () => setOpen(prev => !prev),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw] rounded-full",
      src: image
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "text-[#1A1A1A] font-semibold md:text-[0.8vw] text-[2.3vw] md:pl-[1vw] pl-[3vw]",
      children: country_name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
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
        className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw] rounded-full",
        src: image
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-[#19191D] md:text-[0.8vw] text-[2.3vw] font-bold",
        children: country_name
      }), description, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-[#757577] md:text-[0.7vw] text-[2vw] pt-[1.5vw]",
        children: contact_number
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-[#757577] md:text-[0.7vw] text-[2vw]",
        children: email
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scripts/hooks/useYoastSEO.js":
/*!******************************************!*\
  !*** ./src/scripts/hooks/useYoastSEO.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useYoastSEO)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



const DEFAULT_SEO = {
  title: "My Website",
  description: "Default description for my website.",
  canonical: window.location.href,
  og_title: "My Website",
  og_description: "Default OG description for my website.",
  og_image: [{
    url: "/default-og-image.jpg"
  }]
};
function useYoastSEO(customSeo = {}) {
  const {
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const [seo, setSeo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_SEO);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // You can fetch WP REST API SEO fields here if you have Yoast meta in WP
    // For SPA routes, merge defaults + custom SEO + language
    const langPrefix = i18n.language === "en" ? "" : `/${i18n.language}`;
    const updatedSeo = {
      title: customSeo.title || DEFAULT_SEO.title,
      description: customSeo.description || DEFAULT_SEO.description,
      canonical: `${window.location.origin}${langPrefix}${location.pathname}`,
      og_title: customSeo.og_title || customSeo.title || DEFAULT_SEO.title,
      og_description: customSeo.og_description || customSeo.description || DEFAULT_SEO.description,
      og_image: customSeo.og_image || DEFAULT_SEO.og_image
    };
    setSeo(updatedSeo);
  }, [location.pathname, i18n.language, customSeo]);
  return seo;
}

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_Main_js.js.map?ver=44faf6734cf985401abb