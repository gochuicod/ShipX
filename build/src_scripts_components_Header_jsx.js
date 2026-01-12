"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_Header_jsx"],{

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");


function cn(...inputs) {
  return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}

/***/ }),

/***/ "./src/scripts/components/Header.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/components/Header.jsx ***!
  \*******************************************/
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
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var _library_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library/Logo */ "./src/scripts/components/library/Logo.jsx");
/* harmony import */ var _library_LoginModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./library/LoginModal */ "./src/scripts/components/library/LoginModal.jsx");
/* harmony import */ var _library_AppButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library/AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _library_MobileMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./library/MobileMenu */ "./src/scripts/components/library/MobileMenu.jsx");
/* harmony import */ var _library_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./library/Dropdown */ "./src/scripts/components/library/Dropdown.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar-days.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);















const Header = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(() => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const [selectedLanguage, setSelectedLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages[0]);
  const handleLoginClick = () => setIsOpen(false);
  const linkClass = "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";
  const navLinks = [{
    to: "/",
    label: t("header.home")
  }, {
    to: "/#services",
    label: t("header.services")
  }, {
    label: t("header.toolkit"),
    items: [{
      to: "/shipment-tracker",
      label: t("header.shipment_tracker"),
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
        className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw]",
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_2.svg",
        alt: "ShipX - plane"
      })
    }, {
      to: "/hs-code-generator",
      label: t("header.hs_code_generator"),
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
        className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw]",
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_24.svg",
        alt: "ShipX - Calculator"
      })
    }, {
      to: "/file-a-claim",
      label: t("header.file_a_claim"),
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
        className: "md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw]",
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_13.svg",
        alt: "ShipX - Messaging"
      })
    }]
  }, {
    to: "/#platform",
    label: t("header.platform")
  }, {
    label: t("header.resources"),
    items: [{
      to: "/blogs",
      label: t("header.blogs"),
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-5 h-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("path", {
          d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"
        })
      })
    }, {
      to: "/frequently-asked-questions",
      label: t("header.faqs"),
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-5 h-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("path", {
          fillRule: "evenodd",
          d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
          clipRule: "evenodd"
        })
      })
    }]
  }];
  const mobileNavLinks = [...navLinks, {
    to: "/#contact-us",
    label: t("header.contact_us")
  }, {
    to: "/book-a-demo",
    label: t("header.book_a_demo")
  }];
  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };
  const handleLanguageChange = async language => {
    setSelectedLanguage(language);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
    className: "sticky top-0 z-50 select-none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("header", {
      className: `
          sticky top-0 z-50 select-none
          flex flex-row bg-white text-[#1A1A1A] justify-between items-center
          ${_styles_themeGuide__WEBPACK_IMPORTED_MODULE_7__.themeGuide.paddingX}
          py-3 px-8
        `,
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_library_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("nav", {
        className: "hidden xl:flex flex-row gap-x-[2.5vw] font-normal xl:text-base text-nav items-center",
        children: navLinks.map(link => link.items ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_library_Dropdown__WEBPACK_IMPORTED_MODULE_12__["default"], {
          title: link.label,
          items: link.items
        }, link.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          to: link.to,
          className: linkClass,
          children: link.label
        }, link.to))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: " hidden xl:flex flex-row justify-center items-center gap-x-[1vw] xl:text-base md:text-base text-[0.8vw] font-normal text-nav ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_library_Dropdown__WEBPACK_IMPORTED_MODULE_12__["default"], {
          title: "Language",
          items: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages,
          selected: selectedLanguage,
          onSelect: language => handleLanguageChange(language)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_library_LoginModal__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_library_AppButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          to: "/book-a-demo",
          text: t("header.book_a_demo"),
          withLeftIcon: true,
          leftIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: "size-5"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("button", {
        type: "button",
        "aria-label": "Hamburger menu",
        onClick: () => setIsOpen(!isOpen),
        className: "relative xl:hidden flex flex-col justify-between md:w-[4vw] w-[6vw] md:h-[3vw] h-[3.5vw] p-0 focus:outline-none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionSpan, {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionSpan, {
          animate: isOpen ? {
            opacity: 0
          } : {
            opacity: 1
          },
          transition: {
            duration: 0.2
          },
          className: "block h-[0.5vw] w-full bg-black rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(motion_react_client__WEBPACK_IMPORTED_MODULE_3__.MotionSpan, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(motion_react__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
        children: isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_library_MobileMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
          isOpen: isOpen,
          navLinks: mobileNavLinks,
          languages: _utils_constants__WEBPACK_IMPORTED_MODULE_6__.languages,
          selectedLang: selected,
          onLanguageChange: handleLanguageChange,
          onLinkClick: handleMobileLinkClick,
          onLoginClick: handleLoginClick // <--- Pass the handler here
          ,
          t: t
        })
      })]
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/scripts/components/library/AppButton.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/library/AppButton.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppButton)
/* harmony export */ });
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/button */ "./src/styles/button.jsx");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const appButtonStyles = {
  smartNavLink: "flex items-center justify-center gap-2",
  // The container needs a defined size to act as a frame for the "cover" image
  iconWrapper: "flex items-center justify-center shrink-0 overflow-hidden w-5 h-5",
  // object-cover ensures the image (like a flag) fills the 20x20px area completely
  icon: "w-full h-full object-cover"
};
function AppButton({
  size = "default",
  style = "primary",
  text = "",
  withLeftIcon = false,
  withRightIcon = false,
  leftIcon,
  rightIcon,
  iconRounded = false,
  to,
  className,
  ...rest
}) {
  const renderIcon = Icon => {
    if (!Icon) return null;
    const isUrl = typeof Icon === "string";
    const roundingClass = iconRounded ? "rounded-full" : "rounded-lg";
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(appButtonStyles.iconWrapper, roundingClass),
      children: isUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: Icon,
        alt: "",
        className: appButtonStyles.icon
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "flex items-center justify-center w-full h-full",
        children: (0,react__WEBPACK_IMPORTED_MODULE_3__.isValidElement)(Icon) ? Icon : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Icon, {
          className: "size-full"
        }) // 'size-full' fills the 20x20 wrapper
      })
    });
  };
  const ButtonContent = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [withLeftIcon && renderIcon(leftIcon), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "leading-tight",
      children: text
    }), withRightIcon && renderIcon(rightIcon)]
  });

  // ... (to ? SmartNavLink : Button) logic remains the same
  if (to) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
      asChild: true,
      variant: style,
      size: size,
      className: className,
      ...rest,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: to,
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(appButtonStyles.smartNavLink),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonContent, {})
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: style,
    size: size,
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(appButtonStyles.smartNavLink, className),
    ...rest,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonContent, {})
  });
}

/***/ }),

/***/ "./src/scripts/components/library/Dropdown.jsx":
/*!*****************************************************!*\
  !*** ./src/scripts/components/library/Dropdown.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const linkClass = "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";
function Dropdown({
  title,
  items,
  selected,
  onSelect,
  parentClassName = "",
  triggerClassName = "",
  direction = "down",
  hoverMode = false // Set to true if you want it to open on hover as well
}) {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isUp = direction === "up";

  // Handle Close on Click Outside
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Optional: Handle Hover Logic (if hoverMode is true)
  const handleMouseEnter = () => {
    if (hoverMode) setIsOpen(true);
  };
  const handleMouseLeave = () => {
    if (hoverMode) setIsOpen(false);
  };
  const toggleOpen = () => setIsOpen(prev => !prev);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ref: dropdownRef,
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("relative h-full flex items-center", parentClassName),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      onClick: toggleOpen,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(linkClass, triggerClassName !== "" ? triggerClassName : "py-4", "flex items-center gap-x-1 cursor-pointer select-none",
      // Highlight trigger if open
      isOpen ? "text-[#FF00E5]" : ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        children: selected?.name || title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 2.5,
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("w-3 h-3 transition-transform duration-300",
        // Rotate based on isOpen state instead of group-hover
        isOpen ? "rotate-180 stroke-[#FF00E5]" : "rotate-0 stroke-[#1A1A1A]"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m19.5 8.25-7.5 7.5-7.5-7.5"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(
      // Base styles
      "absolute left-0 z-50 min-w-max", "bg-white rounded-lg border border-[#FF00E5] shadow-lg p-1 overflow-hidden", "transition-all duration-200 ease-out pointer-events-auto text-dark-netural",
      // Visibility states (Controlled by isOpen state now)
      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1",
      // Directional Logic
      isUp ? "bottom-full mb-1" // If Up: Position above
      : "top-full mt-1" // If Down: Position below
      ),
      children: items.map(item => onSelect ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        role: "button",
        tabIndex: 0,
        onClick: () => {
          onSelect(item);
          setIsOpen(false); // Close on selection
        },
        onKeyDown: e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(item);
            setIsOpen(false);
          }
        },
        className: "group relative cursor-pointer px-4 py-3 select-none hover:bg-[#FF00E5] rounded-md text-dark-neutral hover:text-white",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "block font-normal",
          children: item.name
        })
      }, item.id || item.key) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: item.to,
        onClick: () => setIsOpen(false) // Close on navigation
        ,
        className: "group/item block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex items-center gap-x-3 px-4 py-3 text-base text-gray-700 rounded-md transition-colors duration-200 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "shrink-0 scale-110",
            children: item.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "whitespace-nowrap font-medium pr-2",
            children: item.label
          })]
        })
      }, item.to))
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/library/LoginModal.jsx":
/*!*******************************************************!*\
  !*** ./src/scripts/components/library/LoginModal.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const LoginModal = ({
  footer = false,
  placement = "auto"
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const hoverTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isTouch, setIsTouch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const effectivePlacement = placement === "auto" ? footer ? "top" : "bottom" : placement;
  const modalItems = [{
    key: "amilo",
    title: t("header.login_modal.amilo.title"),
    desc: t("header.login_modal.amilo.description"),
    btnText: `${t("header.login_modal.amilo.button")} Amilo`,
    onClick: () => window.location.href = "https://vip.amilo.co/",
    variant: "secondary"
  }, {
    key: "sglink",
    title: t("header.login_modal.sglink.title"),
    desc: t("header.login_modal.sglink.description"),
    btnText: `${t("header.login_modal.sglink.button")} SG LINK`,
    onClick: () => window.location.href = "https://admin.sglinkapi.com/",
    variant: "secondary"
  }, {
    key: "signup",
    title: t("header.login_modal.sign_up.title"),
    desc: t("header.login_modal.sign_up.description"),
    btnText: t("header.login_modal.sign_up.button"),
    to: "/book-a-demo",
    variant: "primary"
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
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
  const handleMouseEnter = () => {
    if (!isTouch) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setOpen(true);
    }
  };
  const handleMouseLeave = () => {
    if (!isTouch) {
      hoverTimeoutRef.current = setTimeout(() => setOpen(false), 200);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ref: dropdownRef,
    className: "relative flex items-center h-full",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      onClick: () => isTouch && setOpen(p => !p),
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)(
      // Shared styles for both
      "cursor-pointer transition-colors duration-300 flex items-center", footer ?
      // Footer specific styles (Added 'gap-2' for chevron spacing)
      "bg-white hover:bg-secondary-hover active:bg-secondary-active border border-violet-300 active:border-secondary-active text-primary active:text-white font-normal shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)] px-4 py-[5px] rounded-lg gap-2" :
      // Header specific styles
      `gap-x-1 text-nav font-normal text-base hover:text-[#FF00E5] ${open && "text-[#FF00E5]"}`),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: t("header.login_signup")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 2.5,
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)("w-3 h-3 transition-transform duration-300",
        // If footer, use current text color (stroke-current), otherwise specific colors
        footer ? "stroke-current" : "stroke-[#1A1A1A]",
        // Rotation logic
        open ? `rotate-180 ${!footer && "stroke-[#FF00E5]"}` : "rotate-0"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m19.5 8.25-7.5 7.5-7.5-7.5"
        })
      })]
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute z-50 left-1/2 -translate-x-1/2", "w-[90vw] md:w-auto md:min-w-[600px]", "max-h-[85vh] overflow-y-auto overscroll-contain", "bg-white rounded-2xl md:rounded-xl", "border border-[#FF00E5] shadow-xl", "p-6 md:p-6", effectivePlacement === "top" ? "bottom-full mb-3 origin-bottom" : "top-full mt-3 origin-top"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
        children: modalItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "text-[#19191D] font-bold text-lg md:text-base",
            children: item.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-[#757577] text-sm md:text-sm leading-relaxed font-normal",
            children: item.desc
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "mt-2 md:mt-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
              to: item.to,
              onClick: item.onClick,
              variant: item.variant,
              text: item.btnText,
              className: "w-full md:w-fit px-4 py-2 text-sm"
            })
          })]
        }, item.key))
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);

/***/ }),

/***/ "./src/scripts/components/library/Logo.jsx":
/*!*************************************************!*\
  !*** ./src/scripts/components/library/Logo.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Logo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "flex flex-row gap-x-[0.5vw] items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
      to: "/",
      onClick: () => window.scrollTo({
        top: 0,
        behavior: "smooth"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        loading: "lazy",
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo.svg",
        alt: "ShipX Logo",
        className: "md:w-22 md:h-10 w-[14vw] h-[7vw]"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
      to: "/",
      onClick: () => window.scrollTo({
        top: 0,
        behavior: "smooth"
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        loading: "lazy",
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo_sglink_amilo.svg",
        alt: "SGLink Logo",
        className: "md:w-18 md:h-6 w-[16vw] h-[5vw]"
      })
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/library/MobileMenu.jsx":
/*!*******************************************************!*\
  !*** ./src/scripts/components/library/MobileMenu.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar-days.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);







const MobileMenu = ({
  isOpen,
  navLinks,
  languages,
  selectedLang,
  onLanguageChange,
  onLinkClick,
  onLoginClick,
  // <--- New prop for Login action
  t
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_1__.MotionDiv, {
    initial: {
      y: -10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    exit: {
      y: -10,
      opacity: 0
    },
    transition: {
      duration: 0.3,
      ease: "easeOut"
    },
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_5__.cn)("absolute top-[70px] right-6 z-[60]", "flex flex-col items-start gap-4", "w-[263px] h-auto min-h-[550px]", "rounded-[8px] border border-white/20 shadow-xl", "px-[32px] py-[16px]"),
    style: {
      background: "linear-gradient(135deg, rgba(255, 230, 255, 0.05) 0%, rgba(170, 0, 255, 0.05) 100%), #FFFFFF",
      fontFamily: "'Inter', sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "w-full flex justify-end relative z-20",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Listbox, {
        value: selectedLang,
        onChange: onLanguageChange,
        children: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.ListboxButton, {
            className: "flex flex-row justify-center items-center px-2 py-1 gap-1 w-[54px] h-[24px] bg-white shadow-sm rounded-[4px] text-[14px] text-[#1E2939] border border-gray-100",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "uppercase",
              children: selectedLang.key
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: `size-3 stroke-[2.5px] transition-transform ${open ? "rotate-180" : ""}`
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.ListboxOptions, {
            className: "absolute right-0 top-full mt-1 w-[140px] bg-white border border-[#FF00E5] rounded-lg shadow-xl py-1 z-50 focus:outline-none",
            children: languages.map(lang => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.ListboxOption, {
              value: lang,
              className: "px-4 py-2 text-sm hover:bg-pink-50 cursor-pointer text-[#1A1A1A] ui-selected:font-bold ui-selected:text-[#FF00E5]",
              children: lang.name
            }, lang.id))
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("nav", {
      className: "flex flex-col w-full gap-2 z-10",
      children: navLinks.map((link, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex flex-col w-full",
        children: [link.items ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex flex-col gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "px-1 py-1 text-[16px] font-medium text-[#4D525C] opacity-70",
            children: link.label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "flex flex-col gap-2 pl-4",
            children: link.items.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
              to: item.to,
              onClick: onLinkClick,
              className: "px-1 py-1 text-[16px] font-normal text-[#4D525C] hover:text-[#FF00E5] transition-colors",
              children: item.label
            }, item.to))
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
          to: link.to,
          onClick: onLinkClick,
          className: "px-1 py-1 text-[16px] font-normal text-[#4D525C] hover:text-[#FF00E5] transition-colors",
          children: link.label
        }), (idx === 1 || idx === 2 || idx === 3 || idx === 4) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "w-full h-[1px] bg-[#4D525C] opacity-20 my-2"
        })]
      }, link.label))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "flex flex-col w-full gap-2 mt-auto pb-2 z-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "secondary",
        text: "Login / Signup",
        onClick: onLoginClick // <--- Triggers the login modal logic
        ,
        className: "w-full h-[36px] text-[16px] font-normal text-[#1E2939] shadow-sm flex justify-center items-center"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/book-a-demo",
        onClick: onLinkClick // Close menu when clicked
        ,
        text: t("header.book_a_demo"),
        withLeftIcon: true,
        leftIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "size-5"
        }),
        className: "w-full h-[40px] text-[16px] flex justify-center items-center"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

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

/***/ }),

/***/ "./src/styles/button.jsx":
/*!*******************************!*\
  !*** ./src/styles/button.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @radix-ui/react-slot */ "./node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.cva)([
// Layout & Flexbox
"inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0",
// Appearance
"rounded-md font-normal",
// Transitions & Base Interaction
"transition-all outline-none",
// Focus States
"focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
// Disabled States
"disabled:pointer-events-none disabled:opacity-50",
// Validation / Error States
"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
// Child Element Overrides (SVG icons)
"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"].join(" "), {
  variants: {
    variant: {
      default: "bg-gray-200 text-foreground hover:bg-violet-300/70",
      tabDefault: "bg-background text-foreground hover:bg-gray-200",
      destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      primary: [
      // Layout & Shape
      "flex flex-row justify-center items-center gap-1 rounded-[8px] transition-all duration-300 cursor-pointer",
      // Typography
      "font-['Inter'] font-normal text-white",
      // DEFAULT STATE
      "bg-[linear-gradient(103.43deg,#4F378A_9.78%,#CC00B7_84.11%)]", "shadow-[2px_2px_4px_rgba(20,0,99,0.3),inset_2px_2px_3px_rgba(255,255,255,0.4)]",
      // HOVER STATE
      "hover:bg-[linear-gradient(103.43deg,#6D4CBF_9.78%,#E000CA_84.11%)]", "hover:shadow-[0px_0px_12px_rgba(255,0,229,0.5),inset_2px_2px_3px_rgba(255,255,255,0.5)]", "hover:scale-[1.01]",
      // EXACT ACTIVE STATE (Uniform Gradient Fix)
      "active:scale-[0.98]", "active:font-bold",
      // We use a "flat" gradient of the same color to keep the background-image property occupied
      "active:bg-[linear-gradient(103.43deg,#CC00B7_0%,#CC00B7_100%)]",
      // Complex Shadow Stack from Figma
      "active:shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"].join(" "),
      secondary: ["bg-white hover:bg-secondary-hover active:bg-secondary-active", "border border-violet-300 active:border-secondary-active", "text-primary active:text-white cursor-pointer font-normal", "shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)]"].join(" "),
      tertiary: ["bg-white hover:bg-secondary-hover active:bg-secondary-active cursor-pointer p-0", "text-primary active:text-white cursor-pointer font-normal", "shadow-[1px_1px_4px_rgba(20,0,99,0.3),inset_-1px_-1px_1px_rgba(154,4,129,0.15)]"].join(" "),
      quaternary: [
      // Layout & sizing (matches Figma)
      "flex flex-row items-center justify-center gap-1", "h-[36px] px-4 rounded-[8px]",
      // Typography
      "font-['Inter'] font-normal text-[#CC00B7]",
      // Default state (bg-white look with subtle tint)
      "bg-white", "border border-[rgba(204,0,183,0.16)]", "shadow-none",
      // Hover state (pink link-like highlight)
      "hover:bg-[rgba(204,0,183,0.06)]", "hover:border-[rgba(204,0,183,0.32)]",
      // Active state
      "active:bg-[rgba(204,0,183,0.12)]", "active:scale-[0.98]",
      // Transitions
      "transition-all duration-200 cursor-pointer"].join(" "),
      categoryInactive: ["bg-white hover:bg-secondary-hover active:bg-secondary-active", "border-none", "text-primary active:text-white cursor-pointer font-normal text-[#1E2939]", "shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)]"].join(" "),
      categoryActive: ["bg-[#CC00B7] hover:bg-[#E000CA] active:bg-[#CC00B7]", "text-white font-bold cursor-pointer", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]", "transition-all duration-300"].join(" "),
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",
      tabActive: ["bg-[#CC00B7]", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]", "text-white font-medium"].join(" "),
      tabInactive: ["bg-transparent text-white/90 font-normal hover:bg-white/5"].join(" "),
      // This matches your secondary code snippet for "HS Code Generator" style (bordered active state)
      tabBorderedActive: ["bg-[rgba(204,0,183,0.2)] border border-[#FF00E5]", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"].join(" "),
      toolsHeroActive: ["flex flex-row justify-center items-center gap-2 bg-[#CC00B7] text-white rounded-lg font-semibold", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"].join(" "),
      toolsHeroInactive: ["flex flex-row justify-center items-center gap-2 bg-transparent text-white rounded-lg font-semibold"].join(" "),
      toolsHeroMobileActive: ["flex flex-col justify-center items-center gap-2 bg-[#CC00B7] text-white rounded-lg font-semibold whitespace-normal break-words text-center", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"].join(" "),
      toolsHeroMobileInactive: ["flex flex-col justify-center items-center gap-2 bg-transparent text-white rounded-lg font-semibold whitespace-normal break-words text-center"].join(" ")
    },
    size: {
      default: "text-sm md:text-base h-9 px-4 py-2.5 has-[>svg]:px-3",
      defaultFull: "text-sm md:text-base h-full px-4 py-2.5 has-[>svg]:px-3",
      tab: "text-sm md:text-base h-full px-4 py-2.5",
      sm: "text-xs md:text-sm h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "text-base md:text-lg h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_0__.Slot : "button";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Comp, {
    "data-slot": "button",
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(buttonVariants({
      variant,
      size,
      className
    })),
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    ...props
  });
}


/***/ }),

/***/ "./src/styles/themeGuide.js":
/*!**********************************!*\
  !*** ./src/styles/themeGuide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   themeGuide: () => (/* binding */ themeGuide)
/* harmony export */ });
const themeGuide = {
  // Padding
  paddingX: "lg:px-24 md:px-8 px-8",
  paddingY: "lg:py-5 md:py-5 py-5",
  sectionPaddingY: "xl:py-[128px] md:py-[64px] py-[48px]",
  sectionPaddingX: "xl:px-[122px]",
  // Typography - Headings
  pageTitle: "text-4xl font-extrabold tracking-tight",
  pageTitleAccent: "text-secondary",
  sectionHeading: "text-3xl font-semibold tracking-tight text-foreground",
  sectionHeadingAccent: "text-secondary",
  // Typography - Body
  sectionDescription: "text-foreground text-base",
  bodyText: "text-foreground text-base",
  // Form / Input Elements
  inputHeading: "text-foreground text-base leading-tight font-semibold",
  inputDescription: "text-muted-foreground text-sm leading-tight",
  inputPlaceholder: "placeholder:text-placeholder text-placeholder text-base md:text-sm",
  // Call to Action (CTA)
  ctaHeading: "lg:text-[40px] md:text-3xl text-2xl font-semibold tracking-tight leading-none",
  ctaDescription: "lg:text-lg md:text-md text-sm leading-tight",
  // Header
  headerTagline: "text-base text-dark-neutral font-normal",
  headerLinks: "text-base text-dark-neutral font-medium",
  headerLanguageItem: "text-md text-dark-neutral font-normal",
  // Footer
  footerTagline: "text-lg font-bold leading-tight text-dark-neutral",
  footerBody: "text-sm leading-sm font-normal text-dark-neutral",
  footerHeading: "text-base font-bold text-secondary",
  footerItem: "text-sm text-medium-neutral hover:text-foreground leading-none",
  footerIcon: "w-5 h-5",
  // Buttons & UI
  // Note: These often need base button classes + variant classes
  buttonPrimary: "rounded-md text-sm font-medium mainButton inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 min-h-12 px-4 py-2 has-[>svg]:px-3",
  buttonNormal: "bg-gray-200 text-foreground hover:bg-violet-300/70 h-9 px-4 py-2 rounded-md",
  buttonFooterCTA: "bg-white/15 text-white text-base font-normal border border-white/95 rounded-[19px] md:py-[7px] md:px-[30px] cursor-pointer",
  badge: "text-secondary flex items-center gap-1 rounded-md px-4 py-2 text-sm font-bold w-fit bg-[var(--badge-bg)] text-[var(--badge-text)]",
  // Shipment Tracker
  toolsHeroTitle: "font-['Inter'] font-semibold text-white tracking-[-1px] lg:text-[40px] text-[32px]",
  toolsHeroDescription: "font-['Inter'] font-normal text-white md:text-[16px] text-[14px] opacity-90",
  // Section Introduction
  sectionHeading: "lg:text-[32px] text-[28px] font-bold text-[#1E2939]",
  sectionDescription: "md:text-[16px] text-[14px] font-normal text-[#63666D]/75",
  // Input labels
  inputLabel: "font-['Inter'] md:text-[16px] text-[14px] font-semibold text-[#1E2939]",
  inputLabelNote: "font-['Inter'] md:text-[16px] text-[14px] font-normal text-[#4D525C]/90",
  inputPlaceholder: "font-['Inter'] md:text-[16px] text-[14px] font-normal text-[#99A1AF]"
};

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_Header_jsx.js.map?ver=fe5f5f4d4da95839148f