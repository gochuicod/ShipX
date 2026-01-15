"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_pages_homepage_ServicesSection_jsx"],{

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

/***/ "./src/scripts/components/library/Container.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/library/Container.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Container({
  className,
  children,
  rest
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_1__.cn)(_styles_themeGuide__WEBPACK_IMPORTED_MODULE_0__.themeGuide.paddingX, "max-w-[1440px]", "lg:mx-auto", className),
    ...rest,
    children: children
  });
}

/***/ }),

/***/ "./src/scripts/components/library/Description.jsx":
/*!********************************************************!*\
  !*** ./src/scripts/components/library/Description.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Description)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const descriptionStyles = {
  paragraph: "text-lg leading-[24px] text-[#757577] font-normal"
};
function Description({
  children,
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(className, descriptionStyles.paragraph),
    children: children
  });
}

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

/***/ "./src/scripts/components/library/ServiceCard.jsx":
/*!********************************************************!*\
  !*** ./src/scripts/components/library/ServiceCard.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceCard)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
 // Adjust path as needed



function ServiceCard({
  title,
  description,
  illustration,
  partners = [],
  countryCodes = [],
  ctaText,
  onCtaClick,
  pricingData = [],
  // <--- NEW PROP: Pass the specific array from services_pricing here
  className
}) {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();

  // Initialize state with the first item in the pricing list
  const [selectedService, setSelectedService] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pricingData[0] || null);

  // Update state if the prop changes (e.g., switching languages)
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (pricingData && pricingData.length > 0) {
      setSelectedService(pricingData[0]);
    }
  }, [pricingData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("flex flex-col w-full max-w-[714px] gap-2", className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("relative flex flex-col md:flex-row items-center", "p-8 gap-8 rounded-2xl", "bg-[linear-gradient(135deg,rgba(242,148,255,0.2)_0%,rgba(255,230,255,0.1)_41.83%,rgba(242,148,255,0.2)_100%)]", "border border-white/50 shadow-sm"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "relative w-full md:w-[319px] h-[258px] shrink-0 flex items-center justify-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "absolute inset-0 bg-linear-to-br from-white/0 via-white/75 to-white/75 rounded-2xl opacity-50 pointer-events-none"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: illustration,
          alt: `${title} Illustration`,
          className: "relative z-10 w-full h-full object-contain drop-shadow-xl"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col items-center md:items-start w-full gap-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-col gap-2 w-full text-center md:text-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            className: "font-['Inter'] font-bold text-[20px] leading-6 text-[#FF00E5]",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "font-['Inter'] font-normal text-[14px] leading-4 text-[#364153]",
            children: description
          })]
        }), partners.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-col gap-1 w-full items-center md:items-start",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "font-['Inter'] font-bold text-[12px] leading-3.5 text-[#1E2939]",
            children: [t("services_section.cards.express.partners_label"), ":"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex flex-row flex-wrap justify-center md:justify-start items-center gap-3 mt-1",
            children: partners.map((logoUrl, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: logoUrl,
              alt: "Partner",
              className: "h-5 w-auto object-contain transition-all"
            }, index))
          })]
        }), countryCodes.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-col gap-1 w-full items-center md:items-start",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "font-['Inter'] font-bold text-[12px] leading-3.5 text-[#1E2939]",
            children: [t("services_section.cards.express.country_label"), ":"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex flex-row items-center gap-2 mt-1",
            children: countryCodes.map(code => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "w-[30px] h-[30px] rounded-full overflow-hidden shadow-sm border border-white",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: `https://flagcdn.com/${code}.svg`,
                alt: code,
                className: "w-full h-full object-cover scale-150"
              })
            }, code))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          onClick: onCtaClick,
          className: "mt-2 w-full md:w-auto px-6 py-2 bg-[#FBE0FF] rounded-lg transition-colors cursor-pointer hover:bg-[#f0caff]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "font-['Inter'] font-normal text-[14px] leading-4 text-[#4D525C] text-center block",
            children: ctaText
          })
        })]
      })]
    }), pricingData.length > 0 && selectedService && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-col items-center xl:items-start gap-2 self-stretch bg-white rounded-b-[12px] w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
        className: "font-['Inter'] font-bold text-[16px] leading-5 text-[#1E2939]",
        children: [t("services_section.cards.express.services_covered_label"), ":"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("bg-[linear-gradient(135deg,rgba(242,148,255,0.2)_0%,rgba(255,230,255,0.1)_41.83%,rgba(242,148,255,0.2)_100%)]", "flex flex-row", "justify-between items-center", "w-full", "p-4 rounded-lg"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "font-['Inter'] font-bold md:text-[16px] text-[14px] leading-4 text-[#4D525C] whitespace-nowrap truncate mr-2",
          children: selectedService.service_name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          className: "bg-[#FBE0FF] border border-white text-[#4F378A] px-4 py-2 rounded-sm font-medium whitespace-nowrap",
          children: [selectedService.price, " per ", selectedService.weight]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "flex flex-row flex-wrap justify-center xl:justify-start items-start gap-[5px] w-full",
        children: pricingData.map((service, idx) => {
          const isSelected = selectedService.service_name === service.service_name;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            onClick: () => setSelectedService(service),
            className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("flex flex-row justify-center items-center px-4 py-2 gap-2.5 rounded-lg h-8 cursor-pointer transition-all border", isSelected ? "bg-[#F3E8FF] border-[#7F22FE]" // Active Styles
            : "bg-[#FAF5FF] border-transparent hover:border-[#7F22FE]/30" // Inactive Styles
            ),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("font-['Inter'] font-medium text-[14px] leading-4 whitespace-nowrap", isSelected ? "text-[#6B21A8]" : "text-[#7F22FE]"),
              children: service.service_name
            })
          }, idx);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/library/ServicesItems.jsx":
/*!**********************************************************!*\
  !*** ./src/scripts/components/library/ServicesItems.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServicesItems)
/* harmony export */ });
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ServicesItems({
  icon,
  heading = "",
  description = "",
  variant = "list",
  isActive = false,
  className = "",
  ...rest
}) {
  // Styles strictly following Figma CSS
  const activeShadow = "shadow-[1px_1px_2px_rgba(20,0,0,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]";
  const inactiveShadow = "shadow-[1px_1px_2px_rgba(20,0,0,0.25),inset_-2px_-2px_4px_rgba(154,4,129,0.15)]";
  const baseListStyles = "flex flex-row items-center p-[8px_12px] gap-[12px] \
   w-full \
   h-fit \
   rounded-[8px] transition-all duration-300 cursor-pointer";
  const renderIcon = () => {
    if (!icon) return null;

    // If icon is a string → treat as image src
    if (typeof icon === "string") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: icon,
        alt: heading,
        className: "w-full h-full object-contain",
        draggable: false
      });
    }

    // Otherwise → assume React node (SVG component)
    return icon;
  };

  // STAT VARIANT (The "60 million+" card)
  if (variant === "stat") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("flex flex-col items-center justify-center text-center", className),
      ...rest,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "w-[80px] h-[80px] mb-6 bg-[linear-gradient(135deg,#F3E8FF_0%,#FAE8FF_100%)] rounded-[24px] flex items-center justify-center shrink-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "size-[40px] flex items-center justify-center",
          children: renderIcon()
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        className: "text-[40px] leading-tight font-normal text-[#4F378A] whitespace-pre-line mb-1",
        children: heading
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-[18px] text-[#4F378A]/70 font-medium whitespace-pre-line",
        children: description
      })]
    });
  }

  // LIST VARIANT (The Service Items)
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)(baseListStyles, isActive ? `bg-[#CC00B7] ${activeShadow} border-transparent` : `bg-white ${inactiveShadow} hover:outline hover:outline-1 hover:outline-[#CC00B7]/30`, className),
    ...rest,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "w-[40px] h-[40px] shrink-0 bg-[linear-gradient(135deg,#F3E8FF_0%,#FAE8FF_100%)] rounded-[8px] flex items-center justify-center overflow-hidden",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "relative w-[35px] h-[35px] flex items-center justify-center",
        children: renderIcon()
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__.cn)("font-['Inter'] font-normal text-[16px] leading-[20px] opacity-90", isActive ? "text-white" : "text-[#4F378A]"),
      children: heading
    })]
  });
}

/***/ }),

/***/ "./src/scripts/components/pages/homepage/ServicesSection.jsx":
/*!*******************************************************************!*\
  !*** ./src/scripts/components/pages/homepage/ServicesSection.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServicesSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/themeGuide */ "./src/styles/themeGuide.js");
/* harmony import */ var _styles_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../styles/badge */ "./src/styles/badge.jsx");
/* harmony import */ var _library_ServicesItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/ServicesItems */ "./src/scripts/components/library/ServicesItems.jsx");
/* harmony import */ var _library_ServiceCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/ServiceCard */ "./src/scripts/components/library/ServiceCard.jsx");
/* harmony import */ var _library_HighlightedHeading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/HighlightedHeading */ "./src/scripts/components/library/HighlightedHeading.jsx");
/* harmony import */ var _library_Description__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/Description */ "./src/scripts/components/library/Description.jsx");
/* harmony import */ var _library_AppButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../library/AppButton */ "./src/scripts/components/library/AppButton.jsx");
/* harmony import */ var _library_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../library/Container */ "./src/scripts/components/library/Container.jsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);














function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("express");
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const activeKey = _utils_constants__WEBPACK_IMPORTED_MODULE_12__.servicesSectionCardKeys[activeServiceId];
  const activeStatic = _utils_constants__WEBPACK_IMPORTED_MODULE_12__.servicesSectionCardStaticData[activeServiceId];

  // 1. Fetch the array of pricing objects dynamically based on the active tab
  // This looks at: services_section.cards.[express/commercial/etc].services_covered
  const activePricingData = activeKey ? t(`${activeKey}.services_covered`, {
    returnObjects: true,
    defaultValue: []
  }) : [];

  // 2. Build the data object for the card
  const activeData = activeKey ? {
    title: t(`${activeKey}.title`),
    description: t(`${activeKey}.description`),
    ctaText: t(`${activeKey}.service_name`),
    ...activeStatic
  } : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_library_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col items-center overflow-hidden", _styles_themeGuide__WEBPACK_IMPORTED_MODULE_4__.themeGuide.sectionPaddingY),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      id: "services",
      className: "flex flex-col 2xl:flex-row justify-center items-center 2xl:items-start gap-8 max-md:gap-4 w-full max-w-[1200px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "flex flex-col w-full 2xl:w-[35%] items-center 2xl:items-end text-center 2xl:text-right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styles_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {
          variant: "toolkit",
          size: "default",
          children: t("services_section.badge")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_library_HighlightedHeading__WEBPACK_IMPORTED_MODULE_8__["default"], {
          text: t("services_section.headline"),
          highlight: t("services_section.headline_highlighted"),
          className: "text-2xl font-semibold mt-2",
          disableNewlines: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "flex flex-col flex-1 items-center 2xl:items-start text-center 2xl:text-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_library_Description__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: "mb-4 md:text-base text-sm 2xl:w-[85%]",
          children: t("services_section.description")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_library_AppButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          text: t("services_section.button"),
          withRightIcon: true,
          rightIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "size-5"
          }),
          className: "w-fit",
          to: "/book-a-demo"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "flex flex-col 2xl:flex-row justify-center items-center 2xl:items-start w-full mt-12 gap-8 md:gap-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__.cn)("flex 2xl:flex-col flex-wrap", "justify-center gap-4", "2xl:w-fit w-full", "shrink-0"),
        children: _utils_constants__WEBPACK_IMPORTED_MODULE_12__.servicesSectionServiceItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          onClick: () => setActiveServiceId(item.id),
          className: "cursor-pointer transition-transform duration-200 active:scale-95",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_library_ServicesItems__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "list",
            isActive: activeServiceId === item.id,
            icon: item.icon,
            heading: t(`${_utils_constants__WEBPACK_IMPORTED_MODULE_12__.servicesSectionCardKeys[item.id]}.title`)
          })
        }, item.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "flex justify-center w-full max-w-[714px]",
        children: activeData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_library_ServiceCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          ...activeData,
          onCtaClick: () => console.log(`Inquiry for ${activeData.title}`)
          // 3. Pass the dynamic pricing array here
          ,
          pricingData: activePricingData
        }, activeServiceId)
      })]
    })]
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
//# sourceMappingURL=src_scripts_components_pages_homepage_ServicesSection_jsx.js.map?ver=e0dd8d0f26835edbe4f9