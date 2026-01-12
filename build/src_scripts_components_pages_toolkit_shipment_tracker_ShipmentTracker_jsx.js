"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_toolkit_shipment_tracker_ShipmentTracker_jsx"],{

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
  // New prop to control scroll behavior (passed to SmartNavLink)
  // Options: 'top', 'center', 'bottom'
  scrollAlign,
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

  // If 'to' is present, render as a SmartNavLink inside a Button (asChild)
  if (to) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styles_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
      asChild: true,
      variant: style,
      size: size,
      className: className,
      ...rest,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
        to: to,
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_2__.cn)(appButtonStyles.smartNavLink)
        // Pass the new prop down to the link component
        ,
        scrollAlign: scrollAlign,
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

/***/ "./src/scripts/components/library/TabSwitcher.jsx":
/*!********************************************************!*\
  !*** ./src/scripts/components/library/TabSwitcher.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabSwitcher)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/button */ "./src/styles/button.jsx");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// Define your supported languages here to match i18n.js

const SUPPORTED_LANGS = ["en", "vn", "my", "ind", "thai"];
function TabSwitcher({
  tabs,
  activeTab,
  onChange,
  containerBg,
  activeTabBg,
  border = true,
  borderColor = "white/20"
}) {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const handleTabClick = tab => {
    // 🟢 HOMEPAGE / LOCAL MODE
    if (onChange) {
      onChange(tab.id);
      return;
    }

    // 🔵 PAGE NAVIGATION MODE
    if (tab.path) {
      const pathSegments = pathname.split("/").filter(Boolean);
      const firstSegment = pathSegments[0];

      // Check if the first segment is a valid language
      const isLangPrefix = SUPPORTED_LANGS.includes(firstSegment);

      // LOGIC:
      // If we are currently in a language path (e.g., /vn/...), keep the language.
      // If we are not (e.g., /shipment-tracker), just go to the root path (e.g., /hs-code-generator).
      const finalPath = isLangPrefix ? `/${firstSegment}${tab.path}` : tab.path;
      navigate(finalPath);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex flex-row items-center p-2 gap-2 w-fit", "backdrop-blur-xl rounded-xl", border && `border border-${borderColor}`, "max-md:max-w-[332px] max-md:h-[103px]", !containerBg && "bg-[rgba(245,243,255,0.12)]"),
    style: {
      backgroundColor: containerBg
    },
    children: tabs.map(tab => {
      const isActive = activeTab === tab.id;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: () => handleTabClick(tab),
        variant: isActive ? "tabActive" : "tabInactive",
        style: {
          backgroundColor: isActive && activeTabBg ? activeTabBg : undefined
        },
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_3__.themeGuide.toolsHeroDescription, "flex-1 h-9 px-4 py-2 gap-2 rounded-lg transition-all duration-200 cursor-pointer", "flex items-center justify-center", "max-md:flex-col max-md:flex-none max-md:w-[100px] max-md:h-[87px]"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "flex items-center justify-center w-6 h-6 shrink-0",
          children: tab.icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("max-md:whitespace-pre-line whitespace-nowrap", isActive ? "text-white" : "text-white/90"),
          children: tab.label
        })]
      }, tab.id);
    })
  });
}

/***/ }),

/***/ "./src/scripts/components/library/ToolsHeroSection.jsx":
/*!*************************************************************!*\
  !*** ./src/scripts/components/library/ToolsHeroSection.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _TabSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabSwitcher */ "./src/scripts/components/library/TabSwitcher.jsx");
/* harmony import */ var _pages_homepage_ToolkitSection_tabs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/homepage/ToolkitSection/tabs.config */ "./src/scripts/components/pages/homepage/ToolkitSection/tabs.config.js");
/* harmony import */ var _pages_homepage_ToolkitSection_toolkitTabs_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/homepage/ToolkitSection/toolkitTabs.i18n */ "./src/scripts/components/pages/homepage/ToolkitSection/toolkitTabs.i18n.js");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const ToolsHeroSection = ({
  activePage
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const translatedTabs = (0,_pages_homepage_ToolkitSection_toolkitTabs_i18n__WEBPACK_IMPORTED_MODULE_3__.getTranslatedToolkitTabs)(t);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
    className: "relative w-full overflow-hidden flex items-center justify-center",
    style: {
      background: "linear-gradient(180deg, #4F378A 0%, #66005C 159.37%)",
      minHeight: "350px"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_5__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.paddingX, "relative z-10 w-full flex flex-col items-center lg:items-start"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 grow w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex flex-col items-center md:items-start gap-2 w-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.toolsHeroTitle,
            children: t("shipment_tracker.hero_section.title")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_5__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.toolsHeroDescription, "md:text-start text-center lg:max-w-[608px] md:max-w-[420px]"),
            children: t("shipment_tracker.hero_section.description")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "flex justify-center md:justify-start w-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_TabSwitcher__WEBPACK_IMPORTED_MODULE_1__["default"], {
            tabs: translatedTabs,
            activeTab: activePage,
            containerBg: "rgba(35, 22, 111, 0.7)",
            border: false
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "hidden md:block absolute lg:right-[15vw] md:right-0 lg:top-[7.5vw] md:top-[13vw] -translate-y-1/2 -z-20 pointer-events-none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "absolute lg:left-0 lg:top-[-15vw] w-[800px] h-[800px] bg-[#FF00E5] opacity-20 blur-3xl rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/tools_page/toolkit_hero_section_image_desktop.webp",
          alt: "Logistic Tools",
          className: "hidden lg:block relative w-full h-full object-contain scale-90"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/tools_page/toolkit_hero_section_image_mobile.webp",
          alt: "Logistic Tools",
          className: "block lg:hidden relative w-full h-full object-contain scale-110"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolsHeroSection);

/***/ }),

/***/ "./src/scripts/components/pages/homepage/ToolkitSection/forms/ClaimForm.jsx":
/*!**********************************************************************************!*\
  !*** ./src/scripts/components/pages/homepage/ToolkitSection/forms/ClaimForm.jsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClaimForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../styles/button */ "./src/styles/button.jsx");
/* harmony import */ var _styles_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../styles/input */ "./src/styles/input.jsx");
/* harmony import */ var _hooks_useLangNavigate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hooks/useLangNavigate */ "./src/scripts/hooks/useLangNavigate.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function ClaimForm() {
  const [tracking, setTracking] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const navigateWithLang = (0,_hooks_useLangNavigate__WEBPACK_IMPORTED_MODULE_3__.useLangNavigate)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const handleClaimForm = () => {
    navigateWithLang(`/file-a-claim?trackingNumber=${encodeURIComponent(tracking)}&description=${encodeURIComponent(description)}`);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "relative flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg min-w-[500px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_input__WEBPACK_IMPORTED_MODULE_2__.Input, {
      value: tracking,
      onChange: e => setTracking(e.target.value),
      placeholder: t("trade_and_logistics_toolkit_section.tools.file_a_claim.form.placeholder_1")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_input__WEBPACK_IMPORTED_MODULE_2__.Input, {
      multiline: true,
      value: description,
      onChange: e => setDescription(e.target.value),
      placeholder: t("trade_and_logistics_toolkit_section.tools.file_a_claim.form.placeholder_2")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-row justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: `flex justify-end text-sm ${description.length >= 25 ? "text-green-600" : "text-red-500"}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          children: [description.length, "/25"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "\xA0characters remaining"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "primary",
        className: "self-end",
        disabled: description.length < 25 || tracking < 2,
        onClick: handleClaimForm,
        children: t("trade_and_logistics_toolkit_section.tools.file_a_claim.form.submit_button")
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/pages/homepage/ToolkitSection/forms/HsCodeForm.jsx":
/*!***********************************************************************************!*\
  !*** ./src/scripts/components/pages/homepage/ToolkitSection/forms/HsCodeForm.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HsCodeForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../styles/button */ "./src/styles/button.jsx");
/* harmony import */ var _styles_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../styles/input */ "./src/styles/input.jsx");
/* harmony import */ var _hooks_useLangNavigate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hooks/useLangNavigate */ "./src/scripts/hooks/useLangNavigate.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function HsCodeForm() {
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const navigateWithLang = (0,_hooks_useLangNavigate__WEBPACK_IMPORTED_MODULE_3__.useLangNavigate)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const handleHsCodeGenerator = () => {
    navigateWithLang(`/hs-code-generator?productDescription=${encodeURIComponent(value)}`);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "relative flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg min-w-[500px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_input__WEBPACK_IMPORTED_MODULE_2__.Input, {
      multiline: true,
      value: value,
      onChange: e => setValue(e.target.value),
      placeholder: t("trade_and_logistics_toolkit_section.tools.hs_code_generator.form.placeholder")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-row justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: `flex justify-end text-sm ${value.length >= 15 ? "text-green-600" : "text-red-500"}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          children: [value.length, "/15"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "\xA0characters remaining"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "primary",
        disabled: value.length < 15,
        className: "self-end",
        onClick: handleHsCodeGenerator,
        children: t("trade_and_logistics_toolkit_section.tools.hs_code_generator.form.submit_button")
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/pages/homepage/ToolkitSection/forms/TrackerForm.jsx":
/*!************************************************************************************!*\
  !*** ./src/scripts/components/pages/homepage/ToolkitSection/forms/TrackerForm.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrackerForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../styles/button */ "./src/styles/button.jsx");
/* harmony import */ var _hooks_useLangNavigate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hooks/useLangNavigate */ "./src/scripts/hooks/useLangNavigate.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function TrackerForm() {
  const [trackingNumber, setTrackingNumber] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const navigateWithLang = (0,_hooks_useLangNavigate__WEBPACK_IMPORTED_MODULE_3__.useLangNavigate)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const handleTrackShipment = () => {
    if (!trackingNumber.trim()) return;
    navigateWithLang(`/shipment-tracker?trackingNumber=${encodeURIComponent(trackingNumber)}&autosubmit=true`);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") handleTrackShipment();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "flex flex-col max-w-[600px] md:items-start items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
      htmlFor: "trackingNumber",
      className: "xl:text-start md:text-start text-center text-sm font-medium text-white/90 font-['Inter'] mb-2",
      children: t("trade_and_logistics_toolkit_section.tools.shipment_tracker.form.label")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-row w-full items-center p-1 gap-2 bg-white rounded-xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] max-w-[590px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex items-center gap-2 pl-3 grow",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "text-[#63666D]",
          size: 20
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          id: "trackingNumber",
          type: "text",
          placeholder: t("trade_and_logistics_toolkit_section.tools.shipment_tracker.form.placeholder"),
          value: trackingNumber,
          onChange: e => setTrackingNumber(e.target.value),
          onKeyDown: handleKeyPress,
          className: "w-full py-2 outline-none text-[#1E2939] placeholder-[#99A1AF] font-['Inter'] text-[16px]"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: handleTrackShipment,
        className: "w-[151px] h-[42px]",
        disabled: trackingNumber.length < 2,
        children: t("trade_and_logistics_toolkit_section.tools.shipment_tracker.form.submit_button")
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/pages/homepage/ToolkitSection/tabs.config.js":
/*!*****************************************************************************!*\
  !*** ./src/scripts/components/pages/homepage/ToolkitSection/tabs.config.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOOLKIT_TABS: () => (/* binding */ TOOLKIT_TABS)
/* harmony export */ });
/* harmony import */ var _forms_TrackerForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/TrackerForm */ "./src/scripts/components/pages/homepage/ToolkitSection/forms/TrackerForm.jsx");
/* harmony import */ var _forms_HsCodeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/HsCodeForm */ "./src/scripts/components/pages/homepage/ToolkitSection/forms/HsCodeForm.jsx");
/* harmony import */ var _forms_ClaimForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/ClaimForm */ "./src/scripts/components/pages/homepage/ToolkitSection/forms/ClaimForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// tabs.config.js




// --- CDN URLs for Icons ---

const shipmentTrackerIcon = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/shipment_tracker.svg";
const hsCodeGeneratorIcon = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/hs_code_generator.svg";
const fileAClaimIcon = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/file_a_claim.svg";

// --- CDN URLs for Illustrations (NEW) ---
const shipmentTrackerImg = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/shipment_tracker.png";
// ⚠️ Verify this file name exists in your assets
const hsCodeGeneratorImg = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/hs_code_generator.png";
// ⚠️ Verify this file name exists in your assets
const fileAClaimImg = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/file_a_claim.png";
const TOOLKIT_TABS = [{
  id: "shipment-tracker",
  path: "/shipment-tracker",
  i18nKey: "shipment_tracker",
  Form: _forms_TrackerForm__WEBPACK_IMPORTED_MODULE_0__["default"],
  // Add illustration here
  illustration: shipmentTrackerImg,
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
    src: shipmentTrackerIcon,
    alt: "Shipment Tracker",
    className: "w-full h-full object-contain"
  })
}, {
  id: "hs-code-generator",
  path: "/hs-code-generator",
  i18nKey: "hs_code_generator",
  Form: _forms_HsCodeForm__WEBPACK_IMPORTED_MODULE_1__["default"],
  // Add illustration here
  illustration: hsCodeGeneratorImg,
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
    src: hsCodeGeneratorIcon,
    alt: "HS Code Generator",
    className: "w-full h-full object-contain"
  })
}, {
  id: "file-a-claim",
  path: "/file-a-claim",
  i18nKey: "file_a_claim",
  Form: _forms_ClaimForm__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Add illustration here
  illustration: fileAClaimImg,
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
    src: fileAClaimIcon,
    alt: "File a Claim",
    className: "w-full h-full object-contain"
  })
}];

/***/ }),

/***/ "./src/scripts/components/pages/homepage/ToolkitSection/toolkitTabs.i18n.js":
/*!**********************************************************************************!*\
  !*** ./src/scripts/components/pages/homepage/ToolkitSection/toolkitTabs.i18n.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTranslatedToolkitTabs: () => (/* binding */ getTranslatedToolkitTabs)
/* harmony export */ });
/* harmony import */ var _tabs_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.config */ "./src/scripts/components/pages/homepage/ToolkitSection/tabs.config.js");
// toolkitTabs.i18n.js

const getTranslatedToolkitTabs = t => _tabs_config__WEBPACK_IMPORTED_MODULE_0__.TOOLKIT_TABS.map(tab => {
  const base = `trade_and_logistics_toolkit_section.tools.${tab.i18nKey}`;
  return {
    ...tab,
    label: t(`${base}.tab_name`),
    title: t(`${base}.title`),
    description: t(`${base}.description`),
    badge: t(`trade_and_logistics_toolkit_section.badge`)
  };
});

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/hs_code_generator/ToolTipError.jsx":
/*!*********************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/hs_code_generator/ToolTipError.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TooltipError)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TooltipError({
  message
}) {
  if (!message) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: " absolute left-0 md:-top-[2vw] -top-[7vw] animate-in fade-in slide-in-from-bottom-[1vw] duration-500 ",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: " relative flex items-center bg-red-500 text-white md:text-[0.7vw] text-[2.2vw] font-medium md:py-[0.25vw] py-[1.5vw] md:px-[0.5vw] px-[2.5vw] md:rounded-[0.5vw] rounded-[2vw] gap-1.5 whitespace-nowrap ",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
        className: " md:w-[1vw] w-[3vw] md:h-[1vw] h-[3vw] "
      }), message, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute top-full left-4 -translate-x-1/2 border-4 border-transparent border-t-red-500"
      })]
    })
  });
}

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/shipment_tracker/ShipmentTracker.jsx":
/*!***********************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/shipment_tracker/ShipmentTracker.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShipmentTrackerForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipmentTrackerForm */ "./src/scripts/components/pages/toolkit/shipment_tracker/ShipmentTrackerForm.jsx");
/* harmony import */ var _ShipmentTrackerAccordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipmentTrackerAccordion */ "./src/scripts/components/pages/toolkit/shipment_tracker/ShipmentTrackerAccordion.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _hooks_useShipment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useShipment */ "./src/scripts/hooks/useShipment.js");
/* harmony import */ var _library_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../library/ToolsHeroSection */ "./src/scripts/components/library/ToolsHeroSection.jsx");
/* harmony import */ var _library_AppButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../library/AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/SEO */ "./src/scripts/components/ui/SEO.jsx");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);














const UI_DELAY_MS = 500;
const TrackOrderSection = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: " flex flex-col justify-center lg:items-end items-center lg:w-160 md:w-180 md:mb-0 mb-[8vw] ",
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_2__.Badge, {
      variant: "toolkit",
      size: "default",
      children: t("shipment_tracker.track_order_section.badge_text")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("h2", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_12__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_11__.themeGuide.sectionHeading, "lg:mt-0 md:mt-2"),
      children: [t("shipment_tracker.track_order_section.title.regular"), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: "text-[#FF00E5]",
        children: t("shipment_tracker.track_order_section.title.highlighted")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_12__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_11__.themeGuide.sectionDescription, "lg:text-end text-center", "lg:mt-0 md:mt-6"),
      children: t("shipment_tracker.track_order_section.description")
    })]
  });
};
const ShipmentTracker = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const {
    shipmentData,
    trackingNumber,
    setShipmentData
  } = (0,_hooks_useShipment__WEBPACK_IMPORTED_MODULE_6__.useShipment)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();
  const urlTrackingNumber = searchParams.get("trackingNumber");
  const autoSubmit = searchParams.get("autosubmit") === "true";
  const accordionRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    if (!shipmentData?.errors && accordionRef.current) {
      setTimeout(() => {
        accordionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start" // Aligns the top of the element to the top of the viewport
        });
      }, UI_DELAY_MS);
    }
  }, [shipmentData]);
  const handleTrackAnotherShipment = () => {
    setTimeout(() => {
      setShipmentData(null);
    }, UI_DELAY_MS);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: t("seo.shipment_tracker_page.title"),
      description: t("seo.shipment_tracker_page.description"),
      canonical: t("seo.shipment_tracker_page.canonical"),
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "w-screen flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_library_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
        activePage: "shipment-tracker"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: " flex lg:flex-row flex-col gap-x-8 justify-center items-center md:mt-[5vw] mt-[10vw] md:px-0 px-[5vw] md:mb-[5vw] mb-[10vw] ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(TrackOrderSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "lg:mt-0 md:mt-6 mt-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ShipmentTrackerForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
            initialTrackingNumber: urlTrackingNumber,
            autoSubmit: autoSubmit
          })
        })]
      }), shipmentData?.statuses?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        ref: accordionRef,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: " flex flex-col md:gap-y-[3vw] gap-y-[8vw] justify-center items-center ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ShipmentTrackerAccordion__WEBPACK_IMPORTED_MODULE_1__["default"], {
            shipmentData: shipmentData,
            trackingNumber: trackingNumber,
            latestStatusHidden: shipmentData.statuses.length <= 3
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "shipment-tracker/#",
            end: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_library_AppButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
              onClick: handleTrackAnotherShipment,
              className: "w-fit md:mb-[5vw] mb-[10vw]",
              text: t("shipment_tracker.shipment_activity_section.track_another_shipment_button_text")
            })
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipmentTracker);

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/shipment_tracker/ShipmentTrackerAccordion.jsx":
/*!********************************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/shipment_tracker/ShipmentTrackerAccordion.jsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-tailwind/react */ "./node_modules/@material-tailwind/react/index.js");
/* harmony import */ var _material_tailwind_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StatusMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatusMap */ "./src/scripts/components/pages/toolkit/shipment_tracker/StatusMap.js");
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stepper */ "./src/scripts/components/pages/toolkit/shipment_tracker/Stepper.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





 // Import for the bottom notice


const STATUS_COLORS = {
  SUCCESS: "text-[#008236]",
  WARNING: "text-[#D08700]",
  DEFAULT: "text-[#1A1A1A]"
};
const ShipmentTrackerAccordion = ({
  shipmentData = [],
  trackingNumber = "SGL2510001808",
  latestStatusHidden = false
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const {
    statuses
  } = shipmentData;
  const handleOpen = value => setOpen(open === value ? 0 : value);
  const {
    steps,
    lastStatusLabel,
    statusColor,
    formattedDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!statuses || statuses.length === 0) {
      return {
        steps: [],
        lastStatusLabel: null,
        statusColor: STATUS_COLORS.DEFAULT,
        formattedDate: null
      };
    }
    const sorted = [...statuses].sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate));
    const latestStatusCode = sorted[0]?.statusCode;
    let color = STATUS_COLORS.DEFAULT;
    if (latestStatusCode === "SHIPMENT_DELIVERED") color = STATUS_COLORS.SUCCESS;
    return {
      steps: (0,_StatusMap__WEBPACK_IMPORTED_MODULE_2__.mapStatuses)(statuses, t),
      lastStatusLabel: (0,_StatusMap__WEBPACK_IMPORTED_MODULE_2__.getLastStatusLabel)(statuses, t),
      statusColor: color,
      formattedDate: (0,_StatusMap__WEBPACK_IMPORTED_MODULE_2__.formatShipmentDate)(statuses)
    };
  }, [statuses, t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "flex justify-center items-center md:w-[530px] w-[90vw] mx-auto",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__.Accordion, {
      open: open === 1,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)("border-none overflow-hidden", "bg-linear-to-br from-[#FFE6FF]/5 to-[#AA00FF]/5", "backdrop-blur-md opacity-90 rounded-[20px]"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__.AccordionHeader, {
        onClick: () => handleOpen(1),
        className: "border-none flex flex-col items-start p-6 md:p-8 md:pb-4 gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          className: "text-[#1A1A1A] font-semibold text-[16px] leading-5",
          children: [t("shipment_tracker.shipment_activity_section.accordion_header.tracking_number_label"), ":"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "text-[#FF00E5] font-semibold md:text-[32px] text-[28px] leading-tight tracking-tight",
          children: trackingNumber
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_tailwind_react__WEBPACK_IMPORTED_MODULE_0__.AccordionBody, {
        className: "p-0 flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "px-6 md:px-8 pb-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "text-[#1A1A1A] font-semibold text-[16px] leading-5",
            children: t("shipment_tracker.shipment_activity_section.accordion_header.shipment_activity_log_label")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "px-6 md:px-8 py-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Stepper__WEBPACK_IMPORTED_MODULE_3__["default"], {
            statuses: !shipmentData?.errors ? steps : []
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "flex flex-row items-center justify-center gap-2 p-4 md:p-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-row items-center gap-2 px-4 py-1 rounded-lg",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
              size: 20,
              className: "text-[#FF00E5] shrink-0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "text-[#4D525C] text-[14px] leading-tight font-normal",
              children: t("shipment_tracker.shipment_activity_section.accordion_body.local_time_notice")
            })]
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipmentTrackerAccordion);

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/shipment_tracker/ShipmentTrackerForm.jsx":
/*!***************************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/shipment_tracker/ShipmentTrackerForm.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hooks_useShipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useShipment */ "./src/scripts/hooks/useShipment.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var _hs_code_generator_ToolTipError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hs_code_generator/ToolTipError */ "./src/scripts/components/pages/toolkit/hs_code_generator/ToolTipError.jsx");
/* harmony import */ var _library_AppButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../library/AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _styles_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../styles/input */ "./src/styles/input.jsx");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











const ShipmentTrackerForm = ({
  initialTrackingNumber,
  autoSubmit = false
}) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isSubmitted
    },
    reset,
    clearErrors,
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  const {
    shipmentData,
    setShipmentData,
    setTrackingNumber
  } = (0,_hooks_useShipment__WEBPACK_IMPORTED_MODULE_2__.useShipment)();
  const displayError = errors.trackingNumber?.message || shipmentData?.errors?.[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (initialTrackingNumber && autoSubmit) {
      setValue("trackingNumber", initialTrackingNumber);
      handleSubmit(onSubmit)();
    }
  }, [initialTrackingNumber, autoSubmit, setValue, handleSubmit]);
  const onSubmit = async data => {
    const trackingNumber = data.trackingNumber;
    setTrackingNumber(trackingNumber);
    try {
      const response = await fetch(`https://shipx.asia/wp-json/shipx/v1/track/${trackingNumber}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ae6fkmMv7nw6A-pBqgocXN6BNn3pdfiesJf-hgOeJJJWDFDmLvkFxvzUJWRLw6Rw`,
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        setShipmentData(errorData);
        return;
      }
      const result = await response.json();
      setShipmentData(result);
      reset();
    } catch (error) {
      setShipmentData({
        errors: ["An error occurred. Please try again."]
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    className: "w-full max-w-[640px]",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__.cn)("flex flex-col justify-center items-start p-4 gap-2", "w-full h-auto min-h-[116px]", "bg-linear-to-br from-[#FFE6FF]/5 to-[#AA00FF]/5", "backdrop-blur-md rounded-2xl"),
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
        className: _styles_themeGuide__WEBPACK_IMPORTED_MODULE_9__.themeGuide.inputLabel,
        htmlFor: "trackingNumber",
        children: t("shipment_tracker.track_order_section.form.label")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "relative flex flex-row items-center p-1 gap-2 w-full bg-white border-b border-[#7F22FE] rounded-lg",
        children: [isSubmitted && displayError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_hs_code_generator_ToolTipError__WEBPACK_IMPORTED_MODULE_5__["default"], {
          message: displayError
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex items-center gap-2 pl-3 grow min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "text-[#99A1AF] shrink-0",
            size: 20
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_styles_input__WEBPACK_IMPORTED_MODULE_7__.Input, {
            id: "trackingNumber",
            "aria-invalid": errors.trackingNumber ? "true" : "false",
            placeholder: "Enter tracking number (e.g., SX1234567890)",
            disableFocusRing: true,
            className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_9__.themeGuide.inputPlaceholder, "border-none h-10 shadow-none px-0 py-0 w-full", "md:min-w-[340px]",
            // Ensures space for long placeholder on desktop
            errors.trackingNumber && "placeholder-red-500"),
            ...register("trackingNumber", {
              required: "Tracking number is required",
              pattern: {
                value: /^[A-Za-z0-9]{2,20}$/,
                message: "Please enter a valid tracking number"
              },
              validate: value => {
                if (/\s/.test(value)) return "Tracking number cannot contain spaces";
                return true;
              },
              onChange: () => {
                clearErrors("trackingNumber");
                if (shipmentData?.errors) setShipmentData(null);
              }
            }),
            autoComplete: "off"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_library_AppButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "submit",
          disabled: isSubmitting,
          style: "primary",
          text: isSubmitting ? t("shipment_tracker.track_order_section.form.submitting") : t("shipment_tracker.track_order_section.form.submit_button")
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipmentTrackerForm);

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/shipment_tracker/StatusMap.js":
/*!****************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/shipment_tracker/StatusMap.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatShipmentDate: () => (/* binding */ formatShipmentDate),
/* harmony export */   getLastStatusLabel: () => (/* binding */ getLastStatusLabel),
/* harmony export */   mapStatuses: () => (/* binding */ mapStatuses)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/constants */ "./src/scripts/utils/constants.js");


function mapStatuses(statuses, t = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t) {
  if (!Array.isArray(statuses)) return [];
  const sorted = [...statuses].sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate));
  return sorted.map((step, i) => {
    let state = "completed";
    if (i == 0 && step.statusCode !== "SHIPMENT_DELIVERED") {
      state = "active";
    }
    return {
      ...step,
      label: t(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATUS_I18N_KEYS[step.statusCode] || step.statusCode),
      state
    };
  });
}
function getLastStatusLabel(statuses, t) {
  if (!Array.isArray(statuses) || statuses.length === 0 || !t) return null;

  // Sort by date (Newest First) just to be safe
  const sorted = [...statuses].sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate));

  // Since we sorted Newest -> Oldest, the LATEST status is now at index 0
  const latestStatus = sorted[0];
  return t(`shipment_tracker.shipment_status_map.${latestStatus.statusCode.toLowerCase()}`);
}
const formatShipmentDate = statuses => {
  if (!statuses || statuses.length === 0) return "Date not available";

  // Create a shallow copy to avoid mutating the original array
  // Sort by updatedDate in ascending order (Oldest -> Newest)
  const sortedStatuses = [...statuses].sort((a, b) => new Date(a.updatedDate) - new Date(b.updatedDate));

  // Get the last item (most recent status)
  const latestStatus = sortedStatuses[sortedStatuses.length - 1];
  if (!latestStatus?.updatedDate) return "Date not available";
  const date = new Date(latestStatus.updatedDate);

  // Format: "Nov 22, 2025"
  const datePart = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  // Format: "04:45 PM"
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  return `${datePart} · ${timePart}`;
};

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/shipment_tracker/Stepper.jsx":
/*!***************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/shipment_tracker/Stepper.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stepper)
/* harmony export */ });
/* harmony import */ var _StatusMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusMap */ "./src/scripts/components/pages/toolkit/shipment_tracker/StatusMap.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Stepper({
  statuses = []
}) {
  const steps = (0,_StatusMap__WEBPACK_IMPORTED_MODULE_0__.mapStatuses)(statuses);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative w-full",
    children: [steps.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "absolute bg-[#008236] w-[1.5px] left-3 z-0",
      style: {
        top: "31px",
        bottom: "31px"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "flex flex-col gap-2.5 w-full",
      children: steps.map((step, index) => {
        const isFirst = index === 0;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex flex-row items-start gap-4 w-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex justify-center min-w-6 h-[62px] shrink-0 z-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("mt-[19px] flex items-center justify-center rounded-full border-2 bg-[#008236] border-[#008236]", "w-6 h-6 shrink-0"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "size-3.5 fill-white",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  d: "M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)("flex flex-col justify-center px-4 py-2 bg-white rounded-lg shadow-sm", "min-h-[62px] grow min-w-0", isFirst ? "opacity-100" : "opacity-40"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6", {
              className: "font-semibold text-[16px] leading-tight text-[#1E2939] break-words",
              children: step.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              className: "text-[14px] text-[#4D525C] font-normal mt-0.5 break-words",
              children: [new Date(step.updatedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              }), " ", "\xB7 ", step.location || "In Transit"]
            })]
          })]
        }, `step-row-${index}`);
      })
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/ui/SEO.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/components/ui/SEO.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website"
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const currentPath = location.pathname;
  const baseUrl = "https://shipx.asia";
  const canonicalUrl = canonical || `${baseUrl}${currentPath}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link", {
      rel: "canonical",
      href: canonicalUrl
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:type",
      content: ogType
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:url",
      content: canonicalUrl
    }), ogImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      property: "og:image",
      content: ogImage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:title",
      content: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:description",
      content: description
    }), ogImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
      name: "twitter:image",
      content: ogImage
    }), _utils_constants__WEBPACK_IMPORTED_MODULE_2__.hreflang.map(lang => {
      if (lang.key === "en") return null;
      const href = `${baseUrl}/${lang.key}${currentPath.replace(/^\/+/, "")}`;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link", {
        rel: "alternate",
        hrefLang: lang.key,
        href: href
      }, lang.key);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link", {
      rel: "alternate",
      hrefLang: "x-default",
      href: canonicalUrl
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

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
  onClick,
  // New prop: defaults to 'start' (top). Options: 'top', 'bottom', 'center', 'nearest'
  scrollAlign = "start"
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();

  // Prepend language prefix if not default
  const langPrefix = _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language !== "en" ? `/${_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language}` : "";
  let fullPath = to.startsWith("/") ? `${langPrefix}${to}` : `${langPrefix}/${to}`;

  // Remove double slashes if any
  fullPath = fullPath.replace(/\/+/g, "/");

  // Helper to map user-friendly terms to scrollIntoView API terms
  const getBlockAlign = align => {
    if (align === "top") return "start";
    if (align === "bottom") return "end";
    return align; // Returns 'center', 'nearest', 'start', or 'end' as is
  };
  const handleClick = e => {
    const [pathname, hash] = fullPath.split("#");
    const isSamePath = location.pathname === pathname;

    // If an external onClick handler is provided, execute it.
    if (onClick) {
      onClick(e);
    }
    if (hash) {
      e.preventDefault();
      const scrollOptions = {
        behavior: "smooth",
        block: getBlockAlign(scrollAlign)
      };
      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) target.scrollIntoView(scrollOptions);
        }, 300);
      } else {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView(scrollOptions);
      }
      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    } else {
      // Logic for non-hash links (scrolls to absolute top of page)
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

/***/ "./src/scripts/hooks/useLangNavigate.js":
/*!**********************************************!*\
  !*** ./src/scripts/hooks/useLangNavigate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLangNavigate: () => (/* binding */ useLangNavigate)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");


/**
 * Language-aware navigation helper
 * Automatically prefixes routes with `/:lang?`
 */
function useLangNavigate() {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
  const {
    lang
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useParams)();
  const navigateWithLang = (path, options) => {
    const basePath = lang ? `/${lang}` : "";
    navigate(`${basePath}${path}`, options);
  };
  return navigateWithLang;
}

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

/***/ "./src/styles/input.jsx":
/*!******************************!*\
  !*** ./src/styles/input.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Wrap with forwardRef so react-hook-form can attach its ref

const Input = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({
  className,
  multiline = false,
  disableFocusRing = false,
  ...props
}, ref) => {
  const baseClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("rounded-lg border-b border-[#7F22FE] bg-white placeholder:text-[#99A1AF] focus:not-italic italic font-normal text-[#99A1AF] px-4 py-2.5 outline-none transition-all", !disableFocusRing && "focus:ring-1 focus:ring-[#7F22FE]/20");
  if (multiline) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
      ref: ref,
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(baseClasses, "resize-none h-[110px] w-full", className),
      ...props
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
    ref: ref,
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(baseClasses, "h-[55px] w-full", className),
    ...props
  });
});
Input.displayName = "Input";


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
//# sourceMappingURL=src_scripts_components_pages_toolkit_shipment_tracker_ShipmentTracker_jsx.js.map?ver=91a9d8033497d875e6c1