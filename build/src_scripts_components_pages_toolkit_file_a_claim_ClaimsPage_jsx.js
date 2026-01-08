"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_toolkit_file_a_claim_ClaimsPage_jsx"],{

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

  // Extract current language (e.g. /vn/services → vn)
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLang = pathSegments[0];
  const handleTabClick = tab => {
    // 🟢 HOMEPAGE / LOCAL MODE
    if (onChange) {
      onChange(tab.id);
      return;
    }

    // 🔵 PAGE NAVIGATION MODE
    if (tab.path) {
      navigate(`/${currentLang}${tab.path}`);
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






const claimIllustration = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/file_a_claim.webp";
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
    className: "relative flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg max-w-[500px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
      src: claimIllustration,
      alt: "Shipment Tracker",
      className: "md:block hidden absolute top-0 -right-[200px] lg:w-[151px] md:w-[186px] object-contain pointer-events-none"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_input__WEBPACK_IMPORTED_MODULE_2__.Input, {
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






const hsCodeIllustration = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/hs_code_generator.webp";
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
    className: "relative flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg max-w-[500px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
      src: hsCodeIllustration,
      alt: "Shipment Tracker",
      className: "md:block hidden absolute ld:-top-15 md:top-0 lg:-right-[260px] md:-right-[200px] lg:w-[258px] md:w-[186px] object-contain pointer-events-none"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_input__WEBPACK_IMPORTED_MODULE_2__.Input, {
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






// Illustration URL

const trackerIllustration = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/shipment_tracker.webp";
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
    className: "relative flex flex-col max-w-[500px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
      src: trackerIllustration,
      alt: "Shipment Tracker",
      className: "md:block hidden absolute lg:-top-20 md:-top-12 lg:-right-80 md:-right-[200px] lg:w-[307px] md:w-[186px] object-contain pointer-events-none"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
      htmlFor: "trackingNumber",
      className: "xl:text-start md:text-start text-center text-sm font-medium text-white/90 font-['Inter'] mb-2",
      children: t("trade_and_logistics_toolkit_section.tools.shipment_tracker.form.label")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-row items-center p-1 gap-2 bg-white rounded-xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]",
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




// CDN URLs for icons

const shipmentTrackerIcon = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/shipment_tracker.svg";
const hsCodeGeneratorIcon = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/hs_code_generator.svg";
const fileAClaimIcon = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/file_a_claim.svg";
const TOOLKIT_TABS = [{
  id: "shipment-tracker",
  path: "/shipment-tracker",
  // 🔑 i18n bridge key
  i18nKey: "shipment_tracker",
  // 🧩 Behavior
  Form: _forms_TrackerForm__WEBPACK_IMPORTED_MODULE_0__["default"],
  // 🎨 UI
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

/***/ "./src/scripts/components/pages/toolkit/file_a_claim/ClaimSubmissionModal.jsx":
/*!************************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/file_a_claim/ClaimSubmissionModal.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/copy.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);




const ClaimSubmissionModal = ({
  isOpen,
  onClose,
  status = "success",
  claimId,
  message
}) => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
  const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Handle ESC key to close modal
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleEscKey = e => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      return () => {
        document.removeEventListener("keydown", handleEscKey);
      };
    }
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const handleCopySuccess = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };
  const copyToClipboard = () => {
    if (!claimId) return;

    // 1. Try the modern Clipboard API (Works in HTTPS/Secure Contexts)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(claimId).then(() => handleCopySuccess()).catch(() => fallbackCopyTextToClipboard(claimId));
    } else {
      // 2. Fallback for non-secure environments (HTTP/Localhost)
      fallbackCopyTextToClipboard(claimId);
    }
  };
  const fallbackCopyTextToClipboard = text => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // Ensure textarea is not visible but part of the DOM
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (successful) {
        handleCopySuccess();
      } else {
        console.error("Fallback: Copying text command failed");
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
  };
  const isSuccess = status === "success";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center bg-[#4F378A]/20 justify-center backdrop-blur-xs p-[4vw] md:p-[1vw] animate-in fade-in duration-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "bg-white rounded-[6vw] md:rounded-[1.5vw] shadow-[0px_4px_25px_0px_#FF00E54D] w-[90vw] md:w-[35vw] p-[8vw] md:p-[2vw] relative flex flex-col items-center text-center transform transition-all scale-100",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        onClick: onClose,
        className: "absolute top-[4vw] right-[4vw] md:top-[1.5vw] md:right-[1.5vw] text-gray-400 hover:text-gray-600 transition-colors",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw] hover:cursor-pointer"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: `w-[16vw] h-[16vw] md:w-[4vw] md:h-[4vw] rounded-full flex items-center justify-center mb-[6vw] md:mb-[1.5vw] ${isSuccess ? "bg-green-100" : "bg-red-100"}`,
        children: isSuccess ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] text-green-500"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw] text-red-500"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
        className: "font-bold text-gray-800 mb-[2vw] md:mb-[0.5vw] text-[6vw] md:text-[1.5vw]",
        children: isSuccess ? t("file_a_claim.submission_modal.success.title") : t("file_a_claim.submission_modal.error.title")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
        className: "font-bold text-gray-800 mb-[4vw] md:mb-[1vw] text-[5vw] md:text-[1.2vw]",
        children: isSuccess ? t("file_a_claim.submission_modal.success.subtitle") : message || t("file_a_claim.submission_modal.error.defaultSubtitle")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "text-gray-500 mb-[8vw] md:mb-[2vw] px-[4vw] md:px-[1vw] leading-relaxed text-[3.5vw] md:text-[0.9vw]",
        children: isSuccess ? t("file_a_claim.submission_modal.success.description") : t("file_a_claim.submission_modal.error.description")
      }), isSuccess && claimId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "w-full mb-[6vw] md:mb-[1.5vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "font-bold text-gray-700 mb-[2vw] md:mb-[0.5vw] text-[3.5vw] md:text-[0.9vw]",
          children: t("file_a_claim.submission_modal.success.referenceId.label")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "bg-[#F3F1FF] border border-[#E0D4FC] rounded-[3vw] md:rounded-[0.8vw] p-[4vw] md:p-[1vw] flex items-center justify-center gap-[3vw] md:gap-[0.8vw] group relative cursor-pointer hover:bg-[#ECE5FF] transition-colors",
          onClick: copyToClipboard,
          title: t("file_a_claim.submission_modal.success.referenceId.accessibility.copyTitle"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "font-extrabold text-[#99008A] tracking-wider break-all text-[4vw] md:text-[1.5vw]",
            children: claimId
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
            className: `transition-colors ${isCopied ? "text-green-600" : "text-gray-400 hover:text-[#99008A]"}`,
            children: isCopied ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]"
            })
          }), isCopied && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "absolute -top-[8vw] md:-top-[2vw] bg-black text-white py-[1vw] px-[2vw] md:py-[0.3vw] md:px-[0.6vw] rounded opacity-100 transition-opacity text-[3vw] md:text-[0.75vw]",
            children: t("file_a_claim.submission_modal.success.referenceId.feedback.copied")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "text-gray-400 italic mt-[4vw] md:mt-[1vw] mb-[2vw] md:mb-[0.5vw] leading-relaxed max-w-xs mx-auto text-[3vw] md:text-[0.75vw]",
          children: t("file_a_claim.submission_modal.success.referenceId.footerNote")
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimSubmissionModal);

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/file_a_claim/ClaimsForm.jsx":
/*!**************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/file_a_claim/ClaimsForm.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _ClaimSubmissionModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClaimSubmissionModal */ "./src/scripts/components/pages/toolkit/file_a_claim/ClaimSubmissionModal.jsx");
/* harmony import */ var _FileAClaimToolTipError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileAClaimToolTipError */ "./src/scripts/components/pages/toolkit/file_a_claim/FileAClaimToolTipError.jsx");
/* harmony import */ var _library_AppButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../library/AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _styles_form_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../styles/form-styles */ "./src/styles/form-styles.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);




 // Adjust path
 // Adjust path
 // Adjust path


const ClaimsForm = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();

  // Define the initial state
  const initialFormState = {
    fullName: "",
    email: "",
    phone: "",
    phoneCode: "+63",
    role: "Sender",
    accountNumber: "",
    country: "",
    claimType: "",
    trackingNumber: "",
    description: ""
  };

  // State Management
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialFormState);
  const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [descriptionError, setDescriptionError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isFormSubmitted, setIsFormSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fieldErrors, setFieldErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    claimType: "",
    trackingNumber: ""
  });
  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [modalConfig, setModalConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    status: "success",
    claimId: "",
    message: ""
  });

  // Handle URL Params for pre-filling
  const trackingNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const initialTrackingNumber = searchParams.get("trackingNumber");
  const initialDescription = searchParams.get("description");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (initialTrackingNumber) {
      setFormData(prev => ({
        ...prev,
        trackingNumber: initialTrackingNumber,
        description: initialDescription || prev.description
      }));
      setTimeout(() => {
        trackingNumberRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 500);
    }
  }, [initialTrackingNumber, initialDescription]);

  // Handlers
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  const handleRoleChange = role => {
    setFormData(prev => ({
      ...prev,
      role
    }));
  };
  const mapClaimType = type => {
    const map = {
      lost: "Missing",
      damaged: "Damage",
      late: "Late",
      customs: "Customs"
    };
    return map[type] || "Other";
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsFormSubmitted(true);

    // --- VALIDATION START ---
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.claimType) newErrors.claimType = "Claim type is required";
    if (!formData.trackingNumber.trim()) {
      newErrors.trackingNumber = "Tracking number is required";
    } else if (formData.trackingNumber.trim().length < 8) {
      newErrors.trackingNumber = "Tracking number must be at least 8 characters";
    }
    if (formData.description.length < 25) {
      setDescriptionError(`Description is too short. Please add ${25 - formData.description.length} more characters.`);
    } else {
      setDescriptionError("");
    }
    if (Object.keys(newErrors).length > 0 || formData.description.length < 25) {
      setFieldErrors(newErrors);
      return;
    }
    setFieldErrors({});
    // --- VALIDATION END ---

    setIsSubmitting(true);
    const payload = {
      customerName: formData.fullName,
      customerEmail: formData.email,
      customerPhone: `${formData.phoneCode}${formData.phone}`,
      accountNumber: formData.role === "Sender" && formData.accountNumber ? formData.accountNumber : "N/A",
      claimantType: formData.role === "Sender" ? "shipper" : "receiver",
      country: formData.country,
      claimType: mapClaimType(formData.claimType),
      trackingNumber: formData.trackingNumber,
      description: formData.description
    };
    try {
      const response = await fetch("https://file-a-claim.replit.app/api/claims/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        result = null;
      }
      if (response.ok && result?.success !== false) {
        const backendReference = result?.referenceId || result?.reference_id;
        setModalConfig({
          status: "success",
          claimId: backendReference || "RECEIVED",
          message: "Claim submitted successfully."
        });
        setShowModal(true);
        setFormData(initialFormState);
      } else {
        let errorMessage;
        if (response.status === 400) {
          errorMessage = "Tracking number not found in our system.";
        } else {
          errorMessage = result?.details || result?.message || result?.error || "Submission failed. Please check your details.";
        }
        setModalConfig({
          status: "error",
          claimId: "",
          message: errorMessage
        });
        setShowModal(true);
      }
    } catch (error) {
      console.error("Network/System Error:", error);
      setModalConfig({
        status: "error",
        claimId: "",
        message: "Network error. Please try again later."
      });
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ClaimSubmissionModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isOpen: showModal,
      onClose: () => setShowModal(false),
      status: modalConfig.status,
      claimId: modalConfig.claimId,
      message: modalConfig.message
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("form", {
      onSubmit: handleSubmit,
      className: "w-full max-w-[854px] mx-auto",
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex flex-col md:flex-row gap-8 items-start justify-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsCardVariants)(), "flex-1"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsHeaderVariants)(),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsHeaderIconContainerVariants)(),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/person-laptop.svg",
                alt: "Personal Details",
                className: "w-[26px] h-[25px]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsHeaderTitleVariants)(),
                children: t("file_a_claim.form_section.personal_details.title")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsHeaderDescriptionVariants)(),
              children: t("file_a_claim.form_section.personal_details.description")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsLabelVariants)(),
              children: [t("file_a_claim.form_section.fields.full_name.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-[#E7000B]",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputContainerVariants)(),
              children: [isFormSubmitted && fieldErrors.fullName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FileAClaimToolTipError__WEBPACK_IMPORTED_MODULE_5__["default"], {
                message: fieldErrors.fullName
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "text",
                name: "fullName",
                placeholder: t("file_a_claim.form_section.fields.full_name.placeholder"),
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(),
                value: formData.fullName,
                onChange: handleChange
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsLabelVariants)(),
              children: [t("file_a_claim.form_section.fields.email.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-[#E7000B]",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputContainerVariants)(),
              children: [isFormSubmitted && fieldErrors.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FileAClaimToolTipError__WEBPACK_IMPORTED_MODULE_5__["default"], {
                message: fieldErrors.email
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "email",
                name: "email",
                placeholder: t("file_a_claim.form_section.fields.email.placeholder"),
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(),
                value: formData.email,
                onChange: handleChange
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsLabelVariants)(),
              children: [t("file_a_claim.form_section.fields.phone_number.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-[#E7000B]",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputContainerVariants)(),
              children: [isFormSubmitted && fieldErrors.phone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FileAClaimToolTipError__WEBPACK_IMPORTED_MODULE_5__["default"], {
                message: fieldErrors.phone
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "flex gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "text",
                  name: "phoneCode",
                  placeholder: "+123",
                  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(), "w-[61px] flex-shrink-0"),
                  value: formData.phoneCode,
                  onChange: handleChange
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "tel",
                  name: "phone",
                  placeholder: t("file_a_claim.form_section.fields.phone_number.placeholder"),
                  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(), "flex-1"),
                  value: formData.phone,
                  onChange: handleChange
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsLabelVariants)(),
              children: [t("file_a_claim.form_section.fields.claimant_role.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-[#E7000B]",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsTabSwitchVariants)(),
              children: ["Sender", "Receiver"].map(role => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                type: "button",
                onClick: () => handleRoleChange(role),
                className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsTabButtonVariants)({
                  isActive: formData.role === role
                })),
                children: role === "Sender" ? t("file_a_claim.form_section.fields.claimant_role.options.sender") : t("file_a_claim.form_section.fields.claimant_role.options.receiver")
              }, role))
            })]
          }), formData.role === "Sender" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsLabelVariants)(),
              children: t("file_a_claim.form_section.fields.account_number.label")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
              type: "text",
              name: "accountNumber",
              placeholder: t("file_a_claim.form_section.fields.account_number.placeholder"),
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(),
              value: formData.accountNumber,
              onChange: handleChange
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsCardVariants)(), "flex-1"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsHeaderVariants)(),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsHeaderIconContainerVariants)(),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/airplane.svg",
                alt: "Shipment Details",
                className: "w-[26px] h-[25px]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsHeaderTitleVariants)(),
                children: t("file_a_claim.form_section.shipment_details.title")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsHeaderDescriptionVariants)(),
              children: t("file_a_claim.form_section.shipment_details.description")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex flex-row gap-4 w-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsLabelVariants)(),
                children: [t("file_a_claim.form_section.fields.country.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "text-[#E7000B]",
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputContainerVariants)(),
                children: [isFormSubmitted && fieldErrors.country && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FileAClaimToolTipError__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  message: fieldErrors.country
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                  name: "country",
                  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(), "appearance-none cursor-pointer"),
                  value: formData.country,
                  onChange: handleChange,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "",
                    children: t("file_a_claim.form_section.fields.country.default_option")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "VN",
                    children: "Vietnam"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "MY",
                    children: "Malaysia"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "TH",
                    children: "Thailand"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "PH",
                    children: "Philippines"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "SG",
                    children: "Singapore"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "ID",
                    children: "Indonesia"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsLabelVariants)(),
                children: [t("file_a_claim.form_section.fields.claim_type.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "text-[#E7000B]",
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputContainerVariants)(),
                children: [isFormSubmitted && fieldErrors.claimType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FileAClaimToolTipError__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  message: fieldErrors.claimType
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                  name: "claimType",
                  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(), "appearance-none cursor-pointer"),
                  value: formData.claimType,
                  onChange: handleChange,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "",
                    children: t("file_a_claim.form_section.fields.claim_type.default_option")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "lost",
                    children: t("file_a_claim.form_section.fields.claim_type.options.lost")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "damaged",
                    children: t("file_a_claim.form_section.fields.claim_type.options.damaged")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                    value: "late",
                    children: t("file_a_claim.form_section.fields.claim_type.options.late")
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
              ref: trackingNumberRef,
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsLabelVariants)(),
              children: [t("file_a_claim.form_section.fields.tracking_number.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "text-[#E7000B]",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputContainerVariants)(),
              children: [isFormSubmitted && fieldErrors.trackingNumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FileAClaimToolTipError__WEBPACK_IMPORTED_MODULE_5__["default"], {
                message: fieldErrors.trackingNumber
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "text",
                name: "trackingNumber",
                placeholder: t("file_a_claim.form_section.fields.tracking_number.placeholder"),
                className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(),
                value: formData.trackingNumber,
                onChange: handleChange
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex flex-col grow",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "flex justify-between items-center mb-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                className: "text-[#1E2939] font-semibold text-[16px] leading-[20px]",
                children: [t("file_a_claim.form_section.fields.description.label"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "text-[#E7000B]",
                  children: "*"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                className: `text-[12px] ${formData.description.length < 25 ? "text-red-500" : "text-green-600"}`,
                children: [formData.description.length, "/25"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputContainerVariants)(),
              children: [isFormSubmitted && descriptionError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FileAClaimToolTipError__WEBPACK_IMPORTED_MODULE_5__["default"], {
                message: descriptionError
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("textarea", {
                name: "description",
                placeholder: t("file_a_claim.form_section.fields.description.placeholder")
                // Height set to match Figma ~172px/200px
                ,
                className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_styles_form_styles__WEBPACK_IMPORTED_MODULE_7__.claimsInputVariants)(), "h-[172px] resize-none pt-3"),
                value: formData.description,
                onChange: e => {
                  handleChange(e);
                  if (descriptionError) setDescriptionError("");
                }
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "flex justify-center md:justify-end mt-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_AppButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
              as: "button",
              text: isSubmitting ? "Sending..." : t("file_a_claim.form_section.buttons.submit_claim"),
              style: "primary",
              disabled: isSubmitting,
              onClick: handleSubmit
            })
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimsForm);

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/file_a_claim/ClaimsPage.jsx":
/*!**************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/file_a_claim/ClaimsPage.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/SEO */ "./src/scripts/components/ui/SEO.jsx");
/* harmony import */ var _library_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../library/ToolsHeroSection */ "./src/scripts/components/library/ToolsHeroSection.jsx");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _ClaimsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClaimsForm */ "./src/scripts/components/pages/toolkit/file_a_claim/ClaimsForm.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const ClaimsPage = () => {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "File a Claim | ShipX",
      description: "Submit a claim for lost, damaged, or delayed shipments.",
      canonical: "https://shipx.com/file-a-claim",
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "w-screen min-h-screen flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_library_ToolsHeroSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        activePage: "file-a-claim"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col items-center justify-center w-full py-12 md:py-16 lg:py-20 px-4 md:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 w-full max-w-sm md:max-w-2xl lg:max-w-4xl mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col justify-center items-center lg:items-end gap-2 w-full lg:flex-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_3__.Badge, {
              variant: "toolkit",
              size: "default",
              children: t("file_a_claim.header_section.badge_text")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
              className: "font-['Inter'] font-semibold text-[28px] leading-8 lg:text-[32px] lg:leading-10 text-[#1E2939] opacity-90 tracking-[-1px] text-center lg:text-right w-full",
              children: t("file_a_claim.header_section.title")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex flex-col justify-center items-center lg:items-start w-full lg:flex-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "font-['Inter'] font-normal text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px] text-[#4D525C] lg:text-[#63666D] opacity-90 text-center lg:text-left w-full",
              children: t("file_a_claim.header_section.description")
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ClaimsForm__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClaimsPage);

/***/ }),

/***/ "./src/scripts/components/pages/toolkit/file_a_claim/FileAClaimToolTipError.jsx":
/*!**************************************************************************************!*\
  !*** ./src/scripts/components/pages/toolkit/file_a_claim/FileAClaimToolTipError.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileAClaimToolTipError)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function FileAClaimToolTipError({
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

/***/ "./src/styles/form-styles.jsx":
/*!************************************!*\
  !*** ./src/styles/form-styles.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   claimsCardVariants: () => (/* binding */ claimsCardVariants),
/* harmony export */   claimsHeaderDescriptionVariants: () => (/* binding */ claimsHeaderDescriptionVariants),
/* harmony export */   claimsHeaderIconContainerVariants: () => (/* binding */ claimsHeaderIconContainerVariants),
/* harmony export */   claimsHeaderTitleVariants: () => (/* binding */ claimsHeaderTitleVariants),
/* harmony export */   claimsHeaderVariants: () => (/* binding */ claimsHeaderVariants),
/* harmony export */   claimsInputContainerVariants: () => (/* binding */ claimsInputContainerVariants),
/* harmony export */   claimsInputVariants: () => (/* binding */ claimsInputVariants),
/* harmony export */   claimsLabelVariants: () => (/* binding */ claimsLabelVariants),
/* harmony export */   claimsSubmitButtonVariants: () => (/* binding */ claimsSubmitButtonVariants),
/* harmony export */   claimsTabButtonVariants: () => (/* binding */ claimsTabButtonVariants),
/* harmony export */   claimsTabSwitchVariants: () => (/* binding */ claimsTabSwitchVariants),
/* harmony export */   inputGroupVariants: () => (/* binding */ inputGroupVariants),
/* harmony export */   inputVariants: () => (/* binding */ inputVariants),
/* harmony export */   labelVariants: () => (/* binding */ labelVariants)
/* harmony export */ });
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");


// 1. Input & Textarea Styles
const inputVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)(
// Base styles
["w-full px-[16px] py-[8px]", "bg-white rounded-[8px] border-b", "font-inter font-normal text-[16px] text-[#1E2939]", "placeholder:font-inter placeholder:italic placeholder:font-normal placeholder:text-[16px]", "focus:outline-none focus:ring-1 focus:ring-[#7F22FE]/20 transition-colors"].join(" "), {
  variants: {
    state: {
      default: "border-[#7F22FE] placeholder-[#99A1AF]",
      error: "border-red-500 placeholder-red-400"
    },
    resize: {
      none: "resize-none",
      default: ""
    }
  },
  defaultVariants: {
    state: "default",
    resize: "default"
  }
});

// 2. Label Styles
const labelVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("font-inter font-semibold text-[16px] leading-[20px] text-[#1E2939] flex items-center gap-[5px]");

// 3. Container Styles
const inputGroupVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("flex flex-col gap-[8px] flex-grow w-full");

// 4. Claims Form Label Styles
const claimsLabelVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("text-[#1E2939] font-semibold text-[16px] leading-[20px] mb-2 block");

// 5. Claims Form Input Styles
const claimsInputVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)(["w-full bg-white border-b border-[#7F22FE] rounded-lg px-4 py-2", "text-[16px] text-[#1E2939] placeholder-[#99A1AF]", "focus:outline-none focus:ring-2 focus:ring-[#7F22FE]/20 transition-all", "h-[36px] italic-placeholder"].join(" "));

// 6. Claims Form Input Container Styles
const claimsInputContainerVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("relative w-full");

// 7. Claims Form Card Styles
const claimsCardVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)(["flex flex-col p-4 gap-4 w-full rounded-2xl", "bg-gradient-to-br from-[#FFE6FF]/5 to-[#AA00FF]/5", "border border-white/50 shadow-sm"].join(" "));

// 8. Claims Form Header Styles
const claimsHeaderVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("flex flex-col gap-2 mb-2");

// 9. Claims Form Header Title Styles
const claimsHeaderTitleVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("text-[#FF00E5] font-bold text-[20px] leading-[24px]");

// 10. Claims Form Header Description Styles
const claimsHeaderDescriptionVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("text-[#4D525C] text-[14px] leading-[16px]");

// 11. Claims Form Header Icon Container
const claimsHeaderIconContainerVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)("flex items-center gap-2");

// 12. Claims Form Tab Switch Styles
const claimsTabSwitchVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)(["flex items-center p-2 gap-2 bg-transparent rounded-lg", "shadow-[inset_1px_1px_2px_rgba(20,0,99,0.45)] h-[52px]"].join(" "));

// 13. Claims Form Tab Button Styles
const claimsTabButtonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)(["flex-1 h-[36px] rounded-lg flex items-center justify-center gap-2", "text-[16px] font-normal transition-all duration-300 cursor-pointer"].join(" "), {
  variants: {
    isActive: {
      true: ["bg-[#CC00B7] text-white font-semibold", "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55)]"].join(" "),
      false: "text-[#1E2939] hover:bg-black/5"
    }
  },
  defaultVariants: {
    isActive: false
  }
});

// 14. Claims Form Submit Button Styles
const claimsSubmitButtonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_0__.cva)(["flex items-center justify-center px-4 py-2 gap-2", "h-[36px] rounded-lg text-white font-medium text-[16px]", "shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_-2px_-2px_4px_#9A00AE,inset_0px_0px_4px_rgba(255,88,238,0.6)]", "bg-[linear-gradient(103.43deg,rgba(255,0,230,0)_9.78%,rgba(255,0,229,0.75)_84.11%),#4F378A]", "hover:opacity-90 transition-opacity disabled:opacity-70"].join(" "));


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
  const baseClasses = (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("rounded-lg border-b border-[#7F22FE] bg-white placeholder:text-[#99A1AF] italic font-normal text-[#99A1AF] px-4 py-2.5 outline-none transition-all", !disableFocusRing && "focus:ring-1 focus:ring-[#7F22FE]/20");
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
  inputPlaceholder: "placeholder:text-placeholder text-placeholder italic text-base placeholder:italic md:text-sm",
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
//# sourceMappingURL=src_scripts_components_pages_toolkit_file_a_claim_ClaimsPage_jsx.js.map?ver=ca3824e53150c0b905cf