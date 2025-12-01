"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_CarouselNav_js"],{

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
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function CarouselNav() {
  const {
    t,
    i18n
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
      autoplayDelay: 20000,
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
        "aria-label": "Previous slide",
        className: " absolute! top-2/4 left-[1vw] -translate-y-2/4 mt-next bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out rounded-full p-[0.5vw] shadow-lg cursor-pointer md:flex hidden ",
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
        "aria-label": "Next slide",
        className: " absolute! top-2/4 right-[1vw] -translate-y-2/4 mt-prev bg-linear-to-r from-[#FF00E5] from-0% via-[#FF00E5] via-60% to-[#4F378A] to-100% bg-size-[200%_100%] bg-position-[100%_0%] hover:bg-position-[0%_0%] transition-[background-position] duration-1000 ease-in-out rounded-full p-[0.5vw] shadow-lg cursor-pointer md:flex hidden ",
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
              className: "sr-only",
              children: t("seo.home_page.title")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
              className: "flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full md:pl-[0.3vw] pl-[0.7vw] md:pr-[0.45vw] pr-[2vw] md:py-[0.2vw] py-[0.5vw] md:text-[0.6vw] text-[2.5vw] items-center font-semibold text-[#6941C6]",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]",
                children: t("hero_section.slide_1.badge_1")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "text-[#1A1A1A] font-extrabold md:text-[3.7vw] text-[10vw] md:leading-[4.2vw] leading-[10.5vw]",
                style: {
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                },
                children: [t("hero_section.slide_1.header_1"), " ", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {
                  className: "md:block hidden"
                }) : "", t("hero_section.slide_1.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_1.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                to: "/#services",
                end: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
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
                    className: "absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
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
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_1.webp",
              fetchpriority: "high",
              decoding: "async",
              loading: "eager",
              alt: "ShipX - Main SVG 1"
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
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_4.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_4.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
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
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_5.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_5.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
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
            className: `flex-1 flex-col md:w-[55%] w-full`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full md:pl-[0.3vw] pl-[0.7vw] md:pr-[0.45vw] pr-[2vw] md:py-[0.2vw] py-[0.5vw] md:text-[0.6vw] text-[2.5vw] items-center font-semibold text-[#6941C6]",
              style: {
                fontFamily: "Inter, system-ui, -apple-system, sans-serif"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]",
                children: t("hero_section.slide_2.badge_1")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_2.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                to: "/#services",
                end: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
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
                    className: "absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
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
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_11.webp",
              alt: "ShipX - Main SVG 11"
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
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_6.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_6.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
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
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_7.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_7.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]",
                children: t("hero_section.slide_3.badge_1")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "text-[#1A1A1A] font-extrabold md:text-[3.8vw] text-[10vw] md:leading-[4.3vw] leading-[10.5vw]",
                style: {
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif"
                },
                children: [t("hero_section.slide_3.header_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                  className: "inline text-[#FF00E5]",
                  children: [t("hero_section.slide_3.header_2"), " ", i18n.language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {
                    className: "md:block hidden"
                  }) : "", t("hero_section.slide_3.header_3")]
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full text-white font-medium cursor-pointer ",
                to: "/book-a-demo",
                children: t("hero_section.slide_3.book_a_demo")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                to: "/#services",
                end: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
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
                    className: "absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
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
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_12.webp",
              alt: "ShipX - Main SVG 12"
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
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_8.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_8.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
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
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_9.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
                className: "md:h-[3vw] h-[7.5vw] object-contain"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_9.webp",
                loading: "lazy",
                alt: "ShipX - scrolling",
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
//# sourceMappingURL=src_scripts_components_ui_CarouselNav_js.js.map?ver=d3ac2668004f1a9794e3