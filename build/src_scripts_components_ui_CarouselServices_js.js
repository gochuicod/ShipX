"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_CarouselServices_js"],{

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
            children: [t("services_section.carousel.slide_1.header_2"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : "", t("services_section.carousel.slide_1.header_3")]
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
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_1.webp",
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
            children: [t("services_section.carousel.slide_2.header_2"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : "", t("services_section.carousel.slide_2.header_3")]
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
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_7.webp",
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
            children: [t("services_section.carousel.slide_3.header_2"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : "", t("services_section.carousel.slide_3.header_3")]
          }), " ", t("services_section.carousel.slide_3.header_4"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : "", t("services_section.carousel.slide_3.header_5")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_3.price_desc_1"), "\xA0", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : "", t("services_section.carousel.slide_3.price_desc_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[4vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_3.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[4vw] text-[8vw]",
              children: t("services_section.carousel.slide_3.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_8.webp",
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
          }), " ", i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : "", t("services_section.carousel.slide_4.header_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]",
          style: {
            fontFamily: "Inter, system-ui, -apple-system, sans-serif"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-[#63666D] md:text-[0.6vw] text-[2.3vw]",
            children: [t("services_section.carousel.slide_4.price_desc_1"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {
              className: "md:block hidden"
            }), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : "", t("services_section.carousel.slide_4.price_desc_2"), "\xA0", t("services_section.carousel.slide_4.price_desc_3")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0",
            children: [t("services_section.carousel.slide_4.currency"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "text-[#FF00E5] md:text-[3vw] text-[8vw]",
              children: t("services_section.carousel.slide_4.price")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "w-full md:h-[15vw] h-[45vw] rounded-[2vw]",
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_9.webp",
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
          }), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
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
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_10.webp",
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
          children: [t("services_section.carousel.slide_6.header_1"), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : "", t("services_section.carousel.slide_6.header_2"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
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
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_11.webp",
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
          }), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: "\xA0"
          }), t("services_section.carousel.slide_7.header_3")]
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
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_12.webp",
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
          }), i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language === "en" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: "\xA0"
          }), t("services_section.carousel.slide_8.header_3")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col md:gap-y-[1vw] gap-y-[2vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_23.svg",
              alt: "Main Icon 23"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_1")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_24.svg",
              alt: "Main Icon 24"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_2")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_24.svg",
              alt: "Main Icon 24"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_3")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_25.svg",
              alt: "Main Icon 25"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]",
              children: t("services_section.carousel.slide_8.list_1.item_4")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]",
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_8.svg",
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

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_CarouselServices_js.js.map?ver=7ed6e10f4fcff1c490f7