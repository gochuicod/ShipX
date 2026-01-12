"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_Footer_jsx"],{

/***/ "./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeRefs: () => (/* binding */ composeRefs),
/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
// packages/react/compose-refs/src/compose-refs.tsx

function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-slot/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@radix-ui/react-slot/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root: () => (/* binding */ Slot),
/* harmony export */   Slot: () => (/* binding */ Slot),
/* harmony export */   Slottable: () => (/* binding */ Slottable),
/* harmony export */   createSlot: () => (/* binding */ createSlot),
/* harmony export */   createSlottable: () => (/* binding */ createSlottable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "./node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// src/slot.tsx



var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))[" use ".trim().toString()];
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null);
          return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
        props2.ref = forwardedRef ? (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__.composeRefs)(forwardedRef, childrenRef) : childrenRef;
      }
      return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, props2);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
  return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/class-variance-authority/dist/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/class-variance-authority/dist/index.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cva: () => (/* binding */ cva),
/* harmony export */   cx: () => (/* binding */ cx)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ 
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx__WEBPACK_IMPORTED_MODULE_0__.clsx;
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };



/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/calendar-days.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/calendar-days.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CalendarDays)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("calendar-days", __iconNode);


//# sourceMappingURL=calendar-days.js.map


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

/***/ "./src/scripts/components/Footer.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/components/Footer.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar-days.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var _icons_FooterIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/FooterIcons */ "./src/scripts/icons/FooterIcons.jsx");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var _components_library_AppButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/library/AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _components_library_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/library/Dropdown */ "./src/scripts/components/library/Dropdown.jsx");
/* harmony import */ var _components_library_LoginModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/library/LoginModal */ "./src/scripts/components/library/LoginModal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const ContactItem = ({
  icon: Icon,
  text,
  href,
  itemClass,
  iconClass
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", {
  className: `flex gap-[2vw] md:gap-[0.6vw] text-gray-600 ${itemClass}`,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Icon, {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)("shrink-0", iconClass)
  }), href ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
    href: href,
    className: _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.footerItem,
    children: text
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
    className: _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.footerItem,
    children: text
  })]
});
const FooterColumn = ({
  title,
  children,
  className
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
  className: `bg-white rounded-[10px] p-[5vw] md:p-[15px_20px] h-fit ${className}`,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
    className: _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.footerHeading + " mb-[3vw] md:mb-1",
    children: title
  }), children]
});
const FooterLinkList = ({
  links
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", {
  className: "space-y-[2vw] md:space-y-0",
  children: links.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      to: item.to,
      className: _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.footerItem,
      children: item.label
    })
  }, item.to))
});
const Footer = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(() => {
  const {
    t,
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const [selectedLanguage, setSelectedLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.languages[0]);
  const handleLanguageChange = async language => {
    setSelectedLanguage(language);
    try {
      await i18n.changeLanguage(language.key); // loads from CDN
      localStorage.setItem("lang", language.key);
      const segments = window.location.pathname.split("/").filter(Boolean);
      if (_utils_constants__WEBPACK_IMPORTED_MODULE_7__.languages.some(l => l.key === segments[0])) {
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
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const current = i18n.language || localStorage.getItem("lang") || "en";
    return _utils_constants__WEBPACK_IMPORTED_MODULE_7__.languages.find(language => language.key === current) || _utils_constants__WEBPACK_IMPORTED_MODULE_7__.languages[0];
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const currentLang = i18n.language || localStorage.getItem("lang") || "en";
    const matched = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.languages.find(lang => lang.key === currentLang);
    if (matched && matched.key !== selected.key) {
      setSelected(matched);
    }
  }, [i18n.language]);
  const linkColumns = {
    quickLinks: [{
      to: "/",
      label: t("footer.home")
    }, {
      to: "/#services",
      label: t("footer.services")
    }],
    toolkit: [{
      to: "/shipment-tracker",
      label: t("header.shipment_tracker")
    }, {
      to: "/hs-code-generator",
      label: t("header.hs_code_generator")
    }, {
      to: "/file-a-claim",
      label: t("header.file_a_claim")
    }],
    resources: [{
      to: "/blog",
      label: t("header.blogs")
    }, {
      to: "/frequently-asked-questions",
      label: t("header.faqs")
    }],
    legal: [{
      to: "/privacy-policy",
      label: t("footer.privacy_policy")
    }, {
      to: "/terms-and-conditions",
      label: t("footer.terms_and_conditions")
    }]
  };
  const contactItems = [{
    icon: _icons_FooterIcons__WEBPACK_IMPORTED_MODULE_5__.MailIcon,
    text: t("footer.reach_us_3"),
    href: `mailto:${t("footer.reach_us_3")}`,
    itemClass: "items-center",
    iconClass: _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.footerIcon
  }, {
    icon: _icons_FooterIcons__WEBPACK_IMPORTED_MODULE_5__.LocationIcon,
    text: t("footer.reach_us_4"),
    itemClass: "items-start",
    iconClass: _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.footerIcon
  }];
  const footerColumnData = [{
    id: "quickLinks",
    title: t("footer.quick_links"),
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FooterLinkList, {
      links: linkColumns.quickLinks
    })
  }, {
    id: "toolkitAndResources",
    isGroup: true,
    className: "md:col-start-2 xl:col-start-auto flex flex-col gap-[4vw] md:gap-4",
    items: [{
      id: "toolkit",
      title: t("header.toolkit"),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FooterLinkList, {
        links: linkColumns.toolkit
      })
    }, {
      id: "resources",
      title: t("header.resources"),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FooterLinkList, {
        links: linkColumns.resources
      })
    }]
  }, {
    id: "legalAndContact",
    isGroup: true,
    // THE SECRET SAUCE:
    // Mobile: flex-col gap-0 makes them touch.
    // Desktop: xl:contents makes the container invisible to the Grid.
    className: "md:col-start-3 xl:contents flex flex-col gap-0",
    items: [{
      id: "legal",
      title: "Legal",
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FooterLinkList, {
        links: linkColumns.legal
      })
    }, {
      id: "contact",
      title: t("footer.reach_us_1"),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", {
        className: "space-y-[3vw] md:space-y-[8.5px]",
        children: contactItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ContactItem, {
          ...item
        }, item.text))
      })
    }]
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: "md:pt-[15vw] pt-[60vw] xl:mt-0 mt-[20vw] relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: " absolute xl:top-[5vw] md:top-[-8vw] top-0 left-0 right-0 mx-auto xl:w-[80vw] md:w-[92vw] w-[90vw] md:h-fit h-[80vw] rounded-3xl flex flex-col bg-linear-to-b from-[#4F378A] to-[#66005C] ",
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "absolute w-[256px] h-64 bg-[#FF00E5]/20 blur-3xl rounded-full top-1 left-0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: `
            relative
            flex flex-col
            md:items-start items-center
            md:h-auto h-[80vw]
            justify-end
            gap-y-[3vw] md:gap-y-0
            ${i18n.language === "vn" ? "xl:w-full md:w-[45vw]" : "xl:w-full md:w-full"}
            xl:px-16 xl:py-9 md:p-8.5 p-7
            text-white
          `,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.ctaHeading, "md:text-start text-center md:w-auto w-[70%]"),
          children: t("shipment_tracker.shipment_cta_section.title")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.ctaDescription, "opacity-90 font-light xl:w-[50%] md:w-[50%] md:pt-2 pt-0 md:text-start text-center"),
          children: t("shipment_tracker.shipment_cta_section.description")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex flex-row gap-x-[3vw] md:gap-x-[1vw] mt-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_library_AppButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
            to: "/book-a-demo",
            text: t("header.book_a_demo") || "Book a Demo",
            withLeftIcon: true,
            leftIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "size-5"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_library_AppButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
            to: "/#contact-us",
            text: t("header.contact_us") || "Contact Us",
            variant: "secondary",
            withLeftIcon: true,
            leftIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "size-5"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
          src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/footer/footer_cta_image.webp",
          alt: "",
          className: " xl:w-auto md:w-[50%] h-auto absolute xl:top-[-9.5vw] md:top-0 top-[-26vw] md:right-[-4vw] right-0 justify-end "
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("footer", {
      className: "bg-[#F3F4F6] w-full pt-[30vw] pb-[4vw] px-[5vw] md:pt-[10vw] md:pb-[2vw] md:px-[5vw] xl:px-[10vw]",
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "flex flex-col xl:items-start md:items-center md:flex-col xl:flex-row gap-[3vw] md:gap-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex flex-col xl:justify-start xl:items-start justify-center items-center w-full xl:w-[37%] md:w-full md:mb-[0.5vw] mb-[3.5vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "flex flex-row items-center gap-[3vw] md:gap-[1vw] md:mb-0 mb-[2vw]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo.svg",
              alt: "ShipX Logo",
              className: "h-12 w-auto object-contain"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
              src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo_sglink_amilo.svg",
              alt: "Powered by SGLink & Amilo",
              className: "h-8 w-auto object-contain"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
            className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.footerTagline, "md:mb-[1vw] mb-[4vw] xl:text-start md:text-center text-center"),
            style: {
              fontFamily: "Karla, system-ui, -apple-system, sans-serif"
            },
            children: t("footer.tagline")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("p", {
            className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.footerBody, "xl:text-start md:text-center text-center md:w-[65%] xl:w-[85%] xl:mt-0 md:mt-2"),
            children: [t("footer.description_1"), " ", t("footer.description_2")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)("flex flex-row", "gap-2", "xl:justify-center", "xl:items-center", "mt-3"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_library_Dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
              title: "Language",
              items: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.languages,
              selected: selectedLanguage,
              onSelect: language => handleLanguageChange(language),
              direction: "up",
              parentClassName: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)("bg-white hover:bg-secondary-hover active:bg-secondary-active", "border border-violet-300 active:border-secondary-active", "text-primary active:text-white cursor-pointer font-normal", "shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)]", "rounded-md"),
              triggerClassName: "px-4 py-[5px] flex items-center justify-center"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_library_LoginModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
              footer: true,
              placement: "top"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_library_AppButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
              to: "/book-a-demo",
              text: t("header.book_a_demo") || "Book a Demo",
              variant: "primary"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: " w-full xl:w-[70%] md:w-[90%] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[4vw] md:gap-4 auto-rows-min xl:my-0 md:my-6 ",
          children: footerColumnData.map(col => {
            if (col.isGroup) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)(col.className, "gap-[4vw] md:gap-4"),
                children: col.items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FooterColumn, {
                  title: item.title,
                  className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_6__.cn)(
                  // If it's the Legal/Contact group...
                  col.id === "legalAndContact" && index === 0 ? "xl:col-start-3" : "xl:col-start-4"),
                  children: item.content
                }, item.id))
              }, col.id);
            }

            // Quick Links
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "md:col-start-1 xl:col-start-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FooterColumn, {
                title: col.title,
                children: col.content
              })
            }, col.id);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "mt-[4vw] md:mt-4 flex flex-col md:flex-row justify-between items-center text-dark-neutral font-normal text-[14px] pt-[4vw] md:pt-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex flex-row gap-x-[1vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "terms-and-conditions",
            end: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
              children: t("footer.terms_and_conditions")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            children: "\u2022"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            to: "privacy-policy",
            end: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
              children: t("footer.privacy_policy")
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "text-center md:text-left",
          children: ["\xA9 ", new Date().getFullYear(), " ", t("footer.copyright")]
        })]
      })]
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

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

/***/ "./src/scripts/icons/FooterIcons.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/icons/FooterIcons.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationIcon: () => (/* binding */ LocationIcon),
/* harmony export */   MailIcon: () => (/* binding */ MailIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MailIcon = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...props,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
  })]
});
const LocationIcon = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...props,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fillRule: "evenodd",
    d: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    clipRule: "evenodd"
  })
});


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
//# sourceMappingURL=src_scripts_components_Footer_jsx.js.map?ver=aced2569e63b8df9edd1