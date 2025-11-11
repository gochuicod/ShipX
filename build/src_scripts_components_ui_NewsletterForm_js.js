"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_NewsletterForm_js"],{

/***/ "./src/scripts/components/ui/NewsletterForm.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/ui/NewsletterForm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var motion_react_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion/react-client */ "./node_modules/motion/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)();
  const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onSubmit = async data => {
    try {
      const res = await fetch("/wp-json/mytheme/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "flex flex-row md:justify-start justify-center gap-x-[1vw] md:text-[0.8vw] text-[2.3vw] font-normal z-10 select-none md:w-auto w-full md:pt-[1vw] pt-[5vw]",
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0 bg-linear-to-t from-[#4F378A] to-[#FF00E5] rounded-full"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        type: "email",
        className: `relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-[#8E3CAD] rounded-full ${errors.email ? "placeholder-red-500" : "placeholder-white/50"} text-white focus:outline-none`,
        ...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email"
          }
        }),
        placeholder: errors.email ? errors.email.message : t("newsletter_section.form.placeholder"),
        autoComplete: "email"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      to: "/book-a-demo",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
        type: "submit",
        className: "md:p-[0.10vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
        disabled: isSubmitting,
        whileHover: {
          y: -5,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
          }
        },
        whileTap: {
          scale: 0.9,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 10
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "absolute inset-0 bg-linear-to-t from-[#4F378A] to-[#FF00E5] rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-[#8E3CAD] text-white rounded-full",
          children: isSubmitting ? t("newsletter_section.form.button_sending") : isSent ? t("newsletter_section.form.button_sent") : t("newsletter_section.form.button_default")
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsletterForm);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-UIGDSWPH.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SmartNavLink = ({
  to = "/",
  end = false,
  className,
  children,
  delay = 1000
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
  const handleClick = e => {
    const [pathname, hash] = to.split("#"); // Split route and hash (if any)
    const isSamePath = location.pathname === pathname;

    // Case 1: Link with a hash (e.g. /#services)
    if (hash) {
      e.preventDefault();

      // If on another page, navigate first then scroll
      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth"
            });
          }
        }, 300);
      } else {
        // Already on same page: scroll directly to section
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }

      // Optional: clean up hash from URL after a delay
      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    }

    // Case 2: Normal route navigation (no hash)
    else {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.NavLink, {
    to: to,
    end: end,
    className: className,
    onClick: handleClick,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartNavLink);

/***/ })

}]);
//# sourceMappingURL=src_scripts_components_ui_NewsletterForm_js.js.map?ver=27774365378b2db7db2c