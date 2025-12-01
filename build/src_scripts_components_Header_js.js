"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_Header_js"],{

/***/ "./src/scripts/components/Header.js":
/*!******************************************!*\
  !*** ./src/scripts/components/Header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var _ui_LoginModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/LoginModal */ "./src/scripts/components/ui/LoginModal.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/portal/portal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);










const linkClass = "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";
const Header = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(() => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const navLinks = [{
    to: "/",
    label: t("header.home")
  }, {
    to: "/#services",
    label: t("header.services")
  }, {
    to: "/#platform",
    label: t("header.platform")
  }, {
    to: "/#network",
    label: t("header.network")
  }];
  const pathToLocaleKey = {
    "/": "home",
    "/#services": "services",
    "/#platform": "platform",
    "/#network": "network",
    "/book-a-demo": "book_a_demo",
    "/#contact-us": "contact_us"
  };
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    const current = i18n.language || localStorage.getItem("lang") || "en";
    return _utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages.find(language => language.key === current) || _utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages[0];
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const currentLang = i18n.language || localStorage.getItem("lang") || "en";
    const matched = _utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages.find(lang => lang.key === currentLang);
    if (matched && matched.key !== selected.key) {
      setSelected(matched);
    }
  }, [i18n.language]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    className: "sticky top-0 z-50 select-none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("header", {
      className: " sticky top-0 z-50 select-none flex flex-row bg-white text-[#1A1A1A] justify-between items-center  md:py-[1vw] md:px-[8vw] py-[5vw] px-[10vw] md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)] shadow-[0_3vw_5vw_rgba(255,0,229,0.15)] ",
      style: {
        fontFamily: "Karla, system-ui, -apple-system, sans-serif"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "flex flex-row gap-x-[1vw] justify-center items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex flex-row gap-x-[0.5vw] justify-center items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
            to: "/",
            className: linkClass,
            onClick: () => window.scrollTo({
              top: 0,
              behavior: "smooth"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
              loading: "lazy",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo.svg",
              alt: "ShipX Logo",
              className: "md:w-[3vw] md:h-[1.5vw] w-[14vw] h-[7vw]"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
            to: "/",
            className: linkClass,
            onClick: () => window.scrollTo({
              top: 0,
              behavior: "smooth"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
              loading: "lazy",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo_sglink_amilo.svg",
              alt: "SGLink Logo",
              className: "md:w-[3vw] md:h-[1.5vw] w-[16vw] h-[5vw]"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
          loading: "lazy",
          className: "h-[1vw] w-[1vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_14.webp",
          alt: "Separator"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          className: "hidden md:inline text-[0.8vw] font-normal",
          children: t("header.tagline")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Listbox, {
          className: "md:block hidden",
          value: selected,
          onChange: async language => {
            setSelected(language);
            try {
              await i18n.changeLanguage(language.key); // loads from CDN
              localStorage.setItem("lang", language.key);
              const segments = window.location.pathname.split("/").filter(Boolean);
              if (_utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages.some(l => l.key === segments[0])) {
                segments.shift();
              }
              const newPath = language.key === "en" ? `/${segments.join("/")}` : `/${language.key}${segments.length ? "/" + segments.join("/") : ""}`;
              navigate(newPath, {
                replace: true
              });
            } catch (err) {
              console.error("Failed to load language:", err);
            }
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.ListboxButton, {
              type: "button",
              className: "relative flex flex-row w-full justify-center items-center gap-x-[0.5vw] px-[0.6vw] py-[0.3vw] cursor-pointer md:rounded-[0.5vw] rounded-[2vw] text-center focus-visible:outline-0 shadow-[0_0.1vw_0.5vw_rgba(255,0,229,0.15)]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "flex items-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "block text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] font-semibold",
                  children: selected.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "#1A1A1A",
                className: "md:size-[1vw] size-[4vw]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Portal, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.ListboxOptions, {
                anchor: "bottom start",
                transition: true,
                className: "relative h-fit overflow-auto md:rounded-[0.5vw] rounded-[2vw] bg-white py-[0.5vw] mt-[0.5vw] text-start outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 z-1000 md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)] shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]",
                children: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages.map(language => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.ListboxOption, {
                  value: language,
                  className: "group relative cursor-default py-2 pr-9 pl-3 text-white select-none data-focus:bg-[#FF00E5] data-focus:outline-hidden",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                      className: "ml-3 block truncate font-normal group-data-focus:font-semibold group-data-focus:text-white text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw]",
                      onClick: () => i18n.changeLanguage(language.key),
                      children: language.name
                    })
                  })
                }, language.id))
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("nav", {
        className: "hidden md:flex flex-row gap-x-[2.5vw] font-medium text-[0.8vw]",
        children: navLinks.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          to: link.to,
          className: linkClass,
          children: link.label
        }, link.to))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "hidden md:flex flex-row justify-center items-center gap-x-[1vw] text-[0.8vw] font-normal",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_LoginModal__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          to: "/book-a-demo",
          className: "text-[#4F378A] font-semibold",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionButton, {
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
              children: t("services_section.book_a_demo")
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          to: "/#contact-us",
          className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[0.5vw] px-[1.5vw] rounded-[2vw] text-white font-medium ",
          children: t("header.contact_us")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
        type: "button",
        "aria-label": "Hamburger menu",
        onClick: () => setIsOpen(!isOpen),
        className: "relative md:hidden flex flex-col justify-between w-[8vw] h-[4.5vw] p-[0.1vw] focus:outline-none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionSpan, {
          animate: isOpen ? {
            rotate: 45,
            y: 10
          } : {
            rotate: 0,
            y: 0
          },
          transition: {
            duration: 0.3
          },
          className: "block h-[0.5vw] w-full bg-black rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionSpan, {
          animate: isOpen ? {
            opacity: 0
          } : {
            opacity: 1
          },
          transition: {
            duration: 0.2
          },
          className: "block h-[0.5vw] w-full bg-black rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionSpan, {
          animate: isOpen ? {
            rotate: -45,
            y: -10
          } : {
            rotate: 0,
            y: 0
          },
          transition: {
            duration: 0.3
          },
          className: "block h-[0.5vw] w-full bg-black rounded-full"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(motion_react__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
        children: isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionDiv, {
          initial: {
            y: -20,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          exit: {
            y: -20,
            opacity: 0
          },
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          },
          className: "absolute top-full right-0 w-full bg-white shadow-[0_7vw_10vw_rgba(255,0,229,0.10)]  flex flex-col items-start p-[5vw] gap-y-[3vw] md:hidden  text-[#1A1A1A] text-[3.5vw] font-medium",
          children: [["/", "/#services", "/#platform", "/#network", "/book-a-demo", "/#contact-us"].map(path => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
            to: path,
            className: `${linkClass} w-full text-left px-[5vw]`,
            children: t(`header.${pathToLocaleKey[path]}`)
          }, path)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Listbox, {
            className: `${linkClass} w-full text-left px-[5vw]`,
            value: selected,
            onChange: async language => {
              setSelected(language);
              try {
                await i18n.changeLanguage(language.key); // update i18n
                localStorage.setItem("lang", language.key);

                // Preserve current path segments
                const segments = window.location.pathname.split("/").filter(Boolean);

                // Remove language prefix if present
                if (_utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages.some(l => l.key === segments[0])) {
                  segments.shift();
                }

                // Build new path with language prefix (skip 'en')
                const newPath = language.key === "en" ? `/${segments.join("/")}` : `/${language.key}${segments.length ? "/" + segments.join("/") : ""}`;
                navigate(newPath, {
                  replace: true
                });
              } catch (err) {
                console.error("Failed to switch language:", err);
              }
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.ListboxButton, {
                type: "button",
                className: "relative flex flex-row w-full gap-x-[2vw] justify-start items-center focus-visible:outline-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "flex items-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                    className: "block text-[#1A1A1A] text-[3.5vw] font-medium",
                    children: selected.name
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "#1A1A1A",
                  className: "size-[4.5vw]",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Portal, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.ListboxOptions, {
                  anchor: "bottom start",
                  transition: true,
                  className: "relative h-fit overflow-auto md:rounded-[0.5vw] rounded-[2vw] bg-white py-[0.5vw] mt-[0.5vw] text-start outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 z-1000 md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)] shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]",
                  children: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages.map(language => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.ListboxOption, {
                    value: language,
                    className: "group relative cursor-default py-2 pr-9 pl-3 text-white select-none data-focus:bg-[#FF00E5] data-focus:outline-hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                      className: "flex items-center",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                        className: "ml-3 block truncate font-normal group-data-focus:font-semibold group-data-focus:text-white text-[#1A1A1A] md:text-[3.5vw] text-[3vw]",
                        children: language.name
                      })
                    })
                  }, language.id))
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ui_LoginModal__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
        })
      })]
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/scripts/components/ui/LoginModal.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/ui/LoginModal.js ***!
  \*************************************************/
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





const LoginModal = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isTouch, setIsTouch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const hoverTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Detect touch device
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Close dropdown when clicking outside (for mobile)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isTouch) return;
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTouch]);

  // Hover handlers (for desktop)
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
      }, 200); // small delay prevents flicker
    }
  };

  // Click toggle (for mobile)
  const handleClick = () => {
    if (isTouch) setOpen(prev => !prev);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "relative md:px-0 px-[5vw] md:w-auto w-full",
    ref: dropdownRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      onClick: handleClick,
      className: "text-[#FF00E5] hover:text-shadow-[0_0_0.5vw_rgba(255,0,229,0.5)] transition-text-shadow duration-500 ease-in-out cursor-pointer font-bold",
      children: t("header.login_signup")
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: " absolute top-full md:mt-[1vw] mt-[3vw] left-1/2 -translate-x-1/2 md:w-auto w-[90vw] bg-white md:rounded-[1vw] rounded-[3vw] md:shadow-[0_0_0.5vw_rgba(255,0,229,0.2)] shadow-[0_0_1.5vw_rgba(255,0,229,0.3)] z-1000 md:p-[2vw] p-[5vw] flex md:flex-row flex-col md:gap-[2vw] gap-[5vw] ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]",
          children: t("header.login_modal.amilo.title")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal",
          children: t("header.login_modal.amilo.description")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
          type: "button",
          className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit",
          whileHover: {
            scale: 1.1
          },
          whileTap: {
            scale: 0.8
          },
          onClick: () => window.location.href = "https://vip.amilo.co/",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[3.3vw]",
              children: t("header.login_modal.amilo.button")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              loading: "lazy",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/header_svg_1.svg",
              alt: "Amilo Logo",
              className: "md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]",
          children: t("header.login_modal.sglink.title")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal",
          children: t("header.login_modal.sglink.description")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
          type: "button",
          className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit",
          whileHover: {
            scale: 1.1
          },
          whileTap: {
            scale: 0.8
          },
          onClick: () => window.location.href = "https://admin.sglinkapi.com/",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[3.3vw]",
              children: t("header.login_modal.sglink.button")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              loading: "lazy",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/header_svg_2.svg",
              alt: "SG Link Logo",
              className: "md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]",
          children: t("header.login_modal.sign_up.title")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal",
          children: t("header.login_modal.sign_up.description")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
          to: "/book-a-demo",
          end: true,
          className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[0.5vw] md:px-[1.5vw] px-[3vw] rounded-full text-white font-medium w-fit md:text-[0.8vw] text-[3.3vw] ",
          children: t("header.login_modal.sign_up.button")
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);

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
//# sourceMappingURL=src_scripts_components_Header_js.js.map?ver=6c0421840541a282ab3f