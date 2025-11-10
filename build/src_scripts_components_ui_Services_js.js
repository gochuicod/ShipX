"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_Services_js"],{

/***/ "./src/scripts/components/ui/Services.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/ui/Services.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const ParallaxSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_value_use-scroll_mjs-node_modu-d38d2d"), __webpack_require__.e("src_scripts_components_ui_ParallaxSection_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js")));
const CarouselServices = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_tabbable_dist_index_esm_js-node_modules_floating-ui_dom_dist_floating-ui-a89c48"), __webpack_require__.e("vendors-node_modules_material-tailwind_react_index_js-node_modules_react-swipeable_es_index_js"), __webpack_require__.e("src_scripts_components_ui_CarouselServices_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./CarouselServices */ "./src/scripts/components/ui/CarouselServices.js")));
const Services = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const [slide, setSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    id: "services",
    className: `lg:h-screen md:h-fit h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center pt-[5vw] overflow-hidden`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_4.svg",
      alt: "",
      className: "absolute -translate-x-[40vw] translate-y-[12vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_5.svg",
      alt: "",
      className: "absolute -translate-x-[41vw] -translate-y-[35vw] w-[150vw] h-[80vw] pointer-events-none select-none z-0",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_5.svg",
      alt: "",
      className: "absolute translate-x-[23vw] translate-y-[24vw] w-[200vw] h-[80vw] pointer-events-none select-none -z-10 rotate-190",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ParallaxSection, {
      className: "lg:h-screen md:h-fit h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] select-none",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "#FF00E5",
          viewBox: "0 0 24 24",
          strokeWidth: 0,
          stroke: "currentColor",
          className: "md:size-[0.5vw] size-[1.5vw]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          })
        }), t("services_section.badge_1")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: "md:text-[2vw] text-[6vw] text-[#1A1A1A] text-center font-semibold md:leading-[2.5vw] leading-[6.5vw] select-none md:mt-0 mt-[1vw] px-[2vw]",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "inline text-[#FF00E5]",
          children: t("services_section.header_1")
        }), "\xA0\u2013\xA0", t("services_section.header_2"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {
          className: "md:block hidden"
        }), t("services_section.header_3")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex md:flex-row flex-col gap-x-[5vw] justify-center items-center md:pt-0 pt-[5vw]",
        style: {
          fontFamily: "Karla, system-ui, -apple-system, sans-serif"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[3vw] md:w-[25vw] w-[95vw] md:justify-start justify-center md:gap-x-0 gap-x-[3vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              onClick: () => setSlide(0),
              className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_1.svg",
                alt: "globe"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                children: t("services_section.link_1")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              onClick: () => setSlide(1),
              className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_2.svg",
                alt: "plane"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                children: t("services_section.link_2")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              onClick: () => setSlide(2),
              className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_3.svg",
                alt: "flag"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                children: t("services_section.link_3")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              onClick: () => setSlide(3),
              className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_4.svg",
                alt: "warehouse"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                children: t("services_section.link_4")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              onClick: () => setSlide(4),
              className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_5.svg",
                alt: "amazon icon"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                children: t("services_section.link_5")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              onClick: () => setSlide(5),
              className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_6.svg",
                alt: "package"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                children: t("services_section.link_6")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              onClick: () => setSlide(6),
              className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_7.svg",
                alt: "magnifier"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                children: t("services_section.link_7")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              onClick: () => setSlide(7),
              className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_8.svg",
                alt: "dollar"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]",
                children: t("services_section.link_8")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
              to: "/book-a-demo",
              className: "text-[#4F378A] font-semibold",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
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
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                  children: t("services_section.book_a_demo")
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
              to: "/#contact-us",
              end: true,
              className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
              children: t("services_section.contact_us")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CarouselServices, {
          slide: slide
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "text-[#63666D] md:text-[0.6vw] text-[2vw] text-center select-none md:pt-0 pt-[3vw]",
        children: t("services_section.note")
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ }),

/***/ "./src/scripts/components/ui/SmartNavLink.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/ui/SmartNavLink.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-UIGDSWPH.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SmartNavLink = ({
  to = "/",
  end = false,
  className,
  children,
  delay = 1000
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
  const handleClick = e => {
    const [pathname, hash] = to.split("#"); // Split route and hash (if any)
    const isSamePath = location.pathname === pathname;

    // Case 1: Link with a hash (e.g. /#services)
    if (hash) {
      e.preventDefault();

      // If on another page, navigate first then scroll
      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth"
            });
          }
        }, 300);
      } else {
        // Already on same page: scroll directly to section
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }

      // Optional: clean up hash from URL after a delay
      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    }

    // Case 2: Normal route navigation (no hash)
    else {
      if (isSamePath) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setTimeout(() => {
          window.history.replaceState(null, "", location.pathname);
        }, delay);
      } else {
        e.preventDefault();
        navigate(pathname);
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          window.history.replaceState(null, "", pathname);
        }, 300);
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.NavLink, {
    to: to,
    end: end,
    className: className,
    onClick: handleClick,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartNavLink);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_Services_js.js.map?ver=88028a14ecf06206fc6f