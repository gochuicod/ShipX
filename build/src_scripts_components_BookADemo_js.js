"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_BookADemo_js"],{

/***/ "./src/scripts/components/BookADemo.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/BookADemo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/SEO */ "./src/scripts/components/ui/SEO.js");
/* harmony import */ var _ui_MultiStepLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/MultiStepLoader */ "./src/scripts/components/ui/MultiStepLoader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const BookADemo = () => {
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }); // optional smooth scroll
  }, [pathname]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: t("seo.book_a_demo_page.title"),
      description: t("seo.book_a_demo_page.description"),
      canonical: t("seo.book_a_demo_page.canonical"),
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "w-full md:h-[70vw] h-screen",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
        className: "sr-only",
        children: t("seo.book_a_demo_page.title")
      }), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_MultiStepLoader__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe", {
        src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2xm9gkOC9hplYucI1nHkQApNfYFGrcfsjxq96a-TR3S8ZwacBAz-2lRcgARMGJx9F40_9OP_uO?gv=true",
        title: t("book_a_demo_page.seo.iframeTitle"),
        style: {
          width: "100%",
          height: "100%",
          border: "none"
        },
        onLoad: () => setLoading(false),
        loading: "lazy",
        allowFullScreen: true
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookADemo);

/***/ }),

/***/ "./src/scripts/components/ui/SEO.js":
/*!******************************************!*\
  !*** ./src/scripts/components/ui/SEO.js ***!
  \******************************************/
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

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_BookADemo_js.js.map?ver=3b023ee2a7057f71b5a2