"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_FreightAndCustoms_js"],{

/***/ "./src/scripts/components/ui/FreightAndCustoms.js":
/*!********************************************************!*\
  !*** ./src/scripts/components/ui/FreightAndCustoms.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const ParallaxSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_value_use-scroll_mjs-node_modu-d38d2d"), __webpack_require__.e("src_scripts_components_ui_ParallaxSection_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js")));
const FreightAndCustoms = () => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const [isOpen1, setIsOpen1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isOpen2, setIsOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ParallaxSection, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `flex flex-col md:gap-y-[2vw] gap-y-0 ${_utils_constants__WEBPACK_IMPORTED_MODULE_3__.margin} select-none`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex md:flex-row flex-col justify-between items-center gap-x-[5vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: `
                    flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center w-auto
                    ${i18n.language === "en" ? "md:w-[25vw]" : i18n.language === "vn" ? "md:w-[42vw]" : i18n.language === "my" ? "md:w-[42vw]" : i18n.language === "thai" ? "md:w-[36vw]" : "md:w-[30vw]"}
                  `,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "#FF00E5",
              viewBox: "0 0 24 24",
              strokeWidth: 0,
              stroke: "currentColor",
              className: "md:size-[0.5vw] size-[1.5vw]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              })
            }), t("freight_section.badge_1")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "md:text-[2.3vw] text-[6vw] text-[#1A1A1A] md:text-start text-center font-semibold md:leading-[2.5vw] leading-[6.5vw]",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "inline text-[#FF00E5]",
              children: t("freight_section.header_1")
            }), "\xA0", t("freight_section.header_2"), i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
              className: "md:block hidden"
            }) : "", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "md:hidden",
              children: "\xA0"
            }), t("freight_section.header_3")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center md:pt-0 pt-[2vw]",
            style: {
              fontFamily: "Karla, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
              to: "/book-a-demo",
              className: "text-[#4F378A] font-semibold",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
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
                  className: "absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
                  children: t("freight_section.book_a_demo")
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
              to: "/#contact-us",
              end: true,
              className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
              children: t("freight_section.contact_us")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex md:flex-row flex-col justify-between md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[2vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2.5vw] pl-[5vw] md:pr-0 pr-[5vw] md:py-0 py-[5vw]",
            style: {
              fontFamily: "Karla, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex flex-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#4F378A] font-semibold bg-transparent md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-0 md:py-[0.2vw] py-[0.5vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "#4F378A",
                  viewBox: "0 0 24 24",
                  strokeWidth: 0,
                  stroke: "currentColor",
                  className: "md:size-[0.7vw] size-[1.5vw]",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  })
                }), t("freight_section.badge_2")]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                className: "md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-semibold md:leading-[2.5vw] leading-[5.5vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "inline text-[#FF00E5]",
                  children: t("freight_section.header_4")
                }), "\xA0", t("freight_section.header_5"), "\xA0", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
                  className: "md:block hidden"
                }) : "", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "inline text-[#FF00E5]",
                  children: t("freight_section.header_6")
                }), "\xA0", t("freight_section.header_7")]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_5.webp",
              alt: "ShipX - Freight Section - Freight & Customs"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "md:hidden flex flex-col justify-start items-start w-full mt-[1vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                type: "button",
                onClick: () => setIsOpen1(!isOpen1),
                className: "w-full text-[#1A1A1A] text-[2.4vw] text-center transition",
                children: isOpen1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "font-medium",
                  children: t("freight_section.collapsible_text_opened_1")
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "font-medium",
                  children: t("freight_section.collapsible_text_closed_1")
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                initial: false,
                children: isOpen1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
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
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "flex md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[5vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
                    style: {
                      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                    },
                    children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "flex flex-row justify-start items-center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                        className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                        src: service.icon,
                        alt: t(`freight_section.services_1.${service.key}.title`)
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                        className: "font-semibold text-start md:pl-[1.5vw] pl-[3vw]",
                        children: [t(`freight_section.services_1.${service.key}.title`), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                          className: "text-[#63666D] text-normal",
                          children: [t(`freight_section.services_1.${service.key}.description`), " "]
                        })]
                      })]
                    }, index))
                  })
                }, "content")
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "md:flex hidden md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: `flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw] ${i18n.language === "vn" && "w-[18vw]"}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                src: service.icon,
                alt: t(`freight_section.services_1.${service.key}.title`)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "font-semibold text-start md:pl-[1.5vw] pl-[3vw]",
                children: [t(`freight_section.services_1.${service.key}.title`), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "text-[#63666D] text-normal",
                  children: t(`freight_section.services_1.${service.key}.description`)
                })]
              })]
            }, index))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex md:flex-row flex-col justify-between md:items-center items-start gap-x-[5vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: `
                      flex md:flex-row flex-col-reverse justify-start md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[2vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:p-0 p-[5vw]
                      ${i18n.language === "thai" && "md:pr-[2vw]"}
                    `,
            style: {
              fontFamily: "Karla, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "md:hidden flex flex-col justify-start items-start w-full mt-[1vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                type: "button",
                onClick: () => setIsOpen2(!isOpen2),
                className: "w-full text-[#1A1A1A] text-[2.4vw] text-center transition",
                children: isOpen2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "font-medium",
                  children: t("freight_section.collapsible_text_opened_2")
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "font-medium",
                  children: t("freight_section.collapsible_text_closed_2")
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                initial: false,
                children: isOpen2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
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
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "flex md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[5vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
                    style: {
                      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
                    },
                    children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.services_2.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "flex flex-row justify-start items-center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                        className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                        src: service.icon,
                        alt: t(`freight_section.services_2.${service.key}.title`)
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                        className: "font-semibold text-start md:pl-[1.5vw] pl-[3vw]",
                        children: [t(`freight_section.services_2.${service.key}.title`), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                          className: "text-[#63666D] text-normal",
                          children: t(`freight_section.services_2.${service.key}.description`)
                        })]
                      })]
                    }, index))
                  })
                }, "content")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_6.webp",
              alt: "ShipX - Freight Section - Customs & Fulfillment Solutions"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex flex-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#4F378A] font-semibold bg-transparent md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-0 md:py-[0.2vw] py-[0.5vw]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "#4F378A",
                  viewBox: "0 0 24 24",
                  strokeWidth: 0,
                  stroke: "currentColor",
                  className: "md:size-[0.7vw] size-[1.5vw]",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  })
                }), t("freight_section.badge_3")]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                className: `md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-semibold md:leading-[2.5vw] leading-[5.5vw] ${i18n.language === "vn" && "md:pr-[3vw]"}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "inline text-[#FF00E5]",
                  children: t("freight_section.header_8")
                }), " ", t("freight_section.header_9"), "\xA0", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
                  className: "md:block hidden"
                }) : "", t("freight_section.header_10")]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "md:flex hidden md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.services_2.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex flex-row justify-start items-center  md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]  shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)]  md:pl-[2vw] pl-[5vw] pr-[3.5vw]  md:py-[1.5vw] py-[3vw]  rounded-[1.5vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                className: "md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]",
                src: service.icon,
                alt: t(`freight_section.services_2.${service.key}.title`)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "font-semibold text-start md:pl-[1.5vw] pl-[3vw]",
                children: [t(`freight_section.services_2.${service.key}.title`), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "text-[#63666D] text-normal",
                  children: t(`freight_section.services_2.${service.key}.description`)
                })]
              })]
            }, index))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: `${i18n.language === "vn" ? "md:w-[30vw]" : "md:w-[21vw]"} flex flex-col md:pt-0 pt-[10vw] w-auto`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[1vw] text-[4vw] text-center font-medium italic opacity-90",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [t("freight_section.header_11"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
              className: "md:block hidden"
            }), t("freight_section.header_12"), " ", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
              className: "md:block hidden"
            }) : "", t("freight_section.header_13")]
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreightAndCustoms);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../i18n */ "./src/i18n.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SmartNavLink = ({
  to = "/",
  end = false,
  className,
  children,
  delay = 1000,
  onClick
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();

  // Prepend language prefix if not default
  const langPrefix = _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language !== "en" ? `/${_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language}` : "";
  let fullPath = to.startsWith("/") ? `${langPrefix}${to}` : `${langPrefix}/${to}`;

  // Remove double slashes if any
  fullPath = fullPath.replace(/\/+/g, "/");
  const handleClick = e => {
    const [pathname, hash] = fullPath.split("#");
    const isSamePath = location.pathname === pathname;

    // If an external onClick handler is provided, execute it.
    if (onClick) {
      onClick(e);
    }
    if (hash) {
      e.preventDefault();
      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) target.scrollIntoView({
            behavior: "smooth"
          });
        }, 300);
      } else {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({
          behavior: "smooth"
        });
      }
      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    } else {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.NavLink, {
    to: fullPath,
    end: end,
    className: className,
    onClick: handleClick,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartNavLink);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_FreightAndCustoms_js.js.map?ver=275154b11257af35abf5