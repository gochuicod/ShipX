"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_Offices_js"],{

/***/ "./src/scripts/components/ui/Offices.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/ui/Offices.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const TooltipCard = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_scripts_components_ui_ToolTipCard_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ToolTipCard */ "./src/scripts/components/ui/ToolTipCard.js")));
const ParallaxSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_motion_node_modules_framer-motion_dist_es_value_use-scroll_mjs-node_modu-d38d2d"), __webpack_require__.e("src_scripts_components_ui_ParallaxSection_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js")));
const Offices = () => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    id: "network",
    className: `lg:min-h-screen md:h-fit h-auto relative flex flex-col justify-center items-center pt-[16vw] overflow-hidden select-none md:px-[8vw] px-[5vw]`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
      src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_10.svg",
      alt: "",
      className: "absolute translate-x-[36vw] -translate-y-[18vw] w-[200vw] md:h-[43vw] h-[83vw] pointer-events-none select-none -z-10",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ParallaxSection, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: `flex md:flex-row flex-col gap-x-[2vw] justify-center items-center w-full ${i18n.language !== "vn" ? "md:ml-[5vw]" : "md:ml-[2vw]"}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "md:w-[36vw] w-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "md:hidden flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] w-fit mx-auto",
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
            }), t("offices_section.badge_1")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#1A1A1A] md:text-[2.3vw] text-[6vw] md:text-start text-center font-semibold md:leading-[3.5vw] leading-[6.5vw]",
            children: [t("offices_section.header_1"), " ", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
              className: "md:block hidden"
            }) : "", t("offices_section.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "inline text-[#FF00E5]",
              children: t("offices_section.header_3")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw] md:w-[35vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row md:justify-start justify-center md:gap-x-[3vw] gap-x-[10vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "md:flex hidden flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.6vw] text-white font-semibold bg-[#4F378A] md:rounded-[0.5vw] rounded-[2vw] md:px-[0.8vw] px-[1.8vw] py-[0.2vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#FFFFFF",
                viewBox: "0 0 24 24",
                strokeWidth: 0,
                stroke: "currentColor",
                className: "md:size-[0.5vw] size-[1.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                })
              }), t("offices_section.badge_1")]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center",
              style: {
                fontFamily: "Karla, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                to: "/book-a-demo",
                className: "text-[#4F378A] font-semibold",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionButton, {
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
                    children: t("offices_section.book_a_demo")
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                to: "/#contact-us",
                end: true,
                className: " bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
                children: t("offices_section.contact_us")
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.85vw] text-[2.5vw] font-medium opacity-80 tracking-wider md:pt-0 pt-[2vw] md:text-start text-center",
            children: [t("offices_section.description_1"), "\xA0", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
              className: "md:block hidden"
            }) : "", t("offices_section.description_2")]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex md:flex-row flex-col justify-center items-center md:pt-0 pt-[5vw]",
        style: {
          fontFamily: "Inter, system-ui, -apple-system, sans-serif"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "flex md:flex-col flex-wrap md:justify-normal justify-center md:gap-y-[1.5vw] gap-y-[3vw] md:gap-x-0 gap-x-[3vw] md:pl-[8vw] pl-[1.5vw] md:pr-0 pr-[1.5vw]",
          children: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.offices.map((office, index) => office.hidden ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TooltipCard, {
            image: office.image,
            country_name: t(`offices_section.offices.${office.key}.country_name`),
            description: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#757577] md:text-[0.7vw] text-[2vw]",
              children: t(`offices_section.offices.${office.key}.address`)
            }),
            contact_number: t(`offices_section.offices.${office.key}.contact_number`, ""),
            email: t(`offices_section.offices.${office.key}.email`)
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "flex md:w-[60vw] w-[100vw] md:h-[40vw] h-[75vw] md:bg-size-[auto_47vw] bg-size-[125vw_90vw] bg-center bg-no-repeat",
          style: {
            backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/offices_section_map_image.webp")`
          }
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offices);

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
//# sourceMappingURL=src_scripts_components_ui_Offices_js.js.map?ver=b7518b25b33bd3f50b9f