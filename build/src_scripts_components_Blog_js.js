"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_Blog_js"],{

/***/ "./src/scripts/components/Blog.js":
/*!****************************************!*\
  !*** ./src/scripts/components/Blog.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _ui_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/SEO */ "./src/scripts/components/ui/SEO.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var _ui_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/NotFound */ "./src/scripts/components/ui/NotFound.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const Blog = () => {
  const {
    slug
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useParams)();
  const post = blogPosts.find(p => p.slug === slug);
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  if (!post) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_NotFound__WEBPACK_IMPORTED_MODULE_3__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: t("service_headline_section.blogs.blog_1.title"),
      description: t("service_headline_section.blogs.blog_1.description").slice(0, 120),
      canonical: `https://shipx.asia/blog/${slug}`,
      ogImage: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/logo-shipx.webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("article", {
      className: "flex flex-col justify-center items-center md:px-[18vw] px-[10vw] md:py-[5vw] py-[10vw] md:gap-y-[2vw] gap-y-[5vw]",
      style: {
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("nav", {
        "aria-label": "breadcrumb",
        className: "w-full mb-4 text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] text-left",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ol", {
          className: "flex flex-wrap items-center gap-x-[0.5vw]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
              to: "/",
              className: "hover:text-[#1A1A1A]/70 transition-colors",
              children: "Home"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            children: "/"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
              to: "/blog",
              className: "hover:text-[#1A1A1A]/70 transition-colors",
              children: "Blog"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            children: "/"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "text-[#1A1A1A] font-semibold truncate max-w-[20vw]",
            children: t("service_headline_section.blogs.blog_1.title")
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: t("service_headline_section.blogs.blog_1.cover"),
        alt: t("service_headline_section.blogs.blog_1.title"),
        className: "w-full rounded-[2vw] shadow-[0_0vw_1vw_rgba(79,55,138,0.15)]",
        loading: "lazy"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-row gap-x-[1vw] md:text-[0.8vw] text-[2.2vw]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: t("service_headline_section.blogs.blog_1.author")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "text-[#FF00E5]",
          children: t("service_headline_section.blogs.blog_1.date")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
        className: "md:text-[3vw] text-[5vw] font-bold text-center md:leading-[3.5vw] leading-[5.5vw]",
        children: t("service_headline_section.blogs.blog_1.title")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "md:px-[5vw] px-0 md:text-[1.1vw] text-[3vw] md:leading-[1.6vw] leading-[4.5vw] text-normal text-[#1A1A1A]/80",
        dangerouslySetInnerHTML: {
          __html: t("service_headline_section.blogs.blog_1.content")
        }
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./src/scripts/components/ui/NotFound.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/ui/NotFound.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ "./src/scripts/utils/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const NotFound = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `min-h-screen flex flex-col justify-center items-center bg-white text-center ${_utils_constants__WEBPACK_IMPORTED_MODULE_2__.margin}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      className: "md:text-[3vw] text-[7vw] font-extrabold text-[#4F378A]",
      children: "404 \u2014 Page Not Found"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "text-gray-[#1A1A1A]/70 md:text-[0.8vw] text-[3vw] md:my-[1vw] my-[3vw]",
      children: "The page you're looking for doesn't exist or may have been moved."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      type: "button",
      onClick: () => navigate("/"),
      className: " bg-gradient-to-r from-[#4F378A] via-[#FF00E5] to-[#FF00E5] bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%] transition-[background-position] duration-1000 ease-in-out text-white font-semibold rounded-full px-8 py-3 shadow-md hover:shadow-lg cursor-pointer md:text-[0.8vw] text-[3vw] ",
      children: "Go Back Home"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_Blog_js.js.map?ver=7a0548b823fdadabbd39