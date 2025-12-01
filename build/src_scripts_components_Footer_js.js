"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_Footer_js"],{

/***/ "./src/scripts/components/Footer.js":
/*!******************************************!*\
  !*** ./src/scripts/components/Footer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Footer = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(() => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("footer", {
    className: "flex flex-col justify-center bg-linear-to-t from-[#4F378A] from-10% to-[rgb(255,0,229)] text-white px-[6vw] md:py-[1.5vw] py-[3vw] md:text-[0.8vw] text-[2.6vw]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex md:flex-row flex-col justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col md:gap-y-[1vw] gap-y-[3vw] justify-start md:w-[40%] w-full",
        style: {
          fontFamily: "Karla, system-ui, -apple-system, sans-serif"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-row md:gap-x-[0.5vw] gap-x-[1vw] justify-start items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              loading: "lazy",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo_white.svg",
              alt: "ShipX Logo",
              className: "md:w-[5vw] w-[20vw] md:h-[2.5vw] h-[10vw]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              loading: "lazy",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/sglink_amilo_logo_white.svg",
              alt: "SGLink Logo",
              className: "md:w-[5vw] w-[22vw] md:h-[1.5vw] h-[6vw]"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "md:text-[1vw] text-[3.5vw]",
            children: t("footer.tagline")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            className: "mt-[0.8vw]",
            children: [t("footer.description_1"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), t("footer.description_2")]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "absolute inset-0 bg-linear-to-t from-[#4F378A] to-[#FF00E5] rounded-full"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
              to: "/book-a-demo",
              end: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                type: "button",
                className: `relative flex flex-row items-center justify-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-[#8E3CAD] rounded-full text-white transition-all duration-300 hover:bg-[#A24BD0] focus:outline-none cursor-pointer`,
                children: t("footer.book_a_demo")
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "/#contact-us",
            end: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_0__.MotionButton, {
              type: "button",
              whileHover: {
                scale: 1.2
              },
              whileTap: {
                scale: 0.8
              },
              className: "bg-white text-[#FF00E5] font-bold md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] rounded-full cursor-pointer",
              children: t("footer.contact_us")
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-row justify-end gap-x-[4vw] md:w-[60%] w-full md:pt-0 py-[5vw]",
        style: {
          fontFamily: "Karla, system-ui, -apple-system, sans-serif"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col gap-y-[1vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "/",
            end: true,
            onClick: () => window.scrollTo({
              top: 0,
              behavior: "smooth"
            }),
            children: t("footer.home")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "/#services",
            end: true,
            children: t("footer.services")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "/#platform",
            end: true,
            children: t("footer.platform")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "/#network",
            end: true,
            children: t("footer.network")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col gap-y-[1vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "/#contact-us",
            end: true,
            children: t("footer.contact")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "/privacy-policy",
            end: true,
            children: t("footer.privacy_policy")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "/terms-and-conditions",
            end: true,
            children: t("footer.terms_and_conditions")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col gap-y-[1vw] md:w-[15vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "font-medium",
            children: t("footer.reach_us_1")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-row items-center md:pl-[1vw] pl-[3vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "md:size-[1vw] size-[4vw]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: `mailto:${t("footer.reach_us_3")}`,
              className: "md:pl-[1vw] pl-[3vw]",
              children: t("footer.reach_us_3")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-row items-center md:pl-[1vw] pl-[3vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "md:size-[1.5vw] size-[4vw]",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                fillRule: "evenodd",
                d: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                clipRule: "evenodd"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "md:pl-[1vw] pl-[3vw]",
              children: t("footer.reach_us_4")
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      className: "text-center md:pt-0 pt-[2vw]",
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: ["\xA9 ", new Date().getFullYear(), " ", t("footer.copyright")]
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

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
  delay = 1000
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
//# sourceMappingURL=src_scripts_components_Footer_js.js.map?ver=061cf59b8513906ea2ab