module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/reset/[token].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/reset/[token].js":
/*!********************************!*\
  !*** ./pages/reset/[token].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "E:\\social_network\\gato-cosial\\pages\\reset\\[token].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function TokenPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: newPassword,
    1: setNewPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    field1: "",
    field2: ""
  });
  const {
    field1,
    field2
  } = newPassword;
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setNewPassword(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (field1 !== field2) {
        return setErrorMsg("Mất khẩu không hợp lệ");
      }

      await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default.a}/api/reset/token`, {
        password: field1,
        token: router.query.token
      });
      setSuccess(true);
    } catch (error) {
      setErrorMsg(Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__["default"])(error));
    }

    setLoading(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [success ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
      attached: true,
      success: true,
      size: "large",
      header: "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng",
      icon: "check",
      content: "\u0110\u0103ng nh\u1EADp l\u1EA1i",
      style: {
        cursor: "pointer"
      },
      onClick: () => router.push("/login")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
      attached: true,
      icon: "settings",
      header: "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u",
      color: "teal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this), !success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      loading: loading,
      onSubmit: resetPassword,
      error: errorMsg !== null,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
        error: true,
        header: "Error!",
        content: errorMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
          fluid: true,
          icon: "eye",
          type: "password",
          iconPosition: "left",
          label: "M\u1EADt kh\u1EA9u m\u1EDBi",
          placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi",
          name: "field1",
          onChange: handleChange,
          value: field1,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
          fluid: true,
          icon: "eye",
          type: "password",
          iconPosition: "left",
          label: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u",
          placeholder: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi",
          name: "field2",
          onChange: handleChange,
          value: field2,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          disabled: field1 === "" || field2 === "" || loading,
          icon: "configure",
          type: "submit",
          color: "orange",
          content: "\u0110\u1EB7t l\u1EA1i"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (TokenPage);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const baseUrl = true ? "http://localhost:3000" : undefined;
module.exports = baseUrl;

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzZXQvW3Rva2VuXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiVG9rZW5QYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsInVzZVN0YXRlIiwiZmllbGQxIiwiZmllbGQyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJyZXNldFBhc3N3b3JkIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJiYXNlVXJsIiwicGFzc3dvcmQiLCJ0b2tlbiIsInF1ZXJ5IiwiZXJyb3IiLCJjYXRjaEVycm9ycyIsImN1cnNvciIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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SUE7QUFDTEEsWUFBUSxHQUFHb0IsS0FBSyxDQUFDVSxPQUFqQjtBQUVBRixXQUFPLENBQUNSLEtBQVIsQ0FBY3BCLFFBQWQ7QUFDRDs7QUFDRCxTQUFPQSxRQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJlcUIsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcmVzZXQvW3Rva2VuXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVzZXQvW3Rva2VuXS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFNlZ21lbnQsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuLi8uLi91dGlscy9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBUb2tlblBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoeyBmaWVsZDE6IFwiXCIsIGZpZWxkMjogXCJcIiB9KTtcclxuXHJcbiAgY29uc3QgeyBmaWVsZDEsIGZpZWxkMiB9ID0gbmV3UGFzc3dvcmQ7XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBzZXROZXdQYXNzd29yZChwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBlcnJvck1zZyAhPT0gbnVsbCAmJiBzZXRUaW1lb3V0KCgpID0+IHNldEVycm9yTXNnKG51bGwpLCA1MDAwKTtcclxuICB9LCBbZXJyb3JNc2ddKTtcclxuXHJcbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoZmllbGQxICE9PSBmaWVsZDIpIHtcclxuICAgICAgICByZXR1cm4gc2V0RXJyb3JNc2coXCJN4bqldCBraOG6qXUga2jDtG5nIGjhu6NwIGzhu4dcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3Jlc2V0L3Rva2VuYCwge1xyXG4gICAgICAgIHBhc3N3b3JkOiBmaWVsZDEsXHJcbiAgICAgICAgdG9rZW46IHJvdXRlci5xdWVyeS50b2tlblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvck1zZyhjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c3VjY2VzcyA/IChcclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgYXR0YWNoZWRcclxuICAgICAgICAgIHN1Y2Nlc3NcclxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICBoZWFkZXI9XCLEkOG6t3QgbOG6oWkgbeG6rXQga2jhuql1IHRow6BuaCBjw7RuZ1wiXHJcbiAgICAgICAgICBpY29uPVwiY2hlY2tcIlxyXG4gICAgICAgICAgY29udGVudD1cIsSQxINuZyBuaOG6rXAgbOG6oWlcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW5cIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZCBpY29uPVwic2V0dGluZ3NcIiBoZWFkZXI9XCLEkOG6t3QgbOG6oWkgbeG6rXQga2jhuql1XCIgY29sb3I9XCJ0ZWFsXCIgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHshc3VjY2VzcyAmJiAoXHJcbiAgICAgICAgPEZvcm0gbG9hZGluZz17bG9hZGluZ30gb25TdWJtaXQ9e3Jlc2V0UGFzc3dvcmR9IGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH0+XHJcbiAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXtlcnJvck1zZ30gLz5cclxuXHJcbiAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgIGljb249XCJleWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJN4bqtdCBraOG6qXUgbeG7m2lcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmjhuq1wIG3huq10IGto4bqpdSBt4bubaVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpZWxkMVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQxfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBpY29uPVwiZXllXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiWMOhYyBuaOG6rW4gbeG6rXQga2jhuql1XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIljDoWMgbmjhuq1uIG3huq10IGto4bqpdSBt4bubaVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpZWxkMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQyfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmllbGQxID09PSBcIlwiIHx8IGZpZWxkMiA9PT0gXCJcIiB8fCBsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIGljb249XCJjb25maWd1cmVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwixJDhurd0IGzhuqFpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlblBhZ2U7XHJcbiIsImNvbnN0IGJhc2VVcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXHJcbiAgICA6IFwiXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gKGVycm9yKSA9PiB7XHJcbiAgbGV0IGVycm9yTXNnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JNc2c7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=