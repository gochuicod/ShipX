"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_SGAmiloCards_js"],{

/***/ "./src/scripts/components/ui/SGAmiloCards.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/ui/SGAmiloCards.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const ParallaxSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_value_use-scroll_mjs-node_modu-d38d2d"), __webpack_require__.e("src_scripts_components_ui_ParallaxSection_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js")));
const SGAmiloCards = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ParallaxSection, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `relative w-[100vw] ${_utils_constants__WEBPACK_IMPORTED_MODULE_2__.margin} flex md:flex-row flex-col justify-center items-center md:gap-x-[3vw] gap-x-0 md:gap-y-0 gap-y-[10vw] md:pb-[10vw] pb-[25vw]`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[15vw_0vw_25vw_rgba(74,58,255,0.3)] -z-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[20vw_10vw_15vw_rgba(255,0,229,0.3)] -z-30"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[5vw_0.5vw_25vw_rgba(45,91,255,0.35)] -z-20"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
          to: "/book-a-demo",
          end: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            type: "button",
            end: true,
            className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium absolute md:bottom-[-1vw] bottom-[-3vw] left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center z-[10] lg:w-auto md:w-auto w-[60vw] ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "md:text-[0.8vw] text-[2.5vw] font-normal",
              children: t("systems_section.signup_button.question")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "flex flex-row md:text-[0.8vw] text-[2.5vw] md:gap-x-[0.1vw] gap-x-[0.5vw] justify-center items-center text-white font-bold",
              children: [t("systems_section.signup_button.button"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 3.5,
                stroke: "#FFFFFF",
                className: "md:size-[0.7vw] size-[2.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "relative overflow-hidden flex flex-col md:gap-y-[1vw] gap-y-[3vw] md:w-[35vw] w-full md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)] md:rounded-[2vw] rounded-[3vw] md:px-[3vw] px-[5vw] md:pt-[3vw] pt-[5vw] md:pb-[23vw] pb-[33vw] bg-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex justify-center items-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_14.svg",
              alt: "Amilo Logo",
              className: "md:h-[4vw] h-[15vw] md:w-[12vw] w-[30vw]"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#0E0E0E] md:text-[1.7vw] text-[4vw] text-wrap text-left font-semibold md:leading-[2.1vw] leading-[4.5vw]",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "inline text-[#FF00E5]",
              children: [t("systems_section.sglink_card.title_highlight"), "\xA0"]
            }), t("systems_section.sglink_card.title_rest")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-[#63666D]/80 md:text-[1.05vw] text-[2.55vw] text-wrap text-justify font-medium md:leading-[1.55vw] leading-[3.05vw]",
            children: t("systems_section.sglink_card.description")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionButton, {
            type: "button",
            className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit z-[10]",
            whileHover: {
              scale: 1.1
            },
            whileTap: {
              scale: 0.8
            },
            onClick: () => window.location.href = "https://admin.sglinkapi.com/",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2.5vw]",
                children: t("systems_section.sglink_card.button")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/header_svg_2.svg",
                alt: "Amilo Logo",
                className: "md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row md:gap-x-[2vw] gap-x-[5vw] items-center justify-center absolute bottom-0 left-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: " md:h-[13vw] h-[20vw] md:w-[20vw] w-[50vw] opacity-30 bg-no-repeat md:bg-top bg-top-left bg-[length:50vw_50vw] md:bg-[length:30vw_30vw] ",
              style: {
                backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_16.svg")`
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex flex-col gap-y-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-top bg-[length:120vw_60vw] md:bg-[length:100vw_50vw] ",
                style: {
                  backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_17.svg")`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-center bg-[length:120vw_60vw] md:bg-[length:100vw_50vw] ",
                style: {
                  backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_18.svg")`
                }
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
          to: "/book-a-demo",
          end: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            type: "button",
            end: true,
            className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium absolute md:bottom-[-1vw] bottom-[-3vw] left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center z-[10] lg:w-auto md:w-auto w-[60vw] ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "md:text-[0.8vw] text-[2.5vw] font-normal",
              children: t("systems_section.signup_button.question")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "flex flex-row md:text-[0.8vw] text-[2.5vw] md:gap-x-[0.1vw] gap-x-[0.5vw] justify-center items-center text-white font-bold",
              children: [t("systems_section.signup_button.button"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 3.5,
                stroke: "#FFFFFF",
                className: "md:size-[0.7vw] size-[2.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "relative overflow-hidden flex flex-col md:gap-y-[1vw] gap-y-[3vw] md:w-[35vw] w-full md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)] md:rounded-[2vw] rounded-[3vw] md:px-[3vw] px-[5vw] md:pt-[3vw] pt-[5vw] md:pb-[23vw] pb-[33vw] bg-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex justify-center items-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_15.svg",
              alt: "Amilo Logo",
              className: "md:h-[4vw] h-[15vw] md:w-[12vw] w-[30vw]"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#0E0E0E] md:text-[1.7vw] text-[4vw] text-wrap text-left font-semibold md:leading-[2.1vw] leading-[4.5vw]",
            style: {
              fontFamily: "Inter, system-ui, -apple-system, sans-serif"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "inline text-[#FF00E5]",
              children: [t("systems_section.amilo_card.title_highlight"), "\xA0"]
            }), t("systems_section.amilo_card.title_rest")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-[#63666D]/80 md:text-[1.05vw] text-[2.55vw] text-wrap text-justify font-medium md:leading-[1.55vw] leading-[3.05vw]",
            children: t("systems_section.amilo_card.description")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionButton, {
            type: "button",
            className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit z-[10]",
            whileHover: {
              scale: 1.1
            },
            whileTap: {
              scale: 0.8
            },
            onClick: () => window.location.href = "https://vip.amilo.co/",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2.5vw]",
                children: t("systems_section.amilo_card.button")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/header_svg_1.svg",
                alt: "Amilo Logo",
                className: "md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row md:gap-x-[2vw] gap-x-[5vw] items-center justify-center absolute bottom-0 left-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: " md:h-[13vw] h-[20vw] md:w-[20vw] w-[50vw] opacity-30 bg-no-repeat md:bg-top bg-center bg-[length:150vw_25vw] md:bg-[length:100vw_13vw] ",
              style: {
                backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_20.svg")`
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex flex-col gap-y-[3vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-top bg-[length:120vw_25vw] md:bg-[length:100vw_20vw] ",
                style: {
                  backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_19.svg")`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: " md:h-[12vw] h-[17vw] md:w-[20vw] w-[25vw] opacity-30 bg-no-repeat bg-center bg-[length:150vw_60vw] md:bg-[length:100vw_15vw] ",
                style: {
                  backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_21.svg")`
                }
              })]
            })]
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SGAmiloCards);

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
//# sourceMappingURL=src_scripts_components_ui_SGAmiloCards_js.js.map?ver=6285d401679def6d97c7