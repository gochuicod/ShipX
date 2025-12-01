"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_ToolTipCard_js"],{

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
  const [isTouch, setIsTouch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const hoverTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Detect touch device
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Close when clicking outside (for touch)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isTouch) return;
    const handleClickOutside = e => {
      if (cardRef.current && !cardRef.current.contains(e.target) && tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTouch]);

  // Hover logic (desktop)
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
      }, 200); // small delay to prevent flicker
    }
  };

  // Click logic (touch)
  const handleClick = () => {
    if (isTouch) setOpen(prev => !prev);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "group cursor-pointer flex flex-row md:w-full w-fit md:rounded-[2vw] rounded-[3vw]  md:pl-[0.8vw] pl-[3vw] md:pr-[2vw] pr-[3vw] md:py-[0.7vw] py-[1.5vw]  items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)]  hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)]  transition-shadow duration-1000 ease-in-out relative",
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      loading: "lazy",
      className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw] rounded-full",
      src: image,
      alt: country_name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "text-[#1A1A1A] font-semibold md:text-[0.8vw] text-[2.3vw] md:pl-[1vw] pl-[3vw]",
      children: country_name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      ref: tooltipRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
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
        loading: "lazy",
        className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw] rounded-full",
        src: image,
        alt: country_name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-[#19191D] md:text-[0.8vw] text-[2.3vw] font-bold",
        children: country_name
      }), description, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: `tel:${contact_number}`,
        className: "text-[#757577] md:text-[0.7vw] text-[2vw] pt-[1.5vw]",
        children: contact_number
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: `mailto:${email}`,
        className: "text-[#757577] md:text-[0.7vw] text-[2vw]",
        children: email
      })]
    })]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_ToolTipCard_js.js.map?ver=0c863b239fe2b28b56a9