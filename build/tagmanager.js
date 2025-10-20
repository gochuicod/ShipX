"use strict";
(globalThis["webpackChunkshipx_theme"] = globalThis["webpackChunkshipx_theme"] || []).push([["tagmanager"],{

/***/ "./node_modules/react-gtm-module/dist/Snippets.js":
/*!********************************************************!*\
  !*** ./node_modules/react-gtm-module/dist/Snippets.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _warn = __webpack_require__(/*! ./utils/warn */ "./node_modules/react-gtm-module/dist/utils/warn.js");

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://developers.google.com/tag-manager/quickstart

var Snippets = {
  tags: function tags(_ref) {
    var id = _ref.id,
        events = _ref.events,
        dataLayer = _ref.dataLayer,
        dataLayerName = _ref.dataLayerName,
        preview = _ref.preview,
        auth = _ref.auth;

    var gtm_auth = '&gtm_auth=' + auth;
    var gtm_preview = '&gtm_preview=' + preview;

    if (!id) (0, _warn2.default)('GTM Id is required');

    var iframe = '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + id + gtm_auth + gtm_preview + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>';

    var script = '\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\', ' + JSON.stringify(events).slice(1, -1) + '});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';\n        j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl+\'' + gtm_auth + gtm_preview + '&gtm_cookies_win=x\';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,\'script\',\'' + dataLayerName + '\',\'' + id + '\');';

    var dataLayerVar = this.dataLayer(dataLayer, dataLayerName);

    return {
      iframe: iframe,
      script: script,
      dataLayerVar: dataLayerVar
    };
  },
  dataLayer: function dataLayer(_dataLayer, dataLayerName) {
    return '\n      window.' + dataLayerName + ' = window.' + dataLayerName + ' || [];\n      window.' + dataLayerName + '.push(' + JSON.stringify(_dataLayer) + ')';
  }
};

module.exports = Snippets;

/***/ }),

/***/ "./node_modules/react-gtm-module/dist/TagManager.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-gtm-module/dist/TagManager.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _Snippets = __webpack_require__(/*! ./Snippets */ "./node_modules/react-gtm-module/dist/Snippets.js");

var _Snippets2 = _interopRequireDefault(_Snippets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagManager = {
  dataScript: function dataScript(dataLayer) {
    var script = document.createElement('script');
    script.innerHTML = dataLayer;
    return script;
  },
  gtm: function gtm(args) {
    var snippets = _Snippets2.default.tags(args);

    var noScript = function noScript() {
      var noscript = document.createElement('noscript');
      noscript.innerHTML = snippets.iframe;
      return noscript;
    };

    var script = function script() {
      var script = document.createElement('script');
      script.innerHTML = snippets.script;
      return script;
    };

    var dataScript = this.dataScript(snippets.dataLayerVar);

    return {
      noScript: noScript,
      script: script,
      dataScript: dataScript
    };
  },
  initialize: function initialize(_ref) {
    var gtmId = _ref.gtmId,
        _ref$events = _ref.events,
        events = _ref$events === undefined ? {} : _ref$events,
        dataLayer = _ref.dataLayer,
        _ref$dataLayerName = _ref.dataLayerName,
        dataLayerName = _ref$dataLayerName === undefined ? 'dataLayer' : _ref$dataLayerName,
        _ref$auth = _ref.auth,
        auth = _ref$auth === undefined ? '' : _ref$auth,
        _ref$preview = _ref.preview,
        preview = _ref$preview === undefined ? '' : _ref$preview;

    var gtm = this.gtm({
      id: gtmId,
      events: events,
      dataLayer: dataLayer || undefined,
      dataLayerName: dataLayerName,
      auth: auth,
      preview: preview
    });
    if (dataLayer) document.head.appendChild(gtm.dataScript);
    document.head.insertBefore(gtm.script(), document.head.childNodes[0]);
    document.body.insertBefore(gtm.noScript(), document.body.childNodes[0]);
  },
  dataLayer: function dataLayer(_ref2) {
    var _dataLayer = _ref2.dataLayer,
        _ref2$dataLayerName = _ref2.dataLayerName,
        dataLayerName = _ref2$dataLayerName === undefined ? 'dataLayer' : _ref2$dataLayerName;

    if (window[dataLayerName]) return window[dataLayerName].push(_dataLayer);
    var snippets = _Snippets2.default.dataLayer(_dataLayer, dataLayerName);
    var dataScript = this.dataScript(snippets);
    document.head.insertBefore(dataScript, document.head.childNodes[0]);
  }
};

module.exports = TagManager;

/***/ }),

/***/ "./node_modules/react-gtm-module/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-gtm-module/dist/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _TagManager = __webpack_require__(/*! ./TagManager */ "./node_modules/react-gtm-module/dist/TagManager.js");

var _TagManager2 = _interopRequireDefault(_TagManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _TagManager2.default;

/***/ }),

/***/ "./node_modules/react-gtm-module/dist/utils/warn.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-gtm-module/dist/utils/warn.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var warn = function warn(s) {
  console.warn('[react-gtm]', s);
};

exports["default"] = warn;

/***/ }),

/***/ "./src/tagmanager.js":
/*!***************************!*\
  !*** ./src/tagmanager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGTM: () => (/* binding */ initGTM)
/* harmony export */ });
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-gtm-module */ "./node_modules/react-gtm-module/dist/index.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_0__);

const initGTM = () => {
  react_gtm_module__WEBPACK_IMPORTED_MODULE_0___default().initialize({
    gtmId: "GTM-M77NXRBD"
  });
};

/***/ })

}]);
//# sourceMappingURL=tagmanager.js.map?ver=733d70d1db9324b9f97b