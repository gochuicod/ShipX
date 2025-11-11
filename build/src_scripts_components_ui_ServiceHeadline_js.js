"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_ServiceHeadline_js"],{

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
/* harmony import */ var _ParallaxSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.js");
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const ServiceHeadline = () => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ParallaxSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: `flex flex-col ${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.margin} justify-center items-center md:py-[10vw] py-[15vw]`,
      style: {
        fontFamily: "Public_Sans, system-ui, -apple-system, sans-serif"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/blog/shipx-goes-live-smarter-future-asean-cross-border-logistics",
        end: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: `${i18n.language === "en" ? "md:pr-0" : "md:pr-[2vw]"} flex md:flex-row flex-col md:gap-x-[5vw] gap-x-0 md:gap-y-0 gap-y-[10vw] justify-center items-center bg-[#FFD6FA]/50 md:rounded-[1.5vw] rounded-[3.5vw]`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex md:w-[30vw] w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              loading: "lazy",
              className: "shadow-[0_0_1vw_rgba(79,55,138,0.15)] md:rounded-[1.5vw] rounded-[3.5vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_sglink_banner_image_1.webp",
              alt: "ShipX Goes Live"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col md:gap-y-[0.5vw] gap-y-[2vw] md:w-[15vw] w-auto justify-center md:items-start items-center md:pb-0 pb-[5vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
              className: "text-[#1A1A1A] md:text-[1vw] text-[5vw] font-semibold md:leading-[1vw] leading-[5vw] md:text-start text-center",
              children: [t("service_headline_section.heading_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-[#FF00E5]",
                children: t("service_headline_section.heading_2")
              }), "\xA0", t("service_headline_section.heading_3")]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_0__.MotionButton, {
              type: "button",
              className: "bg-[#FF00E5] flex flex-row md:gap-x-[0.5vw] gap-[1.5vw] justify-center items-center md:px-[1.5vw] px-[5vw] md:py-[0.5vw] py-[1.5vw] md:rounded-[0.5vw] rounded-[2vw] text-white font-medium md:text-[0.8vw] text-[2.5vw] text-center cursor-pointer",
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              children: [t("service_headline_section.button_text_1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 2.5,
                stroke: "currentColor",
                className: "md:w-[1vw] w-[2.5vw] md:h-[1vw] h-[2.5vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                })
              })]
            })]
          })]
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceHeadline);

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
//# sourceMappingURL=src_scripts_components_ui_ServiceHeadline_js.js.map?ver=b9a85f8e7fd12d490a3f