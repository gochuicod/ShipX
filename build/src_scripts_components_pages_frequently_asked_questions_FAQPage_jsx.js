"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_frequently_asked_questions_FAQPage_jsx"],{

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-down.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chevron-down", __iconNode);


//# sourceMappingURL=chevron-down.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js":
/*!************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleArrowRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
];
const CircleArrowRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("circle-arrow-right", __iconNode);


//# sourceMappingURL=circle-arrow-right.js.map


/***/ }),

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

/***/ "./src/scripts/components/library/Accordion.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/library/Accordion.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion),
/* harmony export */   AccordionContent: () => (/* binding */ AccordionContent),
/* harmony export */   AccordionItem: () => (/* binding */ AccordionItem),
/* harmony export */   AccordionTrigger: () => (/* binding */ AccordionTrigger)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// Contexts

const AccordionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const AccordionItemContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

/**
 * Accordion - Root Container
 */
const Accordion = ({
  children,
  className,
  allowMultiple = false
}) => {
  const [openItems, setOpenItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
  const toggle = id => {
    const newOpen = new Set(allowMultiple ? openItems : []);
    if (openItems.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AccordionContext.Provider, {
    value: {
      openItems,
      toggle
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: className,
      style: {
        fontFamily: "Inter, sans-serif"
      },
      children: children
    })
  });
};

/**
 * AccordionItem - Handles the Layout (Text Column | Icon Column)
 * Use this to group Title and Content together visually.
 */
const AccordionItem = ({
  value,
  children,
  className
}) => {
  const {
    openItems,
    toggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AccordionContext);
  const isOpen = openItems.has(value);

  // 1. Container Styling (Border/Shadow)
  const containerClass = (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full transition-all duration-300 overflow-hidden rounded-lg border cursor-pointer group", isOpen ? "bg-white border-0 shadow-[2px_2px_4px_rgba(115,0,169,0.25)]" : "bg-[#F9FAFB] border-0 shadow-[2px_2px_4px_rgba(25,33,61,0.06)]", className);
  const containerStyle = isOpen ? {
    background: "linear-gradient(135deg, rgba(227, 28, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 54.41%, rgba(215, 39, 194, 0.12) 100%), #FFFFFF"
  } : {};

  // 2. Chevron Styling
  const chevronClass = (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center rounded-full transition-all duration-300 shrink-0", isOpen ? "bg-[#99008A] text-white" : "bg-[#F3F4F6] text-[#1E2939]");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AccordionItemContext.Provider, {
    value: {
      isOpen,
      value
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: containerClass,
      style: containerStyle,
      onClick: () => toggle(value),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-row items-start justify-between p-4 md:px-8 md:py-4 gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex flex-col gap-2 grow",
          children: children
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: chevronClass,
          style: {
            width: "34.42px",
            height: "34.42px"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
            strokeWidth: 2,
            className: "w-[20.42px] h-[20.42px]"
          })
        })]
      })
    })
  });
};

/**
 * AccordionTrigger - Just the Title Text
 * No longer handles the icon or layout.
 */
const AccordionTrigger = ({
  children,
  className
}) => {
  const {
    isOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AccordionItemContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)("font-inter text-base transition-colors text-left", isOpen ? "text-[#99008A] font-bold" : "text-[#1E2939] font-normal", className),
    children: children
  });
};

/**
 * AccordionContent - The Description Text
 * Collapsible animation logic.
 */
const AccordionContent = ({
  children,
  className
}) => {
  const {
    isOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AccordionItemContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "overflow-hidden",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)("pt-1 text-[#4D525C] font-inter font-normal text-sm leading-[1.6] text-justify", className),
        children: children
      })
    })
  });
};

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

/***/ "./src/scripts/components/library/FilterPill.jsx":
/*!*******************************************************!*\
  !*** ./src/scripts/components/library/FilterPill.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const FilterPill = ({
  label,
  count,
  isActive,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
    text: `${label} ${count !== null && count !== undefined ? `(${count})` : ""}`,
    style: isActive ? "categoryActive" : "categoryInactive",
    onClick: onClick,
    className: "whitespace-nowrap"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPill);

/***/ }),

/***/ "./src/scripts/components/library/HighlightedHeading.jsx":
/*!***************************************************************!*\
  !*** ./src/scripts/components/library/HighlightedHeading.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HighlightedHeading)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const highlightedHeadingStyles = {
  h1: "text-4xl font-bold text-dark-neutral"
};
function HighlightedHeading({
  text,
  highlight,
  // string or array
  className,
  highlightClass,
  disableNewlines = false
}) {
  if (!text) return null;

  // Convert literal "\\n" strings
  const formattedText = disableNewlines ? text.replace(/\\n/g, " ") : text.replace(/\\n/g, "\n");

  // Prepare highlights
  const highlightList = Array.isArray(highlight) ? highlight : highlight ? [highlight] : [];

  // Build regex parts
  const patternParts = [...highlightList.map(h => h.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")), !disableNewlines ? "\\n" : null].filter(Boolean);
  const regex = new RegExp(`(${patternParts.join("|")})`, "gi");
  const parts = formattedText.split(regex);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(highlightedHeadingStyles.h1, className),
    children: parts.map((part, i) => {
      // Handle Newlines only if enabled
      if (!disableNewlines && part === "\n") {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}, i);
      }
      const isHighlight = highlightList.some(h => h.toLowerCase() === part.toLowerCase());
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(isHighlight ? `text-[#FF00E5] ${highlightClass || ""}` : ""),
        children: part
      }, i);
    })
  });
}

/***/ }),

/***/ "./src/scripts/components/library/ResponsiveFilterBar.jsx":
/*!****************************************************************!*\
  !*** ./src/scripts/components/library/ResponsiveFilterBar.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var _FilterPill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterPill */ "./src/scripts/components/library/FilterPill.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const MobileFilterDropdown = ({
  options,
  activeId,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "w-full flex justify-end",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "relative inline-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
        value: activeId,
        onChange: e => onChange(e.target.value),
        className: `
            appearance-none
            flex flex-row items-center justify-center
            w-[152px] h-8
            pl-2 pr-8 /* Right padding ensures text doesn't overlap icon */
            rounded-lg
            
            /* Typography from Figma */
            font-['Inter'] text-[14px] font-normal leading-4
            text-[#1E2939] text-center
            
            /* Visual Styling from Figma */
            bg-white border-none
            shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-1px_-1px_1px_rgba(154,4,129,0.1)]
            
            /* Focus State */
            focus:outline-none focus:ring-1 focus:ring-[#99008A]
            cursor-pointer
          `,
        children: options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: opt.id,
          children: opt.label
        }, opt.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-[#4F378A]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
          size: 15
        })
      })]
    })
  });
};

// --- Main Responsive Wrapper ---
const ResponsiveFilterBar = ({
  filters,
  activeFilterId,
  onFilterChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "w-full flex justify-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "block md:hidden w-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MobileFilterDropdown, {
        options: filters,
        activeId: activeFilterId,
        onChange: onFilterChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "hidden md:flex flex-row flex-wrap justify-center items-center content-center gap-4 w-full",
      children: filters.map(filter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FilterPill__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: filter.label,
        count: filter.count,
        isActive: activeFilterId === filter.id,
        onClick: () => onFilterChange(filter.id)
      }, filter.id))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveFilterBar);

/***/ }),

/***/ "./src/scripts/components/library/SearchBar.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/library/SearchBar.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _styles_search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/search-bar */ "./src/styles/search-bar.jsx");
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const SearchBar = ({
  value = "",
  onChange,
  onClear,
  placeholder = "Enter tracking number...",
  variant = "default",
  size = "default",
  submitLabel = "Search",
  submitIcon,
  showClearButton = true,
  className,
  inputClassName,
  containerClassName,
  translationKey,
  ...props
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();

  // Use translation key if provided, otherwise use submitLabel
  const buttonText = translationKey ? t(translationKey, {
    defaultValue: submitLabel
  }) : submitLabel;
  const outerClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchBarOuterVariants)({
    variant,
    size
  }), className);

  // 2. Classes for the White Form Container
  const innerClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchBarVariants)({
    variant,
    size
  }), containerClassName);
  const inputClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchInputVariants)({
    size
  }), "text-[#1E2939] placeholder-[#99A1AF] italic",
  // Figma: Dark text, Gray italic placeholder
  inputClassName);
  const clearButtonClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchButtonVariants)({
    type: "clear",
    size: "sm"
  }),
  // Force small size for clear X
  "title-clear");
  const submitButtonClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_search_bar__WEBPACK_IMPORTED_MODULE_2__.searchButtonVariants)({
    type: "submit",
    size
  }), "title-submit");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: outerClasses,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: innerClasses,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "pl-2 pr-1 flex items-center justify-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "text-[#99A1AF]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            d: "M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",
            stroke: "currentColor",
            strokeWidth: "1.66667",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        type: "text",
        placeholder: placeholder,
        value: value,
        onChange: onChange,
        className: inputClasses
      }), showClearButton && value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        onClick: onClear,
        className: clearButtonClasses,
        title: "Clear search",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
          className: "w-5 h-5",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            clipRule: "evenodd"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AppButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: buttonText,
        className: "title-submit",
        size: "defaultFull"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./src/scripts/components/library/SubPageHero.jsx":
/*!********************************************************!*\
  !*** ./src/scripts/components/library/SubPageHero.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _styles_sub_page_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sub-page-hero */ "./src/styles/sub-page-hero.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // Import styling definition

const SubPageHero = ({
  src,
  srcMobile,
  alt = "Hero image",
  size,
  align,
  className,
  children,
  ...props
}) => {
  // 1. Calculate container styles based on variants
  const containerClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)((0,_styles_sub_page_hero__WEBPACK_IMPORTED_MODULE_1__.heroVariants)({
    size
  }), className);

  // 2. Determine image alignment class manually since it applies to the <img> tag, not the container
  //    (Alternatively, you could split the CVA into containerVariants and imageVariants if preferred)
  const imageAlignment = align === "top" ? "object-top" : align === "bottom" ? "object-bottom" : "object-center";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: containerClasses,
    ...props,
    children: [srcMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: srcMobile,
      alt: alt,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("absolute inset-0 w-full h-full object-cover md:hidden", imageAlignment),
      loading: "eager"
    }), src && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: src,
      alt: alt,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("absolute inset-0 w-full h-full object-cover hidden md:block", imageAlignment),
      loading: "eager"
    }), !srcMobile && src && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: src,
      alt: alt,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("absolute inset-0 w-full h-full object-cover md:hidden", imageAlignment),
      loading: "eager"
    }), children && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative z-10 w-full h-full",
      children: children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubPageHero);

/***/ }),

/***/ "./src/scripts/components/pages/frequently_asked_questions/FAQPage.jsx":
/*!*****************************************************************************!*\
  !*** ./src/scripts/components/pages/frequently_asked_questions/FAQPage.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _library_ResponsiveFilterBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/ResponsiveFilterBar */ "./src/scripts/components/library/ResponsiveFilterBar.jsx");
/* harmony import */ var _library_SubPageHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/SubPageHero */ "./src/scripts/components/library/SubPageHero.jsx");
/* harmony import */ var _library_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/SearchBar */ "./src/scripts/components/library/SearchBar.jsx");
/* harmony import */ var _library_AppButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _library_HighlightedHeading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/HighlightedHeading */ "./src/scripts/components/library/HighlightedHeading.jsx");
/* harmony import */ var _ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/ParallaxSection */ "./src/scripts/components/ui/ParallaxSection.jsx");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js");
/* harmony import */ var _library_Accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../library/Accordion */ "./src/scripts/components/library/Accordion.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);













const FAQPage = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();

  // --- 1. Data Retrieval ---
  const rawData = t("faq_page", {
    returnObjects: true
  });
  const pageData = typeof rawData === "object" && rawData !== null ? rawData : {};
  const {
    header_section = {},
    filter_section = {},
    accordion_section = {},
    cta_section = {}
  } = pageData;

  // --- 2. State ---
  const [activeCategoryId, setActiveCategoryId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("all");
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [visibleCount, setVisibleCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);

  // --- 3. Helper Functions & Derived Data ---
  const rawItems = Array.isArray(accordion_section?.items) ? accordion_section.items : [];
  const getAnswerText = answerBlocks => {
    if (!Array.isArray(answerBlocks)) return "";
    return answerBlocks.map(block => (block.title || "") + " " + (block.text || "")).join(" ");
  };

  // Helper to render the complex inner content of an answer
  const renderAnswerContent = item => {
    if (item.answer_blocks?.length > 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "flex flex-col gap-4",
        children: item.answer_blocks.map((block, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "w-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("p", {
            children: [block.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "font-bold mr-1 text-[#1E2939]",
              children: block.title
            }), block.text]
          })
        }, idx))
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
      children: item.answer || item.description
    });
  };
  const categories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const getCount = categoryId => {
      if (categoryId === "all") return rawItems.length;
      return rawItems.filter(item => item.category_id === categoryId).length;
    };
    const uniqueCategories = [...new Set(rawItems.map(item => item.category_id))].filter(Boolean);
    return [{
      id: "all",
      label: "All Categories",
      count: getCount("all")
    }, ...(filter_section.categories || [])].filter((cat, idx, arr) => idx === 0 || arr.findIndex(c => c.id === cat.id) === idx);
  }, [rawItems, filter_section.categories]);
  const filteredItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return rawItems.filter(item => {
      const matchesCategory = activeCategoryId === "all" || item.category_id === activeCategoryId;
      if (!searchQuery.trim()) {
        return matchesCategory;
      }
      const matchesSearch = (item.question || "").toLowerCase().includes(searchQuery.toLowerCase()) || getAnswerText(item.answer_blocks).toLowerCase().includes(searchQuery.toLowerCase()) || (item.category_label || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [rawItems, activeCategoryId, searchQuery]);

  // Grid layout helper - split filtered items into sections
  const {
    rowItems,
    gridLeftColItems,
    gridRightColItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const paginatedFiltered = filteredItems.slice(0, visibleCount);

    // First 4 items for the row
    const row = paginatedFiltered.slice(0, 4);

    // Remaining items split into 2 columns (3 per column)
    const remaining = paginatedFiltered.slice(4);
    const gridMidPoint = Math.ceil(remaining.length / 2);
    return {
      rowItems: row,
      gridLeftColItems: remaining.slice(0, gridMidPoint),
      gridRightColItems: remaining.slice(gridMidPoint)
    };
  }, [filteredItems, visibleCount]);

  // Pagination Logic
  const handleLoadMore = () => setVisibleCount(prev => prev + 10);
  const hasMoreItems = visibleCount < filteredItems.length;

  // Paginated items for display
  const paginatedItems = filteredItems.slice(0, visibleCount);
  if (Object.keys(pageData).length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "w-full min-h-screen bg-white"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "w-full bg-white font-sans flex flex-col items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_SubPageHero__WEBPACK_IMPORTED_MODULE_3__["default"], {
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/faq_hero_desktop.webp",
        srcMobile: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/faq_hero_mobile.webp",
        alt: "ShipX FAQ Banner"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_ParallaxSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("main", {
          className: `mx-auto relative ${_styles_themeGuide__WEBPACK_IMPORTED_MODULE_9__.themeGuide.paddingX} flex flex-col items-center w-full md:gap-y-8 gap-y-4 lg:-mt-6 -mt-18`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "w-full flex flex-col md:gap-y-4 gap-y-2 items-center text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_6__.Badge, {
              variant: "toolkit",
              size: "default",
              children: header_section.badge_text || "Frequently Asked Questions"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "w-full flex flex-col md:gap-y-4 gap-y-2 items-center text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_HighlightedHeading__WEBPACK_IMPORTED_MODULE_7__["default"], {
                text: `${header_section.title_prefix} ${header_section.title_suffix}`,
                highlight: header_section.title_suffix,
                className: "text-2xl 2xl:text-4xl font-semibold mt-2 text-center",
                highlightClass: "text-[#FF00E5]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                className: "flex items-center justify-center text-center mx-auto w-full font-['Inter'] font-normal text-[#63666D] opacity-90 text-sm leading-[1.125] max-w-[376px] md:text-base md:leading-5 md:max-w-[522px] lg:max-w-[822px] md:mb-0 mb-4",
                children: header_section.description
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_SearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
              value: searchQuery,
              onChange: e => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim() && activeCategoryId !== "all") {
                  setActiveCategoryId("all");
                }
              },
              onClear: () => setSearchQuery(""),
              placeholder: header_section.search_placeholder || "Start typing to find answers...",
              submitLabel: "Search",
              className: "w-full lg:w-[822px] lg:mx-auto md:w-xl md:mx-auto"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "w-full flex flex-col items-center gap-4 lg:py-5 md:py-4 py-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("h3", {
              className: "hidden md:inline lg:inline font-['Inter'] font-bold text-base leading-5 items-center text-center text-black",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: "md:hidden",
                children: filter_section.title || "Filter by:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: "hidden md:inline",
                children: filter_section.title || "Select a Category"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_ResponsiveFilterBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
              filters: categories,
              activeFilterId: activeCategoryId,
              onFilterChange: setActiveCategoryId
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "w-full flex flex-col gap-2 lg:px-40 md:px-20",
            children: filteredItems.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: "text-center py-16 text-gray-400",
              children: "No results found."
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
              children: [rowItems.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.Accordion, {
                className: "flex flex-col md:gap-5 gap-2 items-start w-full",
                defaultOpen: rowItems[0]?.id,
                children: rowItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionItem, {
                  value: item.id,
                  variant: "purple",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionTrigger, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                      className: "text-base md:text-lg",
                      children: item.question
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionContent, {
                    children: renderAnswerContent(item)
                  })]
                }, item.id))
              }), (gridLeftColItems.length > 0 || gridRightColItems.length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.Accordion, {
                className: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-5 gap-2 items-start w-full",
                defaultOpen: gridLeftColItems[0]?.id,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                  className: "flex flex-col gap-2",
                  children: gridLeftColItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionItem, {
                    value: item.id,
                    variant: "purple",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionTrigger, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "text-base md:text-lg",
                        children: item.question
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionContent, {
                      children: renderAnswerContent(item)
                    })]
                  }, item.id))
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                  className: "flex flex-col gap-2",
                  children: gridRightColItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionItem, {
                    value: item.id,
                    variant: "purple",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionTrigger, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                        className: "text-base md:text-lg",
                        children: item.question
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_Accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionContent, {
                      children: renderAnswerContent(item)
                    })]
                  }, item.id))
                })]
              }), hasMoreItems && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "flex justify-center mt-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_library_AppButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  onClick: handleLoadMore,
                  variant: "secondary",
                  text: accordion_section.load_more_button || "Load More",
                  withRightIcon: true,
                  rightIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    className: "size-5"
                  })
                })
              })]
            })
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQPage);

/***/ }),

/***/ "./src/scripts/components/ui/ParallaxSection.jsx":
/*!*******************************************************!*\
  !*** ./src/scripts/components/ui/ParallaxSection.jsx ***!
  \*******************************************************/
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

/***/ "./src/styles/badge.jsx":
/*!******************************!*\
  !*** ./src/styles/badge.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   badgeVariants: () => (/* binding */ badgeVariants)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)([
// Base Layout
"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
// Vertical alignment fixes for icons/dots
"align-middle gap-1.5"].join(" "), {
  variants: {
    variant: {
      // 1. Solid Pink "NEW" - Top
      new: "border-transparent bg-(--badge-pink) rounded text-white shadow-sm w-fit",
      // 2. Light Purple Badge
      secondary: "border-transparent bg-(--badge-gray-2) text-(--badge-text-dark) rounded w-fit",
      // 3. Soft Pink Toolkit Badge
      toolkit: "border-transparent bg-(--badge-gray) text-(--badge-pink) font-semibold text-md w-fit",
      // 4. International Express (Standard/Default - Solid Dark Blue)
      default: "border-transparent bg-(--badge-purple) text-white font-semibold text-md w-fit",
      // 5. Outline "NEW" - Bottom
      outline: "border-transparent bg-(--badge-gray-light) rounded text-(--badge-text-purple-light) w-fit",
      // Destructive (Standard error state)
      destructive: "border-transparent bg-red-500 text-white shadow-sm w-fit",
      // Affiliate Amilo
      affiliate: "border-transparent bg-(--badge-light-purple) text-(--badge-text-gray) font-light rounded w-fit",
      // Affiliate Orange
      affiliateOrange: "border-transparent bg-(--badge-orange) text-(--badge-text-gray) font-light rounded w-fit"
    },
    size: {
      sm: "px-2 py-1 text-xs",
      default: "px-4 py-1 text-base",
      lg: "px-6 py-3 text-base"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Badge({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(badgeVariants({
      variant,
      size
    }), className),
    ...props,
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [variant === "toolkit" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "h-2 w-2 rounded-full bg-(--badge-pink) mr-1"
    }), children]
  });
}


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

/***/ "./src/styles/search-bar.jsx":
/*!***********************************!*\
  !*** ./src/styles/search-bar.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchBarOuterVariants: () => (/* binding */ searchBarOuterVariants),
/* harmony export */   searchBarVariants: () => (/* binding */ searchBarVariants),
/* harmony export */   searchButtonVariants: () => (/* binding */ searchButtonVariants),
/* harmony export */   searchInputVariants: () => (/* binding */ searchInputVariants)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");


// 1. New: The Outer Gradient Wrapper
const searchBarOuterVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("flex flex-col justify-center items-start transition-all w-full", {
  variants: {
    variant: {
      default: "bg-[linear-gradient(135deg,rgba(255,230,255,0.05)_0%,rgba(170,0,255,0.15)_100%)] rounded-2xl",
      minimal: "bg-transparent"
    },
    size: {
      sm: "p-3 gap-2",
      default: "p-[16px] gap-[8px]",
      // Figma: padding 16px, gap 8px
      lg: "p-5 gap-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

// 2. Updated: The Inner White Input Box
const searchBarVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("flex flex-row items-center bg-white transition-all w-full box-border", {
  variants: {
    variant: {
      default: "border-b border-[#7F22FE] rounded-lg shadow-sm",
      // Figma: border-bottom purple
      minimal: "border border-gray-200 rounded-lg"
    },
    size: {
      sm: "h-[40px] p-1 gap-2",
      default: "h-[57px] p-[4px] gap-[8px]",
      // Figma: height ~57px, padding 4px
      lg: "h-[64px] p-2 gap-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const searchInputVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("grow w-full bg-transparent focus:outline-none transition-colors font-inter", {
  variants: {
    size: {
      sm: "text-sm placeholder:text-sm",
      default: "text-[16px] placeholder:text-[16px] leading-[20px]",
      // Figma: 16px Inter
      lg: "text-lg placeholder:text-lg"
    }
  },
  defaultVariants: {
    size: "default"
  }
});

// 3. Updated: The Purple Submit Button
const searchButtonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300", {
  variants: {
    type: {
      clear: "hover:opacity-60 text-[#99A1AF] p-2",
      submit:
      // Figma: Complex gradient + Specific Shadow
      "bg-[linear-gradient(103.43deg,rgba(255,0,230,0)_9.78%,rgba(255,0,229,0.75)_84.11%),#4F378A] shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_-2px_-2px_4px_#9A00AE,inset_0px_0px_4px_rgba(255,88,238,0.6)] text-white font-medium hover:brightness-110 active:scale-95"
    },
    size: {
      sm: "h-[32px] px-3 rounded-md",
      default: "h-[48px] px-4 rounded-lg min-w-[85px]",
      // Figma: height ~48px, width 85px
      lg: "h-[56px] px-6 rounded-lg"
    }
  },
  defaultVariants: {
    type: "submit",
    size: "default"
  }
});

/***/ }),

/***/ "./src/styles/sub-page-hero.jsx":
/*!**************************************!*\
  !*** ./src/styles/sub-page-hero.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   heroVariants: () => (/* binding */ heroVariants)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");

const heroVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)(
// Base styles applied to all variants
"relative w-full bg-[#F7F7F7] overflow-hidden", {
  variants: {
    // Variant: Controls the height/size of the hero section
    size: {
      default: "h-[242px] md:h-[314px] xl:h-[350px]",
      // Responsive sizing from Figma
      sm: "h-[200px]",
      lg: "h-[450px]",
      toolsHeroMobile: "h-fit md:h-[300px]",
      fullscreen: "h-screen"
    },
    // Variant: Controls how the image is positioned
    align: {
      center: "object-center",
      top: "object-top",
      bottom: "object-bottom"
    }
  },
  defaultVariants: {
    size: "default",
    align: "center"
  }
});

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
//# sourceMappingURL=src_scripts_components_pages_frequently_asked_questions_FAQPage_jsx.js.map?ver=68a26800135dbc1e5644