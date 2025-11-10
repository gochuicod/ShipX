"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["src_scripts_components_ui_ContactForm_js"],{

/***/ "./src/scripts/components/ui/ContactForm.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/ui/ContactForm.js ***!
  \**************************************************/
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
/* harmony import */ var _SmartNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SmartNavLink */ "./src/scripts/components/ui/SmartNavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)();
  const [leadSource, setLeadSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("website");
  const [isSent, setIsSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    if (utmSource && utmMedium) {
      const sourceKey = `${utmSource}_${utmMedium}`.toLowerCase();
      setLeadSource(sourceKey);
      return;
    }

    // Fallback to referrer
    const ref = document.referrer || "";
    if (ref.includes("facebook.com")) {
      setLeadSource("facebook_organic");
    } else if (ref.includes("google.com")) {
      setLeadSource("google_organic");
    } else if (ref.trim() !== "") {
      setLeadSource("generic_referral");
    } else {
      setLeadSource("website");
    }
  }, []);
  const onSubmit = async data => {
    try {
      // POST to WordPress
      const wpRes = await fetch("/wp-json/mytheme/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const wpData = await wpRes.json();

      // Prepare CRM payload
      const crmPayload = {
        contactName: data.name,
        email: data.email,
        leadSource,
        services: ["crossborder_shipping"],
        // adjust as needed
        companyId: "8d612638-ffef-4457-a876-05e655dcc93e",
        website: "https://shipx.asia/",
        description: data.message,
        location: wpData.country || "Unknown"
      };

      // POST to CRM API
      const crmRes = await fetch("https://crm.infigroup.co/api/public/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(crmPayload)
      });
      if (!crmRes.ok) {
        throw new Error("Failed to submit to CRM");
      }
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
    className: "flex flex-col gap-y-[1.5vw] md:text-[0.8vw] text-[2.5vw] font-normal z-10 select-none md:w-auto w-full",
    style: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex md:flex-row flex-col gap-x-[1vw] md:gap-y-0 gap-y-[5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          className: "text-nowrap",
          htmlFor: "name",
          children: t("contact_us_section.form.name")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          "aria-invalid": errors.name ? "true" : "false",
          id: "name",
          className: `border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`,
          ...register("name", {
            required: t("contact_us_section.form.name_placeholder")
          }),
          placeholder: errors.name ? errors.name.message : "",
          autoComplete: "name"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          className: "text-nowrap",
          htmlFor: "email",
          children: t("contact_us_section.form.email")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          "aria-invalid": errors.email ? "true" : "false",
          id: "email",
          type: "email",
          className: `border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.email ? "placeholder-red-500" : "placeholder-black/50"}`,
          ...register("email", {
            required: t("contact_us_section.form.email_placeholder_1"),
            pattern: {
              value: /^\S+@\S+$/i,
              message: t("contact_us_section.form.email_placeholder_2")
            }
          }),
          placeholder: errors.email ? errors.email.message : "",
          autoComplete: "email"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          className: "text-nowrap",
          htmlFor: "tel",
          children: t("contact_us_section.form.phone")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          "aria-invalid": errors.phone ? "true" : "false",
          id: "tel",
          type: "tel",
          className: `border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`,
          ...register("phone", {
            pattern: {
              value: /^\+?[\d\s\-()]{7,}$/,
              message: t("contact_us_section.form.phone_placeholder")
            }
          }),
          inputMode: "tel",
          autoComplete: "tel",
          placeholder: errors.phone ? errors.phone.message : ""
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-col md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
        className: "text-nowrap",
        htmlFor: "message",
        children: t("contact_us_section.form.message")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
        "aria-invalid": errors.message ? "true" : "false",
        id: "message",
        className: `border-b border-[#CACACA] w-full resize-none md:h-[5vw] h-[15vw] focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`,
        ...register("message", {
          required: t("contact_us_section.form.message_placeholder")
        }),
        placeholder: errors.message ? errors.message.message : "",
        autoComplete: "off"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.5vw] font-normal justify-start items-center md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "submit",
        disabled: isSubmitting,
        className: " bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100% bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%] transition-[background-position] duration-1000 ease-in-out md:py-[0.6vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)] ",
        children: isSubmitting ? t("contact_us_section.form.button_sending") : isSent ? t("contact_us_section.form.button_sent") : t("contact_us_section.form.button_default")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SmartNavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
        to: "/book-a-demo",
        className: "text-[#4F378A] font-semibold",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(motion_react_client__WEBPACK_IMPORTED_MODULE_2__.MotionButton, {
          type: "button",
          className: "md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer",
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
            className: "absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full",
            children: t("contact_us_section.form.book_a_demo")
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

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
//# sourceMappingURL=src_scripts_components_ui_ContactForm_js.js.map?ver=680981ae84535173f1f1